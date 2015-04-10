(function() {
    "use strict";
    var title = document.createElement("h1");
    var body = document.getElementsByTagName("body")[0];
    title.appendChild(document.createTextNode("Hello webpack!"));
    body.appendChild(title);
})();
