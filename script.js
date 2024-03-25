document.getElementById('ageCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var day = parseInt(document.getElementById('day').value);
    var month = parseInt(document.getElementById('month').value) - 1; // Month is zero-based
    var year = parseInt(document.getElementById('year').value);

    var birthdate = new Date(year, month, day);
    var currentDate = new Date();

    var ageInMilliseconds = currentDate - birthdate;
    var ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
    var ageInMonths = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 30.4375));
    var ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));

    var yearsRemainder = ageInMonths % 12;
    var monthsRemainder = ageInDays % 30;

    var ageString = 'Your age is: ';
    if (ageInYears > 0) {
        ageString += ageInYears + (ageInYears === 1 ? ' year, ' : ' years, ');
    }
    if (yearsRemainder > 0) {
        ageString += yearsRemainder + (yearsRemainder === 1 ? ' month, ' : ' months, ');
    }
    if (monthsRemainder > 0) {
        ageString += monthsRemainder + (monthsRemainder === 1 ? ' day' : ' days');
    }

    document.getElementById('result').textContent = ageString;
});
