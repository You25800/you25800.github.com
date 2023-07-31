import{_ as s,o as a,c as n,R as l}from"./chunks/framework.318fa179.js";const h=JSON.parse('{"title":"PostgreSQL ALTER TABLE 修改表","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/databaseAndTable/修改表.md","filePath":"database/postgreSQL/databaseAndTable/修改表.md","lastUpdated":1690337946000}'),e={name:"database/postgreSQL/databaseAndTable/修改表.md"},o=l(`<h1 id="postgresql-alter-table-修改表" tabindex="-1">PostgreSQL ALTER TABLE 修改表 <a class="header-anchor" href="#postgresql-alter-table-修改表" aria-label="Permalink to &quot;PostgreSQL ALTER TABLE 修改表&quot;">​</a></h1><p>本文介绍了如何在 PostgreSQL 中使用 <code>ALTER TABLE</code> 语句修改表。</p><p>在 PostgreSQL 中， <code>ALTER TABLE</code> 语句用来修改一个现有的表，包括：重命名表、添加列、删除列、修改列、添加约束、删除约束等。</p><h2 id="alter-table-用法概述" tabindex="-1"><code>ALTER TABLE</code> 用法概述 <a class="header-anchor" href="#alter-table-用法概述" aria-label="Permalink to &quot;\`ALTER TABLE\` 用法概述&quot;">​</a></h2><p>由于 <code>ALTER TABLE</code> 语句能修改一个表的方方面面，因此它的它的语法非常复杂。</p><p>下面说明了该 <code>ALTER TABLE</code> 语句的基本语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> [IF EXISTS] table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">   [alter_action options]</span></span>
<span class="line"><span style="color:#A6ACCD;">   [, ...];</span></span></code></pre></div><p><code>table_name</code> 是要修改的表的名字。 <code>IF EXISTS</code> 是可选的，</p><p>其中 <code>alter_action</code> 是一个修改动作，主要包括以下关键字：</p><ul><li><code>ADD</code> 关键字可用来添加列和约束。</li><li><code>DROP</code> 关键字可用来删除列和约束。</li><li><code>ALTER</code> 关键字可用来修改现有的列和约束。</li><li><code>RENAME</code> 关键字可用来重命名表、列、和约束。</li><li><code>SET</code> 关键字可用来修改表的架构、表空间。</li><li><code>ENABLE</code> 关键字可用来启用触发器、规则、和行安全策略。</li><li><code>DISABLE</code> 关键字可用来禁用触发器、规则、和行安全策略。</li></ul><h2 id="重命名表" tabindex="-1">重命名表 <a class="header-anchor" href="#重命名表" aria-label="Permalink to &quot;重命名表&quot;">​</a></h2><p>要<a href="./重命名表.html">重命名一个表</a>，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  RENAME </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> new_name</span></span></code></pre></div><h2 id="修改表架构" tabindex="-1">修改表架构 <a class="header-anchor" href="#修改表架构" aria-label="Permalink to &quot;修改表架构&quot;">​</a></h2><p>要修改一个表的架构，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SCHEMA</span><span style="color:#A6ACCD;"> new_schema</span></span></code></pre></div><h2 id="修改表空间" tabindex="-1">修改表空间 <a class="header-anchor" href="#修改表空间" aria-label="Permalink to &quot;修改表空间&quot;">​</a></h2><p>要修改一个表的表空间，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> TABLESPACE new_tablespace</span></span></code></pre></div><h2 id="添加列" tabindex="-1">添加列 <a class="header-anchor" href="#添加列" aria-label="Permalink to &quot;添加列&quot;">​</a></h2><p>要<a href="./添加列.html">向一个表中添加一个列</a>，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">ADD</span><span style="color:#A6ACCD;"> [COLUMN] [IF NOT EXISTS] column_name data_type [ column_constraint [ ... ] ]</span></span></code></pre></div><h2 id="删除列" tabindex="-1">删除列 <a class="header-anchor" href="#删除列" aria-label="Permalink to &quot;删除列&quot;">​</a></h2><p>要<a href="./删除列.html">从表中删除一个列</a>，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> [ COLUMN ] [ IF EXISTS ] column_name [ RESTRICT | CASCADE ]</span></span></code></pre></div><h2 id="重命名列" tabindex="-1">重命名列 <a class="header-anchor" href="#重命名列" aria-label="Permalink to &quot;重命名列&quot;">​</a></h2><p>要<a href="./重命名列.html">重命名一个列</a>，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  RENAME [ COLUMN ] column_name </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> new_column_name</span></span></code></pre></div><h2 id="修改列类型" tabindex="-1">修改列类型 <a class="header-anchor" href="#修改列类型" aria-label="Permalink to &quot;修改列类型&quot;">​</a></h2><p>要修改一个列的数据类型，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> [ COLUMN ] column_name [ SET DATA ] </span><span style="color:#F78C6C;">TYPE</span><span style="color:#A6ACCD;"> data_type</span></span></code></pre></div><h2 id="为列设置默认值" tabindex="-1">为列设置默认值 <a class="header-anchor" href="#为列设置默认值" aria-label="Permalink to &quot;为列设置默认值&quot;">​</a></h2><p>要修改一个列的默认值，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> [ COLUMN ] column_name </span><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DEFAULT</span><span style="color:#A6ACCD;"> expression</span></span></code></pre></div><h2 id="删除列默认值" tabindex="-1">删除列默认值 <a class="header-anchor" href="#删除列默认值" aria-label="Permalink to &quot;删除列默认值&quot;">​</a></h2><p>要删除一个列的默认值，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> [ COLUMN ] column_name </span><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DEFAULT</span></span></code></pre></div><h2 id="为列添加-not-null" tabindex="-1">为列添加 <code>NOT NULL</code> <a class="header-anchor" href="#为列添加-not-null" aria-label="Permalink to &quot;为列添加 \`NOT NULL\`&quot;">​</a></h2><p>要为一个列添加 <a href="./NOT_NULL.html"><code>NOT NULL</code> 约束</a>，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> [ COLUMN ] column_name </span><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span></span></code></pre></div><h2 id="删除列-not-null" tabindex="-1">删除列 <code>NOT NULL</code> <a class="header-anchor" href="#删除列-not-null" aria-label="Permalink to &quot;删除列 \`NOT NULL\`&quot;">​</a></h2><p>要从一个列删除 <code>NOT NULL</code> 约束，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> [ COLUMN ] column_name </span><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span></span></code></pre></div><h2 id="标识列" tabindex="-1">标识列 <a class="header-anchor" href="#标识列" aria-label="Permalink to &quot;标识列&quot;">​</a></h2><p>要修改一个列为<a href="./标识列.html">标识列</a>，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> [ COLUMN ] column_name </span><span style="color:#F78C6C;">ADD</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">GENERATED</span><span style="color:#A6ACCD;"> { </span><span style="color:#F78C6C;">ALWAYS</span><span style="color:#A6ACCD;"> | </span><span style="color:#F78C6C;">BY</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DEFAULT</span><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">IDENTITY</span><span style="color:#A6ACCD;"> [ ( sequence_options ) ]</span></span></code></pre></div><p>要将一个标识列修改为普通列，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> [ COLUMN ] column_name </span><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">IDENTITY</span><span style="color:#A6ACCD;"> [ IF EXISTS ]</span></span></code></pre></div><h2 id="添加约束" tabindex="-1">添加约束 <a class="header-anchor" href="#添加约束" aria-label="Permalink to &quot;添加约束&quot;">​</a></h2><p>要向一个表中添加一个约束，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">ADD</span><span style="color:#A6ACCD;"> [ CONSTRAINT constraint_name ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      { </span><span style="color:#C792EA;">CHECK</span><span style="color:#A6ACCD;"> ( expression ) [ NO INHERIT ] |</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">UNIQUE</span><span style="color:#A6ACCD;"> ( column_name [, ... ] ) index_parameters |</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">PRIMARY KEY</span><span style="color:#A6ACCD;"> ( column_name [, ... ] ) index_parameters |</span></span>
<span class="line"><span style="color:#A6ACCD;">        EXCLUDE [ USING index_method ] ( exclude_element </span><span style="color:#F78C6C;">WITH</span><span style="color:#A6ACCD;"> operator [, ... ] ) index_parameters [ WHERE ( predicate ) ] |</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">FOREIGN KEY</span><span style="color:#A6ACCD;"> ( column_name [, ... ] ) </span><span style="color:#C792EA;">REFERENCES</span><span style="color:#A6ACCD;"> reftable [ ( refcolumn [, ... ] ) ]</span></span>
<span class="line"><span style="color:#A6ACCD;">          [ MATCH FULL | MATCH PARTIAL | MATCH SIMPLE ] [ ON DELETE referential_action ] [ ON UPDATE referential_action ] }</span></span>
<span class="line"><span style="color:#A6ACCD;">      [ DEFERRABLE | NOT DEFERRABLE ] [ INITIALLY DEFERRED | INITIALLY IMMEDIATE ]</span></span></code></pre></div><h2 id="删除约束" tabindex="-1">删除约束 <a class="header-anchor" href="#删除约束" aria-label="Permalink to &quot;删除约束&quot;">​</a></h2><p>要从表中删除一个约束，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">CONSTRAINT</span><span style="color:#A6ACCD;"> [ IF EXISTS ]  constraint_name [ RESTRICT | CASCADE ]</span></span></code></pre></div><h2 id="重命名约束" tabindex="-1">重命名约束 <a class="header-anchor" href="#重命名约束" aria-label="Permalink to &quot;重命名约束&quot;">​</a></h2><p>要重命名一个约束，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  RENAME </span><span style="color:#C792EA;">CONSTRAINT</span><span style="color:#A6ACCD;"> constraint_name </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> new_constraint_name</span></span></code></pre></div><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>本文阐述了 PostgreSQL <code>ALTER TABLE</code> 语句的用法以修改一个现有表的定义。</p>`,59),p=[o];function t(c,C,r,A,i,y){return a(),n("div",null,p)}const E=s(e,[["render",t]]);export{h as __pageData,E as default};
