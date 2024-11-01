const getFactorial = (num) => {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  };
  
  const factorial = (req, res) => {
    const number = parseInt(req.params.number, 10);
  
    if (isNaN(number) || number < 0) {
      return res.status(400).json({ error: 'Please provide a valid non-negative integer only.' });
    }
    const result = getFactorial(number);
    res.json({ number, factorial: result });
  };
  
  module.exports = {
    factorial,
  };
  