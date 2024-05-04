const faqQuestions = document.querySelectorAll(".faq-question");
// Añade event listeners a cada uno de los elementos.
faqQuestions.forEach((question) => {
  question.addEventListener("click", toogleQuestion);
});
// Cambia el estado de los elementos cuando son clickeados.
function toogleQuestion() {
  this.classList.toggle("active");
  const icon = this.querySelector("i");
  const button = this.querySelector("button");
  icon.classList.contains("fa-circle-plus")
    ? icon.classList.replace("fa-circle-plus", "fa-circle-minus")
    : icon.classList.add("fa-circle-plus");
  button.ariaExpanded === "true"
    ? (button.ariaExpanded = "false")
    : (button.ariaExpanded = "true");
}