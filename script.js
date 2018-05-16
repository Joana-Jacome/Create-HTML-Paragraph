function newParagraph(){
    let element = document.createElement("p");
    let main = document.getElementById("main");
    main.appendChild(element);

    let text = document.createTextNode("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat et, neque, accusamus reiciendis voluptate, qui facere dolorem laborum provident officia blanditiis quod eveniet ipsa aliquam! Voluptatibus natus totam ipsam autem");

    element.appendChild(text);
}