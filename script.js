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
/* For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
Store these objects in an array, in the order that they were originally listed.*/
    let rowObject = {}; //create row object
    let newTableArray = []; //adding row objects to new array

    for (let row = 1; row < tableArray.length; row++) { //row starts from index 1 because index 0 is the key
        for (let i = 0; i < rowArray.length; i++) { //dynamically convert each row item into key-value pairs regardless of number of columns
            rowObject[tableArray[0][i].toLowerCase()] = tableArray[row][i];
        }
        newTableArray.push(rowObject); //add row object to new table array
        rowObject = {}; //clear row object for next iteration
    }    
    console.log(newTableArray);

//     // Part 4: Sorting and Manipulating Data
    // Remove the last element from the sorted array
    newTableArray.pop()
    // Insert new element at index 1
    newTableArray.splice(1,0,{id: "48", name: "Barry", occupation: "Runner", age: "25"});
    // Add object to end of array
    newTableArray.push({id: "7", name: "Bilbo", occupation: "None", age: "111"});
    // Confirm additions and removal
    console.log(newTableArray);
    // Calculate average age of group
    let sumAge = 0;
    newTableArray.forEach((row) => { //get value of age from each object
        sumAge += Number(row.age); //convert string value to number and add to sum of age
    });
    console.log(`Average age of group is ${sumAge / newTableArray.length}.`) //use array length to calculate avg age

// Part 5: Full Circle
//transform the final set of data back into CSV format
let newTablerowArray = [];
let newTable2dArray = [];
for (i of newTableArray) { 
    newTablerowArray.push(...Object.values(i)); //for each object, get values and push to new row array
    newTable2dArray.push(newTablerowArray); //push new row array to new 2d array
    newTablerowArray = []; //clear new row array for next iteration
};
newTable2dArray.unshift(Object.keys(newTableArray[0])); //add keys to start of 2d array as headers
let newTableArrayStr = newTable2dArray.join(`\\n`); //transform array to csv, with \n delimiting each row
console.log(newTableArrayStr);