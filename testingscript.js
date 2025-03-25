(() => {
  "use strict";
  function open(open, submission = !1) {
    let enteredUrl = window.open(submission ? "about:blank" : "https://classroom.google.com");
    enteredUrl.document.write(
      '<body style="margin:0;">\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Home</title>\n<link rel="icon" href="https://i.ibb.co/wrFhgSJm/class.png">\n<embed src="https://google.com/" style="width:100vw;height:100vh;">\n</body>'
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
      ? '<body>\r\n<head>\r\n<meta charset="UTF-8">\r\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n<title>Launcher</title>\r\n</head>\r\n<style id="style"></style>\r\n<form id="enter-url-form">\r\n<input id="enter-url" type="text" placeholder="Enter URL...">\r\n</form>\r\n</body>'
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

/*
first:
<body style="margin:0;">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home</title>
  <link rel="icon" href="https://i.ibb.co/wrFhgSJm/class.png">
  <embed src="https://google.com/" style="width:100vw;height:100vh;">
</body>

second:
<body>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Launcher</title>
  </head>
  <style id="style"></style>
  <form id="enter-url-form">
    <input id="enter-url" type="text" placeholder="Enter URL...">
  </form>
</body>

third:
<body>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Launcher Error</title>
  </head>
  <style id="style"></style>
  <p>This launcher is only functional on Chrome.</p>
</body>
*/




