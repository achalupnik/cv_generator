//https://www.dyclassroom.com/tinymce/how-to-get-data-from-tinymce-text-editor
//https://www.dyclassroom.com/tinymce/how-to-set-data-to-tinymce-text-editor


var active_div;
var side;

var p_rights = [];
var active_p_right=0;


function setTinymce() {
    setTinymceMargin();
    setTinymceWidth();
}



$(document).ready(function () { //uruchomi dopiero po wczytaniu przez przeglądarkę wszystkich danych
    active_div = $("#first_one");
    $("#p_right").css("word-wrap", "break-word");
    $("#p_right").css("padding","10px");
    $("#p_right").css("line-height","1 !important");
    //p_rights[0] = $("#p_right");
    p_rights[active_p_right] = $("#p_right").html();


    $("#nr_site").html(parseInt(active_p_right)+1);
    $("#how_many_sites").html(p_rights.length);

    //p_right.style.transform="scale(0.1, 0.1)";
    /*try{
     k();
     }catch(err){
     setTimeout(k(),3000);
     setTimeout(k(),3000);
     function k() {
     tinymce.get("texteditor").setContent(active_div.html());
     }
     //console.log(active_div.html());
     //alert(active_div.html());
     /** $("#texteditor_ifr").on("keydown",function () {
     alert(":");
     setTimeout(function(){$("#get-data-form").submit()},100);
     });*/

    //while(1){
    //      setTimeout(k(),100);
    // }

    /*
    $("#sender").click(function(){
        alert("x");
        $.get("print.php?akcja");
    })*/



    $("#get-data-form").submit(function () {
        var content = tinymce.get("texteditor").getContent();
        if (content.indexOf("<div") != 0) {
            content = "<div class='for_div'>" + content + "</div>";
        }
        active_div.html(content);

        return false;

    });

    //$("#set_data_tiny").on("click", my);


    $("#p_right").sortable();

});

function ImgWidth() {
    var m_width = $("#image_width").val();
    $("#makeMeDraggable").css("height", "auto");
    $("#makeMeDraggable").css("width", m_width + "em");

}

function ImgHeight() {
    var m_height = $("#image_height").val();
    $("#makeMeDraggable").css("width", "auto");
    $("#makeMeDraggable").css("height", m_height + "em");

}

function ImgDel() {
    //$("#makeMeDraggable").val("");
    //$("#makeMeDraggable").replaceWith($("#makeMeDraggable").clone());
    $("#makeMeDraggable").remove();

}

function scale_p_right() {
    var scale_p = $("#rangeinput").val();
    $('#p_right').css({
        '-webkit-transform' : 'scale(' + scale_p + ',' + scale_p +')',
        '-moz-transform'    : 'scale(' + scale_p + ',' + scale_p +')',
        '-ms-transform'     : 'scale(' + scale_p + ',' + scale_p +')',
        '-o-transform'      : 'scale(' + scale_p + ',' + scale_p +')',
        'transform'         : 'scale(' + scale_p + ',' + scale_p +')'
    });

    $('#p_right').css('webkitTransformOrigin', "top left");
}

function scale(scale_value) {
    var a = 10 - $("#rangeinput").val();
    a = 16 - a;
    if(scale_value === 10)
        a = 16;
    $("#p_right").css("font-size", a + "px");
    $("#p_right").css("width", 210 * a / 16 + "mm");
    $("#p_right").css("height", 297 * a / 16 + "mm");

    setTinymce();


    //********* stare - przydatne ************//
    /*p_right.style.webkittransform="scale("+slider.value+","+slider.value+")";   //Chrome, Safari, Opera
     p_right.style.mstransform="scale("+slider.value+","+slider.value+")";   //IE 9
     p_right.style.transform="scale("+slider.value+","+slider.value+")";

     p_right.style.webkitTransformOrigin="top left";
     p_right.style.msTransformOrigin="top left";
     p_right.style.TransformOrigin="top left";*/

    //p_right.style.transform-orgin="left";
    //p_right.style.transformOrigin="50% 50%";
    //p_right.style.position="-50%";
}

function add_moveable_div(){
    var add_move_div = document.createElement("div");
    add_move_div.setAttribute("class", "makeMeDraggable");
    add_move_div.innerHTML = "moje dane do CV";
    document.getElementById("p_right").appendChild(add_move_div);

    init_draggable();

    get_for_tinymce();
}

function change_div_height(){
    active_div.css("height", $("#div_hight").val() + "em");
}

function  change_div_width() {
    active_div.css("width", $("#div_width").val() + "em");
}

function add_div() {
    var add_div = document.createElement("div");
    add_div.setAttribute("class", "for_div");
    //add_div.setAttribute("margin-left", "20px");
    //add_div.setAttribute("margin-right", "20px");
    add_div.innerHTML = "tekst zawarty w przedziale";
    document.getElementById("p_right").appendChild(add_div);

    get_for_tinymce();

}

function get_for_tinymce(){
    var p_right_div = $("#p_right>div");
    p_right_div.off("click");
    p_right_div.on("click", function () {

        tinymce.get("texteditor").setContent(this.innerHTML);
        active_div = $(this);
        //$("#get-data-form").submit();
        setTinymceMargin();
    });
}

/**
 function my() {

    var content = $(tmp).html();

    tinymce.get("texteditor").setContent(content);


}*/
function tap_key() {

    active_div.html(tinymce.get("texteditor").getContent());

    setTinymceWidth();

}

function set_indentation(side) {     //set margin based on text-input
    var indentation;
    if (side === "Left")
        indentation = document.getElementById("indentation_field_L").value;
    else
        indentation = document.getElementById("indentation_field_R").value;
    active_div.css('margin' + side, indentation + 'px');

    setTinymceMargin();
}

