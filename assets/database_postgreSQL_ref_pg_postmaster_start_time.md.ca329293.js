import{_ as t,o as s,c as a,R as e}from"./chunks/framework.318fa179.js";const h=JSON.parse('{"title":"PostgreSQL pg_postmaster_start_time() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/pg_postmaster_start_time.md","filePath":"database/postgreSQL/ref/pg_postmaster_start_time.md","lastUpdated":1690341661000}'),o={name:"database/postgreSQL/ref/pg_postmaster_start_time.md"},p=e('<h1 id="postgresql-pg-postmaster-start-time-函数" tabindex="-1">PostgreSQL pg_postmaster_start_time() 函数 <a class="header-anchor" href="#postgresql-pg-postmaster-start-time-函数" aria-label="Permalink to &quot;PostgreSQL pg\\_postmaster\\_start\\_time() 函数&quot;">​</a></h1><p>PostgreSQL <code>pg_postmaster_start_time()</code> 函数返回服务器启动的时间。</p><h2 id="pg-postmaster-start-time-语法" tabindex="-1"><code>pg_postmaster_start_time()</code> 语法 <a class="header-anchor" href="#pg-postmaster-start-time-语法" aria-label="Permalink to &quot;`pg_postmaster_start_time()` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>pg_postmaster_start_time()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pg_postmaster_start_time</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">timestamp with time zone</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><p>PostgreSQL <code>pg_postmaster_start_time()</code> 函数无需任何参数。</p><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>pg_postmaster_start_time()</code> 函数返回一个带有时区信息的时间，它是服务器启动的时间。</p><h2 id="pg-postmaster-start-time-示例" tabindex="-1"><code>pg_postmaster_start_time()</code> 示例 <a class="header-anchor" href="#pg-postmaster-start-time-示例" aria-label="Permalink to &quot;`pg_postmaster_start_time()` 示例&quot;">​</a></h2><p>要获取当前服务器启动的时间，请使用下面带有 <code>pg_postmaster_start_time()</code> 函数的语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> pg_postmaster_start_time</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pg_postmaster_start_time</span></span>\n<span class="line"><span style="color:#FFCB6B;">-------------------------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2022-07-13</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">13</span><span style="color:#C3E88D;">:40:57.323244+08</span></span></code></pre></div><p>注意， 您的值可能会不同。</p>',14),r=[p];function l(n,i,c,_,m,d){return s(),a("div",null,r)}const C=t(o,[["render",l]]);export{h as __pageData,C as default};
