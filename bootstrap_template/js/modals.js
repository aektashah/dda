
$("#eventForm").submit(function (event) {
	event.preventDefault()

	var eventName = $("#eventForm #eventName").val();
	var dateTime = $("#eventForm #dateTime").val();
	var location = $("#eventForm #location").val();
	var description = $("#eventForm #description").val();


	console.log(eventName, dateTime, location, description)

})

$("#postForm").submit(function (event) {
	event.preventDefault()

	var postName = $("#postForm #postName").val();
	var postContent = $("#postForm #postContent").val();


	var postTemplate = "<div class=\"col-lg-12 col-md-12\">" + 
                        "<div class=\"panel panel-post\">" +
                            "<div class=\"panel-heading\">" +
                                "<div class=\"row\">" +
                                    "<div class=\"col-xs-3\">" +
                                        "<i class=\"fa fa-pencil-square-o fa-5x\"></i>" +
                                    "</div>" +
                                    "<div class=\"col-xs-9 text-right\">   " +
                                        "<div class=\"huge\">" + postName + "</div>" +
                                        
                                        "<div>" +
                                            "<p>" + postContent + 
                                            "</p>" +
                                        "</div>" +

                                    "</div>" +


                                "</div>" +

                                "<div class=\"row\">" + 
                                        "<div class=\"col-xs-3\">" + 
                                            "<div class=\"pull-left poster\">" + 
                                              "  <u>Posted by you</u>" + 
                                           " </div>" + 
                                        "</div>" + 
                               " </div>" + 
                                    
                          "  </div>" + 
                           " <a href=\"#\">" + 
                              "  <div class=\"panel-footer\">" + 
                               "     <span class=\"pull-left\">Add Comment</span>" + 
                              "      <span class=\"pull-right\"><i class=\"fa fa-plus\"></i></span>" + 
                              "      <div class=\"clearfix\"></div>" + 
                             "   </div>" + 
                          "  </a>" + 
                       " </div>" + 
                    "</div>";

	$("#writePost").modal('hide')
	$("#feed").prepend(postTemplate)
	console.log(postName, postContent, postTemplate)

})