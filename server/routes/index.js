const { Router } = require('express');

const router = Router();

// GET /iecho?text=test
router.get('/iecho', (req, res) => {
  try {
    const { text } = req.query;
    if (!text) return res.status(400).send({error: 'no text'});
    const response = text.split('').reverse().join('');
    return text === response
      ? res.send({ text: response, isPalindrome: 'true' })
      : res.send({ text: response, isPalindrome: 'false' });
  } catch (error) {
    res.send({error: error.message});
  }
});

module.exports = router;