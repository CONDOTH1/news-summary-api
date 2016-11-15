var guardian = new guardian();
var aylien = new aylien();
var xhttp = new XMLHttpRequest();


var List = (function(){

  var newsContent = [];
  var newsURL = [];
  var newsImg = [];
  var summary;
  var param;

  function resetNewsArray(callback){
    newsContent = [];
    newsURL = [];
    newsImg = [];
    callback();
  }

  function manageNewsData(data, callback){
    // resetNewsArray(function(){
      data = data.response.results;
      data.forEach(function(object){
        newsContent.push(object);
        newsURL.push(object.webUrl);
        newsImg.push(object.fields.thumbnail);
    // });
    });
    callback();
  }

  function defineSummary(callback){
    if (readyStateTest()){
      sum = JSON.parse(xhttp.responseText);
      summary = sum.sentences;
      callback(summary);
    }
  }

  function defineContent(callback){
    if (readyStateTest()){
      var data = JSON.parse(xhttp.responseText);
      manageNewsData(data, callback);
    }
  }

  function readyStateTest(){
    return xhttp.readyState == 4 && xhttp.status == 200;
  }

  function setParam (string){
    if (string !== undefined) {
      param = string;
    } else {
      param = "politics%20AND%20economy";
    }
  }

return {

  getList: function(string, callback){
      // resetNewsArray();
      setParam(string);
      xhttp.onreadystatechange = function(){
        resetNewsArray(function () {
          defineContent(callback);
        });
      };
      xhttp.open("GET", guardian.link + param + guardian.img + guardian.key);
      xhttp.send();
  },

  getSummary: function(a, callback){
    xhttp.onreadystatechange = function(){
      defineSummary(callback);
    };
    xhttp.open("GET", aylien.link + newsURL[a]);
    xhttp.send();
    // console.log("summary:" + summary);
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
