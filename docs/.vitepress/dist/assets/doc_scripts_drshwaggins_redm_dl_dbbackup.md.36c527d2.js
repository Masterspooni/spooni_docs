import{_ as n,o as l,c as o,k as s,a,Q as e}from"./chunks/framework.baa59804.js";const D=JSON.parse('{"title":"💾 dl_dbbackup","description":"","frontmatter":{"prev":false,"next":false},"headers":[],"relativePath":"doc_scripts/drshwaggins/redm/dl_dbbackup.md","filePath":"doc_scripts/drshwaggins/redm/dl_dbbackup.md","lastUpdated":1708033215000}'),p={name:"doc_scripts/drshwaggins/redm/dl_dbbackup.md"},t=s("h1",{id:"💾-dl-dbbackup",tabindex:"-1"},[a("💾 dl_dbbackup "),s("a",{class:"header-anchor",href:"#💾-dl-dbbackup","aria-label":'Permalink to "💾 dl_dbbackup"'},"​")],-1),r=s("p",null,[a("Documentation relating to the "),s("a",{href:"https://drshwaggins-scripts.tebex.io/package/5986293",target:"_blank",rel:"noreferrer"},"dl_dbbackup"),a(".")],-1),c=s("hr",null,null,-1),i=s("br",null,null,-1),u=s("iframe",{width:"560",height:"315",src:"https://cdn.discordapp.com/attachments/901261289316319302/1200465560396378112/dl_dbbackup.png?ex=65c647ad&is=65b3d2ad&hm=dd3050daa240782bf6c55353aafbdee8bff2f2445980873a37c339fa88ff0e5d&",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,-1),d=e(`<h2 id="_1-installation" tabindex="-1">1. Installation <a class="header-anchor" href="#_1-installation" aria-label="Permalink to &quot;1. Installation&quot;">​</a></h2><p>dl_questionwhitelist works Standalone.</p><p>To install dl_dbbackup:</p><ul><li>Drag and drop the resource into your resources folder <ul><li><code>dl_dbbackup</code></li></ul></li><li>Add this ensure in your server.cfg <ul><li><code>ensure dl_dbbackup</code></li></ul></li><li>Now you can configure and translate the script as you like <ul><li><code>config.lua</code></li></ul></li><li>At the end <ul><li>Restart the server</li></ul></li></ul><p>If you have any problems, you can always open a ticket in the <a href="https://discord.gg/K9H27J5VaS" target="_blank" rel="noreferrer">DrShwaggins Discord</a>.</p><h2 id="_2-usage" tabindex="-1">2. Usage <a class="header-anchor" href="#_2-usage" aria-label="Permalink to &quot;2. Usage&quot;">​</a></h2><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p><h2 id="_3-for-developers" tabindex="-1">3. For developers <a class="header-anchor" href="#_3-for-developers" aria-label="Permalink to &quot;3. For developers&quot;">​</a></h2><details class="details custom-block"><summary>Config.lua</summary><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Config </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#E1E4E8;">Config.</span><span style="color:#B392F0;">BackupPrints</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Config.</span><span style="color:#B392F0;">Databasename</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;YOUR_DATABASE_HERE&quot; </span><span style="color:#6A737D;">--importend for keys and constraints</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">----------- INFORMATIONS-----------</span></span>
<span class="line"><span style="color:#6A737D;">-- MIN AMOUNTS FOR TIME DIFFERENCES</span></span>
<span class="line"><span style="color:#6A737D;">-- MIN HOUR = 1</span></span>
<span class="line"><span style="color:#6A737D;">-- MIN MINUTE = 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- IF YOU USE &quot;m&quot;(minute) or &quot;h&quot;(hour) the script will make a backup after each script restart and after x amount of time you setup</span></span>
<span class="line"><span style="color:#6A737D;">-- If you want to backup only after each script restart you can set Config.TimeDifference = &quot;d&quot; and Config.SaveEveryUnit = 0</span></span>
<span class="line"><span style="color:#6A737D;">-- If you use Config.TimeDifference = &quot;d&quot; and a Config.SaveEveryUnit over 0 the script will backup on the next script restart the after time limit it reached</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Config.</span><span style="color:#B392F0;">TimeDifference</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;d&quot; </span><span style="color:#6A737D;">-- &quot;d&quot;:day, &quot;h&quot;:hour, &quot;m&quot;:minute</span></span>
<span class="line"><span style="color:#E1E4E8;">Config.</span><span style="color:#B392F0;">SaveEveryUnit</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">-- IF &quot;h&quot; MIN AMOUNT 1 , IF &quot;m&quot; MIN AMOUNT 10</span></span>
<span class="line"><span style="color:#E1E4E8;">Config.</span><span style="color:#B392F0;">MaxBackups</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">14</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Config.</span><span style="color:#B392F0;">ManualDataseBackupCommand</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;dbbackup&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">Config.</span><span style="color:#B392F0;">AllowedBackupCommand</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { </span><span style="color:#6A737D;">-- INSERT STEAM IDS OF PEOPLE WHO ARE ALLOWED TO DO A DATABASE BACKUP MANUAL WITH COMMAND</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;steam:1100001243g2348&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Config </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;">Config.</span><span style="color:#6F42C1;">BackupPrints</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Config.</span><span style="color:#6F42C1;">Databasename</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;YOUR_DATABASE_HERE&quot; </span><span style="color:#6A737D;">--importend for keys and constraints</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">----------- INFORMATIONS-----------</span></span>
<span class="line"><span style="color:#6A737D;">-- MIN AMOUNTS FOR TIME DIFFERENCES</span></span>
<span class="line"><span style="color:#6A737D;">-- MIN HOUR = 1</span></span>
<span class="line"><span style="color:#6A737D;">-- MIN MINUTE = 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- IF YOU USE &quot;m&quot;(minute) or &quot;h&quot;(hour) the script will make a backup after each script restart and after x amount of time you setup</span></span>
<span class="line"><span style="color:#6A737D;">-- If you want to backup only after each script restart you can set Config.TimeDifference = &quot;d&quot; and Config.SaveEveryUnit = 0</span></span>
<span class="line"><span style="color:#6A737D;">-- If you use Config.TimeDifference = &quot;d&quot; and a Config.SaveEveryUnit over 0 the script will backup on the next script restart the after time limit it reached</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Config.</span><span style="color:#6F42C1;">TimeDifference</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;d&quot; </span><span style="color:#6A737D;">-- &quot;d&quot;:day, &quot;h&quot;:hour, &quot;m&quot;:minute</span></span>
<span class="line"><span style="color:#24292E;">Config.</span><span style="color:#6F42C1;">SaveEveryUnit</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">-- IF &quot;h&quot; MIN AMOUNT 1 , IF &quot;m&quot; MIN AMOUNT 10</span></span>
<span class="line"><span style="color:#24292E;">Config.</span><span style="color:#6F42C1;">MaxBackups</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">14</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Config.</span><span style="color:#6F42C1;">ManualDataseBackupCommand</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;dbbackup&quot;</span></span>
<span class="line"><span style="color:#24292E;">Config.</span><span style="color:#6F42C1;">AllowedBackupCommand</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { </span><span style="color:#6A737D;">-- INSERT STEAM IDS OF PEOPLE WHO ARE ALLOWED TO DO A DATABASE BACKUP MANUAL WITH COMMAND</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;steam:1100001243g2348&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></details>`,9),y=[t,r,c,i,u,d];function E(f,h,m,A,b,_){return l(),o("div",null,y)}const F=n(p,[["render",E]]);export{D as __pageData,F as default};
