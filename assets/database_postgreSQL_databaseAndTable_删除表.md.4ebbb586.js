import{_ as s,o as a,c as l,R as n}from"./chunks/framework.318fa179.js";const d=JSON.parse('{"title":"PostgreSQL DROP TABLE 删除表","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/databaseAndTable/删除表.md","filePath":"database/postgreSQL/databaseAndTable/删除表.md","lastUpdated":1690289709000}'),o={name:"database/postgreSQL/databaseAndTable/删除表.md"},p=n(`<h1 id="postgresql-drop-table-删除表" tabindex="-1">PostgreSQL DROP TABLE 删除表 <a class="header-anchor" href="#postgresql-drop-table-删除表" aria-label="Permalink to &quot;PostgreSQL DROP TABLE 删除表&quot;">​</a></h1><p>本文介绍了如何在 PostgreSQL 中使用 <code>DROP TABLE</code> 语句删除一个或者多个表。</p><p>当我们不需要某个表的时候，我们可以将此表删除。PostgreSQL 允许我们使用 <code>DROP TABLE</code> 语句删除一个或者多个表。</p><p>注意：<code>DROP TABLE</code> 语句将永久删除表和表中的数据，请谨慎操作。</p><h2 id="删除表注意事项" tabindex="-1">删除表注意事项 <a class="header-anchor" href="#删除表注意事项" aria-label="Permalink to &quot;删除表注意事项&quot;">​</a></h2><p>删除表是一个很危险的操作。一个被删除后，您很难再恢复其中的数据。</p><p>删除列表之前一定要确定此操作的必要性。</p><p>如果您决定了要删除一个表，删除之前请一定要备份表和表中的数据。</p><h2 id="postgresql-drop-table-语法" tabindex="-1">PostgreSQL <code>DROP TABLE</code> 语法 <a class="header-anchor" href="#postgresql-drop-table-语法" aria-label="Permalink to &quot;PostgreSQL \`DROP TABLE\` 语法&quot;">​</a></h2><p>要从数据库中删除表，您应该是超级用户或者表的所有者。请按照如下语法使用 <code>DROP TABLE</code> 语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> [ IF EXISTS ] table_name [, ...]</span></span>
<span class="line"><span style="color:#A6ACCD;">[ CASCADE | RESTRICT ];</span></span></code></pre></div><p>解释说明：</p><ul><li><code>table_name</code> 是要删除的表的名称。</li><li>您可以在一个 <code>DROP TABLE</code> 语句中删除多个表，请使用逗号分隔表名。</li><li><code>IF EXISTS</code> 选项是可选的，它可以避免由于输入的表名 <code>table_name</code> 不存在引发的错误。</li><li><code>CASCADE | RESTRICT</code> 是可选的，它指示了如果有其他对象（比如外键、视图、触发器、存储过程等）引用了要删除的表的处理策略。其中： <ul><li><code>CASCADE</code> - 允许删除指定的表和引用此表的对象。</li><li><code>RESTRICT</code> - 如果有对象引用此表，拒绝删除此表，并给出错误。它是默认的选项。</li></ul></li></ul><h2 id="postgresql-drop-table-示例" tabindex="-1">PostgreSQL <code>DROP TABLE</code> 示例 <a class="header-anchor" href="#postgresql-drop-table-示例" aria-label="Permalink to &quot;PostgreSQL \`DROP TABLE\` 示例&quot;">​</a></h2><p>这个实例演示了如何在 PostgreSQL 中删除一个表。</p><p>我们将在 <code>testdb</code> 数据库中创建 <code>users</code> 和 <code>user_hobbies</code> 两个表。其中， <code>users</code> 表用来存储用户的名称，性别，年龄等信息。 <code>user_hobbies</code> 表用来存储用户的业余爱好。</p><p>使用以下语句创建 <code>users</code> 表：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">users</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  user_id </span><span style="color:#C792EA;">INTEGER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">PRIMARY KEY</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">VARCHAR</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">45</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  age </span><span style="color:#C792EA;">INTEGER</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  locked </span><span style="color:#C792EA;">BOOLEAN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DEFAULT</span><span style="color:#A6ACCD;"> false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  created_at </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div><p>使用以下语句创建 <code>user_hobbies</code> 表：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">user_hobbies</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  hobby_id </span><span style="color:#C792EA;">SERIAL</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  user_id </span><span style="color:#C792EA;">INTEGER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  hobby </span><span style="color:#C792EA;">VARCHAR</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">45</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  created_at </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">PRIMARY KEY</span><span style="color:#A6ACCD;"> (hobby_id),</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">CONSTRAINT</span><span style="color:#A6ACCD;"> fk_user</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">FOREIGN KEY</span><span style="color:#A6ACCD;"> (user_id)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">REFERENCES</span><span style="color:#A6ACCD;"> users (user_id)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">ON DELETE CASCADE</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">UPDATE</span><span style="color:#A6ACCD;"> RESTRICT);</span></span></code></pre></div><p>使用以下语句删除 <code>users</code> 表</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> users;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ERROR:</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">cannot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">drop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">users</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">because</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">other</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">objects</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">depend</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">it</span></span>
<span class="line"><span style="color:#FFCB6B;">DETAIL:</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">constraint</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fk_user</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user_hobbies</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">depends</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">users</span></span>
<span class="line"><span style="color:#FFCB6B;">HINT:</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">Use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">...</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CASCADE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">drop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dependent</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">objects</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">too.</span></span></code></pre></div><p>这里，删除 <code>users</code> 表失败了， PostgreSQL 给出一个错误提示。 因为 <code>user_hobbies</code> 表的外键引用了 <code>users</code> 表，如果删除了 <code>users</code> 表， <code>user_hobbies</code> 表中的数据将是无意义的。</p><p>如果要强制删除此表，请使用 <code>CASCADE</code> 选项，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> users CASCADE;</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">NOTICE:  </span><span style="color:#F78C6C;">drop</span><span style="color:#A6ACCD;"> cascades </span><span style="color:#F78C6C;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">constraint</span><span style="color:#A6ACCD;"> fk_user </span><span style="color:#F78C6C;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">table</span><span style="color:#A6ACCD;"> user_hobbies</span></span>
<span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span></span></code></pre></div><p>这里， <code>users</code> 表被删除了，并且 <code>user_hobbies</code> 表上的外键约束 <code>fk_user</code> 也被级联删除了。</p><p>我们可以通过 <code>\\d</code> 命令查看表定义以验证是否外键是否被删除，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\d user_hobbies</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">Table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">public.user_hobbies</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   Column   |            </span><span style="color:#F78C6C;">Type</span><span style="color:#A6ACCD;">             | Collation | Nullable |                    </span><span style="color:#C792EA;">Default</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">------------+-----------------------------+-----------+----------+------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> hobby_id   | </span><span style="color:#C792EA;">integer</span><span style="color:#A6ACCD;">                     |           | </span><span style="color:#F78C6C;">not null</span><span style="color:#A6ACCD;"> | nextval(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user_hobbies_hobby_id_seq</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">::regclass)</span></span>
<span class="line"><span style="color:#A6ACCD;"> user_id    | </span><span style="color:#C792EA;">integer</span><span style="color:#A6ACCD;">                     |           | </span><span style="color:#F78C6C;">not null</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;"> hobby      | </span><span style="color:#C792EA;">character varying</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">45</span><span style="color:#A6ACCD;">)       |           | </span><span style="color:#F78C6C;">not null</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;"> created_at | </span><span style="color:#C792EA;">timestamp without time zone</span><span style="color:#A6ACCD;"> |           | </span><span style="color:#F78C6C;">not null</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;">Indexes:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user_hobbies_pkey</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">PRIMARY KEY</span><span style="color:#A6ACCD;">, btree (hobby_id)</span></span></code></pre></div><h2 id="删除一个不存在的表" tabindex="-1">删除一个不存在的表 <a class="header-anchor" href="#删除一个不存在的表" aria-label="Permalink to &quot;删除一个不存在的表&quot;">​</a></h2><p>如果在 <code>DROP TABLE</code> 输入了一个不存在的表名， PostgreSQL 将会给出一个错误，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> x;</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ERROR:  </span><span style="color:#F78C6C;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> does </span><span style="color:#F78C6C;">not</span><span style="color:#A6ACCD;"> exist</span></span></code></pre></div><p>您可以使用 <code>IF EXISTS</code> 选项以避免这个错误，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">IF</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">EXISTS</span><span style="color:#A6ACCD;"> x;</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">NOTICE:  </span><span style="color:#F78C6C;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> does </span><span style="color:#F78C6C;">not</span><span style="color:#A6ACCD;"> exist, skipping</span></span>
<span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span></span></code></pre></div><p>这里， 该语句执行通过，PostgreSQL 给出了一个通知而不是错误。</p><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>在 PostgreSQL 中，<code>DROP TABLE</code> 语句用于删除一个或者多个表。</p><ul><li><code>DROP TABLE</code> 关键字后面是要删除的表名。如果要删除多个表，请使用逗号分隔表名。</li><li><code>IF EXISTS</code> 选项避免了删除不存在的表时发生的错误。它是可选的。</li><li><code>CASCADE</code> 选项可以强制删除被引用的表。</li></ul><p>始终需要注意的是：<code>DROP TABLE</code> 语句会物理删除表和表中的数据。这个操作不能撤销，请谨慎操作。在操作之前请务必备份要删除的表，或者备份整个数据库。</p>`,43),e=[p];function t(c,C,r,A,y,i){return a(),l("div",null,e)}const E=s(o,[["render",t]]);export{d as __pageData,E as default};
