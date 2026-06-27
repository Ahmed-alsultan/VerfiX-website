/* ═══ INDUSTRY DATA ═══ */
var IND = {
  banking:{n:'Banking & Wealth',uses:['Customer KYC onboarding','Telephone banking authentication','Account recovery','Fraud prevention'],stack:['Document Verification','Face Verification','Voice Verification','AML Screening','Trust Engine™'],benefits:['Faster customer onboarding','Lower fraud exposure','Stronger compliance posture'],dep:'Private Cloud or On-Premise'},
  fintech:{n:'Fintech',uses:['Digital customer onboarding','Merchant onboarding','KYC automation','API-based AML'],stack:['Document Verification','Face Verification','AML Screening','Risk Rules Engine','Trust Engine™'],benefits:['Faster growth','Lower operational cost','Scalable compliance'],dep:'SaaS or Swiss Dedicated'},
  crypto:{n:'Crypto & Digital Assets',uses:['Exchange onboarding','Wallet verification','KYB for VASPs','Sanctions screening'],stack:['Document Verification','KYB Verification','Sanctions Screening','Fraud Intelligence','Trust Engine™'],benefits:['VASP compliance','Fraud prevention','Regulatory confidence'],dep:'SaaS or Swiss Dedicated'},
  insurance:{n:'Insurance',uses:['Customer onboarding','Claims identity verification','Voice authentication','Fraud prevention'],stack:['Document Verification','Face Verification','Voice Verification','AML Screening','Trust Engine™'],benefits:['Reduced claims fraud','Better customer experience','Audit-ready records'],dep:'Private Cloud or On-Premise'},
  gov:{n:'Government',uses:['Citizen identity verification','Digital service onboarding','Secure access control','Audit-ready workflows'],stack:['Document Verification','Face Verification','Trust Engine™','Audit Logs'],benefits:['Secure digital services','Full audit compliance','Data sovereignty'],dep:'On-Premise'},
  health:{n:'Healthcare',uses:['Patient identity verification','Secure access management','Identity-linked compliance'],stack:['Document Verification','Face Verification','Trust Engine™'],benefits:['Secure patient access','Compliance support','Audit trail'],dep:'Private Cloud or On-Premise'},
  telecom:{n:'Telecom',uses:['SIM registration','Remote customer onboarding','SIM-swap prevention'],stack:['Document Verification','Face Verification','Voice Verification'],benefits:['Regulatory compliance','Fraud reduction','Remote onboarding'],dep:'SaaS or Swiss Dedicated'},
  mobility:{n:'Mobility & Transportation',uses:['Driver identity verification','Fleet user onboarding','Identity-based access control'],stack:['Document Verification','Face Verification','Trust Engine™'],benefits:['Faster onboarding','Access security','Fraud prevention'],dep:'SaaS'},
  mkt:{n:'Marketplaces',uses:['Seller onboarding','Merchant verification','Fraud prevention','Trust &amp; safety'],stack:['Document Verification','KYB Verification','AML Screening','Trust Engine™'],benefits:['Platform trust','Fraud reduction','Seller compliance'],dep:'SaaS'},
  re:{n:'Real Estate',uses:['Tenant identity verification','Residence permit checks','Business verification','Application audit trail'],stack:['Document Verification','Face Verification','KYB Verification'],benefits:['Tenant trust','Fraud reduction','Audit trail'],dep:'SaaS or Swiss Dedicated'}
};

function showInd(id){
  var d=IND[id];
  if(!d)return;
  document.querySelectorAll('.mi-item').forEach(function(el){el.classList.toggle('active',el.dataset.ind===id);});
  var p=document.getElementById('mi-panel');
  p.innerHTML=
    '<div style="font-size:.82rem;font-weight:800;letter-spacing:-.01em;color:var(--t);margin-bottom:.875rem;">'+d.n+'</div>'+
    '<div class="mi-sec" style="margin-top:0;">Use Cases</div>'+
    d.uses.map(function(u){return '<div class="mi-li">'+u+'</div>';}).join('')+
    '<div class="mi-sec" style="margin-top:.72rem;">Recommended Stack</div>'+
    d.stack.map(function(s){return '<div class="mi-check"><i class="fas fa-check"></i>'+s+'</div>';}).join('')+
    '<div class="mi-sec" style="margin-top:.72rem;">Key Benefits</div>'+
    d.benefits.map(function(b){return '<div class="mi-check"><i class="fas fa-check"></i>'+b+'</div>';}).join('')+
    '<div class="mi-dep-badge" style="margin-top:.72rem;"><i class="fas fa-server" style="font-size:.55rem;"></i>'+d.dep+'</div>'+
    '<div style="margin-top:.875rem;"><a onclick="navClose(\'contact\')" class="btn btn-r btn-sm" style="font-size:.74rem;">Get Industry Demo</a></div>';
}

