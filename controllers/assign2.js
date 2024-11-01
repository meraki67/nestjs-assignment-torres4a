const isPrimeNumber = (num) => {
    if (num <= 1) return 'not a prime number.';
    if (num <= 3) return 'it is a prime number';
    if (num % 2 === 0 || num % 3 === 0) return 'not a prime number.';
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return 'not a prime number.';
    }
  
    return 'it is a prime number'
  };
  
  const primeChecker = (req, res) => {
    const number = parseInt(req.params.number, 10);
  
    if (isNaN(number) || number < 1) {
      return res.status(400).json({ error: 'Please provide a valid positive integer.' });
    }
  
    const result = isPrimeNumber(number);
    res.json({ number, isPrime: result });
  };
  
  module.exports = {
    primeChecker
  };
  