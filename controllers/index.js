var express = require('express');
var app = express();

app.use('/webSiteOwner',require('./webSiteOwner'))

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

module.exports = app