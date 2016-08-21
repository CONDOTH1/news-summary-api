var guardian = new guardian();
var aylien = new aylien();
var xhttp = new XMLHttpRequest();


var List = (function(){

  var newsContent = [];
  var newsURL = [];
  var newsImg = [];
  var summary;

  function resetNewsArray(){
    var newsContent = [];
    var newsURL = [];
  }

  function manageNewsData(data){
    data = data.response.results;
    data.forEach(function(object){
      newsContent.push(object);
      newsURL.push(object.webUrl);
      newsImg.push(object.fields.thumbnail);
    });
  }

  function defineSummary(){
    if (readyStateTest()){
      sum = JSON.parse(xhttp.responseText);
      summary = sum.sentences;
    }
  }

  function defineContent(){
    if (readyStateTest()){
      var data = JSON.parse(xhttp.responseText);
      manageNewsData(data);
    }
  }

  function readyStateTest(){
    return xhttp.readyState == 4 && xhttp.status == 200;
  }

return {
  
  getList: function(){
    resetNewsArray();
    xhttp.onreadystatechange = function(){
      defineContent();
    };
    xhttp.open("GET", guardian.link);
    xhttp.send();
  },

  getSummary: function(a){
    xhttp.onreadystatechange = function(){
      defineSummary();
    };
    xhttp.open("GET", aylien.link + newsURL[a]);
    xhttp.send();
  },

  readNewsContent: function(){
    return newsContent;
  },

  readNewsImg: function(){
    return newsImg;
  },

  readNewsSummary: function(){
    return summary;
  }
};
})();
