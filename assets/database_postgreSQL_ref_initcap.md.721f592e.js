import{_ as a,o as s,c as e,R as t}from"./chunks/framework.318fa179.js";const y=JSON.parse('{"title":"PostgreSQL initcap() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/initcap.md","filePath":"database/postgreSQL/ref/initcap.md","lastUpdated":1689843090000}'),o={name:"database/postgreSQL/ref/initcap.md"},n=t('<h1 id="postgresql-initcap-函数" tabindex="-1">PostgreSQL initcap() 函数 <a class="header-anchor" href="#postgresql-initcap-函数" aria-label="Permalink to &quot;PostgreSQL initcap() 函数&quot;">​</a></h1><p>PostgreSQL <code>initcap()</code> 函数将指定的字符串中的每个单词的首字母转为大写，其他字母转为小写，并返回转化后的字符串。</p><h2 id="initcap-语法" tabindex="-1"><code>initcap()</code> 语法 <a class="header-anchor" href="#initcap-语法" aria-label="Permalink to &quot;`initcap()` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>initcap()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">initcap(str)</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>str</code></em></p><p>必需的。 一个字符串。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>initcap()</code> 函数将指定的字符串中的每个单词的首字母转为大写，其他字母转为小写，并返回转化后的字符串。</p><p>注意： 单词是指含有字母和数字的序列。</p><p>若参数为 <code>NULL</code>，该函数将返回 <code>NULL</code>。</p><h2 id="initcap-示例" tabindex="-1"><code>initcap()</code> 示例 <a class="header-anchor" href="#initcap-示例" aria-label="Permalink to &quot;`initcap()` 示例&quot;">​</a></h2><p>这个示例说明了如果通过 <code>initcap()</code> 函数将给定的字符串标题化。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> initcap(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">initcap(&#39;hello world&#39;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">initcap(</span><span style="color:#FFCB6B;">&#39;hello world&#39;</span><span style="color:#A6ACCD;">) </span></span>\n<span class="line"><span style="color:#FFCB6B;">------------------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Hello</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">World</span></span></code></pre></div>',15),l=[n];function p(c,i,r,d,h,C){return s(),e("div",null,l)}const _=a(o,[["render",p]]);export{y as __pageData,_ as default};
