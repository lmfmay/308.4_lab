// Part 1: Refactoring Old Code
// let demoData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// let cell = ``;
// let row = ``;
// for (let i in demoData) { // for-in allows index manipulation. Loop runs until end of str.
//     switch (demoData[i]) {
//         case `,`:
//             row += cell + `,`; // add cell to row   
//             cell = ``;
//         break;
//         case `\n`:
//             row += cell; // logging last cell in row because case `,` won't take care of it
//             cell = ``;  
//             console.log(row);
//             row = ``;
//         break;
//         default:
//             cell += demoData[i]; //if char, add to current cell
//         break;
//     }
//     if (i == demoData.length - 1) { //string length is 1 less than index number because string starts counting from 1
//         row += cell; // log last line because case \n doesn't take care of it.
//         console.log(row);
//     }
// }

// Part 2: Expanding Functionality
let demoData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
let cell = ``;
let rowArray = []; // Declare a variable that stores the number of columns in each row of data within the CSV
let tableArray = []; //Store your results in a two-dimensional array

for (let i in demoData) { 
    if (i !== demoData.length - 1){ // code dynamically runs until end of string
        if (demoData[i] != `\n`) { // if not end of row, add cells that below to same row
            if (demoData[i] != `,`) { // if not end of cell... 
                cell += demoData [i]; // add char to cell
            } else { // if end of cell...
                rowArray.push(cell); // add cell to row array
                cell = ``; //clear cell for next iteration
            }
            i++;
        } else { //if end of row...
            rowArray.push(cell); // add last cell to row array
            tableArray.push(rowArray); //push row to table
            cell = ``; //clear cell for next iteration
            rowArray = []; //clear row for next iteration
            i++;
        }
        continue
    }
}
rowArray.push(cell); // add last cell because there is no , on last cell.
tableArray.push (rowArray); // add last row because there is no \n on last row.
console.log(tableArray); 

// Part 3: Transforming Data
// Part 4: Sorting and Manipulating Data
// Part 5: Full Circle