//Display current date at the top of the calendar
$("#currentDay").text(moment().format("dddd, MMM Do YYYY"));
console.log(moment().format("dddd, MMM Do YYYY"));

//Specify a function to execute when DOM if fully loaded
$(document).ready(function () {
  //SaveBtn with on click function
  $(".saveBtn").on("click", function () {
    let value = $(this).siblings(".description").val();
    let time = $(this).siblings(".hour").text().trim();
    localStorage.setItem(time, value);
  });

  //Retrieves schedule items from local storage
  retrieveSchedule();

  function retrieveSchedule() {
    var currentTime = moment().format("H");

    //Rewrite the for loop
    // for (let index = 9; index < 17; index++) {
    //   var time = localStorage.getItem(index + ":00"); // declaring a variable time and assigning it the value of local storage + 00
    //   $("#timeBlock" + index).val(time); //assigning the value of time to the first time block 
    //   if (currentTime > time) { //if current time is greater than what is in local storage change background colour
    //     $("#timeBlock" + index).css({ "background-color": "#ccccc7" });
    //   }
    //  else if (currentTime == time) {
    //     $("#timeBlock" + index).css({ "background-color": "#DC143C" });
    //   }
    //   else {
    //     $("#timeBlock" + index).css({ "background-color": "#006400" });
    //   }
      
    // }


    var firstTime = localStorage.getItem("9:00");
    $("#firstTimeBlock").val(firstTime);
      if (currentTime == 9) {
      $("#firstTimeBlock").css({ "background-color": "#DC143C" });
    }
      else if (currentTime < 9) {
      $("#firstTimeBlock").css({ "background-color": "#006400" });
    }

    var secondTime = localStorage.getItem("10:00");
    $("#secondTimeBlock").val(secondTime);
    if (currentTime == 10) {
      $("#secondTimeBlock").css({ "background-color": "#DC143C" });
    }
    else if (currentTime < 10) {
      $("#secondTimeBlock").css({ "background-color": "#006400" });
    }

    var thirdTime = localStorage.getItem("11:00");
    $("#thirdTimeBlock").val(thirdTime);
    if (currentTime == 11) {
      $("#thirdTimeBlock").css({ "background-color": "#DC143C" });
    }
    else if (currentTime < 11) {
      $("#thirdTimeBlock").css({ "background-color": "#006400" });
    }

    var fourthTime = localStorage.getItem("12:00");
    $("#fourthTimeBlock").val(fourthTime);
    if (currentTime == 12) {
      $("#fourthTimeBlock").css({ "background-color": "#DC143C" });
    }
    else if (currentTime < 12) {
      $("#fourthTimeBlock").css({ "background-color": "#006400" });
    }

    var fifthTime = localStorage.getItem("13:00");
    $("#fifthTimeBlock").val(fifthTime);
    if (currentTime == 13) {
      $("#fifthTimeBlock").css({ "background-color": "#DC143C" });
    }
    else if (currentTime < 13) {
      $("#fifthTimeBlock").css({ "background-color": "#006400" });
    }

    var sixthTime = localStorage.getItem("14:00");
    $("#sixthTimeBlock").val(sixthTime);
    if (currentTime == 14) {
      $("#sixthTimeBlock").css({ "background-color": "#DC143C" });
    }
    else if (currentTime < 14) {
      $("#sixthTimeBlock").css({ "background-color": "#006400" });
    }

    var seventhTime = localStorage.getItem("15:00");
    $("#seventhTimeBlock").val(seventhTime);
    if (currentTime == 15) {
      $("#seventhTimeBlock").css({ "background-color": "#DC143C" });
    }
    else if (currentTime < 15) {
      $("#seventhTimeBlock").css({ "background-color": "#006400" });
    }

    var eighthTime = localStorage.getItem("16:00");
    $("#eighthTimeBlock").val(eighthTime);
    if (currentTime == 16) {
      $("#eighthTimeBlock").css({ "background-color": "#DC143C" });
    }
    else if (currentTime < 16) {
      $("#eighthTimeBlock").css({ "background-color": "#006400" });
    }

    var ninthTime = localStorage.getItem("17:00");
    $("#ninthTimeBlock").val(ninthTime);
    if (currentTime == 17) {
      $("#ninthTimeBlock").css({ "background-color": "#DC143C" });
    }
    else if (currentTime < 17) {
      $("#ninthTimeBlock").css({ "background-color": "#006400" });
    }
  }
});
