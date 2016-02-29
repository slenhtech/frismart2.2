/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Category-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'cat-immobilier': '&#xe921;',
		'cat-education': '&#xe922;',
		'cat-autres': '&#xe923;',
		'cat-silhouette': '&#xe924;',
		'cat-eglise': '&#xe900;',
		'cat-banque': '&#xe901;',
		'cat-cinema': '&#xe902;',
		'cat-commerce': '&#xe903;',
		'cat-casino-2': '&#xe904;',
		'cat-it-business': '&#xe905;',
		'cat-bar': '&#xe906;',
		'cat-fast-food': '&#xe907;',
		'cat-cloth-shop': '&#xe908;',
		'cat-restaurant': '&#xe909;',
		'cat-salon-de-the': '&#xe90a;',
		'cat-pizzeria': '&#xe90b;',
		'cat-patisserie': '&#xe90c;',
		'cat-station-service': '&#xe90d;',
		'cat-sport': '&#xe90e;',
		'cat-clinique': '&#xe90f;',
		'cat-hopital': '&#xe910;',
		'cat-beaute-bien-etre': '&#xe911;',
		'cat-administration': '&#xe912;',
		'cat-casino': '&#xe913;',
		'cat-opticien': '&#xe914;',
		'cat-hotel': '&#xe915;',
		'cat-person': '&#xe916;',
		'cat-salon-de-coiffure': '&#xe917;',
		'cat-aeroport': '&#xe918;',
		'cat-parc': '&#xe919;',
		'cat-shop': '&#xe91a;',
		'cat-radio': '&#xe91b;',
		'cat-divertissement': '&#xe91c;',
		'cat-cinema-2': '&#xe91d;',
		'cat-transport': '&#xe91e;',
		'cat-car-service': '&#xe91f;',
		'cat-voyage': '&#xe920;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/cat-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
