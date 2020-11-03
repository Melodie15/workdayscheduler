//Today's date
$("#today").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//Check colors on past, present and future rows
var date = new Date();
var hours = date.getHours();
function confirmDate() {
    for (time = 9; time < 23; time ++) {
        var timeRow = $("#" + time);
        console.log($("#" + time))

        if(time == hours) {
            timeRow.addClass("present")
        } else if (time < hours) {
            timeRow.addClass("past")
        } else {
            timeRow.addClass("future")
        }
        $("#" + time).val(localStorage.getItem("" + time));
    }
}
confirmDate();