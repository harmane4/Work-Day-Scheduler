    $(document).ready( //selecting document object 
        // saveBtn with on click function
        $('.saveBtn').on('click',
          function() {
            let value = $(this).siblings('.description').val()
            let time = $(this).siblings('.hour').text()
            localStorage.setItem(time, value)
          }
        ),
        // select id hour-9 class description and set val to LS key 9AM
        $("#hour-9 .description").val(localStorage.getItem("9AM")),
        // select id hour-10 class description and set val to LS key 10AM
        $("#hour-10 .description").val(localStorage.getItem("10AM")),
        // select id hour-11 class description and set val to LS key 11AM
        $("#hour-11 .description").val(localStorage.getItem("11AM")),
        // select id hour-12 class description and set val to LS key 12PM
        $("#hour-12 .description").val(localStorage.getItem("12PM")),
        // select id hour-13 class description and set val to LS key 1PM
        $("#hour-13 .description").val(localStorage.getItem("1PM")),
        // select id hour-14 class description and set val to LS key 2PM
        $("#hour-14 .description").val(localStorage.getItem("2PM")),
        // select id hour-15 class description and set val to LS key 3PM
        $("#hour-15 .description").val(localStorage.getItem("3PM")),
        // select id hour-16 class description and set val to LS key 4PM
        $("#hour-16 .description").val(localStorage.getItem("4PM")),
        // select id hour-17 class description and set val to LS key 5PM
        $("#hour-17 .description").val(localStorage.getItem("5PM")),
      )


    //need to have timeblocks change colors 
    //access current day with moment.js look at header 
