import{_ as s,o as a,c as e,R as o}from"./chunks/framework.318fa179.js";const g=JSON.parse('{"title":"PostgreSQL isclosed() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/isclosed().md","filePath":"database/postgreSQL/ref/isclosed().md","lastUpdated":1690352360000}'),l={name:"database/postgreSQL/ref/isclosed().md"},c=o('<h1 id="postgresql-isclosed-函数" tabindex="-1">PostgreSQL isclosed() 函数 <a class="header-anchor" href="#postgresql-isclosed-函数" aria-label="Permalink to &quot;PostgreSQL isclosed() 函数&quot;">​</a></h1><p>PostgreSQL <code>isclosed()</code> 函数检查一个给定的路径是否是闭合的。</p><h2 id="isclosed-语法" tabindex="-1"><code>isclosed()</code> 语法 <a class="header-anchor" href="#isclosed-语法" aria-label="Permalink to &quot;`isclosed()` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>isclosed()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">isclosed(</span><span style="color:#C792EA;">path</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">boolean</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>path</code></em></p><p>必需的。 一个路径。例如： <code>path &#39;((0,0),(1,1),(2,0))&#39;</code>。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>isclosed()</code> 函数返回一个表示给定的路径是否闭合的布尔值。如果给定的路径是闭合的，返回 <code>t</code>；否则返回 <code>f</code>。</p><h2 id="isclosed-示例" tabindex="-1"><code>isclosed()</code> 示例 <a class="header-anchor" href="#isclosed-示例" aria-label="Permalink to &quot;`isclosed()` 示例&quot;">​</a></h2><p>下面的语句示例展示了如何使用 PostgreSQL <code>isclosed()</code> 函数检查路径 <code>path &#39;((0,0),(1,1),(2,0))&#39;</code> 是否闭合。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> isclosed(</span><span style="color:#C792EA;">path</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">((0,0),(1,1),(2,0))</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">isclosed</span></span>\n<span class="line"><span style="color:#FFCB6B;">----------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">t</span></span></code></pre></div><p>这里，因为 <code>path &#39;((0,0),(1,1),(2,0))&#39;</code> 是闭合的，所以此函数返回了 <code>t</code>。</p><p>下面的语句示例展示了如何使用 PostgreSQL <code>isclosed()</code> 函数检查路径 <code>path &#39;[(0,0),(1,1),(2,0)]&#39;</code> 是否闭合。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> isclosed(</span><span style="color:#C792EA;">path</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[(0,0),(1,1),(2,0)]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">isclosed</span></span>\n<span class="line"><span style="color:#FFCB6B;">----------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">f</span></span></code></pre></div><p>这里，因为 <code>path &#39;((0,0),(1,1),(2,0))&#39;</code> 不是闭合的，所以此函数返回了 <code>f</code>。</p>',18),n=[c];function t(p,d,i,r,h,C){return a(),e("div",null,n)}const u=s(l,[["render",t]]);export{g as __pageData,u as default};
