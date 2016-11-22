function validate_dni(dni) {
    if (dni.length > 0) {
        var regexp = /^[A-z]?\d{8}[A-z]$/;
        return regexp.test(dni);
    }
    return false;
}

function validate_name(name) {
    if (name.length > 0) {
        // var regexp = /^[a-zA-Z0-9]*$/;
        var regexp = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
        return regexp.test(name);
    }
    return false;
}

function validate_surnames(surnames) {
    if (surnames.length > 0) {
        // var regexp = /^[a-zA-Z0-9]*$/;
        var regexp = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
        return regexp.test(surnames);
    }
    return false;
}

function validate_mobile(mobile){
    if (mobile.length > 0){
        var regexp = /^[9|6|7][0-9]{8}$/;
        return regexp.test(mobile);
    }
    return false;
}

function validate_email(email) {
    if (email.length > 0) {
        var regexp = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+.)+[A-Z]{2,4}$/i;
        return regexp.test(email);
    }
    return false;
}

function validate_password(password) {
    if (password.length > 0) {
        var regexp = /^[a-zA-Z0-9]{6,12}$/;
        return regexp.test(password);
    }
    return false;
}

function validate_password2(password, password2) {
	if(password === password2){
		return true;
    }
    return false;
}

function validate_date_birthday(date_birthday) {
    if (date_birthday.length > 0) {
        var regexp = /\d{2}.\d{2}.\d{4}$/;
        return regexp.test(date_birthday);
    }
    return false;
}

function validate_country(country) {
    if (country == null) {
        //return 'default_country';
        return false;
    }
    if (country.length == 0) {
        //return 'default_country';
        return false;
    }
    if (country === 'Select country') {
        //return 'default_country';
        return false;
    }
    if (country.length > 0) {
        var regexp = /^[a-zA-Z]*$/;
        return regexp.test(country);
    }
    return false;
}

function validate_province(province) {
    if (province == null) {
        return 'default_province';
    }
    if (province.length == 0) {
        return 'default_province';
    }
    if (province === 'Select province') {
        //return 'default_provincia';
        return false;
    }
    if (province.length > 0) {
        var regexp = /^[a-zA-Z0-9, ]*$/;
        return regexp.test(province);
    }
    return false;
}

