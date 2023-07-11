import{_ as a,o as e,c as s,R as t}from"./chunks/framework.333b51ca.js";const h=JSON.parse('{"title":"在 PostgreSQL 中复制一个数据库","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/databaseAndTable/复制数据库.md","filePath":"database/postgreSQL/databaseAndTable/复制数据库.md","lastUpdated":1689061386000}'),o={name:"database/postgreSQL/databaseAndTable/复制数据库.md"},l=t(`<h1 id="在-postgresql-中复制一个数据库" tabindex="-1">在 PostgreSQL 中复制一个数据库 <a class="header-anchor" href="#在-postgresql-中复制一个数据库" aria-label="Permalink to &quot;在 PostgreSQL 中复制一个数据库&quot;">​</a></h1><p>本文介绍了在 PostgreSQL 中复制数据库的几种方法</p><p>在 PostgreSQL 中，您可以使用以下几种方法复制数据库：</p><ol><li>使用 <a href="/database/postgreSQL/databaseAndTable/创建数据库.html"><code>CREATE DATABASE</code></a> 从模板数据库复制一个数据库。此方法仅适用于在同一个 PostgreSQL 服务器内操作。</li><li><a href="/database/postgreSQL/databaseAndTable/备份数据库.html">备份一个现有的数据库</a>，并将其恢复到一个新的数据库。</li></ol><h2 id="从模板数据库复制数据库" tabindex="-1">从模板数据库复制数据库 <a class="header-anchor" href="#从模板数据库复制数据库" aria-label="Permalink to &quot;从模板数据库复制数据库&quot;">​</a></h2><p>有时候，为了数据的安全性，您在操作之前需要先将要操作数据库复制备份。 您可以使用 <code>CREATE DATABASE</code> 将此数据库复制为一个新数据库，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DATABASE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new_db</span></span>
<span class="line"><span style="color:#F78C6C;">WITH</span><span style="color:#A6ACCD;"> TEMPLATE old_db;</span></span></code></pre></div><p>此语句将 复制 <code>old_db</code> 数据库到 <code>new_db</code> 数据库。 <code>old_db</code> 必须是模板数据库才能被复制。如果它不是模板数据库，您可以使用 <code>ALTER DATABASE</code> 语句<a href="/database/postgreSQL/databaseAndTable/修改数据库.html">将此数据库修改为模板数据库</a>，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DATABASE</span><span style="color:#A6ACCD;"> old_db </span><span style="color:#F78C6C;">WITH</span><span style="color:#A6ACCD;"> IS_TEMPLATE true;</span></span></code></pre></div><p>此方法仅能用在同一个 PostgreSQL 数据库服务器内。如果您想在不同的 PostgreSQL 数据库服务器间复制数据库，请查看 <a href="/database/postgreSQL/databaseAndTable/备份和恢复.html">PostgreSQL 备份和恢复教程</a>。</p><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>PostgreSQL 允许您使用 <code>CREATE DATABASE</code> 语句复制一个模板数据库。</p>`,12),n=[l];function d(p,r,c,A,i,_){return e(),s("div",null,n)}const C=a(o,[["render",d]]);export{h as __pageData,C as default};
