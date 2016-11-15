var View = (function() {

  // var news = List.readNewsContent();
  // var img = List.readNewsImg();
  var listDiv;
  var listLink;
  var listImg;
  var listText;

  function removeNews() {
    var divList = document.getElementById('list');
    while (divList.hasChildNodes())
      divList.removeChild(divList.firstChild);
  }
  function createElementsAndNode(i, news, img){
    listDiv = document.createElement('div');
    listLink = document.createElement('a');
    listImg = document.createElement('img');
    listText = document.createTextNode(news[i].webTitle);
    setAttributes(i, img);
  }

  function setAttributes(i, img){
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

  function setNewsImages(){
    var news = List.readNewsContent();
    var img = List.readNewsImg();
    outputNews(news, img);
  }

  function outputNews(news, img){
    for (var i = 0; i < news.length; i++) {
      createElementsAndNode(i, news, img);
    }
  }

  function printNewsLinks(story) {
    List.getList(story, function(){
      setNewsImages();
    });
  }

  return {
    newsList: function(story) {
      removeNews();
      printNewsLinks(story);
    }
  };
})();
