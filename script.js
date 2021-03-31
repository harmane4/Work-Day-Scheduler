$(document).ready( //selecting document object 

    $('.saveBtn').on('click', 
        function() {
          let value = $(this).siblings('.description').val() //saveBtn sibilins is the description class and we are getting its value 
            console.log(value)

        
            let time = $(this).siblings('.hour').text() //returns html text 
            console.log(time)
           
            localStorage.setItem(time,value)

            
        }
    )
    //$('#hour-9 .description').val(localStorage.getItem("9AM")
)