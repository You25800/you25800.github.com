import{_ as s,o as a,c as n,R as l}from"./chunks/framework.318fa179.js";const p="/assets/image-20220928113820986.3cdcc64e.png",o="/assets/image-20220928114913211.796de9a6.png",e="/assets/image-20220928140334561.7513292a.png",t="/assets/image-20220928142541197.589f1485.png",q=JSON.parse('{"title":"基础功能","description":"","frontmatter":{},"headers":[],"relativePath":"database/elasticsearch/基础功能.md","filePath":"database/elasticsearch/基础功能.md","lastUpdated":1688630446000}'),c={name:"database/elasticsearch/基础功能.md"},r=l(`<h1 id="基础功能" tabindex="-1">基础功能 <a class="header-anchor" href="#基础功能" aria-label="Permalink to &quot;基础功能&quot;">​</a></h1><p>Elasticsearch 是一个分布式、RESTful 风格的搜索和数据分析引擎。</p><p>可以直接用http请求去操作数据。例如：</p><div class="language-apl"><button title="Copy Code" class="copy"></button><span class="lang">apl</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">http</span><span style="color:#89DDFF;">://</span><span style="color:#A6ACCD;">localhost:</span><span style="color:#F78C6C;">9200</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">索引名称 </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;"> 创建索引请求方式 PUT </span></span>
<span class="line"><span style="color:#A6ACCD;">如下图：es_db为索引名称</span></span></code></pre></div><img src="`+p+'" alt="image-20220928113820986"><p>Kibana是 Elasticsearch 的开源分析可视化工具，与存储在 Elasticsearch 中的数据进行交互。后续操作都使用kibana的开发工具</p><img src="'+o+'" alt="image-20220928114913211"><h2 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h2><h3 id="索引-index" tabindex="-1">索引（index） <a class="header-anchor" href="#索引-index" aria-label="Permalink to &quot;索引（index）&quot;">​</a></h3><p>一个索引就是一个拥有几分相似特征的文档的集合。比如说，可以有一个客户数据的索引，一个产品目录的索引，一个订单数据的索引。</p><p>一个索引由一个名字来标识（必须全部是小写字母的），并且当我们要对这个索引中的文档进行索引、搜索、更新和删除的时候，都要使用到这个名字。</p><h3 id="文档-document" tabindex="-1">文档（Document） <a class="header-anchor" href="#文档-document" aria-label="Permalink to &quot;文档（Document）&quot;">​</a></h3><ul><li>Elasticsearch是面向文档的，文档是所有可搜索数据的最小单位 <ul><li>日志文件中的日志项</li><li>一本电影的具体信息/一张唱片的详细信息</li><li>一个产品的具体描述</li></ul></li><li>文档会被序列化成JSON格式，保存在Elasticsearch中 <ul><li>JSON对象由字段组成</li><li>每个字段都有对应的字段类型（字符串/数值/布尔/日期/二进制/范围类型）</li></ul></li><li>每个文档都有一个Unique ID <ul><li>可以自己指定ID或者通过ES自动生成</li></ul></li><li>一个文档包含了一系列字段，类似数据库中的一条记录</li><li>JSON文档，格式灵活，不需要预先定义格式 <ul><li>字段类型可以指定或者通过ES自动推算</li><li>支持数组/支持嵌套</li></ul></li></ul><h4 id="文档元数据" tabindex="-1">文档元数据 <a class="header-anchor" href="#文档元数据" aria-label="Permalink to &quot;文档元数据&quot;">​</a></h4><img src="'+e+`" alt="image-20220928140334561"><p>元数据，用于标注文档的相关信息：</p><ul><li>_index：文档所属的索引名</li><li>_type：文档所属的类型名</li><li>_id：文档唯一id</li><li>_source：文档的原始json数据</li><li>_version：文档的版本号，修改删除操作<code>_version</code>都会自增1</li><li>_seq_no：和verison一样，一旦数据发生更改，数据也一直是累计的。Shard级别严格递增，保证后写入的Doc的<code>_seq_no</code>大于现写入的doc的seq_no</li><li>_primary_term：主要是用来恢复数据时处理当多个文档的<code>_seq_no</code>相同时的冲突，避免Primary Shard上的写入被覆盖。每当Primary Shard发生重新分配时，比如重启，Primary选举等， <code>_primary_term</code>会递增1.</li></ul><h4 id="并发场景下修改文档" tabindex="-1">并发场景下修改文档 <a class="header-anchor" href="#并发场景下修改文档" aria-label="Permalink to &quot;并发场景下修改文档&quot;">​</a></h4><p><code>_seq_no</code>和<code>_primary_term</code>是对version的优化，7.x版本的ES默认使用这种方式控制版本，所以当在高并发环境下使用乐观锁机制修改文档时，要带上当前文档的<code>_seq_no</code>和<code>_primary_term</code>进行更新：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">POST</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db/_doc/1001?if_seq_no=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">if_primary_term</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#FFCB6B;">&quot;name&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">李四</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>如果版本号不对，会抛出版本冲突异常，如下图:</p><img src="`+t+`" alt="image-20220928142541197"><h2 id="索引操作" tabindex="-1">索引操作 <a class="header-anchor" href="#索引操作" aria-label="Permalink to &quot;索引操作&quot;">​</a></h2><h3 id="创建索引" tabindex="-1">创建索引 <a class="header-anchor" href="#创建索引" aria-label="Permalink to &quot;创建索引&quot;">​</a></h3><p>索引名字必须小写，不能以<code>下划线</code>开头</p><p>格式：PUT /索引名称</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 创建索引</span></span>
<span class="line"><span style="color:#FFCB6B;">PUT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建索引时可以设置分片数和福本数</span></span>
<span class="line"><span style="color:#FFCB6B;">PUT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;settings&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">&quot;number_of_shards&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">&quot;number_of_replicas&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 修改索引配置</span></span>
<span class="line"><span style="color:#FFCB6B;">PUT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db/_settings</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;index&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">&quot;number_of_replicas&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="查询索引" tabindex="-1">查询索引 <a class="header-anchor" href="#查询索引" aria-label="Permalink to &quot;查询索引&quot;">​</a></h3><p>格式：GET/索引名称</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查询索引</span></span>
<span class="line"><span style="color:#FFCB6B;">GET</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 判断es_db是否存在</span></span>
<span class="line"><span style="color:#FFCB6B;">HEAD</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db</span></span></code></pre></div><h3 id="删除索引" tabindex="-1">删除索引 <a class="header-anchor" href="#删除索引" aria-label="Permalink to &quot;删除索引&quot;">​</a></h3><p>格式: DELETE/索引名称</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">DELETE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db</span></span></code></pre></div><h2 id="文档操作" tabindex="-1">文档操作 <a class="header-anchor" href="#文档操作" aria-label="Permalink to &quot;文档操作&quot;">​</a></h2><h3 id="添加文档" tabindex="-1">添加文档 <a class="header-anchor" href="#添加文档" aria-label="Permalink to &quot;添加文档&quot;">​</a></h3><p>格式：[PUT | POST] /索引名称/[_doc | _create ]/id</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 创建文档，指定id</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果id不存在，创建新的文档，否则先删除现有文档，再创建新的文档，版本会增加</span></span>
<span class="line"><span style="color:#FFCB6B;">PUT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db/_doc/1001</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#指定id为1001</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;name&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">张三</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;age&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;sex&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">男</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;address&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">山东省济南市</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 生成id</span></span>
<span class="line"><span style="color:#FFCB6B;">POST</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db/_doc</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;name&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">李四</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;age&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">22</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;sex&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">女</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;address&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">山东省滨州市</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>注意：</p><ul><li>POST和PUT都能起到创建/更新的作用 <ul><li>PUT需要对一个具体的资源进行操作也就是要确定id才能进行更新/创建</li><li>POST是可以针对整个资源集合进行操作的，如果不写id就生成id，如果写了id那就针对这个id的文档进行创建/更新</li></ul></li><li><code>_doc</code>和<code>_create</code> 都是创建文档的关键字 <ul><li>_doc创建文档时，可指定id，也可以不指定</li><li>_create创建文档时，必须指定id，若id已经存在了，会失败。</li></ul></li></ul><h3 id="修改文档" tabindex="-1">修改文档 <a class="header-anchor" href="#修改文档" aria-label="Permalink to &quot;修改文档&quot;">​</a></h3><p>全量更新，整个json都会替换，格式:[PUT|POST] /索引名称/_doc/id，如果文档存在，现有文档会被删除，新文档会被索引。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 全量更新，替换整个json</span></span>
<span class="line"><span style="color:#FFCB6B;">PUT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db/_doc/1001</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;name&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">张三</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;age&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;sex&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">男</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#全量更新前数据</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;name&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">张三</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;age&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;sex&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">男</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;address&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">山东省济南市</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 更新后数据</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;name&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">张三</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;age&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;sex&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">男</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>使用update部分更新，格式： POST /索引名称/_update/id，updata不会删除原来的文档，而是实现真正的数据更新。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 部分更新：在原有文档上更新</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Update -文档必须已经存在，更新只会对相应字段做增量修改</span></span>
<span class="line"><span style="color:#FFCB6B;">POST</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db/_update/1</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;doc&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">&quot;age&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 更新前数据</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;name&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">张三</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;age&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;sex&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">男</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 更新后数据</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;name&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">张三</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;age&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;sex&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">男</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>使用<code>_update_by_query</code>更新文档，格式：POST /索引名称/_update_by_query</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">POST</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db/_update_by_query</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;query&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">&quot;match&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#FFCB6B;">&quot;_id&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;script&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#FFCB6B;">&quot;source&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ctx._source.age = 30</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 更新后数据</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;name&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">张三</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;age&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#FFCB6B;">&quot;sex&quot;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">男</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="查询文档" tabindex="-1">查询文档 <a class="header-anchor" href="#查询文档" aria-label="Permalink to &quot;查询文档&quot;">​</a></h3><p>根据id查询文档，格式：GET /索引名称/_doc/id</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">GET</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db/_doc/1001</span></span></code></pre></div><p>条件查询search, 格式: GET /索引名称/_search</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查询前10条文档</span></span>
<span class="line"><span style="color:#FFCB6B;">GET</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db/_doc/_search</span></span></code></pre></div><p>ES 提供了两种条件查询搜索方式</p><ul><li>REST风格的请求URI，直接将参数带过去</li><li>封装到 body中，这种方式可以定义更加易读的json格式</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 通过URI搜索，使用“q”指定查询字符串，“query string syntax” KV健值对</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 条件查询，查询age等于18岁的，格式：_search?q=age:18</span></span>
<span class="line"><span style="color:#FFCB6B;">GET</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db/_doc/_search?q=age:18</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 范围查询，查询age在18至28之间的 格式_search?q=age[18 TO 28] 注意：TO必须大写</span></span>
<span class="line"><span style="color:#FFCB6B;">GET</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db/_doc/_search?q=age[</span><span style="color:#F78C6C;">18</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TO</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">28</span><span style="color:#C3E88D;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查询age 小于等于18的 格式 age:&lt;=18</span></span>
<span class="line"><span style="color:#FFCB6B;">GET</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db/_doc/_search?q=age:</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">=</span><span style="color:#F78C6C;">18</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查询年龄大雨18的 格式 age:&gt;18</span></span>
<span class="line"><span style="color:#FFCB6B;">GET</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db/_doc/_search?q=age</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">18</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 分页查询 from=0&amp;size=10</span></span>
<span class="line"><span style="color:#FFCB6B;">GET</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db/_doc/_search?age</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">18</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">from</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 对查询结果只输出某些字段 _source=字段,字段</span></span>
<span class="line"><span style="color:#FFCB6B;">GET</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db/_doc/_search?_source=name,age</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 对查询结果排序 sort=字段:desc/asc</span></span>
<span class="line"><span style="color:#FFCB6B;">GET</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db/_doc/_search?sort=age:desc</span></span></code></pre></div><h3 id="删除文档" tabindex="-1">删除文档 <a class="header-anchor" href="#删除文档" aria-label="Permalink to &quot;删除文档&quot;">​</a></h3><p>格式：DELETE /索引名称/_doc/id</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">DELETE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/es_db/_doc/1</span></span></code></pre></div>`,57),y=[r];function i(C,F,D,A,d,u){return a(),n("div",null,y)}const _=s(c,[["render",i]]);export{q as __pageData,_ as default};
