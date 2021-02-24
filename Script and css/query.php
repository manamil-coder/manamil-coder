<?php


//next:

select * from foo where id = (select min(id) from foo where id > 4)
previous:

select * from foo where id = (select max(id) from foo where id < 4)


///

//next record:
SELECT * FROM foo WHERE id > 4 ORDER BY id LIMIT 1;

previous record:
SELECT * FROM foo WHERE id < 4 ORDER BY id DESC LIMIT 1;



//full matching word query 

SELECT * FROM blog_post where game_id REGEXP '[[:<:]]".$get_game_id."[[:>:]]'

//count data query
SELECT game_id, count(game_id) AS game_count FROM wishlist GROUP BY game_id order by game_count desc

//  date between query
$query = ("SELECT * FROM income
where date BETWEEN NOW() - INTERVAL 1 DAY AND NOW() AND post_id = '$post_id' AND ip_visiter = '$ip_visiter'");

//Current Date Data Get
$sale_today = ("SELECT sum(fuels) as today_total_fuels FROM sale where date BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 3 DAY)");

//between two dates start date end date
$query_select = "SELECT * FROM sale WHERE date BETWEEN '$start_date' AND '$end_date'";

// get data one day and weekly, monthly
"SELECT sum(fuels) as weekly FROM sale where `date` >= FROM_DAYS(TO_DAYS(CURDATE()) -MOD(TO_DAYS(CURDATE()) -1, 7)) - INTERVAL $week DAY"
?>