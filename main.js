function getOperationValue() {
    var operation = $.cookie("operation")

    var level = $.cookie("level")

    var difficulty = $.cookie("difficulty")

    console.log(`Operation: ${operation} | Level: ${level} | Difficulty: ${difficulty}`)
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

function evaluateExpression(expression) {
    var tokens = expression.split(" ");
    var num1 = parseFloat(tokens[0]);
    var operator = tokens[1];
    var num2 = parseFloat(tokens[2]);

    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return NaN;
    }
}

function getMath() {
    var level = $.cookie("level")
    if (level == "0") {
        rNum1 = 6
        rNum2 = 6
    }
    if (level == "1") {
        rNum1 = 11
        rNum2 = 11
    }
    if (level == "2") {
        rNum1 = 21
        rNum2 = 21
    }

    var num1 = getRandomInt(rNum1);
    var num2 = getRandomInt(rNum2);
    var operation = $.cookie("operation");
    var operator = getOperation(operation);
    var task = num1 + " " + operator + " " + num2;
    $("#operation").text(task);

    var result = evaluateExpression(task);
    return result
}

function handleButtonClick(numberToAdd) {
    var valueLength = $("#userinput").val().length;
    if (valueLength != 5) {
        var userinputValue = $("#userinput").val();
        var result = userinputValue + numberToAdd;
        $("#userinput").val(result);
    }
}

$("#b0").click(function () {
    handleButtonClick(0);
});

$("#b1").click(function () {
    handleButtonClick(1);
});

$("#b2").click(function () {
    handleButtonClick(2);
});

$("#b3").click(function () {
    handleButtonClick(3);
});

$("#b4").click(function () {
    handleButtonClick(4);
});

$("#b5").click(function () {
    handleButtonClick(5);
});

$("#b6").click(function () {
    handleButtonClick(6);
});

$("#b7").click(function () {
    handleButtonClick(7);
});

$("#b8").click(function () {
    handleButtonClick(8);
});

$("#b9").click(function () {
    handleButtonClick(9);
});


$("#bc").click(function () {
    $("#userinput").val("")
})

$("#br").click(function () {
    var last_userinputValue = $("#userinput").val();
    var updatedValue = last_userinputValue.slice(0, -1);
    $("#userinput").val(updatedValue);
})

$("#bn").click(function () {
    var userinputValue = $("#userinput").val();
    if (userinputValue != "") {
        var negative = userinputValue * -1
        $("#userinput").val(negative);
    }
})



var result = getMath(6, 6);

var lastResult;

function saveLastResult(result) {
    lastResult = result;
}

var isButtonDisabled = false;

$("#submit").click(function () {
    if (isButtonDisabled) {
        return; // Ha a gomb letiltva van, ne fusson le a kód
    }

    var valueLength = $("#userinput").val().length;
    var userresult = parseInt($("#userinput").val());

    if (valueLength != 0) {
        if (result === userresult) {
            console.log("Success");
            console.log(userresult);
            console.log(result);
            disableButton();
            $("#submit").toggleClass("btn-success btn-light text-dark text-light")
            $("#progress").toggleClass("bg-light bg-success")
            $("#operation").animate({ opacity: 0 }, 1200);

            setTimeout(function () {
                $("#operation").animate({ opacity: 1 }, 1200);
                $("#progress").toggleClass("bg-light bg-success")
                $("#submit").toggleClass("btn-success btn-light text-dark text-light")
                enableButton();
                $("#userinput").val("");
                result = getMath(5, 5); // Újra generáljuk a getMath-ot
            }, 1350);
            saveLastResult(userresult)
            $("#last_try").text("")

        } else {
            console.log("Warning");
            console.log(result);
            console.log(userresult);
            disableButton();
            $("#submit").toggleClass("btn-danger btn-light text-dark text-light")
            $("#userinput").addClass("shake-element");
            $("#submit").addClass("shake-element");
            $("#progress").toggleClass("bg-light bg-danger")
            $("#operation").animate({ opacity: 0 }, 1200);

            setTimeout(function () {
                $("#operation").animate({ opacity: 1 }, 1200);
                $("#progress").toggleClass("bg-light bg-danger")
                $("#submit").toggleClass("btn-danger btn-light text-dark text-light")
                enableButton();
                $("#userinput").val("");
                $("#userinput").removeClass("shake-element");
                $("#submit").removeClass("shake-element");
                result = getMath(5, 5); // Újra generáljuk a getMath-ot
            }, 1350);
            saveLastResult(userresult)
            $("#last_try").text(lastResult)
            //if () {

            //}
        }
    }
});

function disableButton() {
    isButtonDisabled = true;
    $("#submit").prop("disabled", true);
}

function enableButton() {
    isButtonDisabled = false;
    $("#submit").prop("disabled", false);
}

function displayStat() {
    var level = $.cookie("level")
    var difficulty = $.cookie("difficulty")
    $("#display_level").text(`Level ${level} | ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`)
}

displayStat()



//Settings
$(document).ready(function () {
    $("#settings_icon").click(function () {
        $("#settings").offcanvas('show');
    })
})

//Exit

$(document).ready(function () {
    $("#exit_btn").click(function () {
        $("#ExitModal").modal('show');
    });
});


$(document).ready(function () {
    $("#yes_exit_btn").click(function () {
        $.ajax({
            url: 'exit.php',
            method: 'POST',
            dataType: 'json', 
            success: function (response) {
                console.log(response);
            },
            error: function (xhr, status, error) {
                console.log(error);
            }
        })
    })
})