/* ═══ PAGES ═══ */
var curPg='home';
function nav(id){
  document.querySelectorAll('.pg').forEach(function(p){p.classList.remove('on');});
  var t=document.getElementById('pg-'+id);
  if(t){t.classList.add('on');curPg=id;}
  else{document.getElementById('pg-home').classList.add('on');curPg='home';}
  window.scrollTo({top:0,behavior:'smooth'});
  closeMob();closeAll();
  setTimeout(initRv,60);
}
function navClose(id){closeAll();nav(id);}

/* ═══ MENUS ═══ */
var openM=null;
function toggleMenu(id){
  var ni=document.getElementById('ni-'+id);
  if(!ni)return;
  if(ni.classList.contains('open')){closeAll();return;}
  closeAll();
  ni.classList.add('open');
  openM=id;
}
function closeAll(){
  document.querySelectorAll('.ni').forEach(function(el){el.classList.remove('open');});
  openM=null;
}
document.addEventListener('click',function(e){if(!e.target.closest('.ni'))closeAll();});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeAll();closeMob();}});

/* ═══ MOBILE ═══ */
document.getElementById('ham-btn').addEventListener('click',function(){
  var m=document.getElementById('mob');
  if(m.classList.contains('open')){closeMob();}
  else{m.classList.add('open');m.style.display='flex';}
});
function closeMob(){var m=document.getElementById('mob');m.classList.remove('open');m.style.display='none';}

/* ═══ DEPLOYMENT TABS ═══ */
function setDep(id){
  var ids=['saas','swiss','private','onprem'];
  document.querySelectorAll('.dep-tab').forEach(function(t,i){t.classList.toggle('on',ids[i]===id);});
  document.querySelectorAll('.dep-panel').forEach(function(p){p.classList.remove('on');});
  var panel=document.getElementById('dep-'+id);
  if(panel)panel.classList.add('on');
}


