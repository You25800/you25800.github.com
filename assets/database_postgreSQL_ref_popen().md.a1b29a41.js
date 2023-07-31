import{_ as s,o as a,c as e,R as p}from"./chunks/framework.318fa179.js";const A=JSON.parse('{"title":"PostgreSQL popen() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/popen().md","filePath":"database/postgreSQL/ref/popen().md","lastUpdated":1690352360000}'),o={name:"database/postgreSQL/ref/popen().md"},n=p('<h1 id="postgresql-popen-函数" tabindex="-1">PostgreSQL popen() 函数 <a class="header-anchor" href="#postgresql-popen-函数" aria-label="Permalink to &quot;PostgreSQL popen() 函数&quot;">​</a></h1><p>PostgreSQL <code>popen()</code> 函数将指定的路径转换为开放的路径。</p><h2 id="popen-语法" tabindex="-1"><code>popen()</code> 语法 <a class="header-anchor" href="#popen-语法" aria-label="Permalink to &quot;`popen()` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>popen()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">popen(</span><span style="color:#C792EA;">path</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">path</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>path</code></em></p><p>必需的。 一个路径。例如： <code>path &#39;[(0,0),(1,1),(2,0)]&#39;</code>。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>popen()</code> 函数返回通过参数指定的路径的开放形式。如果由参数指定的路径本身是开放路径，则返回原路径。</p><h2 id="popen-示例" tabindex="-1"><code>popen()</code> 示例 <a class="header-anchor" href="#popen-示例" aria-label="Permalink to &quot;`popen()` 示例&quot;">​</a></h2><p>下面的语句示例展示了如何使用 PostgreSQL <code>popen()</code> 函数将路径 <code>path &#39;((0,0),(1,1),(2,0))&#39;</code> 转为开放形式。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> popen(</span><span style="color:#C792EA;">path</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">((0,0),(1,1),(2,0))</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">popen</span></span>\n<span class="line"><span style="color:#FFCB6B;">---------------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">,0),(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">,1),(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">,0)</span><span style="color:#89DDFF;">]</span></span></code></pre></div><p>下面的语句示例展示了如何使用 PostgreSQL <code>popen()</code> 函数将路径 <code>path &#39;[(0,0),(1,1),(2,0)]&#39;</code> 转为开放形式。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> popen(</span><span style="color:#C792EA;">path</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[(0,0),(1,1),(2,0)]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">popen</span></span>\n<span class="line"><span style="color:#FFCB6B;">---------------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">,0),(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">,1),(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">,0)</span><span style="color:#89DDFF;">]</span></span></code></pre></div><p>这里，因为 <code>path &#39;[(0,0),(1,1),(2,0)]&#39;</code> 是开放的，所以直接返回了它。</p>',17),l=[n];function t(c,r,d,i,C,h){return a(),e("div",null,l)}const D=s(o,[["render",t]]);export{A as __pageData,D as default};
