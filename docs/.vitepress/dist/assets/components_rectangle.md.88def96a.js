import{_ as t,o as e,c as a,a as n}from"./app.18ac86f1.js";const _=JSON.parse('{"title":"aya.Component(\\"rectangle\\", {x: , y: , width: , height: })","description":"","frontmatter":{},"headers":[{"level":2,"title":"aya.Component(\\"rectangle\\", {x: , y: , width: , height: })","slug":"aya-component-rectangle-x-y-width-height"}],"relativePath":"components/rectangle.md"}'),s={name:"components/rectangle.md"},o=n(`<h2 id="aya-component-rectangle-x-y-width-height" tabindex="-1">aya.Component(&quot;rectangle&quot;, {x: , y: , width: , height: }) <a class="header-anchor" href="#aya-component-rectangle-x-y-width-height" aria-hidden="true">#</a></h2><body><b>Specifications : </b> aya.Component is a method that takes two parameters as arguments: the type of component and the corresponding properties as object. <table class="table_1"><thead><tr class="thead-row"><th class="empty-space"></th><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td class="type_style">String</td><td>rectangle</td><td>component&#39;s type</td></tr><tr><td rowspan="4" class="type_style">Object</td><td>x</td><td>The abscissa of the beginning of the drawing of the shape, x pixels away from the upper left corner of the browser along the horizontal </td></tr><tr><td>y</td><td>The ordinate of the beginning of the drawing of the shape, distant by y pixel from the upper left corner of the browser along the vertical </td></tr><tr><td>width</td><td>The width of the rectangular shape</td></tr><tr><td>height</td><td>The height of the rectangular shape</td></tr></tbody></table></body><p>Here is an example of how you can create a rectangle component. <p>This kind of creation, draw immediately the corresponding form into the svg document unlike for calling the Rectangle method of Init class.</p></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var rect = aya.Component(&quot;rectangle&quot;, </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">x: </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y: </span><span style="color:#F78C6C;">150</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> width: </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> height: </span><span style="color:#F78C6C;">120</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,4),r=[o];function p(l,c,h,i,d,y){return e(),a("div",null,r)}var m=t(s,[["render",p]]);export{_ as __pageData,m as default};