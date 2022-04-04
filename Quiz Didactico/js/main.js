
/* --------------- Declarando categorias --------------- */

 const cardCategories = [
  {
    id: "Gramática",
    url: "src/pages/gramaticales.html",
    bg: "hover:bg-celeste-verde"
  },

  {
    id: "Geografía",
    url: "src/pages/geografico.html",
    bg: "hover:bg-celeste-verde"
  },

  {
    id: "Pronunciación",
    url: "src/pages/pronunciacion.html",
    bg: "hover:bg-celeste-verde"
  },

  {
    id: "Cultura",
    url: "src/pages/cultural.html",
    bg: "hover:bg-celeste-verde"
  },

];

/* --------------- DOM --------------- */
document.querySelector(".cardjs").innerHTML = cardCategories.map(
  (cardCategories) =>
  
  `<div class="btn card_catg ${cardCategories.bg} ">
      <a href=${cardCategories.url}>
        <div class="text-center py-4">
          <h2 >${cardCategories.id}</h2>
        </div>
      </a>
  </div>`
).join(''); 




















