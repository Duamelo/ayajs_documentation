import{_ as e,o as t,c as s,a}from"./app.0db8dcb2.js";const m=JSON.parse('{"title":"aya.Component(\\"line\\", {x: , y: destx: , desty: })","description":"","frontmatter":{},"headers":[{"level":2,"title":"aya.Component(\\"line\\", {x: , y: destx: , desty: })","slug":"aya-component-line-x-y-dest-x-dest-y"}],"relativePath":"components/line.md","lastUpdated":1674742062000}'),n={name:"components/line.md"},o=a(`<h2 id="aya-component-line-x-y-dest-x-dest-y" tabindex="-1">aya.Component(&quot;line&quot;, {x: , y: dest_x: , dest_y: }) <a class="header-anchor" href="#aya-component-line-x-y-dest-x-dest-y" aria-hidden="true">#</a></h2><body><b>Specifications : </b> aya.Component is a method that takes two parameters as arguments: the type of component and the corresponding properties as object. <table class="table_1"><thead><tr class="thead-row"><th class="empty-space"></th><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td class="type_style">String</td><td>line</td><td>component&#39;s name</td></tr><tr><td rowspan="6" class="type_style">Object</td><td>x</td><td>The abscissa of the beginning of the line, x pixels away from the upper left corner of the browser along the horizontal </td></tr><tr><td>y</td><td>The ordinate of the beginning of the line, distant by y pixel from the upper left corner of the browser along the vertical.</td></tr><tr><td>dest_x</td><td>The abscissa of the end of the line, dest_x pixels away from the upper left corner of the browser along the horizontal </td></tr><tr><td>dest_y</td><td>The abscissa of the end of the line, dest_y pixels away from the upper left corner of the browser along the horizontal </td></tr></tbody></table></body><p>Here is an example of how you can create a line component. <p>This kind of creation, draw immediately the corresponding form into the svg document unlike for calling the Line method of Init class.</p></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var line = aya.Component(&quot;line&quot;, </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">x: </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y: </span><span style="color:#F78C6C;">150</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> dest_x: </span><span style="color:#F78C6C;">150</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> dest_y: </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,4),l=[o];function p(r,c,d,i,y,h){return t(),s("div",null,l)}var f=e(n,[["render",p]]);export{m as __pageData,f as default};