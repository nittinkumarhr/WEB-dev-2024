var arr = [
    { name: "Nitin Kumar", status: "Stranger", img: "",p:"Lorem ipsum dolor sit amet connecter, adipisicing elit. Facere beatae quis voluptatibus similique, distinctio, illo impedit, tempora ipsam nam corrupti aperiam illum cupiditate tempore nemo eveniet laboriosam eligendi iusto aut." },
    { name: "Ashton Kumar", status: "Stranger", img: "",p:"Lorem ipsum dolor sit amet connecter, adipisicing elit. Facere beatae quis voluptatibus similique, distinctio, illo impedit, tempora ipsam nam corrupti aperiam illum cupiditate tempore nemo eveniet laboriosam eligendi iusto aut." },   
    { name: "KM Kumar", status: "Stranger", img: "" ,p:"Lorem ipsum dolor sit amet connecter, adipisicing elit. Facere beatae quis voluptatibus similique, distinctio, illo impedit, tempora ipsam nam corrupti aperiam illum cupiditate tempore nemo eveniet laboriosam eligendi iusto aut."},
];

function cardPrint(){
    var c = "";
    // Loop through the array and create a new div for each item
    arr.forEach((item, index) => {
        c += `<div class="card">
                <div class="logo">
                    <H2 id="cover">New </H2>
                </div>
                <h2>${item.name}</h2>
                <p>${item.p}</p>
                <h5 id="${item.status}">${item.status}</h5>
                <button  class ="${item.status === "Friend"?"black":"non"}" id="${index}">${item.status ==="Stranger"?"Add Friend":"Remove Friend"}</button>
            </div>`;
    });
    var main = document.getElementById("main");
    main.innerHTML = c;
}
cardPrint();

document.getElementById("main").addEventListener('click', function (params) {
    if (params.target.tagName === 'BUTTON') {
        var index = params.target.id;
        if (arr[index].status === "Stranger") {
            arr[index].status = "Friend";
          
        } else {
            arr[index].status = "Stranger";
            
        }
        cardPrint();
    }
});


// function ChangecardStatus(flag) {
//     const cover = document.getElementById('cover');
//     const status = document.getElementById('status');
//     const card = status.closest('.card');

//     if (flag == 1) {
//         card.style.backgroundColor = '#602727';
//         card.style.color = '#fff';
//         status.innerHTML = "Friendship go...";
//         status.style.color = 'green';
//         cover.style.opacity = 0;
//     } else {
//         card.style.backgroundColor = '#2a6027';
//         card.style.color = '#fff';
//         status.innerHTML = 'Stranger';
//         status.style.color = 'red';
//         cover.style.opacity = 1;
//     }
// }
