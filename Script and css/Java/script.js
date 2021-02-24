//other tooltip using for ======>> title="name" <<======
  
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})

//model show on top all div 
	$(document).on('show.bs.modal', '.modal', function () {
		$(this).appendTo('body');
	});
	



//autofocus
$('.modal').on('shown.bs.modal', function() {
	$(this).find('[autofocus]').focus();
});


	
//input id is  id="imgInp" and show img id is <img src="..." id="blah">
 
function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			$('#blah').attr('src', e.target.result);
		}
		reader.readAsDataURL(input.files[0]);
	}
}

$("#imgInp").change(function(){
	readURL(this);
});


// input from history clear javescript
$(document).ready(function(){
	if (window.history.replaceState){
		window.history.replaceState( null, null, window.location.href );
	}
});







//Table collapse  responsive
$(document).ready(function(){
		
		var $main_table			= '.table-responsive-collapse';
		var $main_heading 		= '.main-heading';
		var $tr_row 			= '.tr-row';
		var $td_link 			= '.td-link';
		var $td_removeable 		= '.td-removeable';
		var $dropdown_collapse 	= '.dropdownCollapse';
		
		var $button_id = 1;
		$(''+$main_table+' '+$td_link+'').each(function(){
			$(this).html('<a href="#0" class="btn-collapse mr-2 d-inline-block d-md-none fa fa-arrow-down" button-id="'+$button_id+'"></a> '+$(this).html()+'');
		$button_id++;
		});
		
		var $heading_count = 0;
		$(''+$main_table+' '+$main_heading+' '+$td_removeable+'').each(function(){
			$(this).addClass('d-md-table-cell d-none');
			$heading_count++;
		});
		
		var $removeable_id = 1;
		$(''+$main_table+' '+$tr_row+' '+$td_removeable+'').each(function(){
			$(this).addClass('d-md-table-cell d-none');
			$(this).addClass('removeable-id-'+$removeable_id+'');
			
			
			if($removeable_id == $heading_count){
				$removeable_id = 1;
			}else{
				$removeable_id++;
			}
		});
		
		var $tr_row_id = 1;
		$(''+$main_table+' '+$tr_row+'').each(function(){
			$(this).addClass('tr-row-id-'+$tr_row_id+'');
		$tr_row_id++;
		});
		
		var $div_row_id = 1;
		var $div_row = '';
		$(''+$main_table+' '+$main_heading+' '+$td_removeable+'').each(function(){
			$div_row += '<div class="d-flex align-items-center bg-light row-'+$div_row_id+'" style="border-bottom:solid 1px #dddddd; border-right:solid 1px #dddddd; border-left:solid 1px #dddddd;"><div class="w-100 text-left py-1 px-2 data-heading"></div><div class="w-100 text-right py-1 px-2 data-value"></div></div>';
			$div_row_id++;
		});
			
		var $collapse_id = 1;
		$(''+$main_table+' '+$tr_row+'').each(function(){
			$(this).closest('tr').after('<tr class="dropdownCollapse d-md-none collapse-id-'+$collapse_id+'" style="display:none;"><td colspan="50" class="p-0">'+$div_row+'</td></tr>');
		$collapse_id++;
		});
		
		
		$(''+$main_table+' .btn-collapse').click(function() {
			var $this_button 	=	$(this);
			$this_button.toggleClass('selected');
			
			var $button_id = $this_button.attr("button-id");
			
			
			var $data_row_id = 1;
			$(''+$main_table+' '+$main_heading+' '+$td_removeable+'').each(function(){
				$(''+$main_table+' .collapse-id-'+$button_id+' .row-'+$data_row_id+' .data-heading').html($(this).html());
			$data_row_id++;
			});
			
			var $data_row_id = 1;
			$(''+$main_table+' '+$tr_row+'.tr-row-id-'+$button_id+' '+$td_removeable+'').each(function(){
				$(''+$main_table+' .collapse-id-'+$button_id+' .row-'+$data_row_id+' .data-value').html($(this).html());
			$data_row_id++;
			});
		
			if ($('.collapse-id-'+$button_id+'').is(':visible')){
				$('.collapse-id-'+$button_id+'').fadeOut(500);
			}else{
				$(''+$main_table+' '+$dropdown_collapse+'').fadeOut(0);
				$('.collapse-id-'+$button_id+'').fadeIn(500);
			}
		});
		
});





