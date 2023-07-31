import{_ as s,o as a,c as o,R as e}from"./chunks/framework.318fa179.js";const A=JSON.parse('{"title":"PostgreSQL 删除索引","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/index/删除索引.md","filePath":"database/postgreSQL/index/删除索引.md","lastUpdated":1689834507000}'),n={name:"database/postgreSQL/index/删除索引.md"},l=e(`<h1 id="postgresql-删除索引" tabindex="-1">PostgreSQL 删除索引 <a class="header-anchor" href="#postgresql-删除索引" aria-label="Permalink to &quot;PostgreSQL 删除索引&quot;">​</a></h1><p>本文介绍在 PostgreSQL 中如何使用 <code>DROP INDEX</code> 从一个表中删除现有的索引。</p><p>在 PostgreSQL 中，您可以使用 <code>DROP INDEX</code> 从一个表中删除现有的索引。</p><h2 id="postgresql-drop-index-语法" tabindex="-1">PostgreSQL <code>DROP INDEX</code> 语法 <a class="header-anchor" href="#postgresql-drop-index-语法" aria-label="Permalink to &quot;PostgreSQL \`DROP INDEX\` 语法&quot;">​</a></h2><p>有时，您可能希望从数据库系统中删除现有索引。为此，您可以使用以下 <code>DROP INDEX</code> 语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">INDEX</span><span style="color:#A6ACCD;">  [ CONCURRENTLY ]</span></span>
<span class="line"><span style="color:#A6ACCD;">[ IF EXISTS ]  </span><span style="color:#F78C6C;">name</span></span>
<span class="line"><span style="color:#A6ACCD;">[ CASCADE | RESTRICT ];</span></span></code></pre></div><p>说明：</p><ul><li><p><code>name</code> 是要删除的索引的名称。</p></li><li><p><code>IF EXISTS</code> 指示如果指定的索引不存在将不会给出错误， PostgreSQL 将会发出一个通知。</p></li><li><p><code>CASCADE</code> 指示 PostgreSQL 自动删除那些依赖于此索引的对象。</p></li><li><p><code>RESTRICT</code> 指示如果有其他对象依赖于此索引，则拒绝删除。 这是默认的行为。</p></li><li><p>删除索引时， PostgreSQL 默认会获取该表的排他锁并阻止任何其他的访问，知道索引删除完成。您可以使用 <code>CONCURRENTLY</code> 选项改变这一行为。</p><p>注意，当使用 <code>CASCADE</code> 选项时， 不支持 <code>CONCURRENTLY</code>。</p></li></ul><p>一个简单的删除索引的语句如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">INDEX</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><p>您可以使用一个语句同时删除多个索引，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">INDEX</span><span style="color:#A6ACCD;"> name1, name2,... ;</span></span></code></pre></div><h2 id="postgresql-drop-index-实例" tabindex="-1">PostgreSQL <code>DROP INDEX</code> 实例 <a class="header-anchor" href="#postgresql-drop-index-实例" aria-label="Permalink to &quot;PostgreSQL \`DROP INDEX\` 实例&quot;">​</a></h2><p>我们将使用 <a href="/database/sakila/">PostgreSQL Sakila 示例数据库</a>中的 <a href="/database/sakila/演员表.html"><code>actor</code></a> 表进行演示。</p><p>以下语句为 <code>actor</code> 表的 <code>first_name</code> 列<a href="./创建索引.html">创建索引</a>：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">INDEX</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">idx_actor_first_name</span></span>
<span class="line"><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> actor (first_name);</span></span></code></pre></div><p>有时，查询优化器不使用索引。例如，以下语句查找名为 <code>John</code> 的 actor：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> actor</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> first_name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><p>该查询未使用 <code>idx_actor_first_name</code> 之前定义的索引，如以下 <a href="/database/postgreSQL/databaseAndTable/EXPLAIN.html"><code>EXPLAIN</code></a> 语句中所述：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">EXPLAIN</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> actor</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> first_name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">QUERY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PLAN</span></span>
<span class="line"><span style="color:#FFCB6B;">------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Seq</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Scan</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actor</span><span style="color:#A6ACCD;">  (cost=0.00..4.50 </span><span style="color:#C3E88D;">rows=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">width=</span><span style="color:#F78C6C;">25</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">Filter:</span><span style="color:#A6ACCD;"> ((first_name)::text = </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">John</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">::text)</span></span></code></pre></div><p>这是因为查询优化器认为只扫描整个表来定位行更为优化。因此，在这种情况下没有用 <code>idx_actor_first_name</code>，我们需要删除它：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">INDEX</span><span style="color:#A6ACCD;"> idx_actor_first_name;</span></span></code></pre></div><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>在 PostgreSQL 中，您可以使用 <code>DROP INDEX</code> 从一个表中删除现有的索引。</p>`,25),p=[l];function t(c,r,C,i,d,y){return a(),o("div",null,p)}const h=s(n,[["render",t]]);export{A as __pageData,h as default};
