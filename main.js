window.onload = function () {

    let button = document.getElementById('button');
    button.addEventListener('click', function(){
        Refresh();
    });
    Refresh = () =>{  
    let number = document.getElementsByClassName('number')[0];
    let num = Math.floor(Math.random() * 12)+1; //13 lck+++
    console.log(num);
    let variable = Math.floor(Math.random() * 4)+1 ;
    let vari = "";
    switch (num) {
        case 1: num = "A";  break;
        case 10: num = "J"; break;
        case 11: num = "Q"; break;
        case 12: num = "K"; break;
    }
    switch (variable) {
        case 1: vari = "heart";    break;
        case 2: vari = "spade";    break;
        case 3: vari = "club";     break;
        case 4: vari = "diamond";  break;
    }
    number.innerHTML = num;

    let card = document.getElementsByClassName('card')[0];
    card.classList = `card ${vari}`;
}
 Refresh();
 };