function change_background() {
    var selected_background = document.getElementById("background");
    var selected_background_2 = selected_background.options[selected_background.selectedIndex].value;
    var image_path = 'img/' + selected_background_2 + '.jpg';


    toDataURL(image_path, function (dataUrl) {
        //console.log('RESULT:', dataUrl);
        $("#p_right").css('background-image', 'url(' + dataUrl + ')');
        $('#p_right').css('background-size','100% 100%');
        $('#p_right').css('height','297mm');
        $('#p_right').css('width','210mm');
    })

        setTinymceWidth();
        $("#p_right").sortable();

    /*$("#p_right").css('background','url(data:image/jpeg,img/'+temp2+'.jpg) no repeat:');
     $("#p_right").css('background-image','url(data:image/jpeg,img/'+temp2+'.jpg) no repeat:');
     $("#p_right").css('background-position-x','initial');
     $("#p_right").css('background-position-y','initial');
     $("#p_right").css('background-size','initial');
     $("#p_right").css('background-repeat-x','initial');
     $("#p_right").css('background-repeat-y','initial');
     $("#p_right").css('background-attachment','initial');
     $("#p_right").css('background-orgin','initial');
     $("#p_right").css('background-clip','initial');
     $("#p_right").css('background-color','initial');*/
}

function setTinymceWidth(){
    var p_right_css = window.getComputedStyle($("#p_right")[0], null);
    $("#p_left").css("width", p_right_css.width);
    tinymce.get("texteditor").formElement.style.width = p_right_css.width;
    try{
        tinymce.get("texteditor").container.style.width = p_right_css.width;
    }catch(er){

    }
}

function load_file() {
    load_file = new FileReader();
    load_file.readAsDataURL($("#fileupload")[0].files[0]);
    load_file.onload = function () {
        //$("#image_1")[0].src=f.result;
        //$("#image_1").css("width","200px");

        img = document.createElement('img');
        img.src = load_file.result;
        //img.setAttribute("width","200px");
        img.setAttribute("class", "makeMeDraggable");
        img.setAttribute("id", "makeMeDraggable");
        document.getElementById("p_right").appendChild(img);

        init_draggable();

    }

}

function del_div() {
    active_div.remove();
}

function init_draggable() {
    $('.makeMeDraggable').draggable({containment: "parent"});
    $('.makeMeDraggable').css('position','relative');

}

function GetP_rightHTML() {
    return encodeURI($('#p_right').html());
}


function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();

    /*toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0', function(dataUrl) {
     console.log('RESULT:', dataUrl)
     })*/
}

function setTinymceMargin(){
    //tinymce.get("texteditor").contentDocument.body.style.paddingLeft=$("#p_right").css("padding-left");
    //tinymce.get("texteditor").contentDocument.body.style.paddingRight=$("#p_right").css("padding-right");
    tinymce.get("texteditor").contentDocument.body.style.margin=active_div.css("margin");

}

function UpdateSendHtml(){
    $("#p_right").css("line-height","1 !important");
    $("#p_right")[0].style.lineHeight = "1";
    $("#send_html")[0].value = $("#p_right_container").html();

    $("#send_html")[0].value = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">";

    for(var i = 0; i<p_rights.length; i++){
        $("#p_right").html(p_rights[i]);
        fix_Events();
        $("#send_html")[0].value = $("#send_html")[0].value + $("#p_right_container").html();
        //$("#send_html")[0].value = $("#send_html")[0].value + '<div style="page-break-before:always"></div>' + $("#p_right_container").html();
    }

}


function add_site(){
    p_rights[active_p_right] = $("#p_right").html();
    active_p_right++;

    $("#p_right").html("");
    tinymce.get("texteditor").setContent("");
    $("#nr_site").html(active_p_right+1);
    $("#how_many_sites").html(p_rights.length+1);

    fix_Events();

}


function change_site(){
    /*if($("#change_site").val() > p_rights.length){
        add_site();
    }*/

    p_rights[active_p_right] = $("#p_right").html();
    active_p_right = parseInt($("#change_site").val())-1 ;

    $("#p_right").html(p_rights[active_p_right]);
    $("#nr_site").html((parseInt(active_p_right)+1));
    $("#how_many_sites").html(p_rights.length);
    fix_Events();
}


//reinicjuje eventy po zmianie strony
function fix_Events(){
    tmp = $("#p_right>div");
    tmp.off("click");
    tmp.on("click", function () {
        tinymce.get("texteditor").setContent(this.innerHTML);
        active_div = $(this);
    });
    $('.makeMeDraggable').draggable({containment: "parent"});
    change_background();
}


function remove_site(){
    p_rights.pop();
    $("#how_many_sites").html(p_rights.length);

    /*
    //usówanie dziór w tablicy
    var temp = [];
    temp.push(p_rights.splice(0, $("#remove_site").val()));
    temp.push(p_rights.splice($("#remove_site").val(), p_rights.length)); //tu pewnie trzeba dodać +1 do obu
    p_rights = temp;*/
}

function create_pdf(){
    if(p_rights.length > 1){
        change_site();
    }else{
        p_rights[active_p_right] = $("#p_right").html();
    }

    UpdateSendHtml();

    document.forms[0].submit();
}

function set_template(){
    var template_nr = $("#template").val();
    template_nr = template_nr.replace("template_", "");
    $("#p_right_container").html(template[template_nr]);


    fix_Events();
    document.getElementById("background").value = template_background[template_nr];
    change_background();
    scale(10);
}

