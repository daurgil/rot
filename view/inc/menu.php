<body>
    <div class="navbar navbar-inverse navbar-fixed-top" >
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="<?php amigable('?module=main'); ?>">YOUR LOGO</a>
            </div>

            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li class="
                            <?php if(isset($_GET['module']) === 'main')
                                     echo'active';
                                  else
                                     echo 'deactivate';
                            ?>"><a href="<?php amigable('?module=main'); ?>">HOME</a></li>
                    <li class="
                            <?php if(isset($_GET['module']) === 'products')
                                     echo'active';
                                  else
                                     echo 'deactivate';
                            ?>"><a href="<?php amigable('?module=products&function=list_products'); ?>">PRODUCTS</a></li>
					          <li class="
                            <?php if(isset($_GET['module']) === 'users')
                                     echo'active';
                                  else
                                     echo 'deactivate';
                            ?>"><a href="<?php amigable('?module=users&function=form_users'); ?>">USERS</a></li>
					          <!--<li><a href="index.php?module=portfolio">PORTFOLIO</a></li>
                    <li><a href="index.php?module=pricing">PRICING</a></li>-->
                    <li class="
                            <?php if(isset($_GET['module']) === 'contact')
                                     echo'active';
                                  else
                                     echo 'deactivate';
                            ?>"><a href="<?php amigable('?module=contact&function=view_contact');?>">CONTACT</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!--/.NAVBAR END-->
