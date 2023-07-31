import{_ as s,o as a,c as e,R as o}from"./chunks/framework.318fa179.js";const y=JSON.parse('{"title":"PostgreSQL right() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/right.md","filePath":"database/postgreSQL/ref/right.md","lastUpdated":1689843090000}'),l={name:"database/postgreSQL/ref/right.md"},n=o('<h1 id="postgresql-right-函数" tabindex="-1">PostgreSQL right() 函数 <a class="header-anchor" href="#postgresql-right-函数" aria-label="Permalink to &quot;PostgreSQL right() 函数&quot;">​</a></h1><p>PostgreSQL <code>right()</code> 函数在指定字符串中提取最右侧的指定数量的字符并返回。</p><p>如果您想要从字符串的最左侧提取一定数量的字符，请使用 <a href="./left.html"><code>left()</code></a> 函数。</p><h2 id="right-语法" tabindex="-1"><code>right()</code> 语法 <a class="header-anchor" href="#right-语法" aria-label="Permalink to &quot;`right()` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>right()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">right</span><span style="color:#A6ACCD;">(str, num)</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>str</code></em></p><p>必需的。 一个字符串。</p></li><li><p><em><code>num</code></em></p><p>必需的。 需要返回的字符的数量。它可以是正数或者负数。如果它是负数，<code>right()</code> 函数将返回除了最左侧的 <code>-num</code> 个字符之外的其他字符。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>right()</code> 函数返回字符串 <code>str</code> 的最右侧的 <code>num</code> 个字符。</p><p>如果 <code>num</code> 是负数，<code>right()</code> 函数将返回字符串中除了最右侧的 <code>-num</code> 个字符之外的其他字符。</p><p>如果 <code>num</code> 大于 <code>str</code> 的长度，<code>right()</code> 函数将返回 <code>str</code>。</p><p>如果 <code>num</code> 等于 <code>0</code>, <code>right()</code> 函数将返回空船 <code>&#39;&#39;</code>。</p><p>若参数为 <code>NULL</code>，该函数将返回 <code>NULL</code>。</p><h2 id="right-示例" tabindex="-1"><code>right()</code> 示例 <a class="header-anchor" href="#right-示例" aria-label="Permalink to &quot;`right()` 示例&quot;">​</a></h2><p>这个示例说明了如果通过 <code>right()</code> 函数返回字符串的右侧的指定数量的字符。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">right</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">right(&#39;hello&#39;, 2)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">right(</span><span style="color:#FFCB6B;">&#39;hello&#39;</span><span style="color:#FFCB6B;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#FFCB6B;">-------------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">lo</span></span></code></pre></div><p>你可以为 <code>num</code> 指定一个负数：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">right</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">right(&#39;hello&#39;, -3)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">right(</span><span style="color:#FFCB6B;">&#39;hello&#39;</span><span style="color:#FFCB6B;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-3</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#FFCB6B;">--------------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">lo</span></span></code></pre></div><p>这里，由于 <code>num</code> 为 <code>-3</code>，因此，除最左侧的 3 个字符之外，其他的字符被返回。即： <code>lo</code>。</p>',22),t=[n];function p(c,r,d,i,h,C){return a(),e("div",null,t)}const F=s(l,[["render",p]]);export{y as __pageData,F as default};
