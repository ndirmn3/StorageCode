(() => {
  "use strict";
  function open(open, submission = !1) {
    let enteredUrl = window.open(submission ? "about:blank" : "https://classroom.google.com");
    enteredUrl.document.write(
      '<body style="margin:0;">\n<title>Home</title>\n<embed src="https://hexbois.com" style="width:100vw;height:100vh;">\n<script>\nwindow.addEventListener("beforeunload", (ev)=>{  \n  ev.returnValue = "chromeCheck"  \n  ev.preventDefault() \n  return "aa" \n }) \n </script>  \n  </body> \n  '
    );
    let r = enteredUrl.document.createElement("link");
    (r.rel = "icon"),
      (r.href =
        "https://www.gstatic.com/classroom/ic_product_classroom_144.png"),
      enteredUrl.document.head.appendChild(r),
      (enteredUrl.document.querySelector("embed").src = open);
  }
  let submission, enteredUrl;
  let n, chromeCheck = !!window.chrome;

  
    (document.body.innerHTML = chromeCheck
      ? '<body>\r\n<head>\r\n<meta charset="UTF-8">\r\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n<title>Launcher</title>\r\n<head>\r\n<style id="style"></style>\r\n<form id="enter-url-form">\r\n<input id="enter-url" type="text" placeholder="Enter URL...">\r\n</form>\r\n</body>'
      : '<body>\r\n<head>\r\n<meta charset="UTF-8">\r\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n<title>Launcher Error</title>\r\n</head>\r\n<style id="style"></style>\r\n<p>This launcher is only functional on Chrome.</p>\r\n</body>'),
    (document.querySelector("#style").innerHTML = "/*stylehere*/"),
    
    chromeCheck &&
      ((submission = document.querySelector("#enter-url-form")),
      (enteredUrl = document.querySelector("#enter-url")),
      submission.addEventListener("submit", function (submission) {
        submission.preventDefault(), open(enteredUrl.value);
      }),
      (n = document.querySelector("#games")),
      r.M.forEach((submission) => {
        n.appendChild(enteredUrl);
      }));
})();
