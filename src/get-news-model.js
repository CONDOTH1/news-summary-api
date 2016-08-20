
var List = (function () {

  var newsContent = [];

  return {

  getList:  function () {
        newsContent = [];
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
              var data = JSON.parse(xhttp.responseText);
              data = data.response.results;
              // console.log(data);
              data.forEach(function(object) {
                newsContent.push(object);
              });
              console.log("1");
          }
        };
        xhttp.open("GET",
        // 'http://content.guardianapis.com/search?q=politics%20AND%20economy&api-key=9f967695-ead8-4af7-ba2e-63205aa657cf');
        "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics");
        xhttp.send();
        // console.log("2");
      },

    readNewsContent: function() {
      console.log("3");
      // setTimeout(function() {
        return newsContent;
      // },1000);
    },
  };
})();
