function greet(name) {
    // Regular expression to check if the input contains only letters and spaces
    const isValidName = /^[A-Za-z\s]+$/;

    if (isValidName.test(name)) {
        return `Hello, ${name}!`;
    } else {
        return 'Invalid input. Please enter only letters.';
    }
}

// Example usage
console.log(greet('John'));       // Output: Hello, John!
console.log(greet('John123'));    // Output: Invalid input. Please enter only letters.
console.log(greet('John Doe'));   // Output: Hello, John Doe!
console.log(greet('John_Doe'));   // Output: Invalid input. Please enter only letters.
