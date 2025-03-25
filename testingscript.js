(() => {
  "use strict";
  function t(t, i = !1) {
    let e = window.open(i ? "about:blank" : "https://classroom.google.com");
    e.document.write(
      '\n        <body style="margin:0;">\n            <title>Home</title>\n\n            <embed src="https://hexbois.com" style="width:100vw;height:100vh;">\n\n            <script>\n            window.addEventListener("beforeunload", (ev)=>{\n                ev.returnValue = "a"\n                ev.preventDefault()\n                return "aa"\n            })\n            </script>\n        </body>\n    '
    );
    let r = e.document.createElement("link");
    (r.rel = "icon"),
      (r.href =
        "https://www.gstatic.com/classroom/ic_product_classroom_144.png"),
      e.document.head.appendChild(r),
      (e.document.querySelector("embed").src = t);
  }
  let i, e;
  let n, g, a = !!window.chrome;

  
    (document.body.innerHTML = a
      ? '<body>\r\n    <head>\r\n        <meta charset="UTF-8">\r\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n        <title>Launcher</title>\r\n    \r\n    </head>\r\n    <style id="style"></style>\r\n\r\n    <form id="enter-url-form"> \r\n        <input id="enter-url" type="text" placeholder="Custom URL (eg. https://hexbois.com)">\r\n    </form>\r\n   <div id="games"></div>\r\n\r\n</body>'
      : '<body>\r\n    <head>\r\n        <meta charset="UTF-8">\r\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n        <title>Launcher Error</title>\r\n    \r\n    </head>\r\n    <style id="style"></style>\r\n\r\n    <p>This launcher is only functional on Chromium based browsers.</p>\r\n\r\n</body>'),
    (document.querySelector("#style").innerHTML = "/*stylehere*/"),
    
    a &&
      ((i = document.querySelector("#enter-url-form")),
      (e = document.querySelector("#enter-url")),
      i.addEventListener("submit", function (i) {
        i.preventDefault(), t(e.value);
      }),
      (n = document.querySelector("#games")),
      r.M.forEach((i) => {
        n.appendChild(e);
      }));
})();