//ajax file upload 
$(document).on('submit', 'form.ajax-upload-file', function(){

	var data = $(this).serialize();
	$.ajax({
		type : "POST",
		url : "https://cvwebshop.com/include/ajax-login-register.php",
		data : data,
		success : function(data)
		{


		}
	});
	return false;
});










// drag and drop tools
var btn = document.querySelector('.add');
var remove = document.querySelector('.draggable');

function dragStart(e) {
  this.style.opacity = '1';
 
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
};

function dragEnter(e) {
  this.classList.add('over');
}

function dragLeave(e) {
  e.stopPropagation();
  this.classList.remove('over');
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function dragDrop(e) {
  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}

function dragEnd(e) {
  var listItens = document.querySelectorAll('.draggable');
  [].forEach.call(listItens, function(item) {
    item.classList.remove('over');
  });
  this.style.opacity = '1';
  
}

function addEventsDragAndDrop(el) {
  el.addEventListener('dragstart', dragStart, false);
  el.addEventListener('dragenter', dragEnter, false);
  el.addEventListener('dragover', dragOver, false);
  el.addEventListener('dragleave', dragLeave, false);
  el.addEventListener('drop', dragDrop, false);
  el.addEventListener('dragend', dragEnd, false);
}

var listItens = document.querySelectorAll('.draggable');
[].forEach.call(listItens, function(item) {
  addEventsDragAndDrop(item);
});

function addNewItem() {
  var newItem = document.querySelector('.input').value;
  if (newItem != '') {
    document.querySelector('.input').value = '';
    var li = document.createElement('li');
    var attr = document.createAttribute('draggable');
    var ul = document.querySelector('ul');
    li.className = 'draggable';
    attr.value = 'true';
    li.setAttributeNode(attr);
    li.appendChild(document.createTextNode(newItem));
    ul.appendChild(li);
    addEventsDragAndDrop(li);
  }
}

btn.addEventListener('click', addNewItem);











//password show and hide js
	function typeChange(){
		var $text = document.getElementById("show");			
		var btn = document.getElementById("btn");	
			if($text.type == 'hidden'){
				$text.type = 'text';
				
				$(btn).html('<i class="fa fa-eye-slash change"></i> Hide Url');
			}else{
				$text.type = 'hidden';
				
				$(btn).html('<i class="fa fa-eye change"></i> Show Url');
			}
	}
	function ShowAndHide(){
		var $text = document.getElementById("show2");			
		var btn = document.getElementById("btn2");	
			if($text.type == 'hidden'){
				$text.type = 'text';
				
				$(btn).html('<i class="fa fa-eye-slash change"></i> Hide Url');
			}else{
				$text.type = 'hidden';
				
				$(btn).html('<i class="fa fa-eye change"></i> Show Url');
			}
	}




/* input form label 

.label{
	position:relative;
}

.label span{
	position:absolute;
	left:10px;
	top:-9px;
	background-color:white;
	color:blue;
	padding-top:1px;
	padding-left:6px;
	padding-right:6px;
	font-size:11px;	
}



<label class="label d-block" for="username">
	<input type="text" name="username" value=""  placeholder="Username" class="form-control mb-3">
	<span class="d-none">Username</span>
</label>


$('.form-control').on('blur', function(){
	var emptycheck = $(this).val();
	if(emptycheck.trim() == '' ){
		$(this).next('span').removeClass('d-inline-block').addClass('d-none');
		var text =	$(this).next('span').text();
		$(this).attr("placeholder",text);
	}
})
.on('focus', function(){
	$(this).attr("placeholder", "");
	$(this).next('span').removeClass('d-none').addClass('d-inline-block');
});

 */
	