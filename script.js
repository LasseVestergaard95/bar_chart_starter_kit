const list = document.querySelector("ul");
const værdier = []
setInterval(addLi, 5000);

// det er vigtigt at de to nedenstående const står inde i funktionen så de generer et nyt random tal og li for hvert sekund(interval)
function addLi() {
  const randomTal = Math.floor(Math.random() * 100);
  værdier.push(randomTal)
  const li = document.createElement("li");

  li.style.setProperty("--height", randomTal);
  list.appendChild(li);

if (værdier.length > 20){
  værdier.shift();
  list.removeChild(list.children[0])
}
console.log(værdier)
}
