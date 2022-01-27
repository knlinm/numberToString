var dct = {
    1: "bir",
    2: "iki",
    3: "üç",
    4: "dörd",
    5: "beş",
    6: "altı",
    7: "yeddi",
    8: "səkgiz",
    9: "doqquz",
    0: "sıfır"
}
var secondDct = {
    1: "on",
    2: "iyirmi",
    3: "otuz",
    4: "qırx",
    5: "əlli",
    6: "altmış",
    7: "yetmiş",
    8: "səksən",
    9: "doxsan"
}
document.querySelector("button").addEventListener("click", function() {

    var userInput = document.querySelector("input").value
    var number = Number(userInput);

    if (!isNaN(number)) {
        var processNumber = number.toString()
        var count = processNumber.length


        if (count == 1) {
            alert(dct[number])
        } else if (count == 2) {
            var firstNum = Number(processNumber.charAt(0))
            var secondNum = Number(processNumber.charAt(1))

            let result = secondDct[firstNum] + " " + dct[secondNum]
            document.querySelector("h1").innerText = result


        } else if (count == 3) {
            var firstNum = Number(processNumber.charAt(0))
            var secondNum = Number(processNumber.charAt(1))
            var thirdNum = Number(processNumber.charAt(2))

            if (firstNum == 1) {
                let result = "yüz" + " " + secondDct[secondNum] + " " + dct[thirdNum]
                document.querySelector("h1").innerText = result
            } else {
                let result = `${dct[firstNum]}yüz` + " " + secondDct[secondNum] + " " + dct[thirdNum]
                document.querySelector("h1").innerText = result
            }
        } else if (count == 4) {
            var firstNum = Number(processNumber.charAt(0))
            var secondNum = Number(processNumber.charAt(1))
            var thirdNum = Number(processNumber.charAt(2))
            var forthNum = Number(processNumber.charAt(3))

            if (firstNum == 1) {
                let result = "min" + " " + `${dct[secondNum]}yüz` + " " + secondDct[thirdNum] + " " + dct[forthNum]
                document.querySelector("h1").innerText = result
            } else {
                let result = `${dct[firstNum]}min` + " " + `${dct[secondNum]}yüz` + " " + secondDct[thirdNum] + " " + dct[forthNum]
                document.querySelector("h1").innerText = result
            }

        }
    } else {
        alert("Please enter correct number")
    }
})