import{_ as s,o as a,c as l,R as n}from"./chunks/framework.318fa179.js";const D=JSON.parse('{"title":"使用 PostgreSQL ALTER COLUMN 语句向表在添加列","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/databaseAndTable/修改列.md","filePath":"database/postgreSQL/databaseAndTable/修改列.md","lastUpdated":1690337946000}'),o={name:"database/postgreSQL/databaseAndTable/修改列.md"},e=n(`<h1 id="使用-postgresql-alter-column-语句向表在添加列" tabindex="-1">使用 PostgreSQL ALTER COLUMN 语句向表在添加列 <a class="header-anchor" href="#使用-postgresql-alter-column-语句向表在添加列" aria-label="Permalink to &quot;使用 PostgreSQL ALTER COLUMN 语句向表在添加列&quot;">​</a></h1><p>在本文中，您将了解如何使用 PostgreSQL <code>ALTER TABLE ... ALTER COLUMN</code> 语句修改表中的现有列。</p><p>有时候，您需要修改一个已有的表中的一个已有的列。比如，修改列的名称，类型，约束，默认值等。</p><h2 id="postgresql-add-column-语法" tabindex="-1">PostgreSQL <code>ADD COLUMN</code> 语法 <a class="header-anchor" href="#postgresql-add-column-语法" aria-label="Permalink to &quot;PostgreSQL \`ADD COLUMN\` 语法&quot;">​</a></h2><p>要将新列添加到现有表，请按照如下语法使用 <code>ALTER TABLE ... ADD COLUMN</code> 语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> [COLUMN] column_name alter_action</span></span>
<span class="line"><span style="color:#A6ACCD;">[, ALTER [COLUMN] ...];</span></span></code></pre></div><p>解释说明：</p><ul><li><code>table_name</code> 是要在其中添加列的表。</li><li><code>ALTER [COLUMN] column_name alter_action</code> 子句用来修改由列名 <code>column_name</code> 指定的列。其中 <code>COLUMN</code> 关键字是可以省略的。</li><li><code>alter_action</code> 是修改动作，您可以使用以下动作之一： <ul><li>修改列的数据类型: <code>[ SET DATA ] TYPE data_type [ COLLATE collation ] [ USING expression ]</code></li><li>修改列的默认值：<code>SET DEFAULT expression</code></li><li>删除列的默认值：<code>DROP DEFAULT</code></li><li>设置或删除不能为 NULL: <code>{ SET | DROP } NOT NULL</code></li><li>将生成列转为普通列: <code>DROP EXPRESSION [ IF EXISTS ]</code></li><li>修改列为标识列: <code>ADD GENERATED { ALWAYS | BY DEFAULT } AS IDENTITY [ ( sequence_options ) ]</code></li><li>修改标识列的生成策略: <code>{ SET GENERATED { ALWAYS | BY DEFAULT } | SET sequence_option | RESTART [ [ WITH ] restart ] } [...]</code></li><li>将标识列转为普通列: <code>DROP IDENTITY [ IF EXISTS ]</code></li><li>设置列的统计信息手机目标: <code>SET STATISTICS integer</code></li><li>设置属性选项: <code>SET ( attribute_option = value [, ... ] )</code></li><li>重置属性: <code>RESET ( attribute_option [, ... ] )</code></li><li>设置列的存储模式: <code>SET STORAGE { PLAIN | EXTERNAL | EXTENDED | MAIN }</code></li><li>设置列的压缩方法: <code>SET COMPRESSION compression_method</code></li></ul></li></ul><p>以下是几个常用的操作完整语法。</p><h3 id="修改列类型" tabindex="-1">修改列类型 <a class="header-anchor" href="#修改列类型" aria-label="Permalink to &quot;修改列类型&quot;">​</a></h3><p>要修改一个列的数据类型，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> [ COLUMN ] column_name [ SET DATA ] </span><span style="color:#F78C6C;">TYPE</span><span style="color:#A6ACCD;"> data_type [ USING expression ]</span></span></code></pre></div><p>说明：</p><ul><li>在 <code>ALTER TABLE</code> 关键字后指定要更改的列的表名。</li><li>在 <code>ALTER COLUMN</code> 子句后指定要更改数据类型的列的名称。</li><li>为 <code>TYPE</code> 关键字后的列提供新的数据类型。该 <code>SET DATA TYPE</code> 和 <code>TYPE</code> 是等价的。</li><li>PostgreSQL 允许您通过添加 <code>USING</code> 子句在修改数据类型时将列的值转换为新的值。</li></ul><h3 id="为列设置默认值" tabindex="-1">为列设置默认值 <a class="header-anchor" href="#为列设置默认值" aria-label="Permalink to &quot;为列设置默认值&quot;">​</a></h3><p>要修改一个列的默认值，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> [ COLUMN ] column_name </span><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DEFAULT</span><span style="color:#A6ACCD;"> expression</span></span></code></pre></div><h3 id="删除列默认值" tabindex="-1">删除列默认值 <a class="header-anchor" href="#删除列默认值" aria-label="Permalink to &quot;删除列默认值&quot;">​</a></h3><p>要删除一个列的默认值，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> [ COLUMN ] column_name </span><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DEFAULT</span></span></code></pre></div><h3 id="为列添加-not-null" tabindex="-1">为列添加 <code>NOT NULL</code> <a class="header-anchor" href="#为列添加-not-null" aria-label="Permalink to &quot;为列添加 \`NOT NULL\`&quot;">​</a></h3><p>要为一个列添加 <a href="./NOT_NULL.html"><code>NOT NULL</code> 约束</a>，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> [ COLUMN ] column_name </span><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span></span></code></pre></div><h3 id="删除列-not-null" tabindex="-1">删除列 <code>NOT NULL</code> <a class="header-anchor" href="#删除列-not-null" aria-label="Permalink to &quot;删除列 \`NOT NULL\`&quot;">​</a></h3><p>要从一个列删除 <code>NOT NULL</code> 约束，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> [ COLUMN ] column_name </span><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span></span></code></pre></div><h3 id="标识列" tabindex="-1">标识列 <a class="header-anchor" href="#标识列" aria-label="Permalink to &quot;标识列&quot;">​</a></h3><p>要修改一个列为<a href="./标识列.html">标识列</a>，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> [ COLUMN ] column_name </span><span style="color:#F78C6C;">ADD</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">GENERATED</span><span style="color:#A6ACCD;"> { </span><span style="color:#F78C6C;">ALWAYS</span><span style="color:#A6ACCD;"> | </span><span style="color:#F78C6C;">BY</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DEFAULT</span><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">IDENTITY</span><span style="color:#A6ACCD;"> [ ( sequence_options ) ]</span></span></code></pre></div><p>要将一个标识列修改为普通列，请使用以下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> [ COLUMN ] column_name </span><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">IDENTITY</span><span style="color:#A6ACCD;"> [ IF EXISTS ]</span></span></code></pre></div><h2 id="postgresql-更改列类型示例" tabindex="-1">PostgreSQL 更改列类型示例 <a class="header-anchor" href="#postgresql-更改列类型示例" aria-label="Permalink to &quot;PostgreSQL 更改列类型示例&quot;">​</a></h2><p>让我们<a href="./创建表.html">创建一个新表</a>命名 <code>orders</code> 并<a href="/database/postgreSQL/base/INSERT.html">插入一些行</a>。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">orders</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">    id </span><span style="color:#C792EA;">serial</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">PRIMARY KEY</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    order_no </span><span style="color:#C792EA;">VARCHAR</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">INSERT INTO</span><span style="color:#A6ACCD;"> orders(order_no)</span></span>
<span class="line"><span style="color:#F78C6C;">VALUES</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10001</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">), (</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10002</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><p>要将 <code>order_no</code> 列的数据类型更改为 <a href="/database/postgreSQL/dataType/整数类型.html"><code>INT</code></a>，请使用以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> orders</span></span>
<span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> COLUMN order_no </span><span style="color:#F78C6C;">TYPE</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">INT</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><p>PostgreSQL 发出了一个错误和一个非常有用的提示：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ERROR:  column </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">order_no</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> cannot be cast automatically </span><span style="color:#F78C6C;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">integer</span></span>
<span class="line"><span style="color:#A6ACCD;">HINT:  You might need </span><span style="color:#F78C6C;">to</span><span style="color:#A6ACCD;"> specify </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">USING order_no::integer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">.</span></span></code></pre></div><p>以下语句将 <code>USING</code> 子句添加到上述语句中：</p><div class="language-postgres"><button title="Copy Code" class="copy"></button><span class="lang">postgres</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ALTER TABLE orders</span></span>
<span class="line"><span style="color:#A6ACCD;">ALTER COLUMN order_no TYPE INT</span></span>
<span class="line"><span style="color:#A6ACCD;">USING order_no::integer;</span></span></code></pre></div><p>修改成功。</p><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>本文讨论了如何使用 PostgreSQL <code>ALTER TABLE ... ALTER COLUMN</code> 语句修改表中的现有列。</p>`,44),p=[e];function t(c,r,C,A,i,d){return a(),l("div",null,p)}const T=s(o,[["render",t]]);export{D as __pageData,T as default};
