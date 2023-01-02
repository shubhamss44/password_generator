function generatePassword(length) {
  const data =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHJIKLMNOPQRSTUVWXYZ123456789!@#$%^&*()_+{}<>";

  let password = "";

  for (let i = 0; i < length; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  return password;
}

var generate = document.getElementById("generate");
generate.addEventListener("click", () => {
  var number = document.getElementById("number").value;

  if (number == "" || number == undefined || number == null) {
    alert("Please Enter Some Value");
  } else {
    var number = document.getElementById("number").value;
    var generatedPas = document.getElementById("generatedPas");

    generatedPas.innerHTML = generatePassword(number);
    btn.style.display = "block";
  }
});

var text = document.getElementById("generatedPas");
var btn = document.getElementById("copy");

btn.addEventListener("click", () => {
  window.getSelection().removeAllRanges();
  const range = document.createRange();
  range.selectNode(text);
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  btn.innerHTML = "Copied";
});
