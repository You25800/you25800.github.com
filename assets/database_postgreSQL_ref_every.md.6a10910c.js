import{_ as s,o as a,c as n,R as l}from"./chunks/framework.318fa179.js";const i=JSON.parse('{"title":"PostgreSQL every() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/every.md","filePath":"database/postgreSQL/ref/every.md","lastUpdated":1690289709000}'),o={name:"database/postgreSQL/ref/every.md"},p=l(`<h1 id="postgresql-every-函数" tabindex="-1">PostgreSQL every() 函数 <a class="header-anchor" href="#postgresql-every-函数" aria-label="Permalink to &quot;PostgreSQL every() 函数&quot;">​</a></h1><p>PostgreSQL <code>every()</code> 函数是一个聚合函数，它返回一个分组中的所有指定的非 null 的布尔值&quot;逻辑与&quot;运算后的结果。也就是，如果所有非 null 的输入值都是真，此函数返回真，否则返回假。</p><p>PostgreSQL <code>every()</code> 函数是 SQL 标准，它等价于 <a href="./bool_and.html"><code>bool_and()</code></a> 函数。</p><h2 id="every-语法" tabindex="-1"><code>every()</code> 语法 <a class="header-anchor" href="#every-语法" aria-label="Permalink to &quot;\`every()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>every()</code> 的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">every(expr) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> bool</span></span></code></pre></div><p>我们通常在 SQLite 中按如下方式使用 <code>every()</code> 函数：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> every(expr), ...</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">[WHERE ...]</span></span>
<span class="line"><span style="color:#A6ACCD;">[GROUP BY group_expr1, group_expr2, ...];</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>expr</code></em></p><p>必需的。一个列名或者表达式。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>every()</code> 函数返回一个布尔值。如果所有非 null 输入值都是真，此函数返回真，否则返回假。</p><p>注意，<code>every()</code> 函数只处理那些非 null 的值。也就是说, null 值会被 <code>every()</code> 函数忽略。</p><h2 id="every-示例" tabindex="-1"><code>every()</code> 示例 <a class="header-anchor" href="#every-示例" aria-label="Permalink to &quot;\`every()\` 示例&quot;">​</a></h2><p>为了演示 PostgreSQL <code>every()</code> 的用法，我们使用以下 <a href="/database/postgreSQL/base/UNION.html"><code>UNION</code></a> 和 <a href="/database/postgreSQL/base/select.html"><code>SELECT</code></a> 语句模拟一个表：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tim</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Football</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> club, true joined</span></span>
<span class="line"><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tim</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Baseball</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> club, true joined</span></span>
<span class="line"><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Football</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> club, true joined</span></span>
<span class="line"><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Baseball</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> club, </span><span style="color:#F78C6C;">null</span><span style="color:#A6ACCD;"> joined</span></span>
<span class="line"><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Jim</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Football</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> club, true joined</span></span>
<span class="line"><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Jim</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Baseball</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> club, false joined;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">club</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">joined</span></span>
<span class="line"><span style="color:#FFCB6B;">------+----------+--------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tim</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Football</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">t</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tim</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Baseball</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">t</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tom</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Football</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">t</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tom</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Baseball</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">null&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Jim</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Football</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">t</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Jim</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Baseball</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">f</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">6</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>这里，我们拥有了关于用户是否加入俱乐部的一些行。其中 <code>name</code> 列中是用户的名称， <code>club</code> 列中是俱乐部的名称， <code>joined</code> 列中是表示是否加入了俱乐部的布尔值。</p><p>假如，要确定一个用户是否加入了全部的俱乐部，您可以使用 <code>GROUP BY</code> 子句按照 <code>name</code> 分组，并使用 <code>every()</code> 函数对 <code>joined</code> 列的值进行运算。下面的语句实现了这个需求：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    t.name,</span></span>
<span class="line"><span style="color:#A6ACCD;">    every(t.joined) joined_all</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span></span>
<span class="line"><span style="color:#A6ACCD;">    (</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tim</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Football</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> club, true joined</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tim</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Baseball</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> club, true joined</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Football</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> club, true joined</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Baseball</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> club, </span><span style="color:#F78C6C;">null</span><span style="color:#A6ACCD;"> joined</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Jim</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Football</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> club, true joined</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Jim</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Baseball</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> club, false joined</span></span>
<span class="line"><span style="color:#A6ACCD;">    ) t</span></span>
<span class="line"><span style="color:#F78C6C;">GROUP BY</span><span style="color:#A6ACCD;"> t.name;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">joined_all</span></span>
<span class="line"><span style="color:#FFCB6B;">------+------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tom</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">t</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tim</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">t</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Jim</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">f</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>这里，</p><ul><li>对于 Tim，他的两行的 <code>joined</code> 列有两个 <code>true</code>，因此 <code>every(t.joined)</code> 返回了 <code>true</code>。</li><li>对于 Tom，他的 <code>joined</code> 列有一个 <code>true</code> 和一个 <code>null</code>，但是 由于 <code>every(t.joined)</code> 只处理非 null 的输入值，因此 <code>every()</code> 返回了 <code>true</code>。</li><li>对于 Jim，他的 <code>joined</code> 列有一个 <code>true</code> 和一个 <code>false</code>，因此 <code>every(t.joined)</code> 返回了 <code>false</code>。</li></ul>`,23),e=[p];function c(t,r,C,y,D,F){return a(),n("div",null,e)}const d=s(o,[["render",c]]);export{i as __pageData,d as default};
