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
		'cat-banque': '&#xe900;',
		'cat-the': '&#xe901;',
		'cat-shopping': '&#xe902;',
		'cat-pharmacie-1': '&#xe903;',
		'cat-pharmacie-2': '&#xe904;',
		'cat-bar-2': '&#xe905;',
		'cat-restaurant': '&#xe906;',
		'cat-food-1': '&#xe907;',
		'cat-the-2': '&#xe908;',
		'cat-sport-1': '&#xe909;',
		'cat-hotel': '&#xe90a;',
		'cat-sign': '&#xe90b;',
		'cat-atm': '&#xe90c;',
		'cat-shopping-2': '&#xe90d;',
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
