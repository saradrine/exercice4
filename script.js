const li1 = document.querySelector("#Professeur");
const li2 = document.querySelector("#Etudiant");
const li3 = document.querySelector("#Assistant");

li1.addEventListener("click", () => {
  li1.style.color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
});
li2.addEventListener("click", () => {
  li2.style.color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
});
li3.addEventListener("click", () => {
  li3.style.color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
});

//ajout dynamique

// const ol = document.querySelector("ol");
// ol.addEventListener("",addLi)

function addLi(text) {
  const li = document.createElement("li");
  li.textContent = text;
  const container = document.querySelector("ol");
  container.appendChild(li);
  li.addEventListener("click", () => {
    li1.style.color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  });
}