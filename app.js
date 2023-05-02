var a = function (x) {
        if (x === "") {
                return "...";
        }
        let greater = "";
        let dividned;
        let divisible;
        if (isNaN(x)) {
                return x + " is NOT a Number. (Contains non-numeric characters)";
        }
        if (x <= 1) {
               return "<span style='color:red;font-size:22px;'>NO</span><br> " + x + " is not prime by definition" 
        }
        if (x <= 1 || Number.isInteger(parseFloat(x)) === false) {
                return "<span style='color:red;font-size:22px;'>NO</span><br> " + x + " is NOT a prime Number due to mathematical logic.";
        }
        if (Math.pow(2, 53) <= parseInt(x)) {
                return " (if your Number is with absolute value equal to 2^53 or greater you will probably get wrong answer due to base 2 numeral system limits)";
        }
        x = x + "";
        console.log("input : " + x);
        if (parseInt(x) > 2 && x.slice(x.length - 1) % 2 === 0) {
                dividned = parseInt(x) / 2;
                return (
                        "<span style='color:red;font-size:22px;'>NO</span><br> " +
                        x +
                        " is NOT a prime Number, " +
                        "it's divisible by 2, " +
                        "2" +
                        " * " +
                        dividned +
                        " = " +
                        x
                );
        } else if (parseInt(x) > 5 && x.slice(x.length - 1) % 5 === 0) {
                dividned = parseInt(x) / 5;
                return (
                        "<span style='color:red;font-size:22px;'>NO</span><br> " +
                        x +
                        " is NOT a prime Number, " +
                        "it's divisible by 5, " +
                        "5" +
                        " * " +
                        dividned +
                        " = " +
                        x
                );
        }
        for (let i = 2; i <= Math.sqrt(x); i++) {
                if (x % i === 0) {
                        divisible = i;
                        dividned = x / divisible;
                        return (
                                "<span style='color: red;font-size:22px;'>NO</span><br> " +
                                x +
                                " is NOT a prime Number, " +
                                "it's divisible by " +
                                divisible +
                                ", " +
                                divisible +
                                " * " +
                                dividned +
                                " =" +
                                " " +
                                x +
                                greater
                        );
                }
        }
        return "<span style='color: green;font-size:22px;'>YES</span><br> " + x + " is a prime Number" + greater;
};
function Submit() {
        document.getElementById("display").innerHTML = a(document.getElementById("number").value);
        document.getElementById("number").value = "";
}

function calculate(form) {
        var num = parseInt(form.number.value);

        if (isNaN(num) || num < 0) {
                form.result.value = form.number.value + " is not a valid number!  Try again!";
        }

        if (num == 1) {
                form.result.value = "1 is not prime by definition!";
        }
        if (num == 0) {
                form.result.value = "0 is not a valid number.";
        }
        if (num == 2) {
                form.result.value = "2 is a prime number!";
        }

        for (var i = 2; i < num; i++) {
                if (num % i == 0) {
                        var prime = "yes";

                        form.result.value = num + " is not prime.  It is divisible by " + i + ".";

                        break;
                }

                if (num % i != 0) var prime = "no";
        }

        if (prime == "no") form.result.value = num + " is prime!";
}
