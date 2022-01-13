var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send([
    {
      id: 1,
      name: 'John Doe',
      role: 'CTO',
      age: 35,
      twitter_url: 'https://twitter.com/dev_elie',

    },
    {
      id: 2,
      name: 'Mike Spencer',
      role: 'Web Developer',
      age: 25,
      twitter_url: 'https://twitter.com/dev_elie',

    },
    {
      id: 3,
      name: 'Ondiek Elijah',
      role: 'Python Developer',
      age: 21,
      twitter_url: 'https://twitter.com/dev_elie',

    }
  ]);
});

module.exports = router;
