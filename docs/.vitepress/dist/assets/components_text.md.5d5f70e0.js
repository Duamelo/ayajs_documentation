import{_ as t,o as e,c as s,a}from"./app.0db8dcb2.js";const _=JSON.parse('{"title":"aya.Component(\\"text\\", {x: , y: , text: \\" \\", size: })","description":"","frontmatter":{},"headers":[{"level":2,"title":"aya.Component(\\"text\\", {x: , y: , text: \\" \\", size: })","slug":"aya-component-text-x-y-text-size"}],"relativePath":"components/text.md","lastUpdated":1674742062000}'),o={name:"components/text.md"},n=a(`<h2 id="aya-component-text-x-y-text-size" tabindex="-1">aya.Component(&quot;text&quot;, {x: , y: , text: &quot; &quot;, size: }) <a class="header-anchor" href="#aya-component-text-x-y-text-size" aria-hidden="true">#</a></h2><body><b>Specifications : </b> aya.Component is a method that takes two parameters as arguments: the type of component and the corresponding properties as object. <table class="table_1"><thead><tr class="thead-row"><th class="empty-space"></th><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td class="type_style">String</td><td>text</td><td>component&#39;s type</td></tr><tr><td rowspan="4" class="type_style">Object</td><td>x</td><td> The abscissa of the first character of the text, x pixels from the upper left corner of the browser along the horizontal line. </td></tr><tr><td>y</td><td> The ordinate of the first character of the text, distant by y pixel from the upper left corner of the browser along the vertical </td></tr><tr><td>text</td><td>The text to be displayed</td></tr><tr><td>size</td><td>The size of the text to be displayed</td></tr></tbody></table></body><p>Here is an example of how you can create a text component. <p>This kind of creation, draw immediately the corresponding form into the svg document unlike for calling the Text method of Init class.</p></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   var text = aya.Component(&quot;text&quot;, </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">x: </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y: </span><span style="color:#F78C6C;">150</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> text: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> size: </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,4),p=[n];function r(l,c,d,i,y,h){return e(),s("div",null,p)}var m=t(o,[["render",r]]);export{_ as __pageData,m as default};
