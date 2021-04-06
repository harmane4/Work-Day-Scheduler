$(document).ready(function () {
  //selecting document object

  // saveBtn with on click function
  $(".saveBtn").on("click", function (event) {
    event.preventDefault(); //stop form from refreshing NOT WORKING
    let value = $(this).siblings(".description").val();
    let time = $(this).siblings(".hour").text().trim();
    localStorage.setItem(time, value);
    console.log(time);
  });

  retrieveSchedule();

  function retrieveSchedule() {
    var currentTime = moment().format("h");
    console.log(moment().format("h"));
    
    var firstTime = localStorage.getItem("9AM");
    console.log(firstTime)
    $("#firstTimeBlock").val(firstTime);
    if (currentTime > 9) {
        $('#firstTimeBlock').css({'background-color': '#ccccc7'});
    } 
    
    var secondTime = localStorage.getItem("10AM");
    console.log(secondTime);
    $("#secondTimeBlock").val(secondTime);
    if (currentTime > 10) {
        $('#secondTimeBlock').css({'background-color': '#ccccc7'});
    } 

    var thirdTime = localStorage.getItem("11AM");
    console.log(thirdTime);
    $("#thirdTimeBlock").val(thirdTime);
    if (currentTime > 10) {
        console.log(currentTime)
        $('#thirdTimeBlock').css({'background-color': '#ccccc7'});
    } 

    var fourthTime = localStorage.getItem("12PM");
    console.log(fourthTime);
    $("#fourthTimeBlock").val(fourthTime);
    if (currentTime > 10) {
        $('#fourthTimeBlock').css({'background-color': '#e9300'});
    } 

    var fifthTime = localStorage.getItem("1PM");
    console.log(fifthTime);
    $("#fifthTimeBlock").val(fifthTime);

    var sixthTime = localStorage.getItem("2PM");
    console.log(sixthTime);
    $("#sixthTimeBlock").val(sixthTime);

    var seventhTime = localStorage.getItem("3PM");
    console.log(seventhTime);
    $("#seventhTimeBlock").val(seventhTime);

    var eighthTime = localStorage.getItem("4PM");
    console.log(eighthTime);
    $("#eighthTimeBlock").val(eighthTime);
   
    var ninthTime = localStorage.getItem("5PM");
    console.log(ninthTime);
    $("#ninthTimeBlock").val(ninthTime);

}

  //dislay current date at the top of the calendar
  $("#currentDay").text(moment().format("dddd, MMM Do YYYY"));
  console.log(moment().format("dddd, MMM Do YYYY"));

  //Variable with current time
 

  /*
        function timeBlockColors() {
        //If the time is less than the current time (ie. in the past)  all elements with the class 'description' will have their background colour changed to grey
        if (currentTime < time) {
            $('.description').css({'background-color': '#ccccc7'});
            //If the time is the current hour then the color is red 
        } if (currentTime === time) {
            $('.description').css({'background-color': '#e9300' });
            //Else If the time is in the future and more than the current time then the color is green
        } else (currentTime > time) {
            $('.description').css({'background-color': '#e93001'});
        }
        }
        

        timeBlockColors()
       
        */
});
