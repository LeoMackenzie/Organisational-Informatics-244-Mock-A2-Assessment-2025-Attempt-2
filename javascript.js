//Question 1
{
    console.log('QUESTION 1:');

    let myString = 'Leo';
    let myBoolean = true;
    let myNumber = 67;

    console.log(myString);
    console.log(myBoolean);
    console.log(myNumber);
}

//Question 2
{
    console.log('QUESTION 2:');

    console.log(5 > 3); //true; 5 is greater than 3
    console.log(5 < 3); //false; 5 is not less than 3
    console.log(8 === 3); //false; 8 is not equal to 3
    console.log(67 >= 12); //true; 67 is greater than or equal to 12
    console.log(420 != 69); //true; 420 does not equal 69
}

//Question 3
{
    console.log('QUESTION 3:');

    console.log(`5 * 4 = ${5*4}`);
}

//Question 4
{
    console.log('QUESTION 4:');

    let convertNumbertoString = 33;
    
    console.log(convertNumbertoString.toString());
    console.log(String(convertNumbertoString));
    console.log(convertNumbertoString + '');
}

//Question 5
{
    console.log('QUESTION 5:');

    let myBooleanExpression = !((67 >= 32 && 21 <= 4) || 39 === 7);
    console.log(myBooleanExpression);
}

//Question 6
{
    console.log('QUESTION 6:');

    const isPositive = (num) => {
        if (num > 0) {
            let result = true;
            console.log(result);
        }
        else {
            let result = false;
            console.log(result);
        }
    }
    let num = Number(prompt('Enter a number'));
    isPositive(num);
}

//Question 7
{
    console.log('QUESTION 7:');

    //for loop

    console.log('for loop:');
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

    console.log('while loop:');
    let j = 1;
    while (j <= 10) {
        console.log(j);
        j = j + 1;
    }
}

//Question 8
{
    console.log('QUESTION 8:');

    let checkNumber = Number(prompt('Enter a number'));

    if ((checkNumber === 5) || (checkNumber === 13) || (checkNumber % 3 === 0)) {
        console.log('Number is either 5, or 13, or is divisible by 3');
    } 
    else {
        console.log('Number is not 5, 13, or divisible by 3');
    }
}

//Question 9
{
    console.log('QUESTION 9:');

    let favouriteSeason = prompt('What is your favourite season', 'Winter').toUpperCase();

    //chained if statement 
    if (favouriteSeason === 'SUMMER') {
        console.log(`${favouriteSeason} is nice and warm`);
    }
    else if (favouriteSeason === 'AUTUMN') {
        console.log(`The leaves always look nice in ${favouriteSeason}`);
    }
        else if (favouriteSeason === 'WINTER') {
        console.log(`${favouriteSeason} is perfect for being cozy indoors`);
    }
        else if (favouriteSeason === 'SPRING') {
        console.log(`${favouriteSeason} is the most cinematic looking season`);
    }
    else {
        console.log(`${favouriteSeason} is not a valid season`);
    }
}