let imgTag = document.querySelector("#product-img");
let imgBoxErrorMsg = document.querySelector('[data-error-msg="img"]');
let urlInput = document.querySelector("#url-input");
let fileInput = document.querySelector("#file-input");
let categoryInput = document.querySelector("#category-input");
let categoryErrorMsg = document.querySelector('[data-error-msg="category"]');
let productNameInput = document.querySelector('#product-name-input');
let productNameErrorMsg = document.querySelector('[data-error-msg="product-name"]');
let priceInput = document.querySelector('#price-input');
let priceInputErrorMsg = document.querySelector('[data-error-msg="price"]');
let productDescription = document.querySelector('#product-description');
let productDescriptionErrorMsg = document.querySelector('[data-error-msg="description"]')
let formBtn = document.querySelector('[data-form-btn]');

//checa se alguma imagem foi carregada
document.addEventListener("input", () => {
  if (fileInput.validity.valid || urlInput.validity.valid) {
    imgBoxErrorMsg.style.display = "none";
  } else {
    imgBoxErrorMsg.style.display = "block";
  }
});

//carregar img via file
let imgUploaded = "";
fileInput.addEventListener("change", function () {
  let file = this.files[0];

  if (file) {
    let fileReader = new FileReader();

    fileReader.addEventListener("load", function () {
      imgTag.setAttribute("src", fileReader.result);
    });

    fileReader.readAsDataURL(file);
  }
});

//carregar img via URL
urlInput.addEventListener("blur", function () {
  if (urlInput.value) {
    imgTag.setAttribute("src", urlInput.value);
  } else {
    imgTag.src = "../images/img-preview-icon.png";
  }
});

//checa validade input categoria
categoryInput.addEventListener("blur", () => {
  if (!categoryInput.validity.valid) {
    categoryErrorMsg.style.display = "block";
  } else {
    categoryErrorMsg.style.display = "none";
  }
});

//checa validade input nome
productNameInput.addEventListener("blur", () => {
  if (!productNameInput.validity.valid) {
    productNameErrorMsg.style.display = "block";
  } else {
    productNameErrorMsg.style.display = "none";
  }
});

//checa validade input preço
priceInput.addEventListener("blur", () => {
  if (!priceInput.validity.valid) {
    priceInputErrorMsg.style.display = "block";
  } else {
    priceInputErrorMsg.style.display = "none";
  }
});

//checa validade descrição
productDescription.addEventListener("blur", () => {
  if (!productDescription.validity.valid) {
    productDescriptionErrorMsg.style.display = "block";
  } else {
    productDescriptionErrorMsg.style.display = "none";
  }
});

//habilita botão de envio caso todos os campos estejam corretamente preenchidos
document.addEventListener('input', () => {
  if( (urlInput.validity.valid || fileInput.validity.valid) && 
      categoryInput.validity.valid && 
      productNameInput.validity.valid && 
      priceInput.validity.valid && 
      productDescription.validity.valid) {
    formBtn.removeAttribute('disabled');
  } else {
    formBtn.setAttribute('disabled', 'disabled');
  }
});

//add produto
formBtn.addEventListener('click', () => {
  
})