const todoArr = [



]

export function addTodo() {

    let button = document.querySelector(".button")
    button.onclick = function () {

        //Create and add the Todo item under the input
        let p = document.createElement("p")
        let inputContent = document.getElementById("todo").value
        let text = document.createTextNode(inputContent);

        p.appendChild(text)

        if (inputContent === '') {
            alert("You must write something!");
        } else {
            document.getElementById("list").appendChild(p);
            todoArr.splice(0, 0, p.innerText)
            console.log(todoArr)

        }
        document.getElementById("todo").value = "";

        let btn = document.createElement("button");
        btn.innerHTML = "X";
        btn.className = "close"
        btn.id = "close"
        btn.onclick = function () {

            let itemIndex = this.getAttribute('list');
            todoArr.splice(itemIndex, 1)
            p.style.removeProperty("background")
            p.innerHTML = ''
            //p.style.display = 'none'
            console.log(todoArr)

        }
        p.appendChild(btn);
        console.log("test passed");
    }


}
/*

function remove(elem){
  elem.parentNode.removeChild(elem);
}
<div id="i", onclick="remove(this)">click</div>

*/