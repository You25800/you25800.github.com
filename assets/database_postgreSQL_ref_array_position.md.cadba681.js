import{_ as a,o as s,c as o,R as e}from"./chunks/framework.318fa179.js";const _=JSON.parse('{"title":"PostgreSQL array_position() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/array_position.md","filePath":"database/postgreSQL/ref/array_position.md","lastUpdated":1690296072000}'),n={name:"database/postgreSQL/ref/array_position.md"},p=e('<h1 id="postgresql-array-position-函数" tabindex="-1">PostgreSQL array_position() 函数 <a class="header-anchor" href="#postgresql-array-position-函数" aria-label="Permalink to &quot;PostgreSQL array\\_position() 函数&quot;">​</a></h1><p>PostgreSQL <code>array_position()</code> 函数在一个指定的数组中查找指定的元素，并返回第一次出现的下标。</p><h2 id="array-position-语法" tabindex="-1"><code>array_position()</code> 语法 <a class="header-anchor" href="#array-position-语法" aria-label="Permalink to &quot;`array_position()` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>array_position()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">array_position(</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;">, element[, start]) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">integer</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>array</code></em></p><p>必需的。 要从中搜索的数组。它必须是一个一维数组。</p></li><li><p><em><code>element</code></em></p><p>必需的。 要搜索的元素。元素的类型必须和数组的数据类型一致。</p></li><li><p><em><code>start</code></em></p><p>可选的。 搜索开始的下标。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>array_position()</code> 函数在一个指定的数组中查找指定的元素，并返回第一次出现的下标。如果找不到指定的元素，返回 <code>NULL</code>。</p><p>如果搜索的元素和数组的数据类型不一致，<code>array_position()</code> 函数将会返回一个错误。</p><h2 id="array-position-示例" tabindex="-1"><code>array_position()</code> 示例 <a class="header-anchor" href="#array-position-示例" aria-label="Permalink to &quot;`array_position()` 示例&quot;">​</a></h2><p>本示例展示了如何使用 PostgreSQL <code>array_position()</code> 函数从一个数组中查找元素。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> array_position(</span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[0, 1, 2], </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">array_position</span></span>\n<span class="line"><span style="color:#FFCB6B;">----------------</span></span>\n<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#FFCB6B;">2</span></span></code></pre></div><p>这说明， 元素 <code>2</code> 在数组 <code>[0, 1, 2]</code> 的位置是 <code>2</code>。</p><p>您可以指定开始搜索的下标，比如：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> array_position(</span><span style="color:#F78C6C;">ARRAY</span><span style="color:#A6ACCD;">[0, 1, 2, 1, 2], </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">array_position</span></span>\n<span class="line"><span style="color:#FFCB6B;">----------------</span></span>\n<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#FFCB6B;">4</span></span></code></pre></div><p>这里，虽然第一个 <code>1</code> 位于下标 2，但是由于开始搜索的下标是 <code>3</code>，因此他返回 <code>4</code>。</p>',19),t=[p];function l(r,i,c,d,y,C){return s(),o("div",null,t)}const g=a(n,[["render",l]]);export{_ as __pageData,g as default};
