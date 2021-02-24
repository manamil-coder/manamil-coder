<?php
//insert date calling
	if(isset($_POST['test'])){
		//image upload, resize and watermark function calling
		
		$rename_file			=	rand(111,999) . time() . rand(111,999);
		$field_name				=	"file";
		$target_folder			=	"images/";
		$watermark_file			=	"$target_folder/shakir.png";
		$watermark_size_lg		=	true;
		$watermark_size_sm		=	true;
		$allowed_ext			=	"png,jpeg,jpg";
		$resize_lg 				= 	"800";
		$resize_sm				= 	"300";
		
		$result					= 	upload_file($field_name, $target_folder, $rename_file, $allowed_ext, $resize_lg, $resize_sm, $watermark_file, $watermark_size_lg, $watermark_size_sm);
		
		$file_name 			= 	$result['file_name'];
		
		
		
		$insert 			= 	insert_data_query('test', array('first_name' => $first_name, 'last_name' => $last_name, 'email' => $email, 'image' => $file_name));

		if($insert == true){
			$error[]= "Testing Successfully";
		}else{
			$error[] = "Something Went Wrong == exclamation-triangle  == danger";
		}
	}


// data update
if(isset($_POST['save_changes'])){
	$first_name		= $_POST['first_name'];
	$last_name		= $_POST['last_name'];
	$email			= $_POST['email'];
		
		$rename_file		=	rand(111,999) . time() . rand(111,999);
		$field_name			=	'image';
		$target_folder		=	"images/";
		$allowed_ext		=	'png,jpeg,jpg';
		$resize_lg 			= 	'800';
		$resize_sm			= 	'';
		
		$result				= 	upload_file($field_name, $target_folder, $rename_file, $allowed_ext, $resize_lg, $resize_sm);
	
		$file_name 			= 	$result['file_name'];
	
	//multiple funcation calling insert data, update data, image uploading, watermark, unlink file,

		if(empty($error)){
			
			$insert = insert_and_update_data('status', 'Sqli Table Name', 
					array('table column' => $column_value),'wherer', 
					'inpute name', 'folder Location', 'png,jpeg,jpg', 'Lg Size', 'Sm size', 
					'water mark image', 'lg water-mark true or false', 'sm watermark true or false');
		
			if($insert == true){
				$error[]= "Post Publish Successfully";
			}else{
				$error[] = "Something Went Wrong == exclamation-triangle  == danger";
			}
		}	
}

?>


