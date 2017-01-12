//Business Side

var convert = function(feet, inches) {
  var feetToInches = feet * 12;
  var total = feetToInches + inches;
  return total;
}

//User Side

$(function() {
  $("#blank form").submit(function(event) {

    var feetInput = parseInt($("input#feet").val());
    var inchesInput = parseInt($("input#inches").val());

    var convertedHeight = convert(feetInput, inchesInput);

    if (convertedHeight < 50) {
      $(".ride1").addClass("opacity");
      $(".ride2").addClass("opacity");
      $(".ride3").addClass("opacity");
      $(".ride4").removeClass("opacity");
      $(".ride5").addClass("opacity");
      $(".ride6").addClass("opacity");
      $(".ride7").addClass("opacity");
      $(".ride8").addClass("opacity");
      } else if (convertedHeight <= 50) {
      $(".ride1").addClass("opacity");
      $(".ride2").addClass("opacity");
      $(".ride3").addClass("opacity");
      $(".ride4").removeClass("opacity");
      $(".ride5").addClass("opacity");
      $(".ride6").removeClass("opacity");
      $(".ride7").addClass("opacity");
      $(".ride8").addClass("opacity");
    } else if (convertedHeight <= 55) {
      $(".ride1").addClass("opacity");
      $(".ride2").addClass("opacity");
      $(".ride3").removeClass("opacity");
      $(".ride4").removeClass("opacity");
      $(".ride5").addClass("opacity");
      $(".ride6").removeClass("opacity");
      $(".ride7").addClass("opacity");
      $(".ride8").addClass("opacity");
    } else if (convertedHeight <= 60) {
      $(".ride1").addClass("opacity");
      $(".ride2").addClass("opacity");
      $(".ride3").removeClass("opacity");
      $(".ride4").removeClass("opacity");
      $(".ride5").removeClass("opacity");
      $(".ride6").removeClass("opacity");
      $(".ride7").addClass("opacity");
      $(".ride8").addClass("opacity");
    } else if (convertedHeight <= 65) {
      $(".ride1").removeClass("opacity");
      $(".ride2").addClass("opacity");
      $(".ride3").removeClass("opacity");
      $(".ride4").removeClass("opacity");
      $(".ride5").removeClass("opacity");
      $(".ride6").removeClass("opacity");
      $(".ride7").addClass("opacity");
      $(".ride8").addClass("opacity");
    } else if (convertedHeight <= 67) {
      $(".ride1").removeClass("opacity");
      $(".ride2").addClass("opacity");
      $(".ride3").removeClass("opacity");
      $(".ride4").removeClass("opacity");
      $(".ride5").removeClass("opacity");
      $(".ride6").removeClass("opacity");
      $(".ride7").removeClass("opacity");
      $(".ride8").addClass("opacity");
    } else if (convertedHeight <= 68) {
      $(".ride1").removeClass("opacity");
      $(".ride2").removeClass("opacity");
      $(".ride3").removeClass("opacity");
      $(".ride4").removeClass("opacity");
      $(".ride5").removeClass("opacity");
      $(".ride6").removeClass("opacity");
      $(".ride7").removeClass("opacity");
      $(".ride8").addClass("opacity");
    } else if (convertedHeight === 69){
      $(".ride1").removeClass("opacity");
      $(".ride2").removeClass("opacity");
      $(".ride3").removeClass("opacity");
      $(".ride4").removeClass("opacity");
      $(".ride5").removeClass("opacity");
      $(".ride6").removeClass("opacity");
      $(".ride7").removeClass("opacity");
      $(".ride8").addClass("opacity");
    } else if (convertedHeight >= 70) {
      $(".ride1").removeClass("opacity");
      $(".ride2").removeClass("opacity");
      $(".ride3").removeClass("opacity");
      $(".ride4").addClass("opacity");
      $(".ride5").removeClass("opacity");
      $(".ride6").removeClass("opacity");
      $(".ride7").removeClass("opacity");
      $(".ride8").removeClass("opacity");
    }

  event.preventDefault();
  });
});
