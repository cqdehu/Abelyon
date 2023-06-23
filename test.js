function getCookie() {
    $.ajax({
        type: "POST",
        url: "getCookie.php",
        data: { json_data: json },
        success: function (response) {
            var list = JSON.parse(response);
            console.log(list);
        }
    });
}