var arr=[
    {dp:"https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , story:"https://images.pexels.com/photos/6939108/pexels-photo-6939108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {dp:"https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , story:"https://images.pexels.com/photos/3526967/pexels-photo-3526967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {dp:"https://images.pexels.com/photos/3783518/pexels-photo-3783518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , story:"https://images.pexels.com/photos/3772526/pexels-photo-3772526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {dp:"https://images.pexels.com/photos/3765551/pexels-photo-3765551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , story:"https://images.pexels.com/photos/3774980/pexels-photo-3774980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
]
var clutter = ""
arr.forEach(function(ele,idx){
    clutter += `<div class="story"><img id = "${idx}"src = "${ele.dp}" alt=""></div>`
})

var stry = document.querySelector(".storiyan")
stry.innerHTML = clutter

stry.addEventListener("click",function(dets){
   document.querySelector("#fullscreen").style.display = "block"
   document.querySelector("#fullscreen").style.backgroundImage= `url(${arr[dets.target.id].story})`

    setTimeout(() => {
        document.querySelector("#fullscreen").style.display = "none"

    }, 2000);
})


