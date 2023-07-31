import{_ as s,o as a,c as e,R as o}from"./chunks/framework.318fa179.js";const y=JSON.parse('{"title":"PostgreSQL point(lseg) 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/point(lseg).md","filePath":"database/postgreSQL/ref/point(lseg).md","lastUpdated":1690352360000}'),l={name:"database/postgreSQL/ref/point(lseg).md"},n=o('<h1 id="postgresql-point-lseg-函数" tabindex="-1">PostgreSQL point(lseg) 函数 <a class="header-anchor" href="#postgresql-point-lseg-函数" aria-label="Permalink to &quot;PostgreSQL point(lseg) 函数&quot;">​</a></h1><p>PostgreSQL <code>point(lseg)</code> 函数计算指定的线段的中心点并返回。</p><h2 id="point-lseg-语法" tabindex="-1"><code>point(lseg)</code> 语法 <a class="header-anchor" href="#point-lseg-语法" aria-label="Permalink to &quot;`point(lseg)` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>point(lseg)</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">point</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">lseg</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">point</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>box</code></em></p><p>必需的。 一个线段。例如： <code>lseg &#39;[(1,1),(-1,-1)]&#39;</code></p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>point(lseg)</code> 函数返回由参数指定的线段的中心点。</p><h2 id="point-lseg-示例" tabindex="-1"><code>point(lseg)</code> 示例 <a class="header-anchor" href="#point-lseg-示例" aria-label="Permalink to &quot;`point(lseg)` 示例&quot;">​</a></h2><p>下面的语句示例展示了如何使用 PostgreSQL <code>point(lseg)</code> 函数返回线段 <code>lseg &#39;[(1,1),(-1,-1)]&#39;</code> 的中心点。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">point</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">lseg</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[(1,1),(-1,-1)]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">point</span></span>\n<span class="line"><span style="color:#FFCB6B;">-------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">0,0</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>下面的语句示例展示了如何使用 PostgreSQL <code>point(lseg)</code> 函数返回线段 <code>lseg &#39;[(1,1),(2,2)]&#39;</code> 的中心点。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">point</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">lseg</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[(1,1),(2,2)]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">point</span></span>\n<span class="line"><span style="color:#FFCB6B;">-----------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">1.5,1.5</span><span style="color:#89DDFF;">)</span></span></code></pre></div>',16),p=[n];function t(c,r,i,d,g,C){return a(),e("div",null,p)}const A=s(l,[["render",t]]);export{y as __pageData,A as default};
