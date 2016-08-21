
var List = (function () {

  var newsContent = [];
  var newsURL = [];
  var newsImg = [];
  var summary;

  function resetNewsArray(){
    var newsContent = [];
    var newsURL = [];
  }

  function manageNewsData(data){
    data = data.response[0].results;
    data.forEach(function(object){
      newsContent.push(object);
      newsURL.push(object.webUrl);
      newsImg.push(object.fields.thumbnail);
    });
  }

return {

  getList: function(){
    resetNewsArray();
      var data = guardianApi;
      manageNewsData(data);
  },

  getSummary: function(){
    sum = aylienSummary;
    summary = sum.sentences[0];
  },

  readNewsContent: function(){
    return newsContent;
  },

  readNewsImg: function(){
    return newsImg;
  },

  readNewsSummary: function(){
    return summary;
  }
};
})();
