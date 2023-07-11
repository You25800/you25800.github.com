import{_ as s,o as a,c as l,R as e}from"./chunks/framework.333b51ca.js";const D=JSON.parse('{"title":"PostgreSQL CREATE TABLE 创建表","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/databaseAndTable/创建表.md","filePath":"database/postgreSQL/databaseAndTable/创建表.md","lastUpdated":1689061386000}'),o={name:"database/postgreSQL/databaseAndTable/创建表.md"},n=e(`<h1 id="postgresql-create-table-创建表" tabindex="-1">PostgreSQL CREATE TABLE 创建表 <a class="header-anchor" href="#postgresql-create-table-创建表" aria-label="Permalink to &quot;PostgreSQL CREATE TABLE 创建表&quot;">​</a></h1><p>本文介绍了如何在 PostgreSQL 中使用 <code>CREATE TABLE</code> 语句创建新表。</p><p>表是关系数据库中数据存储的基本单位。您可以在表中存储结构化数据。一个数据库中可以包含多个表，一个表有行和列组成。表和表之间拥有一些关系，比如一对一，一对多，多对多等。</p><p>PostgreSQL 允许您使用 <code>CREATE TABLE</code> 语句创建新表。</p><h2 id="postgresql-create-table-语法" tabindex="-1">PostgreSQL CREATE TABLE 语法 <a class="header-anchor" href="#postgresql-create-table-语法" aria-label="Permalink to &quot;PostgreSQL CREATE TABLE 语法&quot;">​</a></h2><p>你需要在表定义中声明表中的列，以及表上的约束。请按照如下语法使用 <code>CREATE TABLE</code> 语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> [IF NOT EXISTS] table_name (</span></span>
<span class="line"><span style="color:#A6ACCD;">   column_name data_type column_contraint</span></span>
<span class="line"><span style="color:#A6ACCD;">   [, ...]</span></span>
<span class="line"><span style="color:#A6ACCD;">   table_constraint</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div><p>说明：</p><ul><li><code>table_name</code> 是要创建的表的名字。表名应该符合以下规则： <ul><li>表名可由字母、数字、下划线和美元符号组成，表名最大长度为 63 个字符。</li><li>表名在一个数据库中是唯一的。</li></ul></li><li><code>IF NOT EXISTS</code> 指示只有给定的表不存在的时候才进行创建。它是可选的。 如果你给定一个已经存在的表名，又没有使用 <code>IF NOT EXISTS</code> 子句，服务器会返回一个错误。</li><li><code>column_name</code> 是该列的名字。 列名应该符合以下规则： <ul><li>列名可由字母、数字、下划线和美元符号组成，列名最大长度为 63 个字符。</li><li>列名在一个表中是唯一的。</li></ul></li><li><code>data_type</code> 是该列要存储的数据的数据类型， 比如： <a href="/database/postgreSQL/dataType/字符类型.html"><code>VARCHAR</code></a>, <a href="/database/postgreSQL/dataType/整数类型.html"><code>INTEGER</code></a>, <a href="/database/postgreSQL/dataType/布尔类型.html"><code>BOOLEAN</code></a>, <a href="/database/postgreSQL/dataType/DATE.html"><code>DATE</code></a>, <a href="/database/postgreSQL/dataType/TIME.html"><code>TIME</code></a>, <a href="/database/postgreSQL/dataType/时间戳.html"><code>TIMESTAMP</code></a>, <a href="/database/postgreSQL/dataType/ARRAY.html"><code>ARRAY</code></a>, <a href="/database/postgreSQL/dataType/JSON.html"><code>JSON</code></a> 等。</li><li><code>column_contraint</code> 是该列的约束，比如: <ul><li><a href="/database/postgreSQL/databaseAndTable/主键.html"><code>PRIMARY KEY</code></a></li><li><a href="/database/postgreSQL/databaseAndTable/外键.html"><code>FOREIGN KEY</code></a></li><li><a href="/database/postgreSQL/databaseAndTable/NOT_NULL.html"><code>NOT NULL</code></a></li><li><a href="/database/postgreSQL/databaseAndTable/唯一约束.html"><code>UNIQUE</code></a></li><li><a href="/database/postgreSQL/databaseAndTable/CHECK约束.html"><code>CHECK</code></a></li><li><a href="/database/postgreSQL/databaseAndTable/生成列.html">生成列</a></li><li><a href="/database/postgreSQL/databaseAndTable/标识列.html">标识列</a></li></ul></li><li><code>column_name data_type column_contraint</code> 为一个列的定义。您可以在表中定义多个列，多个列定义使用逗号分隔。</li><li><code>table_constraint</code> 是表上的约束，包括：<a href="/database/postgreSQL/databaseAndTable/主键.html"><code>PRIMARY KEY</code></a>, <a href="/database/postgreSQL/databaseAndTable/外键.html"><code>FOREIGN KEY</code></a>, <a href="/database/postgreSQL/databaseAndTable/唯一约束.html"><code>UNIQUE</code></a> 和 <a href="/database/postgreSQL/databaseAndTable/CHECK约束.html"><code>CHECK</code></a></li><li><code>;</code> 不是语句的一部分，它只是表示语句的结束。</li></ul><h2 id="postgresql-create-table-实例" tabindex="-1">PostgreSQL CREATE TABLE 实例 <a class="header-anchor" href="#postgresql-create-table-实例" aria-label="Permalink to &quot;PostgreSQL CREATE TABLE 实例&quot;">​</a></h2><p>在下面的示例中，我们将在 <code>testdb</code> 数据库中创建 <code>users</code> 和 <code>user_hobbies</code> 两个表。其中， <code>users</code> 表用来存储用户的名称，性别，年龄等信息。 <code>user_hobbies</code> 表用来存储用户的业余爱好。</p><p>请按照以下步骤操作：</p><ol><li><p>使用 postgres 用户登录 PostgreSQL 服务器：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">~</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> psql -U postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">psql</span><span style="color:#A6ACCD;"> (14.4)</span></span>
<span class="line"><span style="color:#FFCB6B;">Type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">help</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">help.</span></span></code></pre></div><p>注意：您也可以使用其他任何具有相应的数据库权限的用户登录。</p></li><li><p>使用以下语句选择 <code>testdb</code> 数据库：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\c testdb;</span></span></code></pre></div><p>如果还未<a href="/database/postgreSQL/databaseAndTable/创建数据库.html">创建数据库</a>，请先运行如下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DATABASE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">testdb</span><span style="color:#A6ACCD;">;</span></span></code></pre></div></li><li><p>使用以下语句创建 <code>users</code> 表：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">users</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  user_id </span><span style="color:#C792EA;">INTEGER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">PRIMARY KEY</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">VARCHAR</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">45</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  age </span><span style="color:#C792EA;">INTEGER</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  locked </span><span style="color:#C792EA;">BOOLEAN</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DEFAULT</span><span style="color:#A6ACCD;"> false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  created_at </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div><p>这里创建的 <code>users</code> 表有 5 个字段：</p><ul><li><code>user_id</code> 列的数据类型是 <code>INTEGER</code>，它不能为 <code>NULL</code>，并且它是<a href="/database/postgreSQL/databaseAndTable/主键.html">主键</a>。</li><li><code>name</code> 列的数据类型是 <code>VARCHAR</code>，它最多为 45 个字符。 它不能为 <code>NULL</code>。</li><li><code>age</code> 列的数据类型是 <code>INTEGER</code>。它可以是 <code>NULL</code>。</li><li><code>locked</code> 列的数据类型是 <code>BOOLEAN</code>。它不能为 <code>NULL</code>，但是它有默认值 <code>false</code>。</li><li><code>created_at</code> 列的数据类型是 <code>TIMESTAMP</code>。它不能为 <code>NULL</code>。</li></ul></li><li><p>使用以下语句创建 <code>user_hobbies</code> 表：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">user_hobbies</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  hobby_id </span><span style="color:#C792EA;">SERIAL</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  user_id </span><span style="color:#C792EA;">INTEGER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  hobby </span><span style="color:#C792EA;">VARCHAR</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">45</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  created_at </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">PRIMARY KEY</span><span style="color:#A6ACCD;"> (hobby_id),</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">CONSTRAINT</span><span style="color:#A6ACCD;"> fk_user</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">FOREIGN KEY</span><span style="color:#A6ACCD;"> (user_id)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">REFERENCES</span><span style="color:#A6ACCD;"> users (user_id)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">ON DELETE CASCADE</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">UPDATE</span><span style="color:#A6ACCD;"> RESTRICT);</span></span></code></pre></div><p>这里创建的 <code>user_hobbies</code> 表有 4 个字段：</p><ul><li><code>hobby_id</code> 列的数据类型是 <code>INTEGER</code>。它不能为 <code>NULL</code>，并且它是一个自增序列。</li><li><code>user_id</code> 列的数据类型是 <code>INTEGER</code>。它不能为 <code>NULL</code>。它通过外键指向了 <code>users</code> 表的 <code>user_id</code> 列。</li><li><code>hobby</code> 列的数据类型是 <code>VARCHAR</code>，它最多为 45 个字符。 它不能为 <code>NULL</code>。</li><li><code>created_at</code> 列的数据类型是 <code>TIMESTAMP</code>。它不能为 <code>NULL</code>。</li></ul><p><code>user_hobbies</code> 表的约束有：</p><ul><li><code>PRIMARY KEY (hobby_id)</code> 子句表明 <code>hobby_id</code> 列是主键。</li><li><code>CONSTRAINT fk_user</code> 定义了一个<a href="/database/postgreSQL/databaseAndTable/外键.html">外键约束</a>。这个外键将 <code>user_id</code> 列引用了 <code>users</code> 表的 <code>user_id</code> 列</li></ul></li><li><p>使用如下语句向 <code>users</code> 表中插入数据行：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">INSERT INTO</span><span style="color:#A6ACCD;"> users (user_id, </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, age, created_at)</span></span>
<span class="line"><span style="color:#F78C6C;">VALUES</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Jim</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">18</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">NOW</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><p>使用 <a href="/database/postgreSQL/base/select.html"><code>SELECT</code></a> 语句检查 <code>users</code> 表中的数据行：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> users;</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">user_id | </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;"> | age | locked |         created_at</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">---------+------+-----+--------+----------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> | Jim  |  </span><span style="color:#F78C6C;">18</span><span style="color:#A6ACCD;"> | f      | </span><span style="color:#F78C6C;">2022</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">08</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">11</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">59</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">497166</span></span>
<span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">rows</span><span style="color:#A6ACCD;">)</span></span></code></pre></div></li><li><p>使用如下语句向 <code>user_hobbies</code> 表中插入数据行：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">INSERT INTO</span><span style="color:#A6ACCD;"> user_hobbies (user_id, hobby, created_at)</span></span>
<span class="line"><span style="color:#F78C6C;">VALUES</span><span style="color:#A6ACCD;"> (</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Football</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">NOW</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">), (</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Swimming</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">NOW</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><p>使用 <code>SELECT</code> 语句检查 <code>user_hobbies</code> 表中的数据行：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> user_hobbies;</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">hobby_id | user_id |  hobby   |         created_at</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">----------+---------+----------+----------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> |       </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> | Football | </span><span style="color:#F78C6C;">2022</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">08</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">13</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">25</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">815005</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> |       </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> | Swimming | </span><span style="color:#F78C6C;">2022</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">08</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">13</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">25</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">815005</span></span>
<span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">rows</span><span style="color:#A6ACCD;">)</span></span></code></pre></div></li></ol><h2 id="从一个已有的表创建一个新表" tabindex="-1">从一个已有的表创建一个新表 <a class="header-anchor" href="#从一个已有的表创建一个新表" aria-label="Permalink to &quot;从一个已有的表创建一个新表&quot;">​</a></h2><p>您可以使用 <code>CREATE TABLE</code> 语句从一个已有的表创建一个新表，请参照如下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> [IF NOT EXISTS] table_name</span></span>
<span class="line"><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> existing_table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">[WITH NO DATA];</span></span></code></pre></div><p>这里，</p><ul><li><code>table_name</code> 是要创建的表的名字。</li><li><code>existing_table_name</code> 是已存在的表的名字。</li><li><code>WITH NO DATA</code> 指示只创建表而不拷贝数据。它是可选的。如果省略它，则即创建表又拷贝原表中的数据。</li></ul><p>注意，原表中的索引和约束不会被复制到新表。</p><p>以下展示了一些实例：</p><p>根据 <code>users</code> 表创建 <code>users_copy</code> 表:</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">users_copy</span></span>
<span class="line"><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> users;</span></span></code></pre></div><p>只创建 <code>users_copy</code> 表， 不拷贝 <code>users</code> 表中的数据行：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">users_copy</span></span>
<span class="line"><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> users</span></span>
<span class="line"><span style="color:#F78C6C;">WITH</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">NO</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">DATA</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><h2 id="从结果集创建一个新表" tabindex="-1">从结果集创建一个新表 <a class="header-anchor" href="#从结果集创建一个新表" aria-label="Permalink to &quot;从结果集创建一个新表&quot;">​</a></h2><p>您可以使用 <code>CREATE TABLE ... AS</code> 语句从一个 <code>SELECT</code> 语句返回的结果集创建一个新表，请参照如下语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> [IF NOT EXISTS] table_name</span></span>
<span class="line"><span style="color:#F78C6C;">AS</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> ...;</span></span></code></pre></div><p>如果复制一个表中的所有的列，您可以使用 <code>SELECT * FROM original_table</code>。</p><p>如果复制一个表中的指定的列，您可以使用 <code>SELECT column1, column2, ... FROM original_table</code>。</p><p>注意，原表中的索引和约束不会被复制到新表。</p><p>以下展示了一些实例：</p><p>根据 <code>users</code> 表创建 <code>users_copy</code> 表:</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">users_copy</span></span>
<span class="line"><span style="color:#F78C6C;">AS</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> users;</span></span></code></pre></div><p>只创建 <code>users_copy</code> 表， 不拷贝 <code>users</code> 表中的数据行：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">users_copy</span></span>
<span class="line"><span style="color:#F78C6C;">AS</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> users </span><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> false;</span></span></code></pre></div><p>根据 <code>users</code> 表中的部分列创建 <code>users_copy</code> 表:</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">users_copy</span></span>
<span class="line"><span style="color:#F78C6C;">AS</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> user_id, </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> users;</span></span></code></pre></div><p>根据一个单纯的结果集创建一个表：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_1</span></span>
<span class="line"><span style="color:#F78C6C;">AS</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> x;</span></span></code></pre></div><p>这里创建了一个只有 <code>x</code> 列的 <code>test_1</code> 表。</p><p>此外，您可以使用 <a href="/database/postgreSQL/base/SELECT_INTO.html"><code>SELECT INTO</code></a> 语句从一个结果集创建一个表。</p><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>本文通过实例演示在 PostgreSQL 中使用 <code>CREATE TABLE</code> 语句创建新表并向表中插入数据行。</p><p>对于已有的表，您还可以进行一些操作:</p><ul><li><a href="/database/postgreSQL/databaseAndTable/重命名表.html">重命名一个表</a></li><li><a href="/database/postgreSQL/databaseAndTable/添加列.html">向表中添加列</a></li><li><a href="/database/postgreSQL/databaseAndTable/删除列.html">从表中删除列</a></li><li><a href="/database/postgreSQL/databaseAndTable/修改表.html">修改表的定义</a></li></ul>`,45),p=[n];function c(t,C,r,A,d,y){return a(),l("div",null,p)}const E=s(o,[["render",c]]);export{D as __pageData,E as default};
