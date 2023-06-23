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
            callback(difficulty)
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
            callback(level)
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}


function operationStat() {
    getOperationValue(function(operation){
        $("#operation").text(operation)
    })
}

operationStat()



function difficultyStat() {
    getDifficultyValue(function(difficulty){
        $("#difficulty").text(difficulty)
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