function Mudarestado(mentoriaum) {
  const elemento = document.getElementById("mentoriaum");

  if (elemento.classList) elemento.classList.toggle("mentoriatala");
  else elemento.className += " mentoriatala";
  const elemento2 = document.getElementById("aqui");
  if (elemento2.classList) elemento2.classList.toggle("agr");
  else elemento2.className += " agr";
}
