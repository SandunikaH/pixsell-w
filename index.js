var express = require('express');
var app = express();

// Initialize Firebase
export var config = {
  apiKey: "AIzaSyCzedvPPYg5aIJAyVgItXXwA0aa9KmHC34",
  authDomain: "pixsell-w.firebaseapp.com",
  databaseURL: "https://pixsell-w.firebaseio.com",
  projectId: "pixsell-w",
  storageBucket: "pixsell-w.appspot.com",
  messagingSenderId: "11111491730"
};
firebase.initializeApp(config);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  
  var baseFrame = 
    {title: '',
     userName: '',
     siteName: [],
     userImage:''
    };
  var sideMenu =
    [
      {name:'About',icon:'home',link:'#',state:'active'},
      {name:'Concept',icon:'layers',link:'#'},
      {name:'Legator',icon:'layers',link:'#'}
    ]

  response.render('metlook/index',{baseFrame:baseFrame,sideMenu:sideMenu});
});

// app.get('/webSiteOwner', function(request, response) {
  
//   var baseFrame = 
//     {title: 'Web Site Owner',
//      userName: 'Tharindu',
//      siteName: ['AB.lk','bc.lk'],
//      userImage:'images/user.png'
//     };
//   var sideMenu =
//     [
//       {name:'Home',icon:'home',link:'Home',state:'active'},
//       {name:'RegisteAd-block',icon:'layers',link:'reg_adblock'},
//       {name:'Earnings',icon:'monetization_on',link:'earnings'}
//     ]

//   response.render('metlook/pages/webSiteOwner',{baseFrame:baseFrame,sideMenu:sideMenu});
// });

app.get('/signIn', function (request, response) {
  console.log('login page')
  response.render('metlook/pages/signIn');
});

app.get('/signUp', function (request, response) {
  console.log('create account page')
  response.render('metlook/pages/signUp');
});

app.get('/forgotPassword', function (request, response) {
  console.log('reset password page')
  response.render('metlook/pages/forgotPassword');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
