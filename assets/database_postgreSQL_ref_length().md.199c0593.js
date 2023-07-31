import{_ as s,o as a,c as e,R as l}from"./chunks/framework.318fa179.js";const y=JSON.parse('{"title":"PostgreSQL length() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/length().md","filePath":"database/postgreSQL/ref/length().md","lastUpdated":1690352360000}'),n={name:"database/postgreSQL/ref/length().md"},o=l(`<h1 id="postgresql-length-函数" tabindex="-1">PostgreSQL length() 函数 <a class="header-anchor" href="#postgresql-length-函数" aria-label="Permalink to &quot;PostgreSQL length() 函数&quot;">​</a></h1><p>PostgreSQL <code>length()</code> 函数计算指定的线段或路径的总长度并返回。</p><h2 id="length-语法" tabindex="-1"><code>length()</code> 语法 <a class="header-anchor" href="#length-语法" aria-label="Permalink to &quot;\`length()\` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>length()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">length</span><span style="color:#A6ACCD;">(geometric_type) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">double precision</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>geometric_type</code></em></p><p>必需的。 它可以是 <code>lseg</code>, <code>path</code>。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>length()</code> 函数返回通过参数指定的线段或路径的总长度。</p><h2 id="length-示例" tabindex="-1"><code>length()</code> 示例 <a class="header-anchor" href="#length-示例" aria-label="Permalink to &quot;\`length()\` 示例&quot;">​</a></h2><p>下面的语句示例展示了如何使用 PostgreSQL <code>length()</code> 计算一个开放路径 <code>path &#39;[(2,0),(0,0)]&#39;</code> 的总长度。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">length</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">path</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[(2,0),(0,0)]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">length</span></span>
<span class="line"><span style="color:#FFCB6B;">--------</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">2</span></span></code></pre></div><p>下面的语句示例展示了如何使用 PostgreSQL <code>length()</code> 计算一个闭合路径 <code>path &#39;((2,0),(0,0))&#39;</code> 的总长度。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">length</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">path</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">((2,0),(0,0))</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">length</span></span>
<span class="line"><span style="color:#FFCB6B;">--------</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">4</span></span></code></pre></div><p>下面的语句示例展示了如何使用 PostgreSQL <code>length()</code> 计算一个线段 <code>lseg &#39;(2,0),(0,0)&#39;</code> 的总长度。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">length</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">lseg</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(2,0),(0,0)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">length</span></span>
<span class="line"><span style="color:#FFCB6B;">--------</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">2</span></span></code></pre></div>`,19),t=[o];function p(c,r,i,d,h,C){return a(),e("div",null,t)}const A=s(n,[["render",p]]);export{y as __pageData,A as default};
