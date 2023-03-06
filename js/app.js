//  seleccionamos los dos elementos que serán clickables

const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");

/* 
  cada ves que se haga click en el botón 
  agrega y quita las clases necesarias 
  para que el menú se muestre.
*/
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

/* 
  Cuándo se haga click fuera del contenedor de enlaces 
  el menú debe esconderse.
*/

navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});

/* Blanco y negro*/


const colorSwitch = document.querySelector('#switch input[type="checkbox"]');

function cambiaTema(ev){
  const theme = ev.target.checked ? 'dark' : 'light';
  cambiaTemaParaTodos(theme);
  localStorage.setItem('tema-preferido', theme);
}

function cambiaTemaParaTodos(theme) {
  const documentosHtml = document.getElementsByTagName('html');
  for (let i = 0; i < documentosHtml.length; i++) {
    documentosHtml[i].setAttribute('tema', theme);
  }
}

const temaPreferido = localStorage.getItem('tema-preferido');
if (temaPreferido) {
  colorSwitch.checked = temaPreferido === 'dark';
  cambiaTema({ target: colorSwitch });
}

colorSwitch.addEventListener('change', cambiaTema);