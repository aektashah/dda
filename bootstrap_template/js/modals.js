
$("#eventForm").submit(function (event) {
	event.preventDefault()

	var eventName = $("#eventForm #eventName").val();
	var dateTime = $("#eventForm #dateTime").val();
	var location = $("#eventForm #location").val();
	var description = $("#eventForm #description").val();


	console.log(eventName, dateTime, location, description)

})