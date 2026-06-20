(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9367],{768:e=>{e.exports={container:"Toast_container__ATHbh",toast:"Toast_toast__cTlPZ",slideIn:"Toast_slideIn__1pPUa",icon:"Toast_icon__VwWjV",message:"Toast_message___htS4",close:"Toast_close__k5kyY",success:"Toast_success___cXUx",warning:"Toast_warning__lA3L8",error:"Toast_error__bPfe4",info:"Toast_info__vEHnS"}},8221:(e,t,r)=>{"use strict";r.d(t,{d:()=>d,t:()=>n});var a=r(5155),l=r(2115),o=r(768),i=r.n(o);let s=(0,l.createContext)(void 0);function n({children:e}){let[t,r]=(0,l.useState)([]),o=(0,l.useCallback)((e,t="success")=>{let a=Math.random().toString(36).substring(2,9);r(r=>[...r,{id:a,message:e,type:t}]),setTimeout(()=>{r(e=>e.filter(e=>e.id!==a))},3e3)},[]),d=(0,l.useCallback)(e=>{r(t=>t.filter(t=>t.id!==e))},[]);return(0,a.jsxs)(s.Provider,{value:{showToast:o},children:[e,(0,a.jsx)("div",{className:i().container,children:t.map(e=>(0,a.jsxs)("div",{className:`${i().toast} ${i()[e.type]}`,role:"alert",onClick:()=>d(e.id),children:[(0,a.jsxs)("span",{className:i().icon,children:["success"===e.type&&"✓","warning"===e.type&&"⚠","error"===e.type&&"✕","info"===e.type&&"ℹ"]}),(0,a.jsx)("span",{className:i().message,children:e.message}),(0,a.jsx)("button",{className:i().close,"aria-label":"Close",children:"\xd7"})]},e.id))})]})}function d(){let e=(0,l.useContext)(s);if(void 0===e)throw Error("useToast must be used within a ToastProvider");return e}},9367:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var a=r(5155),l=r(2115),o=r(8221);function i(){let{showToast:e}=(0,o.d)(),[t,r]=(0,l.useState)("Jane Doe"),[i,s]=(0,l.useState)("Digital Creator & Designer"),[n,d]=(0,l.useState)(""),[c,m]=(0,l.useState)(0),[f,b]=(0,l.useState)([{id:"1",label:"My Creative Portfolio",url:"https://example.com/portfolio"},{id:"2",label:"Subscribe to Newsletter",url:"https://example.com/newsletter"},{id:"3",label:"Read My Blog Articles",url:"https://example.com/blog"}]),[p,g]=(0,l.useState)(""),[x,h]=(0,l.useState)(""),u=[{name:"Midnight Eclipse",bg:"linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",cardBg:"rgba(255, 255, 255, 0.08)",text:"#f8fafc",cardText:"#f1f5f9"},{name:"Sunset Gradient",bg:"linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)",cardBg:"rgba(255, 255, 255, 0.2)",text:"#ffffff",cardText:"#ffffff"},{name:"Emerald Jungle",bg:"linear-gradient(135deg, #064e3b 0%, #065f46 100%)",cardBg:"rgba(255, 255, 255, 0.1)",text:"#ecfdf5",cardText:"#f0fdf4"},{name:"Oceanic Wave",bg:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",cardBg:"rgba(255, 255, 255, 0.15)",text:"#f0f9ff",cardText:"#f0f9ff"},{name:"Soft Pastel Pink",bg:"linear-gradient(135deg, #fce7f3 0%, #fae8ff 100%)",cardBg:"#ffffff",text:"#471854",cardText:"#471854"}],y=u[c];return(0,a.jsx)("div",{className:"card",children:(0,a.jsxs)("div",{className:"grid-cols-2",style:{gap:"2.5rem"},children:[(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsx)("span",{className:"form-label",style:{fontSize:"1.1rem"},children:"Profile Information"}),(0,a.jsxs)("div",{className:"grid-cols-2",style:{gap:"1rem"},children:[(0,a.jsxs)("div",{className:"form-group",style:{marginBottom:0},children:[(0,a.jsx)("label",{className:"form-label",htmlFor:"bio-helper-title",children:"Profile Name"}),(0,a.jsx)("input",{id:"bio-helper-title",type:"text",value:t,onChange:e=>r(e.target.value),className:"form-control"})]}),(0,a.jsxs)("div",{className:"form-group",style:{marginBottom:0},children:[(0,a.jsx)("label",{className:"form-label",htmlFor:"bio-helper-sub",children:"Profile Subtitle"}),(0,a.jsx)("input",{id:"bio-helper-sub",type:"text",value:i,onChange:e=>s(e.target.value),className:"form-control"})]})]}),(0,a.jsxs)("div",{className:"form-group",style:{marginBottom:0},children:[(0,a.jsx)("label",{className:"form-label",htmlFor:"bio-helper-avatar",children:"Avatar Profile Image"}),(0,a.jsx)("input",{id:"bio-helper-avatar",type:"file",accept:"image/*",onChange:e=>{let t=e.target.files?.[0];if(t){let e=new FileReader;e.onload=e=>{e.target?.result&&d(e.target.result)},e.readAsDataURL(t)}},className:"form-control",style:{padding:"0.45rem 1rem"}})]}),(0,a.jsx)("span",{className:"form-label",style:{fontSize:"1.1rem",borderTop:"1px solid var(--border-color)",paddingTop:"1rem"},children:"Design Theme"}),(0,a.jsx)("div",{className:"flex",style:{gap:"0.5rem",flexWrap:"wrap"},children:u.map((e,t)=>(0,a.jsx)("button",{className:`btn ${c===t?"btn-primary":"btn-secondary"} btn-sm`,onClick:()=>m(t),children:e.name},t))}),(0,a.jsx)("span",{className:"form-label",style:{fontSize:"1.1rem",borderTop:"1px solid var(--border-color)",paddingTop:"1rem"},children:"Profile Links"}),(0,a.jsx)("div",{className:"flex flex-col gap-2",children:f.map(t=>(0,a.jsxs)("div",{className:"flex justify-between items-center",style:{backgroundColor:"var(--bg-secondary)",border:"1px solid var(--border-color)",borderRadius:"var(--border-radius-sm)",padding:"0.5rem 1rem"},children:[(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("strong",{style:{fontSize:"0.9rem"},children:t.label}),(0,a.jsx)("span",{className:"text-muted",style:{fontSize:"0.75rem",wordBreak:"break-all"},children:t.url})]}),(0,a.jsx)("button",{className:"btn btn-secondary btn-sm",style:{minWidth:"auto",padding:"0.25rem 0.5rem"},onClick:()=>{var r;return r=t.id,void(b(e=>e.filter(e=>e.id!==r)),e("Link removed.","info"))},"aria-label":`Remove ${t.label}`,children:"Delete"})]},t.id))}),(0,a.jsxs)("div",{className:"card flex flex-col gap-3",style:{borderStyle:"solid",padding:"1rem"},children:[(0,a.jsxs)("div",{className:"grid-cols-2",style:{gap:"1rem"},children:[(0,a.jsxs)("div",{className:"form-group",style:{marginBottom:0},children:[(0,a.jsx)("label",{className:"form-label",style:{fontSize:"0.8rem"},htmlFor:"bio-new-label",children:"Link Label"}),(0,a.jsx)("input",{id:"bio-new-label",type:"text",value:p,onChange:e=>g(e.target.value),placeholder:"e.g. My Website",className:"form-control"})]}),(0,a.jsxs)("div",{className:"form-group",style:{marginBottom:0},children:[(0,a.jsx)("label",{className:"form-label",style:{fontSize:"0.8rem"},htmlFor:"bio-new-url",children:"URL"}),(0,a.jsx)("input",{id:"bio-new-url",type:"text",value:x,onChange:e=>h(e.target.value),placeholder:"e.g. johndoe.com",className:"form-control"})]})]}),(0,a.jsx)("button",{className:"btn btn-secondary btn-sm",onClick:()=>{if(!p.trim()||!x.trim())return void e("Please enter both a link label and destination URL.","warning");let t=x.trim();/^https?:\/\//i.test(t)||(t="https://"+t);let r={id:Math.random().toString(36).substring(2,9),label:p.trim(),url:t};b(e=>[...e,r]),g(""),h(""),e("Link added to bio list!","success")},children:"+ Add Link Card"})]}),(0,a.jsx)("button",{className:"btn btn-primary w-full",onClick:()=>{let r,a,l;if(0===f.length)return void e("Add at least one link before exporting your page.","warning");let o=new Blob([(r=u[c],a=f.map(e=>`
      <a href="${e.url}" class="card" target="_blank" rel="noopener noreferrer">
        ${e.label}
      </a>
      `).join(""),l=n?`<img class="avatar" src="${n}" alt="${t}" />`:`<div class="avatar-placeholder">${t.charAt(0)}</div>`,`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t} | Link in Bio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Inter', -apple-system, sans-serif;
      background: ${r.bg};
      color: ${r.text};
      min-height: 100vh;
      display: flex;
      justify-content: center;
      padding: 3rem 1rem;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
    }
    .container {
      width: 100%;
      max-width: 480px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .avatar {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid ${r.text};
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      margin-bottom: 1.25rem;
    }
    .avatar-placeholder {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      background-color: ${r.cardBg};
      color: ${r.text};
      border: 2px solid ${r.text};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.25rem;
      font-weight: 700;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      margin-bottom: 1.25rem;
    }
    .title {
      font-size: 1.35rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
      line-height: 1.25;
    }
    .subtitle {
      font-size: 0.95rem;
      opacity: 0.85;
      margin-bottom: 2.5rem;
    }
    .links-list {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .card {
      display: block;
      width: 100%;
      padding: 1.15rem 1.5rem;
      background-color: ${r.cardBg};
      color: ${r.cardText};
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.95rem;
      transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s;
      box-shadow: 0 4px 10px rgba(0,0,0,0.08);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }
    .card:hover {
      transform: translateY(-2px);
      background-color: rgba(255, 255, 255, 0.25);
    }
    .footer {
      margin-top: auto;
      padding-top: 4rem;
      font-size: 0.75rem;
      opacity: 0.6;
    }
    .footer a {
      color: inherit;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    ${l}
    <h1 class="title">${t}</h1>
    <p class="subtitle">${i}</p>
    
    <div class="links-list">
      ${a}
    </div>

    <div class="footer">
      Powered by <a href="https://creatorunits.com" target="_blank">Creators Units</a>
    </div>
  </div>
</body>
</html>`)],{type:"text/html"}),s=URL.createObjectURL(o),d=document.createElement("a");d.href=s,d.download="index.html",document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(s),e("Link-in-bio HTML file downloaded successfully!","success")},style:{marginTop:"0.5rem"},children:"\uD83D\uDCBE Export Static HTML index.html"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("span",{className:"form-label w-full",style:{fontSize:"1.1rem"},children:"Mobile Device Preview"}),(0,a.jsxs)("div",{style:{width:"300px",height:"580px",borderRadius:"36px",border:"12px solid #1e293b",backgroundColor:"black",boxShadow:"0 20px 40px rgba(0,0,0,0.15)",overflow:"hidden",position:"relative",display:"flex",flexDirection:"column",padding:"2.5rem 1rem 1rem 1rem",background:y.bg,color:y.text},children:[(0,a.jsx)("div",{style:{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",width:"110px",height:"22px",backgroundColor:"#1e293b",borderBottomLeftRadius:"15px",borderBottomRightRadius:"15px"}}),n?(0,a.jsx)("img",{src:n,alt:t,style:{width:"64px",height:"64px",borderRadius:"50%",objectFit:"cover",border:`2px solid ${y.text}`,marginBottom:"0.75rem",boxShadow:"0 2px 6px rgba(0,0,0,0.15)"}}):(0,a.jsx)("div",{style:{width:"64px",height:"64px",borderRadius:"50%",backgroundColor:y.cardBg,color:y.text,border:`2px solid ${y.text}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5rem",fontWeight:"bold",marginBottom:"0.75rem"},children:t.charAt(0)}),(0,a.jsx)("h3",{style:{color:y.text,fontSize:"1.1rem",fontWeight:"700",margin:"0 0 0.15rem 0",lineHeight:"1.2"},children:t}),(0,a.jsx)("span",{style:{fontSize:"0.8rem",opacity:.85,marginBottom:"1.5rem"},children:i}),(0,a.jsx)("div",{className:"flex flex-col gap-3 w-full",style:{overflowY:"auto",paddingRight:"4px"},children:f.map(e=>(0,a.jsx)("div",{style:{width:"100%",padding:"0.8rem 1rem",backgroundColor:y.cardBg,color:y.cardText,borderRadius:"10px",fontWeight:"600",fontSize:"0.85rem",textAlign:"center",boxShadow:"0 2px 4px rgba(0,0,0,0.05)",border:"1px solid rgba(255,255,255,0.05)",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},children:e.label},e.id))}),(0,a.jsx)("div",{style:{marginTop:"auto",fontSize:"0.6rem",opacity:.5},children:"Powered by Creators Units"})]})]})]})})}}}]);