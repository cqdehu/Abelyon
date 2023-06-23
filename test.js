function getCookie() {
    $.ajax({
        type: "POST",
        url: "getCookie.php",
        data: { json_data: "json" },
        success: function (response) {
            var list = JSON.parse(response);
            var operation = list[0]
            var difficulty = list[1]
            var level = list[2]
            return operation
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}

$(document).ready(function(){
    $("#operation").text(getCookie())
})