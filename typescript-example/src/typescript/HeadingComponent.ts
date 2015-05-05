class HeadingComponent {
    render(msg: string) {
        var title = document.createElement("h1");
        var body = document.getElementsByTagName("body")[0];
        title.appendChild(document.createTextNode("Hello webpack " + msg + "!"));
        body.appendChild(title);
    }
}

export = HeadingComponent;
