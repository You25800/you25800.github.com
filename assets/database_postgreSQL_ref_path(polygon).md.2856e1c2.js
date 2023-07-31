import{_ as a,o as s,c as o,R as p}from"./chunks/framework.318fa179.js";const g=JSON.parse('{"title":"PostgreSQL path(polygon) 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/path(polygon).md","filePath":"database/postgreSQL/ref/path(polygon).md","lastUpdated":1690352360000}'),l={name:"database/postgreSQL/ref/path(polygon).md"},n=p('<h1 id="postgresql-path-polygon-函数" tabindex="-1">PostgreSQL path(polygon) 函数 <a class="header-anchor" href="#postgresql-path-polygon-函数" aria-label="Permalink to &quot;PostgreSQL path(polygon) 函数&quot;">​</a></h1><p>PostgreSQL <code>path(polygon)</code> 函数将指定的多边形转为具有相同点列表的闭合路径。该函数返回的闭合路径和参数中指定的多边形是同一个图形。</p><h2 id="path-polygon-语法" tabindex="-1"><code>path(polygon)</code> 语法 <a class="header-anchor" href="#path-polygon-语法" aria-label="Permalink to &quot;`path(polygon)` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>path(polygon)</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">path</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">polygon</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">path</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>polygon</code></em></p><p>必需的。 一个多边形。比如： <code>polygon &#39;((0,0),(1,1),(2,0))&#39;</code>。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>path(polygon)</code> 函数返回一个闭合的路径，它和由参数指定的多边形具有相同的点列表。</p><h2 id="path-polygon-示例" tabindex="-1"><code>path(polygon)</code> 示例 <a class="header-anchor" href="#path-polygon-示例" aria-label="Permalink to &quot;`path(polygon)` 示例&quot;">​</a></h2><p>下面的语句示例展示了如何使用 PostgreSQL <code>path(polygon)</code> 函数将一个多边形转化称闭合的路径。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">path</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">polygon</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">((0,1),(2,2),(5,3),(6,0))</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">path</span></span>\n<span class="line"><span style="color:#FFCB6B;">---------------------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">))</span></span></code></pre></div>',13),e=[n];function t(c,r,y,h,d,C){return s(),o("div",null,e)}const D=a(l,[["render",t]]);export{g as __pageData,D as default};
