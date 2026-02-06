//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/organisation-type', (req, res) => {
    if(req.body.new.organisationType == 'The Department for Education') {
        res.redirect('/internal-sign-in')
    } else {
        res.redirect('/external-sign-in')
    }
})