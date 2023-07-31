import{_ as a,o as e,c as o,R as s}from"./chunks/framework.318fa179.js";const h=JSON.parse('{"title":"PostgreSQL pg_conf_load_time() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/pg_conf_load_time.md","filePath":"database/postgreSQL/ref/pg_conf_load_time.md","lastUpdated":1690341661000}'),t={name:"database/postgreSQL/ref/pg_conf_load_time.md"},l=s('<h1 id="postgresql-pg-conf-load-time-函数" tabindex="-1">PostgreSQL pg_conf_load_time() 函数 <a class="header-anchor" href="#postgresql-pg-conf-load-time-函数" aria-label="Permalink to &quot;PostgreSQL pg\\_conf\\_load\\_time() 函数&quot;">​</a></h1><p>PostgreSQL <code>pg_conf_load_time()</code> 函数返回上次加载服务器配置文件的时间（带有时区信息）。</p><h2 id="pg-conf-load-time-语法" tabindex="-1"><code>pg_conf_load_time()</code> 语法 <a class="header-anchor" href="#pg-conf-load-time-语法" aria-label="Permalink to &quot;`pg_conf_load_time()` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>pg_conf_load_time()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pg_conf_load_time</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">timestamp with time zone</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><p>PostgreSQL <code>pg_conf_load_time()</code> 函数无需任何参数。</p><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>pg_conf_load_time()</code> 函数返回一个带有时区信息的时间，它是上次加载服务器配置文件的时间。 如果当前会话当时处于活动状态，则这将是会话本身重新读取配置文件的时间。因此不同会话中的值会不同。</p><h2 id="pg-conf-load-time-示例" tabindex="-1"><code>pg_conf_load_time()</code> 示例 <a class="header-anchor" href="#pg-conf-load-time-示例" aria-label="Permalink to &quot;`pg_conf_load_time()` 示例&quot;">​</a></h2><p>要获取当前会话连接的服务端进程的进程 ID，请使用下面带有 <code>pg_conf_load_time()</code> 函数的语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> pg_conf_load_time</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pg_conf_load_time</span></span>\n<span class="line"><span style="color:#FFCB6B;">-------------------------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">2022-07-13</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">13</span><span style="color:#C3E88D;">:40:56.669089+08</span></span></code></pre></div><p>注意， 您的值可能会不同。</p>',14),n=[l];function p(c,d,i,r,_,g){return e(),o("div",null,n)}const f=a(t,[["render",p]]);export{h as __pageData,f as default};
