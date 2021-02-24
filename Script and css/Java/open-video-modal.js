
/*

How to call open-video-box create a div like this

<div class="open-video-box" video_id="12jdde32">
	make your desgin here
</div>


copy this css and paste your css file 

.open-video-modal .modal-content {
	position:relative;
}
.open-video-modal .modal-content button{
	border:solid black 1px;
	position:absolute;
	background-color:#F0F0F0;
	z-index:999999;
	top:-10px;
	opacity:1;
	right:-10px;
	width:30px;
	height:30px;
	border-radius:100%;
	font-size:14px;
	
}
.open-video-modal .modal-body .vidoe-box{
	position:relative;
}
.open-video-modal .modal-body .vidoe-box iframe{
	position:absolute;
	top:0px;
	left:0px;
	right:0px;
	bottom:0px;
	width:100%;
	height:100%;
}

this is bootstrap modal in html code only this code and paste in footer
	
<div class="modal fade open-video-modal bd-example-modal-lg" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></button>
            <div class="modal-body p-2">
				<div class="vidoe-box">
					<img src="images/black.png" width="100%">
					<iframe width="" height="" frameborder="0" allowfullscreen=""></iframe>
				</div>
            </div>
        </div>
    </div>
</div>


*/

/* this is calling bootstrap modal and play youtube video copy this code and paste your js file */

	$(document).ready(function() {  
		
		//opening model trigger
		$('.open-video-box').click(function(){
		   var $video_id = $(this).attr("video_id");
		   var src = 'https://www.youtube.com/embed/'+$video_id+'';
			$('.open-video-modal').modal('show');
			$('.open-video-modal iframe').attr('src', src);
		});
		
		//closing model trigger
		$('.open-video-modal button').click(function(){
			$('.open-video-modal iframe').removeAttr('src');
		});
	});
