function validate_search(search_value) {
    if (search_value.length > 0) {
        var regexp = /^[0-9a-zA-Z]+[\-'\s]?[0-9a-zA-Z ]+$/;
        return regexp.test(search_value);
    }
    return false;
}

function refresh() {
    $('.pagination').html = '';
    $('.pagination').val = '';
}

function search(keyword) {
//changes the url to avoid creating another different function

    //var urlbase = "index.php?module=products&function=num_pages_products";
    var urlbase = "../../products/num_pages_products/";
    if (!keyword){
        datos = {'num_pages':true};
    } else {
        datos = {'num_pages': true, 'keyword': keyword};
    }

    $.post(urlbase, datos, function (data, status) {

        var json = JSON.parse(data);
        var pages = json.pages;
        urlbase = "../../products/obtain_products/";
        if (!keyword){
            datos = '';
        } else {
            datos = {"keyword": keyword};
        }

        $("#results").load(urlbase, datos);

        if (pages !== 0) {
            refresh();
            $(".pagination").bootpag({
                total: pages,
                page: 1,
                maxVisible: 5,
                next: 'next',
                prev: 'prev'
            }).on("page", function (e, num) {
                e.preventDefault();
                if (!keyword){
                    $("#results").load("../../products/obtain_products/", {'page_num': num});
                } else {
                    $("#results").load("../../products/obtain_products/", {'page_num': num, 'keyword': keyword});
                }
                reset();
            });
        } else {
            $("#results").load("../../products/view_error_false/", {'view_error': false}); //view_error=false
            $('.pagination').html('');
            reset();
        }
        reset();

    }).fail(function (xhr) {
        $("#results").load("../../products/view_error_true/", {'view_error': true});
        $('.pagination').html('');
        reset();
    });
}

function search_product(keyword) {
    $.post("../../products/name_products/", {'nom_product': keyword}, function (data, status) {

        var json = JSON.parse(data);
        var tecnico = json.product_autocomplete;

        $('#results').html('');
        $('.pagination').html('');

        /*var img_tecnico = document.getElementById('img_avatar');
        img_tecnico.innerHTML = '<img src="' + product[0].img_avatar + '" class="img-product"> ';*/

        var nom_tecnico = document.getElementById('name_tecnico');
        nom_tecnico .innerHTML = tecnico[0].name;
        var phone_tecnico  = document.getElementById('phone_tecnico');
        phone_tecnico.innerHTML = tecnico[0].phone;
        var email_tecnico = document.getElementById('email_tecnico');
        email_tecnico.innerHTML = tecnico[0].email;
        var points_tecnico = document.getElementById('points_tecnico');
        points_tecnico.innerHTML = "Puntos: " + tecnico[0].points;
        points_tecnico.setAttribute("class", "special");

    }).fail(function (xhr) {
      console.log("error");
        $("#results").load("../../products/view_error_false/", {'view_error': false});
        $('.pagination').html('');
        reset();
    });
}

function count_product(keyword) {
    $.post("../../products/count_products/", {'count_product': keyword}, function (data, status) {
        var json = JSON.parse(data);
        var num_products = json.num_products;

        if (num_products == 0) {
            $("#results").load("../../products/view_error_false/", {'view_error': false}); //view_error=false
            $('.pagination').html('');
            reset();
        }
        if (num_products == 1) {
            search_product(keyword);
        }
        if (num_products > 1) {
            search(keyword);
        }
    }).fail(function () {
        $("#results").load("../../products/view_error_true/", {'view_error': true}); //view_error=false
        $('.pagination').html('');
        reset();
    });
}
function reset() {
    $('#img_prod').html('');
    $('#name_prod').html('');
    $('#description_prod').html('');
    $('#price_prod').html('');
    $('#price_prod').removeClass("special");

    $('#keyword').val('');
}

$(document).ready(function () {
  if (getCookie("search")) {
      var keyword=getCookie("search");
      count_product(keyword);
      //alert("carrega pagina getCookie(search): " + getCookie("search"));
     //("#keyword").val(keyword) if we don't use refresh(), this way we could show the search param
      setCookie("search","",1);
  } else {
      search();
  }

  $("#search_prod").submit(function (e) {
      var keyword = document.getElementById('keyword').value;
      var validate_keyword = validate_search(keyword);
      if (validate_keyword)
          setCookie("search", keyword, 1);
      //alert("getCookie(search): " + getCookie("search"));
      location.reload(true);


      //si no ponemos la siguiente línea, el navegador nos redirecciona a index.php
      e.preventDefault(); //STOP default action
  });

  $('#Submit').click(function () {
      var keyword = document.getElementById('keyword').value;
      var validate_keyword = validate_search(keyword);
      if (validate_keyword)
          setCookie("search", keyword, 1);
      //alert("getCookie(search): " + getCookie("search"));
      location.reload(true);

  });

    $.post("../../products/autocomplete_products/", {'autocomplete': true}, function (data, status) {
        var json = JSON.parse(data);
        var name_products = json.nom_productos;

        var suggestions = new Array();
        for (var i = 0; i < name_products.length; i++) {
            suggestions.push(name_products[i].name);
        }
        //alert("array: "+suggestions);
        //console.log(suggestions);

        $("#keyword").autocomplete({
            source: suggestions,
            minLength: 1,
            select: function (event, ui) {
                //alert(ui.item.label);
                var keyword = ui.item.label;
                count_product(keyword);
            }
        });

    }).fail(function (xhr) {
      $("#results").load("../../products/view_error_false/", {'view_error': false}); //view_error=false
      $('.pagination').html('');
      reset();

    });
});

function setCookie(cookieName, cookieValue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + "; " + expires;
}

function getCookie(cookieName) {
    var name = cookieName + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) === 0)
            return c.substring(name.length, c.length);
    }
    return 0;
}
