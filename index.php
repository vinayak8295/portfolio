<?php
    function fetch_data($url){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 20);
        $result = curl_exec($ch);
        curl_close($ch);
        return $result;
    }

    $count = 10; // the number of photos you want to fetch
    $access_token = "IGQVJVZA3dmTThPbWx3alA2dTgzX2JYSUJBdWh5YlpOYTd6Y0JGRTFIWEVMWnpCQ0xoRGhsR1ZAxQndZAQ1IyNmhTRDhaclVhcGxSN0hRMF9rV1NVS2RWdWJnSXZAHUDU1UmNUS2Uxa1BGX2NuT1M3YWZAoUQZDZD";
    $display_size = "thumbnail"; // you can choose between "low_resolution", "thumbnail" and "standard_resolution"

    $result = fetch_data("https://api.instagram.com/v1/users/self/feed?count={$count}&access_token={$access_token}");
    $result = json_decode($result);

    echo "<ul>";
    foreach ($result->data as $photo) {
        $img = $photo->images->{$display_size};
        echo "<li><a href='{$photo->link}'><img src='{$img->url}' /></a></li>";
    }
    echo "</ul>";
?>