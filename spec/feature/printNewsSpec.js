function kiwiBird(){

(function hasTitle(){
  var tft = document.getElementById('heading');
  if (tft.innerHTML === 'The News'){
    console.log("Passed");}
  else{
    console.log('Failed') ;}
})();
}
