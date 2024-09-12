// Part 1: Refactoring Old Code
let demoData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let cell = ``;
let row = ``;
for (let i in demoData) { // for-in allows index manipulation. Loop runs until end of str.
    switch (demoData[i]) {
        case `,`:
            row += cell + `,`; // add cell to row   
            cell = ``;
        break;
        case `\n`:
            row += cell; // logging last cell in row because case `,` won't take care of it
            cell = ``;  
            console.log(row);
            row = ``;
        break;
        default:
            cell += demoData[i]; //if char, add to current cell
        break;
    }
    if (i == demoData.length - 1) { //string length is 1 less than index number because string starts counting from 1
        row += cell; // log last line because case \n doesn't take care of it.
        console.log(row);
    }
}

// Part 2: Expanding Functionality
// Part 3: Transforming Data
// Part 4: Sorting and Manipulating Data
// Part 5: Full Circle