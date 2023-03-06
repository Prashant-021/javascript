function changeColor(){
    document.getElementById('box').style = 'background-color:red'
}
function increasefont(){
    var element = document.getElementById('text-box')
    var font_size = window.getComputedStyle(element).getPropertyValue('font-size') 
    console.log(font_size)
    element.style.fontSize = (parseInt(font_size) + 3) + 'px'
}
function decreasefont(){
    var element = document.getElementById('text-box')
    var font_size = window.getComputedStyle(element).getPropertyValue('font-size') 
    console.log(font_size)
    element.style.fontSize = (parseInt(font_size) - 3) + 'px'
}

function printfun(){
    window.print()
}





