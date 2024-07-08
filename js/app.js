

const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "123467890"
const symbolSet="!@#$%^&*/><,()."

const passbox = document.getElementById("pass-box");
const totalChar= document.getElementById("total-char")
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getRandomdata = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
};
console.log("AAAAAA", getRandomdata(upperSet))

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomdata(upperSet)
    }
    if (lowerInput.checked) {
      password += getRandomdata(lowerSet);
    }
    if (numberInput.checked) {
      password += getRandomdata(numberSet);
    }
    if (symbolInput.checked) {
      password += getRandomdata(symbolSet);
    }

    if (password.length < totalChar.value) {
        return generatePassword(password)
    }

    passbox.innerText= truncateString(password,totalChar.value)
};

generatePassword();


document.getElementById("btn").addEventListener(
    "click",
    function () {
        generatePassword()

    }
)

function truncateString(str, num) {
    if(str.length > num){
        let subStr = str.substring(0, num);
        return subStr
    } else {
        return str
     }
};




