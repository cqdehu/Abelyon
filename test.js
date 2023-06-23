function getOperationValue(callback) {
    $.ajax({
        type: "POST",
        url: "getCookie.php",
        data: { json_data: "json" },
        success: function (response) {
            var list = JSON.parse(response);
            var operation = list[0]
            callback(operation)
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}

function getDifficultyValue() {
    $.ajax({
        type: "POST",
        url: "getCookie.php",
        data: { json_data: "json" },
        success: function (response) {
            var list = JSON.parse(response);
            var difficulty = list[1]

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}

function getLevelValue() {
    $.ajax({
        type: "POST",
        url: "getCookie.php",
        data: { json_data: "json" },
        success: function (response) {
            var list = JSON.parse(response);
            var level = list[2]

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}


getOperationValue()

function operation_stat() {
    getOperationValue(function(operation){
        $("#operation").text(operation)
    })
}





function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function getOperation(o) {
    if (o == "addition") {
        return "+";
    }
    if (o == "subtraction") {
        return "-";
    }
    if (o == "multiplication") {
        return "*";
    }
    if (o == "division") {
        return "/";
    }
}