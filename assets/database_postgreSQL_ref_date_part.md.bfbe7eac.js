import{_ as s,o as a,c as l,R as n}from"./chunks/framework.318fa179.js";const A=JSON.parse('{"title":"PostgreSQL date_part() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/date_part.md","filePath":"database/postgreSQL/ref/date_part.md","lastUpdated":1690159250000}'),p={name:"database/postgreSQL/ref/date_part.md"},e=n(`<h1 id="postgresql-date-part-函数" tabindex="-1">PostgreSQL date_part() 函数 <a class="header-anchor" href="#postgresql-date-part-函数" aria-label="Permalink to &quot;PostgreSQL date\\_part() 函数&quot;">​</a></h1><p>PostgreSQL <code>date_part()</code> 函数从指定的时间戳或者时间间隔中抽取指定的部分并返回。</p><h2 id="date-part-语法" tabindex="-1"><code>date_part()</code> 语法 <a class="header-anchor" href="#date-part-语法" aria-label="Permalink to &quot;\`date_part()\` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>date_part()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">date_part(field </span><span style="color:#C792EA;">TEXT</span><span style="color:#A6ACCD;">, source </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DOUBLE PRECISION</span></span>
<span class="line"><span style="color:#A6ACCD;">date_part(field </span><span style="color:#C792EA;">TEXT</span><span style="color:#A6ACCD;">, source </span><span style="color:#C792EA;">DATE</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DOUBLE PRECISION</span></span>
<span class="line"><span style="color:#A6ACCD;">date_part(field </span><span style="color:#C792EA;">TEXT</span><span style="color:#A6ACCD;">, source </span><span style="color:#C792EA;">TIME</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DOUBLE PRECISION</span></span>
<span class="line"><span style="color:#A6ACCD;">date_part(field </span><span style="color:#C792EA;">TEXT</span><span style="color:#A6ACCD;">, source INTERVAL) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">DOUBLE PRECISION</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>field</code></em></p><p>必需的。 它是一个字符串表示要抽取的部分。您可以是使用以下值：<code>century</code>: 世纪<code>day</code>: 天<code>decade</code>: 十年，即年份除以 10<code>dow</code>: 星期几。 星期天为 0，星期六为 6。<code>doy</code>: 一年中的某一天 (1–365/366)<code>epoch</code>: 对于 <code>TIMESTAMP</code> 值来说，返回 Unix 时间戳。对于间隔值来说，返回总的秒数。<code>hour</code>: 小时 0-23<code>isodow</code>: 星期几。 星期一为 1，星期天为 7。<code>isoyear</code>: 日期所在的 ISO 8601 周编号年份（不适用于间隔）<code>julian</code>: 与日期或时间戳对应的儒略历日期（不适用于间隔）<code>microseconds</code>: 秒乘以 1 000 000<code>millennium</code>: 千年期<code>milliseconds</code>: 秒乘以 1 000<code>minute</code>: 分钟<code>month</code>: 对于 <code>TIMESTAMP</code> 值来说，返回一年中的月份 1 - 12；对于间隔值来说，返回月数 0 - 11。<code>quarter</code>: 季节 1-4<code>second</code>: 秒<code>timezone</code>: 时区偏移量，以秒为单位<code>timezone_hour</code>: 时区偏移量的小时部分<code>timezone_minute</code>: 时区偏移量的分钟部分<code>week</code>: 一年中的 ISO 8601 周编号<code>year</code>: 年份</p></li><li><p><em><code>source</code></em></p><p>必需的。 它可以是时间戳、日期、时间或者间隔类型的。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>date_part()</code> 函数返回从 <code>source</code> 返回通过字符串 <code>field</code> 指定的部分。</p><h2 id="date-part-示例" tabindex="-1"><code>date_part()</code> 示例 <a class="header-anchor" href="#date-part-示例" aria-label="Permalink to &quot;\`date_part()\` 示例&quot;">​</a></h2><p>你能使用 <code>date_part()</code> 函数返回一个时间戳值所在的世纪。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">century</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-05-16 12:41:13.662522</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">date_part</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">21</span></span></code></pre></div><p>你能使用 <code>date_part()</code> 函数获得一个时间戳值的天字段。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">day</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-05-16 12:41:13.662522</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">date_part</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">16</span></span></code></pre></div><p>你能使用 <code>date_part()</code> 函数获得一个间隔值的中的天数。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">day</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, INTERVAL </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2 days 10 minutes</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">date_part</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#F78C6C;">2</span></span></code></pre></div><p>你能使用 <code>date_part()</code> 函数获得一个时间戳值的 <code>decade</code> 字段。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">decade</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-05-16 12:41:13.662522</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">date_part</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#F78C6C;">202</span></span></code></pre></div><p>你能使用 <code>date_part()</code> 函数获得一个时间戳值是星期几（0-6 表示星期天到星期六）。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dow</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-05-16 12:41:13.662522</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">date_part</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#F78C6C;">1</span></span></code></pre></div><p>你能使用 <code>date_part()</code> 函数获得一个时间戳值是一年中的第几天。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">doy</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-05-16 12:41:13.662522</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">date_part</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#F78C6C;">136</span></span></code></pre></div><p>你能使用 <code>date_part()</code> 函数将一个时间戳值转为 Unix 时间戳。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">epoch</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-05-16 12:41:13.662522</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">date_part</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1652694073</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">662522</span></span></code></pre></div><p>你能使用 <code>date_part()</code> 函数获得一个时间戳值中的小时部分。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hour</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-05-16 12:41:13.662522</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">date_part</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">12</span></span></code></pre></div><p>你能使用 <code>date_part()</code> 函数获得一个时间戳值是星期几（1-7 表示星期一到星期天）。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">isodow</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-05-16 12:41:13.662522</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">date_part</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#F78C6C;">1</span></span></code></pre></div><p>你能使用 <code>date_part()</code> 函数获得一个时间戳值落在 ISO 8601 周编号年分。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">isoyear</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-05-16 12:41:13.662522</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">date_part</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">2022</span></span></code></pre></div><p>你能使用 <code>date_part()</code> 函数获得一个时间戳值对应的儒略日期。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">julian</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-05-16 12:41:13.662522</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">date_part</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2459716</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">528630353</span></span></code></pre></div><p>你能使用 <code>date_part()</code> 函数将时间戳值中的全秒转为微秒。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">microseconds</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-05-16 12:41:13.662522</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">date_part</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">13662522</span></span></code></pre></div><p>你能使用 <code>date_part()</code> 函数获得一个时间戳值所处的千年期。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">millennium</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-05-16 12:41:13.662522</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">date_part</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#F78C6C;">3</span></span></code></pre></div><p>你能使用 <code>date_part()</code> 函数将时间戳值中的全秒转为毫秒。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">milliseconds</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-05-16 12:41:13.662522</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">date_part</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">13662</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">522</span></span></code></pre></div><p>你能使用 <code>date_part()</code> 函数获得一个时间戳值中的分钟部分。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">minute</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-05-16 12:41:13.662522</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">date_part</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">41</span></span></code></pre></div><p>你能使用 <code>date_part()</code> 函数获得一个时间戳值中的月份部分。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">month</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-05-16 12:41:13.662522</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">date_part</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#F78C6C;">5</span></span></code></pre></div><p>你能使用 <code>date_part()</code> 函数获得一个时间戳值中的季节部分。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">quarter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-05-16 12:41:13.662522</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">date_part</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#F78C6C;">2</span></span></code></pre></div><p>你能使用 <code>date_part()</code> 函数获得一个时间戳值中的秒部分。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">second</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-05-16 12:41:13.662522</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">date_part</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">13</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">662522</span></span></code></pre></div><p>你能使用 <code>date_part()</code> 函数获得一个时间戳值位于一年中的第几周。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">week</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-05-16 12:41:13.662522</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">date_part</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">20</span></span></code></pre></div><p>你能使用 <code>date_part()</code> 函数获得一个时间戳值中的年份部分。如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> date_part(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">year</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#C792EA;">TIMESTAMP</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022-05-16 12:41:13.662522</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">date_part</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">2022</span></span></code></pre></div>`,70),o=[e];function t(c,r,C,i,y,d){return a(),l("div",null,o)}const F=s(p,[["render",t]]);export{A as __pageData,F as default};
