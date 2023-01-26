import{_ as t,o as e,c as a,a as o}from"./app.18ac86f1.js";const f=JSON.parse('{"title":"aya.Component(\\"arc\\", {x0: , y0: , x: , y: , angle: , ratio: })","description":"","frontmatter":{},"headers":[{"level":2,"title":"aya.Component(\\"arc\\", {x0: , y0: , x: , y: , angle: , ratio: })","slug":"aya-component-arc-x0-y0-x-y-angle-ratio"}],"relativePath":"components/arc.md"}'),s={name:"components/arc.md"},n=o(`<h2 id="aya-component-arc-x0-y0-x-y-angle-ratio" tabindex="-1">aya.Component(&quot;arc&quot;, {x0: , y0: , x: , y: , angle: , ratio: }) <a class="header-anchor" href="#aya-component-arc-x0-y0-x-y-angle-ratio" aria-hidden="true">#</a></h2><body><b>Specifications : </b> aya.Component is a method that takes two parameters as arguments: the type of component and the corresponding properties as object. <table class="table_1"><thead><tr class="thead-row"><th class="empty-space"></th><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td class="type_style">String</td><td>arc</td><td>component&#39;s type</td></tr><tr><td rowspan="6" class="type_style">Object</td><td>x0</td><td>The abscissa of the left extremity of the radius segment, x0 pixels away from the upper left corner of the browser along the horizontal </td></tr><tr><td>y0</td><td>The ordinate of the left extremity of the radius segment, distant by y0 pixel from the upper left corner of the browser along the vertical </td></tr><tr><td>x</td><td>The abscissa of the right extremity of the radius segment, x pixels away from the upper left corner of the browser along the horizontal </td></tr><tr><td>y</td><td>The ordinate of the left extremity of the radius segment, distant by y pixel from the upper left corner of the browser along the vertical </td></tr><tr><td>angle</td><td>The angle that the arc forms with the horizontal</td></tr><tr><td>ratio</td><td>Determines the degree of opening of the pie</td></tr></tbody></table></body><p>Here is an example of how you can create a arc component. <p>This kind of creation, draw immediately the corresponding form into the svg document unlike for calling the Arc method of Init class.</p> In this example, 0 as ratio mean that we&#39;ll have a portion of pie chart like form.</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   var arc = aya.Component(&quot;arc&quot;, </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">x: </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y: </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> x0: </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y0: </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> angle: </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ratio: </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,4),r=[n];function l(p,c,i,d,y,h){return e(),a("div",null,r)}var _=t(s,[["render",l]]);export{f as __pageData,_ as default};
