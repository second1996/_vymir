<h1>VYMIR Design Studio</h1>
<p>Розробляємо дизайн інтер’єру житлових та громадських приміщень під ключ.</p>

<h2>How to use</h2>

<ol>
	<li>Clone repository</li>
	<li>Install Node Modules: <strong>npm i</strong></li>
	<li>Run: <strong>gulp</strong></li>
</ol>un: <strong>gulp</strong></li>
</ol>

<h2>Main Gulp tasks:</h2>

<ul>
	<li><strong title="gulp task"><em>gulp</em></strong>: run default gulp task ('img', 'styles', 'scripts', 'browser-sync', 'watch')</li>
	<li><strong title="cleanimg task"><em>cleanimg</em></strong>: Clean @*x responsive IMG's</li>
	<li><strong title="rsync task"><em>rsync</em></strong>: project deployment via <strong>RSYNC</strong></li>
</ul>

<h2>Basic rules</h2>

<ol>
	<li>All custom <strong title="scripts task"><em>scripts</em></strong> located in <strong>app/js/_custom.js</strong></li>
	<li>All custom <strong title="styles task"><em>styles</em></strong> located in <strong>app/sass/main.sass</strong></li>
	<li>All Sass <strong>vars</strong> placed in <strong>app/sass/_vars.sass</strong></li>
	<li>All <strong>fonts</strong> plug in <strong>app/sass/_fonts.sass</strong></li>
	<li>All CSS styles of <strong>libraries</strong> plug in <strong>app/sass/_libs.sass</strong></li>
	<li>All responsive <strong>images</strong> placed in <strong>app/img/_src/</strong> folder. All source images should initially have a 2x resolution. Result image folders after resize & compression: <strong>img/@1x/</strong> and <strong>img/@2x/</strong> accordingly.</li>
</ol>

<h2>Included features</h2>

<ol>
	<li><a href="https://getbootstrap.com/docs/4.0/content/reboot/">bootstrap-reboot.scss</a> - Bootstrap Reboot CSS collection</li>
	<li>
		<a href="https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints">_breakpoints.scss</a> - Bootstrap Breakpoints mixin</li>
	<li><a href="https://github.com/agragregra/OptimizedHTML-5/blob/master/app/js/_lazy.js">js/_lazy.js</a> - Lazy loading images using Intersection Observer</li>
</ol>

<h2>Caching</h2>

<p>Rename <strong>ht.access</strong> to <strong>.htaccess</strong> before place it in your web server. This file contain rules for htaccess resources caching.</p>
