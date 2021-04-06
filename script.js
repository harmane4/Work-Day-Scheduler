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
    console.log(currentTime);
    $("#firstTimeBlock").val(firstTime);
    if (currentTime > 9) {
        $('#firstTimeBlock').css({'background-color': '#ccccc7'});
    }  
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
