//we do this so that  details_prod don't appear

$(document).ready(function () {
    $('.tecnico_dni').css('cursor', 'pointer');
    $('.tecnico_dni').click(function () {
        var id = this.getAttribute('id');
        console.log(id);
        //alert(id);

        $.get("index.php?module=products&function=obtain_products&idProduct=" + id, function (data, status) {
            console.log(data);
            var json = JSON.parse(data);
            var tecnico = json.tecnico;
            //console.log(tecnico);

            $('#results').html('');
            $('.pagination').html('');

            /*var img_tecnico = document.getElementById('img_avatar'); /// cambiar en CSS products
            img_tecnico.innerHTML = '<img src="' + product[0].img_avatar + '" class="img-product"> ';*/

            var nom_tecnico = document.getElementById('name_tecnico');
            nom_tecnico .innerHTML = tecnico.name;
            var phone_tecnico  = document.getElementById('phone_tecnico');
            phone_tecnico.innerHTML = tecnico.phone;
            var email_tecnico = document.getElementById('email_tecnico');
            email_tecnico.innerHTML = tecnico.email;
            var points_tecnico = document.getElementById('points_tecnico');
            points_tecnico.innerHTML = "Puntos: " + tecnico.points;
            points_tecnico.setAttribute("class", "special");


        })
                .fail(function (xhr) {
                    $("#results").load("index.php?module=products&function=view_error_false&view_error=false");
                });
    });
});
