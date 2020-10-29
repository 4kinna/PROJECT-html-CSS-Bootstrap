const button = document.querySelector("#button");
const select = document.querySelector("#my-dropdown");
const option = document.querySelectorAll(".option");
const selectLabel = document.querySelector("#select-label");

/* when button is clickt*/
button.addEventListener("click", function (e) {
  e.preventDefault(); /*prevent default behavor in url*/
  toggleHidden();
});

/* hidd en remove de hidden klass when clickt in function button */
function toggleHidden() {
  select.classList.toggle("hidden");
}

option.forEach(function (option) {
  option.addEventListener("click", function (e) {
    setSelectTitle(e);
  });
});

function setSelectTitle(e) {
  const labelElement = document.querySelector(`label[for="${e.target.id}"]`)
    .innerText;
  selectLabel.innerText = labelElement;
  toggleHidden();
}
