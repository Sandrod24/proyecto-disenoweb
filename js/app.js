// js/app.js

// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
	root: '#app',
	id: 'com.app',
	theme: 'md',
	view: {
		pushState: true,
		// url inicial si no especificas vista por separado:
		url: '/'
	},
	cache: false,
	cacheDuration: 0,
	panel: { swipe: true },
	routes: [
		{
			path: '/',
			url: 'index.html',
			name: 'home',
		},
		{
			path: '/registro/',
			url: 'registro.html',
			name: 'registro',
		},
		{
			path: '/productos/',
			url: './productos.html',
			name: 'productos',
		},
		{
			path: '/productos-2/',
			url: './productos-2.html',
			name: 'productos-2',
		},
		{
			path: '/about/',
			url: 'about.html',
			name: 'about',
		},
		{
			path: '/info-prod/',
			url: 'info-prod.html',
			name: 'info-prod',
		},

	],
	dialog: {
		title: 'Diseño Web App',
		buttonOk: 'Aceptar',
	},
	popup: { closeOnEscape: true, backdrop: false },
	sheet: { closeOnEscape: true },
	popover: { closeOnEscape: true },
	actions: { closeOnEscape: true }
});

// Crea la vista principal y carga la ruta '/'
var mainView = app.views.create('.view-main', {
	url: '/'
});

// Ejemplos de event handlers...
$$('#btnLogin').on('click', function (e) { /* ... */ });
$$(document).on('click', '#btnCheckout', function (e) { /* ... */ });




// Dom7
var $$ = Dom7;

// Sumar/restar cantidades
$$(document).on('click', '.btn-plus, .btn-minus', function () {
	var row = $$(this).closest('.qty-row');
	var input = row.find('.qty-input');
	var val = parseInt(input.val(), 10);
	if (isNaN(val)) val = 0;

	if ($$(this).hasClass('btn-plus')) {
		val += 1;
	} else {
		val = Math.max(0, val - 1);
	}
	input.val(val);

	actualizarBotonOrden();
});

// (Opcional) si el usuario escribe a mano, normalizamos
$$(document).on('change keyup', '.qty-input', function () {
	var v = parseInt($$(this).val(), 10);
	if (isNaN(v) || v < 0) v = 0;
	$$(this).val(v);
	actualizarBotonOrden();
});

// Habilita "Ver orden" si hay alguna cantidad > 0
function actualizarBotonOrden() {
	var total = 0;
	$$('.qty-input').each(function (el) {
		var v = parseInt($$(el).val(), 10);
		if (!isNaN(v)) total += v;
	});
	var btn = $$('.btn-orden');
	if (total > 0) {
		btn.removeAttr('disabled');
	} else {
		btn.attr('disabled', true);
	}
}
