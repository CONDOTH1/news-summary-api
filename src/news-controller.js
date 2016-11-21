document.addEventListener('DOMContentLoaded', function(){

  var hashLength = 2;

  (function makeUrlChangeShowStory(){
    window.addEventListener("hashchange", showStoryForCurrentPage);
  })();

  function showStoryForCurrentPage(){
    var url = getNewsFromUrl(window.location);
    var locationHash = window.location.hash;
    if (locationHash.split("").length === hashLength) {
      showSingleStory(url);
    } else {
      showNewsList(url);
    }
  }

  function getNewsFromUrl(location){
    return location.hash.split('#')[1];
  }

  function singleStoryHTML(url, summary){
    var article = document.getElementById('anchor' + url);
    var aSum = document.createElement('a');
    aSum.setAttribute('id', 'summary' + url);
    aSum.setAttribute('onclick', 'View.resetSummary('+ url + ')');
    article.appendChild(aSum).innerHTML = summary;
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
