import{_ as a,o as l,c as o,k as s,a as n,Q as p}from"./chunks/framework.baa59804.js";const A=JSON.parse('{"title":"📍 Job Blips","description":"","frontmatter":{"prev":false,"next":false,"aside":false},"headers":[],"relativePath":"doc_scripts/spooni/spooni_job_blips.md","filePath":"doc_scripts/spooni/spooni_job_blips.md","lastUpdated":1720450344000}'),e={name:"doc_scripts/spooni/spooni_job_blips.md"},c=s("h1",{id:"📍-job-blips",tabindex:"-1"},[n("📍 Job Blips "),s("a",{class:"header-anchor",href:"#📍-job-blips","aria-label":'Permalink to "📍 Job Blips"'},"​")],-1),t=s("p",null,[n("Documentation relating to the "),s("a",{href:"https://github.com/Spooni-Development/spooni_job_blips",target:"_blank",rel:"noreferrer"},"spooni_job_blips"),n(".")],-1),r=s("hr",null,null,-1),E=s("br",null,null,-1),y=s("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1),i=p(`<h2 id="_1-installation" tabindex="-1">1. Installation <a class="header-anchor" href="#_1-installation" aria-label="Permalink to &quot;1. Installation&quot;">​</a></h2><p>spooni_job_blips works only with VORP.</p><p>To install spooni_job_blips:</p><ul><li>Download the resource <ul><li>On <a href="https://github.com/Spooni-Development/spooni_job_blips" target="_blank" rel="noreferrer">Github</a></li></ul></li><li>Drag and drop the resource into your resources folder <ul><li><code>spooni_job_blips</code></li></ul></li><li>Add this ensure in your server.cfg<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ensure spooni_job_blips</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ensure spooni_job_blips</span></span></code></pre></div></li><li>Now you can configure and translate the script as you like <ul><li><code>config.lua</code></li><li><code>translation.lua</code></li></ul></li><li>At the end <ul><li>Restart the server</li></ul></li></ul><p>If you have any problems, you can always open a ticket in the <a href="https://discord.gg/spooni" target="_blank" rel="noreferrer">Spooni Discord</a>.</p><h2 id="_2-usage" tabindex="-1">2. Usage <a class="header-anchor" href="#_2-usage" aria-label="Permalink to &quot;2. Usage&quot;">​</a></h2><p>Go to a configured blip and interact with the prompt. The color of the blip then changes.</p><h2 id="_3-for-developers" tabindex="-1">3. For developers <a class="header-anchor" href="#_3-for-developers" aria-label="Permalink to &quot;3. For developers&quot;">​</a></h2><details class="details custom-block"><summary>Config.lua</summary><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Config </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Config.</span><span style="color:#B392F0;">Locale</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;de&#39; </span><span style="color:#6A737D;">-- en, de, fr</span></span>
<span class="line"><span style="color:#E1E4E8;">Config.</span><span style="color:#B392F0;">Key</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0x760A9C6F</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">-- G</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Config.</span><span style="color:#B392F0;">Blips</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">     {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Sheriff Valentine&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        coords </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">277.847</span><span style="color:#E1E4E8;">, y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">807.4005</span><span style="color:#E1E4E8;">, z </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">119.38</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        radius </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1.5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        sprite </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1047294027</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        colors </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            online </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;BLIP_MODIFIER_MP_COLOR_8&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">-- Green</span></span>
<span class="line"><span style="color:#E1E4E8;">            offline </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;BLIP_MODIFIER_MP_COLOR_32&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">-- White</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        jobs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span><span style="color:#9ECBFF;">&#39;police&#39;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Sheriff Blackwater&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        coords </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">768.043</span><span style="color:#E1E4E8;">, y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1267.01</span><span style="color:#E1E4E8;">, z </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">44.053</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        radius </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1.5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        sprite </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1047294027</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        colors </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            online </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;BLIP_MODIFIER_MP_COLOR_8&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">-- Green</span></span>
<span class="line"><span style="color:#E1E4E8;">            offline </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;BLIP_MODIFIER_MP_COLOR_32&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">-- White</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        jobs </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span><span style="color:#9ECBFF;">&#39;police&#39;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Config </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Config.</span><span style="color:#6F42C1;">Locale</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;de&#39; </span><span style="color:#6A737D;">-- en, de, fr</span></span>
<span class="line"><span style="color:#24292E;">Config.</span><span style="color:#6F42C1;">Key</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0x760A9C6F</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">-- G</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Config.</span><span style="color:#6F42C1;">Blips</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">     {</span></span>
<span class="line"><span style="color:#24292E;">        name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Sheriff Valentine&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        coords </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">277.847</span><span style="color:#24292E;">, y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">807.4005</span><span style="color:#24292E;">, z </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">119.38</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        radius </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1.5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        sprite </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1047294027</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        colors </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            online </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;BLIP_MODIFIER_MP_COLOR_8&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">-- Green</span></span>
<span class="line"><span style="color:#24292E;">            offline </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;BLIP_MODIFIER_MP_COLOR_32&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">-- White</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        jobs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#032F62;">&#39;police&#39;</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Sheriff Blackwater&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        coords </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">768.043</span><span style="color:#24292E;">, y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1267.01</span><span style="color:#24292E;">, z </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">44.053</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        radius </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1.5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        sprite </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1047294027</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        colors </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            online </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;BLIP_MODIFIER_MP_COLOR_8&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">-- Green</span></span>
<span class="line"><span style="color:#24292E;">            offline </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;BLIP_MODIFIER_MP_COLOR_32&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">-- White</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        jobs </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#032F62;">&#39;police&#39;</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></details>`,9),d=[c,t,r,E,y,i];function _(F,h,u,b,f,C){return l(),o("div",null,d)}const g=a(e,[["render",_]]);export{A as __pageData,g as default};