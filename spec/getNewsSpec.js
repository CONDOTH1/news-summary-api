var explore = kiwi.explore;
var test = kiwi.test;

explore('Getting news from json files', function(){
  test('aylien summaries are available', function() {
    List.getSummary();
    kiwi.isEqual(List.readNewsSummary() === "Welcome to the Guardian’s weekly Brexit briefing, a summary of key developments as Britain moves slowly – very slowly, at present – towards the EU exit.");
  });
  test('guardian web titles are available', function() {
    List.getList();
    kiwi.isEqual(List.readNewsContent()[0].webTitle === "Brexit weekly briefing: economy takes centre stage as politics stalls");
  });
  test('guardian image urls are available', function() {
    List.getList();
    console.log(List.readNewsImg()[0]);
    kiwi.isEqual(List.readNewsImg()[0] === "https://media.guim.co.uk/8a3cc081f728b13d2fad7ba8806d43d02bf3f7d1/0_118_3500_2100/500.jpg");
  });
});
