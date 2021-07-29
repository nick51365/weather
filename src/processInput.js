//Process raw input data into an array where
//[0] is city name and [1] is state name
function processInput(){
    event.preventDefault();
    let input = searchBar.value.toLowerCase();
    
    //Replace commas
    input = input.replace(","," ");

    //Split input into an array at spaces
    input = input.split(" ");

    //Remove unnecessary spaces
    for (let i = 0; i < input.length; i++){
        if(input[i] == ""){
            input.splice(i, 1);  
            i--;        
        }
    }
   
    //Clear the search bar
    searchBar.value = "";
    return input;
}

export{
    processInput,
}