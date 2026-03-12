:root{--bg:#eef7ff;--card:#ffffff;--muted:#4c6a88;--text:#0b2340;--accent:#2b6dff;--ok:#0a8f4c;--err:#d62839;}
*{box-sizing:border-box}
body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:linear-gradient(180deg,#d7ecff,#eef7ff);color:var(--text)}
.container{max-width:1060px;margin:0 auto;padding:24px}
.header{margin-bottom:16px}
.header h1{margin:0;font-size:28px}
.sub{margin:6px 0 0;color:var(--muted)}
.card{background:rgba(255,255,255,.92);border:1px solid rgba(11,35,64,.12);border-radius:14px;padding:18px;backdrop-filter: blur(10px)}
.row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.field label{display:block;font-size:13px;color:var(--muted);margin-bottom:6px}
.field input,.field select{width:100%;padding:10px 12px;border-radius:10px;border:1px solid rgba(11,35,64,.16);background:#f3f8ff;color:var(--text)}
.hint{display:block;margin-top:6px;color:var(--muted)}
hr{border:none;border-top:1px solid rgba(11,35,64,.12);margin:16px 0}
.methods{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.method{cursor:pointer;text-align:left;background:#f3f8ff;border:1px solid rgba(11,35,64,.16);border-radius:12px;padding:12px;min-height:175px;position:relative}
.method.selected{border-color:var(--accent);box-shadow:0 0 0 3px rgba(43,109,255,.15)}
.method-title{font-weight:700;display:block;margin-bottom:10px}
.widget{background:rgba(43,109,255,.04);border:1px dashed rgba(43,109,255,.25);border-radius:10px;padding:10px;min-height:110px}
.actions{display:flex;gap:14px;align-items:center;margin-top:16px}
#continue{padding:12px 16px;border-radius:10px;border:none;background:var(--accent);color:white;font-weight:800;cursor:pointer}
#continue:disabled{opacity:.45;cursor:not-allowed}
.status{color:var(--muted)}
.status.ok{color:var(--ok)}
.status.error{color:var(--err)}
.status.working{color:#b7791f}
.debug{margin-top:14px}
pre{background:#0b1020;border:1px solid rgba(11,35,64,.12);padding:12px;border-radius:10px;overflow:auto;color:#d8e2ff}
.footer{margin-top:14px;color:var(--muted);font-size:13px}
.footer a{color:var(--accent)}
@media(max-width:900px){.row,.methods{grid-template-columns:1fr}}
