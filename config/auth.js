// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '818549291548325', // your App ID
        'clientSecret'  : '633aa5ff1cb03ef18f33f1579bec3113', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'L1kkgfxSNhsK0xUIhcd0kPOMA',
        'consumerSecret'    : 'QFuY2BOvRcY371vIQpIwkGQRbQIUDlak00oX6sZuPQVac1RorV',
        'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '96571134581-ipct69qlcoeka2rbr5dr51k0op4leqiq.apps.googleusercontent.com',
        'clientSecret'  : 'JhV8Qw_6OOwQwwM1zX8EurQA',
        'callbackURL'   : 'http://localhost:3000/auth/google/callback'
    }

};