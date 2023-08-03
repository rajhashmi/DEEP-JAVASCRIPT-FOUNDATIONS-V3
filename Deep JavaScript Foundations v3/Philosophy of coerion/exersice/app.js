// International Coerison
let input = document.getElementById("input")
let invalidName = document.querySelector(".invalid")


function check(){
    let stringData = document.getElementById("input").value.trim();
    if(typeof stringData == "string" && stringData.length > 3){
        input.style.border = "2px solid gold"
        alert(`hello ${stringData} how are you?`)
        invalidName.style.display = "none"

        // document.location.reload()
    }else{
        input.style.border = "2px solid red"
        invalidName.style.display = "block"
    }
}

