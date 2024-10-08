/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let quien = [
    "el perro",
    "el gato",
    "el vecino",
    "un coche",
    "una abuela",
    "el repartidor",
    "una pelota",
    "el tren",
    "el ordenador",
    "un niño"
  ];
  let accion = ["mojó", "destruyó", "quemó", "comió", "lloró", "pateó"];
  let objetivo = [
    "la casa",
    "la cama",
    "el televisor",
    "el móvil",
    "la tarea",
    "el instituto",
    "a mi jefe",
    "la cena"
  ];
  let cuando = [
    "esta mañana",
    "hace un rato",
    "ayer",
    "la semana pasada",
    "hace un momento",
    "esta tarde",
    "anoche"
  ];
  let motivo = [
    "porque estaba aburrido.",
    "porque estaba feliz.",
    "porque quería divertirse.",
    "porque estaba furioso.",
    "porque no tenía nada qué hacer."
  ];

  let quienRandom = Math.floor(Math.random() * quien.length);
  let accionRandom = Math.floor(Math.random() * accion.length);
  let objetivoRandom = Math.floor(Math.random() * objetivo.length);
  let cuandoRandom = Math.floor(Math.random() * cuando.length);
  let motivoRandom = Math.floor(Math.random() * motivo.length);

  document.querySelector("#excuse").innerHTML =
    adj[rdm1] + noun[rdm2] + action[rdm3] + possetion[rdm4] + where[rdm5];

  //console.log("Hello Rigo from the console!");
};