/* ═══ TRANSLATIONS ═══ */
var T = {
  en: {
    /* Nav */
    nav_industries:'Industries', nav_products:'Products', nav_solutions:'Solutions',
    nav_resources:'Resources', nav_company:'Company',
    nav_sales:'Talk to Sales', nav_demo:'Book a Demo',
    /* Hero */
    h_kicker:'Swiss-Built · Enterprise-Grade',
    h_title:'Verify Identity.<br/>Prevent Fraud.<br/>Automate Compliance.<br/><em>One Infrastructure Layer.</em>',
    h_sub:'VerfiX unifies identity verification, fraud intelligence, AML compliance, and trust scoring into one platform for banks, fintechs, insurers, governments, and other regulated organizations.',
    h_cta1:'Book a Demo', h_cta2:'Explore Platform',
    /* Trust Engine */
    te_label:'Trust Engine™', te_title:'The decision layer behind trusted digital onboarding.',
    te_sub:'Every identity signal, compliance check, and fraud indicator converges into one structured decision — Approve, Review, or Reject.',
    te_approve:'Approve', te_review:'Review', te_reject:'Reject',
    /* Gateway */
    gw_label:'New Product', gw_title:'VerfiX Gateway',
    gw_sub:'One API to verify trusted digital identities across Europe.',
    gw_m1_n:'~3s', gw_m1_l:'Credential verification', gw_m1_s:'Designed for real-time decisioning',
    gw_m2_n:'27+', gw_m2_l:'EU country coverage', gw_m2_s:'Built for eIDAS 2.0 compatibility',
    gw_m3_n:'1 API', gw_m3_l:'One integration', gw_m3_s:'For banks and regulated organizations',
    gw_m4_n:'1 layer', gw_m4_l:'Trust verification', gw_m4_s:'Issuer, credential, signature, revocation',
    /* Trust Score Demo */
    ts_label:'Interactive Demo', ts_title:'See how VerfiX builds a trust decision.',
    ts_sub:'Click any signal to understand what VerfiX checks — then see how it combines into one final decision.',
    ts_live:'Live Trust Decision',
    sig_doc:'Document Verification', sig_doc_desc:'Checks document authenticity, OCR data, expiry date, forgery signals, and issuing authority.',
    sig_face:'Face Match & Liveness', sig_face_desc:'Confirms the person matches the submitted identity document. Liveness check detects deepfakes.',
    sig_voice:'Voice Verification', sig_voice_desc:'Adds biometric voice identity signal for call centres and telephone banking.',
    sig_aml:'AML Screening', sig_aml_desc:'Screens against global sanctions, PEP registries, adverse media, and watchlists.',
    sig_kyb:'KYB / Business Check', sig_kyb_desc:'Verifies business registration, directors, UBO structure against registries and AML lists.',
    sig_fraud:'Fraud Intelligence', sig_fraud_desc:'Detects synthetic identities, document forgery, device anomalies, and behavioral signals.',
    sig_risk:'Risk Rules Engine', sig_risk_desc:'Configurable thresholds combine all signals into an automated trust decision.',
    ts_aml:'AML Status', ts_clear:'Clear', ts_kyb:'KYB Check', ts_verified:'Verified',
    ts_risk:'Risk Level', ts_low:'Low', ts_score_lbl:'Trust Score',
    ts_decision_lbl:'Decision', ts_approved:'APPROVED',
    tfp_doc:'Document verified', tfp_face:'Face matched', tfp_voice:'Voice verified',
    tfp_aml:'AML clear', tfp_risk:'Risk low',
    tfp_audit:'Decision logged · Audit trail generated · Exportable on demand',
    /* Industries */
    ind_label:'Industries', ind_title:'Built for regulated sectors',
    ind_sub:'Click any industry to see VerfiX use cases, recommended stack, and deployment options.',
    /* Security */
    sec_label:'Security & Compliance', sec_title:'Enterprise security at every layer',
    sec_sub:'Hover or tap each card to see what it means, how VerfiX helps, and why it matters.',
    /* Roadmap */
    rd_label:'Product Roadmap', rd_title:'VerfiX Roadmap',
    rd_sub:'Where we are, where we are going, and where the infrastructure is headed.',
    rd_today:'Today', rd_today_lbl:'Available Now',
    rd_next:'Next', rd_next_lbl:'In Development',
    rd_future:'Future', rd_future_lbl:'Vision & Direction',
    rd_note:'Roadmap is indicative. Timelines and features may evolve based on regulatory developments and customer requirements.',
    /* Footer / Legal */
    foot_copy:'© 2027 VerfiX AG · Switzerland · All rights reserved',
    ck_txt:'We use cookies to improve your experience. See our',
    ck_policy:'Privacy Policy'
  },
  de: {
    nav_industries:'Branchen', nav_products:'Produkte', nav_solutions:'Lösungen',
    nav_resources:'Ressourcen', nav_company:'Unternehmen',
    nav_sales:'Vertrieb kontaktieren', nav_demo:'Demo buchen',
    h_kicker:'Schweizer Qualität · Enterprise-Grade',
    h_title:'Identität prüfen.<br/>Betrug verhindern.<br/>Compliance automatisieren.<br/><em>Eine Infrastruktur-Schicht.</em>',
    h_sub:'VerfiX vereint Identitätsprüfung, Betrugsbekämpfung, AML-Compliance und Trust-Scoring in einer Plattform für Banken, Fintechs, Versicherungen und Regierungsbehörden.',
    h_cta1:'Demo buchen', h_cta2:'Plattform erkunden',
    te_label:'Trust Engine™', te_title:'Die Entscheidungsschicht hinter vertrauenswürdigem digitalem Onboarding.',
    te_sub:'Jedes Identitätssignal, jede Compliance-Prüfung und jeder Betrugsindiktor fließt in eine strukturierte Entscheidung — Genehmigen, Prüfen oder Ablehnen.',
    te_approve:'Genehmigen', te_review:'Prüfen', te_reject:'Ablehnen',
    gw_label:'Neues Produkt', gw_title:'VerfiX Gateway',
    gw_sub:'Eine API zur Prüfung digitaler Identitäten in ganz Europa.',
    gw_m1_n:'~3s', gw_m1_l:'Credential-Verifizierung', gw_m1_s:'Für Echtzeit-Entscheidungen konzipiert',
    gw_m2_n:'27+', gw_m2_l:'EU-Länderabdeckung', gw_m2_s:'Für eIDAS 2.0-Kompatibilität entwickelt',
    gw_m3_n:'1 API', gw_m3_l:'Eine Integration', gw_m3_s:'Für Banken und regulierte Organisationen',
    gw_m4_n:'1 Schicht', gw_m4_l:'Trust-Verifizierung', gw_m4_s:'Aussteller, Credential, Signatur, Widerruf',
    ts_label:'Interaktive Demo', ts_title:'So trifft VerfiX eine Vertrauensentscheidung.',
    ts_sub:'Klicken Sie auf ein Signal, um zu verstehen, was VerfiX prüft — und wie alles zu einer Entscheidung kombiniert wird.',
    ts_live:'Live Trust-Entscheidung',
    sig_doc:'Dokumentenprüfung', sig_doc_desc:'Prüft Dokumentechtheit, OCR-Daten, Ablaufdatum und Fälschungssignale.',
    sig_face:'Gesichtsabgleich & Liveness', sig_face_desc:'Bestätigt, dass die Person mit dem vorgelegten Ausweisdokument übereinstimmt.',
    sig_voice:'Sprachverifizierung', sig_voice_desc:'Biometrisches Sprachidentitätssignal für Call-Center und Telefonbanking.',
    sig_aml:'AML-Screening', sig_aml_desc:'Prüfung gegen globale Sanktionslisten, PEP-Register und Beobachtungslisten.',
    sig_kyb:'KYB / Unternehmenscheck', sig_kyb_desc:'Prüft Handelsregistereintrag, Direktoren und UBO-Struktur.',
    sig_fraud:'Betrugsintelligenz', sig_fraud_desc:'Erkennt synthetische Identitäten, Dokumentenfälschungen und Geräteanomalie.',
    sig_risk:'Risikoregeln-Engine', sig_risk_desc:'Konfigurierbare Schwellenwerte kombinieren alle Signale zu einer automatisierten Entscheidung.',
    ts_aml:'AML-Status', ts_clear:'Klar', ts_kyb:'KYB-Prüfung', ts_verified:'Verifiziert',
    ts_risk:'Risikoniveau', ts_low:'Niedrig', ts_score_lbl:'Trust Score',
    ts_decision_lbl:'Entscheidung', ts_approved:'GENEHMIGT',
    tfp_doc:'Dokument verifiziert', tfp_face:'Gesicht abgeglichen', tfp_voice:'Stimme verifiziert',
    tfp_aml:'AML klar', tfp_risk:'Risiko niedrig',
    tfp_audit:'Entscheidung protokolliert · Prüfpfad erstellt · Exportierbar',
    ind_label:'Branchen', ind_title:'Für regulierte Sektoren entwickelt',
    ind_sub:'Klicken Sie auf eine Branche für Anwendungsfälle, Stack und Deployment-Optionen.',
    sec_label:'Sicherheit & Compliance', sec_title:'Enterprise-Sicherheit auf jeder Ebene',
    sec_sub:'Bewegen Sie den Mauszeiger über eine Karte oder tippen Sie darauf für Details.',
    rd_label:'Produkt-Roadmap', rd_title:'VerfiX Roadmap',
    rd_sub:'Wo wir stehen, wohin wir gehen und die Infrastruktur-Vision.',
    rd_today:'Heute', rd_today_lbl:'Verfügbar jetzt',
    rd_next:'Als nächstes', rd_next_lbl:'In Entwicklung',
    rd_future:'Zukunft', rd_future_lbl:'Vision & Ausrichtung',
    rd_note:'Die Roadmap ist indikativ. Zeitpläne können sich aufgrund regulatorischer Entwicklungen ändern.',
    foot_copy:'© 2027 VerfiX AG · Schweiz · Alle Rechte vorbehalten',
    ck_txt:'Wir verwenden Cookies. Weitere Informationen in unserer',
    ck_policy:'Datenschutzerklärung'
  },
  fr: {
    nav_industries:'Secteurs', nav_products:'Produits', nav_solutions:'Solutions',
    nav_resources:'Ressources', nav_company:'Entreprise',
    nav_sales:'Contacter les ventes', nav_demo:'Réserver une démo',
    h_kicker:'Qualité suisse · Grade entreprise',
    h_title:"Vérifier l'identité.<br/>Prévenir la fraude.<br/>Automatiser la conformité.<br/><em>Une couche d'infrastructure.</em>",
    h_sub:"VerfiX unifie la vérification d'identité, l'intelligence anti-fraude, la conformité AML et le scoring de confiance en une seule plateforme pour les banques, fintechs, assureurs et gouvernements.",
    h_cta1:'Réserver une démo', h_cta2:'Explorer la plateforme',
    te_label:'Trust Engine™', te_title:"La couche de décision derrière l'onboarding numérique de confiance.",
    te_sub:"Chaque signal d'identité, vérification de conformité et indicateur de fraude converge vers une décision structurée — Approuver, Réviser ou Rejeter.",
    te_approve:'Approuver', te_review:'Réviser', te_reject:'Rejeter',
    gw_label:'Nouveau produit', gw_title:'VerfiX Gateway',
    gw_sub:"Une API pour vérifier les identités numériques de confiance à travers l'Europe.",
    gw_m1_n:'~3s', gw_m1_l:'Vérification de credential', gw_m1_s:'Conçu pour les décisions en temps réel',
    gw_m2_n:'27+', gw_m2_l:'Couverture UE', gw_m2_s:'Conçu pour la compatibilité eIDAS 2.0',
    gw_m3_n:'1 API', gw_m3_l:'Une intégration', gw_m3_s:'Pour banques et organisations réglementées',
    gw_m4_n:'1 couche', gw_m4_l:'Vérification de confiance', gw_m4_s:'Émetteur, credential, signature, révocation',
    ts_label:'Démo interactive', ts_title:'Voir comment VerfiX construit une décision de confiance.',
    ts_sub:"Cliquez sur un signal pour comprendre ce que VerfiX vérifie — puis comment tout se combine en une décision finale.",
    ts_live:'Décision de confiance en direct',
    sig_doc:'Vérification de document', sig_doc_desc:"Vérifie l'authenticité du document, OCR, date d'expiration et signaux de fraude.",
    sig_face:'Correspondance faciale & Liveness', sig_face_desc:"Confirme que la personne correspond au document d'identité soumis.",
    sig_voice:'Vérification vocale', sig_voice_desc:"Signal biométrique vocal pour centres d'appels et banque téléphonique.",
    sig_aml:'Screening AML', sig_aml_desc:'Vérification contre les listes de sanctions, registres PEP et médias défavorables.',
    sig_kyb:'KYB / Vérification entreprise', sig_kyb_desc:'Vérifie immatriculation, dirigeants et structure UBO.',
    sig_fraud:'Intelligence anti-fraude', sig_fraud_desc:'Détecte identités synthétiques, contrefaçons de documents et anomalies.',
    sig_risk:'Moteur de règles de risque', sig_risk_desc:'Les seuils configurables combinent tous les signaux en une décision automatisée.',
    ts_aml:'Statut AML', ts_clear:'Clair', ts_kyb:'Vérification KYB', ts_verified:'Vérifié',
    ts_risk:'Niveau de risque', ts_low:'Faible', ts_score_lbl:'Score de confiance',
    ts_decision_lbl:'Décision', ts_approved:'APPROUVÉ',
    tfp_doc:'Document vérifié', tfp_face:'Visage correspondant', tfp_voice:'Voix vérifiée',
    tfp_aml:'AML clair', tfp_risk:'Risque faible',
    tfp_audit:'Décision enregistrée · Piste d\'audit générée · Exportable sur demande',
    ind_label:'Secteurs', ind_title:'Conçu pour les secteurs réglementés',
    ind_sub:"Cliquez sur un secteur pour voir les cas d'usage, la stack recommandée et les options de déploiement.",
    sec_label:'Sécurité & Conformité', sec_title:'Sécurité entreprise à chaque couche',
    sec_sub:'Survolez ou appuyez sur une carte pour voir les détails.',
    rd_label:'Feuille de route', rd_title:'Roadmap VerfiX',
    rd_sub:'Où nous en sommes, où nous allons, et la vision infrastructure.',
    rd_today:"Aujourd'hui", rd_today_lbl:'Disponible maintenant',
    rd_next:'Prochain', rd_next_lbl:'En développement',
    rd_future:'Futur', rd_future_lbl:'Vision & Direction',
    rd_note:'La roadmap est indicative. Les délais peuvent évoluer selon les développements réglementaires.',
    foot_copy:'© 2027 VerfiX AG · Suisse · Tous droits réservés',
    ck_txt:'Nous utilisons des cookies. Consultez notre',
    ck_policy:'Politique de confidentialité'
  }
};

