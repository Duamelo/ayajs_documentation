import{_ as t,o as e,c as a,a as s}from"./app.18ac86f1.js";const g=JSON.parse('{"title":"aya.Image(x, y, width, height, path)","description":"","frontmatter":{},"headers":[{"level":2,"title":"aya.Image(x, y, width, height, path)","slug":"aya-image-x-y-width-height-path"}],"relativePath":"entities/image.md"}'),r={name:"entities/image.md"},n=s(`<h2 id="aya-image-x-y-width-height-path" tabindex="-1">aya.Image(x, y, width, height, path) <a class="header-anchor" href="#aya-image-x-y-width-height-path" aria-hidden="true">#</a></h2><body><b>Specifications : </b> aya.Image is a method that takes six (05) parameters as arguments like shown in this table: <table class="table_1"><thead><tr class="thead-row"><th class="empty-space"></th><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td class="type_style">number</td><td>x</td><td>The abscissa of the upper left corner of the image, x pixels away from the upper left corner of the browser along the horizontal</td></tr><tr><td class="type_style">number</td><td>y</td><td>The ordinate of the upper left corner of the image, y pixels away from the upper left corner of the browser along the horizontal</td></tr><tr><td class="type_style">number</td><td>width</td><td>The width of the image</td></tr><tr><td class="type_style">number</td><td>height</td><td>The height of the image</td></tr><tr><td class="type_style">string</td><td>path</td><td>The path to retrieve the image from the file system</td></tr></tbody></table></body><p>Here is an example of how you can create a image form.</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var img = aya.Image(230, 245, 30,30, &quot;icons/decorator.png&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    img.draw();</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,4),o=[n];function i(h,p,l,d,c,y){return e(),a("div",null,o)}var _=t(r,[["render",i]]);export{g as __pageData,_ as default};
