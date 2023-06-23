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

function getDifficultyValue(callback) {
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

function getLevelValue(callback) {
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
    getOperationValue(function (operation) {
        $("#operation").text(operation)
    })
}

operationStat()



function difficultyStat() {
    getDifficultyValue(function (difficulty) {
        $("#difficulty").text(difficulty)
    })
}

difficultyStat()



function levelStat() {
    getLevelValue(function (level) {
        $("#level").text(level)
    })
}

levelStat()



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function getOperator() {
    getOperationValue(function (operation) {
        if (operation == "addition") {
            return "+";
        }
        if (operation == "subtraction") {
            return "-";
        }
        if (operation == "multiplication") {
            return "*";
        }
        if (operation == "division") {
            return "/";
        }
    })
}



$(document).ready(function () {
    getOperator()
    $("#operator").text(getOperator())
})