function gen() {
    for (let y = 1; y <= 30; y++) {
        for (let x = 1; x <= 30; x++) {
            let div = document.createElement("div");
            div.style.display = "block";
            div.style.position = "absolute";
            div.style.width = "32px";
            div.style.height = "32px";
            div.style.top = `${32*y}px`;
            div.style.left = `${32*x}px`;
            div.style.background = "white";
            div.onclick = (e) => {
                e.target.style.background = e.target.style.background == "white" ? "black" : "white";
            }

            div.style.border = "1px solid black";

            document.body.appendChild(div)
        }
    }    
}

function out() {
    let os = "B=\\left[";
    for (let el of document.querySelectorAll("div")) {
        os += el.style.background == "white" ? "0, " : "1, ";
    }
    os += "\\right]";
    navigator.clipboard.writeText(os);
}

gen();

let butt = document.createElement("button");
butt.onclick = "out";
butt.innerText = "output";
document.body.appendChild(butt);
