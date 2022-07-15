const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/juggling-balls-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['How many balls']

  // Check whether the variable matches a condition
  if (howManyBalls == "3 maybe 4"){
    // Send user to next page
    res.redirect('/juggling-tricks')
  }
  if (howManyBalls == "10 balls"){
    // Send user to next page
    res.redirect('/juggling-tricks')
  }
   else {
    // Send user to ineligible page
    res.redirect('/ineligible')
  }

})
module.exports = router
