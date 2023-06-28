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

<body class="bg-neutral-900">

    <div class="flex justify-center items-center h-screen">
        <div class="border rounded-md p-3 bg-white">
            <form action="index.php" method="get">
                <div class="flex flex-col">
                    <div class="mb-2">
                        <label for="">Username</label><br>
                        <input type="text" name="username">
                    </div>
                    <div class="mb-2">
                        <label for="">Password</label><br>
                        <input type="text" name="password">
                    </div>
                    <div>
                        <button type="submit" value="Login">Log In</button>
                    </div>
                    <div>
                        <?php
                        echo $_GET["username"];
                        echo $_GET["password"];
                        ?>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <script src="/test.js"></script>
</body>

</html>