function applyLang(l) {
  var tr = T[l] || T['en'];
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (tr[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = tr[key];
      } else {
        el.innerHTML = tr[key];
      }
    }
  });
  // Cookie banner
  var ckTxtEl = document.getElementById('ck-txt');
  var ckPolicyPage = {en:'privacy',de:'datenschutz',fr:'politique'};
  if (ckTxtEl) {
    ckTxtEl.innerHTML = tr['ck_txt'] + ' <a onclick="nav(\''+ckPolicyPage[l]+'\')" style="color:var(--r);cursor:pointer;">' + tr['ck_policy'] + '</a>.';
  }
  // Footer copy
  var footC = document.getElementById('foot-c');
  if (footC) footC.textContent = tr['foot_copy'];
  // Footer legal links visibility
  var de = l==='de', fr = l==='fr';
  ['imp','dat'].forEach(function(x){var e=document.getElementById('f-'+x);if(e)e.style.display=de?'block':'none';});
  ['men','pol'].forEach(function(x){var e=document.getElementById('f-'+x);if(e)e.style.display=fr?'block':'none';});
  // Page title
  var titles = {
    en:'VerfiX — Swiss Trust Infrastructure for Regulated Industries',
    de:'VerfiX — Schweizer Trust-Infrastruktur für regulierte Branchen',
    fr:'VerfiX — Infrastructure de confiance suisse pour les secteurs réglementés'
  };
  var pgTitleEl = document.getElementById('pg-title');
  if (pgTitleEl) pgTitleEl.textContent = titles[l] || titles.en;
}

