var arr =[
    {dp: "https://www.w3schools.com/w3images/avatar2.png",img: "https://www.w3schools.com/w3images/nature.jpg"},
    {dp: "https://www.w3schools.com/w3images/avatar5.png",img: "https://www.w3schools.com/w3images/mountains.jpg"},
    {dp: "https://www.w3schools.com/w3images/avatar6.png",img: "https://www.w3schools.com/w3images/bridge.jpg"},
    {dp: "https://www.w3schools.com/w3images/avatar3.png",img: "https://www.w3schools.com/w3images/paris.jpg"},
    {dp: "https://www.w3schools.com/w3images/avatar4.png",img: "https://www.w3schools.com/w3images/nature.jpg"},
    {dp: "https://www.w3schools.com/w3images/avatar2.png",img: "https://www.w3schools.com/w3images/mountains.jpg"},
    {dp: "https://www.w3schools.com/w3images/avatar5.png",img: "https://www.w3schools.com/w3images/bridge.jpg"},
]
var htmlf ="";

arr.forEach(function(arr ,index) {
    htmlf +=  `<div id="story">
                    <img id ="${index}"src="${arr.dp}" alt="Avatar" style="width:100%">
                </div>`;
});
document.getElementById("inststory").innerHTML = htmlf;

// Fullscreen Image
document.getElementById("inststory").addEventListener("click", function( event ) {
    if (event.target.tagName === "IMG") {
        var imgfind = arr[event.target.id].img;
        var fullScreen = document.getElementById("fullScreen")
        fullScreen.style.display = "block";
        fullScreen.style.backgroundImage = `url(${imgfind})`;
        fullScreen.style.backgroundSize = "cover";
        fullScreen.style.backgroundPosition = "center";
        fullScreen.style.backgroundRepeat = "no-repeat";
        // Close Fullscreen Image after 5 seconds
        setTimeout(function(){ fullScreen.style.display = "none"; }, 4000);

        //gorw the progress bar
        var elem = document.getElementById("grow");

        var width = 0;
        var id = setInterval(frame, 40);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }

    }     
});
