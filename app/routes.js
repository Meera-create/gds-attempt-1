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



//text box to appear if user selects yes to special needs question
router.post('/special-requirements-3', function (req, res){
 
  let specialNeeds = req.body['special-needs'];
  let specialNeedsInfo = req.body['special-needs-info'];

 if (specialNeeds === 'yes') {
     if (!specialNeedsInfo || specialNeedsInfo.trim() === '') {
       return res.render('/special-requirements-3', {
        showDataField: true,
        error: true
      }); 
    } else{
      return res.redirect('/date-input-4');
    }
  }else{    
    return res.redirect('/date-input-4');
  }
  });

 
//date input validation



router.post('/date-input-4', function (req, res) {
  console.log('ROUTE HIT');
  console.log('hi')
 // let day = req.body['vaccine-date-day'];
  //let month = req.body['vaccine-date-month'];
  //let year = req.body['vaccine-date-year'];


 // if (!day || !month || !year) {
   // return res.render('date-input-4', {
     // error: true
 //   });
 // } 
    return res.redirect('/error-page');
})


