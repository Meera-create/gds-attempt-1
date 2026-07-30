//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// Run this code when a form is submitted to 'age-question-1'
// the post route should be for the page you want it to go to

/*
router.post('/question-2-location', function (req, res) {

  let ageVerify = req.body['age-question']
  if (ageVerify == "yes"){
    res.redirect('/question-2-location');
  } else if (ageVerify ==='yes') {
    error:true
  } else{
    res.redirect('/error-page')
  }
});


*/



router.post('/question-2-location', function (req, res){

    let locationInfo  = req.body['location-choice']
    if (!locationInfo|| locationInfo.trim() === ""){
        event.preventdefault();
        return res.render('question-2-location',{
            error:true
        })
    } else{
     return res.redirect('/special-requirements-3')
    
    }


});


// Add your routes here
