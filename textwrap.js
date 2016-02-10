(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(arr, value) {
  var constructor;
  if (arr instanceof Array) {
    constructor = value === void 0 || value === null ? value : value.constructor;
    return arr.indexOf(value) >= 0 || arr.indexOf(constructor) >= 0;
  } else {
    return false;
  }
};


},{}],2:[function(require,module,exports){
module.exports = function(arr, x) {
  if (x === void 0) {
    return arr;
  }
  if (x === false) {
    return [];
  }
  if (x instanceof Array) {
    return x;
  }
  if (!(arr instanceof Array)) {
    arr = [];
  }
  if (arr.indexOf(x) >= 0) {
    arr.splice(arr.indexOf(x), 1);
  } else {
    arr.push(x);
  }
  return arr;
};


},{}],3:[function(require,module,exports){
// Determines if the current browser is Internet Explorer.
module.exports = /*@cc_on!@*/false

},{}],4:[function(require,module,exports){
module.exports = d3.select("html").attr("dir") === "rtl";


},{}],5:[function(require,module,exports){
module.exports = ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch ? true : false;


},{}],6:[function(require,module,exports){
var ie, print, touch, wiki;

ie = require("../../client/ie.js");

touch = require("../../client/touch.coffee");

wiki = require("./wiki.coffee");

print = function(type, message, style) {
  style = style || "";
  if (ie || typeof InstallTrigger !== 'undefined') {
    console.log("[ D3plus ] " + message);
  } else if (type.indexOf("group") === 0) {
    console[type]("%c[ D3plus ]%c " + message, "font-weight: 800;" + "color: #b35c1e;" + "margin-left: 0px;", "font-weight:200;" + style);
  } else {
    console[type]("%c" + message, style + "font-weight:200;");
  }
};

print.comment = function(message) {
  this("log", message, "color:#aaa;");
};

print.error = function(message, url) {
  this("groupCollapsed", "ERROR: " + message, "font-weight:800;color:#D74B03;");
  this.stack();
  this.wiki(url);
  this.groupEnd();
};

print.group = function(message) {
  this("group", message, "color:#888;");
};

print.groupCollapsed = function(message) {
  this("groupCollapsed", message, "color:#888;");
};

print.groupEnd = function() {
  if (!ie) {
    console.groupEnd();
  }
};

print.log = function(message) {
  this("log", message, "color:#444444;");
};

print.stack = function() {
  var err, line, message, page, splitter, stack, url;
  if (!ie) {
    err = new Error();
    if (err.stack) {
      stack = err.stack.split("\n");
      stack = stack.filter(function(e) {
        return e.indexOf("Error") !== 0 && e.indexOf("d3plus.js:") < 0 && e.indexOf("d3plus.min.js:") < 0;
      });
      if (stack.length && stack[0].length) {
        splitter = window.chrome ? "at " : "@";
        url = stack[0];
        if (url.indexOf(splitter) >= 0) {
          url = url.split(splitter)[1];
        }
        stack = url.split(":");
        if (stack.length === 3) {
          stack.pop();
        }
        line = stack.pop();
        page = stack.join(":").split("/");
        page = page[page.length - 1];
        message = "line " + line + " of " + page + ": " + url;
        this("log", message, "color:#D74B03;");
      }
    }
  }
};

print.time = function(message) {
  if (!ie) {
    console.time(message);
  }
};

print.timeEnd = function(message) {
  if (!ie) {
    console.timeEnd(message);
  }
};

print.warning = function(message, url) {
  this("groupCollapsed", message, "color:#888;");
  this.stack();
  this.wiki(url);
  this.groupEnd();
};

print.wiki = function(url) {
  if (url) {
    if (url in wiki) {
      url = d3plus.repo + "wiki/" + wiki[url];
    }
    this("log", "documentation: " + url, "color:#aaa;");
  }
};

module.exports = print;


},{"../../client/ie.js":3,"../../client/touch.coffee":5,"./wiki.coffee":7}],7:[function(require,module,exports){
module.exports = {
  active: "Visualizations#active",
  aggs: "Visualizations#aggs",
  alt: "Forms#alt",
  attrs: "Visualizations#attrs",
  axes: "Visualizations#axes",
  background: "Visualizations#background",
  color: "Visualizations#color",
  cols: "Visualizations#cols",
  config: "Visualizations#config",
  container: "Visualizations#container",
  coords: "Visualizations#coords",
  csv: "Visualizations#csv",
  data: "Visualizations#data",
  depth: "Visualizations#depth",
  descs: "Visualizations#descs",
  dev: "Visualizations#dev",
  draw: "Visualizations#draw",
  edges: "Visualizations#edges",
  error: "Visualizations#error",
  focus: "Visualizations#focus",
  font: "Visualizations#font",
  footer: "Visualizations#footer",
  format: "Visualizations#format",
  height: "Visualizations#height",
  history: "Visualizations#history",
  hover: "Forms#hover",
  icon: "Visualizations#icon",
  id: "Visualizations#id",
  keywords: "Forms#keywords",
  labels: "Visualizations#labels",
  legend: "Visualizations#legend",
  links: "Visualizations#links",
  margin: "Visualizations#margin",
  messages: "Visualizations#messages",
  method: "Methods",
  mouse: "Visualizations#mouse",
  nodes: "Visualizations#nodes",
  open: "Forms#open",
  order: "Visualizations#order",
  remove: "Forms#remove",
  search: "Forms#search",
  select: "Forms#select",
  selectAll: "Forms#selectAll",
  shape: "Visualizations#shape",
  size: "Visualizations#size",
  temp: "Visualizations#temp",
  text: "Visualizations#text",
  time: "Visualizations#time",
  timeline: "Visualizations#timeline",
  timing: "Visualizations#timing",
  title: "Visualizations#title",
  tooltip: "Visualizations#tooltip",
  total: "Visualizations#total",
  type: "Visualizations#type",
  ui: "Visualizations#ui",
  width: "Visualizations#width",
  x: "Visualizations#x",
  y: "Visualizations#y",
  zoom: "Visualizations#zoom"
};


},{}],8:[function(require,module,exports){
module.exports = function(type) {
  var attrs, styles, tester;
  if (["div", "svg"].indexOf(type) < 0) {
    type = "div";
  }
  styles = {
    position: "absolute",
    left: "-9999px",
    top: "-9999px",
    visibility: "hidden",
    display: "block"
  };
  attrs = type === "div" ? {} : {
    position: "absolute"
  };
  tester = d3.select("body").selectAll(type + ".d3plus_tester").data([0]);
  tester.enter().append(type).attr("class", "d3plus_tester").style(styles).attr(attrs);
  return tester;
};


},{}],9:[function(require,module,exports){
module.exports = {
  dev: {
    accepted: "{0} is not an accepted value for {1}, please use one of the following: {2}.",
    deprecated: "the {0} method has been removed, please update your code to use {1}.",
    noChange: "{0} was not updated because it did not change.",
    noContainer: "cannot find a container on the page matching {0}.",
    of: "of",
    oldStyle: "style properties for {0} have now been embedded directly into .{1}().",
    sameEdge: "edges cannot link to themselves. automatically removing self-referencing edge {0}.",
    set: "{0} has been set.",
    setLong: "{0} has been set to {1}.",
    setContainer: "please define a container div using .container()"
  },
  error: {
    accepted: "{0} is not an accepted {1} for {2} visualizations, please use one of the following: {3}.",
    connections: "no connections available for {0}.",
    data: "no data available",
    dataYear: "no data available for {0}.",
    lib: "{0} visualizations require loading the {1} library.",
    libs: "{0} visualizations require loading the following libraries: {1}.",
    method: "{0} visualizations require setting the {1} method.",
    methods: "{0} visualizations require setting the following methods: {1}."
  },
  format: {
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["$", ""],
    dateTime: "%A, %B %-d, %Y %X",
    date: "%-m/%-d/%Y",
    time: "%I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  },
  lowercase: ["a", "an", "and", "as", "at", "but", "by", "for", "from", "if", "in", "into", "near", "nor", "of", "on", "onto", "or", "per", "that", "the", "to", "with", "via", "vs", "vs."],
  message: {
    data: "analyzing data",
    draw: "drawing visualization",
    initializing: "initializing {0}",
    loading: "loading data",
    tooltipReset: "resetting tooltips",
    ui: "updating ui"
  },
  method: {
    active: "active segments",
    color: "color",
    depth: "depth",
    dev: "verbose",
    focus: "focus",
    icon: "icon",
    id: "id",
    height: "height",
    labels: "labels",
    legend: "legend",
    margin: "margin",
    messages: "status messages",
    mode: "mode",
    mute: "hide",
    order: "order",
    search: "search",
    shape: "shape",
    size: "size",
    solo: "isolate",
    style: "style",
    temp: "temporary segments",
    text: "text",
    time: "time",
    timeline: "timeline",
    total: "total segments",
    type: "type",
    width: "width",
    x: "x axis",
    y: "y axis",
    zoom: "zoom"
  },
  time: ["date", "day", "month", "time", "year"],
  timeFormat: {
    FullYear: "%Y",
    Month: "%B",
    MonthSmall: "%b",
    Date: "%A %-d",
    DateSmall: "%-d",
    Hours: "%I %p",
    Minutes: "%I:%M",
    Seconds: "%Ss",
    Milliseconds: "%Lms",
    "FullYear-Month": "%b %Y",
    "FullYear-Date": "%-m/%-d/%Y",
    "Month-Date": "%b %-d",
    "Hours-Minutes": "%I:%M %p",
    "Hours-Seconds": "%I:%M:%S %p",
    "Hours-Milliseconds": "%H:%M:%S.%L",
    "Minutes-Seconds": "%I:%M:%S %p",
    "Minutes-Milliseconds": "%H:%M:%S.%L",
    "Seconds-Milliseconds": "%H:%M:%S.%L"
  },
  ui: {
    and: "and",
    back: "back",
    collapse: "click to collapse",
    error: "error",
    expand: "click to expand",
    including: "including",
    loading: "loading...",
    more: "{0} more",
    moreInfo: "click for more info",
    or: "or",
    noResults: "no results matching {0}.",
    primary: "primary connections",
    share: "share",
    total: "total",
    values: "values"
  },
  uppercase: ["CEO", "CEOs", "CFO", "CFOs", "CNC", "COO", "COOs", "CPU", "CPUs", "GDP", "HVAC", "ID", "IT", "R&D", "TV", "UI"],
  visualization: {
    bar: "Bar Chart",
    box: "Box Plot",
    bubbles: "Bubbles",
    chart: "Chart",
    geo_map: "Geo Map",
    line: "Line Plot",
    network: "Network",
    paths: "Paths",
    pie: "Pie Chart",
    rings: "Rings",
    scatter: "Scatter Plot",
    stacked: "Stacked Area",
    table: "Table",
    tree_map: "Tree Map"
  }
};


},{}],10:[function(require,module,exports){
module.exports = {
    "format": {
        "decimal": ",",
        "thousands": ".",
        "grouping": [3],
        "currency": ["", " €"],
        "dateTime": "%A, %e de %B de %Y, %X",
        "date": "%d/%m/%Y",
        "time": "%H:%M:%S",
        "periods": ["AM", "PM"],
        "days": ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
        "shortDays": ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
        "months": ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
        "shortMonths": ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
    },
    "dev": {
        "accepted": "{0} no es un valor aceptado para {1}, por favor utilice uno de los siguientes: {2}.",
        "deprecated": "el método {0} ha sido eliminado, por favor, actualiza tu código para utilizar {1}.",
        "noChange": "{0} no se actualiza porque no cambió.",
        "noContainer": "no se puede encontrar un contenedor en la página correspondiente a {0}.",
        "of": "de",
        "oldStyle": "propiedades de estilo para {0} ahora se han incorporado directamente en. {1} ().",
        "sameEdge": "los vínculos no se pueden enlazar con si mismos. eliminando automáticamente el vínculo {0} que se autorreferencia.",
        "set": "{0} se ha establecido.",
        "setLong": "{0} ha sido establecido a {1}.",
        "setContainer": "defina un div contenedor utilizando .container ()"
    },
    "error": {
        "accepted": "{0} no es un {1} aceptado para visualizaciones de {2}, por favor utilice uno de los siguientes: {3}.",
        "connections": "no hay conexiones disponibles para {0}.",
        "data": "No hay datos disponibles",
        "dataYear": "no hay datos disponibles para {0}.",
        "lib": "{0} visualizaciones requieren cargar las siguientes librerías: {1}.",
        "libs": "{0} visualizaciones requieren cargar las siguientes librerías: {1}.",
        "method": "{0} visualizaciones requieren establecer el ​​método {1}.",
        "methods": "{0} visualizaciones requieren establecer los siguientes métodos: {1}."
    },
    "lowercase": [
        "una",
        "y",
        "en",
        "pero",
        "en",
        "de",
        "o",
        "el",
        "la",
        "los",
        "las",
        "para",
        "a",
        "con"
    ],
    "method": {
        "active": "segmentos activos",
        "color": "color",
        "depth": "profundidad",
        "dev": "detallado",
        "focus": "foco",
        "icon": "ícono",
        "id": "id",
        "height": "alto",
        "labels": "rótulo",
        "legend": "leyenda",
        "margin": "margen",
        "messages": "mensajes de estado",
        "mute": "ocultar",
        "order": "orden",
        "search": "búsqueda",
        "shape": "forma",
        "size": "tamaño",
        "solo": "aislar",
        "style": "estilo",
        "temp": "segmentos temporales",
        "text": "texto",
        "time": "tiempo",
        "timeline": "línea de tiempo",
        "total": "segmentos totales",
        "type": "tipo",
        "width": "anchura",
        "x": "eje x",
        "y": "eje Y",
        "zoom": "#ERROR!",
        "mode": "modo"
    },
    "time": [
        "fecha",
        "día",
        "mes",
        "hora",
        "año"
    ],
    "visualization": {
        "bubbles": "Burbujas",
        "chart": "Tabla",
        "geo_map": "Mapa Geo",
        "line": "Línea Solar",
        "network": "Red",
        "rings": "Anillos",
        "scatter": "Gráfico De Dispersión",
        "stacked": "Área Apilada",
        "tree_map": "Mapa de Árbol",
        "bar": "Gráfico De Barras",
        "box": "Diagrama de Cajas",
        "paths": "Caminos",
        "pie": "Gráfico de Pastel",
        "table": "Tabla"
    },
    "ui": {
        "and": "y",
        "back": "atrás",
        "collapse": "click para cerrar",
        "error": "error",
        "expand": "haga clic para ampliar",
        "loading": "Cargando ...",
        "more": "{0} más",
        "moreInfo": "clic para más información",
        "noResults": "no se encontraron resultados para {0}.",
        "primary": "relaciones principales",
        "share": "porcentaje",
        "total": "total",
        "values": "valores",
        "including": "Incluyendo",
        "or": "o"
    },
    "message": {
        "data": "analizando los datos",
        "draw": "visualizando",
        "initializing": "inicializando {0}",
        "loading": "cargando datos",
        "tooltipReset": "restableciendo las descripciones emergentes",
        "ui": "actualizando la interfaz de usuario"
    },
    "uppercase": [
        "CEO",
        "CEOs",
        "CFO",
        "CFOs",
        "CNC",
        "COO",
        "COOs",
        "CPU",
        "CPUs",
        "PIB",
        "HVAC",
        "ID",
        "TI",
        "I&D",
        "TV",
        "UI"
    ]
}

},{}],11:[function(require,module,exports){
module.exports = {
    "format": {
        "decimal": ",",
        "thousands": ".",
        "grouping": [3],
        "currency": ["", " €"],
        "dateTime": "%A, le %e %B %Y, %X",
        "date": "%d/%m/%Y",
        "time": "%H:%M:%S",
        "periods": ["AM", "PM"], // unused
        "days": ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
        "shortDays": ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
        "months": ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
        "shortMonths": ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."]
    },
    "dev": {
        "accepted": "{0} n'est pas une option valide pour {1}, les valeurs possibles sont: {2}.",
        "deprecated": "{0} a été éliminé de la version courante, mettez à jour votre code source avec {1}.",
        "noChange": "{0} n'a pas été mis à jour car inchangé.",
        "noContainer": "impossible de trouver un contenant correspondant à {0}.",
        "of": "de",
        "oldStyle": "les propriétés de {0} ont été imbriquées dans .{1}().",
        "sameEdge": "un arc ne peut pas boucler sur lui même. L'auto-référence est automatiquement éliminée {0}.",
        "set": "{0} a été mis à jour.",
        "setLong": "{0} a été mis à jour à {1}.",
        "setContainer": "merci de choisir un div qui utilise .container()"
    },
    "error": {
        "accepted": "{0} n'est pas correct {1} pour {2} visualisations, merci d'utilisez une des options suivantes: {3}.",
        "connections": "Pas de connections disponibles pour {0}.",
        "data": "Pas de données disponibles",
        "dataYear": "Pas de données disponibles pour {0}.",
        "lib": "La visualisation de {0} nécessite le chargement de la librairie {1}.",
        "libs": "La visualisation de {0} nécessite le chargement des librairies {1}.",
        "method": "La visualisation du {0} exige la définition de {1}.",
        "methods": "La visualisation du {0} exige les définitions de {1}."
    },
    "lowercase": [
        "un",
        "une",
        "de",
        "des",
        "et",
        "mais",
        "les",
        "ou",
        "pour",
        "avec",
        "comme",
        "par",
        "vers",
        "si",
        "dans",
        "près",
        "ni",
        "dessus",
        "que",
        "le",
        "la",
        "via",
        "sinon",
        "alors"
    ],
    "method": {
        "active": "segments actifs",
        "color": "couleur",
        "depth": "profondeur",
        "dev": "verbeux",
        "focus": "focus",
        "icon": "ícone",
        "id": "id",
        "height": "hauteur",
        "labels": "labels",
        "legend": "légende",
        "margin": "marge",
        "messages": "messages",
        "mute": "cacher",
        "order": "ordre",
        "search": "recherche",
        "shape": "format",
        "size": "taille",
        "solo": "isoler",
        "style": "style",
        "temp": "segments temporaires",
        "text": "texte",
        "time": "temps",
        "timeline": "ligne temporelle",
        "total": "segments totaux",
        "type": "type",
        "width": "largeur",
        "x": "axe x",
        "y": "axe y",
        "zoom": "zoom",
        "mode": "mode"
    },
    "time": [
        "année",
        "date",
        "jour",
        "heure",
        "mois"
    ],
    "visualization": {
        "bubbles": "Bulles",
        "chart": "Graphique",
        "geo_map": "Carte",
        "line": "Courbes",
        "network": "Réseau",
        "rings": "Anneaux",
        "scatter": "Nuage de points",
        "stacked": "Aires empilées",
        "tree_map": "Arbre",
        "bar": "Diagramme en barres",
        "box": "Boîtes à Moustaches",
        "paths": "Chemins",
        "pie": "Camembert",
        "table": "Table"
    },
    "ui": {
        "and": "et",
        "back": "retour",
        "collapse": "clic pour réduire",
        "error": "erreur",
        "expand": "clic pour agrandir",
        "loading": "chargement ...",
        "more": "plus {0}",
        "moreInfo": "clic pour plus d'information",
        "noResults": "pas de résultat correspondant à {0}.",
        "primary": "connections primaires",
        "share": "part",
        "total": "total",
        "values": "valeurs",
        "including": "incluant",
        "or": "ou"
    },
    "message": {
        "data": "analyse des données",
        "draw": "tracé en cours",
        "initializing": "Initialisation {0}",
        "loading": "chargement",
        "tooltipReset": "réinitialisation des bulles",
        "ui": "rafraichissement de l'interface"
    },
    "uppercase": [
        "CEO",
        "CEOs",
        "CFO",
        "CFOs",
        "CNC",
        "COO",
        "COOs",
        "CPU",
        "CPUs",
        "PIB",
        "HVAC",
        "ID",
        "IT",
        "TV",
        "UI"
    ]
}

},{}],12:[function(require,module,exports){
module.exports = {
    "format": {
        "decimal": ",",
        "thousands": ".",
        "grouping": [3],
        "currency": ["", " ден."],
        "dateTime": "%A, %e %B %Y г. %X",
        "date": "%d.%m.%Y",
        "time": "%H:%M:%S",
        "periods": ["AM", "PM"],
        "days": ["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"],
        "shortDays": ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
        "months": ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
        "shortMonths": ["јан", "фев", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "ное", "дек"]
    },
    "dev": {
        "accepted": "{0} не е прифатенa вредноста за {1}, ве молиме користете еднa од следниве вредности: {2}.",
        "deprecated": "{0} метод е отстранета, ве молиме обновете го вашиот код за да се користи {1}.",
        "noChange": "{0} не е ажурирана, бидејќи немаше промени.",
        "noContainer": "не можe да се најде контејнер на страницата кој се совпаѓа со {0}.",
        "of": "на",
        "oldStyle": "својствата за стилот за {0} сега се вградени директно во. {1} ().",
        "sameEdge": "рабовите не може да имаат алка самите кон себе. автоматски ги отстранувам рабовите кои се само-референцираат {0}.",
        "set": "{0} е наместен.",
        "setLong": "{0} е поставен на {1}.",
        "setContainer": "Ве молиме дефинирајте контејнер div користејќи .container()"
    },
    "error": {
        "accepted": "{0} не е прифатлива за {1} {2} визуелизација, ве молиме користете една од следниве: {3}.",
        "connections": "не е достапна за врски {0}.",
        "data": "нема податоци",
        "dataYear": "Нема достапни податоци за {0}.",
        "lib": "{0} визуализации бараат вчитување на библиотеката {1} .",
        "libs": "{0} визуализации бараат вчитување следниве библиотеки: {1}.",
        "method": "{0} визуализации бара поставување на {1} методот.",
        "methods": "{0} визуализации бараат поставување на следниве методи: {1}."
    },
    "lowercase": [
        "a",
        "и",
        "во",
        "но",
        "на",
        "или",
        "да",
        "се",
        "со"
    ],
    "method": {
        "active": "активни сегменти",
        "color": "боја",
        "depth": "длабочина",
        "dev": "опширно",
        "focus": "фокус",
        "icon": "икона",
        "id": "id",
        "height": "висина",
        "labels": "етикети",
        "legend": "легенда",
        "margin": "маргина",
        "messages": "пораки за статусот",
        "mute": "скрие",
        "order": "цел",
        "search": "барај",
        "shape": "форма",
        "size": "големина",
        "solo": "изолирање",
        "style": "стил",
        "temp": "привремени сегменти",
        "text": "текст",
        "time": "време",
        "timeline": "времеплов",
        "total": "Вкупно сегменти",
        "type": "тип",
        "width": "ширина",
        "x": "x оската",
        "y": "оската y",
        "zoom": "зум",
        "mode": "режим"
    },
    "time": [
        "датум",
        "ден",
        "месец",
        "време",
        "година"
    ],
    "visualization": {
        "bubbles": "Меурчиња",
        "chart": "Шема",
        "geo_map": "Гео мапа",
        "line": "Линиски график",
        "network": "Мрежа",
        "rings": "Прстени",
        "scatter": "Распрскан график",
        "stacked": "Наредена површина",
        "tree_map": "Мапа во вид на дрво",
        "bar": "Бар табела",
        "box": "Кутија Парцел",
        "paths": "Патеки",
        "pie": "Пита графикон",
        "table": "Табела"
    },
    "ui": {
        "and": "и",
        "back": "назад",
        "collapse": "кликни за да се собере",
        "error": "грешка",
        "expand": "кликни за да се прошири",
        "loading": "Се вчитува ...",
        "more": "{0} повеќе",
        "moreInfo": "кликнете за повеќе информации",
        "noResults": "Не се пронајдени појавување на {0}.",
        "primary": "основно врски",
        "share": "удел",
        "total": "Вкупниот",
        "values": "вредности",
        "including": "Вклучувајќи",
        "or": "или"
    },
    "message": {
        "data": "анализа на податоци",
        "draw": "цртање на визуелизација",
        "initializing": "иницијализација {0}",
        "loading": "податоци за вчитување",
        "tooltipReset": "ресетирање на објаснувањата",
        "ui": "ажурирање на кориничкиот интерфејс"
    },
    "uppercase": [
        "CEO",
        "CEOs",
        "CFO",
        "CFOs",
        "CNC",
        "COO",
        "COOs",
        "CPU",
        "CPUs",
        "GDP",
        "HVAC",
        "ID",
        "IT",
        "R&D",
        "TV",
        "UI"
    ]
}

},{}],13:[function(require,module,exports){
module.exports = {
    "format": {
        "decimal": ",",
        "thousands": ".",
        "grouping": [3],
        "currency": ["R$", ""],
        "dateTime": "%A, %e de %B de %Y. %X",
        "date": "%d/%m/%Y",
        "time": "%H:%M:%S",
        "periods": ["AM", "PM"],
        "days": ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
        "shortDays": ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        "months": ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        "shortMonths": ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    },
    "dev": {
        "accepted": "{0} não é um valor válido para {1}, por favor use um dos seguintes procedimentos: {2}.",
        "deprecated": "{0} método foi removido, por favor atualize seu código para utilizar {1}.",
        "noChange": "{0} não foi atualizado porque ele não mudou.",
        "noContainer": "Não foi possível encontrar um local na página correspondente a {0}.",
        "of": "de",
        "oldStyle": "propriedades de estilo para {0} já foi incorporado diretamente no. {1} ().",
        "sameEdge": "bordas não podem vincular a si mesmos. removendo automaticamente borda de auto-referência {0}.",
        "set": "{0} foi definido.",
        "setLong": "{0} foi definida para {1}.",
        "setContainer": "por favor, defina um div utilizando .container()"
    },
    "error": {
        "accepted": "{0} não é um {1} reconhecido para visualizações {2}, favor usar um dos seguintes procedimentos: {3}.",
        "connections": "Não há conexões disponíveis para {0}.",
        "data": "Não há dados disponíveis",
        "dataYear": "Não há dados disponíveis para {0}.",
        "lib": "A visualização {0} necessita que seja carregado a biblioteca {1}.",
        "libs": "A visualização {0} necessita que seja carregado as bibliotecas {1}.",
        "method": "A visualização {0} exige a definição do método {1}.",
        "methods": "A visualização {0} exige a definição dos métodos {1}."
    },
    "lowercase": [
        "um",
        "uma",
        "e",
        "como",
        "em",
        "no",
        "na",
        "mas",
        "por",
        "para",
        "pelo",
        "pela",
        "de",
        "do",
        "da",
        "se",
        "perto",
        "nem",
        "ou",
        "que",
        "o",
        "a",
        "com",
        "v"
    ],
    "method": {
        "active": "segmentos activos",
        "color": "cor",
        "depth": "profundidade",
        "dev": "verboso",
        "focus": "foco",
        "icon": "ícone",
        "id": "identificador",
        "height": "altura",
        "labels": "etiquetas",
        "legend": "legenda",
        "margin": "margem",
        "messages": "mensagens de status",
        "mute": "ocultar",
        "order": "ordenar",
        "search": "pesquisar",
        "shape": "forma",
        "size": "tamanho",
        "solo": "isolar",
        "style": "estilo",
        "temp": "segmentos temporários",
        "text": "texto",
        "time": "tempo",
        "timeline": "linha do tempo",
        "total": "segmentos no total",
        "type": "tipo",
        "width": "largura",
        "x": "eixo x",
        "y": "eixo y",
        "zoom": "zoom",
        "mode": "modo"
    },
    "time": [
        "data",
        "dia",
        "mês",
        "hora",
        "ano"
    ],
    "visualization": {
        "bubbles": "Bolhas",
        "chart": "Gráfico",
        "geo_map": "Mapa",
        "line": "Gráfico de Linha",
        "network": "Rede",
        "rings": "Anéis",
        "scatter": "Dispersão",
        "stacked": "Evolução",
        "tree_map": "Tree Map",
        "bar": "Gráfico de Barras",
        "box": "Box Plot",
        "paths": "Caminhos",
        "pie": "Pie Chart",
        "table": "Tabela"
    },
    "ui": {
        "and": "e",
        "back": "voltar",
        "collapse": "Clique para fechar",
        "error": "erro",
        "expand": "clique para expandir",
        "loading": "carregando ...",
        "more": "mais {0}",
        "moreInfo": "Clique para mais informações",
        "noResults": "nenhum resultado para {0}.",
        "primary": "conexões primárias",
        "share": "participação",
        "total": "total",
        "values": "valores",
        "including": "Incluindo",
        "or": "ou"
    },
    "message": {
        "data": "analisando dados",
        "draw": "desenhando visualização",
        "initializing": "inicializando {0}",
        "loading": "carregando dados",
        "tooltipReset": "redefinindo as dicas",
        "ui": "atualizando interface"
    },
    "uppercase": [
        "CEO",
        "CEOs",
        "CFO",
        "CFOs",
        "CNC",
        "COO",
        "COOs",
        "CPU",
        "CPUs",
        "PIB",
        "HVAC",
        "ID",
        "TI",
        "P&D",
        "TV",
        "IU"
    ]
}

},{}],14:[function(require,module,exports){
module.exports = {
    "format": {
        "decimal": ",",
        "thousands": ".",
        "grouping": [3],
        "currency": ["€", ""],
        "dateTime": "%A, %e de %B de %Y. %X",
        "date": "%d/%m/%Y",
        "time": "%H:%M:%S",
        "periods": ["AM", "PM"],
        "days": ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
        "shortDays": ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        "months": ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        "shortMonths": ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    },
    "dev": {
        "accepted": "{0} não é um valor válido para {1}, por favor escolha uma das seguintes opções: {2}.",
        "deprecated": "o método {0} foi removido, por favor atualize o seu código para usar {1}.",
        "noChange": "{0} não foi atualizado porque não houve modificações.",
        "noContainer": "Não foi possível encontrar um elemento na página correspondente a {0}.",
        "of": "de",
        "oldStyle": "as propriedades de {0} já foram incluídas em .{1}().",
        "sameEdge": "bordas não podem vincular a si mesmos. removendo automaticamente borda de auto-referência {0}.",
        "set": "{0} foi definido.",
        "setLong": "{0} foi alterado para {1}.",
        "setContainer": "por favor indique um elemento div através do método .container()"
    },
    "error": {
        "accepted": "{0} não é uma {1} válida para a visualização {2}, por favor escolha uma das seguintes: {3}.",
        "connections": "não existem ligações disponíveis para {0}.",
        "data": "não existem dados disponíveis",
        "dataYear": "não existem dados disponíveis para {0}.",
        "lib": "a visualização {0} necessita que a biblioteca {1} seja carregada.",
        "libs": "a visualização {0} necessita que as seguintes bibliotecas sejam carregadas: {1}.",
        "method": "A visualização {0} exige a definição do método {1}.",
        "methods": "A visualização {0} exige a definição dos seguintes métodos {1}."
    },
    "lowercase": [
        "um",
        "uma",
        "e",
        "como",
        "em",
        "no",
        "na",
        "mas",
        "por",
        "para",
        "pelo",
        "pela",
        "de",
        "do",
        "da",
        "se",
        "perto",
        "nem",
        "ou",
        "que",
        "o",
        "a",
        "com",
        "v"
    ],
    "method": {
        "active": "segmentos activos",
        "color": "cor",
        "depth": "profundidade",
        "dev": "verboso",
        "focus": "foco",
        "icon": "ícone",
        "id": "identificador",
        "height": "altura",
        "labels": "etiquetas",
        "legend": "legenda",
        "margin": "margem",
        "messages": "estado",
        "order": "ordenar",
        "search": "pesquisar",
        "shape": "forma",
        "size": "tamanho",
        "style": "estilo",
        "temp": "segmentos temporários",
        "text": "texto",
        "time": "tempo",
        "timeline": "linha temporal",
        "total": "segmentos no total",
        "type": "tipo",
        "width": "largura",
        "x": "eixo dos xx",
        "y": "eixo dos yy",
        "zoom": "zoom",
        "mode": "#ERROR!",
        "mute": "ocultar",
        "solo": "isolar"
    },
    "time": [
        "data",
        "dia",
        "mês",
        "hora",
        "ano"
    ],
    "visualization": {
        "bubbles": "Bolhas",
        "chart": "Diagrama",
        "geo_map": "Mapa",
        "line": "Gráfico de Linha",
        "network": "Grafo",
        "rings": "Anéis",
        "scatter": "Gráfico de Dispersão",
        "stacked": "Gráfico de Área",
        "tree_map": "Tree Map",
        "bar": "Gráfico de Barras",
        "box": "Diagrama de Caixa e Bigodes",
        "paths": "Caminhos",
        "pie": "Gráfico de Setores",
        "table": "Tabela"
    },
    "ui": {
        "and": "e",
        "back": "voltar",
        "collapse": "Clique para colapsar",
        "error": "erro",
        "expand": "clique para expandir",
        "loading": "a carregar ...",
        "more": "mais {0}",
        "moreInfo": "Clique para mais informações",
        "noResults": "nenhum resultado para {0}.",
        "primary": "ligações principais",
        "share": "proporção",
        "total": "total",
        "values": "valores",
        "including": "Incluindo",
        "or": "ou"
    },
    "message": {
        "data": "a analisar os dados",
        "draw": "a desenhar a visualização",
        "initializing": "a inicializar {0}",
        "loading": "a carregar os dados",
        "tooltipReset": "a actualizar as caixas de informação",
        "ui": "a actualizar o interface"
    },
    "uppercase": [
        "CEO",
        "CEOs",
        "CFO",
        "CFOs",
        "CNC",
        "COO",
        "COOs",
        "CPU",
        "CPUs",
        "PIB",
        "HVAC",
        "ID",
        "TI",
        "I&D",
        "TV",
        "IU"
    ]
}

},{}],15:[function(require,module,exports){
module.exports = {
    "format": {
        "decimal": ",",
        "thousands": "\xa0",
        "grouping": [3],
        "currency": ["", " руб."],
        "dateTime": "%A, %e %B %Y г. %X",
        "date": "%d.%m.%Y",
        "time": "%H:%M:%S",
        "periods": ["AM", "PM"],
        "days": ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        "shortDays": ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
        "months": ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
        "shortMonths": ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
    },
    "dev": {
        "accepted": "{0} не принимаются значение {1}, пожалуйста, используйте один из следующих: {2}.",
        "deprecated": "Метод {0} был удален, пожалуйста, обновите ваш код, чтобы использовать {1}.",
        "noChange": "{0} не обновлен, поскольку он не изменится.",
        "noContainer": "не могу найти контейнер на странице соответствия {0}.",
        "of": "из",
        "oldStyle": "свойства стиля для {0} уже в настоящее время были встроен непосредственно в. {1} ().",
        "sameEdge": "Края не может связать себя. автоматически удаляя автореферентных ребро {0}.",
        "set": "{0} был установлен.",
        "setLong": "{0} установлено значение {1}.",
        "setContainer": "пожалуйста, определить контейнер DIV с помощью .container ()"
    },
    "error": {
        "accepted": "{0} не принимаются {1} для {2} визуализации, пожалуйста, используйте один из следующих: {3}.",
        "connections": "нет соединения, доступные для {0}.",
        "data": "данные недоступны",
        "dataYear": "нет данных {0}.",
        "lib": "{0} визуализации требуют загрузки {1} библиотеку.",
        "libs": "{0} визуализации требуют загрузки следующих библиотек: {1}.",
        "method": "{0} визуализации требуют установки {1} метода.",
        "methods": "{0} визуализации требуют установки следующих методов: {1}."
    },
    "lowercase": [
        "и",
        "как",
        "в",
        "но",
        "для",
        "из",
        "если в",
        "в",
        "недалеко",
        "ни",
        "на",
        "на",
        "или",
        "в",
        "что",
        "к",
        "с",
        "с помощью",
        "против",
        "против"
    ],
    "method": {
        "active": "активные сегменты",
        "color": "цвет",
        "depth": "глубина",
        "dev": "многословный",
        "focus": "фокус",
        "icon": "значок",
        "id": "ID",
        "height": "высота",
        "labels": "надписи",
        "legend": "легенда",
        "margin": "поле",
        "messages": "Сообщения о состоянии",
        "mute": "скрывать",
        "order": "порядок",
        "search": "поиск",
        "shape": "форма",
        "size": "размер",
        "solo": "изолировать",
        "style": "стиль",
        "temp": "временные сегменты",
        "text": "текст",
        "time": "время",
        "timeline": "график",
        "total": "всего сегментов",
        "type": "тип",
        "width": "ширина",
        "x": "ось х",
        "y": "Ось Y",
        "zoom": "масштаб",
        "mode": "режим"
    },
    "time": [
        "дата",
        "день",
        "месяц",
        "время",
        "год"
    ],
    "visualization": {
        "bubbles": "Пузыри",
        "chart": "График",
        "geo_map": "Гео Карта",
        "line": "Линия земля",
        "network": "Сеть",
        "rings": "Кольца",
        "scatter": "Разброс земля",
        "stacked": "С накоплением Площадь",
        "tree_map": "Дерево Карта",
        "bar": "Гистограмма",
        "box": "Коробка земля",
        "paths": "Пути",
        "pie": "Круговая диаграмма",
        "table": "Стол"
    },
    "ui": {
        "and": "и",
        "back": "назад",
        "collapse": "Щелкните, чтобы свернуть",
        "error": "ошибка",
        "expand": "щелкните, чтобы развернуть",
        "loading": "загрузка ...",
        "more": "{0} более",
        "moreInfo": "нажмите для получения более подробной информации",
        "noResults": "нет результатов, соответствующих {0}.",
        "primary": "первичные соединения",
        "share": "доля",
        "total": "общее",
        "values": "значения",
        "including": "включая",
        "or": "или"
    },
    "message": {
        "data": "Анализируя данные",
        "draw": "рисунок визуализация",
        "initializing": "инициализации {0}",
        "loading": "загрузка данных",
        "tooltipReset": "сброс подсказки",
        "ui": "обновление пользовательского интерфейса"
    },
    "uppercase": [
        "ID"
    ]
}

},{}],16:[function(require,module,exports){
module.exports = {
    "format": {
        "decimal": ".",
        "thousands": ",",
        "grouping": [3],
        "currency": ["¥", ""],
        "dateTime": "%A %B %e %Y %X",
        "date": "%Y/%-m/%-d",
        "time": "%H:%M:%S",
        "periods": ["上午", "下午"],
        "days": ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        "shortDays": ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        "months": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        "shortMonths": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
    },
    "dev": {
        "accepted": "{0}不是{1}的可接受值, 请用下列之一的值:{2}",
        "deprecated": "{0}的方法已被移除, 请更新您的代码去使用{1}",
        "noChange": "{0}没有更新, 因为它并没有改变。",
        "noContainer": "无法在该页找到容器去匹配{0}",
        "of": "的",
        "oldStyle": "样式属性{0}现在已经直接嵌入到。{1}（）。",
        "sameEdge": "边缘不能链接到自己。自动去除自我参照边缘{0}。",
        "set": "{0}已经被设置。",
        "setLong": "{0}被设置为{1}。",
        "setContainer": "请使用()容器来定义div容器"
    },
    "error": {
        "accepted": "{0}对于{2}的可视化效果并不是一个可接受的{1}, 请使用如下的一个：{3}.",
        "connections": "没有对{0}可用的连接。",
        "data": "无可用数据",
        "dataYear": "没有数据对{0}可用。",
        "lib": "{0}的可视化要求装载{1}库。",
        "libs": "{0}的可视化需要加载以下库：{1}。",
        "method": "{0}的可视化要求设置{1}方法。",
        "methods": "{0}的可视化要求设置以下方法：{1}。"
    },
    "lowercase": [
        "一个",
        "和",
        "在",
        "但是",
        "在...里",
        "的",
        "或者",
        "这",
        "向",
        "与...一起"
    ],
    "method": {
        "active": "活跃段",
        "color": "颜色",
        "depth": "深度",
        "dev": "详细",
        "focus": "焦点",
        "icon": "图标",
        "id": "身份认证",
        "height": "高度",
        "labels": "标签",
        "legend": "图例注释",
        "margin": "外边距",
        "messages": "状态消息",
        "mute": "隐藏",
        "order": "规则",
        "search": "搜索",
        "shape": "形状",
        "size": "大小",
        "solo": "隔离",
        "style": "样式",
        "temp": "暂时性区段",
        "text": "文本",
        "time": "时间",
        "timeline": "时间轴",
        "total": "总段",
        "type": "类型",
        "width": "宽度",
        "x": "X轴",
        "y": "Y轴",
        "zoom": "缩放",
        "mode": "模式"
    },
    "time": [
        "日",
        "星期",
        "月",
        "时间",
        "年"
    ],
    "visualization": {
        "bubbles": "气泡",
        "chart": "图表",
        "geo_map": "地理地图",
        "line": "线图",
        "network": "网络",
        "rings": "特性",
        "scatter": "散点图",
        "stacked": "堆积面积图",
        "tree_map": "树图",
        "bar": "条图",
        "box": "箱线图",
        "paths": "路径",
        "pie": "饼图",
        "table": "表"
    },
    "ui": {
        "and": "和",
        "back": "后面",
        "collapse": "点击合并",
        "error": "错误",
        "expand": "单击以展开",
        "loading": "载入中...",
        "more": "{0}更多",
        "moreInfo": "点击了解更多信息",
        "noResults": "没有结果匹配{0}。",
        "primary": "主要连接",
        "share": "共享",
        "total": "总",
        "values": "值",
        "including": "包括",
        "or": "或"
    },
    "message": {
        "data": "分析数据",
        "draw": "绘制可视化",
        "initializing": "初始化{0}",
        "loading": "加载数据",
        "tooltipReset": "重置工具提示",
        "ui": "更新UI"
    },
    "uppercase": [
        "CEO",
        "CEOs",
        "CFO",
        "CFOs",
        "CNC",
        "COO",
        "COOs",
        "CPU",
        "CPUs",
        "GDP",
        "HVAC",
        "ID",
        "电视",
        "用户界面",
        "研发"
    ]
}

},{}],17:[function(require,module,exports){
module.exports = {
  en_US: require("./languages/en_US.coffee"),
  es_ES: require("./languages/es_ES.js"),
  fr_FR: require("./languages/fr_FR.js"),
  mk_MK: require("./languages/mk_MK.js"),
  pt_BR: require("./languages/pt_BR.js"),
  pt_PT: require("./languages/pt_PT.js"),
  ru_RU: require("./languages/ru_RU.js"),
  zh_CN: require("./languages/zh_CN.js")
};


},{"./languages/en_US.coffee":9,"./languages/es_ES.js":10,"./languages/fr_FR.js":11,"./languages/mk_MK.js":12,"./languages/pt_BR.js":13,"./languages/pt_PT.js":14,"./languages/ru_RU.js":15,"./languages/zh_CN.js":16}],18:[function(require,module,exports){
var checkObject, copy, createFunction, initialize, print, process, setMethod, stringFormat, validObject;

copy = require("../../util/copy.coffee");

print = require("../console/print.coffee");

process = require("./process/detect.coffee");

setMethod = require("./set.coffee");

stringFormat = require("../../string/format.js");

validObject = require("../../object/validate.coffee");

module.exports = function(vars, methods) {
  var method, obj, results;
  results = [];
  for (method in methods) {
    obj = methods[method];
    vars[method] = copy(obj);
    vars[method].initialized = initialize(vars, vars[method], method);
    results.push(vars.self[method] = createFunction(vars, method));
  }
  return results;
};

initialize = function(vars, obj, method, p) {
  var d, deps, i, len, o;
  obj.previous = false;
  obj.changed = false;
  obj.initialized = false;
  obj.callback = false;
  if ("init" in obj && (!("value" in obj))) {
    obj.value = obj.init(vars);
    delete obj.init;
  }
  if ("process" in obj) {
    obj.value = process(vars, obj, obj.value);
  }
  for (o in obj) {
    if (o === "deprecates") {
      deps = obj[o] instanceof Array ? obj[o] : [obj[o]];
      for (i = 0, len = deps.length; i < len; i++) {
        d = deps[i];
        vars.self[d] = (function(dep, n) {
          return function(x) {
            var doc, rec, str;
            str = vars.format.locale.value.dev.deprecated;
            dep = "." + dep + "()";
            rec = p ? "\"" + n + "\" in ." + p + "()" : "." + n + "()";
            doc = p || n;
            print.error(stringFormat(str, dep, rec), doc);
            return vars.self;
          };
        })(d, method);
      }
    } else if (o === "global") {
      if (!(method in vars)) {
        vars[method] = [];
      }
    } else if (o !== "value") {
      if (validObject(obj[o])) {
        initialize(vars, obj[o], o, method);
      }
    }
  }
  return true;
};

createFunction = function(vars, key) {
  return function(user, callback) {
    var accepted, checkFont, checkValue, fontAttr, fontAttrValue, s, starting, str;
    accepted = "accepted" in vars[key] ? vars[key].accepted : null;
    if (typeof accepted === "function") {
      accepted = accepted(vars);
    }
    if (!(accepted instanceof Array)) {
      accepted = [accepted];
    }
    if (user === Object) {
      return vars[key];
    } else if (!arguments.length && accepted.indexOf(void 0) < 0) {
      if ("value" in vars[key]) {
        return vars[key].value;
      } else {
        return vars[key];
      }
    }
    if (key === "style" && typeof user === "object") {
      str = vars.format.locale.value.dev.oldStyle;
      for (s in user) {
        print.warning(stringFormat(str, "\"" + s + "\"", s), s);
        vars.self[s](user[s]);
      }
    }
    if (key === "font") {
      if (typeof user === "string") {
        user = {
          family: user
        };
      }
      starting = true;
      checkValue = function(o, a, m, v) {
        if (validObject(o[m]) && a in o[m]) {
          if (validObject(o[m][a])) {
            if (o[m][a].process) {
              o[m][a].value = o[m][a].process(v);
            } else {
              o[m][a].value = v;
            }
          } else {
            o[m][a] = v;
          }
        }
      };
      checkFont = function(o, a, v) {
        var m;
        if (validObject(o)) {
          if (starting) {
            for (m in o) {
              checkValue(o, a, m, v);
            }
          } else if ("font" in o) {
            checkValue(o, a, "font", v);
          }
          starting = false;
          for (m in o) {
            checkFont(o[m], a, v);
          }
        }
      };
      for (fontAttr in user) {
        fontAttrValue = user[fontAttr];
        if (fontAttr !== "secondary") {
          if (validObject(fontAttrValue)) {
            fontAttrValue = fontAttrValue.value;
          }
          if (fontAttrValue) {
            checkFont(vars, fontAttr, fontAttrValue);
          }
        }
      }
    }
    checkObject(vars, key, vars, key, user);
    if (typeof callback === "function") {
      vars[key].callback = callback;
    }
    if (vars[key].chainable === false) {
      return vars[key].value;
    } else {
      return vars.self;
    }
  };
};

checkObject = function(vars, method, object, key, value) {
  var approvedObject, d, objectOnly, passingObject;
  if (["accepted", "changed", "initialized", "previous", "process"].indexOf(key) < 0) {
    passingObject = validObject(value);
    objectOnly = validObject(object[key]) && "objectAccess" in object[key] && object[key]["objectAccess"] === false;
    approvedObject = passingObject && (objectOnly || ((!("value" in value)) && (!(d3.keys(value)[0] in object[key]))));
    if (value === null || !passingObject || approvedObject) {
      setMethod(vars, method, object, key, value);
    } else if (passingObject) {
      for (d in value) {
        checkObject(vars, method, object[key], d, value[d]);
      }
    }
  }
};


},{"../../object/validate.coffee":25,"../../string/format.js":26,"../../util/copy.coffee":52,"../console/print.coffee":6,"./process/detect.coffee":19,"./set.coffee":21}],19:[function(require,module,exports){
var copy, update;

copy = require("../../../util/copy.coffee");

update = require("../../../array/update.coffee");

module.exports = function(vars, object, value) {
  if (object.process === Array) {
    return update(copy(object.value), value);
  } else if (typeof object.process === "object" && typeof value === "string") {
    return object.process[value];
  } else if (typeof object.process === "function") {
    return object.process(value, vars, object);
  } else {
    return value;
  }
};


},{"../../../array/update.coffee":2,"../../../util/copy.coffee":52}],20:[function(require,module,exports){
var contains, format, list, print;

contains = require("../../array/contains.coffee");

format = require("../../string/format.js");

list = require("../../string/list.coffee");

print = require("../console/print.coffee");

module.exports = function(vars, accepted, value, method, text) {
  var a, allowed, app, i, len, recs, str, val;
  if (typeof accepted === "function") {
    accepted = accepted(vars);
  }
  if (!(accepted instanceof Array)) {
    accepted = [accepted];
  }
  allowed = contains(accepted, value);
  if (allowed === false && value !== void 0) {
    recs = [];
    val = JSON.stringify(value);
    if (typeof value !== "string") {
      val = "\"" + val + "\"";
    }
    for (i = 0, len = accepted.length; i < len; i++) {
      a = accepted[i];
      if (typeof a === "string") {
        recs.push("\"" + a + "\"");
      } else if (typeof a === "function") {
        recs.push(a.toString().split("()")[0].substring(9));
      } else if (a === void 0) {
        recs.push("undefined");
      } else {
        recs.push(JSON.stringify(a));
      }
    }
    recs = list(recs, vars.format.locale.value.ui.or);
    if (vars.type && ["mode", "shape"].indexOf(method) >= 0) {
      str = vars.format.locale.value.error.accepted;
      app = vars.format.locale.value.visualization[vars.type.value] || vars.type.value;
      print.warning(format(str, val, method, app, recs), method);
    } else {
      str = vars.format.locale.value.dev.accepted;
      print.warning(format(str, val, text, recs), method);
    }
  }
  return !allowed;
};


},{"../../array/contains.coffee":1,"../../string/format.js":26,"../../string/list.coffee":27,"../console/print.coffee":6}],21:[function(require,module,exports){
var copy, d3selection, mergeObject, print, process, rejected, stringFormat, updateArray, validObject;

copy = require("../../util/copy.coffee");

d3selection = require("../../util/d3selection.coffee");

validObject = require("../../object/validate.coffee");

mergeObject = require("../../object/merge.coffee");

print = require("../console/print.coffee");

process = require("./process/detect.coffee");

rejected = require("./rejected.coffee");

stringFormat = require("../../string/format.js");

updateArray = require("../../array/update.coffee");

module.exports = function(vars, method, object, key, value) {
  var accepted, c, callback, d3object, hasValue, id, k, longArray, n, parentKey, str, text, typeFunction, valString;
  if (key === "value" || !key || key === method) {
    text = "." + method + "()";
  } else {
    text = "\"" + key + "\" " + vars.format.locale.value.dev.of + " ." + method + "()";
  }
  if (key === "value" && "accepted" in object) {
    accepted = object.accepted;
  } else if (validObject(object[key]) && "accepted" in object[key]) {
    accepted = object[key].accepted;
  } else {
    accepted = [value];
  }
  if (!rejected(vars, accepted, value, method, text)) {
    if (validObject(object[key]) && "value" in object[key]) {
      parentKey = key;
      object = object[key];
      key = "value";
    }
    if (key === "value" && "process" in object) {
      value = process(vars, object, value);
    }
    if ((!(object[key] instanceof Array)) && object[key] === value && value !== void 0) {
      str = vars.format.locale.value.dev.noChange;
      if (vars.dev.value) {
        print.comment(stringFormat(str, text));
      }
    } else {
      object.changed = true;
      if (object.loaded) {
        object.loaded = false;
      }
      if ("history" in vars && method !== "draw") {
        c = copy(object);
        c.method = method;
        vars.history.chain.push(c);
      }
      object.previous = object[key];
      if ("id" in vars && key === "value" && "nesting" in object) {
        if (method !== "id") {
          if (typeof object.nesting !== "object") {
            object.nesting = {};
          }
          if (validObject(value)) {
            for (id in value) {
              if (typeof value[id] === "string") {
                value[id] = [value[id]];
              }
            }
            object.nesting = mergeObject(object.nesting, value);
            if (!(vars.id.value in object.nesting)) {
              object.nesting[vars.id.value] = value[d3.keys(value)[0]];
            }
          } else if (value instanceof Array) {
            object.nesting[vars.id.value] = value;
          } else {
            object.nesting[vars.id.value] = [value];
          }
          object[key] = object.nesting[vars.id.value][0];
        } else {
          if (value instanceof Array) {
            object.nesting = value;
            if ("depth" in vars && vars.depth.value < value.length) {
              object[key] = value[vars.depth.value];
            } else {
              object[key] = value[0];
              if ("depth" in vars) {
                vars.depth.value = 0;
              }
            }
          } else {
            object[key] = value;
            object.nesting = [value];
            if ("depth" in vars) {
              vars.depth.value = 0;
            }
          }
        }
      } else if (method === "depth") {
        if (value >= vars.id.nesting.length) {
          vars.depth.value = vars.id.nesting.length - 1;
        } else if (value < 0) {
          vars.depth.value = 0;
        } else {
          vars.depth.value = value;
        }
        vars.id.value = vars.id.nesting[vars.depth.value];
        if (typeof vars.text.nesting === "object") {
          n = vars.text.nesting[vars.id.value];
          if (n) {
            vars.text.nesting[vars.id.value] = typeof n === "string" ? [n] : n;
            vars.text.value = (n instanceof Array ? n[0] : n);
          }
        }
      } else if (validObject(object[key]) && validObject(value)) {
        object[key] = mergeObject(object[key], value);
      } else {
        object[key] = value;
      }
      if (key === "value" && object.global) {
        hasValue = object[key].length > 0;
        k = parentKey || key;
        if (k in vars && ((hasValue && vars.data[k].indexOf(method) < 0) || (!hasValue && vars.data[k].indexOf(method) >= 0))) {
          vars.data[k] = updateArray(vars.data[k], method);
        }
      }
      if (key === "value" && object.dataFilter && vars.data && vars.data.filters.indexOf(method) < 0) {
        vars.data.filters.push(method);
      }
      if (vars.dev.value && object.changed && object[key] !== void 0) {
        longArray = object[key] instanceof Array && object[key].length > 10;
        d3object = d3selection(object[key]);
        typeFunction = typeof object[key] === "function";
        valString = (!longArray && !d3object && !typeFunction ? (typeof object[key] === "string" ? object[key] : JSON.stringify(object[key])) : null);
        if (valString !== null && valString.length < 260) {
          str = vars.format.locale.value.dev.setLong;
          print.log(stringFormat(str, text, "\"" + valString + "\""));
        } else {
          str = vars.format.locale.value.dev.set;
          print.log(stringFormat(str, text));
        }
      }
    }
    if (key === "value" && object.callback && !object.url) {
      callback = typeof object.callback === "function" ? object.callback : object.callback.value;
      if (callback) {
        callback(value, vars.self);
      }
    }
  }
};


},{"../../array/update.coffee":2,"../../object/merge.coffee":24,"../../object/validate.coffee":25,"../../string/format.js":26,"../../util/copy.coffee":52,"../../util/d3selection.coffee":53,"../console/print.coffee":6,"./process/detect.coffee":19,"./rejected.coffee":20}],22:[function(require,module,exports){
var fontTester, getHeight, getWidth;

fontTester = require("../core/font/tester.coffee");

module.exports = function(words, style, opts) {
  var attr, sizes, tester, tspans;
  if (!opts) {
    opts = {};
  }
  tester = opts.parent || fontTester("svg").append("text");
  style = style || {};
  sizes = [];
  if (!(words instanceof Array)) {
    words = [words];
  }
  tspans = tester.selectAll("tspan").data(words);
  attr = {
    left: "0px",
    position: "absolute",
    top: "0px",
    x: 0,
    y: 0
  };
  tspans.enter().append("tspan").text(String).style(style).attr(attr).each(function(d) {
    if (typeof opts.mod === "function") {
      return opts.mod(this);
    }
  }).each(function(d) {
    var children, height, width;
    children = d3.select(this).selectAll("tspan");
    if (children.size()) {
      width = [];
      children.each(function() {
        return width.push(getWidth(this));
      });
      width = d3.max(width);
    } else {
      width = getWidth(this);
    }
    height = getHeight(this);
    return sizes.push({
      height: height,
      text: d,
      width: width
    });
  });
  tspans.remove();
  if (!opts.parent) {
    tester.remove();
  }
  return sizes;
};

getWidth = function(elem) {
  return elem.getComputedTextLength();
};

getHeight = function(elem) {
  return elem.offsetHeight || elem.getBoundingClientRect().height || elem.parentNode.getBBox().height;
};


},{"../core/font/tester.coffee":8}],23:[function(require,module,exports){

/**
 * @class d3plus
 */
var d3plus;

d3plus = {};

if (typeof window !== "undefined") {
  window.d3plus = d3plus;
}

module.exports = d3plus;


/**
 * The current version of **D3plus** you are using. Returns a string in
 * [semantic versioning](http://semver.org/) format.
 * @property d3plus.version
 * @for d3plus
 * @type String
 * @static
 */

d3plus.version = "1.8.1 - Cerulean (pre-release)";


/**
 * The URL for the repo, used internally for certain error messages.
 * @property d3plus.repo
 * @for d3plus
 * @type String
 * @static
 */

d3plus.repo = "https://github.com/alexandersimoes/d3plus/";


/**
 * D3plus SVG Textwrapping
 * @class d3plus.textwrap
 * @for d3plus
 */

d3plus.textwrap = require("./textwrap/textwrap.coffee");


},{"./textwrap/textwrap.coffee":51}],24:[function(require,module,exports){
var d3selection, validate;

d3selection = require("../util/d3selection.coffee");

validate = require("./validate.coffee");


/**
 * Given any two objects, this method will merge the two objects together, returning a new third object. The values of the second object always overwrite the first.
 * @method d3plus.object.merge
 * @for d3plus.object
 * @param obj1 {Object} The primary object.
 * @param obj2 {Object} The secondary object to merge into the first.
 * @return {Object}
 */

module.exports = function(obj1, obj2) {
  var copyObject, obj3;
  copyObject = function(obj, ret, shallow) {
    var k, results, v;
    results = [];
    for (k in obj) {
      v = obj[k];
      if (typeof v !== "undefined") {
        if (!shallow && validate(v)) {
          if (typeof ret[k] !== "object") {
            ret[k] = {};
          }
          results.push(copyObject(v, ret[k], k.indexOf("d3plus") === 0));
        } else if (!d3selection(v) && v instanceof Array) {
          results.push(ret[k] = v.slice(0));
        } else {
          results.push(ret[k] = v);
        }
      } else {
        results.push(void 0);
      }
    }
    return results;
  };
  obj3 = {};
  if (obj1) {
    copyObject(obj1, obj3);
  }
  if (obj2) {
    copyObject(obj2, obj3);
  }
  return obj3;
};


},{"../util/d3selection.coffee":53,"./validate.coffee":25}],25:[function(require,module,exports){

/**
 * This function returns true if the variable passed is a literal javascript keyed Object. It's a small, simple function, but it catches some edge-cases that can throw off your code (such as Arrays and `null`).
 * @method d3plus.object.validate
 * @for d3plus.object
 * @param obj {Object} The object to validate.
 * @return {Boolean}
 */
module.exports = function(obj) {
  return obj && obj.constructor === Object;
};


},{}],26:[function(require,module,exports){
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Formats a string similar to Python's "format"
//------------------------------------------------------------------------------
module.exports = function() {

  var args = Array.prototype.slice.call(arguments)
    , str = args.shift()

  str.unkeyed_index = 0;
  return str.replace(/\{(\w*)\}/g, function(match, key) {
      if (key === '') {
          key = str.unkeyed_index;
          str.unkeyed_index++
      }
      if (key == +key) {
          return args[key] !== 'undefined'
              ? args[key]
              : match;
      } else {
          for (var i = 0; i < args.length; i++) {
              if (typeof args[i] === 'object' && typeof args[i][key] !== 'undefined') {
                  return args[i][key];
              }
          }
          return match;
      }
  }.bind(str));

}

},{}],27:[function(require,module,exports){
var format, locale;

format = require("./format.js");

locale = require("../core/locale/languages/en_US.coffee").ui;

module.exports = function(list, andText, max, moreText) {
  var amount;
  if (!(list instanceof Array)) {
    return list;
  } else {
    list = list.slice(0);
  }
  if (!andText) {
    andText = locale.and;
  }
  if (!moreText) {
    moreText = locale.moreText;
  }
  if (list.length === 2) {
    return list.join(" " + andText + " ");
  } else {
    if (max && list.length > max) {
      amount = list.length - max + 1;
      list = list.slice(0, max - 1);
      list[max - 1] = format(moreText, amount);
    }
    if (list.length > 1) {
      list[list.length - 1] = andText + " " + list[list.length - 1];
    }
    return list.join(", ");
  }
};


},{"../core/locale/languages/en_US.coffee":9,"./format.js":26}],28:[function(require,module,exports){
var foreign, tspan;

foreign = require("./foreign.coffee");

tspan = require("./tspan.coffee");

module.exports = function(vars) {
  if (vars.text.html.value) {
    foreign(vars);
  } else {
    tspan(vars);
  }
};


},{"./foreign.coffee":29,"./tspan.coffee":32}],29:[function(require,module,exports){
module.exports = function(vars) {
  var anchor, color, family, opacity, text;
  text = vars.container.value;
  family = text.attr("font-family") || text.style("font-family");
  anchor = vars.align.value || text.attr("text-anchor") || text.style("text-anchor");
  color = text.attr("fill") || text.style("fill");
  opacity = text.attr("opacity") || text.style("opacity");
  anchor = anchor === "end" ? "right" : (anchor === "middle" ? "center" : "left");
  d3.select(text.node().parentNode).append("foreignObject").attr("width", vars.width.value + "px").attr("height", vars.height.value + "px").attr("x", "0px").attr("y", "0px").append("xhtml:div").style("font-family", family).style("font-size", vars.size.value[1] + "px").style("color", color).style("text-align", anchor).style("opacity", opacity).text(vars.text.current);
};


},{}],30:[function(require,module,exports){
module.exports = function(vars) {
  var diff, elem, height, prev, radius, shape, size, width, x, y;
  elem = vars.container.value;
  prev = elem.node().previousElementSibling;
  shape = prev ? prev.tagName.toLowerCase() : "";
  if (prev) {
    prev = d3.select(prev);
  }
  vars.container.x = vars.x.value || parseFloat(elem.attr("x"), 10);
  vars.container.y = vars.y.value || parseFloat(elem.attr("y"), 10);
  if (prev) {
    if (vars.shape.accepted.indexOf(shape) >= 0) {
      vars.self.shape(shape);
    }
    if (shape === "rect") {
      x = parseFloat(prev.attr("x"), 10) || 0;
      y = parseFloat(prev.attr("y"), 10) || 0;
      if (vars.padding.value === false) {
        diff = Math.abs(x - vars.container.x);
        if (diff) {
          vars.self.padding(diff);
        }
      }
      if (!vars.container.x) {
        vars.container.x = x + vars.padding.value;
      }
      if (!vars.container.y) {
        vars.container.y = y + vars.padding.value;
      }
      if (!vars.width.value) {
        width = parseFloat(prev.attr("width" || prev.style("width", 10)));
        vars.self.width(width);
      }
      if (!vars.height.value) {
        height = parseFloat(prev.attr("height" || prev.style("height", 10)));
        vars.self.height(height);
      }
    } else if (shape === "circle") {
      radius = parseFloat(prev.attr("r"), 10);
      x = parseFloat(prev.attr("cx"), 10) || 0;
      x -= radius;
      y = parseFloat(prev.attr("cy"), 10) || 0;
      y -= radius;
      if (vars.padding.value === false) {
        diff = Math.abs(x - vars.container.x);
        if (diff) {
          vars.self.padding(diff);
        }
      }
      if (!vars.container.x) {
        vars.container.x = x + vars.padding.value;
      }
      if (!vars.container.y) {
        vars.container.y = y + vars.padding.value;
      }
      if (!vars.width.value) {
        vars.self.width(radius * 2, 10);
      }
      if (!vars.height.value) {
        vars.self.height(radius * 2, 10);
      }
    } else {
      if (!vars.width.value) {
        vars.self.width(500);
      }
      if (!vars.height.value) {
        vars.self.height(500);
      }
    }
  }
  if (!vars.container.x) {
    vars.container.x = 0;
  }
  if (!vars.container.y) {
    vars.container.y = 0;
  }
  vars.width.inner = vars.width.value - vars.padding.value * 2;
  vars.height.inner = vars.height.value - vars.padding.value * 2;
  size = elem.attr("font-size") || elem.style("font-size");
  size = parseFloat(size, 10);
  vars.container.fontSize = size;
  vars.container.dy = parseFloat(elem.attr("dy"), 10);
  if (!vars.size.value) {
    if (vars.resize.value) {
      return vars.self.size([4, 80]);
    } else {
      return vars.self.size([size / 2, size]);
    }
  }
};


},{}],31:[function(require,module,exports){
module.exports = function(vars) {
  var text;
  if (!vars.text.value) {
    text = vars.container.value.text();
    if (text) {
      if (text.indexOf("tspan") >= 0) {
        text.replace(/\<\/tspan\>\<tspan\>/g, " ");
        text.replace(/\<\/tspan\>/g, "");
        text.replace(/\<tspan\>/g, "");
      }
      text = text.replace(/(\r\n|\n|\r)/gm, "");
      text = text.replace(/^\s+|\s+$/g, "");
      vars.self.text(text);
    }
  }
  if (vars.text.value instanceof Array) {
    vars.text.phrases = vars.text.value.filter(function(t) {
      return ["string", "number"].indexOf(typeof t) >= 0;
    });
  } else {
    vars.text.phrases = [vars.text.value + ""];
  }
  if (!vars.align.value) {
    return vars.container.align = vars.container.value.style("text-anchor") || vars.container.value.attr("text-anchor");
  }
};


},{}],32:[function(require,module,exports){
var rtl;

rtl = require("../../client/rtl.coffee");

module.exports = function(vars) {
  var anchor, dx, dy, ellipsis, fontSize, h, height, line, lineWidth, lines, mirror, newLine, placeWord, progress, reverse, rmod, rotate, rx, ry, space, start, textBox, translate, truncate, valign, width, words, wrap, x, y, yOffset;
  newLine = function(w, first) {
    var tspan;
    if (!w) {
      w = "";
    }
    if (!reverse || first) {
      tspan = vars.container.value.append("tspan");
    } else {
      tspan = vars.container.value.insert("tspan", "tspan");
    }
    return tspan.attr("x", x + "px").attr("dx", dx + "px").attr("dy", dy + "px").style("baseline-shift", "0%").attr("dominant-baseline", "alphabetic").text(w);
  };
  mirror = vars.rotate.value === -90 || vars.rotate.value === 90;
  width = mirror ? vars.height.inner : vars.width.inner;
  height = mirror ? vars.width.inner : vars.height.inner;
  if (vars.shape.value === "circle") {
    anchor = "middle";
  } else {
    anchor = vars.align.value || vars.container.align || "start";
  }
  if (anchor === "end" || (anchor === "start" && rtl)) {
    dx = width;
  } else if (anchor === "middle") {
    dx = width / 2;
  } else {
    dx = 0;
  }
  valign = vars.valign.value || "top";
  x = vars.container.x;
  fontSize = vars.resize.value ? vars.size.value[1] : vars.container.fontSize || vars.size.value[0];
  dy = vars.container.dy || fontSize * 1.1;
  textBox = null;
  progress = null;
  words = null;
  reverse = false;
  yOffset = 0;
  if (vars.shape.value === "circle") {
    if (valign === "middle") {
      yOffset = ((height / dy % 1) * dy) / 2;
    } else if (valign === "end") {
      yOffset = (height / dy % 1) * dy;
    }
  }
  vars.container.value.attr("text-anchor", anchor).attr("font-size", fontSize + "px").style("font-size", fontSize + "px").attr("x", vars.container.x).attr("y", vars.container.y);
  truncate = function() {
    textBox.remove();
    if (reverse) {
      line++;
      textBox = vars.container.value.select("tspan");
    } else {
      line--;
      textBox = d3.select(vars.container.value.node().lastChild);
    }
    if (!textBox.empty()) {
      words = textBox.text().match(/[^\s-]+-?/g);
      return ellipsis();
    }
  };
  lineWidth = function() {
    var b;
    if (vars.shape.value === "circle") {
      b = ((line - 1) * dy) + yOffset;
      if (b > height / 2) {
        b += dy;
      }
      return 2 * Math.sqrt(b * ((2 * (width / 2)) - b));
    } else {
      return width;
    }
  };
  ellipsis = function() {
    var lastChar, lastWord;
    if (words && words.length) {
      lastWord = words.pop();
      lastChar = lastWord.charAt(lastWord.length - 1);
      if (lastWord.length === 1 && vars.text.split.value.indexOf(lastWord) >= 0) {
        return ellipsis();
      } else {
        if (vars.text.split.value.indexOf(lastChar) >= 0) {
          lastWord = lastWord.substr(0, lastWord.length - 1);
        }
        textBox.text(words.join(" ") + " " + lastWord + "...");
        if (textBox.node().getComputedTextLength() > lineWidth()) {
          return ellipsis();
        }
      }
    } else {
      return truncate();
    }
  };
  placeWord = function(word) {
    var current, joiner, next_char;
    current = textBox.text();
    next_char = "";
    if (reverse) {
      next_char = vars.text.current.charAt(vars.text.current.length - progress.length - 1);
      joiner = next_char === " " ? " " : "";
      progress = word + joiner + progress;
      textBox.text(word + joiner + current);
    } else {
      next_char = vars.text.current.charAt(progress.length);
      joiner = next_char === " " ? " " : "";
      progress += joiner + word;
      textBox.text(current + joiner + word);
    }
    if (textBox.node().getComputedTextLength() > lineWidth() || next_char === "\n") {
      textBox.text(current);
      textBox = newLine(word);
      if (reverse) {
        return line--;
      } else {
        return line++;
      }
    }
  };
  start = 1;
  line = null;
  lines = null;
  wrap = function() {
    var i, len, next_char, unsafe, word;
    vars.container.value.selectAll("tspan").remove();
    vars.container.value.html("");
    words = vars.text.words.slice(0);
    if (reverse) {
      words.reverse();
    }
    progress = words[0];
    textBox = newLine(words.shift(), true);
    line = start;
    for (i = 0, len = words.length; i < len; i++) {
      word = words[i];
      if (line * dy > height) {
        truncate();
        break;
      }
      placeWord(word);
      unsafe = true;
      while (unsafe) {
        next_char = vars.text.current.charAt(progress.length + 1);
        unsafe = vars.text.split.value.indexOf(next_char) >= 0;
        if (unsafe) {
          placeWord(next_char);
        }
      }
    }
    if (line * dy > height) {
      truncate();
    }
    return lines = Math.abs(line - start) + 1;
  };
  wrap();
  lines = line;
  if (vars.shape.value === "circle") {
    space = height - lines * dy;
    if (space > dy) {
      if (valign === "middle") {
        start = (space / dy / 2 >> 0) + 1;
        wrap();
      } else if (valign === "bottom") {
        reverse = true;
        start = height / dy >> 0;
        wrap();
      }
    }
  }
  if (valign === "top") {
    y = 0;
  } else {
    h = lines * dy;
    y = valign === "middle" ? height / 2 - h / 2 : height - h;
  }
  y -= dy * 0.2;
  translate = "translate(0," + y + ")";
  if (vars.rotate.value === 180 || vars.rotate.value === -180) {
    rx = vars.container.x + width / 2;
    ry = vars.container.y + height / 2;
  } else {
    rmod = vars.rotate.value < 0 ? width : height;
    rx = vars.container.x + rmod / 2;
    ry = vars.container.y + rmod / 2;
  }
  rotate = "rotate(" + vars.rotate.value + ", " + rx + ", " + ry + ")";
  return vars.container.value.attr("transform", rotate + translate);
};


},{"../../client/rtl.coffee":4}],33:[function(require,module,exports){
var flow, fontSizes, resize, wrap;

flow = require("./flow.coffee");

fontSizes = require("../../font/sizes.coffee");

wrap = function(vars) {
  var firstChar;
  if (vars.text.phrases.length) {
    vars.text.current = vars.text.phrases.shift() + "";
    vars.text.words = vars.text.current.match(vars.text["break"]);
    firstChar = vars.text.current.charAt(0);
    if (firstChar !== vars.text.words[0].charAt(0)) {
      vars.text.words[0] = firstChar + vars.text.words[0];
    }
    vars.container.value.text("");
    if (vars.resize.value) {
      resize(vars);
    } else {
      flow(vars);
    }
  }
};

module.exports = wrap;

resize = function(vars) {
  var addon, areaMod, areaRatio, boxArea, height, heightMax, i, lineWidth, maxWidth, mirror, sizeMax, sizeRatio, sizes, textArea, width, widthRatio, words;
  words = [];
  i = 0;
  while (i < vars.text.words.length) {
    addon = (i === vars.text.words.length - 1 ? "" : " ");
    words.push(vars.text.words[i] + addon);
    i++;
  }
  mirror = vars.rotate.value === -90 || vars.rotate.value === 90;
  width = mirror ? vars.height.inner : vars.width.inner;
  height = mirror ? vars.width.inner : vars.height.inner;
  sizeMax = Math.floor(vars.size.value[1]);
  lineWidth = vars.shape.value === "circle" ? width * 0.75 : width;
  sizes = fontSizes(words, {
    "font-size": sizeMax + "px",
    parent: vars.container.value
  });
  maxWidth = d3.max(sizes, function(d) {
    return d.width;
  });
  areaMod = 1.165 + (width / height * 0.11);
  textArea = d3.sum(sizes, function(d) {
    var h;
    h = vars.container.dy || sizeMax * 1.2;
    return d.width * h;
  }) * areaMod;
  if (vars.shape.value === "circle") {
    boxArea = Math.PI * Math.pow(width / 2, 2);
  } else {
    boxArea = lineWidth * height;
  }
  if (maxWidth > lineWidth || textArea > boxArea) {
    areaRatio = Math.sqrt(boxArea / textArea);
    widthRatio = lineWidth / maxWidth;
    sizeRatio = d3.min([areaRatio, widthRatio]);
    sizeMax = d3.max([vars.size.value[0], Math.floor(sizeMax * sizeRatio)]);
  }
  heightMax = Math.floor(height * 0.8);
  if (sizeMax > heightMax) {
    sizeMax = heightMax;
  }
  if (maxWidth * (sizeMax / vars.size.value[1]) <= lineWidth) {
    if (sizeMax !== vars.size.value[1]) {
      vars.self.size([vars.size.value[0], sizeMax]);
    }
    flow(vars);
  } else {
    wrap(vars);
  }
};


},{"../../font/sizes.coffee":22,"./flow.coffee":28}],34:[function(require,module,exports){
module.exports = {
  accepted: [false, "start", "middle", "end", "left", "center", "right"],
  process: function(value) {
    var css;
    css = ["left", "center", "right"].indexOf(value);
    if (css >= 0) {
      value = this.accepted[css + 1];
    }
    return value;
  },
  value: false
};


},{}],35:[function(require,module,exports){
module.exports = {
  accepted: [Object],
  objectAccess: false,
  process: function(value, vars) {
    var method, setting;
    for (method in value) {
      setting = value[method];
      if (method in vars.self) {
        vars.self[method](setting);
      }
    }
    return value;
  },
  value: {}
};


},{}],36:[function(require,module,exports){
var d3selection;

d3selection = require("../../util/d3selection.coffee");

module.exports = {
  accepted: [false, Array, Object, String],
  element: false,
  id: "default",
  process: function(value) {
    if (value === false) {
      return false;
    } else if (d3selection(value)) {
      return value;
    } else if (value instanceof Array) {
      return d3.select(value[0][0]);
    } else {
      return d3.select(value);
    }
  },
  value: false
};


},{"../../util/d3selection.coffee":53}],37:[function(require,module,exports){
module.exports = {
  accepted: [Boolean],
  value: false
};


},{}],38:[function(require,module,exports){
var print, stringFormat;

print = require("../../core/console/print.coffee");

stringFormat = require("../../string/format.js");

module.exports = {
  accepted: [void 0],
  process: function(value, vars) {
    var str;
    if (this.initialized === false) {
      return value;
    }
    if (vars.container.value === false) {
      str = vars.format.locale.value.dev.setContainer;
      print.warning(str, "container");
    } else if (vars.container.value.empty()) {
      str = vars.format.locale.value.dev.noContainer;
      print.warning(stringFormat(str, "\"" + vars.container.value + "\""), "container");
    } else {
      if (vars.dev.value) {
        print.time("total draw time");
      }
      vars.container.value.call(vars.self);
    }
    return value;
  },
  value: void 0
};


},{"../../core/console/print.coffee":6,"../../string/format.js":26}],39:[function(require,module,exports){
var locale, mergeObject;

locale = require("../../core/locale/locale.coffee");

mergeObject = require("../../object/merge.coffee");

module.exports = {
  accepted: [Function, String],
  locale: {
    accepted: function() {
      return d3.keys(locale);
    },
    process: function(value) {
      var defaultLocale, returnObject;
      defaultLocale = "en_US";
      returnObject = locale[defaultLocale];
      if (value !== defaultLocale) {
        returnObject = mergeObject(returnObject, locale[value]);
      }
      this.language = value;
      return returnObject;
    },
    value: "en_US"
  },
  process: function(value, vars) {
    if (this.initialized && typeof value === "string") {
      vars.self.format({
        locale: value
      });
    } else {
      if (typeof value === "function") {
        return value;
      }
    }
    return this.value;
  },
  value: "en_US"
};


},{"../../core/locale/locale.coffee":17,"../../object/merge.coffee":24}],40:[function(require,module,exports){
module.exports = {
  accepted: [false, Number],
  value: false
};


},{}],41:[function(require,module,exports){
module.exports = {
  accepted: [false, Number],
  value: false
};


},{}],42:[function(require,module,exports){
module.exports = {
  accepted: [Boolean],
  value: false
};


},{}],43:[function(require,module,exports){
module.exports = {
  accepted: [-180, -90, 0, 90, 180],
  value: 0
};


},{}],44:[function(require,module,exports){
module.exports = {
  accepted: ["circle", "square"],
  value: false
};


},{}],45:[function(require,module,exports){
module.exports = {
  accepted: [Array, false],
  value: false
};


},{}],46:[function(require,module,exports){
module.exports = {
  accepted: [false, Array, Number, String],
  html: {
    accepted: [Boolean],
    value: false
  },
  init: function(vars) {
    var s;
    s = this.split.value;
    this["break"] = new RegExp("[^\\s\\" + s.join("\\") + "]+\\" + s.join("?\\") + "?", "g");
    return false;
  },
  split: {
    accepted: [Array],
    value: ["-", "/", ";", ":", "&"]
  }
};


},{}],47:[function(require,module,exports){
module.exports = {
  accepted: [false, "top", "middle", "bottom"],
  value: false
};


},{}],48:[function(require,module,exports){
module.exports = {
  accepted: [false, Number],
  value: false
};


},{}],49:[function(require,module,exports){
module.exports = {
  accepted: [false, Number],
  value: false
};


},{}],50:[function(require,module,exports){
module.exports = {
  accepted: [false, Number],
  value: false
};


},{}],51:[function(require,module,exports){
var attach, print, sizes, text, wrap;

attach = require("../core/methods/attach.coffee");

sizes = require("./helpers/parseSize.coffee");

print = require("../core/console/print.coffee");

text = require("./helpers/parseText.coffee");

wrap = require("./helpers/wrap.coffee");

module.exports = function() {
  var vars;
  vars = {
    self: function(selection) {
      selection.each(function() {
        sizes(vars);
        if (vars.size.value[0] <= vars.height.inner) {
          text(vars);
          wrap(vars);
        } else {
          vars.container.value.html("");
        }
        if (vars.dev.value) {
          print.timeEnd("total draw time");
        }
      });
      return vars.self;
    }
  };
  attach(vars, {
    align: require("./methods/align.coffee"),
    config: require("./methods/config.coffee"),
    container: require("./methods/container.coffee"),
    dev: require("./methods/dev.coffee"),
    draw: require("./methods/draw.coffee"),
    format: require("./methods/format.coffee"),
    height: require("./methods/height.coffee"),
    padding: require("./methods/padding.coffee"),
    resize: require("./methods/resize.coffee"),
    rotate: require("./methods/rotate.coffee"),
    text: require("./methods/text.coffee"),
    shape: require("./methods/shape.coffee"),
    size: require("./methods/size.coffee"),
    valign: require("./methods/valign.coffee"),
    width: require("./methods/width.coffee"),
    x: require("./methods/x.coffee"),
    y: require("./methods/y.coffee")
  });
  return vars.self;
};


},{"../core/console/print.coffee":6,"../core/methods/attach.coffee":18,"./helpers/parseSize.coffee":30,"./helpers/parseText.coffee":31,"./helpers/wrap.coffee":33,"./methods/align.coffee":34,"./methods/config.coffee":35,"./methods/container.coffee":36,"./methods/dev.coffee":37,"./methods/draw.coffee":38,"./methods/format.coffee":39,"./methods/height.coffee":40,"./methods/padding.coffee":41,"./methods/resize.coffee":42,"./methods/rotate.coffee":43,"./methods/shape.coffee":44,"./methods/size.coffee":45,"./methods/text.coffee":46,"./methods/valign.coffee":47,"./methods/width.coffee":48,"./methods/x.coffee":49,"./methods/y.coffee":50}],52:[function(require,module,exports){
var copy, objectMerge, objectValidate;

objectMerge = require("../object/merge.coffee");

objectValidate = require("../object/validate.coffee");

copy = function(variable) {
  var ret;
  if (objectValidate(variable)) {
    return objectMerge(variable);
  } else if (variable instanceof Array) {
    ret = [];
    variable.forEach(function(o) {
      return ret.push(copy(o));
    });
    return ret;
  } else {
    return variable;
  }
};

module.exports = copy;


},{"../object/merge.coffee":24,"../object/validate.coffee":25}],53:[function(require,module,exports){
var ie;

ie = require("../client/ie.js");

module.exports = function(elem) {
  if (ie) {
    return typeof elem === "object" && elem instanceof Array && "size" in elem && "select" in elem;
  } else {
    return elem instanceof d3.selection;
  }
};


},{"../client/ie.js":3}]},{},[23]);
