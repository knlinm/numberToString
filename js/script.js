
var dct = {
    0: "null",
    1: "eins",
    2: "zwei",
    3: "drei",
    4: "vier",
    5: "fünf",
    6: "sechs",
    7: "sieben",
    8: "acht",
    9: "neun"
};

var secondDct = {
    1: "zehn",
    2: "zwanzig",
    3: "dreißig",
    4: "vierzig",
    5: "fünfzig",
    6: "sechzig",
    7: "siebzig",
    8: "achtzig",
    9: "neunzig"
};

var teenDct = {
    10: "zehn",
    11: "elf",
    12: "zwölf",
    13: "dreizehn",
    14: "vierzehn",
    15: "fünfzehn",
    16: "sechzehn",
    17: "siebzehn",
    18: "achtzehn",
    19: "neunzehn"
};

document.querySelector("button").addEventListener("click", function() {

    var userInput = document.querySelector("input").value.trim();
    var number = Number(userInput);

    if (
        userInput !== "" &&
        Number.isInteger(number) &&
        number >= 0 &&
        number <= 9999
    ) {
        var processNumber = number.toString();
        var count = processNumber.length;
        var result = "";

        if (count == 1) {
            result = dct[number];

        } else if (count == 2) {
            var firstNum = Number(processNumber.charAt(0));
            var secondNum = Number(processNumber.charAt(1));

            if (number < 20) {
                result = teenDct[number];
            } else if (secondNum == 0) {
                result = secondDct[firstNum];
            } else {
                var unitWord =
                    secondNum == 1 ? "ein" : dct[secondNum];

                result =
                    unitWord + "und" + secondDct[firstNum];
            }

        } else if (count == 3) {
            var firstNum = Number(processNumber.charAt(0));
            var secondNum = Number(processNumber.charAt(1));
            var thirdNum = Number(processNumber.charAt(2));

            var rest = secondNum * 10 + thirdNum;

            result =
                (firstNum == 1 ? "ein" : dct[firstNum]) +
                "hundert";

            if (rest > 0) {
                if (rest < 20) {
                    result += teenDct[rest];
                } else if (thirdNum == 0) {
                    result += secondDct[secondNum];
                } else {
                    var unitWord =
                        thirdNum == 1 ? "ein" : dct[thirdNum];

                    result +=
                        unitWord + "und" + secondDct[secondNum];
                }
            }

        } else if (count == 4) {
            var firstNum = Number(processNumber.charAt(0));
            var secondNum = Number(processNumber.charAt(1));
            var thirdNum = Number(processNumber.charAt(2));
            var forthNum = Number(processNumber.charAt(3));

            var rest = Number(processNumber.slice(1));
            var hundreds = secondNum * 100 +
                           thirdNum * 10 +
                           forthNum;

            result =
                (firstNum == 1 ? "ein" : dct[firstNum]) +
                "tausend";

            if (hundreds > 0) {
                if (hundreds < 100) {
                    if (hundreds < 20) {
                        result += teenDct[hundreds];
                    } else if (forthNum == 0) {
                        result += secondDct[thirdNum];
                    } else {
                        var unitWord =
                            forthNum == 1 ? "ein" : dct[forthNum];

                        result +=
                            unitWord + "und" + secondDct[thirdNum];
                    }
                } else {
                    result +=
                        (secondNum == 1 ? "ein" : dct[secondNum]) +
                        "hundert";

                    var lastTwo = thirdNum * 10 + forthNum;

                    if (lastTwo > 0) {
                        if (lastTwo < 20) {
                            result += teenDct[lastTwo];
                        } else if (forthNum == 0) {
                            result += secondDct[thirdNum];
                        } else {
                            var unitWord =
                                forthNum == 1 ? "ein" : dct[forthNum];

                            result +=
                                unitWord + "und" + secondDct[thirdNum];
                        }
                    }
                }
            }
        }

        document.querySelector("h1").innerText = result;

    } else {
        alert("Bitte gib eine ganze Zahl zwischen 0 und 9999 ein.");
    }
});
