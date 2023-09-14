//seleciona todos os H4, que são os títulos dos produtos nos cards.
let productsTitles = document.querySelectorAll("h4");

let productsSections = document.querySelectorAll("[data-product-section]");
console.log(productsSections);


let searchBar = document.querySelector("[data-search-input]");
searchBar.addEventListener("input", () => {
  productsTitles.forEach((title) => {
    let productTitle = title.innerText.toLowerCase();

    if (!productTitle.includes(searchBar.value.toLowerCase())) {
      title.parentElement.classList.add("hide");
    } else {
      title.parentElement.classList.remove("hide");
    }
  });

  // ***DESENVOLVER FUNCIONALIDADE PARA OCULTAR AS SEÇÕES***
  // productsSections.forEach((section) => {
  //   if (section.children.length < 3) {
  //     section.classList.add("hide");
  //   } else {
  //     section.classList.remove("hide");
  //   }
  // });
});
