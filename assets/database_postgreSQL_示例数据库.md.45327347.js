import{_ as s,o as a,c as l,R as o}from"./chunks/framework.318fa179.js";const p="/assets/sakila.4b3151d9.png",B=JSON.parse('{"title":"在 PostgreSQL 中安装 Sakila 示例数据库","description":"","frontmatter":{},"headers":[],"relativePath":"database/postgreSQL/示例数据库.md","filePath":"database/postgreSQL/示例数据库.md","lastUpdated":1690289709000}'),n={name:"database/postgreSQL/示例数据库.md"},e=o(`<h1 id="在-postgresql-中安装-sakila-示例数据库" tabindex="-1">在 PostgreSQL 中安装 Sakila 示例数据库 <a class="header-anchor" href="#在-postgresql-中安装-sakila-示例数据库" aria-label="Permalink to &quot;在 PostgreSQL 中安装 Sakila 示例数据库&quot;">​</a></h1><p>本文介绍如何在 PostgreSQL 中安装本系列教程中使用的 Sakila 示例数据库。</p><p><a href="/database/sakila/">Sakila 示例数据库</a>是使用最广泛的示例数据库之一，也是最好的示例数据库之一。Sakila 数据库为 DVD 租赁商店业务建模，其中包含影片、演员、影片与演员关系等内容，以及连接影片、商店和租赁业务的中央库存表。</p><p>Sakila 示例数据库最初来源于 <a href="./.html">MySQL</a>，现在已经被移植到许多的数据库。</p><p>在这个 <a href="./.html">PostgreSQL 教程系列</a>中，我们使用 Sakila 示例数据库作为演示数据库，以更快速有效的入门和使用 PostgreSQL。</p><p>在本教程中，我们将在 PostgreSQL 中安装 Sakila 示例数据库，以为后的学习建立基础。</p><h2 id="前提条件" tabindex="-1">前提条件 <a class="header-anchor" href="#前提条件" aria-label="Permalink to &quot;前提条件&quot;">​</a></h2><p>在继续本教程之前，您需要：</p><ul><li><p>在您自己的系统上<a href="./index.html">安装 PostgreSQL 数据库服务器</a></p></li><li><p>下载 Sakila 示例数据库 sql 脚本文件。</p><p>请跳转到 <a href="https://github.com/jOOQ/sakila/tree/main/postgres-sakila-db%EF%BC%8C%E5%B9%B6%E4%B8%8B%E8%BD%BD%E4%BB%A5%E4%B8%8B%E4%B8%A4%E4%B8%AA%E6%96%87%E4%BB%B6%EF%BC%9A" target="_blank" rel="noreferrer">https://github.com/jOOQ/sakila/tree/main/postgres-sakila-db，并下载以下两个文件：</a></p><ol><li><code>postgres-sakila-schema.sql</code> - 此文件包含了创建数据库结构的 sql 脚本，包含表，函数，存储过程，触发器等。</li><li><code>postgres-sakila-insert-data.sql</code> - 此文件包含了导入数据的 sql 脚本。</li></ol></li></ul><p>这两个文件下载完成后，您要做的就是把这两个文件导入到数据库中。您可以使用以下两种工具中的任意一个将 sql 文件导入到数据库:</p><ul><li>psql 工具</li><li>pgAdmin 工具</li></ul><h2 id="使用-psql-工具导入-sakila-数据库" tabindex="-1">使用 psql 工具导入 Sakila 数据库 <a class="header-anchor" href="#使用-psql-工具导入-sakila-数据库" aria-label="Permalink to &quot;使用 psql 工具导入 Sakila 数据库&quot;">​</a></h2><p>如果您已经安装好 PostgreSQL，psql 工具也会随之安装。请按照如下步骤将 Sakila 数据库文件导入。</p><ol><li><p>启动 PowerShell 或命令提示符。</p></li><li><p>导航到 PostgreSQL 安装目录的 bin 目录下:</p><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd D:\\PostgreSQL\\</span><span style="color:#F78C6C;">14</span><span style="color:#A6ACCD;">\\bin</span></span></code></pre></div><p>注意，您的安装目录可能于此处不同。</p></li><li><p>启动 psql 工具并连接 PostgreSQL 服务器：</p><div class="language-powershell"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.\\</span><span style="color:#82AAFF;">psql.exe</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">U postgres</span></span></code></pre></div><p>根据提示输入 postgres 用户的密码，然后按下回车键。</p></li><li><p>创建 sakila 数据库</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DATABASE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sakila</span><span style="color:#89DDFF;">;</span></span></code></pre></div></li><li><p>选择 sakila 数据库</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">\\c</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sakila</span><span style="color:#89DDFF;">;</span></span></code></pre></div></li><li><p>分别指定以下两个语句以导入刚刚下载的两个文件 <code>postgres-sakila-schema.sql</code> 和 <code>postgres-sakila-insert-data.sql</code> ：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">\\i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">C:/Users/Adam/Downloads/postgres-sakila-schema.sql</span></span>
<span class="line"><span style="color:#FFCB6B;">\\i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">C:/Users/Adam/Downloads/postgres-sakila-insert-data.sql</span></span></code></pre></div><p>请注意，请使用 <code>/</code> 替换文件路径中的 <code>\\</code> 。</p></li><li><p>使用 <code>\\dt</code> 展示 sakila 数据库中的表以验证是否导入成功</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">\\dt</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">List</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">relations</span></span>
<span class="line"><span style="color:#FFCB6B;">Schema</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">Name</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Owner</span></span>
<span class="line"><span style="color:#FFCB6B;">----------+----------------+-------+----------</span></span>
<span class="line"><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">actor</span><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">category</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">city</span><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">country</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">customer</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">film</span><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">film_actor</span><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">film_category</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">inventory</span><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">language</span><span style="color:#A6ACCD;">         </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">payment</span><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">payment_p2007_01</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">payment_p2007_02</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">payment_p2007_03</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">payment_p2007_04</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">payment_p2007_05</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">payment_p2007_06</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">rental</span><span style="color:#A6ACCD;">           </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">staff</span><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#FFCB6B;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">store</span><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">postgres</span></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">21</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">)</span></span></code></pre></div></li></ol><p>至此， PostgreSQL 数据库服务器已经成功加载 sakila 数据库。</p><h2 id="使用-pgadmin-工具" tabindex="-1">使用 pgAdmin 工具 <a class="header-anchor" href="#使用-pgadmin-工具" aria-label="Permalink to &quot;使用 pgAdmin 工具&quot;">​</a></h2><p>使用 pgAdmin 4 工具加载 SQL 文件到 数据库中是一件更加容易的事情。请跟随以下步骤：</p><ol><li>启动 pgAdmin 4 并连接 PostgreSQL 服务器。</li><li>创建 sakila 数据库： <ol><li>右键左侧导航中的 <code>Databases</code> 。</li><li>选择 <code>Create</code> &gt; <code>Database...</code></li><li>在弹出的对话框中输入 <code>Database</code> 栏目中输入 <code>sakila</code></li><li>单击 <code>Save</code></li></ol></li><li>在新建的 <code>sakila</code> 数据上点击右键，并点击弹出菜单中的 <code>Query Tool</code> 。</li><li>点击 <code>Query Tool</code> 窗口中的右上角的 <code>Open File</code> 按钮并选择 <code>postgres-sakila-schema.sql</code> 文件，然后点击 <code>Excute</code> 按钮。 这个过程可能会持续数秒钟。</li><li>点击 <code>Query Tool</code> 窗口中的右上角的 <code>Open File</code> 按钮并选择 <code>postgres-sakila-insert-data.sql</code> 文件，然后点击 <code>Excute</code> 按钮。 这个过程可能会持续数秒钟。</li><li>依次点击左侧导航的 <code>sakila</code>, <code>Schemas</code>, <code>public</code>, <code>Tables</code> 以查看是否加载成功。</li></ol><h2 id="sakila-示例数据库架构" tabindex="-1">Sakila 示例数据库架构 <a class="header-anchor" href="#sakila-示例数据库架构" aria-label="Permalink to &quot;Sakila 示例数据库架构&quot;">​</a></h2><p>Sakila 数据库包括了 16 个表，7 个视图，3 个存储过程，3 个存储函数，6 个触发器。</p><p><img src="`+p+'" alt="Sakila 示例数据库架构图"></p><p>Sakila 示例数据库架构图</p><p><strong>Sakila 数据库中的表：</strong></p><ul><li>演员表 <code>actor</code>: 演员的信息</li><li>地址表 <code>address</code>: 包含客户、员工和商店的地址信息</li><li>类别表 <code>category</code>: 影片的类别</li><li>城市表 <code>city</code>: 城市列表</li><li>国家表 <code>country</code>: 国家/地区列表</li><li>客户表 <code>customer</code>: 客户信息</li><li>影片演员关系表 <code>film_actor</code>: 影片和演员的多对多对应关系</li><li>影片类别关系表 <code>film_category</code>: 影片和类别的多对多对应关系</li><li>影片描述表 <code>film_text</code>: 影片的标题、描述信息</li><li>影片表 <code>film</code>: 所有影片</li><li>库存表 <code>inventory</code>: 影片拷贝的库存信息</li><li>语言表 <code>language</code>: 影片的语言信息</li><li>支付表 <code>payment</code>: 记录了客户的每笔付款</li><li>租赁表 <code>rental</code>: 包含每个库存物品的每次租赁明细</li><li>员工表 <code>staff</code>: 列出了所有员工的信息</li><li>商店表 <code>store</code>: 列出了系统中的所有商店</li></ul><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>在本文中，我们分别通过 psql 工具和 pgAdmin 4 工具将 sakila 示例数据库加载到了 PostgreSQL 服务器中。</p>',26),t=[e];function c(r,C,y,F,A,D){return a(),l("div",null,t)}const d=s(n,[["render",c]]);export{B as __pageData,d as default};
