import{_ as s,o as a,c as l,R as n}from"./chunks/framework.318fa179.js";const D=JSON.parse('{"title":"PostgreSQL DROP DATABASE 删除数据库","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/databaseAndTable/删除数据库.md","filePath":"database/postgreSQL/databaseAndTable/删除数据库.md","lastUpdated":1690289709000}'),p={name:"database/postgreSQL/databaseAndTable/删除数据库.md"},o=n(`<h1 id="postgresql-drop-database-删除数据库" tabindex="-1">PostgreSQL DROP DATABASE 删除数据库 <a class="header-anchor" href="#postgresql-drop-database-删除数据库" aria-label="Permalink to &quot;PostgreSQL DROP DATABASE 删除数据库&quot;">​</a></h1><p>PostgreSQL 允许您使用 <code>DROP DATABASE</code> 语句删除已经存在的数据库。</p><p>当我们不需要某个数据库的时候，我们可以将数据库删除。在 PostgreSQL 中，<code>DROP DATABASE</code> 语句用来删除一个数据库。</p><p><strong>注意</strong>：<code>DROP DATABASE</code> 语句将永久删除数据库和数据库中的所有表，请谨慎操作。</p><h2 id="drop-database-语法" tabindex="-1">DROP DATABASE 语法 <a class="header-anchor" href="#drop-database-语法" aria-label="Permalink to &quot;DROP DATABASE 语法&quot;">​</a></h2><p>要执行 <code>DROP DATABASE</code> 语句，您需要是超级用户或者是数据库的所有者。</p><p>下面是 PostgreSQL <code>DROP DATABASE</code> 语句的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DATABASE</span><span style="color:#A6ACCD;"> [IF EXISTS] </span><span style="color:#F78C6C;">database_name</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><p>在上面的语法中：</p><ul><li><code>database_name</code> 是要删除的数据库的名称。您需要提供一个已经存在的数据库的名称。</li><li>如果您提供了一个不存在的数据库名称，PostgreSQL 将给出一个错误报告。您可以使用 <code>IF EXISTS</code> 选项防止输出此错误。 PostgreSQL 对于不存在的数据库将给出一个通知。</li></ul><p>您不能删除仍有活动连接的数据库。此时， PostgreSQL 将给出一个错误报告。您可以使用 <code>pg_terminate_backend()</code> 函数结束活动连接，再删除此数据库。</p><h2 id="postgresql-drop-database-实例" tabindex="-1">PostgreSQL DROP DATABASE 实例 <a class="header-anchor" href="#postgresql-drop-database-实例" aria-label="Permalink to &quot;PostgreSQL DROP DATABASE 实例&quot;">​</a></h2><p>在本实例中，我们将使用 psql 工具连接 PostgreSQL 服务器， <a href="/database/postgreSQL/databaseAndTable/创建数据库.html">创建一个数据库</a> <code>test_db</code> 并删除它。</p><ol><li><p>首先，请使用具有权限的用户登录 PostgreSQL 服务器：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">~</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> psql -U postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">psql</span><span style="color:#A6ACCD;"> (14.4)</span></span>
<span class="line"><span style="color:#FFCB6B;">Type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">help</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">help.</span></span></code></pre></div></li><li><p>其次，使用默认的选项创建 <code>test_db</code> 数据库：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DATABASE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_db</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DATABASE</span></span></code></pre></div><p>如果您输入了一个已经存在的数据库名称， PostgreSQL 将返回一个错误：<code>ERROR: database &quot;test_db&quot; already exists</code></p></li><li><p>然后，使用 <code>\\c</code> 命令切换到刚刚创建的 <code>test_db</code> 数据库:</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\c test_db;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">You</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">are</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">now</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">connected</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">database</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test_db</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">postgres</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.</span></span></code></pre></div></li><li><p>然后，尝试删除 <code>test_db</code> 数据库</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DATABASE</span><span style="color:#A6ACCD;"> test_db;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ERROR:</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">cannot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">drop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">currently</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">open</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">database</span></span></code></pre></div><p>也就是说，您不能删除当前打开的数据库。</p></li><li><p>保持刚刚的会话，打开一个新的会话并登陆，然后尝试删除：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DATABASE</span><span style="color:#A6ACCD;"> test_db;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ERROR:</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">database</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test_db</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">being</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">accessed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">by</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">other</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">users</span></span>
<span class="line"><span style="color:#FFCB6B;">DETAIL:</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">There</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">other</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">session</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">database.</span></span></code></pre></div><p>这里， PostgreSQL 报告了一个错误： 数据库 <code>test_db</code> 正在被其他用户访问。</p></li><li><p>关闭以前的会话，并回到这个会话，重新尝试删除：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DATABASE</span><span style="color:#A6ACCD;"> test_db;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DATABASE</span></span></code></pre></div><p>此时，数据库已经被删除。</p></li></ol><h2 id="查看数据库的活动连接并关闭" tabindex="-1">查看数据库的活动连接并关闭 <a class="header-anchor" href="#查看数据库的活动连接并关闭" aria-label="Permalink to &quot;查看数据库的活动连接并关闭&quot;">​</a></h2><p>有时候，并不是我们自己连接了要删除的数据库。我们可以从 <code>pg_stat_activity</code> 视图中查询数据库中的活动连接，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">  pid,</span></span>
<span class="line"><span style="color:#A6ACCD;">  usename,</span></span>
<span class="line"><span style="color:#A6ACCD;">  application_name</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">  pg_stat_activity</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span></span>
<span class="line"><span style="color:#A6ACCD;">  datname </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test_db</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pid</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">usename</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">application_name</span></span>
<span class="line"><span style="color:#FFCB6B;">-------+----------+------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">37771</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">psql</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">row</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>然后，使用 <code>pg_terminate_backend()</code> 函数结束刚刚返回的活动连接：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> pg_terminate_backend(</span><span style="color:#F78C6C;">37771</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pg_terminate_backend</span></span>
<span class="line"><span style="color:#FFCB6B;">----------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">t</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">row</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>然后，使用 <code>DROP DATABASE</code> 删除数据库就可以了。</p><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>PostgreSQL <code>DROP DATABASE</code> 语句用来删除已经存在的数据库。删除数据库是一个很危险的操作，请务必小心。</p>`,24),e=[o];function t(c,r,C,A,i,y){return a(),l("div",null,e)}const h=s(p,[["render",t]]);export{D as __pageData,h as default};
