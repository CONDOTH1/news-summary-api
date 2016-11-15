document.addEventListener('DOMContentLoaded', function(){

  (function makeUrlChangeShowStory(){
    window.addEventListener("hashchange", showStoryForCurrentPage);
  })();

  function showStoryForCurrentPage(){
    var url = getNewsFromUrl(window.location);
    if (window.location.hash === ""){
      showNewsList(url);
    } else if (window.location.hash === "#technology"){
      // List.getList("technology");
      showNewsList("technology");
    } else {
      showSingleStory(url);
    }
  }

  function getNewsFromUrl(location){
    return location.hash.split('#')[1];
  }

  function singleStoryHTML(url, summary){
    document
      .getElementById('article' + url)
      .innerHTML = summary;
  }

  function showSingleStory(url){
    List.getSummary(url, function(summary){
      singleStoryHTML(url, summary);
    });
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
    // List.getList(story);
    View.newsList(story);
    newListElements();
  }

  View.newsList();

});
