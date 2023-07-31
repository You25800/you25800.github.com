import{_ as s,o as a,c as o,R as l}from"./chunks/framework.318fa179.js";const F=JSON.parse('{"title":"PostgreSQL json_object() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/json_object.md","filePath":"database/postgreSQL/ref/json_object.md","lastUpdated":1690180485000}'),n={name:"database/postgreSQL/ref/json_object.md"},e=l(`<h1 id="postgresql-json-object-函数" tabindex="-1">PostgreSQL json_object() 函数 <a class="header-anchor" href="#postgresql-json-object-函数" aria-label="Permalink to &quot;PostgreSQL json\\_object() 函数&quot;">​</a></h1><p>PostgreSQL <code>json_object()</code> 函数从一个文本数组构建一个 JSON 对象，或者从两个分别作为键和值的数组构建一个 JSON 对象。</p><h2 id="json-object-语法" tabindex="-1"><code>json_object()</code> 语法 <a class="header-anchor" href="#json-object-语法" aria-label="Permalink to &quot;\`json_object()\` 语法&quot;">​</a></h2><p>PostgreSQL <code>json_object()</code> 函数的语法有两种形式：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">json_object</span><span style="color:#A6ACCD;">(kv_array </span><span style="color:#C792EA;">TEXT</span><span style="color:#A6ACCD;">[]) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">JSON</span></span></code></pre></div><p>或者</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">json_object</span><span style="color:#A6ACCD;">(k_array </span><span style="color:#C792EA;">TEXT</span><span style="color:#A6ACCD;">[], v_array </span><span style="color:#C792EA;">TEXT</span><span style="color:#A6ACCD;">[]) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">JSON</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>kv_array</code></em></p><p>必需的。 一个文本数组。他可以是一个一维数组，它必须由偶数个元素，且由交替的作为键和值的元素组成。它也可以是一个二维数组，且每个内部数组必须具有两个元素，他们的作为键和值。</p></li><li><p><em><code>k_array</code></em></p><p>必需的。 一个包含了键的文本数组。其中的元素和值数组中的元素一一对应组成键值对。</p></li><li><p><em><code>v_array</code></em></p><p>必需的。 一个包含了值的文本数组。其中的元素和键数组中的元素一一对应组成键值对。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>json_object()</code> 函数返回一个 JSON 对象。</p><p><code>json_object()</code> 函数会评估可变参数列表中的每个参数，所有的值都转换为 JSON 字符串。</p><p>单个数组参数形式中的数组中的元素数量必须是偶数， 否则 PostgreSQL 会给出一个错误。</p><p>两个数组参数形式中的键数组和值数组必须具有相同数量的元素， 否则 PostgreSQL 会给出一个错误。</p><h2 id="json-object-示例" tabindex="-1"><code>json_object()</code> 示例 <a class="header-anchor" href="#json-object-示例" aria-label="Permalink to &quot;\`json_object()\` 示例&quot;">​</a></h2><h3 id="示例-1" tabindex="-1">示例 1 <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;示例 1&quot;">​</a></h3><p>以下示例展示了如何使用 PostgreSQL <code>json_object()</code> 函数从一个一维数组构建一个 JSON 对象。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">json_object</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[1, &#39;a&#39;, true, row(2, &#39;b&#39;, false)]::</span><span style="color:#C792EA;">TEXT</span><span style="color:#A6ACCD;">[]);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">json_object</span></span>
<span class="line"><span style="color:#FFCB6B;">---------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">&quot;1&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(2,b,f)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">}</span></span></code></pre></div><p>这里对于单参数形式中的以为数组来说，数组中的元素作为交替的键和值使用：</p><ul><li><code>1</code> 被用作键</li><li><code>&#39;a&#39;</code> 被用作值</li><li><code>true</code> 被用作键</li><li><code>row(2, &#39;b&#39;, false)</code> 被用作值</li></ul><h3 id="示例-2" tabindex="-1">示例 2 <a class="header-anchor" href="#示例-2" aria-label="Permalink to &quot;示例 2&quot;">​</a></h3><p>以下示例展示了如何使用 PostgreSQL <code>json_object()</code> 函数从一个二维数组构建一个 JSON 对象。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">json_object</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{{1, 2}, {3, 4}, {a, 6}}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">json_object</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">&quot;1&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">}</span></span></code></pre></div><p>这里，每个二维数组中的内部数组的两个元素分别作为键和值：</p><ul><li>在 <code>{1, 2}</code> 中， <code>1</code> 被用作键, <code>2</code> 被用作值</li><li>在 <code>{3, 4}</code> 中， <code>3</code> 被用作键, <code>4</code> 被用作值</li><li>在 <code>{a, 6}</code> 中， <code>a</code> 被用作键, <code>6</code> 被用作值</li></ul><h3 id="示例-3" tabindex="-1">示例 3 <a class="header-anchor" href="#示例-3" aria-label="Permalink to &quot;示例 3&quot;">​</a></h3><p>本示例展示了如何使用 PostgreSQL <code>json_object()</code> 函数从两个一维数组构建一个 JSON 对象。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">json_object</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{x, y}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{1, 2}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">json_object</span></span>
<span class="line"><span style="color:#FFCB6B;">------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">&quot;x&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">y</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">}</span></span></code></pre></div><p>这里，键数组 <code>{x, y}</code> 和值数组 <code>{1, 2}</code> 中的元素一一对应形成键值对。</p>`,32),p=[e];function t(c,r,C,y,d,i){return a(),o("div",null,p)}const A=s(n,[["render",t]]);export{F as __pageData,A as default};
