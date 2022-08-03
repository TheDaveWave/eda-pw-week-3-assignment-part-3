console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');
const partsNeeded = 40;
console.log(partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3, 5, -6, 0, 7, 11];
//console.log(supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log(supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:');
let removedVal = supplyChanges.pop();
console.log(removedVal);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25);
console.log(supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');
for (let parts of supplyChanges) {
    console.log(parts > 0 ? `Added ${parts} parts.` : parts < 0 ? `Removed ${parts} parts.`: 'No Change.');
}

console.log('6. Another Solution'); 
for (x = 0; x < supplyChanges.length-1; x++) {
    if (supplyChanges[x] > 0) {
        console.log(`Addded ${supplyChanges[x]} parts.`);
    } else if (supplyChanges[x] < 0) {
        console.log(`Removed ${supplyChanges[x]} parts.`)
    } else {
        console.log('No Change.');
    }
}

// You cannnot remove a negative amount of parts, that is technically adding parts.
// So here is a fix. Using Javascript's built in Math object we can use its absolute value function.
console.log('6. Properly Displayed Removed Parts');
for (let parts of supplyChanges) {
    console.log(parts > 0 ? `Added ${Math.abs(parts)} parts.` : parts < 0 ? `Removed ${Math.abs(parts)} parts.`: 'No Change.');
}

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');
// Did not realize this was gonna be the stretch goal and already wrote a for of loop for 6.
// So copy-paste I guess. Lol
for (let parts of supplyChanges) {
    console.log(parts > 0 ? `Added ${Math.abs(parts)} parts.` : parts < 0 ? `Removed ${Math.abs(parts)} parts.`: 'No Change.');
}

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');
let totalParts = 0;
for (let parts of supplyChanges) {
    totalParts += parts;
}
console.log(totalParts);

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');
let i = 1;
const boxMax = 7;
let fullBoxes = 0;
while (i <= 572) {
    if (i % 7 === 0) {
        fullBoxes++;
        i++;
    } else {
        i++;
    }
}
console.log('Number of boxes filled:',fullBoxes);
console.log('Number of leftover parts:',(i - 1) % 7);