
$(function () { 
  var saveBtn = $(".saveBtn");
  saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
  })
  let currentHour = dayjs().format("H");
  console.log(currentHour);
  
  $(".time-block").each(function () {
    let blockHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(blockHour);
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour == currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
      }
      else {
        $(this).removeClass("past");
        $(this).removeClass('present');
        $(this).addClass("future");
      }
  })

  for (let i = 9; i < 18; i++) {
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
  }

  let today = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(today);
}); 

