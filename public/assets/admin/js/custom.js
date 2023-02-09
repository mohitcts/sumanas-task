 // Menu active
 $(document).ready(function () {
        var url = window.location;
        $('ul.metismenu a[href="' + url + '"]').parent().addClass('active');       
        $('ul.metismenu a').filter(function () {
            return this.href == url;
        }).parent().addClass('active');
    });

// Mobile Menu


$('.mobile-toggle .ti-align-right').click(function() {
    $('.app-navbar').addClass('Left0');
    $('.mobile-toggle').addClass('Close');
    });

$('.mobile-toggle .ti-close').click(function() {
    $('.app-navbar').removeClass('Left0');
    $('.mobile-toggle').removeClass('Close');
    });
$('.navbar-toggler .ti-align-right').click(function() {
    $('.navbar-toggler').addClass('Close');
    });

$('.navbar-toggler .ti-close').click(function() {    
    $('.navbar-toggler').removeClass('Close');
    });



$(document).ready(function(){
  $(".EditProf").click(function(){
    $("#EditProfile").show();
    $("#ViewProfile").hide();
  });
  $("#UpdateInfo").click(function(){
    $("#EditProfile").hide();
    $("#ViewProfile").show();
  });
    
});


/**********To Top**********/
$(function(){
$(document).on( 'scroll', function(){
if ($(window).scrollTop() > 100) {
$('.scroll-top-wrapper').addClass('show');
} else {
$('.scroll-top-wrapper').removeClass('show');
}
});
$('.scroll-top-wrapper').on('click', scrollToTop);
});
function scrollToTop() {
verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
element = $('body');
offset = element.offset();
offsetTop = offset.top;
$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
};

 
// Search and notifications
jQuery('#SearchBox').click(function() {
        $("#SearchInpt").toggle('300');
    });
jQuery('#NotifIcon').click(function() {
        $("#NotificationBox").toggle('300');
    });
jQuery('#ListIcon').click(function() {
        $(".TopicSear").toggle('0');
    });

jQuery('.PaymentFilterIcon').click(function() {
        $(".PaymentFilterList").toggle('0');
    });
// Modal Animation
$(".modal").each(function (l) {$(this).on("show.bs.modal", function (l) {var o = $(this).attr("data-easein");"shake" == o ? $(".modal-dialog").velocity("callout." + o) : "pulse" == o ? $(".modal-dialog").velocity("callout." + o) : "tada" == o ? $(".modal-dialog").velocity("callout." + o) : "flash" == o ? $(".modal-dialog").velocity("callout." + o) : "bounce" == o ? $(".modal-dialog").velocity("callout." + o) : "swing" == o ? $(".modal-dialog").velocity("callout." + o) : $(".modal-dialog").velocity("transition." + o);});});


var btnUpload = $("#upload_file"),
	btnOuter = $(".button_outer");
btnUpload.on("change", function(e){
	var ext = btnUpload.val().split('.').pop().toLowerCase();
	if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
		$(".error_msg").text("Not an Image...");
	} else {
		$(".error_msg").text("");
		btnOuter.addClass("file_uploading");
		setTimeout(function(){
			btnOuter.addClass("file_uploaded");
		},3000);
		var uploadedFile = URL.createObjectURL(e.target.files[0]);
		setTimeout(function(){
			$("#uploaded_view").append('<img src="'+uploadedFile+'" />').addClass("show");
		},3500);
	}
});
$(".file_remove").on("click", function(e){
	$("#uploaded_view").removeClass("show");
	$("#uploaded_view").find("img").remove();
	btnOuter.removeClass("file_uploading");
	btnOuter.removeClass("file_uploaded");
});


var number = 1;
do {
  function showPreview(event, number){
    if(event.target.files.length > 0){
      let src = URL.createObjectURL(event.target.files[0]);
      let preview = document.getElementById("file-ip-"+number+"-preview");
      preview.src = src;
      preview.style.display = "block";
    } 
  }
  function myImgRemove(number) {
      document.getElementById("file-ip-"+number+"-preview").src = "https://i.ibb.co/ZVFsg37/default.png";
      document.getElementById("file-ip-"+number).value = null;
    }
  number++;
}
while (number < 5);