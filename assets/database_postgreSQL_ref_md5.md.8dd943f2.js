import{_ as a,o as e,c as s,R as o}from"./chunks/framework.318fa179.js";const u=JSON.parse('{"title":"PostgreSQL md5() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/md5.md","filePath":"database/postgreSQL/ref/md5.md","lastUpdated":1689843090000}'),l={name:"database/postgreSQL/ref/md5.md"},t=o('<h1 id="postgresql-md5-函数" tabindex="-1">PostgreSQL md5() 函数 <a class="header-anchor" href="#postgresql-md5-函数" aria-label="Permalink to &quot;PostgreSQL md5() 函数&quot;">​</a></h1><p>PostgreSQL <code>md5()</code> 函数计算一个指定的字符串的 md5 哈希值，并返回计算结果的十六进制形式。</p><h2 id="md5-语法" tabindex="-1"><code>md5()</code> 语法 <a class="header-anchor" href="#md5-语法" aria-label="Permalink to &quot;`md5()` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>md5()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">md5(str)</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>str</code></em></p><p>必需的。 一个需要计算 MD5 哈希的字符串。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>md5()</code> 函数计算一个指定的字符串的 md5 哈希值，并返回计算结果的十六进制形式。</p><p>若参数为 <code>NULL</code>，该函数将返回 <code>NULL</code>。</p><h2 id="md5-示例" tabindex="-1"><code>md5()</code> 示例 <a class="header-anchor" href="#md5-示例" aria-label="Permalink to &quot;`md5()` 示例&quot;">​</a></h2><p>这个示例说明了如果使用 <code>md5()</code> 函数生成字符串 <code>Hello World</code> 的 MD5 哈希。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> md5(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello World</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">md5(&#39;Hello World&#39;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">md5(</span><span style="color:#FFCB6B;">&#39;Hello World&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#FFCB6B;">----------------------------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">b10a8db164e0754105b7a99be72e3fe5</span></span></code></pre></div>',14),n=[t];function d(p,c,r,i,m,h){return e(),s("div",null,n)}const _=a(l,[["render",d]]);export{u as __pageData,_ as default};
