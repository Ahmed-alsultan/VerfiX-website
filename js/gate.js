/* VerfiX lead gate — gated downloads. Set FORM_ENDPOINT to your backend (Formspree id). */
(function(){
  var FORM_ENDPOINT='https://formspree.io/f/your-id'; // TODO: replace with real endpoint
  function modal(){
    var w=document.createElement('div');w.id='vx-gate';w.innerHTML=
    '<div class="vxg-back"></div><div class="vxg-card" role="dialog" aria-modal="true">'+
      '<button class="vxg-x" aria-label="Close">&times;</button>'+
      '<div class="vxg-eyebrow">Gated resource</div>'+
      '<h3 class="vxg-title">Get the download</h3>'+
      '<p class="vxg-sub">Tell us who you are and we will unlock the file. We use this only to follow up — no spam.</p>'+
      '<form class="vxg-form">'+
        '<label>Full name<input name="name" required placeholder="Your name"></label>'+
        '<label>Work email<input name="email" type="email" required placeholder="you@company.com"></label>'+
        '<label>Company<input name="company" required placeholder="Organization"></label>'+
        '<label>Role<input name="role" placeholder="Your role (optional)"></label>'+
        '<input type="hidden" name="resource">'+
        '<button type="submit" class="vxg-go">Unlock download</button>'+
        '<p class="vxg-status"></p>'+
      '</form></div>';
    document.body.appendChild(w);return w;
  }
  window.vxGate=function(opts){
    opts=opts||{};var w=document.getElementById('vx-gate')||modal();
    w.classList.add('open');
    w.querySelector('.vxg-title').textContent=opts.title||'Get the download';
    w.querySelector('[name=resource]').value=opts.resource||opts.file||'';
    var form=w.querySelector('.vxg-form'),status=w.querySelector('.vxg-status');
    status.textContent='';status.className='vxg-status';
    function close(){w.classList.remove('open');}
    w.querySelector('.vxg-x').onclick=close;w.querySelector('.vxg-back').onclick=close;
    form.onsubmit=function(e){
      e.preventDefault();
      var btn=form.querySelector('.vxg-go');btn.disabled=true;btn.textContent='Submitting…';
      var data=new FormData(form);
      fetch(FORM_ENDPOINT,{method:'POST',body:data,headers:{'Accept':'application/json'}})
        .then(function(r){return r.ok?r:Promise.reject(r);})
        .then(function(){
          status.className='vxg-status ok';status.textContent='Thank you — opening your download…';
          setTimeout(function(){ if(opts.file) window.open(opts.file,'_blank'); close(); btn.disabled=false;btn.textContent='Unlock download'; form.reset(); },700);
        })
        .catch(function(){
          // Even if the backend is not yet configured, still deliver the file so the UX works.
          status.className='vxg-status ok';status.textContent='Opening your download…';
          setTimeout(function(){ if(opts.file) window.open(opts.file,'_blank'); close(); btn.disabled=false;btn.textContent='Unlock download'; },700);
        });
      return false;
    };
  };
})();