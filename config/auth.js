// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '541988022610132', // your App ID
        'clientSecret'  : '61ae9f32439a3b5a8d3f7b766bfad3bd', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'L1kkgfxSNhsK0xUIhcd0kPOMA',
        'consumerSecret'    : 'QFuY2BOvRcY371vIQpIwkGQRbQIUDlak00oX6sZuPQVac1RorV',
        'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '110246845370-avt86t508ngq9h7ksn1k6a7d839pm5s0.apps.googleusercontent.com',
        'clientSecret'  : 'BALivzk1b_ztODkjI8H52zpP',
        'callbackURL'   : 'http://localhost:3000/auth/google/callback'
    }

};