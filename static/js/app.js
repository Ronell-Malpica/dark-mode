const btnMode = document.getElementById("checkbox");
const mq = window.matchMedia("(prefers-color-scheme: dark)");
mq.addListener(chageMedia);
// funcion que se le pasa al metodo addListener de la mediaqueries
function chageMedia(event) {
  udapteAPP({ darkMode: event.matches });
}
// Estado inicial
const stateApp = {
  darkMode: mq.matches,
};
function udapteAPP(newState) {
  Object.assign(stateApp, newState);
  main();
}
function main() {
  console.log(stateApp);
  if (stateApp.darkMode) {
    darkModeActive();
  } else {
    darkModeDesactive();
  }
}
main();
function darkModeActive() {
  btnMode.setAttribute("checked", true);
  document.body.classList.remove("variables-light-mode");
  document.body.classList.add("variables-dark-mode");
  btnMode.classList.add("desactive");
}
function darkModeDesactive() {
  btnMode.removeAttribute("checked");
  btnMode.classList.remove("desactive");
  document.body.classList.remove("variables-dark-mode");
  document.body.classList.add("variables-light-mode");
}
// evento CHANGE
btnMode.addEventListener("change", (event) => {
  udapteAPP({ darkMode: !stateApp.darkMode });
});
