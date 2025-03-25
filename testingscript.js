(() => {
    "use strict";

    function openURL(url, isBlank = false) {
        let newWindow = window.open(isBlank ? "about:blank" : "https://classroom.google.com");
        newWindow.document.write(`
            <body style="margin:0;">
                <title>Home</title>
            </body>
        `);
        let iconLink = newWindow.document.createElement("link");
        iconLink.rel = "icon";
        iconLink.href = "https://www.gstatic.com/classroom/ic_product_classroom_144.png";
        newWindow.document.head.appendChild(iconLink);
        newWindow.document.querySelector("embed").src = url;
    }

    let htmlCode = !!window.chrome;

    document.body.innerHTML = htmlCode ? `
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
    ` : `
        <body>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Error</title>
            </head>
            <style id="style"></style>
            <p>This proxy is only functional on Chrome.</p>
        </body>
    `;

    document.querySelector("#style").innerHTML = `
/*styleshere*/
    `;

    if (htmlCode) {
        const form = document.querySelector("#enter-url-form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const enteredUrl = document.querySelector("#enter-url").value;
            if (enteredUrl && enteredUrl.length && enteredUrl.startsWith("http") && enteredUrl.includes(".")) {
                window.location.replace(enteredUrl);
            } else {
                alert("Invalid URL.");
            }
        });
    }
})();
