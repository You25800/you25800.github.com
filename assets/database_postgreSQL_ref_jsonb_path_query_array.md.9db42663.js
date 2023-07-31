import{_ as a,o as s,c as n,R as o}from"./chunks/framework.318fa179.js";const _=JSON.parse('{"title":"PostgreSQL jsonb_path_query_array() 函数","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/ref/jsonb_path_query_array.md","filePath":"database/postgreSQL/ref/jsonb_path_query_array.md","lastUpdated":1690180485000}'),e={name:"database/postgreSQL/ref/jsonb_path_query_array.md"},p=o(`<h1 id="postgresql-jsonb-path-query-array-函数" tabindex="-1">PostgreSQL jsonb_path_query_array() 函数 <a class="header-anchor" href="#postgresql-jsonb-path-query-array-函数" aria-label="Permalink to &quot;PostgreSQL jsonb\\_path\\_query\\_array() 函数&quot;">​</a></h1><p>PostgreSQL <code>jsonb_path_query_array()</code> 函数在一个给定的 JSON 中根据指定的路径获取值，并将所有匹配的值作为一个数组返回。</p><h2 id="jsonb-path-query-array-语法" tabindex="-1"><code>jsonb_path_query_array()</code> 语法 <a class="header-anchor" href="#jsonb-path-query-array-语法" aria-label="Permalink to &quot;\`jsonb_path_query_array()\` 语法&quot;">​</a></h2><p>这是 PostgreSQL <code>jsonb_path_query_array()</code> 函数的语法：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">jsonb_path_query_array(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">target</span><span style="color:#A6ACCD;"> JSONB</span></span>
<span class="line"><span style="color:#A6ACCD;">  , </span><span style="color:#C792EA;">path</span><span style="color:#A6ACCD;"> JSONPATH</span></span>
<span class="line"><span style="color:#A6ACCD;">  [, vars JSONB</span></span>
<span class="line"><span style="color:#A6ACCD;">  [, silent BOOLEAN]]</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> JSONB</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><p><em><code>target</code></em></p><p>必需的。 要检查的 JSONB 值。</p></li><li><p><em><code>path</code></em></p><p>必需的。 要检查的 JSON 路径，它是 <code>JSONPATH</code> 类型的。</p></li><li><p><em><code>vars</code></em></p><p>可选的。 路径中要用到的变量值。</p></li><li><p><em><code>silent</code></em></p><p>可选的。 如果提供了此参数，并且为 <code>true</code>，该函数会像 <code>@?</code> 和 <code>@@</code> 操作符一样抑制相同的错误。</p></li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>PostgreSQL <code>jsonb_path_query_array()</code> 函数返回一个 JSON 数组，它包含了在指定的 JSON 值中所有与指定的路径匹配的值。</p><p>如果任意一个参数是 NULL，<code>jsonb_path_query_array()</code> 函数将返回 NULL。</p><h2 id="jsonb-path-query-array-示例" tabindex="-1"><code>jsonb_path_query_array()</code> 示例 <a class="header-anchor" href="#jsonb-path-query-array-示例" aria-label="Permalink to &quot;\`jsonb_path_query_array()\` 示例&quot;">​</a></h2><h3 id="json-数组" tabindex="-1">JSON 数组 <a class="header-anchor" href="#json-数组" aria-label="Permalink to &quot;JSON 数组&quot;">​</a></h3><p>下面的示例展示了如何使用 PostgreSQL <code>jsonb_path_query_array()</code> 函数从一个 JSON 数组中根据指定的路径获取值。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> jsonb_path_query_array(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[1, 2, 3]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$[*] ? (@ &gt; 1)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">jsonb_path_query_array</span></span>
<span class="line"><span style="color:#FFCB6B;">------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span></span></code></pre></div><p>我们可以在 JSON 路径中使用变量，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> jsonb_path_query_array(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[1, 2, 3, 4]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$[*] ? (@ &gt;= $min &amp;&amp; @ &lt;= $max)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;min&quot;: 2, &quot;max&quot;: 3}</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">jsonb_path_query_array</span></span>
<span class="line"><span style="color:#FFCB6B;">------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span></span></code></pre></div><p>这里，我们在 JSON 路径 <code>$[*] ? (@ &gt;= $min &amp;&amp; @ &lt;= $max)</code> 中使用了两个变量 <code>min</code> 和 <code>max</code>，并且我们在参数 <code>var</code> 中为变量提供了值 <code>{&quot;min&quot;: 2, &quot;max&quot;: 3}</code>，这样，JSON 路径变成了 <code>$[*] ? (@ &gt;= 2 &amp;&amp; @ &lt;= 3)</code>。也就是说，该函数用来返回数组 <code>[1, 2, 3, 4]</code> 中的大于等 2 并且小于等于 3 的所有的值。</p><h3 id="json-对象" tabindex="-1">JSON 对象 <a class="header-anchor" href="#json-对象" aria-label="Permalink to &quot;JSON 对象&quot;">​</a></h3><p>下面的示例展示了如何使用 PostgreSQL <code>jsonb_path_query_array()</code> 函数从一个 JSON 对象中根据指定的路径获取值。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> jsonb_path_query_array(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;x&quot;: 1, &quot;y&quot;: 2, &quot;z&quot;: 3}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$.* ? (@ &gt;= 2)</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">jsonb_path_query_array</span></span>
<span class="line"><span style="color:#FFCB6B;">------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span></span></code></pre></div><p>这里， JSON 路径 <code>$.* ? (@ &gt;= 2)</code> 表示在 JSON 对象 <code>{&quot;x&quot;: 1, &quot;y&quot;: 2, &quot;z&quot;: 3}</code> 中的顶层成员的值中所有大于 2 的值。</p>`,24),l=[p];function t(r,c,y,i,d,C){return s(),n("div",null,l)}const u=a(e,[["render",t]]);export{_ as __pageData,u as default};
