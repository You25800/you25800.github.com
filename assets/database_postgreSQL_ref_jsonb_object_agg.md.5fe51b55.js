import{_ as s,o as a,c as n,R as o}from"./chunks/framework.318fa179.js";const i=JSON.parse('{"title":"PostgreSQL jsonb_object_agg() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/jsonb_object_agg.md","filePath":"database/postgreSQL/ref/jsonb_object_agg.md","lastUpdated":1690289709000}'),l={name:"database/postgreSQL/ref/jsonb_object_agg.md"},p=o(`<h1 id="postgresql-jsonb-object-agg-函数" tabindex="-1">PostgreSQL jsonb_object_agg() 函数 <a class="header-anchor" href="#postgresql-jsonb-object-agg-函数" aria-label="Permalink to &quot;PostgreSQL jsonb\\_object\\_agg() 函数&quot;">​</a></h1><p>PostgreSQL <code>jsonb_object_agg()</code> 函数是一个聚合函数，它返回一个由一组键值对组成的 JSON 对象。</p><h2 id="jsonb-object-agg-语法" tabindex="-1"><code>jsonb_object_agg()</code> 语法 <a class="header-anchor" href="#jsonb-object-agg-语法" aria-label="Permalink to &quot;\`jsonb_object_agg()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>jsonb_object_agg()</code> 的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">jsonb_object_agg(key_expr, value_expr) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">JSON</span></span></code></pre></div><p>我们通常在 SQLite 中按如下方式使用 <code>jsonb_object_agg()</code> 函数：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> jsonb_object_agg(expr), ...</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#A6ACCD;">[WHERE ...]</span></span>
<span class="line"><span style="color:#A6ACCD;">[GROUP BY group_expr1, group_expr2, ...];</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>key_expr</code></em></p><p>必需的。一个用于生成 JSON 对象中键值对的键的列名或者表达式。</p></li><li><p><em><code>value_expr</code></em></p><p>必需的。一个用于生成 JSON 对象中键值对的值的列名或者表达式。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>jsonb_object_agg()</code> 函数返回一个对象，它包含了一个分组中由指定的列或者表达式组成的键值对。其中， <code>key_expr</code> 的值作为键值对中的键， <code>value_expr</code> 的值作为键值对中的值并使用 <a href="./to_jsonb.html"><code>to_jsonb()</code></a> 函数转为 JSON 值。</p><h2 id="jsonb-object-agg-示例" tabindex="-1"><code>jsonb_object_agg()</code> 示例 <a class="header-anchor" href="#jsonb-object-agg-示例" aria-label="Permalink to &quot;\`jsonb_object_agg()\` 示例&quot;">​</a></h2><p>为了演示 <code>jsonb_object_agg()</code> 的用法，我们使用以下 <a href="/database/postgreSQL/base/UNION.html"><code>UNION</code></a> 和 <a href="/database/postgreSQL/base/select.html"><code>SELECT</code></a> 语句模拟一个表：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tim</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Math</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> grade</span></span>
<span class="line"><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tim</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">English</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> grade</span></span>
<span class="line"><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Math</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> grade</span></span>
<span class="line"><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">English</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> grade;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">name</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">subject</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">grade</span></span>
<span class="line"><span style="color:#FFCB6B;">----</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-------</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-----</span></span>
<span class="line"><span style="color:#FFCB6B;">Tim</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">English</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">B</span></span>
<span class="line"><span style="color:#FFCB6B;">Tim</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">Math</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">A</span></span>
<span class="line"><span style="color:#FFCB6B;">Tom</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">English</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">A</span></span>
<span class="line"><span style="color:#FFCB6B;">Tom</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">Math</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">B</span></span></code></pre></div><p>这里，我们拥有了关于用户成绩的一些行。其中 <code>name</code> 列中是用户的名称， <code>subject</code> 列中是科目的名称， <code>grade</code> 列中是一个科目的成绩。</p><p>假如，要想以用户为单位（具有相同名称的用户视为一个用户），将每一个用户的所有成绩都放在一个 JSON 对象（科目作为键，成绩作为值）中，您可以使用 <code>GROUP BY</code> 子句按照 <code>name</code> 分组，并使用 <code>jsonb_object_agg()</code> 函数将每组中科目和成绩构建为一个 JSON 对象。下面的语句实现了这个需求：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    t.name,</span></span>
<span class="line"><span style="color:#A6ACCD;">    jsonb_object_agg(t.subject, t.grade) grades</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tim</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Math</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> grade</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tim</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">English</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> grade</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Math</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> grade</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">UNION</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Tom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">name</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">English</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">subject</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> grade</span></span>
<span class="line"><span style="color:#A6ACCD;">) t</span></span>
<span class="line"><span style="color:#F78C6C;">GROUP BY</span><span style="color:#A6ACCD;"> t.name;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">grades</span></span>
<span class="line"><span style="color:#FFCB6B;">------+-------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tim</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">&quot;Math&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">English</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tom</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">&quot;Math&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">English</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">}</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>这里，</p><ul><li>对于 Tim，他的成绩(英语 B 和 数学 A)都被聚合成一个 JSON 对象 <code>{ &quot;English&quot; : &quot;B&quot;, &quot;Math&quot; : &quot;A&quot; }</code>。</li><li>对于 Tom，他的成绩(英语 A 和 数学 B)都被聚合成一个 JSON 对象 <code>{ &quot;English&quot; : &quot;A&quot;, &quot;Math&quot; : &quot;B&quot; }</code>。</li></ul>`,21),e=[p];function t(c,r,C,D,y,F){return a(),n("div",null,e)}const d=s(l,[["render",t]]);export{i as __pageData,d as default};
