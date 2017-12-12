<!DOCTYPE html>
<!-- Created by Adrian Chałupnik -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Generator CV</title>
    <!--<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js"></script>-->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&amp;subset=latin-ext" rel="stylesheet">

    <link href="main/style.css" rel="stylesheet">
    <link href="main/style.css" rel="stylesheet">

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script


</head>
<body>
<div id="main">
    <div id="top_bar">
        <div id="logo">
            <img src="img/Logo.png" alt="Generator CV">
        </div>
        <div id="menu">
            <div class="option">Kontakt</div>
            <div class="option">Wzory CV</div>
            <div class="option">Stwórz CV</div>
            <div style="clear:both"></div>
        </div>
        <div style="clear:both"></div>
    </div>
    <div id="container">
        <div id="p_left">
            <div id="p_top">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="active"><a href="#menu_1" role="tab" data-toggle="tab">Szablony</a></li>
                    <li><a href="#menu_2" role="tab" data-toggle="tab">Przedziały</a></li>
                    <li><a href="#menu_3" role="tab" data-toggle="tab">Zdjęcie</a></li>
                    <li><a href="#menu_4" role="tab" data-toggle="tab">Strony</a></li>
                    <li><a href="#menu_5" role="tab" data-toggle="tab">Zarządzanie</a></li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="menu_1"><br>
                        <label for="template">Wybierz szablon:</label>
                        <select id="template" class="form-control" onchange="set_template()">
                            <option value="template_0">Bez szablonu</option>
                            <option value="template_1">Szablon 1</option>
                            <option id="non" value="template_2">Szablon 2</option>
                        </select>
                        <br><br>
                        <label for="background">Wybierz tło:</label>
                        <select id="background" class="form-control" onchange="change_background()">
                            <option value="background_0" >Bez Tła</option>
                            <option value="background_1">Tło 1</option>
                            <option id="non" value="background_2">Tło 2</option>
                        </select>
                    </div>
                    <div class="tab-pane" id="menu_2">
                        <input type="button" class="btn btn-default" value="Dodaj przedział" onclick="add_div()">
                        <label> - Dodaje sortowany przedział</label><br>

                        <input type="text" id="indentation_field_L" placeholder="margines lewy" onkeyup="set_indentation('Left')">
                        <label> - Ustawia lewy margines sortowanego przedziału</label><br>

                        <input type="text" id="indentation_field_R" placeholder="margines prawy" onkeyup="set_indentation('Right')">
                        <label> - Ustawia prawy margines sortowanego przedziału</label><br>

                        <input type="button" class="btn btn-default" value="Dodaj przesuwany przedział" onclick="add_moveable_div()">
                        <label> - Dodaje dowolnie przesuwany przedział</label><br>

                        <input placeholder="wysokość przedziału" id="div_hight" onkeyup="change_div_height()">
                        <label> - Ustawia wysokość dowolnie przesuwanego przedziału</label><br>

                        <input placeholder="szerokość przedziału" id="div_width" onkeyup="change_div_width()">
                        <label> - Ustawia szerokość dowolnie przesuwanego przedziału</label><br>

                        <input type="button" class="btn btn-default" value="Usuń przedział" onclick="del_div()">
                        <label> - Usuwa przedział</label>

                    </div>
                    <div class="tab-pane" id="menu_3">
                        <input type="file" class="form-control-file" name="fileupload" value="fileupload" id="fileupload" style="float:left" onchange="load_file()" accept="image/*">
                        <img id="image_1" src="">
                        <label for="fileupload"> - Prześlij swoje zdjęcie</label><br>

                        <div style="clear:both">
                            <input type="text" id="image_width" placeholder="szerokość zdjęcia" onkeyup="ImgWidth()">
                            <label> - Ustaw szerokość zdjęcia</label>
                        </div>

                        <input type="text" id="image_height" placeholder="wysokość zdjęcia" onkeyup="ImgHeight()">
                        <label> - Ustaw wysokośc zdjęcia</label>

                        <div>
                            <input type="submit" class="btn btn-default" id="image_del" value="Usuń zdjęcie" onclick="ImgDel()">
                            <label> - Usuń zdjęcie</label>
                        </div>
                    </div>
                    <div class="tab-pane" id="menu_4">
                        <div>
                            <label class="to_left" for="nr_site">Aktualna strona: &nbsp;</label>
                            <div class="to_left" id="nr_site"></div>
                        </div>

                        <div style="clear:both">
                            <label class="to_left" for="nr_site">Ilość stron: &nbsp;</label>
                            <div class="to_left" id="how_many_sites"></div>
                        </div>

                        <div style="clear:both">
                            <label class="to_left" for="change_site">Ustaw stronę: &nbsp;</label>
                            <input class="to_left" size="1" value="1" id="change_site" onkeyup="change_site()">
                        </div>

                        <div style="clear:both">
                            <label class="to_left" for="add_site">Dodaj nową stronę: &nbsp;</label>
                            <input type="submit" id="add_site" onclick="add_site()" value="Dodaj stronę">
                        </div>
                        <label class="to_left" for="remove_site">Usuń ostatnią stronę: &nbsp;</label>
                        <input class="to_left" type="submit" onclick="remove_site()" value="Usuń stronę">

                    </div>
                    <div class="tab-pane" id="menu_5">
                        <br>
                        <div>
                            <b>Ctr + Scroll</b> - Skalowanie okna przeglądarki
                        </div>
                        <br><br>
                        <div>
                            <div id="slider">
                                <input class="bar" type="range" id="rangeinput" value="1" step="0.1" max="1" min="0.1" onchange="scale_p_right(1);" />
                                <span class="highlight"></span>
                                <output id="rangevalue">10</output>
                            </div>
                            <label> &nbsp;&nbsp;- Skalowanie kartki A4</label>
                        </div>
                        <br>
                        <input type="submit" class="btn btn-default" value="Generuj pdf" onclick="create_pdf()">
                        <label> - Zapisuje CV jako PDF</label><br><br>

                    </div>
                </div>


                <form enctype="multipart/form-data" action="php/print.php?action" method="post">
                    <input id="send_html" name="send_html" type="hidden" value="yes">
                </form>


            </div>
            <div id="p_bot">
                <form id="get-data-form" method="post">
                    <textarea class="tinymce" id="texteditor"></textarea>
                </form>
            </div>
        </div>


        <div id="p_right_container">
            <div id="p_right">
                <div id="first_one"></div>
            </div>
        </div>

    </div>
</div>

<!--
<script type="text/javascript">
    $(document).ready(function() {
        var ajax = $.ajax({
            type: "POST",
            url: "./print.php",
            data: "data="+GetP_rightHTML(),
            success: function (data) {
                console.log(data);
            }
        });

        console.log(ajax);
    });
</script>-->


<script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
<script type="text/javascript" src="plugins/tinymce/tinymce.min.js"></script>
<script type="text/javascript" src="main/init-tinymce.js"></script>
<script type="text/javascript" src="js/getdata.js"></script>
<script type="text/javascript" src="js/templates.js"></script>

<?php require './php/print.php'; ?>

<script type="text/javascript" src="plugins/jsPDF-master/jspdf.js"></script>
<script type="text/javascript" src="plugins/jsPDF-master/jspdf.plugin.from_html.js"></script>
</body>
</html>