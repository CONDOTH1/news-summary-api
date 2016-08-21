function kiwiBird(){

(function hasTitle(){
  var tft = document.getElementById('heading');
  if (tft.innerHTML === 'The News'){
    console.log("Passed");}
  else{
    console.log('Failed') ;}
})();

(function hasContent(){
  var article = document.getElementById('article0');
  if (article.innerHTML === 'Brexit weekly briefing: economy takes centre stage as politics stalls'){
    console.log("Passed");}
  else{
    console.log('Failed') ;}
})();

(function hasImage(){
  var image = document.querySelectorAll("a[href='#0']");
  if (image[0].children[0].src === "https://media.guim.co.uk/8a3cc081f728b13d2fad7ba8806d43d02bf3f7d1/0_118_3500_2100/500.jpg"){
    console.log("Passed");}
  else{
    console.log('Failed') ;}
})();

(function displaySummary(){
  var link = document.querySelectorAll("a[href='#0']");
  link.click();
  if (link[0].children[0].src === "Welcome to the Guardian’s weekly Brexit briefing, a summary of key developments as Britain moves slowly – very slowly, at present – towards the EU exit."){
    console.log("Passed");}
  else{
    console.log('Failed') ;}
})();

}
