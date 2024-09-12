$(document).ready(function () {

    fetch('pokedex.json')
        .then((response) => response.json())
        .then((dataPokedex) => {
            // console.log(dataPokedex);



            //Declaration of variables
            let id = ['id'];
            let name = ['name']['english'];
            
            console.log(name);
            // this is to loop the data in API
            dataPokedex.forEach(pokemon => {
                
            });


        })
});