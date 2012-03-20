<?php

//builds $baseNav
include_once('occupynet_navArray.php');

class nav
{
	protected $navArray = '';
	protected $baseURL = 'occupy.net/';
	protected $baseProtocal = 'http://';
	protected $get = false;
	protected $prependClass = 'onav_';
	protected $activeClass = 'active';

	public function __construct($navArray,$get = false,$baseURL = false,$prependClass = false)
	{
		if($baseURL){ $this->baseURL = $baseURL; }

		if($get && is_array($get)){ $this->get = $get;}

		if($prependClass && is_array($prependClass)){ $this->prependClass = $prependClass; }

		$this->navArray = $navArray;
	}

	public function build($status = 1)
	{
		$out = '';

		foreach ($this->navArray as $key => $data) 
		{
			if($data['status'] == $status)
			{
				$out .= $this->buildListItem($data);
			}
		}

		return $out;
	}

	protected function buildListItem($data)
	{
		switch ($data['status']) {
			case 2:
				$class = 'second';
				break;
			
			case 3:
				$class = 'third';
				break;
			
			default:
				$class = 'top';
				break;
		}

		if(isset($this->get['domain']) && strtolower($this->get['domain']) == strtolower($data['display'])) 
		{
			$class .= ' ' . $this->prependClass . $this->activeClass;
		}

		$out = '<li class="' . $this->prependClass . $class . '">';
		$out .= $this->buildAnchor($data);
		$out .= "</li>\n";
		
		return $out;
	}

	protected function buildAnchor($data)
	{
		//if href is null build the url
		$href = ($data['href'] != null && filter_var($data['href'], FILTER_VALIDATE_URL)) ? $data['href'] : $this->baseProtocal . $data['display'] . '.' . $this->baseURL;
		
		return '<a href="' . $href . '" target="_blank" title="' . $data['title'] . '">' . $data['display'] . '</a>';
	}
}

$nav = new nav($baseNav,$_GET);

?>

<!--[if lt IE 7]> <div class="onav_wrapper lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>    <div class="onav_wrapper lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>    <div class="onav_wrapper lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <div id="onav_wrapper" class="onav_reset"> <!--<![endif]-->
	<style>
		<?php include_once('occupynet_nav.css'); ?>
	</style>
	<ul id="onav_bar">
		<li class="onav_top onav_logo onav_parent"><a href="#"><span class="onav_yellow">Occupy</span>.<span class="onav_white">Net</span></a>
			<ul class="onav_child">
				<?php echo $nav->build(2); ?>
			</ul>
		</li>
		<?php echo $nav->build(); ?>
		<li class="onav_top"><a href="http://occupy.net/" target="_blank">More</a></li>
		<!-- <li class="onav_question onav_right"><a href="#">?</a></li> -->
	</ul>
</div>
