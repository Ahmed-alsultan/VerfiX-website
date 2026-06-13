var FORMSPREE_CONTACT = 'YOUR_FORMSPREE_ID';
var FORMSPREE_DEMO    = 'YOUR_FORMSPREE_ID';
var GA4_ID     = 'G-XXXXXXXXXX';
var GSC_VERIFY = '';
var _gaLoaded = false;
function loadGA4() {
if (_gaLoaded || !window.ANALYTICS_CONSENT) return;
_gaLoaded = true;
var s = document.createElement('script');
s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
document.head.appendChild(s);
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
window.gtag = gtag;
gtag('js', new Date());
gtag('config', GA4_ID, { anonymize_ip: true, cookie_flags: 'SameSite=None;Secure' });
}
function trackEvent(action, category, label) {
try { if (window.gtag) window.gtag('event', action, { event_category: category, event_label: label }); } catch(e){}
}
function trackCTA(label) { trackEvent('cta_click', 'conversion', label); }
var _PAGE_URLS = {
home:       '/',
solutions:  '/solutions',
industries: '/industries',
gateway:    '/gateway',
trustcenter:'/trust-center',
apidocs:    '/api',
resources:  '/resources',
casestudies:'/case-studies',
about:      '/about',
contact:    '/contact',
careers:    '/careers',
press:      '/press',
privacy:    '/privacy',
terms:      '/terms',
impressum:  '/impressum',
datenschutz:'/datenschutz',
mentions:   '/mentions-legales',
politique:  '/politique-confidentialite'
};
var curPage = (function() {
var path = window.location.pathname.replace(/^\//, '').replace(/\.html$/, '') || '';
var map  = {'':'home','solutions':'solutions','industries':'industries',
'gateway':'gateway','trust-center':'trustcenter','api':'apidocs',
'resources':'resources','case-studies':'casestudies','about':'about',
'contact':'contact','careers':'careers','press':'press',
'privacy':'privacy','terms':'terms','impressum':'impressum',
'datenschutz':'datenschutz','mentions-legales':'mentions',
'politique-confidentialite':'politique'};
return map[path] || 'home';
})();
function nav(id) {
var url = _PAGE_URLS[id] || ('/' + id);
trackEvent('page_view', 'navigation', id);
window.location.href = url;
}
function navClose(id) {
closeAll();
nav(id);
}
function toggleMenu(id) {
var ni = document.getElementById('ni-' + id);
if (!ni) return;
if (ni.classList.contains('open')) {
_closeMenu(id);
} else {
_openMenu(id);
}
}
function _openMenu(id) {
if (_openM && _openM !== id) _closeMenu(_openM);
var ni = document.getElementById('ni-' + id);
if (!ni) return;
ni.classList.add('open');
_openM = id;
if (_menuTimer) { clearTimeout(_menuTimer); _menuTimer = null; }
/* show backdrop */
var bd = document.getElementById('nav-backdrop');
if (bd) bd.classList.add('active');
}
function _closeMenu(id) {
var ni = document.getElementById('ni-' + id);
if (ni) ni.classList.remove('open');
if (_openM === id) _openM = null;
}
function closeAll() {
if (_menuTimer) { clearTimeout(_menuTimer); _menuTimer = null; }
document.querySelectorAll('.ni.open').forEach(function(el) {
el.classList.remove('open');
});
_openM = null;
/* hide backdrop */
var bd = document.getElementById('nav-backdrop');
if (bd) bd.classList.remove('active');
}
function _startCloseTimer(id) {
_menuTimer = setTimeout(function() {
_closeMenu(id);
}, 200);
}
function _cancelCloseTimer() {
if (_menuTimer) { clearTimeout(_menuTimer); _menuTimer = null; }
}
function _initMenuHover() {
_checkMobile();
document.querySelectorAll('.ni[id]').forEach(function(ni) {
var id = ni.id.replace('ni-', '');
ni.addEventListener('mouseenter', function() {
if (_isMobile) return;
_cancelCloseTimer();
_openMenu(id);
});
ni.addEventListener('mouseleave', function() {
if (_isMobile) return;
_startCloseTimer(id);
});
var mega = ni.querySelector('.mega');
if (mega) {
mega.addEventListener('mouseenter', function() {
if (_isMobile) return;
_cancelCloseTimer();
});
mega.addEventListener('mouseleave', function() {
if (_isMobile) return;
_startCloseTimer(id);
});
}
});
document.addEventListener('click', function(e) {
if (!e.target.closest('.ni') && !e.target.closest('.mega')) {
closeAll();
}
});
document.addEventListener('keydown', function(e) {
if (e.key === 'Escape') { closeAll(); closeMob(); }
});
window.addEventListener('scroll', function() {
if (!_isMobile && _openM) closeAll();
}, { passive: true });
window.addEventListener('resize', function() {
_checkMobile();
if (_isMobile) closeAll();
});
}
function closeMob() {
var m = document.getElementById('mob');
if (m) { m.classList.remove('open'); m.style.display = 'none'; }
}
function setDep(id) {
['saas','swiss','private','onprem'].forEach(function(k,i){
var tab   = document.querySelectorAll('.dep-tab')[i];
var panel = document.getElementById('dep-' + k);
if (tab)   tab.classList.toggle('on', k === id);
if (panel) panel.classList.toggle('on', k === id);
});
}
var _openInd = null;
function toggleInd(el, key) {
var panel = document.getElementById('idp-' + key);
if (!panel) return;
if (_openInd === key) {
panel.classList.remove('open'); el.classList.remove('open'); _openInd = null; return;
}
document.querySelectorAll('.ind-detail-panel.open').forEach(function(p){ p.classList.remove('open'); });
document.querySelectorAll('.ipc.open').forEach(function(c){ c.classList.remove('open'); });
panel.classList.add('open'); el.classList.add('open'); _openInd = key;
setTimeout(function(){ panel.scrollIntoView({ behavior:'smooth', block:'nearest' }); }, 60);
}
function activateSig(el) {
document.querySelectorAll('.ts-sig').forEach(function(s){ s.classList.remove('active'); });
el.classList.add('active');
}
var IND_DATA = {
banking:{n:'Banking & Wealth',uses:['Digital onboarding & KYC refresh','Telephone banking authentication','Fraud prevention & AML screening','On-premise deployment'],stack:['Document Verification','Face Verification','Voice Verification','AML Screening','Trust Engine™'],dep:'Private Cloud / On-Premise'},
fintech:{n:'Fintech',uses:['Fast customer onboarding','Merchant onboarding','AML automation','Trust scoring'],stack:['Document Verification','Face Verification','AML Screening','Risk Rules Engine'],dep:'SaaS / Swiss Dedicated'},
crypto:{n:'Crypto & Digital Assets',uses:['Exchange & wallet onboarding','High-risk user review','Sanctions screening','VASP compliance'],stack:['Document Verification','KYB Verification','Sanctions Screening','Fraud Intelligence'],dep:'SaaS / Swiss Dedicated'},
insurance:{n:'Insurance',uses:['Policyholder onboarding','Claims identity verification','Voice authentication','Fraud prevention'],stack:['Document Verification','Face Verification','Voice Verification','AML Screening'],dep:'Private Cloud / On-Premise'},
gov:{n:'Government',uses:['Citizen identity verification','Digital service onboarding','Audit-ready records','Secure access control'],stack:['Document Verification','Face Verification','Trust Engine™','Audit Logs'],dep:'On-Premise'},
health:{n:'Healthcare',uses:['Patient verification','Secure access management','Identity compliance','Staff verification'],stack:['Document Verification','Face Verification','Trust Engine™'],dep:'Private Cloud / On-Premise'},
telecom:{n:'Telecom',uses:['SIM registration','SIM-swap prevention','Subscriber verification','Regulatory compliance'],stack:['Document Verification','Face Verification','Voice Verification'],dep:'SaaS / Swiss Dedicated'},
mobility:{n:'Mobility',uses:['Driver verification','Fleet user onboarding','Identity-based access'],stack:['Document Verification','Face Verification','Trust Engine™'],dep:'SaaS'},
mkt:{n:'Marketplaces',uses:['Seller & merchant onboarding','KYB for business sellers','Fraud prevention','Trust & safety'],stack:['Document Verification','KYB Verification','AML Screening','Trust Engine™'],dep:'SaaS'},
re:{n:'Real Estate',uses:['Tenant identity verification','Permit & licence checks','Business verification'],stack:['Document Verification','Face Verification','KYB Verification'],dep:'SaaS / Swiss Dedicated'},
edu:{n:'Education',uses:['Student identity verification','Online exam supervision','Certificate verification','Prevent fake credentials'],stack:['Document Verification','Face Verification','Trust Engine™'],dep:'SaaS'},
ecom:{n:'E-Commerce & Retail',uses:['Buyer & seller trust checks','Merchant verification','Age verification','Fraud prevention'],stack:['Document Verification','Age Verification','Trust Engine™','Fraud Intelligence'],dep:'SaaS'},
age:{n:'Age-Restricted Sales',uses:['Age verification for alcohol, tobacco & vape','Online checkout age checks','In-store digital age verification'],stack:['Age Estimation','Age Validation','Document Verification'],dep:'SaaS'},
forex:{n:'Forex & Trading',uses:['Trader onboarding & KYC','Source of funds verification','High-risk user review','AML & sanctions screening'],stack:['Document Verification','KYB Verification','AML Screening','Trust Engine™'],dep:'SaaS / Swiss Dedicated'},
pay:{n:'Payments',uses:['PSP customer onboarding','Merchant identity verification','Fraud intelligence','Compliance automation'],stack:['Document Verification','KYB Verification','Fraud Intelligence','Trust Engine™'],dep:'SaaS / Swiss Dedicated'},
rem:{n:'Remittance',uses:['Sender & recipient verification','Transaction risk scoring','AML & sanctions checks'],stack:['Document Verification','AML Screening','Risk Rules Engine','Trust Engine™'],dep:'SaaS'},
wealth:{n:'Wealth Management',uses:['HNW client onboarding','Enhanced due diligence','Source of wealth verification','Ongoing AML monitoring'],stack:['Document Verification','Face Verification','KYB Verification','AML Screening','Trust Engine™'],dep:'Private Cloud / On-Premise'},
super:{n:'Supermarkets',uses:['Age verification at self-checkout','Age checks for online delivery','Restricted goods verification'],stack:['Age Estimation','Age Validation','Document Verification'],dep:'SaaS'}
};
function showInd(id) {
var d = IND_DATA[id]; if (!d) return;
document.querySelectorAll('.mi-item').forEach(function(el){ el.classList.toggle('active', el.dataset.ind === id); });
var p = document.getElementById('mi-panel'); if (!p) return;
p.innerHTML =
'<div style="font-size:.85rem;font-weight:800;color:var(--t);margin-bottom:.875rem;">' + d.n + '</div>' +
'<div class="mi-sec">Use Cases</div>' + d.uses.map(function(u){ return '<div class="mi-li">' + u + '</div>'; }).join('') +
'<div class="mi-sec" style="margin-top:.72rem;">Recommended Stack</div>' + d.stack.map(function(s){ return '<div class="mi-check"><i class="fas fa-check"></i>' + s + '</div>'; }).join('') +
'<div class="mi-dep-badge" style="margin-top:.72rem;"><i class="fas fa-server" style="font-size:.55rem;margin-right:.35rem;"></i>' + d.dep + '</div>' +
'<div style="margin-top:.875rem;"><a onclick="navClose(\'contact\')" class="btn btn-r btn-sm" style="font-size:.74rem;" onclick="trackCTA(\'industry_demo\')">Get Industry Demo</a></div>';
}
var T = {
en:{
nav_industries:'Industries',nav_products:'Products',nav_solutions:'Solutions',nav_resources:'Resources',nav_company:'Company',nav_sales:'Talk to Sales',nav_demo:'Book a Demo',
h_kicker:'Swiss-Built · Enterprise-Grade',
h_title:'Verify Identity.<br/>Prevent Fraud.<br/>Automate Compliance.<br/><em>One Infrastructure Layer.</em>',
h_sub:'VerfiX unifies identity verification, fraud intelligence, AML compliance, and trust scoring into one platform for banks, fintechs, insurers, governments, and other regulated organizations.',
h_cta1:'Book a Demo',h_cta2:'Explore Platform',
te_label:'Trust Engine™',te_title:'The decision layer behind trusted digital onboarding.',
te_sub:'Every identity signal, compliance check, and fraud indicator converges into one structured decision — Approve, Review, or Reject.',
te_approve:'Approve',te_review:'Review',te_reject:'Reject',
gw_label:'New Product',gw_title:'VerfiX Gateway',gw_sub:'One API to verify trusted digital identities across Europe.',
gw_m1_n:'~3s',gw_m1_l:'Credential verification',gw_m1_s:'Designed for real-time decisioning',
gw_m2_n:'27+',gw_m2_l:'EU country coverage',gw_m2_s:'Built for eIDAS 2.0 compatibility',
gw_m3_n:'1 API',gw_m3_l:'One integration',gw_m3_s:'For banks and regulated organizations',
gw_m4_n:'1 layer',gw_m4_l:'Trust verification',gw_m4_s:'Issuer, credential, signature, revocation',
ts_label:'Interactive Demo',ts_title:'See how VerfiX builds a trust decision.',
ts_sub:'Click any signal to understand what VerfiX checks — then see how it combines into one final decision.',ts_live:'Live Trust Decision',
sig_doc:'Document Verification',sig_doc_desc:'Checks document authenticity, OCR data, expiry date, forgery signals, and issuing authority.',
sig_face:'Face Match & Liveness',sig_face_desc:'Confirms the person matches the submitted identity document. Liveness check detects deepfakes.',
sig_voice:'Voice Verification',sig_voice_desc:'Adds biometric voice identity signal for call centres and telephone banking.',
sig_aml:'AML Screening',sig_aml_desc:'Screens against global sanctions, PEP registries, adverse media, and watchlists.',
sig_kyb:'KYB / Business Check',sig_kyb_desc:'Verifies business registration, directors, UBO structure against registries and AML lists.',
sig_fraud:'Fraud Intelligence',sig_fraud_desc:'Detects synthetic identities, document forgery, device anomalies, and behavioral signals.',
sig_risk:'Risk Rules Engine',sig_risk_desc:'Configurable thresholds combine all signals into an automated trust decision.',
ts_aml:'AML Status',ts_clear:'Clear',ts_kyb:'KYB Check',ts_verified:'Verified',ts_risk:'Risk Level',ts_low:'Low',ts_score_lbl:'Trust Score',ts_decision_lbl:'Decision',ts_approved:'APPROVED',
tfp_doc:'Document verified',tfp_face:'Face matched',tfp_voice:'Voice verified',tfp_aml:'AML clear',tfp_risk:'Risk low',
tfp_audit:'Decision logged · Audit trail generated · Exportable on demand',
ind_label:'Industries',ind_title:'Built for regulated sectors',ind_sub:'Click any industry to see VerfiX use cases, recommended stack, and deployment options.',
sec_label:'Security & Compliance',sec_title:'Enterprise security at every layer',sec_sub:'Hover or tap each card to see what it means, how VerfiX helps, and why it matters.',
rd_label:'Product Roadmap',rd_title:'VerfiX Roadmap',rd_sub:'Where we are, where we are going, and where the infrastructure is headed.',
rd_today:'Today',rd_today_lbl:'Available Now',rd_next:'Next',rd_next_lbl:'In Development',rd_future:'Future',rd_future_lbl:'Vision & Direction',
rd_note:'Roadmap is indicative. Timelines and features may evolve based on regulatory developments and customer requirements.',
foot_copy:'© 2025 VerfiX AG · Switzerland · All rights reserved',
ck_txt:'We use cookies to improve your experience. See our',ck_policy:'Privacy Policy'
},
de:{
nav_industries:'Branchen',nav_products:'Produkte',nav_solutions:'Lösungen',nav_resources:'Ressourcen',nav_company:'Unternehmen',nav_sales:'Vertrieb kontaktieren',nav_demo:'Demo buchen',
h_kicker:'Schweizer Qualität · Enterprise-Grade',
h_title:'Identität prüfen.<br/>Betrug verhindern.<br/>Compliance automatisieren.<br/><em>Eine Infrastruktur-Schicht.</em>',
h_sub:'VerfiX vereint Identitätsprüfung, Betrugsbekämpfung, AML-Compliance und Trust-Scoring in einer Plattform für Banken, Fintechs, Versicherungen und Regierungsbehörden.',
h_cta1:'Demo buchen',h_cta2:'Plattform erkunden',
te_label:'Trust Engine™',te_title:'Die Entscheidungsschicht hinter vertrauenswürdigem digitalem Onboarding.',
te_sub:'Jedes Identitätssignal, jede Compliance-Prüfung und jeder Betrugsindiktor fließt in eine strukturierte Entscheidung — Genehmigen, Prüfen oder Ablehnen.',
te_approve:'Genehmigen',te_review:'Prüfen',te_reject:'Ablehnen',
gw_label:'Neues Produkt',gw_title:'VerfiX Gateway',gw_sub:'Eine API zur Prüfung digitaler Identitäten in ganz Europa.',
gw_m1_n:'~3s',gw_m1_l:'Credential-Verifizierung',gw_m1_s:'Für Echtzeit-Entscheidungen konzipiert',
gw_m2_n:'27+',gw_m2_l:'EU-Länderabdeckung',gw_m2_s:'Für eIDAS 2.0-Kompatibilität entwickelt',
gw_m3_n:'1 API',gw_m3_l:'Eine Integration',gw_m3_s:'Für Banken und regulierte Organisationen',
gw_m4_n:'1 Schicht',gw_m4_l:'Trust-Verifizierung',gw_m4_s:'Aussteller, Credential, Signatur, Widerruf',
ts_label:'Interaktive Demo',ts_title:'So trifft VerfiX eine Vertrauensentscheidung.',
ts_sub:'Klicken Sie auf ein Signal, um zu verstehen, was VerfiX prüft.',ts_live:'Live Trust-Entscheidung',
sig_doc:'Dokumentenprüfung',sig_doc_desc:'Prüft Dokumentechtheit, OCR-Daten, Ablaufdatum und Fälschungssignale.',
sig_face:'Gesichtsabgleich & Liveness',sig_face_desc:'Bestätigt, dass die Person mit dem vorgelegten Ausweisdokument übereinstimmt.',
sig_voice:'Sprachverifizierung',sig_voice_desc:'Biometrisches Sprachidentitätssignal für Call-Center und Telefonbanking.',
sig_aml:'AML-Screening',sig_aml_desc:'Prüfung gegen globale Sanktionslisten, PEP-Register und Beobachtungslisten.',
sig_kyb:'KYB / Unternehmenscheck',sig_kyb_desc:'Prüft Handelsregistereintrag, Direktoren und UBO-Struktur.',
sig_fraud:'Betrugsintelligenz',sig_fraud_desc:'Erkennt synthetische Identitäten, Dokumentenfälschungen und Geräteanomalien.',
sig_risk:'Risikoregeln-Engine',sig_risk_desc:'Konfigurierbare Schwellenwerte kombinieren alle Signale zu einer automatisierten Entscheidung.',
ts_aml:'AML-Status',ts_clear:'Klar',ts_kyb:'KYB-Prüfung',ts_verified:'Verifiziert',ts_risk:'Risikoniveau',ts_low:'Niedrig',ts_score_lbl:'Trust Score',ts_decision_lbl:'Entscheidung',ts_approved:'GENEHMIGT',
tfp_doc:'Dokument verifiziert',tfp_face:'Gesicht abgeglichen',tfp_voice:'Stimme verifiziert',tfp_aml:'AML klar',tfp_risk:'Risiko niedrig',
tfp_audit:'Entscheidung protokolliert · Prüfpfad erstellt · Exportierbar',
ind_label:'Branchen',ind_title:'Für regulierte Sektoren entwickelt',ind_sub:'Klicken Sie auf eine Branche für Details.',
sec_label:'Sicherheit & Compliance',sec_title:'Enterprise-Sicherheit auf jeder Ebene',sec_sub:'Mauszeiger über eine Karte für Details.',
rd_label:'Produkt-Roadmap',rd_title:'VerfiX Roadmap',rd_sub:'Wo wir stehen, wohin wir gehen.',
rd_today:'Heute',rd_today_lbl:'Verfügbar jetzt',rd_next:'Als nächstes',rd_next_lbl:'In Entwicklung',rd_future:'Zukunft',rd_future_lbl:'Vision & Ausrichtung',
rd_note:'Die Roadmap ist indikativ.',
foot_copy:'© 2025 VerfiX AG · Schweiz · Alle Rechte vorbehalten',
ck_txt:'Wir verwenden Cookies. Weitere Informationen in unserer',ck_policy:'Datenschutzerklärung'
},
fr:{
nav_industries:'Secteurs',nav_products:'Produits',nav_solutions:'Solutions',nav_resources:'Ressources',nav_company:'Entreprise',nav_sales:'Contacter les ventes',nav_demo:'Réserver une démo',
h_kicker:'Qualité suisse · Grade entreprise',
h_title:"Vérifier l'identité.<br/>Prévenir la fraude.<br/>Automatiser la conformité.<br/><em>Une couche d'infrastructure.</em>",
h_sub:"VerfiX unifie la vérification d'identité, l'intelligence anti-fraude, la conformité AML et le scoring de confiance en une seule plateforme.",
h_cta1:'Réserver une démo',h_cta2:'Explorer la plateforme',
te_label:'Trust Engine™',te_title:"La couche de décision derrière l'onboarding numérique de confiance.",
te_sub:"Chaque signal d'identité converge vers une décision structurée — Approuver, Réviser ou Rejeter.",
te_approve:'Approuver',te_review:'Réviser',te_reject:'Rejeter',
gw_label:'Nouveau produit',gw_title:'VerfiX Gateway',gw_sub:"Une API pour vérifier les identités numériques à travers l'Europe.",
gw_m1_n:'~3s',gw_m1_l:'Vérification de credential',gw_m1_s:'Conçu pour les décisions en temps réel',
gw_m2_n:'27+',gw_m2_l:'Couverture UE',gw_m2_s:'Conçu pour la compatibilité eIDAS 2.0',
gw_m3_n:'1 API',gw_m3_l:'Une intégration',gw_m3_s:'Pour banques et organisations réglementées',
gw_m4_n:'1 couche',gw_m4_l:'Vérification de confiance',gw_m4_s:'Émetteur, credential, signature, révocation',
ts_label:'Démo interactive',ts_title:'Voir comment VerfiX construit une décision de confiance.',
ts_sub:"Cliquez sur un signal pour comprendre ce que VerfiX vérifie.",ts_live:'Décision de confiance en direct',
sig_doc:'Vérification de document',sig_doc_desc:"Vérifie l'authenticité du document, OCR, date d'expiration.",
sig_face:'Correspondance faciale & Liveness',sig_face_desc:"Confirme que la personne correspond au document d'identité soumis.",
sig_voice:'Vérification vocale',sig_voice_desc:"Signal biométrique vocal pour centres d'appels.",
sig_aml:'Screening AML',sig_aml_desc:'Vérification contre les listes de sanctions et registres PEP.',
sig_kyb:'KYB / Vérification entreprise',sig_kyb_desc:'Vérifie immatriculation, dirigeants et structure UBO.',
sig_fraud:'Intelligence anti-fraude',sig_fraud_desc:'Détecte identités synthétiques et contrefaçons de documents.',
sig_risk:'Moteur de règles de risque',sig_risk_desc:'Les seuils configurables combinent tous les signaux.',
ts_aml:'Statut AML',ts_clear:'Clair',ts_kyb:'Vérification KYB',ts_verified:'Vérifié',ts_risk:'Niveau de risque',ts_low:'Faible',ts_score_lbl:'Score de confiance',ts_decision_lbl:'Décision',ts_approved:'APPROUVÉ',
tfp_doc:'Document vérifié',tfp_face:'Visage correspondant',tfp_voice:'Voix vérifiée',tfp_aml:'AML clair',tfp_risk:'Risque faible',
tfp_audit:"Décision enregistrée · Piste d'audit générée · Exportable sur demande",
ind_label:'Secteurs',ind_title:'Conçu pour les secteurs réglementés',ind_sub:"Cliquez sur un secteur pour les détails.",
sec_label:'Sécurité & Conformité',sec_title:'Sécurité entreprise à chaque couche',sec_sub:'Survolez une carte pour les détails.',
rd_label:'Feuille de route',rd_title:'Roadmap VerfiX',rd_sub:'Où nous en sommes et où nous allons.',
rd_today:"Aujourd'hui",rd_today_lbl:'Disponible maintenant',rd_next:'Prochain',rd_next_lbl:'En développement',rd_future:'Futur',rd_future_lbl:'Vision & Direction',
rd_note:'La roadmap est indicative.',
foot_copy:'© 2025 VerfiX AG · Suisse · Tous droits réservés',
ck_txt:'Nous utilisons des cookies. Consultez notre',ck_policy:'Politique de confidentialité'
}
};
function applyLang(l) {
var tr = T[l] || T.en;
document.querySelectorAll('[data-i18n]').forEach(function(el) {
var k = el.getAttribute('data-i18n');
if (tr[k] !== undefined) {
if (el.tagName==='INPUT'||el.tagName==='TEXTAREA') el.placeholder=tr[k];
else el.innerHTML=tr[k];
}
});
var ckPage={en:'privacy',de:'datenschutz',fr:'politique'};
var ckEl=document.getElementById('ck-txt');
if(ckEl) ckEl.innerHTML=tr.ck_txt+' <a onclick="nav(\''+ckPage[l]+'\')" style="color:var(--r);cursor:pointer;">'+tr.ck_policy+'</a>.';
var fc=document.getElementById('foot-c'); if(fc) fc.textContent=tr.foot_copy;
['imp','dat'].forEach(function(x){var e=document.getElementById('f-'+x);if(e)e.style.display=(l==='de')?'block':'none';});
['men','pol'].forEach(function(x){var e=document.getElementById('f-'+x);if(e)e.style.display=(l==='fr')?'block':'none';});
var titles={en:'VerfiX — Swiss Trust Infrastructure for Regulated Industries',de:'VerfiX — Schweizer Trust-Infrastruktur für regulierte Branchen',fr:'VerfiX — Infrastructure de confiance suisse'};
var pt=document.getElementById('pg-title'); if(pt) pt.textContent=titles[l]||titles.en;
}
var _lang='en';
function setLang(l){
_lang=l;
var root=document.getElementById('html-root');
if(root) root.setAttribute('lang',l);
document.querySelectorAll('.lb,.mlb').forEach(function(b){b.classList.toggle('on',b.textContent.trim().toLowerCase()===l);});
applyLang(l);
trackEvent('language_switch','engagement',l);
}
window.ANALYTICS_CONSENT = false;
window.MARKETING_CONSENT = false;
function _submitToFormspree(formId, data, successId, errorId, btn) {
fetch('https://formspree.io/f/' + formId, {
method:'POST',
headers:{'Content-Type':'application/json','Accept':'application/json'},
body:JSON.stringify(data)
})
.then(function(r){ return r.json().then(function(d){return{ok:r.ok,d:d};}); })
.then(function(res){
if(res.ok){
var s=document.getElementById(successId);
if(s){s.style.display='flex';setTimeout(function(){s.style.display='none';},6000);}
trackEvent('form_submit','conversion',formId);
} else { throw new Error('failed'); }
})
.catch(function(){
var e=document.getElementById(errorId); if(e) e.style.display='flex';
setTimeout(function(){ var e2=document.getElementById(errorId); if(e2) e2.style.display='none'; },5000);
})
.finally(function(){ if(btn){btn.disabled=false;btn.innerHTML=btn.dataset.orig||'Send';} });
}
function _validateForm(formEl) {
var ok=true;
formEl.querySelectorAll('[data-required]').forEach(function(f){
f.classList.remove('field-err');
var v=f.value.trim();
if(!v){f.classList.add('field-err');ok=false;}
else if(f.type==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){f.classList.add('field-err');ok=false;}
});
return ok;
}
function submitContactForm(e) {
if(e) e.preventDefault();
var form=document.getElementById('contact-form');
if(!form||!_validateForm(form)) return;
var btn=form.querySelector('[type=submit]');
if(btn){btn.dataset.orig=btn.innerHTML;btn.disabled=true;btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Sending…';}
var data={
name:    (document.getElementById('cf-name')||{}).value||'',
company: (document.getElementById('cf-company')||{}).value||'',
email:   (document.getElementById('cf-email')||{}).value||'',
industry:(document.getElementById('cf-industry')||{}).value||'',
message: (document.getElementById('cf-message')||{}).value||''
};
_submitToFormspree(FORMSPREE_CONTACT,data,'form-success','form-error',btn);
if(form) form.reset();
}
function submitDemoForm(e) {
if(e) e.preventDefault();
var form=document.getElementById('demo-form');
if(!form||!_validateForm(form)) return;
var btn=form.querySelector('[type=submit]');
if(btn){btn.dataset.orig=btn.innerHTML;btn.disabled=true;btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Sending…';}
var data={
name:    (document.getElementById('df-name')||{}).value||'',
company: (document.getElementById('df-company')||{}).value||'',
email:   (document.getElementById('df-email')||{}).value||'',
phone:   (document.getElementById('df-phone')||{}).value||''
};
_submitToFormspree(FORMSPREE_DEMO,data,'demo-success','demo-error',btn);
if(form) form.reset();
}
function ckSavePrefs() {
var a=document.getElementById('ck-analytics'), m=document.getElementById('ck-marketing');
var prefs={necessary:true,analytics:a?a.checked:false,marketing:m?m.checked:false,ts:new Date().toISOString()};
try{localStorage.setItem('vx-ck',JSON.stringify(prefs));}catch(e){}
window.ANALYTICS_CONSENT=prefs.analytics;
window.MARKETING_CONSENT=prefs.marketing;
var bar=document.getElementById('ck-bar');
if(bar) bar.classList.remove('show');
if(prefs.analytics) loadGA4();
}
function ckOk(){
var a=document.getElementById('ck-analytics'),m=document.getElementById('ck-marketing');
if(a)a.checked=true; if(m)m.checked=true;
ckSavePrefs();
}
function ckNo(){
var a=document.getElementById('ck-analytics'),m=document.getElementById('ck-marketing');
if(a)a.checked=false; if(m)m.checked=false;
ckSavePrefs();
}
function ckToggle(){
var p=document.getElementById('ck-prefs'); if(!p) return;
p.style.display=p.style.display==='block'?'none':'block';
}
function initRv() {
if('IntersectionObserver' in window) {
var obs=new IntersectionObserver(function(entries){
entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}});
},{threshold:0,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.pg.on .rv').forEach(function(el){obs.observe(el);});
} else {
document.querySelectorAll('.pg.on .rv').forEach(function(el){el.classList.add('in');});
}
setTimeout(function(){document.querySelectorAll('.pg.on .rv').forEach(function(el){el.classList.add('in');});},200);
}
function initScrollNav() {
var n=document.querySelector('.nav'); if(!n) return;
var prev=0;
window.addEventListener('scroll',function(){
var s=window.scrollY;
n.classList.toggle('scrolled',s>8);
prev=s;
},{passive:true});
}
function tapCard(el) {
var already=el.classList.contains('tapped');
document.querySelectorAll('.lc.tapped').forEach(function(c){c.classList.remove('tapped');});
if(!already) el.classList.add('tapped');
}
function apiNav(id) {
document.querySelectorAll('.api-nav-link').forEach(function(l){l.classList.remove('active');});
var a=document.querySelector('[data-sec="'+id+'"]'); if(a) a.classList.add('active');
var t=document.getElementById('api-'+id); if(t) t.scrollIntoView({behavior:'smooth',block:'start'});
}
function _markActiveNav() {
var path = window.location.pathname;
document.querySelectorAll('a[href]').forEach(function(a) {
var href = a.getAttribute('href');
if (!href) return;
if (href === path || (path === '/' && href === '/')) {
a.classList.add('nav-current');
var ni = a.closest('.ni');
if (ni) ni.classList.add('nav-active');
}
});
}
document.addEventListener('DOMContentLoaded',function(){
var bl=(navigator.language||'').toLowerCase();
if(bl.startsWith('de')) setLang('de');
else if(bl.startsWith('fr')) setLang('fr');
else setLang('en');
_initMenuHover();
var ham=document.getElementById('ham-btn');
if(ham) ham.addEventListener('click',function(){
var m=document.getElementById('mob');
if(!m) return;
if(m.classList.contains('open')){closeMob();}
else{m.classList.add('open');m.style.display='flex';}
});
document.addEventListener('click',function(e){if(!e.target.closest('.ni')) closeAll();});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeAll();closeMob();}});
initScrollNav(); initRv();
showInd('banking');
var stored; try{stored=localStorage.getItem('vx-ck');}catch(e){}
if(!stored){
setTimeout(function(){var b=document.getElementById('ck-bar');if(b)b.classList.add('show');},1500);
} else {
try{
var p=JSON.parse(stored);
window.ANALYTICS_CONSENT=p.analytics||false;
window.MARKETING_CONSENT=p.marketing||false;
if(p.analytics) loadGA4();
}catch(e){}
}
var cf=document.getElementById('contact-form');
if(cf) cf.addEventListener('submit',submitContactForm);
var df=document.getElementById('demo-form');
if(df) df.addEventListener('submit',submitDemoForm);
setTimeout(function(){document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in');});},600);
applyLang(_lang);
_markActiveNav();
});
window.addEventListener('load',function(){
document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in');});
});

/* ── Floating Demo Button ── */
(function () {
  var btn = document.getElementById('float-demo-btn');
  if (!btn) return;
  var shown = false;
  function checkScroll() {
    if (window.scrollY > 300 && !shown) {
      btn.classList.add('visible');
      shown = true;
    }
  }
  window.addEventListener('scroll', checkScroll, { passive: true });
  // Show after 4 seconds regardless of scroll (catches mobile users)
  setTimeout(function () {
    if (!shown) { btn.classList.add('visible'); shown = true; }
  }, 4000);
})();
