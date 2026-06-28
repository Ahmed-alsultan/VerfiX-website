/* VerfiX live verification demo — vanilla, drives the real window.VerfiXEngine. */
(function () {
  var SCENARIOS = {
    clean:    { label: 'Clean applicant',      desc: 'Valid document, strong biometric, no AML hit', firstName: 'Anna',   lastName: 'Keller',    country: 'CHE', docType: 'passport',  faceMatch: 'high', amlHit: null,       tampered: false },
    pep:      { label: 'Politically exposed',   desc: 'Valid identity, but a PEP match on screening', firstName: 'Marco',  lastName: 'Bianchi',   country: 'ITA', docType: 'id_card',   faceMatch: 'high', amlHit: 'pep',      tampered: false },
    tampered: { label: 'Tampered document',     desc: 'Document integrity fails, weak selfie match',  firstName: 'David',  lastName: 'Hofer',     country: 'DEU', docType: 'id_card',   faceMatch: 'low',  amlHit: null,       tampered: true  },
    sanction: { label: 'Sanctions hit',         desc: 'Applicant matches a live sanctions list',      firstName: 'Sergei', lastName: 'Volkov',    country: 'RUS', docType: 'passport',  faceMatch: 'high', amlHit: 'sanction', tampered: false }
  };

  var STEPS = [
    { key: 'document', icon: 'fa-id-card',                 label: 'Document & OCR' },
    { key: 'face',     icon: 'fa-face-smile',              label: 'Face & liveness' },
    { key: 'aml',      icon: 'fa-magnifying-glass-dollar', label: 'AML screening' },
    { key: 'engine',   icon: 'fa-gauge-high',              label: 'Trust Engine' }
  ];

  function el(tag, cls, html) { var n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; }

  function ringSVG(score, decision) {
    var col = decision === 'approve' ? '#1f8a5b' : decision === 'review' ? '#C77A0A' : '#C8252A';
    var r = 52, c = 2 * Math.PI * r, off = c * (1 - score / 100);
    return '<svg viewBox="0 0 128 128" class="vxd-ring">' +
      '<circle cx="64" cy="64" r="' + r + '" fill="none" stroke="rgba(255,255,255,.10)" stroke-width="12"/>' +
      '<circle cx="64" cy="64" r="' + r + '" fill="none" stroke="' + col + '" stroke-width="12" stroke-linecap="round" ' +
      'stroke-dasharray="' + c + '" stroke-dashoffset="' + off + '" transform="rotate(-90 64 64)" class="vxd-ring-fg"/>' +
      '<text x="64" y="60" text-anchor="middle" class="vxd-ring-num">' + score + '</text>' +
      '<text x="64" y="82" text-anchor="middle" class="vxd-ring-lbl">TRUST</text></svg>';
  }

  function build(root) {
    root.classList.add('vxd');
    // Controls
    var ctrl = el('div', 'vxd-ctrl');
    var sk = Object.keys(SCENARIOS);
    var picker = el('div', 'vxd-scenarios');
    sk.forEach(function (k, i) {
      var b = el('button', 'vxd-scn' + (i === 0 ? ' on' : ''));
      b.type = 'button'; b.dataset.k = k;
      b.innerHTML = '<b>' + SCENARIOS[k].label + '</b><span>' + SCENARIOS[k].desc + '</span>';
      b.addEventListener('click', function () {
        picker.querySelectorAll('.vxd-scn').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on'); state.scenario = k;
      });
      picker.appendChild(b);
    });
    var run = el('button', 'vxd-run', '<i class="fas fa-play"></i> Run verification');
    ctrl.appendChild(el('div', 'vxd-ctrl-h', '<span class="label">Live demo</span><p>Pick a scenario and run it through the real Trust Engine — OCR, biometrics, AML and scoring all compute in your browser.</p>'));
    ctrl.appendChild(picker);
    ctrl.appendChild(run);

    // Stage
    var stage = el('div', 'vxd-stage');
    var pipe = el('div', 'vxd-pipe');
    STEPS.forEach(function (s) {
      var n = el('div', 'vxd-step'); n.dataset.k = s.key;
      n.innerHTML = '<span class="vxd-step-ic"><i class="fas ' + s.icon + '"></i></span><span class="vxd-step-lbl">' + s.label + '</span><span class="vxd-step-stat"><i class="fas fa-circle"></i></span>';
      pipe.appendChild(n);
    });
    var result = el('div', 'vxd-result');
    result.innerHTML = '<div class="vxd-empty"><i class="fas fa-shield-halved"></i><p>Run a scenario to see the live decision, score breakdown and audit trail.</p></div>';
    stage.appendChild(pipe);
    stage.appendChild(result);

    root.appendChild(ctrl);
    root.appendChild(stage);

    var state = { scenario: 'clean', busy: false };
    run.addEventListener('click', function () { if (!state.busy) execute(); });

    function reset() {
      pipe.querySelectorAll('.vxd-step').forEach(function (n) { n.className = 'vxd-step'; n.querySelector('.vxd-step-stat').innerHTML = '<i class="fas fa-circle"></i>'; });
    }

    function execute() {
      if (!window.VerfiXEngine) { result.innerHTML = '<div class="vxd-empty"><p>Engine not loaded.</p></div>'; return; }
      state.busy = true; run.disabled = true; run.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Running…';
      reset();
      result.innerHTML = '<div class="vxd-empty vxd-running"><i class="fas fa-spinner fa-spin"></i><p>Processing signals…</p></div>';
      var input = Object.assign({ type: SCENARIOS[state.scenario].amlHit ? 'kyc' : 'kyc' }, SCENARIOS[state.scenario]);
      var out = window.VerfiXEngine.runVerification(input);

      var order = STEPS.slice();
      var i = 0;
      (function tick() {
        if (i < order.length) {
          var k = order[i].key;
          var node = pipe.querySelector('.vxd-step[data-k="' + k + '"]');
          node.classList.add('active');
          setTimeout(function () {
            node.classList.remove('active'); node.classList.add('done');
            var ok = stepStatus(k, out);
            node.classList.add(ok.cls);
            node.querySelector('.vxd-step-stat').innerHTML = '<i class="fas ' + ok.icon + '"></i>';
            i++; tick();
          }, 560);
        } else {
          render(out);
          state.busy = false; run.disabled = false; run.innerHTML = '<i class="fas fa-play"></i> Run verification';
        }
      })();
    }

    function stepStatus(k, out) {
      var c = out.response.checks;
      if (k === 'document') return c.document === 'passed' ? { cls: 'ok', icon: 'fa-circle-check' } : { cls: 'bad', icon: 'fa-circle-xmark' };
      if (k === 'face') return c.face === 'passed' ? { cls: 'ok', icon: 'fa-circle-check' } : { cls: 'warn', icon: 'fa-circle-exclamation' };
      if (k === 'aml') return c.aml === 'clear' ? { cls: 'ok', icon: 'fa-circle-check' } : { cls: 'bad', icon: 'fa-circle-exclamation' };
      return { cls: 'ok', icon: 'fa-circle-check' };
    }

    function render(out) {
      var r = out.detail.result, flow = out.detail.flow;
      var decLabel = r.decision === 'approve' ? 'Approved' : r.decision === 'review' ? 'Manual review' : 'Rejected';
      var reasons = r.reasons.length
        ? r.reasons.map(function (x) { return '<li><span class="vxd-rsn-sig">' + x.signal + '</span><span class="vxd-rsn-det">' + x.detail + '</span><span class="vxd-rsn-pts">+' + x.points + '</span></li>'; }).join('')
        : '<li class="vxd-rsn-clean"><i class="fas fa-circle-check"></i> No risk signals — all checks passed</li>';
      var audit = out.audit.map(function (a) {
        return '<div class="vxd-log"><span class="vxd-log-actor">' + a.actor + '</span><span class="vxd-log-act">' + a.action + '</span><span class="vxd-log-det">' + a.detail + '</span></div>';
      }).join('');

      result.innerHTML =
        '<div class="vxd-decision vxd-' + r.decision + '">' +
          '<div class="vxd-ringwrap">' + ringSVG(r.trust_score, r.decision) + '</div>' +
          '<div class="vxd-dec-meta">' +
            '<span class="vxd-pill vxd-pill-' + r.decision + '">' + decLabel + '</span>' +
            '<div class="vxd-dec-row"><span>Risk tier</span><b>' + r.risk_tier.toUpperCase() + '</b></div>' +
            '<div class="vxd-dec-row"><span>Workflow</span><b>' + flow.action + '</b></div>' +
            '<div class="vxd-dec-row"><span>Routed to</span><b>' + (flow.queue || 'Straight-through') + '</b></div>' +
          '</div>' +
        '</div>' +
        '<div class="vxd-panel"><h4>Why this decision</h4><ul class="vxd-reasons">' + reasons + '</ul></div>' +
        '<div class="vxd-panel"><h4>API response <span class="vxd-mono-tag">POST /v2/verifications</span></h4>' +
          '<pre class="vxd-json">' + syntax(JSON.stringify(out.response, null, 2)) + '</pre></div>' +
        '<div class="vxd-panel"><h4>Audit trail <span class="vxd-mono-tag">append-only</span></h4><div class="vxd-logs">' + audit + '</div></div>';
    }

    function syntax(j) {
      return j.replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/"([^"]+)":/g, '<span class="jk">"$1"</span>:')
        .replace(/: "([^"]*)"/g, ': <span class="js">"$1"</span>')
        .replace(/: (\d+)/g, ': <span class="jn">$1</span>')
        .replace(/: (true|false)/g, ': <span class="jb">$1</span>');
    }
  }

  function init() {
    var roots = document.querySelectorAll('[data-vx-demo]');
    roots.forEach(build);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
