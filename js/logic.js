const body = document.querySelector('body');
const sketchScreen = document.querySelector('#sketchScreen');

//const row1 = document.createElement('div');
//sketchScreen.append(row1);

let column = [];
let row = [];

for (let j = 0; j<4; j++)

{
    row[j] = document.createElement('div');
    sketchScreen.append(row[j]);
    //^^ This for loop creates the initial container for each row

   for (let i = 0; i<4; i++ )
        {
         column [i]= document.createElement('div');
         row[j].append(column[i]);
        } 
        //^^This for loop creates each item in each row
}
//^^ This code creates the divs needed for the initial grid.

