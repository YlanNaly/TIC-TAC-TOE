<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">
    <title>TIC TAC TOE</title>
</head>
<body>
    <main class="background">
            <section class="title">
                <h1>TIC TAC TOE</h1>
            </section>
            <section class="display">
                Player <span id="PlayerX" class="display-player PlayerX">X</span>'s turn  
            </section>
            <section id="container" class="container">
                <div class="tile"></div>
                <div class="tile"></div>
                <div class="tile"></div>
                <div class="tile"></div>
                <div class="tile"></div>
                <div class="tile"></div>
                <div class="tile"></div>
                <div class="tile"></div>
                <div class="tile"></div>
            </section>
            <section class="display announcer hide"></section>
            <section class="controls">
                <button onclick="ClickMe()" type="Reset" id="reset">Reset</button>
            </section>
    </main>
    <script src="main.js"></script>
    <script>
 const ClickMe = () =>{
     window.location.reload()
   }
    </script>
</body>
</html>