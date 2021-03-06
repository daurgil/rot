<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/3.51/jquery.form.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.0.1/min/dropzone.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.0.1/dropzone.css">
<!--Script for dropzone and jquery.form-->
<script type="text/javascript" src="<?php echo USERS_JS_PATH ?>controller_products.js" ></script>
<p>Introduzca los datos del producto</p>
<!--Form start-->
<form id="form" name="form">
    <br>
    <br>
    <br>
    <br>

    <table width="50%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td>Nombre</td>
            <td><input type="text" id="name" name="name" placeholder="name"  required="required" value="">
            <div id="e_name"></div>
            </td>
        </tr>
        <tr>
            <td>DNI</td>
            <td><input type="text" id="dni" name="dni" placeholder="dni" value="">
            <div id="e_dni"></div>
            </td>
        </tr>
        <tr>
            <td>Titulos</td>
            <td><textarea rows="4" cols="40" id="titulos" name="titulos" placeholder="Titulos" value=""></textarea>
            <div id="e_titulos"></div></td>
        </tr>
        <tr>
           <td>Email</td>
           <td><input type="email" id="email" name="email" placeholder="email"  value="">
            <div id="e_email"></div>
           </td>
        </tr>
        <tr>
           <td>Telefono</td>
           <td><input type="text" id="phone" name="phone" placeholder="phone" value="">
            <div id="e_phone"></div>
           </td>
        </tr>
        <tr>
           <!--<td>Colores</td>
           <td>
               <input type="checkbox" id="colors[]" name="colors[]" class="colors" value="red">Rojo</input><br>
               <input type="checkbox" id="colors[]" name="colors[]" class="colors" value="blue">Azul</input><br>
               <input type="checkbox" id="colors[]" name="colors[]" class="colors" value="green">Verde</input><br>
               <input type="checkbox" id="colors[]" name="colors[]" class="colors" value="white">Blanco</input><br>
               <input type="checkbox" id="colors[]" name="colors[]" class="colors" value="black">Negro</input><br>
               <input type="checkbox" id="colors[]" name="colors[]" class="colors" value="others">Otros</input><br>
               <div id="e_colors"></div>
           </td>-->
           <td rowspan="2">
               <div class="form-group" id="progress">
                   <div id="bar"></div>
                   <div id="percent">0%</div>
               </div>

               <div class="msg"></div>
               <br/>
               <div id="dropzone" class="dropzone"></div><br/>


           </td>
        </tr>
        <tr>
            <td>Genero</td>
            <td>
                <input type="radio" id="gender" name="gender" class="gender" value="man" checked>Hombre</input><br>
                <input type="radio" id="gender" name="gender" class="gender" value="woman">Mujer</input>
            </td>
        </tr>
        <tr>
            <td>Pais</td>
            <td>
                <select name="country" id="country">
                  </select>
          				<div id="e_country"></div>

      			</td>
        </tr>
        <tr>
            <td>Provincia</td>
            <td>
                <select name="province" id="province">
                </select>
          				<div id="e_province"></div>

      			</td>
        </tr>
        <tr>
            <td>Localidad</td>
            <td>
                <select name="location" id="location">
                </select>
          				<div id="e_location"></div>

          	</td>
        </tr>
        <tr>
            <td>Dirección</td>
            <td>
                <input id="street" type="text" name="street" readonly="readonly" value="">
                <div id="e_street"></div>
            </td>
        </tr>
        <tr>
            <td>Fecha Nacimiento</td>
            <td>
                <input id="date_birthday" type="text" name="date_birthday" readonly="readonly" value="">
                <div id="e_date_birthday"></div>
            </td>
        </tr>
        <!--<tr>
            <td>Fecha caducidad</td>
            <td>
                <input id="date_expiration" type="text" name="date_expiration" readonly="readonly" value="">
                <div id="e_date_expiration"></div>
            </td>
        </tr>-->
        <tr>
            <td>
              <button type="button" id="SubmitProducts" name="SubmitProducts" class="btn btn-primary btn-lg" value="submit">Enviar</button>
            </td>
        </tr>
    </table><!--table ENDS-->

</form><!--FORM ENDS-->
