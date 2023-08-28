// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];



// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}



document.addEventListener("DOMContentLoaded", (e) => {
// Filtra el array para obtener solo los elementos de tipo String
  const arrayFiltrado = strangeArray.filter((i) => typeof i === "string");
  // Ordena alfabéticamente los elementos del array filtrado
  // utilizando la función de local compare (sensible a mayúsculas y minúsculas)
  const arrayOrdenado = arrayFiltrado.sort((a, b) => a.localeCompare(b));
  // local compare se utiliza para comparar dos cadenas de texto y determinar su orden relativo en función de las reglas de ordenamiento del idioma especificado. Esto es especialmente útil cuando se desea realizar una comparación sensible a las convenciones lingüísticas, incluyendo consideraciones como mayúsculas y minúsculas, caracteres acentuados y otros aspectos específicos de la lengua
  
  showList(arrayOrdenado);
});


