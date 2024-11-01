const getFibonacciSequence = (num) => {
    const sequence = [];
    let x = 0, y = 1, temp;
  
    for (let i = 0; i < num; i++) {
      sequence.push(x);
      temp = x;
      x = y;
      y = temp + y;
    }
  
    return sequence;
  };
  
  const fibonacci = (req, res) => {
    const n = parseInt(req.params.n, 10);
  
    if (isNaN(n) || n < 1) {
      return res.status(400).json({ error: 'Please provide a valid positive integer for n.' });
    }
  
    const sequence = getFibonacciSequence(n);
    res.json({ sequence });
  };
  
  module.exports = {
    fibonacci,
  };
  