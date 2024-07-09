# JavaScriptMarkup

This is a terrible idea, which I think has been done before, that I needed to put out of my mind.
So I'm putting it here.

```
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
```