import{_ as o,o as a,c as s,R as e}from"./chunks/framework.318fa179.js";const h=JSON.parse('{"title":"PostgreSQL bound_box() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/bound_box().md","filePath":"database/postgreSQL/ref/bound_box().md","lastUpdated":1690352360000}'),n={name:"database/postgreSQL/ref/bound_box().md"},l=e('<h1 id="postgresql-bound-box-函数" tabindex="-1">PostgreSQL bound_box() 函数 <a class="header-anchor" href="#postgresql-bound-box-函数" aria-label="Permalink to &quot;PostgreSQL bound\\_box() 函数&quot;">​</a></h1><p>PostgreSQL <code>bound_box()</code> 函数返回两个指定矩形的边界矩形。</p><h2 id="bound-box-语法" tabindex="-1"><code>bound_box()</code> 语法 <a class="header-anchor" href="#bound-box-语法" aria-label="Permalink to &quot;`bound_box()` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>bound_box()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bound_box(box1, box2) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">box</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>box1</code></em></p><p>必需的。 一个矩形。比如： <code>box &#39;(1,1),(0,0)&#39;</code>。</p></li><li><p><em><code>box2</code></em></p><p>必需的。 一个矩形。比如： <code>box &#39;(4,4),(3,3)&#39;</code>。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>bound_box()</code> 函数返回两个指定矩形的边界矩形。</p><h2 id="bound-box-示例" tabindex="-1"><code>bound_box()</code> 示例 <a class="header-anchor" href="#bound-box-示例" aria-label="Permalink to &quot;`bound_box()` 示例&quot;">​</a></h2><p>下面的语句示例展示了如何使用 PostgreSQL <code>bound_box()</code> 函数返回两个指定矩形的边界矩形。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> bound_box(</span><span style="color:#C792EA;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(4,4),(3,3)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#C792EA;">box</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(1,1),(0,0)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">bound_box</span></span>\n<span class="line"><span style="color:#FFCB6B;">-------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">4,4</span><span style="color:#89DDFF;">)</span><span style="color:#FFCB6B;">,(0,0</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>',13),t=[l];function p(c,r,d,b,i,u){return a(),s("div",null,t)}const x=o(n,[["render",p]]);export{h as __pageData,x as default};
