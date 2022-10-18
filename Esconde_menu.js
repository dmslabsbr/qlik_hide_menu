define( [ 'jquery', 'qlik'
	],
	function ($, qlik) {
		'use strict';
	
		return {
	
			paint: function ($element, layout) {
				//add your rendering code here
			
				console.log ('esconde menu: I');
			
				$element.empty();
				
				var site = window.location.pathname;
				
				var texto='';
			
				var edit_mode = window.location.pathname.includes('edit');
				var desativa = top.location.href.includes('d=1');
			
				if (edit_mode) {
					console.log ('edit mode');
					texto = "Esconde Menu <BR> Modo edição. <BR> Use d=1 na url para desativar.";
				} else if (desativa) {
					console.log ('desativado');
					texto = "Esconde Menu <BR> Desativado.";
				} else {
					console.log ('normal mode');
					$(".qs-toolbar").hide().delay(800);
				};
			
				var $novo_html = $( document.createElement( 'div' ) );
			
				$novo_html.html (texto);
			
				$element.append ($novo_html);
			
				console.log ('esconde menu: F');
				return qlik.Promise.resolve();
			}
		};

	} );

