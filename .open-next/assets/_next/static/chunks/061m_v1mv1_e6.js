(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,36645,e=>{"use strict";var t=e.i(43476),s=e.i(71645),r=e.i(8776);e.s(["default",0,function(){let{showToast:e}=(0,r.useToast)(),[l,i]=(0,s.useState)(""),[a,o]=(0,s.useState)(""),[n,c]=(0,s.useState)(""),d={tutorial:`📝 RESOURCES & LINKS:
- Tool link: https://example.com
- Join our community: https://example.com

📌 TIMESTAMPS:
0:00 - Introduction
1:15 - Step 1: Getting Started
4:30 - Step 2: Advanced configurations
8:45 - Troubleshooting tips
12:00 - Summary and Outro

👋 CONNECT WITH US:
- Twitter: @creator
- Instagram: @creator

#tutorial #youtube #howto`,review:`🔥 GET THE PRODUCTS:
- Product A (Affiliate link): https://example.com
- Product B (Affiliate link): https://example.com

📊 VIDEO COMPARISON CHART:
0:00 - Intro & Unboxing
2:00 - Design and Build Quality
5:15 - Key Features Breakdown
9:30 - Pros vs Cons
12:45 - Final Recommendation

⚙️ MY CAMERA GEAR:
- Main Camera: https://example.com
- Mic setup: https://example.com

#review #unboxing #tech`,general:`Enjoyed this video? Support us by subscribing! 🔔

🔗 STAY CONNECTED:
- Visit our blog: https://example.com
- Sign up to newsletter: https://example.com

💬 WHAT TO WATCH NEXT:
- Related video 1: https://youtu.be/...
- Related video 2: https://youtu.be/...

#vlog #contentcreator #creatorunits`},m=t=>{o(d[t]),e("Template loaded into description field!","success")},h=(t,s)=>{t.trim()?(navigator.clipboard.writeText(t),e(`${s} copied to clipboard!`,"success")):e(`${s} is empty. Write something to copy!`,"warning")};return(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)("div",{className:"grid-cols-2",style:{gap:"2.5rem"},children:[(0,t.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,t.jsx)("span",{className:"form-label",style:{fontSize:"1.1rem"},children:"Draft Video Metadata"}),(0,t.jsxs)("div",{className:"form-group",style:{marginBottom:0},children:[(0,t.jsxs)("div",{className:"flex justify-between items-center",style:{marginBottom:"0.25rem"},children:[(0,t.jsx)("label",{className:"form-label",style:{margin:0},htmlFor:"yt-title-helper",children:"Video Title"}),(0,t.jsxs)("span",{style:{fontSize:"0.8rem",color:l.length>60?"var(--warning)":"var(--text-muted)"},children:[l.length," / 100 chars"]})]}),(0,t.jsx)("input",{id:"yt-title-helper",type:"text",value:l,onChange:e=>i(e.target.value),placeholder:"Catchy, high-contrast title containing your primary keyword",className:"form-control"}),(0,t.jsxs)("div",{className:"flex justify-between",style:{marginTop:"0.25rem"},children:[(0,t.jsx)("span",{className:"text-muted",style:{fontSize:"0.75rem"},children:"Keep under 60 characters for complete mobile listings display."}),(0,t.jsx)("span",{onClick:()=>h(l,"Title"),style:{fontSize:"0.8rem",cursor:"pointer",color:"var(--accent)",fontWeight:"600"},children:"Copy Title"})]})]}),(0,t.jsxs)("div",{className:"form-group",style:{marginBottom:0},children:[(0,t.jsxs)("div",{className:"flex justify-between items-center",style:{marginBottom:"0.25rem"},children:[(0,t.jsx)("label",{className:"form-label",style:{margin:0},htmlFor:"yt-desc-helper",children:"Video Description"}),(0,t.jsxs)("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:[a.length," / 5000 chars"]})]}),(0,t.jsxs)("div",{className:"flex gap-2",style:{marginBottom:"0.5rem"},children:[(0,t.jsx)("button",{className:"btn btn-secondary btn-sm",onClick:()=>m("tutorial"),children:"+ Tutorial Template"}),(0,t.jsx)("button",{className:"btn btn-secondary btn-sm",onClick:()=>m("review"),children:"+ Review Template"}),(0,t.jsx)("button",{className:"btn btn-secondary btn-sm",onClick:()=>m("general"),children:"+ General Template"})]}),(0,t.jsx)("textarea",{id:"yt-desc-helper",value:a,onChange:e=>o(e.target.value),placeholder:"Describe your video contents, provide links, resources, and timestamps...",className:"form-control",style:{height:"200px",fontFamily:"inherit"}}),(0,t.jsx)("div",{className:"flex justify-end",style:{marginTop:"0.25rem"},children:(0,t.jsx)("span",{onClick:()=>h(a,"Description"),style:{fontSize:"0.8rem",cursor:"pointer",color:"var(--accent)",fontWeight:"600"},children:"Copy Description"})})]}),(0,t.jsxs)("div",{className:"form-group",style:{marginBottom:0},children:[(0,t.jsxs)("div",{className:"flex justify-between items-center",style:{marginBottom:"0.25rem"},children:[(0,t.jsx)("label",{className:"form-label",style:{margin:0},htmlFor:"yt-tags-helper",children:"Video Tags"}),(0,t.jsxs)("span",{style:{fontSize:"0.8rem",color:n.length>500?"var(--error)":"var(--text-muted)"},children:[n.length," / 500 chars"]})]}),(0,t.jsx)("textarea",{id:"yt-tags-helper",value:n,onChange:e=>c(e.target.value),placeholder:"how to write code, beginner tutorial, programming tips...",className:"form-control",style:{height:"70px"}}),(0,t.jsxs)("div",{className:"flex justify-between",style:{marginTop:"0.25rem"},children:[(0,t.jsx)("span",{className:"text-muted",style:{fontSize:"0.75rem"},children:"Separate tags with commas."}),(0,t.jsx)("span",{onClick:()=>h(n,"Tags"),style:{fontSize:"0.8rem",cursor:"pointer",color:"var(--accent)",fontWeight:"600"},children:"Copy Tags"})]})]})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,t.jsxs)("div",{className:"card",style:{borderStyle:"solid"},children:[(0,t.jsx)("span",{className:"form-label",style:{fontSize:"1.05rem"},children:"SEO Optimizations Checklist"}),(0,t.jsx)("div",{className:"flex flex-col gap-2",style:{marginTop:"0.75rem"},children:[{text:"Title has hook and target keywords",checked:l.trim().length>10},{text:"Title is under 60 characters (Mobile safe)",checked:l.length>0&&l.length<=60},{text:"Description is detailed (at least 150 characters)",checked:a.trim().length>=150},{text:"Description includes timestamp chapters (e.g. 0:00 - Intro)",checked:/0:00|00:00/i.test(a)},{text:"Description includes calls to action & links",checked:/https?:\/\//i.test(a)},{text:"Tags are populated (character limit 500)",checked:n.length>0&&n.length<=500}].map((e,s)=>(0,t.jsxs)("div",{className:"flex items-center gap-2",style:{fontSize:"0.9rem"},children:[(0,t.jsx)("span",{style:{color:e.checked?"var(--success)":"var(--text-muted)",fontSize:"1.1rem"},children:e.checked?"✓":"○"}),(0,t.jsx)("span",{style:{color:e.checked?"inherit":"var(--text-secondary)"},children:e.text})]},s))})]}),(0,t.jsxs)("div",{className:"card",style:{backgroundColor:"var(--bg-secondary)",borderStyle:"solid",padding:"1.25rem"},children:[(0,t.jsx)("h4",{style:{fontSize:"0.95rem",marginBottom:"0.5rem"},children:"💡 Metadata SEO Guidelines"}),(0,t.jsxs)("ul",{style:{fontSize:"0.85rem",paddingLeft:"1.25rem",color:"var(--text-secondary)",display:"flex",flexDirection:"column",gap:"0.5rem"},children:[(0,t.jsx)("li",{children:"Put your **target keyword** in the first 10-15 characters of the video title."}),(0,t.jsx)("li",{children:"Insert **primary links** (signup, products) in the top 2 lines of description so they display above the fold."}),(0,t.jsx)("li",{children:"Always add **timestamps** starting at exactly **0:00** or **00:00** to enable YouTube video chapters."}),(0,t.jsx)("li",{children:"Make tags as relevant as possible; generic keywords do not help algorithms search video contents."})]})]})]})]})})}])},92953,e=>{e.n(e.i(36645))}]);