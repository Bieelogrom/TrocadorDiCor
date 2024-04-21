var index = 0

function trocarCor(){
    var cores = ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"]

    document.getElementsByTagName("body")[0].style.backgroundColor = cores[index++]

    if(index > cores.length - 1){
        alert(cores.length)
        index = 0
    }
}