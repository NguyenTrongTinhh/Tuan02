const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),
  
    // 1. Method to register new answers
    registerNewAnswer() {
      const input = prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`);
  
      const answer = parseInt(input);
      if (!isNaN(answer) && answer >= 0 && answer < this.answers.length) {
        this.answers[answer]++;
      } else {
        alert("Please enter a valid option number.");
      }
  
      // 4. Call displayResults after registering a new answer
      this.displayResults('string');
      this.displayResults('array');
    },
  
    // 3. Method to display results
    displayResults(type = 'array') {
      if (type === 'string') {
        console.log(`Poll results are ${this.answers.join(', ')}`);
      } else if (type === 'array') {
        console.log(this.answers);
      }
    }
  };
  
  // 2. Event listener to trigger the poll
  document.getElementById('pollButton').addEventListener('click', function() {
    poll.registerNewAnswer();
  });
  
  // 5. Bonus: Display the test data arrays using the displayResults method
  poll.displayResults.call({answers: [5, 2, 3]}, 'array');
  poll.displayResults.call({answers: [5, 2, 3]}, 'string');
  poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'array');
  poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string');
  