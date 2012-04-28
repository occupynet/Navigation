var navObj = {}; 
navObj.outHtml = '';
navObj.outHtml += '<!--[if lt IE 7]> <div class="onav_wrapper lt-ie9 lt-ie8 lt-ie7"> <![endif]-->';
navObj.outHtml += '<!--[if IE 7]>    <div class="onav_wrapper lt-ie9 lt-ie8"> <![endif]-->';
navObj.outHtml += '<!--[if IE 8]>    <div class="onav_wrapper lt-ie9"> <![endif]-->';
navObj.outHtml += '<!--[if gt IE 8]><!--> <div id="onav_wrapper" class="onav_reset"> <!--<![endif]-->';
navObj.outHtml += '<link rel="stylesheet" href="https://nav.occupy.net/occupynet_nav.css">';
navObj.outHtml += '	<ul id="onav_bar">';
navObj.outHtml += '		<li class="onav_top onav_logo"><a href="http://www.occupy.net"><span class="onav_yellow">Occupy</span>.<span class="onav_white">Net</span></a>';
navObj.outHtml += '		<li class="onav_top"><a href="https://Directory.occupy.net/" target="_blank" title="">Directory</a></li>';
navObj.outHtml += '     <li class="onav_top"><a href="https://Wiki.occupy.net/" target="_blank" title="">Wiki</a></li>';
navObj.outHtml += '     <li class="onav_top"><a href="https://Notes.occupy.net/" target="_blank" title="">Notes</a></li>';
navObj.outHtml += '     <li class="onav_top"><a href="https://Ideas.occupy.net/" target="_blank" title="">Ideas</a></li>';
navObj.outHtml += '     <li class="onav_top"><a href="https://lists.occupy.net/" target="_blank" title="">Lists</a></li>';
navObj.outHtml += '     <li class="onav_top"><a href="https://Map.occupy.net/" target="_blank" title="">Map</a></li>';
navObj.outHtml += '     <li class="onav_top"><a href="https://Campaigns.occupy.net/" target="_blank" title="">Campaigns</a></li>';
navObj.outHtml += '     <li class="onav_top"><a href="https://Classifieds.occupy.net/" target="_blank" title="">Classifieds</a></li>';
// navObj.outHtml += '		<li class="onav_top onav_parent"><a href="http://occupy.net/" target="_blank">More...</a>';
// navObj.outHtml += '         <ul class="onav_child">';
// navObj.outHtml += '             <li class="onav_second"><a href="http://Newswire.occupy.net/" target="_blank" title="">Newswire</a></li>';
// navObj.outHtml += '                <li class="onav_second"><a href="http://Collaborate.occupy.net/" target="_blank" title="">Collaborate</a></li>';
// navObj.outHtml += '                <li class="onav_second"><a href="http://Projects.occupy.net/" target="_blank" title="">Projects</a></li>';
// navObj.outHtml += '                <li class="onav_second"><a href="http://Schedule.occupy.net/" target="_blank" title="">Schedule</a></li>';
// navObj.outHtml += '                <li class="onav_second"><a href="http://Classifieds.occupy.net/" target="_blank" title="">Classifieds</a></li>';
// navObj.outHtml += '                <li class="onav_second"><a href="http://Tech.occupy.net/" target="_blank" title="">Tech</a></li>';
// navObj.outHtml += '         </ul>';
// navObj.outHtml += '     </li>';
//navObj.outHtml += '		<li class="onav_question onav_right" style="display:none;"><a href="#">?</a></li>';
navObj.outHtml += '	</ul>';
navObj.outHtml += '</div>';
document.write(navObj.outHtml);

var occupynetAnchors = document.getElementById('onav_bar').getElementsByTagName('a');

for (i=0; i<occupynetAnchors.length; i++) {
    var testAttr = occupynetAnchors[i].parentNode.getAttribute('class');
    if (occupynetAnchors[i].href == window.location) {
        if (testAttr  === null) {
            occupynetAnchors[i].parentNode.setAttribute('class', 'onav_active');
        } else{
            occupynetAnchors[i].parentNode.setAttribute('class', testAttr + ' onav_active');
        }
    }
}