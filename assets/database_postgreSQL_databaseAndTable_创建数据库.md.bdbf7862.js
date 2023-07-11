import{_ as e,o as s,c as a,R as l}from"./chunks/framework.333b51ca.js";const m=JSON.parse('{"title":"PostgreSQL CREATE DATABASE 创建数据库","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/databaseAndTable/创建数据库.md","filePath":"database/postgreSQL/databaseAndTable/创建数据库.md","lastUpdated":1689061386000}'),o={name:"database/postgreSQL/databaseAndTable/创建数据库.md"},p=l(`<h1 id="postgresql-create-database-创建数据库" tabindex="-1">PostgreSQL CREATE DATABASE 创建数据库 <a class="header-anchor" href="#postgresql-create-database-创建数据库" aria-label="Permalink to &quot;PostgreSQL CREATE DATABASE 创建数据库&quot;">​</a></h1><p>本文介绍了如何在 PostgreSQL 中创建新的数据库。</p><p>数据库是表的容器，一个数据库中可以包含多个表。要想在 PostgreSQL 存储数据，你首先要创建一个数据库。</p><p>PostgreSQL 允许您使用 <code>CREATE DATABASE</code> 语句创建一个新的数据库。</p><h2 id="postgresql-create-database-语法" tabindex="-1">PostgreSQL CREATE DATABASE 语法 <a class="header-anchor" href="#postgresql-create-database-语法" aria-label="Permalink to &quot;PostgreSQL CREATE DATABASE 语法&quot;">​</a></h2><p>要在 PostgreSQL 服务器上创建一个数据库，您必须是超级用户或者具有 <code>CREATEDB</code> 权限。</p><p>请按照如下语法使用 <code>CREATE DATABASE</code> 语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DATABASE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">db_name</span></span>
<span class="line"><span style="color:#A6ACCD;">[ [ WITH ] [ OWNER [=] user_name ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       [ TEMPLATE [=] template ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       [ ENCODING [=] </span><span style="color:#F78C6C;">encoding</span><span style="color:#A6ACCD;"> ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       [ LOCALE [=] locale ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       [ LC_COLLATE [=] lc_collate ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       [ LC_CTYPE [=] lc_ctype ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       [ TABLESPACE [=] tablespace_name ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       [ ALLOW_CONNECTIONS [=] allowconn ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       [ CONNECTION LIMIT [=] connlimit ]</span></span>
<span class="line"><span style="color:#A6ACCD;">       [ IS_TEMPLATE [=] istemplate ] ]</span></span></code></pre></div><p>看起来这是一个很复杂的语句，但是最常用的是下面的一行语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DATABASE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">db_name</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><p>您可以是按照任意的顺序使用可选的选项。以下是对其中的参数的说明：</p><ul><li><p><em><code>db_name</code></em></p><p>要创建的数据库的名字。</p></li><li><p><em><code>user_name</code></em></p><p>将拥有新数据库的用户的角色名称。您可以使用 <code>DEFAULT</code> 表示执行命令的用户。</p></li><li><p><em><code>template</code></em></p><p>用于创建新数据库的模板名称。您可以使用 <code>DEFAULT</code> 表示默认模板的模板名称 (<code>template1</code>)。</p></li><li><p><em><code>encoding</code></em></p><p>要在新数据库中使用的字符集编码。您可以指定一个字符串常量（例如，<code>&#39;SQL_ASCII&#39;</code>），或者一个整数编码号，或者 <code>DEFAULT</code> (模板数据库的编码)。点击<a href="https://www.postgresql.org/docs/14/multibyte.html#MULTIBYTE-CHARSET-SUPPORTED" target="_blank" rel="noreferrer">这里</a>以查看 PostgreSQL 支持的字符集。</p></li><li><p><em><code>locale</code></em></p><p>这是一个设置 <code>LC_COLLATE</code> 和 <code>LC_CTYPE</code> 的快捷方式。如果指定此项，则不能指定其中任何一个参数。</p></li><li><p><em><code>lc_collate</code></em></p><p>要在新数据库中使用的整理顺序 (<code>LC_COLLATE</code>)。这会影响应用于<a href="/database/postgreSQL/base/ORDER_BY.html">字符串的排序顺序</a>。</p></li><li><p><em><code>lc_ctype</code></em></p><p>要在新数据库中使用的字符分类 (<code>LC_CTYPE</code>)。这会影响字符的分类，例如小写、大写和数字。</p></li><li><p><em><code>tablespace_name</code></em></p><p>将与新数据库关联的表空间的名字。您可以使用 <code>DEFAULT</code> 以使用模板数据库的表空间的名称。</p></li><li><p><em><code>allowconn</code></em></p><p>是否允许连接到此数据库。如果为 <code>false</code>，则没有人可以连接到该数据库。默认值为 <code>true</code>，允许连接。</p></li><li><p><em><code>connlimit</code></em></p><p>连接数限制。<code>-1</code>（默认）表示没有限制。</p></li><li><p><em><code>istemplate</code></em></p><p>是否为模版数据库。 如果为 <code>true</code>，则任何具有 <code>CREATEDB</code> 权限的用户都可以<a href="/database/postgreSQL/databaseAndTable/复制数据库.html">克隆此数据库</a>；如果为 <code>false</code>（默认值），则只有超级用户或数据库所有者可以克隆它。</p></li></ul><h2 id="postgresql-创建数据库实例" tabindex="-1">PostgreSQL 创建数据库实例 <a class="header-anchor" href="#postgresql-创建数据库实例" aria-label="Permalink to &quot;PostgreSQL 创建数据库实例&quot;">​</a></h2><p>在本实例中，我们将在 psql 工具中创建一个数据库 <code>testdb</code>。</p><ol><li><p>首先，请使用您自己的用户登录 PostgreSQL 服务器：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">~</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> psql -U postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">psql</span><span style="color:#A6ACCD;"> (14.4)</span></span>
<span class="line"><span style="color:#FFCB6B;">Type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">help</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">help.</span></span></code></pre></div></li><li><p>其次，使用默认的选项创建 <code>testdb</code> 数据库：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DATABASE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">testdb</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">CREATE DATABASE</span></span></code></pre></div><p>如果您输入了一个已经存在的数据库名称， PostgreSQL 将返回一个错误：<code>ERROR: database &quot;testdb&quot; already exists</code>。</p></li><li><p>最后，使用 <code>\\c</code> 命令切换到刚刚创建的 <code>testdb</code> 数据库:</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\c testdb;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">You are now connected to database &quot;testdb&quot; as user &quot;postgres&quot;.</span></span></code></pre></div><p>现在，您就可以<a href="/database/postgreSQL/databaseAndTable/创建表.html">创建一个表</a>，并进入<a href="/database/postgreSQL/base/INSERT.html">插入</a>、<a href="/database/postgreSQL/base/UPDATE.html">修改</a>、<a href="/database/postgreSQL/databaseAndTable/DELETE.html">删除</a>、<a href="/database/postgreSQL/base/select.html">查询</a>等操作了。</p></li></ol><p>通常情况下，创建数据库是一个简单的操作。</p><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>PostgreSQL <code>CREATE DATABASE</code> 语句用于在 PostgreSQL 服务器上创建一个新的数据库。</p>`,18),t=[p];function n(c,d,r,A,i,C){return s(),a("div",null,t)}const b=e(o,[["render",n]]);export{m as __pageData,b as default};