/* ═══ LANGUAGE ENTRYPOINT ═══ */
var lang='en';
function setLang(l){
  lang=l;
  document.getElementById('html-root').setAttribute('lang',l);
  document.querySelectorAll('.lb').forEach(function(b){b.classList.toggle('on',b.textContent.trim().toLowerCase()===l);});
  document.querySelectorAll('.mlb').forEach(function(b){b.classList.toggle('on',b.textContent.trim().toLowerCase()===l);});
  applyLang(l);
}

/* ═══ COOKIE ═══ */
function ckOk(){localStorage.setItem('vx-ck','ok');document.getElementById('ck-bar').classList.remove('show');}
function ckNo(){localStorage.setItem('vx-ck','no');document.getElementById('ck-bar').classList.remove('show');}

/* ═══ FORM ═══ */
/* ═══ CONTACT FORM ═══ */
/* Set your Formspree form ID below (https://formspree.io → New form).
   Until then, submissions fall back to opening the visitor's email client. */
var FORMSPREE_ID = ''; // e.g. 'xayzabcd'

function submitForm(){
  var n=document.getElementById('fn').value.trim(),
      c=document.getElementById('fc').value.trim(),
      e=document.getElementById('fe').value.trim(),
      ind=document.getElementById('fi').value,
      m=document.getElementById('fm').value.trim(),
      st=document.getElementById('fstatus'),
      btn=document.getElementById('fbtn');
  var T={
    en:{req:'Please fill in your name and a valid work email.',sending:'Sending…',ok:'Thank you! We will be in touch within 24 hours.',err:'Something went wrong. Please email contact@verfix.ch directly.'},
    de:{req:'Bitte Name und eine gültige Geschäfts-E-Mail angeben.',sending:'Wird gesendet…',ok:'Vielen Dank! Wir melden uns innerhalb von 24 Stunden.',err:'Ein Fehler ist aufgetreten. Bitte schreiben Sie an contact@verfix.ch.'},
    fr:{req:'Veuillez indiquer votre nom et un e-mail professionnel valide.',sending:'Envoi…',ok:'Merci ! Nous vous contacterons dans les 24 heures.',err:'Une erreur est survenue. Écrivez-nous à contact@verfix.ch.'}
  }[lang];
  function show(kind,msg){st.className='form-status show '+kind;st.textContent=msg;}
  var emailOk=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  if(!n||!emailOk){show('err',T.req);return;}

  var payload={name:n,company:c,email:e,industry:ind,message:m,_subject:'VerfiX demo request — '+(c||n)};

  if(!FORMSPREE_ID){
    // Graceful fallback: compose an email so the lead is never lost.
    var body=encodeURIComponent('Name: '+n+'\nCompany: '+c+'\nEmail: '+e+'\nIndustry: '+ind+'\n\n'+m);
    window.location.href='mailto:sales@verfix.ch?subject='+encodeURIComponent('Demo request — '+(c||n))+'&body='+body;
    show('ok',T.ok);
    return;
  }

  btn.disabled=true;show('sending',T.sending);
  fetch('https://formspree.io/f/'+FORMSPREE_ID,{
    method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},
    body:JSON.stringify(payload)
  }).then(function(r){
    btn.disabled=false;
    if(r.ok){show('ok',T.ok);['fn','fc','fe','fm'].forEach(function(id){document.getElementById(id).value='';});document.getElementById('fi').value='';}
    else{show('err',T.err);}
  }).catch(function(){btn.disabled=false;show('err',T.err);});
}

