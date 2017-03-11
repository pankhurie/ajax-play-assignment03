
$(document).ready(function() {
//alert("called");
$("#signin-btn").click(function(){

    renderSignIn();
    var testAjax = jsRoutes.controllers.Application.ajaxCall();
    	$.ajax({
    		url : testAjax.url
    	}).done(function() {
    		$("body").append("<br/>");
    		$("body").append("");
    	}).fail(function() {
    		$("body").append("<br/>");
    		$("body").append("");
    	});

});

$("#signup-btn").click(function(){

    renderSignUp();
    var testAjax = jsRoutes.controllers.Application.ajaxCall();
    	$.ajax({
    		url : testAjax.url
    	}).done(function() {
    		$("body").append("<br/>");
    		$("body").append("");
    	}).fail(function() {
    		$("body").append("<br/>");
    		$("body").append("");
    	});


});

//$("#submit-signup").click(function(){
//     renderProfile();
//     var testAjax = jsRoutes.controllers.Application.ajaxCall();
//     	$.ajax({
//     		url : testAjax.url
//     	}).done(function() {
//     		$("body").append("<br/>");
//     		$("body").append("");
//     	}).fail(function() {
//     		$("body").append("<br/>");
//     		$("body").append("");
//     	});
//
//});

});


var renderSignIn = function() {
	var signInCallBack = {
		success : function(data) {
			$("#content").html(data);//ajaxSuccess("", data);
		},
		error : function(error) {
			alert(error)
		}
	}

	jsRoutes.controllers.Application.ajaxCall().ajax(signInCallBack);
};


var renderSignUp = function() {
	var signUpCallBack = {
		success : function(data) {
			$("#content").html(data);//ajaxSuccess("", data);
		},
		error : function(error) {
			alert(error)
		}
	}

	jsRoutes.controllers.Application.signUpCall().ajax(signUpCallBack);
};
//
//var renderProfile = function(){
//    var profileCallBack = {
//        success : function(data) {
//        $("#content").html(data);
//        },
//        error : function(error) {
//        }
//    }
//
//    jsRoutes.controllers.Application.profileCall($('#name').val(),$('#fname').val(), $('#mname').val(),$('#lname').val(),$('#password').val(),$('#repassword').val(),).ajax(profileCallBack);
//}


///////////////////////////////////////////////




var ajaxSuccess = function(action, data) {
     $("#content").html(data);

};

var ajaxError = function(action, error) {
	alert(action + " : " +error);
}
//
var renderAjaxOne = function() {
	var ajaxCallBack = {
		success : function(data) {
			 $("#content").html(data);
		},
		error : function(error) {
			alert(error)
		}
	}

	jsRoutes.controllers.Application.ajaxCall().ajax(ajaxCallBack);
};

//

var renderAjaxTwo = function() {
	var ajaxCallBack = {
		success : function(data) {
			ajaxSuccess("AJAX 2:", data);
		},
		error : function(error) {
			ajaxError("AJAX 2:", error);
		}
	}

	jsRoutes.controllers.Application.ajaxCall().ajax(ajaxCallBack);
};

var ajaxCall = function() {
	var ajaxCallBack = {
		success : onSuccess,
		error : onError
	}

	jsRoutes.controllers.Application.ajaxCall().ajax(ajaxCallBack);
};

var onSuccess = function(data) {
	alert(data);
}

var onError = function(error) {
	alert(error);
}
