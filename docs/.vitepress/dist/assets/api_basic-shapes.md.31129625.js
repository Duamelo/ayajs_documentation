import{_ as e,o as t,c as a,a as l}from"./app.0db8dcb2.js";const g=JSON.parse('{"title":"addEvent(event, callback)","description":"","frontmatter":{},"headers":[{"level":2,"title":"addEvent(event, callback)","slug":"addevent-event-callback"},{"level":2,"title":"deleteEvent(event)","slug":"deleteevent-event"},{"level":2,"title":"addChild(child, translate = null, rotate = null, drawing = true)","slug":"addchild-child-translate-null-rotate-null-drawing-true"},{"level":2,"title":"draw()","slug":"draw"},{"level":2,"title":"redraw()","slug":"redraw"},{"level":2,"title":"removeFromDOM()","slug":"removefromdom"},{"level":2,"title":"drawVertex()","slug":"drawvertex"},{"level":2,"title":"drawConnector()","slug":"drawconnector"},{"level":2,"title":"setRotateCenter(centerX, centerY)","slug":"setrotatecenter-centerx-centery"},{"level":2,"title":"setRotateAngle(angle)","slug":"setrotateangle-angle"},{"level":2,"title":"setOffsetX(x)","slug":"setoffsetx-x"},{"level":2,"title":"setOffsetY(y)","slug":"setoffsety-y"},{"level":2,"title":"setScaleX(x)","slug":"setscalex-x"},{"level":2,"title":"setScaleY(y)","slug":"setscaley-y"},{"level":2,"title":"getOffsetX(x)","slug":"getoffsetx-x"},{"level":2,"title":"getOffsetY(y)","slug":"getoffsety-y"},{"level":2,"title":"getScaleX(x)","slug":"getscalex-x"},{"level":2,"title":"getScaleY(y)","slug":"getscaley-y"}],"relativePath":"api/basic-shapes.md","lastUpdated":1674742062000}'),i={name:"api/basic-shapes.md"},n=l('<p>In this part of api&#39;s specification, we&#39;re going to categorize according to the type of shape.</p><p>We consider Rectangle, Lozenge, Circle, Line, as basic shapes. Each of this shape has some vertex and connection points. Vertex are upper corners of the shape by which we can resize the shape. The connection points are the middle of the shape by which we can create a link with another one.</p><p>Below we have the main attributes inside the table and main functions listed that all the shape have.</p><table><thead><tr><th style="text-align:center;">Attributes&#39;s name</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">events</td><td style="text-align:center;">Dictionary object to record events and their respective callbacks associated with specific shape.</td></tr><tr><td style="text-align:center;">nativeEvent</td><td style="text-align:center;">Default events made available by aya</td></tr><tr><td style="text-align:center;">config</td><td style="text-align:center;">Allows you to access the basic configurations of aya.</td></tr><tr><td style="text-align:center;">c_svg</td><td style="text-align:center;">Represents the svg dom element created.</td></tr><tr><td style="text-align:center;">svg</td><td style="text-align:center;">SVG document in which the shape is drawn.</td></tr><tr><td style="text-align:center;">type</td><td style="text-align:center;">Type of the shape.</td></tr><tr><td style="text-align:center;">svg</td><td style="text-align:center;">svg document in which the shape is drawn</td></tr><tr><td style="text-align:center;">children</td><td style="text-align:center;">A table listing all children of the shape.</td></tr><tr><td style="text-align:center;">offsetX</td><td style="text-align:center;">The offsetX represents the x-offset to be applied to the rectangle. To position it at {this. x + this.offsetX} on the x-axis.</td></tr><tr><td style="text-align:center;">offsetY</td><td style="text-align:center;">The offsetY represents the y-offset to be applied to the rectangle. To position it at {this. y + this.offsetX} on the y-axis.</td></tr><tr><td style="text-align:center;">scaleX</td><td style="text-align:center;">The ScaleX represents the scale to be applied to the size of the shape on the x-axis.</td></tr><tr><td style="text-align:center;">scaleY</td><td style="text-align:center;">The ScaleX represents the scale to be applied to the size of the shape on the x-axis.</td></tr><tr><td style="text-align:center;">angle</td><td style="text-align:center;">This variable represents the value of the rotation angle to be applied to rotate the shape.</td></tr><tr><td style="text-align:center;">centerX</td><td style="text-align:center;">The abscissa of the center of rotation is defined by defining centerX.</td></tr><tr><td style="text-align:center;">centerY</td><td style="text-align:center;">The ordinate of the center of rotation is defined by defining centerY.</td></tr><tr><td style="text-align:center;">c_points</td><td style="text-align:center;">The variable c_points represents all the connection points of the form. These are the points from which one can establish a link with other forms having also these connection points.</td></tr><tr><td style="text-align:center;">vertex</td><td style="text-align:center;">The vertex variable represents the set of points from which we can resize the shape.</td></tr></tbody></table><h2 id="addevent-event-callback" tabindex="-1">addEvent(event, callback) <a class="header-anchor" href="#addevent-event-callback" aria-hidden="true">#</a></h2><ul><li>This method allows us to add an event to the shape.</li><li>We record the event and the associated callback for easy removal after.</li><li>@param { String } event - the event</li><li>@param { Function } callback - {} This callback is either defined by the user when</li><li>adding other custom events, or a callback already defined in event.js.</li></ul><h2 id="deleteevent-event" tabindex="-1">deleteEvent(event) <a class="header-anchor" href="#deleteevent-event" aria-hidden="true">#</a></h2><ul><li>This method allows us to delete a specific event passed as a string parameter.</li><li>@param { String } event - The event.</li></ul><h2 id="addchild-child-translate-null-rotate-null-drawing-true" tabindex="-1">addChild(child, translate = null, rotate = null, drawing = true) <a class="header-anchor" href="#addchild-child-translate-null-rotate-null-drawing-true" aria-hidden="true">#</a></h2><ul><li>We can build any shape by adding to a basic component a children shape.</li><li>@param { (Rectangle | Lozenge | Triangle | Circle | Line | Text) } child - This shape ( @extend Shape) is added as a child to a component.</li><li>@param { Function } translate - { parent, child } This function allows us to position the child relative to its parent.</li><li>@param {Function } rotate - { parent, child } This function allows us to apply a rotation of the child taking into account its relative position and the center of rotation.</li></ul><h2 id="draw" tabindex="-1">draw() <a class="header-anchor" href="#draw" aria-hidden="true">#</a></h2><ul><li>Draw the shape into the svg document.</li></ul><h2 id="redraw" tabindex="-1">redraw() <a class="header-anchor" href="#redraw" aria-hidden="true">#</a></h2><ul><li>Redraw the shape into the svg document.</li></ul><h2 id="removefromdom" tabindex="-1">removeFromDOM() <a class="header-anchor" href="#removefromdom" aria-hidden="true">#</a></h2><ul><li>Remove the shape from the DOM.</li></ul><h2 id="drawvertex" tabindex="-1">drawVertex() <a class="header-anchor" href="#drawvertex" aria-hidden="true">#</a></h2><ul><li>The drawVertex function simply calculates the position of each vertex according to the specificity of the shape.</li></ul><h2 id="drawconnector" tabindex="-1">drawConnector() <a class="header-anchor" href="#drawconnector" aria-hidden="true">#</a></h2><ul><li>The drawConnector function simply calculates the position of each connection point according to the specificity of the shape.</li></ul><h2 id="setrotatecenter-centerx-centery" tabindex="-1">setRotateCenter(centerX, centerY) <a class="header-anchor" href="#setrotatecenter-centerx-centery" aria-hidden="true">#</a></h2><ul><li>Define the center of the rotation.</li></ul><h2 id="setrotateangle-angle" tabindex="-1">setRotateAngle(angle) <a class="header-anchor" href="#setrotateangle-angle" aria-hidden="true">#</a></h2><ul><li>Define the angle of the rotation</li></ul><h2 id="setoffsetx-x" tabindex="-1">setOffsetX(x) <a class="header-anchor" href="#setoffsetx-x" aria-hidden="true">#</a></h2><ul><li>Define the offsetX of the specific shape</li></ul><h2 id="setoffsety-y" tabindex="-1">setOffsetY(y) <a class="header-anchor" href="#setoffsety-y" aria-hidden="true">#</a></h2><ul><li>Define the offsetY of the specific shape</li></ul><h2 id="setscalex-x" tabindex="-1">setScaleX(x) <a class="header-anchor" href="#setscalex-x" aria-hidden="true">#</a></h2><ul><li>Define the scaleX of the specific shape</li></ul><h2 id="setscaley-y" tabindex="-1">setScaleY(y) <a class="header-anchor" href="#setscaley-y" aria-hidden="true">#</a></h2><ul><li>return the scaleY of the specific shape</li></ul><h2 id="getoffsetx-x" tabindex="-1">getOffsetX(x) <a class="header-anchor" href="#getoffsetx-x" aria-hidden="true">#</a></h2><ul><li>return the offsetX of the specific shape</li></ul><h2 id="getoffsety-y" tabindex="-1">getOffsetY(y) <a class="header-anchor" href="#getoffsety-y" aria-hidden="true">#</a></h2><ul><li>return the offsetY of the specific shape</li></ul><h2 id="getscalex-x" tabindex="-1">getScaleX(x) <a class="header-anchor" href="#getscalex-x" aria-hidden="true">#</a></h2><ul><li>return the scaleX of the specific shape</li></ul><h2 id="getscaley-y" tabindex="-1">getScaleY(y) <a class="header-anchor" href="#getscaley-y" aria-hidden="true">#</a></h2><ul><li>return the scaleY of the specific shape</li></ul>',40),r=[n];function s(h,d,c,o,f,p){return t(),a("div",null,r)}var x=e(i,[["render",s]]);export{g as __pageData,x as default};