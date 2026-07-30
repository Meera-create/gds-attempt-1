//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// Run this code when a form is submitted to 'age-question-1'
// the post route should be for the page you want it to go to


router.post('/question-age-1', function (req, res) {

  let ageVerify = req.body['age-question']
  if (ageVerify === "yes"){
    res.redirect('/question-2-location');
  } else {
    res.redirect('/error-page')
  }
});




router.post('/question-2-location', function (req, res){

    let locationInfo  = req.body["location-choice"]
    if (!locationInfo|| locationInfo.trim() === ""){
        return res.render('question-2-location',{
            error:true
        })
    } else{
     return res.redirect('/special-requirements-3')
    }
});



router.post('/special-requirements-3', function (req, res){

 
  let specialNeeds = req.body['special-needs'];
  let specialNeedsInfo = req.body['special-needs-info'];


 if (specialNeeds === 'yes') {
     if (!specialNeedsInfo || specialNeedsInfo.trim() === '') {
       return res.render('special-requirements-3', {
        showDataField: true,
        error: true
      }); 
    }
    return res.redirect('/date-input-4');
  }
   return res.render('special-requirements-3');
  });

 





// Add your routes here
