document.addEventListener('DOMContentLoaded', function(){

  (function makeUrlChangeShowStory(){
    window.addEventListener("hashchange", showStoryForCurrentPage);
  })();

  function showStoryForCurrentPage(){
    var url = getNewsFromUrl(window.location);
    if (window.location.hash === ""){
      showNewsList(url);
    } else {
      showSingleStory(url);
    }
  }

  function getNewsFromUrl(location){
    return location.hash.split('#')[1];
  }

  function singleStoryHTML(url, news){
    document
      .getElementById('article' + url)
      .innerHTML = news;
  }

  function showSingleStory(url){
    List.getSummary(url);
    setTimeout(function (){
    var news = List.readNewsSummary();
      singleStoryHTML(url, news);
    }, 2000);
  }

  function newListElements(){
    document
      .getElementById('listSection')
      .removeAttribute('hidden');
    singleStoryElements();
  }

  function singleStoryElements(){
    document
      .getElementById('singleStory')
      .innerHTML = "";
  }

  function showNewsList(story){
    View.newsList();
    newListElements();
  }

  View.newsList();

});
