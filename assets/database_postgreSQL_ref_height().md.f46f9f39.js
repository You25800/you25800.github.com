import{_ as e,o as a,c as s,R as t}from"./chunks/framework.318fa179.js";const _=JSON.parse('{"title":"PostgreSQL height() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/height().md","filePath":"database/postgreSQL/ref/height().md","lastUpdated":1690352360000}'),o={name:"database/postgreSQL/ref/height().md"},l=t('<h1 id="postgresql-height-函数" tabindex="-1">PostgreSQL height() 函数 <a class="header-anchor" href="#postgresql-height-函数" aria-label="Permalink to &quot;PostgreSQL height() 函数&quot;">​</a></h1><p>PostgreSQL <code>height()</code> 函数返回指定矩形的垂直高度。</p><h2 id="height-语法" tabindex="-1"><code>height()</code> 语法 <a class="header-anchor" href="#height-语法" aria-label="Permalink to &quot;`height()` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>height()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">height(</span><span style="color:#C792EA;">box</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">double precision</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>box</code></em></p><p>必需的。 一个矩形。例如： <code>box &#39;(1,1),(-1,-1)&#39;</code>。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>height()</code> 函数返回指定矩形的垂直高度。</p><h2 id="height-示例" tabindex="-1"><code>height()</code> 示例 <a class="header-anchor" href="#height-示例" aria-label="Permalink to &quot;`height()` 示例&quot;">​</a></h2><p>下面的语句示例展示了如何使用 PostgreSQL <code>height()</code> 函数返回矩形 <code>box &#39;(1,1),(-1,-1)&#39;</code> 的垂直高度。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> height(</span><span style="color:#C792EA;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(1,1),(-1,-1)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">height</span></span>\n<span class="line"><span style="color:#FFCB6B;">--------</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">2</span></span></code></pre></div>',13),n=[l];function p(c,h,i,r,d,g){return a(),s("div",null,n)}const b=e(o,[["render",p]]);export{_ as __pageData,b as default};
