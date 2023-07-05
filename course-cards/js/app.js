/**
 * Crée un élément du dom, lui ajoute du texte, le place comme dernier
 * enfant de parent et ajoute un attribut en utilisant le paramètre attribute
 * @param {String} markup_name
 * @param {String} text
 * @param {domElement} parent
 * @param {Array} attributes  (doit comprendre les propriétés name et value)
 * @returns domElement
 */
function createMarkup(markup_name, text, parent, attributes = []) {
  const markup = document.createElement(markup_name);
  markup.textContent = text;
  parent.appendChild(markup);
  attributes.forEach((attribute) => {
    if (
      attribute &&
      attribute.hasOwnProperty("name") &&
      attribute.hasOwnProperty("value")
    ) {
      markup.setAttribute(attribute.name, attribute.value);
    }
  });

  return markup;
}

// création de la page
const app = createMarkup("section", "", document.getElementById("app"), [
  // { name: "class", value: "  " },
]);

// création du header
const header = createMarkup("header", "", app, [
  { name: "class", value: "d-flex justify-content-center " },
]);

// création du menu
const nav = createMarkup("nav", " ", header, [
  { name: "class", value: "text-center navbar bg-body-tertiary" },
]);
const ul = createMarkup("ul", " ", nav, [
  { name: "class", value: "nav justify-content-center" },
]);
const menu = ["tous", "html", "css", "js"];

menu.forEach((link, index) => {
  const li = createMarkup("li", " ", ul, [
    { name: "class", value: "nav-item m-2" },
  ]);
  createMarkup("button", link, li, [
    { name: "type", value: "button" },
    { name: "value", value: link },
    { name: "id", value: link },
    {
      name: "class",
      value: "btn btn-lg btn-primary border-none text-uppercase",
    },
  ]);
  document.getElementById(link).addEventListener("click", actionToClick);
}); // for each

const h1 = createMarkup("h1", "Course Cards", app, [
  { name: "class", value: "text-center" },
]);

// création de la section articles
const div = createMarkup("div", "", app, [
  { name: "class", value: "container mx-auto overflow-hidden" },
]);

// création de la section articles
const section = createMarkup("section", "", div, [
  { name: "class", value: "row justify-content-center " },
]);

/* création des articles */
for (let i = 0; i < 4; i++) {
  menu.forEach((link, index) => {
    const article = createMarkup("article", ` `, section, [
      {
        name: "class",
        value:
          "tous card  m-2 shadow-md p-3 bg-body-tertiary rounded-md " + link,
      },
      { name: "style", value: "width: 18rem;" },
    ]);
    const div = createMarkup("div", "", article, [
      { name: "class", value: "card-body" },
    ]);
    if (link === "tous") {
      const h2 = createMarkup("h4", "Aucune catégorie", div, [
        { name: "class", value: "card-subtitle mb-2 text-body-secondary" },
      ]);
    } else {
      const h2 = createMarkup("h4", "Article sur " + link, div, [
        { name: "class", value: "card-subtitle mb-2 text-body-secondary" },
      ]);
    }
    const p = createMarkup("p", ` `, div, [
      { name: "class", value: "card-text" },
    ]);
    p.innerHTML = `suum cum pileoEodem tempore Serenianus ex duce, cuius ignavia populatam in Phoenice Celsen ante rettulimus, pulsatae maiestatis imperii reus iure postulatus ac lege, incertum qua potuit  <br /><a href="#" class="card-link">Card link</a>`;
  });
}

// Actions après click
function actionToClick() {
  id = this.id;
  switch (id) {
    case "html":
      document.getElementById("html").style.backgroundColor = "#61A0FE";
      document.getElementById("html").style.color = "white";
      hide(document.querySelectorAll(".html"));
      break;
    case "css":
      document.getElementById("css").style.backgroundColor = "#61A0FE";
      document.getElementById("css").style.color = "white";
      hide(document.querySelectorAll(".css"));
      break;
    case "js":
      document.getElementById("js").style.backgroundColor = "#61A0FE";
      document.getElementById("js").style.color = "white";
      hide(document.querySelectorAll(".js"));
      break;
    default:
      "tous";
      function resetBtnColor() {
        var x = document.querySelectorAll(
          "section > header > nav > ul > li > button"
        );
        var i;
        for (i = 0; i < x.length; i++) {
          x[i].style.backgroundColor = "#0d6efd";
          x[i].style.color = "white";
        }
      }
      resetBtnColor();

      show(document.querySelectorAll(".tous"));
    // test();
  }
}

/** https://stackoverflow.com/questions/21070101/show-hide-div-using-javascript */
// Cacher
function hide(el) {
  el = el.length ? el : [el];
  for (var i = 0; i < el.length; i++) {
    el[i].style.display = "none";
  }
}

/** use
 * <div class="target" style="display: none">item</div>
 * var elements = document.querySelectorAll('.target');
 * show(elements);
 * show(elements, 'inline-block');
 */

// Afficher
function show(el, customDisplay) {
  el = el.length ? el : [el];
  for (var i = 0; i < el.length; i++) {
    el[i].style.display = customDisplay || "block";
  }
}

/** use
 * <div class="target" style="display: none">item</div>
 * var elements = document.querySelectorAll('.target');
 * show(elements);
 * show(elements, 'inline-block');
 */

// création du footer
const footer = createMarkup("footer", " © 2023 - g33k0 ", app, [
  { name: "class", value: "text-center" },
]);
