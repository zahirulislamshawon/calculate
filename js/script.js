function calculateGrade() {
    // Get the input value
    var score = document.getElementById('score').value;

    // Validate the input
    if (score === '' || isNaN(score)) {
        alert('Please enter a valid number.');
        return;
    }

    // Convert the score to a number
    score = parseFloat(score);

    // Determine the grade
    var grade;
    if (score >= 80) {
        grade = 'A+';
    } else if (score >= 75) {
        grade = 'A';
    } else if (score >= 60) {
        grade = 'B+';
    } else if (score >= 40) {
        grade = 'B';
    } else {
        grade = 'F';
    }

    // Display the result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Your grade is: ' + grade;

    // Log the result to the console for debugging
    console.log('Your grade is: ' + grade);
}
