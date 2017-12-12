<?php

require 'pdfcrowd.php';


if(isset($_GET['action']))
{

    try {
        //echo '<body style="margin:0;padding:0"><style>p {margin: 0; padding: 0}body {font-family: \'Courier New\'}</style>' . $_POST['send_html'] . '</body>';
        //die();
        // create an API client instance
        $client = new Pdfcrowd("truemaster005", "5506c685d6c176567eb38485bb5de94a");

        // set HTTP response headers
        header("Content-Type: application/pdf");
        header("Cache-Control: max-age=0");
        header("Accept-Ranges: none");

        header("Content-Disposition: attachment; filename=\"CV.pdf\"");


        $client->setPageHeight("297mm");
        $client->setPageWidth("210mm");
        $client->setPageMargins(0, 0, 0, 0);
        $client->setHtmlZoom(100);
        echo $client->convertHtml('<body style="margin:0;padding:0"><style>p {margin: 0; padding: 0}body {font-family: \'Courier New\'}</style>' . $_POST['send_html'] . '</body>');
        //echo $client->convertHtml($html);
        //var_dump($_POST['data']); die;
        //$out_file = fopen($uniqid.'pdf', "wb");

        //$client->convertFile(__DIR__ . '\\' . $uniqid .'html' , $out_file);
        //$client->convertFile(__DIR__ . '\test2.html' . microtime(), $out_file);
        //fclose($out_file);


    } catch (PdfcrowdException $why) {
        echo "Pdfcrowd Error: " . $why;
    }
}