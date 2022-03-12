$(document).ready( () => {
    let coups;
    let gg;
    let restant;
    let mot;
    let entrée;
    let bouton;
    rand();

    function rand(){
        $.ajax({
            url: "http://localhost:63342/Wordle/liste_francais.txt",
            dataType: "text",
            type: "GET",
            async: true,
            success: (response) => {
                mot = response.split("\n")[Math.floor(Math.random() *22087)];
                init();
            },
        })
    }

    function init() {

    }
})