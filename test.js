function getCookie() {
    $.ajax({
        type: "POST",
        url: "getCookie.php",
        data: { json_data: "json" },
        success: function (response) {
            var list = JSON.parse(response);
            operation = list[0]
            difficulty = list[1]
            level = list[2]
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}

$(document).ready(function(){
    $("#operation").text(operation)
    $("#difficulty").text(difficulty)
    $("#level").text(level)
})