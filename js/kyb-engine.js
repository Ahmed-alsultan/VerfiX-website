// VerfiX KYB Engine — real working business-verification logic (runs in-browser).
// Registry, directors, UBO ownership, sanctions/PEP screening, adverse media,
// weighted risk scoring, decision routing and an append-only audit log are all
// computed live from the chosen scenario. Illustrative company data — not a live registry.
(function(){

  // ── Scenario fixtures (illustrative) ───────────────────────
  const COMPANIES = {
    clean: {
      name: 'Helvetia Trade GmbH', country: 'CHE', reg: 'CHE-114.225.119', form: 'GmbH',
      incorporated: '2016-03-12', status: 'active',
      directors: [ {name:'A. Keller', role:'Managing Director', pep:false}, {name:'M. Brunner', role:'Director', pep:false} ],
      ubos: [ {name:'A. Keller', pct:100, sanctioned:false, pep:false} ],
      sanctioned:false, adverseMedia:0,
    },
    pep: {
      name: 'Capitol Ventures SA', country: 'FRA', reg: 'FR-812 449 271', form: 'SA',
      incorporated: '2019-09-01', status: 'active',
      directors: [ {name:'J. Laurent', role:'President', pep:true}, {name:'C. Marchand', role:'Director', pep:false} ],
      ubos: [ {name:'J. Laurent', pct:62, sanctioned:false, pep:true}, {name:'C. Marchand', pct:38, sanctioned:false, pep:false} ],
      sanctioned:false, adverseMedia:1,
    },
    opaque: {
      name: 'Meridian Holdings Ltd', country: 'VGB', reg: 'BVI-2,041,887', form: 'Ltd',
      incorporated: '2021-11-23', status: 'active',
      directors: [ {name:'Nominee Services Ltd', role:'Corporate Director', pep:false} ],
      ubos: [ {name:'Undisclosed (nominee chain)', pct:0, sanctioned:false, pep:false} ],
      sanctioned:false, adverseMedia:2, opaqueUbo:true,
    },
    sanctioned: {
      name: 'Volga Exports OOO', country: 'RUS', reg: 'RU-1027700132195', form: 'OOO',
      incorporated: '2008-05-19', status: 'active',
      directors: [ {name:'S. Volkov', role:'General Director', pep:false} ],
      ubos: [ {name:'S. Volkov', pct:100, sanctioned:true, pep:false} ],
      sanctioned:true, adverseMedia:3,
    },
  };

  const STEPS = ['registry','directors','ubo','screening','media','risk'];

  // ── Risk engine — weighted, explainable ────────────────────
  const weights = { sanction:70, opaqueUbo:45, pep:35, adverse:10, inactive:40 };

  function assess(key){
    const c = COMPANIES[key];
    let risk = 0; const reasons = [];
    if (c.status !== 'active') { risk += weights.inactive; reasons.push({signal:'Registry', detail:'Company not active', points:weights.inactive}); }
    if (c.sanctioned || c.ubos.some(u=>u.sanctioned)) { risk += weights.sanction; reasons.push({signal:'Sanctions', detail:'Entity or UBO on a sanctions list', points:weights.sanction}); }
    if (c.opaqueUbo) { risk += weights.opaqueUbo; reasons.push({signal:'UBO', detail:'Beneficial owner not transparent (nominee chain)', points:weights.opaqueUbo}); }
    if (c.directors.some(d=>d.pep) || c.ubos.some(u=>u.pep)) { risk += weights.pep; reasons.push({signal:'PEP', detail:'A director or UBO is politically exposed', points:weights.pep}); }
    if (c.adverseMedia > 0) { const p = Math.min(weights.adverse * c.adverseMedia, 30); risk += p; reasons.push({signal:'Adverse media', detail:c.adverseMedia+' negative-news hit(s)', points:p}); }
    risk = Math.min(100, risk);
    const score = 100 - risk;
    const tier = risk < 35 ? 'low' : risk < 70 ? 'medium' : 'high';
    const decision = tier === 'low' ? 'verified' : tier === 'medium' ? 'review' : 'reject';
    return { score, risk, tier, decision, reasons };
  }

  function route(r){
    if (r.tier === 'low') return { path:'auto_verified', action:'Auto-verified', queue:null };
    if (r.tier === 'medium') return { path:'manual_review', action:'Routed to analyst', queue:'KYB review' };
    return { path:'enhanced_due_diligence', action:'Escalated', queue:'Compliance / EDD' };
  }

  function run(key){
    const c = COMPANIES[key];
    const audit = [];
    const id = 'kyb_' + Math.abs(hash(key + Date.now())).toString(36).slice(0,9);
    const rec = (actor,action,detail)=>audit.push({ts:new Date().toISOString(),actor,action,detail});
    rec('system','kyb.created',`id=${id} company="${c.name}"`);
    rec('Registry','registry.fetched',`reg=${c.reg} status=${c.status} form=${c.form}`);
    rec('Registry','directors.listed',`${c.directors.length} director(s)`);
    rec('Registry','ubo.resolved', c.opaqueUbo ? 'UBO undisclosed (nominee chain)' : c.ubos.map(u=>`${u.name} ${u.pct}%`).join(', '));
    const sancHits = (c.sanctioned?1:0) + c.ubos.filter(u=>u.sanctioned).length;
    rec('AML Screening','sanctions.screened',`hits=${sancHits}`);
    const pepHits = c.directors.filter(d=>d.pep).length + c.ubos.filter(u=>u.pep).length;
    rec('AML Screening','pep.screened',`pep=${pepHits}`);
    rec('Adverse Media','media.screened',`hits=${c.adverseMedia}`);
    const result = assess(key);
    rec('risk-engine','score.computed',`kyb_score=${result.score} tier=${result.tier} decision=${result.decision}`);
    const flow = route(result);
    rec('workflow','routed',`${flow.path} — ${flow.action}`);
    rec('system','kyb.completed',`decision=${result.decision}`);
    return { id, company:c, result, flow, audit, checks:{
      registry: c.status==='active'?'active':'inactive',
      ubo: c.opaqueUbo?'undisclosed':'disclosed',
      sanctions: sancHits>0?'match':'clear',
      pep: pepHits>0?'match':'clear',
      adverse: c.adverseMedia>0?'flagged':'clear',
    }};
  }

  function hash(s){let h=0;s=String(s);for(let i=0;i<s.length;i++){h=(h<<5)-h+s.charCodeAt(i);h|=0;}return h;}

  window.VerfiXKYB = { run, COMPANIES, STEPS, assess };
})();
