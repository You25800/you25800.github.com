import{_ as s,o as a,c as n,R as l}from"./chunks/framework.333b51ca.js";const d=JSON.parse('{"title":"PostgreSQL 重命名表","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/databaseAndTable/重命名表.md","filePath":"database/postgreSQL/databaseAndTable/重命名表.md","lastUpdated":1689061386000}'),o={name:"database/postgreSQL/databaseAndTable/重命名表.md"},p=l(`<h1 id="postgresql-重命名表" tabindex="-1">PostgreSQL 重命名表 <a class="header-anchor" href="#postgresql-重命名表" aria-label="Permalink to &quot;PostgreSQL 重命名表&quot;">​</a></h1><p>本文介绍了如何在 PostgreSQL 中使用 <code>ALTER TABLE</code> 语句重命名一个表。</p><p>有时候，您会由于一些原因修改一个现有的表的名称。比如：</p><ul><li>您在创建表的时候使用了错误的表名。</li><li>您需要将表名更改为一个更有意义的名称。</li><li>产品的需求发生变化，需要将表名更改以适应新的业务。</li><li>您所在的团队使用了新的命名规则，您需要重命名那些不符合新规则的表。</li></ul><p>在 PostgreSQL 中，您可以使用 <code>ALTER TABLE</code> 语句重命名一个表。</p><h2 id="postgresql-重命名表语法" tabindex="-1">PostgreSQL 重命名表语法 <a class="header-anchor" href="#postgresql-重命名表语法" aria-label="Permalink to &quot;PostgreSQL 重命名表语法&quot;">​</a></h2><p>要重命名一个表，请按照如下语法使用 <code>ALTER TABLE</code> 语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> [IF EXISTS] table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">RENAME </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> new_table_name;</span></span></code></pre></div><p>解释说明：</p><ul><li><code>table_name</code> 是要重命名的表。</li><li><code>new_table_name</code> 是新的表名。</li><li><code>IF EXISTS</code> 选项可以避免由于输入的表名 <code>table_name</code> 不存在引发的错误。它是可选的。</li></ul><p>当您重名一个表时，PostgreSQL 会自动更新那些依赖此表的对象。</p><h2 id="postgresql-重命名表示例" tabindex="-1">PostgreSQL 重命名表示例 <a class="header-anchor" href="#postgresql-重命名表示例" aria-label="Permalink to &quot;PostgreSQL 重命名表示例&quot;">​</a></h2><p>这个实例演示了如何在 PostgreSQL 中重命名一个表。</p><p>我们将在 <code>testdb</code> 数据库中创建 <code>users</code> 和 <code>user_hobbies</code> 两个表。其中， <code>users</code> 表用来存储用户的名称，性别，年龄等信息。 <code>user_hobbies</code> 表用来存储用户的业余爱好。</p><p>使用以下语句创建 <code>users</code> 表：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">users</span><span style="color:#A6ACCD;"> (</span></span>
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
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">UPDATE</span><span style="color:#A6ACCD;"> RESTRICT);</span></span></code></pre></div><p>要查看 <code>user_hobbies</code> 表的定义，请使用 <code>\\d</code> 命令：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\d user_hobbies;</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">Table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">public.user_hobbies</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   Column   |            </span><span style="color:#F78C6C;">Type</span><span style="color:#A6ACCD;">             | Collation | Nullable |                    </span><span style="color:#C792EA;">Default</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">------------+-----------------------------+-----------+----------+------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> hobby_id   | </span><span style="color:#C792EA;">integer</span><span style="color:#A6ACCD;">                     |           | </span><span style="color:#F78C6C;">not null</span><span style="color:#A6ACCD;"> | nextval(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user_hobbies_hobby_id_seq</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">::regclass)</span></span>
<span class="line"><span style="color:#A6ACCD;"> user_id    | </span><span style="color:#C792EA;">integer</span><span style="color:#A6ACCD;">                     |           | </span><span style="color:#F78C6C;">not null</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;"> hobby      | </span><span style="color:#C792EA;">character varying</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">45</span><span style="color:#A6ACCD;">)       |           | </span><span style="color:#F78C6C;">not null</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;"> created_at | </span><span style="color:#C792EA;">timestamp without time zone</span><span style="color:#A6ACCD;"> |           | </span><span style="color:#F78C6C;">not null</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;">Indexes:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user_hobbies_pkey</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">PRIMARY KEY</span><span style="color:#A6ACCD;">, btree (hobby_id)</span></span>
<span class="line"><span style="color:#A6ACCD;">Foreign</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">key</span><span style="color:#A6ACCD;"> constraints:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fk_user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">FOREIGN KEY</span><span style="color:#A6ACCD;"> (user_id) </span><span style="color:#C792EA;">REFERENCES</span><span style="color:#A6ACCD;"> users(user_id) </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">UPDATE</span><span style="color:#A6ACCD;"> RESTRICT </span><span style="color:#C792EA;">ON DELETE CASCADE</span></span></code></pre></div><p>这里， <code>user_hobbies</code> 表具有一个引用 <code>users</code> 表的外键。</p><p>假设，您所在的团队制定了新的命名规则，所有的表都需要一个 <code>t_</code> 开头，因此您需要将 <code>users</code> 表重命名为 <code>t_users</code>，将 <code>user_hobbies</code> 表重命名为 <code>t_user_hobbies</code>。</p><p>要将 <code>users</code> 表重命名为 <code>t_users</code>，请使用下面的语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> users RENAME </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> t_users;</span></span></code></pre></div><p>再次使用 <code>\\d</code> 命令查看 <code>user_hobbies</code> 表的定义：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\d user_hobbies;</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">Table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">public.user_hobbies</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   Column   |            </span><span style="color:#F78C6C;">Type</span><span style="color:#A6ACCD;">             | Collation | Nullable |                    </span><span style="color:#C792EA;">Default</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">------------+-----------------------------+-----------+----------+------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> hobby_id   | </span><span style="color:#C792EA;">integer</span><span style="color:#A6ACCD;">                     |           | </span><span style="color:#F78C6C;">not null</span><span style="color:#A6ACCD;"> | nextval(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user_hobbies_hobby_id_seq</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">::regclass)</span></span>
<span class="line"><span style="color:#A6ACCD;"> user_id    | </span><span style="color:#C792EA;">integer</span><span style="color:#A6ACCD;">                     |           | </span><span style="color:#F78C6C;">not null</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;"> hobby      | </span><span style="color:#C792EA;">character varying</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">45</span><span style="color:#A6ACCD;">)       |           | </span><span style="color:#F78C6C;">not null</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;"> created_at | </span><span style="color:#C792EA;">timestamp without time zone</span><span style="color:#A6ACCD;"> |           | </span><span style="color:#F78C6C;">not null</span><span style="color:#A6ACCD;"> |</span></span>
<span class="line"><span style="color:#A6ACCD;">Indexes:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user_hobbies_pkey</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">PRIMARY KEY</span><span style="color:#A6ACCD;">, btree (hobby_id)</span></span>
<span class="line"><span style="color:#A6ACCD;">Foreign</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">key</span><span style="color:#A6ACCD;"> constraints:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fk_user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">FOREIGN KEY</span><span style="color:#A6ACCD;"> (user_id) </span><span style="color:#C792EA;">REFERENCES</span><span style="color:#A6ACCD;"> t_users(user_id) </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">UPDATE</span><span style="color:#A6ACCD;"> RESTRICT </span><span style="color:#C792EA;">ON DELETE CASCADE</span></span></code></pre></div><p>从输出中可以清楚地看到，外键约束已更新并改为引用 <code>t_users</code> 表。</p><p>要将 <code>user_hobbies</code> 表重命名为 <code>t_user_hobbies</code>，请使用下面的语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> user_hobbies RENAME </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> t_user_hobbies;</span></span></code></pre></div><p>最后，使用 <code>\\dt</code> 命令查看一下当前数据库中的所有的表以验证结果：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\dt</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">List of relations</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">Schema</span><span style="color:#A6ACCD;"> |      </span><span style="color:#F78C6C;">Name</span><span style="color:#A6ACCD;">      | </span><span style="color:#F78C6C;">Type</span><span style="color:#A6ACCD;">  |  </span><span style="color:#F78C6C;">Owner</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">--------+----------------+-------+----------</span></span>
<span class="line"><span style="color:#A6ACCD;"> public | t_user_hobbies | </span><span style="color:#F78C6C;">table</span><span style="color:#A6ACCD;"> | postgres</span></span>
<span class="line"><span style="color:#A6ACCD;"> public | t_users        | </span><span style="color:#F78C6C;">table</span><span style="color:#A6ACCD;"> | postgres</span></span>
<span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">rows</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>在 PostgreSQL 中，您可以使用 <code>ALTER TABLE ... RENAME TO</code> 语句重命名一个表。</p>`,36),e=[p];function t(c,C,r,A,y,i){return a(),n("div",null,e)}const u=s(o,[["render",t]]);export{d as __pageData,u as default};
