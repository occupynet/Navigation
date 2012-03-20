var navObj = {}; 
navObj.outHtml = '';
navObj.outHtml += '<!--[if lt IE 7]> <div class="onav_wrapper lt-ie9 lt-ie8 lt-ie7"> <![endif]-->';
navObj.outHtml += '<!--[if IE 7]>    <div class="onav_wrapper lt-ie9 lt-ie8"> <![endif]-->';
navObj.outHtml += '<!--[if IE 8]>    <div class="onav_wrapper lt-ie9"> <![endif]-->';
navObj.outHtml += '<!--[if gt IE 8]><!--> <div id="onav_wrapper" class="onav_reset"> <!--<![endif]-->';
navObj.outHtml += '	<style>';
navObj.outHtml += '		.onav_reset * {margin:0;padding:0;}';
navObj.outHtml += '';
navObj.outHtml += '#onav_wrapper { background-color:#000; font-family:Arial,Helvetica,sans-serif; font-size:10px; width:100%; height:30px; }';
navObj.outHtml += '';
navObj.outHtml += '#onav_wrapper #onav_bar { position: relative;}';
navObj.outHtml += '';
navObj.outHtml += '#onav_wrapper #onav_bar ul { list-style:none; }';
navObj.outHtml += '#onav_wrapper #onav_bar li {}';
navObj.outHtml += '';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_logo { border-left:10px solid black; }';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_logo:hover { border-left-color:#FC0; }';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_logo .onav_yellow { color:#FC0; }';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_logo .onav_white { color:white; }';
navObj.outHtml += '';
navObj.outHtml += '/*list item levels*/';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_top { display:inline-block; line-height:26px; font-size:13px; }';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_second {}';
navObj.outHtml += '';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_right { float: right;}';
navObj.outHtml += '';
navObj.outHtml += '/*list hierarchy*/';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_parent { position: relative; }';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_parent:hover > .onav_child { display: block; }';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_child { background-color:#000; display:none; position: absolute;';
navObj.outHtml += '-moz-box-shadow:2px 0 6px rgba(0,0,0,.5);';
navObj.outHtml += '-webkit-box-shadow:2px 0 6px rgba(0,0,0,.5);';
navObj.outHtml += '-o-box-shadow:2px 0 6px rgba(0,0,0,.5);';
navObj.outHtml += 'box-shadow:2px 0 6px rgba(0,0,0,.5);}';
navObj.outHtml += '';
navObj.outHtml += '/*all links*/';
navObj.outHtml += '#onav_wrapper #onav_bar a,';
navObj.outHtml += '#onav_wrapper #onav_bar a:link,';
navObj.outHtml += '#onav_wrapper #onav_bar a:visited {';
navObj.outHtml += '	border-color: #000000;';
navObj.outHtml += '    border-style: solid;';
navObj.outHtml += '    border-width: 2px 0;';
navObj.outHtml += '    color: #AAAAAA;';
navObj.outHtml += '    display: block;';
navObj.outHtml += '    font-weight: bold;';
navObj.outHtml += '    padding: 0 10px;';
navObj.outHtml += '    text-decoration: none;';
navObj.outHtml += '}';
navObj.outHtml += '#onav_wrapper #onav_bar a:hover { color:#EEE; }';
navObj.outHtml += '';
navObj.outHtml += '/*top links*/';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_top a,';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_top a:link,';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_top a:visited {}';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_top a:hover {}';
navObj.outHtml += '';
navObj.outHtml += '/*active links*/';

	navObj.outHtml += '#onav_wrapper #onav_bar > .onav_active a,';
	navObj.outHtml += '#onav_wrapper #onav_bar > .onav_active a:link,';
	navObj.outHtml += '#onav_wrapper #onav_bar > .onav_active a:visited { color:#FFF; border-top-color:#FC0;}';
	navObj.outHtml += '#onav_wrapper #onav_bar > .onav_active a:hover {}';

 
navObj.outHtml += '/*second level links*/';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_second a,';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_second a:link,';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_second a:visited {}';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_second a:hover {}';
navObj.outHtml += '';
navObj.outHtml += '/*help button*/';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_question {}';
navObj.outHtml += '';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_question a,';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_question a:link,';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_question a:visited {';
navObj.outHtml += '	background-color: #FFCC00;';
navObj.outHtml += '    border: 1px solid #885500;';
navObj.outHtml += '    color: #000000;';
navObj.outHtml += '    height: 20px;';
navObj.outHtml += '    line-height: 20px;';
navObj.outHtml += '    margin: 4px 10px 0 0;';
navObj.outHtml += '    padding: 0;';
navObj.outHtml += '    text-align: center;';
navObj.outHtml += '    width: 20px;';
navObj.outHtml += '';
navObj.outHtml += '    -moz-border-radius: 10px 10px 10px 10px;';
navObj.outHtml += '    -webkit-border-radius: 10px 10px 10px 10px;';
navObj.outHtml += '    -o-border-radius: 10px 10px 10px 10px;';
navObj.outHtml += '    border-radius: 10px 10px 10px 10px;';
navObj.outHtml += '}';
navObj.outHtml += '#onav_wrapper #onav_bar .onav_question a:hover { background-color:#FD5; }	</style>';
navObj.outHtml += '	<ul id="onav_bar">';
navObj.outHtml += '		<li class="onav_top onav_logo onav_parent"><a href="#"><span class="onav_yellow">Occupy</span>.<span class="onav_white">Net</span></a>';
navObj.outHtml += '			<ul class="onav_child">';
navObj.outHtml += '				<li class="onav_second"><a href="http://Newswire.occupy.net/" target="_blank" title="">Newswire</a></li>';
navObj.outHtml += '                <li class="onav_second"><a href="http://Collaborate.occupy.net/" target="_blank" title="">Collaborate</a></li>';
navObj.outHtml += '                <li class="onav_second"><a href="http://Projects.occupy.net/" target="_blank" title="">Projects</a></li>';
navObj.outHtml += '                <li class="onav_second"><a href="http://Schedule.occupy.net/" target="_blank" title="">Schedule</a></li>';
navObj.outHtml += '                <li class="onav_second"><a href="http://Classifieds.occupy.net/" target="_blank" title="">Classifieds</a></li>';
navObj.outHtml += '                <li class="onav_second"><a href="http://Tech.occupy.net/" target="_blank" title="">Tech</a></li>';
navObj.outHtml += '			</ul>';
navObj.outHtml += '		</li>';
navObj.outHtml += '		<li class="onav_top"><a href="http://Directory.occupy.net/" target="_blank" title="">Directory</a></li>';
navObj.outHtml += '        <li class="onav_top"><a href="http://Map.occupy.net/" target="_blank" title="">Map</a></li>';
navObj.outHtml += '        <li class="onav_top"><a href="http://Wiki.occupy.net/" target="_blank" title="">Wiki</a></li>';
navObj.outHtml += '        <li class="onav_top"><a href="http://Notes.occupy.net/" target="_blank" title="">Notes</a></li>';
navObj.outHtml += '        <li class="onav_top"><a href="http://Ideas.occupy.net/" target="_blank" title="">Ideas</a></li>';
navObj.outHtml += '		<li class="onav_top"><a href="http://occupy.net/" target="_blank">More</a></li>';
navObj.outHtml += '		<!-- <li class="onav_question onav_right"><a href="#">?</a></li> -->';
navObj.outHtml += '	</ul>';
navObj.outHtml += '</div>';
document.write(navObj.outHtml);

var occupynetAnchors = document.getElementById('onav_bar').getElementsByTagName('a');

for (i=0; i<occupynetAnchors.length; i++) {
    var testAttr = occupynetAnchors[i].getAttribute('class');
    if (occupynetAnchors[i].href === window.location) {
        if (testAttr  === null) {
            occupynetAnchors[i].setAttribute('class', 'onav_active');
        } else{
            occupynetAnchors[i].setAttribute('class', testAttr + ' onav_active');
        }
    }
}