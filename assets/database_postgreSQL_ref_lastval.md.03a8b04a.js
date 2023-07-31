import{_ as a,o as s,c as e,R as l}from"./chunks/framework.318fa179.js";const v=JSON.parse('{"title":"PostgreSQL lastval() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/lastval.md","filePath":"database/postgreSQL/ref/lastval.md","lastUpdated":1690337946000}'),o={name:"database/postgreSQL/ref/lastval.md"},n=l(`<h1 id="postgresql-lastval-函数" tabindex="-1">PostgreSQL lastval() 函数 <a class="header-anchor" href="#postgresql-lastval-函数" aria-label="Permalink to &quot;PostgreSQL lastval() 函数&quot;">​</a></h1><p>PostgreSQL <code>lastval()</code> 函数返回当前会话中最近一次 <a href="./nextval.html"><code>nextval()</code></a> 函数的调用结果。如果当前会话没有调用过 <code>nextval()</code> 函数，将会发生一个错误。</p><p><code>lastval()</code> 函数与 <a href="./currval.html"><code>currval()</code></a> 函数类似，除了 <code>lastval()</code> 函数不需要指定序列名称。</p><h2 id="lastval-语法" tabindex="-1"><code>lastval()</code> 语法 <a class="header-anchor" href="#lastval-语法" aria-label="Permalink to &quot;\`lastval()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>lastval()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">lastval</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">BIGINT</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><p>PostgreSQL <code>lastval()</code> 函数不需要任何参数。</p><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>lastval()</code> 函数返回当前会话中最近一次 <code>nextval()</code> 函数的调用结果。</p><p>如果在当前会话中没有调用过 <code>nextval()</code> 函数，那将会发生一个错误。</p><h2 id="lastval-示例" tabindex="-1"><code>lastval()</code> 示例 <a class="header-anchor" href="#lastval-示例" aria-label="Permalink to &quot;\`lastval()\` 示例&quot;">​</a></h2><p>首先，让我们使用 <code>CREATE SEQUENCE</code> 语句创建一个简单的序列生成器 <code>my_sequence</code>：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">DROP</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SEQUENCE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">IF</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">EXISTS</span><span style="color:#A6ACCD;"> my_sequence;</span></span>
<span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SEQUENCE</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">my_sequence</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">START</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><p>这里，我们创建了一个名称为 <code>my_sequence</code> 序列生成器，它的起始值是 100。</p><p>然后，让我们使用 PostgreSQL <code>nextval()</code> 函数将序列 <code>my_sequence</code> 前进一位并返回最新的值：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> nextval(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my_sequence</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">nextval</span></span>
<span class="line"><span style="color:#FFCB6B;">---------</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">100</span></span></code></pre></div><p>让我们使用 <code>lastval()</code> 函数返回序列 <code>my_sequence</code> 的当前值：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> lastval</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">lastval</span></span>
<span class="line"><span style="color:#FFCB6B;">---------</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">100</span></span></code></pre></div><p>这里，<code>lastval()</code> 函数的返回值和最近一次 <code>nextval()</code> 函数的返回值是一样的。</p>`,22),t=[n];function p(c,r,d,i,C,y){return s(),e("div",null,t)}const A=a(o,[["render",p]]);export{v as __pageData,A as default};
