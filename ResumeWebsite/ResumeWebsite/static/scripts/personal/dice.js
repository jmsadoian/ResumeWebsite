var rowCount = 0;
$( document ).ready(function()  {
    addDice();
});

function addDice(){
    rowCount += 1;

    let container = $('#diceContainer');
    container.append(`
    <div id = "dice${rowCount}" class="diceForm" >
        <div class="row">
            <div class="col-sm-2">
                
                <select name="dice" id="dietype${rowCount}">
                    <option value="2">D2</option>
                    <option value="4">D4</option>
                    <option value="6">D6</option>
                    <option value="8">D8</option>
                    <option value="10">D10</option>
                    <option value="12">D12</option>
                    <option value="20">D20</option>
                    <option value="50">D50</option>
                    <option value="100">D100</option>
                </select>
            </div>
                
            <div class="col-sm-2">
                <input id="diecount${rowCount}" type="number" min="0"> 
            </div>
            <div class="col-sm-2">
                <p id="values${rowCount}">   </p>
            </div>
            <div class="col-sm-2">
                <p id="total${rowCount}">   </p>
            </div>
            <div class="col-sm-2">
                <button type="button" class="btn btn-dark roll" id="${rowCount}" onClick="rollDie(this.id)">Roll</button>
            </div>
            
            
        </div>
    </div>
    `);
    
    
    // return 0;

};

function rollDie(id){
    let die = $(`#dietype${id}`).val();
    let count = $(`#diecount${id}`).val();
    let sum = 0;
    let values = [];
    let temp = 0;
    
    for (var i = 0; i < count; i++) {
        temp = randomInteger(1,die);
        values.push(temp);
        sum += temp;
    }
    printValues(values, sum, id);
    
};

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function printValues(array, sum, id){
    let string = ""
    array.forEach(element => {
        string += element + " ";
    });
    $(`#values${id}`).text(string);
    $(`#total${id}`).text(sum);



};

