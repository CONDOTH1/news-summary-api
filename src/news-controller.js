document.addEventListener('DOMContentLoaded', function() {

    (function makeUrlChangeShowNote() {
      window.addEventListener("hashchange", showNoteForCurrentPage);
    })();

    function showNoteForCurrentPage() {
      var url = getNewsFromUrl(window.location);
      if (window.location.hash === "") {
        showNewsList(url);
      } else {
        showSingleStory(url);
      }
   }

    function getNewsFromUrl(location) {
      return location.hash.split('#')[1];
    }

    function showSingleStory(url) {
      List.getSummary(url);
      setTimeout(function () {
      var news = List.readNewsSummary();
        console.log("NEWS:" + news);
        document
          .getElementById('article' + url)
          .innerHTML = news;
        // document
        //   .getElementById('listSection')
        //   .setAttribute('hidden', true);
          }, 2000);
      // document
      //   .getElementById('enterMessage')
      //   .setAttribute('hidden', true);
    }

    function showNewsList(story) {
      View.newsList();
      document
        .getElementById('listSection')
        .removeAttribute('hidden');
    //   document
    //     .getElementById('enterMessage')
    //     .removeAttribute('hidden');
      document
        .getElementById('singleNote')
        .innerHTML = "";
      }

        // List.getList();
        View.newsList();

});
