render = ->
    title = document.createElement "h1"
    body = document.getElementsByTagName("body")[0]
    title.appendChild document.createTextNode "Hello webpack coffee script loader!"
    body.appendChild title


module.exports = render: render
