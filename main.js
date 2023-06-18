function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getOperation(o) {
    if (o == 1) {
        return "+";
    }
    if (o == 2) {
        return "-";
    }
    if (o == 3) {
        return "*";
    }
    if (o == 4) {
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

function getTask(rNum1, rNum2) {
    var num1 = getRandomInt(rNum1);
    var num2 = getRandomInt(rNum2);
    var operation = getOperation(1);
    var task = num1 + " " + operation + " " + num2;
    $("#operation").text(task);

    var result = evaluateExpression(task);
    return result
}


$("#b0").click(function () {
    var valueLength = $("#userinput").val().length;
    if (valueLength != 5) {
        var userinputValue = $("#userinput").val();
        var numberToAdd = 0;
        var result = userinputValue + numberToAdd;
        $("#userinput").val(result)
    }
})

$("#b1").click(function () {
    var valueLength = $("#userinput").val().length;
    if (valueLength != 5) {
        var userinputValue = $("#userinput").val();
        var numberToAdd = 1;
        var result = userinputValue + numberToAdd;
        $("#userinput").val(result)
    }
})

$("#b2").click(function () {
    var valueLength = $("#userinput").val().length;
    if (valueLength != 5) {
        var userinputValue = $("#userinput").val();
        var numberToAdd = 2;
        var result = userinputValue + numberToAdd;
        $("#userinput").val(result)
    }
})

$("#b3").click(function () {
    var valueLength = $("#userinput").val().length;
    if (valueLength != 5) {
        var userinputValue = $("#userinput").val();
        var numberToAdd = 3;
        var result = userinputValue + numberToAdd;
        $("#userinput").val(result)
    }
})

$("#b4").click(function () {
    var valueLength = $("#userinput").val().length;
    if (valueLength != 5) {
        var userinputValue = $("#userinput").val();
        var numberToAdd = 4;
        var result = userinputValue + numberToAdd;
        $("#userinput").val(result)
    }
})

$("#b5").click(function () {
    var valueLength = $("#userinput").val().length;
    if (valueLength != 5) {
        var userinputValue = $("#userinput").val();
        var numberToAdd = 5;
        var result = userinputValue + numberToAdd;
        $("#userinput").val(result)
    }
})

$("#b6").click(function () {
    var valueLength = $("#userinput").val().length;
    if (valueLength != 5) {
        var userinputValue = $("#userinput").val();
        var numberToAdd = 6;
        var result = userinputValue + numberToAdd;
        $("#userinput").val(result)
    }
})

$("#b7").click(function () {
    var valueLength = $("#userinput").val().length;
    if (valueLength != 5) {
        var userinputValue = $("#userinput").val();
        var numberToAdd = 7;
        var result = userinputValue + numberToAdd;
        $("#userinput").val(result)
    }
})

$("#b8").click(function () {
    var valueLength = $("#userinput").val().length;
    if (valueLength != 5) {
        var userinputValue = $("#userinput").val();
        var numberToAdd = 8;
        var result = userinputValue + numberToAdd;
        $("#userinput").val(result)
    }
})

$("#b9").click(function () {
    var valueLength = $("#userinput").val().length;
    if (valueLength != 5) {
        var userinputValue = $("#userinput").val();
        var numberToAdd = 9;
        var result = userinputValue + numberToAdd;
        $("#userinput").val(result)
    }

})

$("#bc").click(function () {
    $("#userinput").val("")
})

$("#br").click(function () {
    var last_userinputValue = $("#userinput").val();
    var updatedValue = last_userinputValue.slice(0, -1);
    $("#userinput").val(updatedValue);
})



var result = getTask(6, 6);

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
                result = getTask(5, 5); // Újra generáljuk a getTask-ot
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
                result = getTask(5, 5); // Újra generáljuk a getTask-ot
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



//Settings

$("#settings_icon").click(function(){
    $("#settings").offcanvas('show');
})





