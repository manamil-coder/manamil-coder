<?php

$html ='

';


include('mpdf-master/mpdf.php');
$mpdf=new mPDF('c'); 

$mpdf->WriteHTML($html);
$mpdf->Output();
exit;
?>