function validate_city(city) {
    if (city == null) {
        return 'default_city';
    }
    if (city.length == 0) {
        return 'default_city';
    }
    if (city === 'Select city') {
        //return 'default_city';
        return false;
    }
    if (city.length > 0) {
        var regexp = /^[a-zA-Z/, -'()]*$/;
        return regexp.test(city);
    }
    return false;
}

function validate_street(street) {
    if (street.length > 0) {
        //var regexp = /^[0-9a-zA-Z]+[\-'\s]?[0-9a-zA-Z ]+$/;
        var regexp = /[A-Za-z0-9'\.\-\s\,]+$/;
        return regexp.test(street);
    }
    return false;
}

function validate_user() {
    var result = true;

    console.log("validate_user");
    var dni = document.getElementById('dni').value;
  	var name = document.getElementById('name').value;
  	var surnames = document.getElementById('surnames').value;
    var mobile = document.getElementById('mobile').value;
  	var email = document.getElementById('email').value;
  	var password = document.getElementById('password').value;
  	var password2 = document.getElementById('password2').value;
    var date_birthday = document.getElementById('date_birthday').value;
    var type = $('input[name="type"]:checked').val();
    var country = $("#country").val();
    var province = $("#province").val();
    var city = $("#city").val();
    var street = document.getElementById('street').value;

	var v_dni = validate_dni(dni);
	var v_name = validate_name(name);
	var v_surnames = validate_surnames(surnames);
  var v_mobile = validate_mobile(mobile);
	var v_email = validate_email(email);
	var v_password = validate_password(password);
	var v_password2 = validate_password2(password, password2);
	var v_date_birthday = validate_date_birthday(date_birthday);
	var v_country = validate_country(country);
	var v_province = validate_province(province);
	var v_city = validate_city(city);
  var v_street = validate_street(street);

    if (!v_dni) {
          document.getElementById('error_dni').innerHTML = "Invalid input DNI";
          result = false;
      } else {
          document.getElementById('error_dni').innerHTML = "";
    }

	if (!v_name) {
        document.getElementById('error_name').innerHTML = "Invalid input name";
        result = false;
    } else {
        document.getElementById('error_name').innerHTML = "";
  }

	if (!v_surnames) {
        document.getElementById('error_surnames').innerHTML = "Invalid input surnames";
        result = false;
    } else {
        document.getElementById('error_surnames').innerHTML = "";
  }

  if (!v_mobile) {
        document.getElementById('error_mobile').innerHTML = "Invalid mobile number must start with 6/7/9";
        result = false;
    } else {
        document.getElementById('error_mobile').innerHTML = "";
  }

	if (!v_email) {
        document.getElementById('error_email').innerHTML = "Invalid email value";
        result = false;
    } else {
        document.getElementById('error_email').innerHTML = "";
  }

	if (!v_password) {
        document.getElementById('error_password').innerHTML = "Password must have 6 chars/numbers";
        result = false;
    } else {
        document.getElementById('error_password').innerHTML = "";
  }

	if (!v_password2) {
        document.getElementById('error_password2').innerHTML = "Passwords don't match";
        result = false;
    } else {
        document.getElementById('error_password2').innerHTML = "";
  }

  if (!v_date_birthday) {
      document.getElementById('error_date_birthday').innerHTML = "Incorrect birth date";
      result = false;
  } else {
      document.getElementById('error_date_birthday').innerHTML = "";
  }

  if (!v_country) {
      document.getElementById('error_country').innerHTML = "Select one Country";
      result = false;
  } else {
      document.getElementById('error_country').innerHTML = "";
  }

  if (!v_province) {
      document.getElementById('error_province').innerHTML = "Select Province";
      result = false;
  } else {
      document.getElementById('error_province').innerHTML = "";
  }

  if (!v_city) {
      document.getElementById('error_city').innerHTML = "Select one city";
      result = false;
  } else {
      document.getElementById('error_city').innerHTML = "";
  }

  if (!v_street) {
      document.getElementById('error_street').innerHTML = "Invalida street";
      result = false;
  } else {
      document.getElementById('error_street').innerHTML = "";
  }

    if (result) {

        if (province === null) {
            province = 'default_province';
        }else if (province.length === 0) {
            province = 'default_province';
        }else if (province === 'Select province') {
            return 'default_province';
        }

        if (city === null) {
            city = 'default_city';
        }else if (city.length === 0) {
            city = 'default_city';
        }else if (city === 'Select city') {
            return 'default_city';
        }

        var data = {"dni": dni, "name": name, "surnames": surnames, "mobile": mobile,"email": email,
        "password": password, "password2":password2, "date_birthday": date_birthday, "type": type, "country": country,
        "province": province, "city": city, "street": street
        }

        var data_users_json = JSON.stringify(data);
        console.log(data_users_json);

        // $.post('index.php?module=users&function=alta_users', { alta_users_json: data_users_json },
        $.post('../../users/alta_users/', { alta_users_json: data_users_json },

            function (response) {
              console.log("response PHP: "+response);
              console.log(response.redirect);
                if(response.success){
                    window.location.href=response.redirect;
                }

        }, "json")
        //.fail(function(xhr) {
        .fail( function( xhr, textStatus, errorThrown ){
            console.log(xhr.responseText);


            // if (xhr.status === 0) {
            //     alert('Not connect: Verify Network.');
            // } else if (xhr.status == 404) {
            //     alert('Requested page not found [404]');
            // } else if (xhr.status == 500) {
            //     alert('Internal Server Error [500].');
            // } else if (textStatus === 'parsererror') {
            //     alert('Requested JSON parse failed.');
            // } else if (textStatus === 'timeout') {
            //     alert('Time out error.');
            // } else if (textStatus === 'abort') {
            //     alert('Ajax request aborted.');
            // } else {
            //     console.log("entra al último");
            //     //$.get( "modules/users/view/error.php");
            //     //window.location.href=xhr.responseText;
            //     //alert('Uncaught Error: ' + xhr.responseText);
            // }

            if (xhr.responseJSON == 'undefined' && xhr.responseJSON === null ){
                xhr.responseJSON = JSON.parse(xhr.responseText);
            }

            $("#e_avatar").html(xhr.error_avatar);


            if(!(xhr.responseJSON.success1)){
                $("#progress").hide();
                $('.msg').text('').removeClass('msg_ok');
                $('.msg').text('Error Upload image!!').addClass('msg_error').animate({ 'right' : '300px' }, 300);
            }

            if (xhr.responseJSON !== undefined && xhr.responseJSON !== null) {
                if (xhr.responseJSON.error.dni !== undefined && xhr.responseJSON.error.dni !== null) {
                    $("#error_dni").text(xhr.responseJSON.error.dni);
                }
            }
            if (xhr.responseJSON !== undefined && xhr.responseJSON !== null) {
                if (xhr.responseJSON.error.name !== undefined && xhr.responseJSON.error.name !== null) {
                    $("#error_name").text(xhr.responseJSON.error.name);
                }
            }
            if (xhr.responseJSON !== undefined && xhr.responseJSON !== null) {
                if (xhr.responseJSON.error.surnames !== undefined && xhr.responseJSON.error.surnames !== null) {
                    $("#error_surnames").text(xhr.responseJSON.error.surnames);
                }
            }
            if (xhr.responseJSON !== undefined && xhr.responseJSON !== null) {
                if (xhr.responseJSON.error.mobile !== undefined && xhr.responseJSON.error.mobile !== null) {
                    $("#error_mobile").text(xhr.responseJSON.error.mobile);
                }
            }
            if (xhr.responseJSON !== undefined && xhr.responseJSON !== null) {
                if (xhr.responseJSON.error.email !== undefined && xhr.responseJSON.error.email !== null) {
                    $("#error_email").text(xhr.responseJSON.error.email);
                }
            }
            if (xhr.responseJSON !== undefined && xhr.responseJSON !== null) {
                if (xhr.responseJSON.error.password !== undefined && xhr.responseJSON.error.password !== null) {
                    $("#error_password").text(xhr.responseJSON.error.password);
                }
            }
            if (xhr.responseJSON !== undefined && xhr.responseJSON !== null) {
                if (xhr.responseJSON.error.password2 !== undefined && xhr.responseJSON.error.password2 !== null) {
                    $("#error_password2").text(xhr.responseJSON.error.password2);
                }
            }
            if (xhr.responseJSON !== undefined && xhr.responseJSON !== null) {
                if (xhr.responseJSON.error.date_birthday !== undefined && xhr.responseJSON.error.date_birthday !== null) {
                    $("#error_date_birthday").text(xhr.responseJSON.error.date_birthday);
                }
            }
            if (xhr.responseJSON !== undefined && xhr.responseJSON !== null) {
                if (xhr.responseJSON.error.pais !== undefined && xhr.responseJSON.error.pais !== null) {
                    $("#error_pais").text(xhr.responseJSON.error.pais);
                }
            }
            if (xhr.responseJSON !== undefined && xhr.responseJSON !== null) {
                if (xhr.responseJSON.error.provincia !== undefined && xhr.responseJSON.error.provincia !== null) {
                    $("#error_provincia").text(xhr.responseJSON.error.provincia);
                }
            }
            if (xhr.responseJSON !== undefined && xhr.responseJSON !== null) {
                if (xhr.responseJSON.error.city !== undefined && xhr.responseJSON.error.city !== null) {
                    $("#error_city").text(xhr.responseJSON.error.city);
                }
            }
            if (xhr.responseJSON !== undefined && xhr.responseJSON !== null) {
                if (xhr.responseJSON.error.street !== undefined && xhr.responseJSON.error.street !== null) {
                    $("#error_street").text(xhr.responseJSON.error.street);
                }
            }
        });
    }
}

Dropzone.autoDiscover = false;
$(document).ready(function () {

    $("#progress").hide();

    $.datepicker.setDefaults($.datepicker.regional["es"]);
    $('#date_birthday').datepicker({
      dateFormat: 'dd/mm/yy',
      changeMonth: true,
      changeYear: true,
      yearRange: "-100:-18"
    });

    $('#submit_user').click(function () {
      console.log("submit_user");
        validate_user();
    });

    //$.get( "modules/users/controller/controller_users.class.php?load_data=true",
    // $.get( "index.php?module=users&function=load_data_users&load_data=true",
    $.post("../../users/load_data_users/",{'load_data':true},
        function( response ) {
            //alert(response.user);
            if(response.user === ""){
                $("#dni").val('');
                $("#name").val('');
                $("#surnames").val('');
                $("#mobile").val('');
                $("#email").val('');
                $("#password").val('');
                $("#password2").val('');
                $("#date_birthday").val('');
                $("#street").val('');
            }else{
                $("#dni").attr("value",response.user.dni);
                $("#name").attr("value",response.user.name);
                $("#surnames").attr("value",response.user.surnames);
                $("#mobile").attr("value",response.user.mobile);
                $("#email").attr("value",response.user.email);
                $("#date_birthday").attr("value",response.user.date_birthday);
                $("#country").attr("value",response.user.country);
                $("#province").attr("value",response.user.province);
                $("#city").attr("value",response.user.city);
                $("#street").attr("value",response.user.street);
            }
    }, "json");

    $("#dropzone").dropzone({
			url: "../../users/upload_users/",
      params:{ upload: true },
			addRemoveLinks: true,
			maxFileSize: 1000,
			dictResponseError: "Server error",
			acceptedFiles: 'image/*,.jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF,.rar,application/pdf,.psd',

			init: function() {
			    this.on("success", function(file, response) {
            console.log(file);
			        // alert(response);
			        $("#progress").show();
              $("#bar").width('100%');
        			$("#percent").html('100%');
        			$('.msg').text('').removeClass('msg_error');
        			$('.msg').text('Success Upload image!!').addClass('msg_ok').animate({ 'right' : '300px' }, 300);
			    });
		    },
			complete: function(file){
        // console.log(file);
				//if(file.status == "success"){
					//alert("El archivo se ha subido correctamente: " + file.street);
				//}
			},
			error: function(file){
				//alert("Error subiendo el archivo " + file.name);
			},
			removedfile: function(file, serverFileName){
				var name = file.name;
        alert(name);
				$.ajax({
					type: "POST",
					url: "../../users/delete_users/",
					data: {"filename":name, "delete":true},
					success: function(data){
					    $("#progress").hide();
    				  $('.msg').text('').removeClass('msg_ok');
    				  $('.msg').text('').removeClass('msg_error');
    				  $("#e_avatar").html("");

						var json = JSON.parse(data);
            console.log(json);
						if(json.res === true){
						    var element;
							if ((element = file.previewElement) != null){
                console.log(element);
							    element.parentNode.removeChild(file.previewElement);
							    //alert("Imagen eliminada: " + name);
							}else{
							    false;
							}
						}else{ //json.res == false, elimino la imagen también
						    var element;
						    if ((element = file.previewElement) != null){
							    element.parentNode.removeChild(file.previewElement);
							}else{
							    false;
							}
						}
					}
				});
			}
		});
    //Dependent combos //////////////////////////////////
    load_countries_v1();
    $("#province").empty();
    $("#province").append('<option value="" selected="selected">Select Province</option>');
    $("#province").prop('disabled', true);
    $("#city").empty();
    $("#city").append('<option value="" selected="selected">Select city</option>');
    $("#city").prop('disabled', true);

    $("#country").change(function() {
		var country = $(this).val();
		var province = $("#province");
		var city = $("#city");
    console.log(country);
    if(country !== 'ES'){
	         province.prop('disabled', true);
	         city.prop('disabled', true);
	         $("#province").empty();
		       $("#city").empty();
		}else{
	         province.prop('disabled', false);
	         city.prop('disabled', false);
	         load_provinces_v1();
		}//End else
	});

  $("#province").change(function() {
		var prov = $(this).val();
		if(prov > 0){
			load_cities_v1(prov);
		}else{
			$("#city").prop('disabled', false);
		}
	});
});

function load_countries_v2(cad) {
    $.getJSON( cad, function(data) {
      $("#country").empty();
      $("#country").append('<option value="" selected="selected">Select country</option>');

      $.each(data, function (i, valor) {
        $("#country").append("<option value='" + valor.sISOCode + "'>" + valor.sName + "</option>");
      });
    })
    .fail(function() {
        alert( "error load_countries" );
    });
}

function load_countries_v1() {

    // $.get( "index.php?module=users&function=load_country_users&load_country=true",
    $.post("../../users/load_countries_users/",{ load_country:true },
        function( response ) {
            //alert(response);
            //console.log("response: "+response);
            if(response.match(/error/)){
                //console.log("if de response error");
                load_countries_v2("../../resources/ListOfCountryNamesByName.json");
            }else{
                //console.log("else de response error");
                // load_countries_v2("modules/users/controller/controller_users.class.php?load_pais=true"); //oorsprong.org
                // load_countries_v2("index.php?module=users&function=load_country_users&load_country=true"); //oorsprong.org
                load_countries_v2("../users/load_countries_users/",{ load_country:true }); //oorsprong.org
            }
    })
    .fail(function(response) {
        load_countries_v2("../../resources/ListOfCountryNamesByName.json");
    });
}

function load_provinces_v2() {
    $.get("../../resources/provinciasypoblaciones.xml", function (xml) {
      $("#province").empty();
	    $("#province").append('<option value="" selected="selected">Select province</option>');

        $(xml).find("provincia").each(function () {
            var id = $(this).attr('id');
            var name = $(this).find('nombre').text();
            $("#province").append("<option value='" + id + "'>" + name + "</option>");
        });
    })
    .fail(function() {
        alert( "error load_provinces" );
    });
}

function load_provinces_v1() { //provinciasypoblaciones.xml - xpath
    //$.get( "modules/users/controller/controller_users.class.php?load_provincias=true",
    // $.get( "index.php?module=users&function=load_provinces_users&load_provinces=true",
    $.post("../../users/load_provinces_users",{'load_provinces':true},
        function( response ) {
          console.log("Response: "+response);
          $("#province").empty();
          $("#province").append('<option value="Select province" selected="selected">Select province</option>');

            var json = JSON.parse(response);
		        var provinces=json.provinces;

            if(provinces === 'error'){
                load_provinces_v2();
            }else{
                for (var i = 0; i < provinces.length; i++) {
        		    $("#province").append("<option value='" + provinces[i].id + "'>" + provinces[i].nombre + "</option>");
    		    }
            }
    })
    .fail(function(response) {
        load_provinces_v2();
    });
}

function load_cities_v2(prov) {
    // $.get("resources/provinciasypoblaciones.xml", function (xml) {
    $.get("../../resources/provinciasypoblaciones.xml", function (xml) {
      $("#city").empty();
  	  $("#city").append('<option value="" selected="selected">Select city</option>');

		$(xml).find('provincia[id=' + prov + ']').each(function(){
    		$(this).find('localidad').each(function(){
    			 $("#city").append("<option value='" + $(this).text() + "'>" + $(this).text() + "</option>");
    		});
        });
	})
	.fail(function() {
        alert( "error load_cities" );
    });
}

function load_cities_v1(prov) { //provinciasypoblaciones.xml - xpath
    var datos = { idPoblac : prov  };
	//$.post("modules/users/controller/controller_users.class.php", datos, function(response) {
	// $.post("index.php?module=users&function=load_cities_users", datos, function(response) {
  $.post("../../users/load_cities_users/", datos, function(response) {
	    //alert(response);
        var json = JSON.parse(response);
		var cities=json.cities;

    $("#city").empty();
	  $("#city").append('<option value="" selected="selected">Select city</option>');

        if(cities === 'error'){
            load_cities_v2(prov);
        }else{
            for (var i = 0; i < cities.length; i++) {
            $("#city").append("<option value='" + cities[i].poblacion + "'>" + cities[i].poblacion + "</option>");
        }
        }
	})
	.fail(function() {
        load_cities_v2(prov);
    });
}
