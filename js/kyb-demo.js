/* VerfiX KYB live demo — vanilla, drives window.VerfiXKYB. Downloadable report. */
(function () {
  var SCN = {
    clean:      { label: 'Clean Swiss GmbH',      desc: 'Active registry, transparent single owner, no flags' },
    pep:        { label: 'PEP-linked company',     desc: 'A director and owner are politically exposed' },
    opaque:     { label: 'Opaque ownership',       desc: 'Nominee directors, beneficial owner undisclosed' },
    sanctioned: { label: 'Sanctioned entity',      desc: 'Ultimate owner matches a sanctions list' }
  };
  var STEPMETA = [
    { k:'registry',  icon:'fa-building',                label:'Registry' },
    { k:'directors', icon:'fa-user-tie',                label:'Directors' },
    { k:'ubo',       icon:'fa-sitemap',                 label:'UBO structure' },
    { k:'screening', icon:'fa-magnifying-glass-dollar', label:'Sanctions / PEP' },
    { k:'media',     icon:'fa-newspaper',               label:'Adverse media' },
    { k:'risk',      icon:'fa-gauge-high',              label:'Risk score' }
  ];
  function el(t,c,h){var n=document.createElement(t);if(c)n.className=c;if(h!=null)n.innerHTML=h;return n;}

  function ring(score,decision){
    var col = decision==='verified'?'#1f8a5b':decision==='review'?'#C77A0A':'#C8252A';
    var r=52,c=2*Math.PI*r,off=c*(1-score/100);
    return '<svg viewBox="0 0 128 128" class="kyb-ring"><circle cx="64" cy="64" r="'+r+'" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="12"/>'+
      '<circle cx="64" cy="64" r="'+r+'" fill="none" stroke="'+col+'" stroke-width="12" stroke-linecap="round" stroke-dasharray="'+c+'" stroke-dashoffset="'+off+'" transform="rotate(-90 64 64)" class="kyb-ring-fg"/>'+
      '<text x="64" y="60" text-anchor="middle" class="kyb-ring-num">'+score+'</text><text x="64" y="82" text-anchor="middle" class="kyb-ring-lbl">KYB</text></svg>';
  }

  function build(root){
    root.classList.add('kyb');
    var ctrl = el('div','kyb-ctrl');
    ctrl.appendChild(el('div','kyb-ctrl-h','<span class="label">Live KYB demo</span><p>Pick a company profile and run it through the real KYB engine — registry, ownership, sanctions, PEP and risk scoring compute live in your browser.</p>'));
    var picker = el('div','kyb-scns');
    Object.keys(SCN).forEach(function(k,i){
      var b=el('button','kyb-scn'+(i===0?' on':''));b.type='button';b.dataset.k=k;
      b.innerHTML='<b>'+SCN[k].label+'</b><span>'+SCN[k].desc+'</span>';
      b.addEventListener('click',function(){picker.querySelectorAll('.kyb-scn').forEach(function(x){x.classList.remove('on');});b.classList.add('on');state.k=k;});
      picker.appendChild(b);
    });
    var run = el('button','kyb-run','<i class="fas fa-play"></i> Run KYB check');
    ctrl.appendChild(picker); ctrl.appendChild(run);

    var stage = el('div','kyb-stage');
    var pipe = el('div','kyb-pipe');
    STEPMETA.forEach(function(s){var n=el('div','kyb-step');n.dataset.k=s.k;n.innerHTML='<span class="kyb-step-ic"><i class="fas '+s.icon+'"></i></span><span class="kyb-step-lbl">'+s.label+'</span><span class="kyb-step-stat"><i class="fas fa-circle"></i></span>';pipe.appendChild(n);});
    var result = el('div','kyb-result','<div class="kyb-empty"><i class="fas fa-building-shield"></i><p>Run a company profile to see the verification result, ownership structure and audit trail.</p></div>');
    stage.appendChild(pipe); stage.appendChild(result);
    root.appendChild(ctrl); root.appendChild(stage);

    var state = { k:'clean', busy:false, last:null };
    run.addEventListener('click', function(){ if(!state.busy) execute(); });

    function execute(){
      if(!window.VerfiXKYB){result.innerHTML='<div class="kyb-empty"><p>Engine not loaded.</p></div>';return;}
      state.busy=true;run.disabled=true;run.innerHTML='<i class="fas fa-spinner fa-spin"></i> Running…';
      pipe.querySelectorAll('.kyb-step').forEach(function(n){n.className='kyb-step';n.querySelector('.kyb-step-stat').innerHTML='<i class="fas fa-circle"></i>';});
      result.innerHTML='<div class="kyb-empty kyb-running"><i class="fas fa-spinner fa-spin"></i><p>Resolving registry &amp; ownership…</p></div>';
      var out = window.VerfiXKYB.run(state.k); state.last = out;
      var i=0;
      (function tick(){
        if(i<STEPMETA.length){
          var k=STEPMETA[i].k, node=pipe.querySelector('.kyb-step[data-k="'+k+'"]');
          node.classList.add('active');
          setTimeout(function(){node.classList.remove('active');node.classList.add('done');var st=stepStat(k,out);node.classList.add(st.cls);node.querySelector('.kyb-step-stat').innerHTML='<i class="fas '+st.icon+'"></i>';i++;tick();},520);
        } else { render(out); state.busy=false; run.disabled=false; run.innerHTML='<i class="fas fa-play"></i> Run KYB check'; }
      })();
    }
    function stepStat(k,out){
      var c=out.checks;
      if(k==='registry') return c.registry==='active'?ok():bad();
      if(k==='ubo') return c.ubo==='disclosed'?ok():warn();
      if(k==='screening') return (c.sanctions==='match')?bad():(c.pep==='match'?warn():ok());
      if(k==='media') return c.adverse==='clear'?ok():warn();
      return out.result.decision==='reject'?bad():out.result.decision==='review'?warn():ok();
      function ok(){return{cls:'ok',icon:'fa-circle-check'};}function warn(){return{cls:'warn',icon:'fa-circle-exclamation'};}function bad(){return{cls:'bad',icon:'fa-circle-xmark'};}
    }
    function ok(){return{cls:'ok',icon:'fa-circle-check'};} function warn(){return{cls:'warn',icon:'fa-circle-exclamation'};} function bad(){return{cls:'bad',icon:'fa-circle-xmark'};}

    function render(out){
      var c=out.company, r=out.result, flow=out.flow;
      var decLabel = r.decision==='verified'?'Verified':r.decision==='review'?'Manual review':'Rejected';
      var dirs = c.directors.map(function(d){return '<li><span>'+d.name+'</span><span class="kyb-muted">'+d.role+(d.pep?' · <b style="color:#C77A0A">PEP</b>':'')+'</span></li>';}).join('');
      var ubos = c.opaqueUbo ? '<li class="kyb-bad-row"><i class="fas fa-triangle-exclamation"></i> Beneficial owner undisclosed (nominee chain)</li>'
        : c.ubos.map(function(u){return '<li><span>'+u.name+(u.sanctioned?' · <b style="color:#C8252A">SANCTIONED</b>':'')+(u.pep?' · <b style="color:#C77A0A">PEP</b>':'')+'</span><span class="kyb-muted">'+u.pct+'%</span></li>';}).join('');
      var reasons = r.reasons.length ? r.reasons.map(function(x){return '<li><span class="kyb-rsn-sig">'+x.signal+'</span><span class="kyb-rsn-det">'+x.detail+'</span><span class="kyb-rsn-pts">+'+x.points+'</span></li>';}).join('')
        : '<li class="kyb-rsn-clean"><i class="fas fa-circle-check"></i> No risk signals — all checks passed</li>';
      var audit = out.audit.map(function(a){return '<div class="kyb-log"><span class="kyb-log-actor">'+a.actor+'</span><span class="kyb-log-act">'+a.action+'</span><span class="kyb-log-det">'+a.detail+'</span></div>';}).join('');

      result.innerHTML =
        '<div class="kyb-decision kyb-'+r.decision+'"><div class="kyb-ringwrap">'+ring(r.score,r.decision)+'</div>'+
          '<div class="kyb-dec-meta"><span class="kyb-pill kyb-pill-'+r.decision+'">'+decLabel+'</span>'+
            '<div class="kyb-co">'+c.name+'</div>'+
            '<div class="kyb-dec-row"><span>Registry</span><b>'+c.reg+' · '+c.form+'</b></div>'+
            '<div class="kyb-dec-row"><span>Risk tier</span><b>'+r.tier.toUpperCase()+'</b></div>'+
            '<div class="kyb-dec-row"><span>Workflow</span><b>'+flow.action+(flow.queue?' · '+flow.queue:'')+'</b></div></div></div>'+
        '<div class="kyb-cols"><div class="kyb-panel"><h4>Directors</h4><ul class="kyb-list">'+dirs+'</ul></div>'+
          '<div class="kyb-panel"><h4>Ultimate beneficial owners</h4><ul class="kyb-list">'+ubos+'</ul></div></div>'+
        '<div class="kyb-panel"><h4>Why this decision</h4><ul class="kyb-reasons">'+reasons+'</ul></div>'+
        '<div class="kyb-panel"><h4>Audit trail <span class="kyb-mono-tag">append-only</span></h4><div class="kyb-logs">'+audit+'</div></div>'+
        '<div class="kyb-actions"><button class="kyb-dl" id="kyb-dl"><i class="fas fa-file-arrow-down"></i> Download report</button></div>';
      document.getElementById('kyb-dl').addEventListener('click', function(){ downloadReport(out); });
    }

    function downloadReport(out){
      var c=out.company,r=out.result,flow=out.flow;
      var rows = out.audit.map(function(a){return '<tr><td>'+a.ts+'</td><td>'+a.actor+'</td><td>'+a.action+'</td><td>'+a.detail+'</td></tr>';}).join('');
      var reasons = r.reasons.length? r.reasons.map(function(x){return '<li><b>'+x.signal+'</b> — '+x.detail+' (+'+x.points+')</li>';}).join('') : '<li>No risk signals — all checks passed</li>';
      var ubos = c.opaqueUbo?'<li>Beneficial owner undisclosed (nominee chain)</li>':c.ubos.map(function(u){return '<li>'+u.name+' — '+u.pct+'%'+(u.sanctioned?' [SANCTIONED]':'')+(u.pep?' [PEP]':'')+'</li>';}).join('');
      var dirs = c.directors.map(function(d){return '<li>'+d.name+' — '+d.role+(d.pep?' [PEP]':'')+'</li>';}).join('');
      var decLabel=r.decision==='verified'?'VERIFIED':r.decision==='review'?'MANUAL REVIEW':'REJECTED';
      var html='<!DOCTYPE html><html><head><meta charset="utf-8"><title>VerfiX KYB Report — '+c.name+'</title>'+
        '<style>body{font-family:system-ui,Arial,sans-serif;color:#1A1F2E;max-width:820px;margin:40px auto;padding:0 24px;line-height:1.55}h1{color:#1A1F2E;border-bottom:3px solid #C8252A;padding-bottom:10px}h2{color:#C8252A;font-size:15px;text-transform:uppercase;letter-spacing:.05em;margin-top:28px}.score{font-size:46px;font-weight:800}.dec{display:inline-block;padding:6px 16px;border-radius:6px;font-weight:700;background:#1A1F2E;color:#fff}table{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}td,th{border:1px solid #e4e7ec;padding:6px 8px;text-align:left}th{background:#f5f6f8}ul{padding-left:18px}.muted{color:#8a93a3;font-size:12px}</style></head><body>'+
        '<h1>VerfiX — KYB Verification Report</h1>'+
        '<p class="muted">Report ID: '+out.id+' · Generated '+new Date().toLocaleString()+' · Illustrative demo data — not a live registry record.</p>'+
        '<h2>Company</h2><p><b>'+c.name+'</b><br>Registry: '+c.reg+' · '+c.form+' · '+c.country+'<br>Incorporated: '+c.incorporated+' · Status: '+c.status+'</p>'+
        '<h2>Decision</h2><p><span class="score" style="color:'+(r.decision==='verified'?'#1f8a5b':r.decision==='review'?'#C77A0A':'#C8252A')+'">'+r.score+'</span> / 100 KYB score &nbsp; <span class="dec">'+decLabel+'</span><br>Risk tier: '+r.tier.toUpperCase()+' · Workflow: '+flow.action+(flow.queue?' ('+flow.queue+')':'')+'</p>'+
        '<h2>Directors</h2><ul>'+dirs+'</ul>'+
        '<h2>Ultimate Beneficial Owners</h2><ul>'+ubos+'</ul>'+
        '<h2>Risk signals</h2><ul>'+reasons+'</ul>'+
        '<h2>Audit trail</h2><table><tr><th>Timestamp</th><th>Actor</th><th>Action</th><th>Detail</th></tr>'+rows+'</table>'+
        '<p class="muted" style="margin-top:30px">VerfiX AG · Trust Valley, Lausanne · This report is generated by the VerfiX KYB demo engine for illustration. VerfiX holds no FINMA, PCI or eIDAS certification at this stage.</p>'+
        '</body></html>';
      var blob=new Blob([html],{type:'text/html'});
      var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='VerfiX-KYB-Report-'+c.name.replace(/[^a-z0-9]+/gi,'-')+'.html';document.body.appendChild(a);a.click();a.remove();
    }
  }

  function init(){ document.querySelectorAll('[data-vx-kyb]').forEach(build); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
