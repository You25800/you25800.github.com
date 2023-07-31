import{_ as s,o as a,c as o,R as p}from"./chunks/framework.318fa179.js";const D=JSON.parse('{"title":"PostgreSQL polygon(path) 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/polygon(path).md","filePath":"database/postgreSQL/ref/polygon(path).md","lastUpdated":1690352360000}'),l={name:"database/postgreSQL/ref/polygon(path).md"},n=p('<h1 id="postgresql-polygon-path-函数" tabindex="-1">PostgreSQL polygon(path) 函数 <a class="header-anchor" href="#postgresql-polygon-path-函数" aria-label="Permalink to &quot;PostgreSQL polygon(path) 函数&quot;">​</a></h1><p>PostgreSQL <code>polygon(path)</code> 函数将一个闭合的路径转成一个具有相同点数的多边形并返回。</p><h2 id="polygon-path-语法" tabindex="-1"><code>polygon(path)</code> 语法 <a class="header-anchor" href="#polygon-path-语法" aria-label="Permalink to &quot;`polygon(path)` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>polygon(path)</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">polygon</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">path</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">polygon</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>path</code></em></p><p>必需的。 一个闭合的路径。例如： <code>path &#39;((1,1),(-1,1),(0,-1))&#39;</code></p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>polygon(path)</code> 函数返回一个由参数指定的闭合的路径转成的具有相同点数的多边形。</p><p>如果您通过参数提供了一个打开的路径，则 PostgreSQL 将给出一个错误。</p><h2 id="polygon-path-示例" tabindex="-1"><code>polygon(path)</code> 示例 <a class="header-anchor" href="#polygon-path-示例" aria-label="Permalink to &quot;`polygon(path)` 示例&quot;">​</a></h2><p>下面的语句示例展示了如何使用 PostgreSQL <code>polygon(path)</code> 函数将闭合的路径 <code>path &#39;((1,1),(-1,1),(0,-1))&#39;</code> 转为多边形。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">polygon</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">path</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">((1,1),(-1,1),(0,-1))</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">polygon</span></span>\n<span class="line"><span style="color:#FFCB6B;">-----------------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">))</span></span></code></pre></div><p>下面的语句示例展示了如何使用 PostgreSQL <code>polygon(path)</code> 函数将闭合的路径 <code>path &#39;((2,2),(1,1),(3,0),(4,0))&#39;</code> 转为多边形。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">polygon</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">path</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">((2,2),(1,1),(3,0),(4,0))</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">polygon</span></span>\n<span class="line"><span style="color:#FFCB6B;">---------------------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">))</span></span></code></pre></div>',17),e=[n];function t(c,r,y,C,d,h){return a(),o("div",null,e)}const F=s(l,[["render",t]]);export{D as __pageData,F as default};
