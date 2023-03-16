let windowslogo= document.getElementsByClassName("windowslogo")[0]
let startmenu= document.getElementsByClassName("startmenu")[0]


windowslogo.addEventListener("click", ()=>{
    console.log("jaghabns")
    if(startmenu.style.bottom=="-655px"){
        startmenu.style.bottom="50px";
    }
    else{
        startmenu.style.bottom="-655px";
    }
})


let searchlogo= document.getElementsByClassName("searchlogo")[0]
let searchmenu= document.getElementsByClassName("searchmenu")[0]


searchlogo.addEventListener("click", ()=>{
    console.log("jaghabns")
    if(searchmenu.style.bottom=="-710px"){
        searchmenu.style.bottom="50px";
    }
    else{
        searchmenu.style.bottom="-710px";
    }
})