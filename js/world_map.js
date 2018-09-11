(function(){
	$(document).ready(function(){
		var region_info = $('.region-info').remove();
		var arrow_left = $('.arrow-left').remove();


		console.log("rea")
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
				backgroundColor: 'transparent',
				series: {regions: [{values: country_colors,attribute: 'fill'}]},

				onRegionTipShow: function(e, el, code){
					console.log(e)
					// let div = $('<div></div>');
					// div.addClass("region-info");
				  // div.append($(el[0]).text());
					// console.log(el[0].style.left);
				  // let style = {
          //   "position": "absolute",
					// 	"top":(parseInt(el[0].style.top.split("px")[0])+20)+"px",
					// 	"left":(parseInt(el[0].style.left.split("px")[0])+100)+"px",
					//
					// };
					//
					// let t_style = {
          //   "position": "absolute",
					// 	"top":el[0].style.top,
					// 	"left":el[0].style.left,
					//
					// };
					// div.css(style);
					//
					// var triangle = $('<div></div>');
					// triangle.attr("class","arrow-left");
					//
					// triangle.css(t_style);
					//
					//
					// // el.append(triangle);
					// //
					// // el.append(div);
					//
					//
					//
				  el.html(el.html()+' (GDP - '+'Kibru Yisfa!'+')');
				 },
				 onRegionClick: function(e,code){
					 console.log(e,code);
					// console.log(region_info);
					// region_info.css('left',e.clientX);
					// region_info.css('top',e.clientY);
					// region_info.css('display','block');
					// $('.jvectormap-container').append(region_info);
				 }


		    });


				$(document).on('click','.jvectormap-container',function(e){
						region_info.css('left',e.clientX+140);
						region_info.css('top',e.clientY-280);
						region_info.css('display','block');
						arrow_left.css('left',e.clientX+20);
						arrow_left.css('top',e.clientY-260);
						arrow_left.css('display','block');
						$(this).append(arrow_left);
						$(this).append(region_info);



				})



		});



		// adding class for map background
		$("body").bind("DOMNodeInserted", function() {
			$(this).find('.jvectormap-container').attr('id','mapo');

		});








	});
})();
