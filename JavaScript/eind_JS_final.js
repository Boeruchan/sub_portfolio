// console.log("test");
let orange = "rgb(238, 184, 6)";
let white = "white";
let uitkomst;


//functie dat getal of operand oproept wanneer er op een knop gedrukt wordt.
function reply_click(clicked_id) {
    uitkomst = document.getElementById("output").innerText += clicked_id;
    //wanneer er op een knop wordt gedrukt can wordt er een C in de AC getoont.
    document.getElementById("ac").innerHTML = "C";
    //hulp bij gehad met het veranderen van woord click naar mousedown & mouseup
    document.querySelectorAll(".btnyellow").forEach(item => {
    item.addEventListener('mousedown', (e)=> {
        if (white) {
            item.style.color = orange;
            color = orange;
            item.style.backgroundColor = white;
            backgroundColor = white;
        } else {
            item.style.color = white;
            color = white;
            item.style.backgroundColor = orange;
            backgroundColor = orange;
        }
})
item.addEventListener('mouseup', (e)=> {
    if (orange) {
        item.style.color = white;
        color = white;
        item.style.backgroundColor = orange;
        backgroundColor = orange;
    } else {
        item.style.color = orange;
        color = orange;
        item.style.backgroundColor = white;
        backgroundColor = white;
    }
}) 
})
};   

//functie wanneer je op knop c drukt verandert het naar AC en verwijdert de string.
function reply_clear(clicked_id){
    let clear = document.getElementById("output").innerText = "";
    document.getElementById("ac").innerHTML = "AC";
}

//functie om een - of - weg te halen wat er in de output staat.
function reply_posneg() {
    uitkomst = document.getElementById("output").innerText;
    const minnetje="-";
    let addminnetje = minnetje.concat(uitkomst);
    let minminnetje = uitkomst.slice(1);
    if (uitkomst.indexOf("-")) {
        document.getElementById("output").innerText = addminnetje;
    }
    else {
        document.getElementById("output").innerText = minminnetje;
    }
}

//functie wanneer op knop (=) wordt gedrukt. 
function reply_totaal() {
    //split hulp bij gehad, //regex method, split bij operands
    let temp = uitkomst.split(/([+,-,*,/ ])/); 
    let totaal = document.getElementById("output").innerText;
    //wanneer er 3.length splits zijn met inhoud skip naar totaal = eval(totaal)
    // wanneer er 3.length splits zijn maar de laatste is zonder inhoud gat naar de totaal += temp[0] <-- vult "" met de eerste string
    if(temp.length === 3 && temp[2] === ""){
        totaal += temp[0];
      }
    totaal = eval(totaal);
    console.log(totaal)
    //als nummer geen rond getal is, dus decimaal, rond het naar 2 decimaal.
    if (!Number.isInteger(totaal)) {
        totaal = totaal.toFixed(2);
    }
    // De uiteindelijke antwoord in output.
    let antwoord = document.getElementById("output").innerText = totaal;
};








