var express = require('express');
var app = express();

app.get('/', function(request, response) {
    
    var baseFrame = 
      {title: 'Web Site Owner',
       userName: 'Tharindu',
       siteName: ['AB.lk','bc.lk'],
       userImage:'images/user.png'
      };
    var sideMenu =
      [
        {name:'Home',icon:'home',link:'Home',state:'active'},
        {name:'RegisteAd-block',icon:'layers',link:'reg_adblock'},
        {name:'Earnings',icon:'monetization_on',link:'earnings'}
      ]
    var TopPanel = 
      [
        {name:'Active Blocks',icon:'dashboard',value:5,color:'bg-pink'},
        {name:'Sold Blocks',icon:'view_quilt',value:2,color:'bg-cyan'},
        {name:'Micro Investments',icon:'donut_small',value:'34%',color:'bg-light-green'},
        {name:'Expect Income',icon:'attach_money',value:'40%',color:'bg-orange'}
      ]
  
    response.render('metlook/pages/webSiteOwner/webSiteOwner',{baseFrame:baseFrame,sideMenu:sideMenu,topPanel:TopPanel});
  });

  module.exports = app