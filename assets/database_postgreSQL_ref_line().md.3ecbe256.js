import{_ as e,o as a,c as s,R as o}from"./chunks/framework.318fa179.js";const _=JSON.parse('{"title":"PostgreSQL line() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/line().md","filePath":"database/postgreSQL/ref/line().md","lastUpdated":1690352360000}'),l={name:"database/postgreSQL/ref/line().md"},n=o('<h1 id="postgresql-line-函数" tabindex="-1">PostgreSQL line() 函数 <a class="header-anchor" href="#postgresql-line-函数" aria-label="Permalink to &quot;PostgreSQL line() 函数&quot;">​</a></h1><p>PostgreSQL <code>line()</code> 函数返回穿过两个指定的点的直线。</p><h2 id="line-语法" tabindex="-1"><code>line()</code> 语法 <a class="header-anchor" href="#line-语法" aria-label="Permalink to &quot;`line()` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>line()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">line</span><span style="color:#A6ACCD;">(point1, point2) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">line</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>point1</code></em></p><p>必需的。 一个点。比如： <code>point &#39;(0,0)&#39;</code>。</p></li><li><p><em><code>point2</code></em></p><p>必需的。 一个点。比如： <code>point &#39;(4,4)&#39;</code>。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>line()</code> 函数返回穿过两个指定的点的直线。</p><h2 id="line-示例" tabindex="-1"><code>line()</code> 示例 <a class="header-anchor" href="#line-示例" aria-label="Permalink to &quot;`line()` 示例&quot;">​</a></h2><p>下面的语句示例展示了如何使用 PostgreSQL <code>line()</code> 函数构造穿过 <code>(4,4)</code> 和 <code>(0,0)</code> 的直线。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">line</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">point</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(4,4)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#C792EA;">point</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(0,0)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">line</span></span>\n<span class="line"><span style="color:#FFCB6B;">----------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">1,-1,0}</span></span></code></pre></div>',13),t=[n];function p(c,i,r,d,h,C){return a(),s("div",null,t)}const g=e(l,[["render",p]]);export{_ as __pageData,g as default};
