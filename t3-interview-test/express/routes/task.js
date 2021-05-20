var express = require('express');
var router = express.Router();
const fs = require('fs')

router.post('/:page', function (req, res, next) {
  var data = fs.readFileSync(`./data/word${req.params.page}.json`)
  var words = JSON.parse(data)

  words.push(req.body)
  console.log(words)

  fs.writeFile(`./data/word${req.params.page}.json`, JSON.stringify(words), err => {
    if (err) {
      console.log(err)
    } else {
      console.log('successful')
    }
  })

});

router.post('/:page/:id', function (req, res, next) {
  var data = fs.readFileSync(`./data/word${req.params.page}.json`)
  var words = JSON.parse(data)
  let target = words[req.params.id]

  target.dueDate = req.body.thisTime
  target.finished = req.body.thisSubmit

  words.splice(req.params.id, 1)

  words.unshift(target)

  fs.writeFile(`./data/word${req.params.page}.json`, JSON.stringify(words), err => {
    if (err) {
      console.log(err)
    } else {
      console.log('successful')
    }
  })
})

router.get('/delete/:page/:id', function (req, res, next) {
  var data = fs.readFileSync(`./data/word${req.params.page}.json`)
  var words = JSON.parse(data)

  words.splice(req.params.id, 1)

  fs.writeFile(`./data/word${req.params.page}.json`, JSON.stringify(words), err => {
    if (err) {
      console.log(err)
    } else {
      console.log('successful')
    }
  })
  res.send(words);
})


// router.listen(3000)

module.exports = router;
