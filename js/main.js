// variable which stores the input
// button clicks and a function takes the input and places it in a comment box below the button

function commentApp() {
    //store userimput into variables
    let userName = document.getElementById("username").value
    let inputComment = document.getElementById("comment").value

    //create
    const div = document.createElement("div");
    div.id = "div1";
    div.className = "commentdiv mx-auto";
    document.body.appendChild(div);

    const ul = document.createElement("ul");
    ul.className = "commentul";
    div.appendChild(ul);

    let input1 = document.createElement("li");
    let input2 = document.createElement("li");
    input1.className = "commentli"
    input2.className = "commentli"
    ul.appendChild(input1);
    ul.appendChild(input2);

    input1.textContent = "Username: " + userName;
    input2.textContent = "Comment: " + inputComment;
    
}






