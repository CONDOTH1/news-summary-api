var View = (function() {

  var news = List.readNewsContent();
  var img = List.readNewsImg();
  var listDiv;
  var listLink;
  var listImg;
  var listText;

  function removeNews() {
    var divList = document.getElementById('list');
    while (divList.hasChildNodes())
      divList.removeChild(divList.firstChild);
  }
  function createElementsAndNode(i){
    listDiv = document.createElement('div');
    listLink = document.createElement('a');
    listImg = document.createElement('img');
    listText = document.createTextNode(news[i].webTitle);
    setAttributes(i);
  }

  function setAttributes(i){
    listLink.setAttribute('href', '#' + i );
    listDiv.setAttribute('id', 'article' + i );
    listImg.setAttribute('src', img[i]);
    appendChildren();
  }

  function appendChildren(){
    listLink.appendChild(listImg);
    listLink.appendChild(listDiv);
    listDiv.appendChild(listText);
    createArticleView();
  }

  function createArticleView(){
    document.getElementById('list').appendChild(listLink);
  }

  function printNewsLinks() {
    List.getList();
    setTimeout(function() {
      for (var i = 0; i < news.length; i++) {
        createElementsAndNode(i);
      }
    },500);
  }

  return {
    newsList: function() {
      removeNews();
      printNewsLinks();
    }
  };
})();
