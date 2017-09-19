# aModal
> Super lightweight and dependency free Modal built in ES6

[Demo on CodePen](https://codepen.io/Alecaddd/pen/XgdKjB)

## Installation

* Using NPM:
  ```sh
  npm install amodal --save
  ```

* Using Bower:
  ```sh
  bower install amodal --save
  ```

## Include it in your project.

* The script is already compiled via Gulp, browserify and babelify. Use it with Webpack, Browserify, RequireJS or by simply including a `<script>` tag.

* ES 2015
  ```javascript
  import 'amodal';
  ```

* CommonJS:
	```javascript
	require('amodal');
	```

* AMD
	```javascript
	require(['/node_modules/amodal/dist/index.js']);
	```

* Browser
	```html
	<script src="/node_modules/amodal/dist/index.js"></script>
	```

Be sure to include or import the default style

* SCSS
  ```scss
  @import '/node_modules/amodal/dist/modal.css';
  ```

* Browser
	```html
	<link rel="stylesheet" href="/node_modules/amodal/dist/modal.css">
	```

## Create the Modal HTML

```html
<div id="modal-1" class="modal">
	<div class="modal-inner">
		<a class="js-close-modal">&times;</a>
		<div class="modal-content">	  
			<h3>Modal Title</h3>
			<p>This is my modal content</p>			
		</div><!-- .modal-content -->
	</div><!-- .modal-inner -->
</div><!-- .modal -->
```

* Backdrop Support
By default, the Modal will automatically close if a click is registered on the backdrop dark overlay area underneath an open modal. You can control this behaviour by setting a boolean data attribute to your modal container.

```html
	<div id="modal-1" class="modal" data-backdrop="false">
```

## Trigger the Modal

```html
<a class="js-modal" data-modal="modal-1">Trigger Modal</amodal>
```

The script is initialized by default and detects every instance of the class `js-modal`.
You can hook your trigger to the modal via the data attribute `data-modal` by specifying the modal ID.

## Compatibility

This script works in all mobile & desktop browsers, as well as IE 11, 10 (not 9, sorry).

## License

[MIT](https://github.com/Alecaddd/aModal/blob/master/LICENSE.txt)