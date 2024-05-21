let generate_Btn = document.getElementById("generate-btn");
let password_input = document.getElementById("password");

generate_Btn.addEventListener("click", Passwordgenerate);

function Passwordgenerate() {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let passwordLength = 12;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  password_input.value = password;
}
