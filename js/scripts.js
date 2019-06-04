// function start(){
//   var theSentence = prompt("Enter a Sentence");
//
//   // var first = theSentence.charAt(0).toUpperCase();
//   //
//   // var last = theSentence.charAt(theSentence.length-1).toUpperCase();
//   //
//   // var newSentence = theSentence.substring(1,theSentence.length-1);
//
//   return (theSentence)
// }
//
// function call (result){
//   var first = result.charAt(0);
//   var last = result.charAt(result.length-1);
//   return first+last;
// }
//
// function review (result){
//   var result = call(result);
//   var secondSentence = "I see a sentence";
//   return secondSentence+result;
// }
//
// function count (){
//   var theSentence = start();
//   var numberOfLetters = theSentence.length;
//   var division = numberOfLetters/2;
//   return theSentence.charAt(division);
// }



jQuery(document).ready(function(){

  $("p").click(function() {
    $("#walrus-hidden").fadeOut();
    $("#walrus-showing").fadeIn();

  });

  $(".reverse").click(function() {
    $("#walrus-hidden").fadeIn();
    $("#walrus-showing").fadeOut();

  });

  $(".walrusToy").click(function(){
    $("#walrusFake").slideUp();
    $("#walrusReal").slideDown();
  })

  $(".walrusBody").click(function(){
    $("#walrusFake").slideDown();
    $("#walrusReal").slideUp();
  })


})


// alert(call());
// alert(review());
