import{_ as a,o as t,c as e,R as s}from"./chunks/framework.318fa179.js";const f=JSON.parse('{"title":"影片演员关系表 film_actor","description":"","frontmatter":{},"headers":[],"relativePath":"database/sakila/影片演员关系表.md","filePath":"database/sakila/影片演员关系表.md","lastUpdated":1690270507000}'),l={name:"database/sakila/影片演员关系表.md"},o=s(`<h1 id="影片演员关系表-film-actor" tabindex="-1">影片演员关系表 film_actor <a class="header-anchor" href="#影片演员关系表-film-actor" aria-label="Permalink to &quot;影片演员关系表 film\\_actor&quot;">​</a></h1><p>本文介绍了 Sakila 数据库中的 film_actor 表的表结构以及与其他表的关系。</p><p><code>film_actor</code> 表用于支持影片和演员之间的多对多关系。对于每个影片中的每个演员， <code>film_actor</code> 表中都对于应了一行数据。</p><p><code>film_actor</code> 表使用外键引用 <a href="./影片表.html"><code>film</code></a> 和 <a href="./演员表.html"><code>actor</code></a>表。</p><h2 id="表结构" tabindex="-1">表结构 <a class="header-anchor" href="#表结构" aria-label="Permalink to &quot;表结构&quot;">​</a></h2><p><code>film_actor</code> 表结构如下：</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">+-------------+-------------------+------+-----+-------------------+-----------------------------------------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| Field       | Type              | Null | Key | Default           | Extra                                         |</span></span>
<span class="line"><span style="color:#A6ACCD;">+-------------+-------------------+------+-----+-------------------+-----------------------------------------------+</span></span>
<span class="line"><span style="color:#A6ACCD;">| actor_id    | smallint unsigned | NO   | PRI | NULL              |                                               |</span></span>
<span class="line"><span style="color:#A6ACCD;">| film_id     | smallint unsigned | NO   | PRI | NULL              |                                               |</span></span>
<span class="line"><span style="color:#A6ACCD;">| last_update | timestamp         | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |</span></span>
<span class="line"><span style="color:#A6ACCD;">+-------------+-------------------+------+-----+-------------------+-----------------------------------------------+</span></span></code></pre></div><h2 id="字段说明" tabindex="-1">字段说明： <a class="header-anchor" href="#字段说明" aria-label="Permalink to &quot;字段说明：&quot;">​</a></h2><table><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td><code>actor_id</code></td><td>标识演员的外键。</td></tr><tr><td><code>film_id</code></td><td>标识影片的外键。</td></tr><tr><td><code>last_update</code></td><td>该行的创建时间或最近更新时间。</td></tr></tbody></table>`,9),n=[o];function c(d,r,i,p,_,h){return t(),e("div",null,n)}const u=a(l,[["render",c]]);export{f as __pageData,u as default};
