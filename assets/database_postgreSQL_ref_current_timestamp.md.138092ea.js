import{_ as s,o as a,c as n,R as p}from"./chunks/framework.318fa179.js";const D=JSON.parse('{"title":"PostgreSQL current_timestamp() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/current_timestamp.md","filePath":"database/postgreSQL/ref/current_timestamp.md","lastUpdated":1690159250000}'),l={name:"database/postgreSQL/ref/current_timestamp.md"},o=p(`<h1 id="postgresql-current-timestamp-函数" tabindex="-1">PostgreSQL current_timestamp() 函数 <a class="header-anchor" href="#postgresql-current-timestamp-函数" aria-label="Permalink to &quot;PostgreSQL current\\_timestamp() 函数&quot;">​</a></h1><p>PostgreSQL <code>current_timestamp()</code> 函数返回当前的日期和时间（所属事务开始的时间）。</p><h2 id="current-timestamp-语法" tabindex="-1"><code>current_timestamp()</code> 语法 <a class="header-anchor" href="#current-timestamp-语法" aria-label="Permalink to &quot;\`current_timestamp()\` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>current_timestamp()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">current_timestamp </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">TIMESTAMP WITH TIME ZONE</span></span></code></pre></div><p>或者</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">current_timestamp</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">precision</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">TIMESTAMP WITH TIME ZONE</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>precision</code></em></p><p>必需的。 它是一个整数，指示了小数秒的位数。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>current_timestamp()</code> 函数返回一个带有时区信息的日期和时间，它是该函数所属的事务开始的系统日期和时间。</p><p>也就是说同一个语句中的 <code>current_timestamp()</code> 函数返回值相同，这点与 <a href="./clock_timestamp.html"><code>clock_timestamp()</code></a> 不同。</p><h2 id="current-timestamp-示例" tabindex="-1"><code>current_timestamp()</code> 示例 <a class="header-anchor" href="#current-timestamp-示例" aria-label="Permalink to &quot;\`current_timestamp()\` 示例&quot;">​</a></h2><p>本示例展示了如何使用 PostgreSQL <code>current_timestamp()</code> 函数获取当前的日期和时间。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> current_timestamp;</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">current_timestamp</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2022</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">05</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">14</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">55</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">37</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">222601</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">03</span></span></code></pre></div><p>或者使用如下语句来限制小数秒的位数：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">current_timestamp</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">current_timestamp</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">current_timestamp</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">current_timestamp</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">current_timestamp</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">current_timestamp</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">current_timestamp</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">current_timestamp | </span><span style="color:#F78C6C;">2022</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">05</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">14</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">57</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">26</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">03</span></span>
<span class="line"><span style="color:#A6ACCD;">current_timestamp | </span><span style="color:#F78C6C;">2022</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">05</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">14</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">57</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">25</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">03</span></span>
<span class="line"><span style="color:#A6ACCD;">current_timestamp | </span><span style="color:#F78C6C;">2022</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">05</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">14</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">57</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">25</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">52</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">03</span></span>
<span class="line"><span style="color:#A6ACCD;">current_timestamp | </span><span style="color:#F78C6C;">2022</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">05</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">14</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">57</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">25</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">518</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">03</span></span>
<span class="line"><span style="color:#A6ACCD;">current_timestamp | </span><span style="color:#F78C6C;">2022</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">05</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">14</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">57</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">25</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">5176</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">03</span></span>
<span class="line"><span style="color:#A6ACCD;">current_timestamp | </span><span style="color:#F78C6C;">2022</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">05</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">14</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">57</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">25</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">51761</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">03</span></span>
<span class="line"><span style="color:#A6ACCD;">current_timestamp | </span><span style="color:#F78C6C;">2022</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">05</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">14</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">57</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">25</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">517606</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">03</span></span></code></pre></div><p><code>current_timestamp()</code> 函数返回的是所属的事务开始的时间，而不是函数执行时刻的时间。请看下面的示例：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span></span>
<span class="line"><span style="color:#A6ACCD;">    current_timestamp,</span></span>
<span class="line"><span style="color:#A6ACCD;">    pg_sleep(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    current_timestamp;</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">[ RECORD 1 ]</span><span style="color:#676E95;font-style:italic;">-----+------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">current_timestamp | </span><span style="color:#F78C6C;">2022</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">05</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">14</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">59</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">08</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">628751</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">03</span></span>
<span class="line"><span style="color:#A6ACCD;">pg_sleep          |</span></span>
<span class="line"><span style="color:#A6ACCD;">current_timestamp | </span><span style="color:#F78C6C;">2022</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">05</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">14</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">59</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">08</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">628751</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">03</span></span></code></pre></div><p>这里，即使我们在两个 <code>current_timestamp</code> 函数使用了 <a href="./pg_sleep.html"><code>pg_sleep(1)</code></a> 将执行暂停了 1 秒，两个 <code>current_timestamp</code> 函数返回的时间仍然是相同的。</p>`,23),e=[o];function t(c,r,C,y,A,i){return a(),n("div",null,e)}const m=s(l,[["render",t]]);export{D as __pageData,m as default};
