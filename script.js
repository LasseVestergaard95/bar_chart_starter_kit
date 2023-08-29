const list = document.querySelector("ul");
let counter = 0;
const interval = setInterval(addLi, 1000);

// det er vigtigt at de to nedenstående const står inde i funktionen så de generer et nyt random tal og li for hvert sekund(interval)
function addLi() {
  const randomTal = Math.floor(Math.random() * 100);
  const li = document.createElement("li");

  li.style.setProperty("--height", randomTal);
  list.appendChild(li);
  counter++;
  if (list.children.length > 20) {
    list.removeChild(list.children[0]);
  }
}
