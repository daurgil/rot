<script type="text/javascript" src="<?php echo PRODUCTS_JS_LIB_PATH ?>jquery.bootpag.min.js"></script>
<script type="text/javascript" src="<?php echo PRODUCTS_JS_PATH ?>list_products.js" ></script>
<link rel="stylesheet" href="<?php echo PRODUCTS_CSS_PATH ?>products.css" media="screen" title="no title">

<br><br><br><br><br><br><br>

<center>
<form name="search_prod" id="search_prod" class="search_prod">
    <input type="text" value="" placeholder="Search Product ..." class="input_search" id="keyword" list="datalist">
    <!-- <div id="results_keyword"></div> -->
    <input name="Submit" id="Submit" class="button_search" type="button" />
</form>
</center>

<div id="results"></div>

<center>
    <div class="pagination"></div>
</center>

<!-- modal window details_product -->
<section >
    <div class="container" id="product">
        <div class="media">
            <!--<div class="pull-left">
                <div id="img_prod" class="img_product"></div>
            </div>-->
            <div class="media-body">
                <div id="text-product">
                <h3 class="media-heading title-product"  id="name_tecnico"></h3>
                <p class="text-limited" id="phone_tecnico"></p>
                <br>
                <p class="text-limited" id="email_tecnico"></p>
                <br>
                <h5 > <strong  id="points_tecnico"></strong> </h5>
                </div>

            </div>
        </div>
    </div>
</section>
