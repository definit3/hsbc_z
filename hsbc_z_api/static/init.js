$('select').material_select();
$('.dropdown-trigger').dropdown();
$('.modal').modal();
$('.processing').hide();

function getCsrfToken() {
    var CSRF_TOKEN = $('input[name="csrfmiddlewaretoken"]').val();
    return CSRF_TOKEN;
}


// $(document).on("click","#btn-take-screenshot-detection", function(e){
//     $("#profile-identification").hide();

//     video = document.getElementById('global-video-captured-response-detection');
//     canvas = document.getElementById('global-canvas-video-capture-detection');
//     img = document.getElementById('captured-image-from-video-detection');

//     canvas.width = 200;
//     canvas.height = 150;
//     canvas.getContext('2d').drawImage(video, 0, 0, 200, 150);
//     img.src = canvas.toDataURL('image/png');
//     CSRF_TOKEN = getCsrfToken();

//     $("#preloader-profile-identification").show();
//     $.ajax({
//         url: "/home/detect-face/",
//         type: "POST",
//         headers:{
//             "X-CSRFToken": CSRF_TOKEN
//         },
//         data: {
//             applicant_image:img.src
//         },
//         success: function(response) {
//             console.log(response);
//             if(response["status"]!=200 && response["status"]!=100){
//                 console.log("Please report this error: "+ response["status_message"]);
//                 // $("#modal1").modal('open');
//                 // clearScreenShotTimer();
//             }
//             else if(response["status"]==100)
//             {
//                 $('#resume').attr("disabled", false);
//                 image_counter = 0;
//                 clearScreenShotTimer();
//                 $("#profile-collection").empty();
//                 $("#profile-name").val('');
//                 $("#company-name").val('');
//                 $("#designation").val('');
//                 message = response["message"];
//                 $("#profile-identification").show();
//                 // $(".for_hide").hide();
//                 btntakeScreenShot();
//                 document.getElementById("identification-message").innerHTML=message;
//                 $("#create_profile_button").click();
//                 $("#modal1").modal('open');
//             }
//             else
//             {
//                 $('#resume').attr("disabled", false);
//                 image_counter = 0;
//                 clearScreenShotTimer();
//                 name=response["name"]
//                 company_name=response["company_name"]
//                 designation=response["designation"]
//                 match_percentage=response["match_percentage"]
//                 message="Name: "+name + "</br>" + "Company name: "+company_name + "</br>"+ "Designation: "+designation + "</br>" +  "Match percentage: " + match_percentage
//                 second_name = response["second_name"]
//                 second_match_percentage = response["second_match_percentage"]
//                 second_designation = response["second_designation"]
//                 second_company_name = response["second_company_name"]
//                 if(second_name != "")
//                 {
//                     message+="</br></br>"+ "Name: "+second_name + "</br>" + "Company name: "+second_company_name + "</br>"+ "Designation: "+ second_designation + "</br>" +  "Match percentage: " + second_match_percentage
//                 }
//                 $("#profile-identification").show();
//                 document.getElementById("identification-message").innerHTML=message;
//             }
//             $("#preloader-profile-identification").hide();
//         },
//         error: function(xhr, textstatus, errorthrown) {
//             console.log("Please report this error: " + errorthrown + xhr.status + xhr.responseText);
//             $("#preloader-profile-identification").hide();
//         }
//     });
// });



$(document).on("click","#btn-submit", function(e){
    if($('#a_option').is(':checked')) { alert("it's checked"); console.log("checked")}
    alert($(".container input[type='radio']:checked").val());
    console.log("fuck")
    // CSRF_TOKEN = getCsrfToken();
    // $.ajax({
    //     url: "http://35.232.80.150:9595/api",
    //     type: "GET",
    //     headers:{
    //         "X-CSRFToken": CSRF_TOKEN
    //     },
    //     data: {
    //     },
    //     success: function(response) {
    //         console.log(response);
    //         if(response["status"]!=200 && response["status"]!=100){
    //             console.log("Please report this error: "+ response["status_message"]);
    //             // $("#modal1").modal('open');
    //             // clearScreenShotTimer();
    //         }
    //         else if(response["status"]==100)
    //         {
    //         }
    //     },
    //     error: function(xhr, textstatus, errorthrown) {
    //         console.log("Please report this error: " + errorthrown + xhr.status + xhr.responseText);
    //         $("#preloader-profile-identification").hide();
    //     }
    // });
});