
    var View = (function() {

      function removeNews() {
        var divList = document.getElementById('list');
        while (divList.hasChildNodes())
          divList.removeChild(divList.firstChild);
        }

      function printNewsLinks() {
        var news;
        List.getList();
        console.log("first");
        setTimeout(function() {
        news = List.readNewsContent();
        console.log(List.readNewsContent());
        for (var i = 0; i < news.length; i++) {
          var listDiv = document.createElement('div');
          var listLink = document.createElement('a');
          var listText = document.createTextNode(news[i].webTitle);
          listLink.setAttribute('href', '#' + i );
          listLink.appendChild(listDiv);
          listDiv.appendChild(listText);
          document.getElementById('list').appendChild(listLink);
          }
        },3000);
      }

  return {
    newsList: function() {
      removeNews();
      printNewsLinks();
    }
  };

})();
