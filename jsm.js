const tags = [
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  's',
  'samp',
  'script',
  'search',
  'section',
  'select',
  'slot',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'template',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'video'
];

function jsmMakeElement(name) {
  if (typeof(name) !== "string") {
    console.log("wrong type of argument to jsmMakeElement");
    return null;
  }
  let el = document.createElement(name);
  for (let i = 1; i < arguments.length; i++){
    switch (true) {
      case /String/.test(arguments[i].constructor.name):
        el.textContent = arguments[i];
        break;
      case /Object/.test(arguments[i].constructor.name):
        for (let x in arguments[i]) {
          el[x] = arguments[i][x];
        }
        break;
      case /HTML.*Element/.test(arguments[i].constructor.name):
        el.appendChild(arguments[i]);
        break;
      default:
        console.log("idk what to do with this ", arguments[i].constructor.name);
    }
  }
  return el;
}

for (let i in tags) {
  window[tags[i]] = function() {
    return jsmMakeElement(tags[i], ...arguments);
  }
}

window.addEventListener("load", () => {
  document.body.appendChild(
    section({className: "outer"},
      nav(ul(
        li(a("Home", {href: "#/"})),
        li(a("Login", {href: "#/login"}))
      )),
      section({className: "inner"},
        p("Placeholder text")
      )
    )
  );
});