import{_ as s,o as a,c as n,R as l}from"./chunks/framework.318fa179.js";const i=JSON.parse('{"title":"PostgreSQL 部分索引","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/index/部分索引.md","filePath":"database/postgreSQL/index/部分索引.md","lastUpdated":1689834507000}'),p={name:"database/postgreSQL/index/部分索引.md"},o=l(`<h1 id="postgresql-部分索引" tabindex="-1">PostgreSQL 部分索引 <a class="header-anchor" href="#postgresql-部分索引" aria-label="Permalink to &quot;PostgreSQL 部分索引&quot;">​</a></h1><p>本文介绍在 PostgreSQL 中如何创建部分索引。</p><p>PostgreSQL 允许您创建部分索引。部分索引由助于减少索引大小，因为它没有为列中的所有数据创建索引，它只为符合条件的行中的数据建立索引。</p><p>如果您有 <a href="/database/postgreSQL/base/WHERE.html"><code>WHERE</code></a> 使用常量值的常用条件，则部分索引很有用，如下所示：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> table_name</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> column_name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> constant_value;</span></span></code></pre></div><p>让我们看一下 <a href="/database/sakila/">Sakila 示例数据库</a>中的 <code>customer</code> 表：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\d customer</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">public.customer</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">Column</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">Type</span><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Collation</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Nullable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                    </span><span style="color:#FFCB6B;">Default</span></span>
<span class="line"><span style="color:#FFCB6B;">-------------+-----------------------------+-----------+----------+-----------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">customer_id</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">integer</span><span style="color:#A6ACCD;">                     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">nextval(</span><span style="color:#FFCB6B;">&#39;customer_customer_id_seq&#39;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">:regclass)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">store_id</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">smallint</span><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">first_name</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">character</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">varying</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">45</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">last_name</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">character</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">varying</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">45</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">email</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">character</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">varying</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">50</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">address_id</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">smallint</span><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">activebool</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;">                     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">create_date</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">date</span><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">&#39;now&#39;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">:text::date</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">last_update</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">timestamp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">without</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">time</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zone</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">now</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;"> active      | integer                     |           |          |</span></span>
<span class="line"><span style="color:#A6ACCD;">Indexes:</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;customer_pkey&quot; PRIMARY KEY, btree </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">customer_id</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;customer_lower_idx&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">btree</span><span style="color:#A6ACCD;"> (lower(last_name::text))</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;idx_fk_address_id&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">btree</span><span style="color:#A6ACCD;"> (address_id)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;idx_fk_store_id&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">btree</span><span style="color:#A6ACCD;"> (store_id)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&quot;idx_last_name&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">btree</span><span style="color:#A6ACCD;"> (last_name)</span></span></code></pre></div><p>例如，您通常对不活跃的客户感兴趣，并经常进行一些跟进以让他们回来购买更多东西。</p><p>以下查询查找所有不活动的客户：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> customer</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> active </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><p>要执行此查询，查询计划器需要扫描 <code>customer</code> 表，如以下 <code>EXPLAIN</code> 语句所示：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">EXPLAIN</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> customer</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> active </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">QUERY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PLAN</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Seq</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Scan</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">customer</span><span style="color:#A6ACCD;">  (cost=0.00..15.49 </span><span style="color:#C3E88D;">rows=</span><span style="color:#F78C6C;">15</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">width=</span><span style="color:#F78C6C;">70</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">Filter:</span><span style="color:#A6ACCD;"> (active </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>您可以通过为 <code>active</code> 列<a href="./创建索引.html">创建索引</a>来优化此查询， 如下所示：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">INDEX</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">idx_customer_active</span></span>
<span class="line"><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> customer(active);</span></span></code></pre></div><p>该索引实现了其目的，但是，它包含许多从未搜索过的行，即所有活跃客户。</p><p>要定义仅包含非活动客户的索引，请使用以下语句：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">INDEX</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">idx_customer_inactive</span></span>
<span class="line"><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> customer(active)</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> active </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><p>该语句定义了一个部分索引 <code>idx_customer_inactive</code>，只有符合 <a href="/database/postgreSQL/base/WHERE.html"><code>WHERE</code></a>条件 <code>active = 0</code> 中的 <code>active</code> 值才会被索引。 相比较为所有 <code>active</code> 值建立的索引 <code>idx_customer_active</code>，此索引的大小会很小。</p><p>从现在开始，只要该 <code>WHERE</code> 子句出现在查询中，PostgreSQL 就会考虑部分索引：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">EXPLAIN</span></span>
<span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span></span>
<span class="line"><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> customer</span></span>
<span class="line"><span style="color:#F78C6C;">WHERE</span><span style="color:#A6ACCD;"> active </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">QUERY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PLAN</span></span>
<span class="line"><span style="color:#FFCB6B;">---------------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Index</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Scan</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">using</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">idx_customer_active</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">customer</span><span style="color:#A6ACCD;">  (cost=0.15..11.69 </span><span style="color:#C3E88D;">rows=</span><span style="color:#F78C6C;">15</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">width=</span><span style="color:#F78C6C;">70</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">Index</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Cond:</span><span style="color:#A6ACCD;"> (active </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>本文介绍了 PostgreSQL 部分索引以及如何使用它来指定应添加到索引中的行。</p>`,25),e=[o];function t(c,C,r,y,A,D){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
