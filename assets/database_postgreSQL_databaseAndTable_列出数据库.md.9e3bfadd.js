import{_ as s,o as a,c as l,R as n}from"./chunks/framework.318fa179.js";const B=JSON.parse('{"title":"在 PostgreSQL 中列出所有数据库","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/databaseAndTable/列出数据库.md","filePath":"database/postgreSQL/databaseAndTable/列出数据库.md","lastUpdated":1690289709000}'),p={name:"database/postgreSQL/databaseAndTable/列出数据库.md"},o=n(`<h1 id="在-postgresql-中列出所有数据库" tabindex="-1">在 PostgreSQL 中列出所有数据库 <a class="header-anchor" href="#在-postgresql-中列出所有数据库" aria-label="Permalink to &quot;在 PostgreSQL 中列出所有数据库&quot;">​</a></h1><p>本文介绍了在 PostgreSQL 列出数据库的两种方法。</p><p>PostgreSQL 提供了两种方法列出 PostgreSQL 服务器中的所有数据库：</p><ul><li>在 <code>psql</code> 工具中使用 <code>\\l</code> 或者 <code>\\l+</code> 列出所有的数据库。</li><li>从 <code>pg_database</code> 表中查询所有的数据库。</li></ul><h2 id="使用-l-列出数据库" tabindex="-1">使用 <code>\\l</code> 列出数据库 <a class="header-anchor" href="#使用-l-列出数据库" aria-label="Permalink to &quot;使用 \`\\l\` 列出数据库&quot;">​</a></h2><p>本实例演示了使用 <code>psql</code> 工具登录数据库并列出数据库的步骤。请按照如下步骤进行：</p><ol><li><p>使用 postgres 用户登录 PostgreSQL 服务器：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">~</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> psql -U postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">psql</span><span style="color:#A6ACCD;"> (14.4)</span></span>
<span class="line"><span style="color:#FFCB6B;">Type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">help</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">help.</span></span></code></pre></div><p>注意：您也可以使用其他任何具有相应的数据库权限的用户登录。</p></li><li><p>使用 <code>\\l</code> 命令列出所有的数据库，如下：</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\l</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">List</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">databases</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Name</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Owner</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Encoding</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Collate</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Ctype</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">Access</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">privileges</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------+----------+----------+---------+---------+-----------------------</span></span>
<span class="line"><span style="color:#FFCB6B;">postgres</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UTF8</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C.UTF-8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C.UTF-8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#FFCB6B;">template0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UTF8</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C.UTF-8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C.UTF-8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> =c/postgres          </span><span style="color:#C3E88D;">+</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> postgres</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">CTc/postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">template1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UTF8</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C.UTF-8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C.UTF-8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> =c/postgres          </span><span style="color:#C3E88D;">+</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> postgres</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">CTc/postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">testdb</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UTF8</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C.UTF-8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C.UTF-8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#FFCB6B;">testdb2</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UTF8</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C.UTF-8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C.UTF-8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div></li><li><p>如果要查看更多关于数据库的信息，请使用 <code>\\l+</code> 命令，如下：</p><div class="language-fallback"><button title="Copy Code" class="copy"></button><span class="lang">fallback</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">\\l+</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">List</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">databases</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Name</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Owner</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Encoding</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Collate</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Ctype</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">Access</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">privileges</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Size</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tablespace</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                </span><span style="color:#FFCB6B;">Description</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------+----------+----------+---------+---------+-----------------------+---------+------------+--------------------------------------------</span></span>
<span class="line"><span style="color:#FFCB6B;">postgres</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UTF8</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C.UTF-8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C.UTF-8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">8529</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kB</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">pg_default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">administrative</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">connection</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">database</span></span>
<span class="line"><span style="color:#FFCB6B;">template0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UTF8</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C.UTF-8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C.UTF-8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> =c/postgres          </span><span style="color:#C3E88D;">+</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">8377</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kB</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">pg_default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unmodifiable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">empty</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">database</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> postgres</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">CTc/postgres</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#FFCB6B;">template1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UTF8</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C.UTF-8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C.UTF-8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> =c/postgres          </span><span style="color:#C3E88D;">+</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">8529</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kB</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">pg_default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">databases</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> postgres</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">CTc/postgres</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#FFCB6B;">testdb</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UTF8</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C.UTF-8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C.UTF-8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">8897</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kB</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">pg_default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#FFCB6B;">testdb2</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UTF8</span><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C.UTF-8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">C.UTF-8</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">                       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">8545</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kB</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">pg_default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div></li></ol><p>您可以看到， <code>\\l+</code> 的输出比 <code>\\l</code> 多了 <code>Size</code>, <code>Tablespace</code> 和 <code>Description</code> 列。</p><h2 id="从-pg-database-表中查询数据库" tabindex="-1">从 <code>pg_database</code> 表中查询数据库 <a class="header-anchor" href="#从-pg-database-表中查询数据库" aria-label="Permalink to &quot;从 \`pg_database\` 表中查询数据库&quot;">​</a></h2><p>除了上面的 <code>\\l+</code> 和 <code>\\l</code> 命令，您还可以从 <code>pg_database</code> 表中查询所有的数据库。</p><p><code>pg_database</code> 表是 PostgreSQL 内置的一个表，它存储了所有的数据库。</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> datname </span><span style="color:#F78C6C;">FROM</span><span style="color:#A6ACCD;"> pg_database;</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">datname</span></span>
<span class="line"><span style="color:#FFCB6B;">-----------</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">testdb</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">template1</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">template0</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">testdb2</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>PostgreSQL 提供了两种方法列出 PostgreSQL 服务器中的所有的数据库中：</p><ul><li>在 <code>psql</code> 工具中使用 <code>\\l</code> 或者 <code>\\l+</code> 列出当所有的数据库。</li><li>从 <code>pg_database</code> 表中查询所有的数据库。</li></ul>`,16),e=[o];function t(c,C,r,D,y,F){return a(),l("div",null,e)}const d=s(p,[["render",t]]);export{B as __pageData,d as default};
