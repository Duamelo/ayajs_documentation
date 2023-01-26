import{_ as t,o as e,c as a,a as s}from"./app.18ac86f1.js";const _=JSON.parse('{"title":"aya.Text(x,y,text,size)","description":"","frontmatter":{},"headers":[{"level":2,"title":"aya.Text(x,y,text,size)","slug":"aya-text-x-y-text-size"}],"relativePath":"entities/text.md"}'),n={name:"entities/text.md"},o=s(`<h2 id="aya-text-x-y-text-size" tabindex="-1">aya.Text(x,y,text,size) <a class="header-anchor" href="#aya-text-x-y-text-size" aria-hidden="true">#</a></h2><body><b>Specifications : </b> aya.Text is a method that takes four (04) parameters as arguments like shown in this table : <table class="table_1"><thead><tr class="thead-row"><th class="empty-space"></th><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td class="type_style">number</td><td>x</td><td> The abscissa of the first character of the text, x pixels from the upper left corner of the browser along the horizontal line. </td></tr><tr><td class="type_style">number</td><td>y</td><td> The ordinate of the first character of the text,, distant by y pixel from the upper left corner of the browser along the vertical </td></tr><tr><td class="type_style">number</td><td>text</td><td>The text to be displayed</td></tr><tr><td class="type_style">number</td><td>size</td><td>The size of the text to be displayed</td></tr></tbody></table></body><p>Here is an example of how you can create a text form. <p>This kind of creation, doesn&#39;t draw immediately the corresponding form into the svg document unlike for calling the Component method of Init class.</p></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   var text = aya.Text(100, 150, &quot;hello world&quot;, 200);</span></span>
<span class="line"><span style="color:#A6ACCD;">   text.draw();</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,4),r=[o];function l(i,d,p,c,h,y){return e(),a("div",null,r)}var f=t(n,[["render",l]]);export{_ as __pageData,f as default};
