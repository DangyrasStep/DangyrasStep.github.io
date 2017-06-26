<!DOCTYPE html>
<html lang="lt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css">
  <link rel="stylesheet" href="../style.css">
  <script src="../scripts.js" charset="utf-8" async></script>
  <title>Pagrindinis</title>
</head>
<body>

    <!-- Pagrininis navBar -->
    <p id="cvv"></p>
    <header id="">
      <nav>
        <!-- <a href=""><div id="logo"></div></a> -->
        <ul>
          <li><a href="../index.php">Pagrindinis</a></li>
          <li><a href="../index.php#cvv">CV</a></li>
          <li><a href="../index.php#portt">Portfolio</a></li>
          <li><a href="../index.php#kontaktai">Kontaktai</a></li>
        </ul>
      </nav>
    </header>


    <!-- CV turinys -->
    <div class="cv">

    </div>
    <!-- Portfolio -->
    <div id="port" class="portDarbai">
      <div class="wrapper">
        <div class="col-6">
          <img style="width:100%;" src="../img/tinklapis1.png" alt="">
          <br style="clear:both;">
        </div>
        <div class="col-6">
          <section style="padding: 25px;">
            <h1>Tinklalapis #1</h1>
            <p></p>
          </section>
        </div>

      </div>
    </div>

    <!-- Footeris -->
    <footer id="kontaktai">
      <div class="wrapper">
        <div class="col-6 col-m2-12">
          <h2>Kontaktai</h2>
          <address>
            <p><span>Telefono numeris:</span><br><a href="tel:+37063316322">+37063316322</a></p>
            <p><span>El. pašto adresas:</span><br><a href="mailto:dangyrasst@gmail.com">dangyrasst@gmail.com</a></p>
          </address>
        </div>
        <div class="col-6 col-m2-12">
          <h2>Rašyti man!</h2>
          <form action="mailto:dangyrasst@gmail.com" method="post" enctype="text/plain">
            <label for="pastas">Pašto adresas:</label><br>
            <input id="pastas" Name="email" type="email" name="" id=""><br>
            <label for="turinys">Turinys:</label><br>
            <textarea id="turinys" name="content"></textarea>
            <input type="submit" value="Siųsti">
          </form>
        </div>
      </div>
    </footer>
</body>
</html>
