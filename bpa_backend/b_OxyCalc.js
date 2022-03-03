
function calc(){

    var oxygenPerTree = 260;
    var numOfTrees = parseInt(document.getElementById('trees').value);

     var poundsOfOxygen = numofTrees * oxygenPerTree;
    document.getElementById('result').value = numOfTrees * 260;

}