/* ═══ SCROLL REVEAL — BULLETPROOF ═══ */
function initRv(){
  document.body.classList.add('js-ready');
  var els=document.querySelectorAll('.pg.on .rv');
  if('IntersectionObserver' in window){
    var obs=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}
      });
    },{threshold:0,rootMargin:'20px'});
    els.forEach(function(el){obs.observe(el);});
  } else {
    els.forEach(function(el){el.classList.add('in');});
  }
  /* Hard fallback: force visible after 120ms */
  setTimeout(function(){
    document.querySelectorAll('.pg.on .rv').forEach(function(el){el.classList.add('in');});
  },120);
}

/* ═══ NAV SCROLL SHADOW ═══ */
function initScrollNav(){
  var n=document.querySelector('.nav');
  window.addEventListener('scroll',function(){n.classList.toggle('scrolled',window.scrollY>8);},{passive:true});
}

/* ═══ INIT ═══ */
document.addEventListener('DOMContentLoaded',function(){
  var bl=(navigator.language||'').toLowerCase();
  if(bl.startsWith('de'))setLang('de');
  else if(bl.startsWith('fr'))setLang('fr');
  else setLang('en');
  initRv();
  initScrollNav();
  showInd('banking');
  setTimeout(function(){document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in');});},500);
  // Apply translations on load
  applyLang(lang);
});
window.addEventListener('load',function(){
  if(!localStorage.getItem('vx-ck'))setTimeout(function(){document.getElementById('ck-bar').classList.add('show');},1400);
  document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in');});
});


/* ═══ TRUST SCORE DEMO ═══ */
function activateSig(el) {
  document.querySelectorAll('.ts-sig').forEach(function(s){ s.classList.remove('active'); });
  el.classList.add('active');
}

/* ═══ INDUSTRIES INTERACTIVE ═══ */
var openIndKey = null;
function toggleInd(el, key) {
  var panel = document.getElementById('idp-' + key);
  if (!panel) return;
  var allPanels = document.querySelectorAll('.ind-detail-panel');
  var allCards  = document.querySelectorAll('.ipc');
  if (openIndKey === key) {
    // close
    panel.classList.remove('open');
    el.classList.remove('open');
    openIndKey = null;
    return;
  }
  allPanels.forEach(function(p){ p.classList.remove('open'); });
  allCards.forEach(function(c){ c.classList.remove('open'); });
  panel.classList.add('open');
  el.classList.add('open');
  openIndKey = key;
  // Scroll panel into view smoothly
  setTimeout(function(){
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 60);
}

/* ═══ MOBILE TAP FOR LEADER CARDS ═══ */
function tapCard(el){
  var already=el.classList.contains('tapped');
  document.querySelectorAll('.lc.tapped').forEach(function(c){c.classList.remove('tapped');});
  if(!already)el.classList.add('tapped');
}