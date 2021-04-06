
  //Display current date at the top of the calendar
  $("#currentDay").text(moment().format("dddd, MMM Do YYYY"));
  console.log(moment().format("dddd, MMM Do YYYY"));

//Specify a function to execute when DOM if sully loaded
$(document).ready(function () {

  //SaveBtn with on click function
  $(".saveBtn").on("click", function () {
    let value = $(this).siblings(".description").val();
    let time = $(this).siblings(".hour").text().trim();
    localStorage.setItem(time, value);
    console.log(time);
  });

    //Retrieves schedule items from local storage
  retrieveSchedule();

  function retrieveSchedule() {
    var currentTime = moment().format("h");
    console.log(currentTime);

    var firstTime = localStorage.getItem("9");
    $("#firstTimeBlock").val(firstTime);
    if (currentTime > 9) {
      $("#firstTimeBlock").css({ "background-color": "#ccccc7" });
    }

    var secondTime = localStorage.getItem("10");
    $("#secondTimeBlock").val(secondTime);
    if (currentTime > 10) {
      $("#secondTimeBlock").css({ "background-color": "#ccccc7" });
    } if (currentTime == 10) {
        $("#secondTimeBlock").css({ "background-color": "#DC143C" });
      } if (currentTime < 10) {
        $("#secondTimeBlock").css({ "background-color": "#006400" });
      }

    var thirdTime = localStorage.getItem("11");
    $("#thirdTimeBlock").val(thirdTime);
      if (currentTime > 11) {
        $("#thirdTimeBlock").css({ "background-color": "#ccccc7" });
      } if (currentTime == 11) {
          $("#thirdTimeBlock").css({ "background-color": "#DC143C" });
        } if (currentTime < 11) {
          $("#thirdTimeBlock").css({ "background-color": "#006400" });
        }

    var fourthTime = localStorage.getItem("12");
    $("#fourthTimeBlock").val(fourthTime);
  if (currentTime > 12) {
        $("#fourthTimeBlock").css({ "background-color": "#ccccc7" });
      } if (currentTime == 12) {
          $("#fourthTimeBlock").css({ "background-color": "#DC143C" });
        } if (currentTime < 12) {
          $("#fourthTimeBlock").css({ "background-color": "#006400" });
        }

    var fifthTime = localStorage.getItem("13");
    $("#fifthTimeBlock").val(fifthTime);
    if (currentTime > 13) {
        $("#fifthTimeBlock").css({ "background-color": "#ccccc7" });
      } if (currentTime == 13) {
          $("#fifthTimeBlock").css({ "background-color": "#DC143C" });
        } if (currentTime < 13) {
          $("#fifthTimeBlock").css({ "background-color": "#006400" });
        }

    var sixthTime = localStorage.getItem("14");
    $("#sixthTimeBlock").val(sixthTime);
    if (currentTime > 14) {
        $("#sixthTimeBlock").css({ "background-color": "#ccccc7" });
      } if (currentTime == 14) {
          $("#sixthTimeBlock").css({ "background-color": "#DC143C" });
        } if (currentTime < 14) {
          $("#sixthTimeBlock").css({ "background-color": "#006400" });
        }

    var seventhTime = localStorage.getItem("15");
    $("#seventhTimeBlock").val(seventhTime);
    if (currentTime > 15) {
        $("#seventhTimeBlock").css({ "background-color": "#ccccc7" });
      } if (currentTime == 15) {
          $("#seventhTimeBlock").css({ "background-color": "#DC143C" });
        } if (currentTime < 15) {
          $("#seventhTimeBlock").css({ "background-color": "#006400" });
        }

    var eighthTime = localStorage.getItem("16");
    $("#eighthTimeBlock").val(eighthTime);
    if (currentTime > 16) {
        $("#eighthTimeBlock").css({ "background-color": "#ccccc7" });
      } if (currentTime == 16) {
          $("#eighthTimeBlock").css({ "background-color": "#DC143C" });
        } if (currentTime < 16) {
          $("#eighthTimeBlock").css({ "background-color": "#006400" });
        }

    var ninthTime = localStorage.getItem("17");
    $("#ninthTimeBlock").val(ninthTime);
    if (currentTime > 17) {
        $("#ninthTimeBlock").css({ "background-color": "#ccccc7" });
      } if (currentTime == 17) {
          $("#ninthTimeBlock").css({ "background-color": "#DC143C" });
        } if (currentTime < 17) {
          $("#ninthTimeBlock").css({ "background-color": "#006400" });
        }
  }
});
