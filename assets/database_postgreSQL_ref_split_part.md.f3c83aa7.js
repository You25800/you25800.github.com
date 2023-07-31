import{_ as s,o as a,c as e,R as l}from"./chunks/framework.318fa179.js";const y=JSON.parse('{"title":"PostgreSQL split_part() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/split_part.md","filePath":"database/postgreSQL/ref/split_part.md","lastUpdated":1689902566000}'),p={name:"database/postgreSQL/ref/split_part.md"},o=l('<h1 id="postgresql-split-part-函数" tabindex="-1">PostgreSQL split_part() 函数 <a class="header-anchor" href="#postgresql-split-part-函数" aria-label="Permalink to &quot;PostgreSQL split\\_part() 函数&quot;">​</a></h1><p>PostgreSQL <code>split_part()</code> 函数将一个指定的字符串按照指定的分隔符拆分，并返回指定的部分。</p><h2 id="split-part-语法" tabindex="-1"><code>split_part()</code> 语法 <a class="header-anchor" href="#split-part-语法" aria-label="Permalink to &quot;`split_part()` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>split_part()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">split_part(string, delimiter, n)</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>string</code></em></p><p>必需的。 一个要拆分的字符串。</p></li><li><p><em><code>delimiter</code></em></p><p>必需的。 分隔符。</p></li><li><p><em><code>n</code></em></p><p>必需的。 一个整数，它指定了第几个部分需要返回（从 1 开始计数）。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>split_part()</code> 函数将字符串 <code>string</code> 按照分隔符 <code>delimiter</code> 拆分，并返回第 <code>n</code> 个部分。如果 <code>n</code> 为负数，则返回倒数第 <code>-n</code> 个部分。</p><h2 id="split-part-示例" tabindex="-1"><code>split_part()</code> 示例 <a class="header-anchor" href="#split-part-示例" aria-label="Permalink to &quot;`split_part()` 示例&quot;">​</a></h2><p>这个示例演示了如何使用 <code>split_part()</code> 函数返回根据分隔符拆分字符串后指定的部分：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> split_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ab,cd,ef,gh</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">split_part</span></span>\n<span class="line"><span style="color:#FFCB6B;">------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ef</span></span></code></pre></div><p>这里，<code>split_part()</code> 的工作步骤如下：</p><ol><li>将字符串 <code>&#39;ab,cd,ef,gh&#39;</code> 按照分隔符 <code>&#39;,&#39;</code> 拆分，结果是一个数组 <code>{ab, cd, ef, gh}</code>。</li><li>返回 <code>{ab, cd, ef, gh}</code> 的第 3 个元素，即：<code>ef</code>。</li></ol><p>您还可以为参数 <code>n</code> 指定一个负数以返回倒数第几个部分，比如：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> split_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ab,cd,ef,gh</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">split_part</span></span>\n<span class="line"><span style="color:#FFCB6B;">------------</span></span>\n<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ef</span></span></code></pre></div><p>这里，<code>split_part()</code> 的工作步骤如下：</p><ol><li>将字符串 <code>&#39;ab,cd,ef,gh&#39;</code> 按照分隔符 <code>&#39;,&#39;</code> 拆分，结果是一个数组 <code>{ab, cd, ef, gh}</code>。</li><li>由于参数 <code>n</code> 为 <code>-2</code>，因此要返回 <code>{ab, cd, ef, gh}</code> 的倒数第 2 个元素，即：<code>ef</code>。</li></ol>',20),t=[o];function n(c,r,i,d,h,C){return a(),e("div",null,t)}const g=s(p,[["render",n]]);export{y as __pageData,g as default};
