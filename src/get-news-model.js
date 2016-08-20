
var List = (function () {

  var newsContent = [];
  var newsURL
  var summary;

  return {

  getList:  function () {
        newsContent = [];
        newsURL = [];
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
              var data = JSON.parse(xhttp.responseText);
              data = data.response.results;
              data.forEach(function(object) {
                newsContent.push(object);
                newsURL.push(object.webUrl);
              });
          }
        };
        xhttp.open("GET",
        'http://content.guardianapis.com/search?q=politics%20AND%20economy&api-key=9f967695-ead8-4af7-ba2e-63205aa657cf');
        // "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics");
        xhttp.send();
      },

      getSummary: function (a) {
          if (typeof(a)==='undefined') a = 0;
          var xphttp = new XMLHttpRequest();
          xphttp.onreadystatechange = function() {
          if (xphttp.readyState == 4 && xphttp.status == 200) {
            console.log(xphttp);
            sum = JSON.parse(xphttp.responseText);
            summary = sum.sentences[0] + " " + sum.sentences[1] +
            " " + sum.sentences[2];
          }
        };
          xphttp.open("GET",
          'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + newsURL[a]);
          xphttp.send();
        },


        getImg: function (a) {
            if (typeof(a)==='undefined') a = 0;
            var xphttp = new XMLHttpRequest();
            xphttp.onreadystatechange = function() {
            if (xphttp.readyState == 4 && xphttp.status == 200) {
              console.log(xphttp);
              // sum = JSON.parse(xphttp.responseText);
              // summary = sum.sentences[0] + " " + sum.sentences[1] +
              // " " + sum.sentences[2];
            }
          };
            xphttp.open("GET", newsURL[a] + "#img-1");
            xphttp.send();
          },


    readNewsContent: function() {
      return newsContent;
    },

    readNewsSummary: function() {
      return summary;
    }

};
})();
