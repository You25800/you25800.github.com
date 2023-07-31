import{_ as s,o as a,c as e,R as n}from"./chunks/framework.318fa179.js";const d=JSON.parse('{"title":"PostgreSQL pg_notification_queue_usage() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/pg_notification_queue_usage.md","filePath":"database/postgreSQL/ref/pg_notification_queue_usage.md","lastUpdated":1690341661000}'),o={name:"database/postgreSQL/ref/pg_notification_queue_usage.md"},t=n(`<h1 id="postgresql-pg-notification-queue-usage-函数" tabindex="-1">PostgreSQL pg_notification_queue_usage() 函数 <a class="header-anchor" href="#postgresql-pg-notification-queue-usage-函数" aria-label="Permalink to &quot;PostgreSQL pg\\_notification\\_queue\\_usage() 函数&quot;">​</a></h1><p>PostgreSQL <code>pg_notification_queue_usage()</code> 函数返回异步通知队列当前未处理的通知所占用的最大大小部分。</p><h2 id="pg-notification-queue-usage-语法" tabindex="-1"><code>pg_notification_queue_usage()</code> 语法 <a class="header-anchor" href="#pg-notification-queue-usage-语法" aria-label="Permalink to &quot;\`pg_notification_queue_usage()\` 语法&quot;">​</a></h2><p>这里是 PostgreSQL <code>pg_notification_queue_usage()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pg_notification_queue_usage</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">double precision</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><p>PostgreSQL <code>pg_notification_queue_usage()</code> 函数无需任何参数。</p><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>pg_notification_queue_usage()</code> 函数返回一个 0 到 1 之间的数值，它是异步通知队列当前未处理的通知所占用的最大大小部分。</p><h2 id="pg-notification-queue-usage-示例" tabindex="-1"><code>pg_notification_queue_usage()</code> 示例 <a class="header-anchor" href="#pg-notification-queue-usage-示例" aria-label="Permalink to &quot;\`pg_notification_queue_usage()\` 示例&quot;">​</a></h2><p>以下语句说明了 PostgreSQL <code>pg_notification_queue_usage()</code> 函数的基本用法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> pg_notification_queue_usage</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pg_notification_queue_usage</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">                           </span><span style="color:#FFCB6B;">0</span></span></code></pre></div><p>这里，当前会话中没有待处理的异步通知队列，所以 <code>pg_notification_queue_usage()</code> 函数返回了 0。</p><p>要想指定的频道发送 10000 条异步通知，请使用以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">COUNT</span><span style="color:#A6ACCD;">(pg_notify(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">channel1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, y </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">repeat</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">x</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">5000</span><span style="color:#A6ACCD;">)))</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generate_series</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">20000</span><span style="color:#A6ACCD;">) </span><span style="color:#F78C6C;">AS</span><span style="color:#A6ACCD;"> x(y);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">count</span></span>
<span class="line"><span style="color:#FFCB6B;">-------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">10000</span></span></code></pre></div><p>这里使用 <a href="./generate_series.html"><code>generate_series()</code></a> 函数产生了一个集合，并使用 <a href="./repeat.html"><code>repeat()</code></a> 函数通过重复 <code>x</code> 字符 5000 此构造了一个消息。</p><p>在发送的过程中，打开另一个会话，运行以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> pg_notification_queue_usage</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pg_notification_queue_usage</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">0.0006856918334960938</span></span></code></pre></div>`,21),p=[t];function l(c,i,r,u,g,_){return a(),e("div",null,p)}const y=s(o,[["render",l]]);export{d as __pageData,y as default};
