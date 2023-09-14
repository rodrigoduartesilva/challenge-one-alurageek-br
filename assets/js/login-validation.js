let emailInput = document.querySelector("#email-input");
let passwordInput = document.querySelector("#password-input");
let loginFormBtn = document.querySelector("#login-form-btn");
let invalidEmailMsg = document.querySelector('[data-invalid-msg="email"]');
let invalidPasswordMsg = document.querySelector(
  '[data-invalid-msg="password"]'
);

//exibe mensagem de erro nos inputs
emailInput.addEventListener("blur", () => {
  if (!emailInput.validity.valid) {
    invalidEmailMsg.style.display = "inline-block";
  } else {
    invalidEmailMsg.style.display = "none";
  }
});

passwordInput.addEventListener("blur", () => {
  if (!passwordInput.validity.valid) {
    invalidPasswordMsg.style.display = "inline-block";
  } else {
    invalidPasswordMsg.style.display = "none";
  }
});

//checa inputs e habilita ou não botão
document.addEventListener("input", () => {
  if (emailInput.validity.valid && passwordInput.validity.valid) {
    loginFormBtn.removeAttribute("disabled");
  } else {
    loginFormBtn.setAttribute("disabled", "disabled");
  }
});

//redireciona para página de adicionar produto se o login estiver ok
loginFormBtn.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "../pages/edit-products.html";
});
