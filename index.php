<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TEST</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.0/dist/js.cookie.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
</head>

<body class="bg-dark">

    <div class="flex flex-col w-full justify-center">
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </div>

    <script src="/test.js"></script>
</body>

</html>

<?php 
    $operation = $_COOKIE["operation"];
    echo "<b>{$operation}</b>";
?>