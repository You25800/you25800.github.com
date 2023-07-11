import{_ as s,o as a,c as n,R as l}from"./chunks/framework.333b51ca.js";const D=JSON.parse('{"title":"PostgreSQL GROUP BY 用法与实例","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/base/GROUP_BY.md","filePath":"database/postgreSQL/base/GROUP_BY.md","lastUpdated":1689061386000}'),e={name:"database/postgreSQL/base/GROUP_BY.md"},o=l(`<h1 id="postgresql-group-by-用法与实例" tabindex="-1">PostgreSQL GROUP BY 用法与实例 <a class="header-anchor" href="#postgresql-group-by-用法与实例" aria-label="Permalink to &quot;PostgreSQL GROUP BY 用法与实例&quot;">​</a></h1><p>本文介绍了在 PostgreSQL 中如何在 <code>SELECT</code> 语句中使用 <code>GROUP BY</code> 子句将行根据指定的字段或者表达式进行分组。</p><p>在 PostgreSQL 中， <code>GROUP BY</code> 子句用于将行根据指定的字段或者表达式进行分组。</p><p>有时候，我们需要将结果集按照某个维度进行汇总。这在统计数据的时候经常用到，考虑以下的场景：</p><ul><li>按班级求取平均成绩。</li><li>按学生汇总总分。</li><li>按年或者月份统计销售额。</li><li>按国家或者地区统计用户数量。</li></ul><p>这些正是 <code>GROUP BY</code> 子句发挥作用的地方。</p><h2 id="postgresql-group-by-语法" tabindex="-1">PostgreSQL <code>GROUP BY</code> 语法 <a class="header-anchor" href="#postgresql-group-by-语法" aria-label="Permalink to &quot;PostgreSQL \`GROUP BY\` 语法&quot;">​</a></h2><p><code>GROUP BY</code> 子句是 <code>SELECT</code> 语句的可选子句。要对 <code>SELECT</code> 语句中的行进行分组，请按照如下语法使用 <code>GROUP BY</code> 子句：</p><div class="language-postgres"><button title="Copy Code" class="copy"></button><span class="lang">postgres</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">SELECT column1[, column2, ...], aggregate_function(ci)</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM table</span></span>
<span class="line"><span style="color:#A6ACCD;">[WHERE clause]</span></span>
<span class="line"><span style="color:#A6ACCD;">GROUP BY column1[, column2, ...];</span></span>
<span class="line"><span style="color:#A6ACCD;">[HAVING clause]</span></span></code></pre></div><p>说明：</p><ul><li><code>column1[, column2, ...]</code> 是分组依据的字段，至少一个字段，可以多个字段。</li><li><code>aggregate_function(ci)</code> 是聚合函数，用来汇总。这是可选的。 您可以会用到以下聚合函数： <ul><li><a href="/database/postgreSQL_ref/聚合函数/sum.html"><code>sum()</code></a>: 计算组内数据的总和</li><li><a href="/database/postgreSQL_ref/聚合函数/avg.html"><code>avg()</code></a>: 计算组内数据的平均值</li><li><a href="/database/postgreSQL_ref/聚合函数/max.html"><code>max()</code></a>: 计算组内数据的最大值</li><li><a href="/database/postgreSQL_ref/聚合函数/min.html"><code>MIN()</code></a>: 计算组内数据的最小值</li><li><a href="/database/postgreSQL_ref/聚合函数/count.html"><code>count()</code></a>: 计算组内的行数</li></ul></li><li><a href="/database/postgreSQL/base/SELECT.html"><code>SELECT</code></a> 后的字段必须是分组字段中的字段。</li><li><a href="/database/postgreSQL/base/WHERE.html">WHERE</a> 子句是可选的，用来过在分组之前过滤行。</li><li><a href="/database/postgreSQL/base/HAVING.html"><code>HAVING</code></a> 子句是可选的，用来过滤分组数据。</li></ul><h2 id="postgresql-group-by-实例" tabindex="-1">PostgreSQL <code>GROUP BY</code> 实例 <a class="header-anchor" href="#postgresql-group-by-实例" aria-label="Permalink to &quot;PostgreSQL \`GROUP BY\` 实例&quot;">​</a></h2><p>我们将使用 <a href="/database/sakila/">Sakila 示例数据库</a> 中的表进行演示，请您先<a href="./示例数据库.html">在 PostgreSQL 中安装 Sakila 示例数据库</a>。</p><h3 id="简单的-group-by-实例" tabindex="-1">简单的 GROUP BY 实例 <a class="header-anchor" href="#简单的-group-by-实例" aria-label="Permalink to &quot;简单的 GROUP BY 实例&quot;">​</a></h3><p>我们使用 <code>GROUP BY</code> 子句查看 <a href="/database/sakila/演员表.html"><code>actor</code></a> 表中的姓氏列表。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> last_name</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> actor</span></span>
<span class="line"><span style="color:#F78C6C;">GROUP BY</span><span style="color:#A6ACCD;"> last_name;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">last_name</span></span>
<span class="line"><span style="color:#A6ACCD;">--------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> AKROYD</span></span>
<span class="line"><span style="color:#A6ACCD;"> BRIDGES</span></span>
<span class="line"><span style="color:#A6ACCD;"> HUNT</span></span>
<span class="line"><span style="color:#A6ACCD;"> GIBSON</span></span>
<span class="line"><span style="color:#A6ACCD;"> ALLEN</span></span>
<span class="line"><span style="color:#A6ACCD;"> SUVARI</span></span>
<span class="line"><span style="color:#A6ACCD;"> HESTON</span></span>
<span class="line"><span style="color:#A6ACCD;"> MONROE</span></span>
<span class="line"><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"><span style="color:#A6ACCD;"> WILSON</span></span>
<span class="line"><span style="color:#A6ACCD;">(121 rows)</span></span></code></pre></div><p>本例中，使用 <code>GROUP BY</code> 子句按照 <code>last_name</code> 字段对数据进行分组。</p><p>本例的输出结果与以下使用 <code>DISTINCT</code> 的 SQL 输出结果完全一样：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT DISTINCT</span><span style="color:#A6ACCD;"> last_name </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> actor;</span></span></code></pre></div><h3 id="group-by-与聚合函数实例" tabindex="-1">GROUP BY 与聚合函数实例 <a class="header-anchor" href="#group-by-与聚合函数实例" aria-label="Permalink to &quot;GROUP BY 与聚合函数实例&quot;">​</a></h3><p>我们使用 <code>GROUP BY</code> 子句和聚合函数 <code>count()</code> 查看 <code>actor</code> 表中的姓氏列表以及每个姓氏的数量。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> last_name, </span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> actor</span></span>
<span class="line"><span style="color:#F78C6C;">GROUP BY</span><span style="color:#A6ACCD;"> last_name</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">DESC</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">last_name   | count</span></span>
<span class="line"><span style="color:#A6ACCD;">--------------+-------</span></span>
<span class="line"><span style="color:#A6ACCD;"> KILMER       |     5</span></span>
<span class="line"><span style="color:#A6ACCD;"> TEMPLE       |     4</span></span>
<span class="line"><span style="color:#A6ACCD;"> NOLTE        |     4</span></span>
<span class="line"><span style="color:#A6ACCD;"> WILLIAMS     |     3</span></span>
<span class="line"><span style="color:#A6ACCD;"> PECK         |     3</span></span>
<span class="line"><span style="color:#A6ACCD;"> HOPKINS      |     3</span></span>
<span class="line"><span style="color:#A6ACCD;"> DAVIS        |     3</span></span>
<span class="line"><span style="color:#A6ACCD;"> HARRIS       |     3</span></span>
<span class="line"><span style="color:#A6ACCD;"> DEGENERES    |     3</span></span>
<span class="line"><span style="color:#A6ACCD;"> ...</span></span>
<span class="line"><span style="color:#A6ACCD;"> CLOSE        |     1</span></span>
<span class="line"><span style="color:#A6ACCD;">(121 rows)</span></span></code></pre></div><p>本例中，执行的顺序如下：</p><ol><li>首先使用 <code>GROUP BY</code> 子句按照 <code>last_name</code> 字段对 <code>actor</code> 表中的所有的行进行分组。也就是每个姓氏一组。</li><li>然后使用聚合函数 <code>count(*)</code> 汇总每个姓氏的行数。</li><li>最后使用 <a href="https://www.sjkjc.com/postgresql/order-by/" target="_blank" rel="noreferrer"><code>ORDER BY</code></a> 子句按照 <code>count(*)</code> 降序排列。这样，数量最多的姓氏排在最前面。</li></ol><p>同样，如果我们想从 <code>film</code> 表中查找每个影片等级的影片数量，请使用如下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> rating, </span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> film</span></span>
<span class="line"><span style="color:#F78C6C;">GROUP BY</span><span style="color:#A6ACCD;"> rating</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">count</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">DESC</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rating | count</span></span>
<span class="line"><span style="color:#A6ACCD;">--------+-------</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG-13  |   223</span></span>
<span class="line"><span style="color:#A6ACCD;"> NC-17  |   210</span></span>
<span class="line"><span style="color:#A6ACCD;"> R      |   195</span></span>
<span class="line"><span style="color:#A6ACCD;"> PG     |   194</span></span>
<span class="line"><span style="color:#A6ACCD;"> G      |   178</span></span>
<span class="line"><span style="color:#A6ACCD;">(5 rows)</span></span></code></pre></div><h3 id="group-by-limit-聚合函数实例" tabindex="-1">GROUP BY, LIMIT, 聚合函数实例 <a class="header-anchor" href="#group-by-limit-聚合函数实例" aria-label="Permalink to &quot;GROUP BY, LIMIT, 聚合函数实例&quot;">​</a></h3><p>以下实例使用 <code>GROUP BY</code> 子句，<a href="./LIMIT.html"><code>LIMIT</code></a>子句和聚合函数 <code>sum()</code> 从 <a href="/database/sakila/支付表.html"><code>payment</code></a> 表中查找消费金额排名前 10 位的客户。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> customer_id, </span><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;">(amount) total</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> payment</span></span>
<span class="line"><span style="color:#F78C6C;">GROUP BY</span><span style="color:#A6ACCD;"> customer_id</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> total </span><span style="color:#F78C6C;">DESC</span></span>
<span class="line"><span style="color:#F78C6C;">LIMIT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">customer_id | total</span></span>
<span class="line"><span style="color:#A6ACCD;">-------------+--------</span></span>
<span class="line"><span style="color:#A6ACCD;">         526 | 221.55</span></span>
<span class="line"><span style="color:#A6ACCD;">         148 | 216.54</span></span>
<span class="line"><span style="color:#A6ACCD;">         144 | 195.58</span></span>
<span class="line"><span style="color:#A6ACCD;">         178 | 194.61</span></span>
<span class="line"><span style="color:#A6ACCD;">         137 | 194.61</span></span>
<span class="line"><span style="color:#A6ACCD;">         459 | 186.62</span></span>
<span class="line"><span style="color:#A6ACCD;">         469 | 177.60</span></span>
<span class="line"><span style="color:#A6ACCD;">         468 | 175.61</span></span>
<span class="line"><span style="color:#A6ACCD;">         236 | 175.58</span></span>
<span class="line"><span style="color:#A6ACCD;">         181 | 174.66</span></span>
<span class="line"><span style="color:#A6ACCD;">(10 rows)</span></span></code></pre></div><p>本例中，执行的顺序如下：</p><ol><li>首先使用 <code>GROUP BY</code> 子句按照 <code>customer_id</code> 字段对数据进行分组，也就是按照客户分组。</li><li>然后使用聚合函数 <code>sum(amount)</code> 对每组中的所有行的 <code>amount</code> 字段求和，并使用 <code>total</code> 作为<a href="/database/postgreSQL/base/列别名.html">列别名</a>。</li><li>然后使用 <code>ORDER BY</code> 子句按照 <code>total</code> 降序排列。</li><li>最后使用 <code>LIMIT 10</code> 子句返回前 10 个记录行。</li></ol><h3 id="group-by-和-having-实例" tabindex="-1">GROUP BY 和 HAVING 实例 <a class="header-anchor" href="#group-by-和-having-实例" aria-label="Permalink to &quot;GROUP BY 和 HAVING 实例&quot;">​</a></h3><p>以下实例使用 <code>GROUP BY</code> 子句，<code>HAVING</code> 子句和聚合函数 <code>sum()</code> 从 <code>payment</code> 表中查找总消费金额在 180 美元以上的客户。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> customer_id, </span><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;">(amount) total</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> payment</span></span>
<span class="line"><span style="color:#F78C6C;">GROUP BY</span><span style="color:#A6ACCD;"> customer_id</span></span>
<span class="line"><span style="color:#F78C6C;">HAVING</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sum</span><span style="color:#A6ACCD;">(amount) </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">180</span></span>
<span class="line"><span style="color:#F78C6C;">ORDER BY</span><span style="color:#A6ACCD;"> total </span><span style="color:#F78C6C;">DESC</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">customer_id | total</span></span>
<span class="line"><span style="color:#A6ACCD;">-------------+--------</span></span>
<span class="line"><span style="color:#A6ACCD;">         526 | 221.55</span></span>
<span class="line"><span style="color:#A6ACCD;">         148 | 216.54</span></span>
<span class="line"><span style="color:#A6ACCD;">         144 | 195.58</span></span>
<span class="line"><span style="color:#A6ACCD;">         178 | 194.61</span></span>
<span class="line"><span style="color:#A6ACCD;">         137 | 194.61</span></span>
<span class="line"><span style="color:#A6ACCD;">         459 | 186.62</span></span>
<span class="line"><span style="color:#A6ACCD;">(6 rows)</span></span></code></pre></div><p>本例中，执行的顺序如下：</p><ol><li>首先使用 <code>GROUP BY</code> 子句按照 <code>customer_id</code> 字段对数据进行分组，也就是按照客户分组。</li><li>然后使用聚合函数 <code>sum(amount)</code> 对每组中的所有行的 <code>amount</code> 字段求和，并使用 <code>total</code> 作为列别名。</li><li>然后使用 <code>HAVING</code> 子句指定只有 <code>sum(amount)</code> 大于 <code>180</code> 的行才会被返回。</li><li>最后使用 <code>ORDER BY</code> 子句按照 <code>total</code> 降序排列。</li></ol><p><a href="/database/postgreSQL/base/HAVING.html"><code>HAVING</code> 子句</a>用来过滤 <code>GROUP BY</code> 分组的数据，需要一个逻辑表达式作为条件，其中逻辑表达式中的列名或表达式只能使用分组使用的列，表达式，或者应用于分组列或表达式的聚合函数。</p><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>在本文中，我们介绍了在 PostgreSQL 中使用 <code>GROUP BY</code> 子句将结果集根据指定的列或者表达式进行分组。以下是 <code>GROUP BY</code> 子句的要点：</p><ul><li><code>GROUP BY</code> 子句用于将结果集根据指定的字段或者表达式进行分组。</li><li><code>GROUP BY</code> 子句至少需要一个分组字段或表达式。</li><li><code>HAVING</code> 子句是可选的，它用来过滤分组数据。</li><li><code>GROUP BY</code> 子句经常用于数据统计汇总，通常使用聚合函数。</li></ul>`,45),p=[o];function c(t,r,C,i,d,A){return a(),n("div",null,p)}const u=s(e,[["render",c]]);export{D as __pageData,u as default};
