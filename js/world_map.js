(function(){
	$(document).ready(function(){

		console.log("readooooooo")
	    // countries we see , singapore missing for now and I've adjusted Korea to South Korea
		let active_countries =  ['AU','AT','BE','BR','CA','CL','CN','CO','CR','CZ','DK','EG','FI','FR','DE','IN','IR','IL','IT','JP','LU','MY','MX','NL','NZ','PH','PL','KR','RO','SA','SK','ZA','ES','SE','CH','TW','TH','TR','AE','GB','US','VN'],
		country_colors = {}
		console.log(active_countries.length)

		for (let i = 0 ; i < active_countries.length  ; i++){

			country_colors[active_countries[i]]='#FF9900';

		}




		$(function(){
			// world map
			console.log(country_colors)
			$('#world-map').vectorMap({
				map: 'world_mill',
				normalizeFunction: 'polynomial',
				backgroundColor: 'rgba(40, 60, 80, 1)',
				series: {regions: [{values: country_colors,attribute: 'fill'}]},

				onRegionTipShow: function(e, el, code){

					let div = $('<div></div>');
					div.addClass("div-class");
				  div.append($(el[0]).text());
				  let style = {
            "position": "absolute",
						"top":el[0].style.top,
						"left":el[0].style.left,

					};
					div.css(style);

					el.append(div)
				      el.html(el.html()+' (GDP - '+'Kibru Yisfa!'+')');
				 },







		    });



		});

		// adding class for map background
		$("body").bind("DOMNodeInserted", function() {
			$(this).find('.jvectormap-container').attr('id','mapo');

		});








	});
})();
