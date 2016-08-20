document.addEventListener('DOMContentLoaded', function() {

    (function makeUrlChangeShowNote() {
      window.addEventListener("hashchange", showNoteForCurrentPage);
    })();

    function showNoteForCurrentPage() {
      var url = getStoryFromUrl(window.location);
      if (window.location.hash === "") {
        showNewsList(url);
      } else {
        showSingleStory(url);
      }
   }

    function getNewsFromUrl(location) {
      return location.hash.split('#')[1];
    }

    function showSingleStory(note) {
      var news = List.readNewsContent();
      document
        .getElementById('singleNote')
        .innerHTML = news[story].content;
      document
        .getElementById('listSection')
        .setAttribute('hidden', true);
      document
        .getElementById('enterMessage')
        .setAttribute('hidden', true);
    }

    function showNewsList(story) {
      View.newsList();
      document
        .getElementById('listSection')
        .removeAttribute('hidden');
      document
        .getElementById('enterMessage')
        .removeAttribute('hidden');
      document
        .getElementById('singleNote')
        .innerHTML = "";
      }

        List.getList();
        View.newsList();

});
