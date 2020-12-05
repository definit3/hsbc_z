$('select').material_select();
$('.dropdown-trigger').dropdown();
$('.modal').modal();
$('.processing').hide();

function initializeCaptureVideo(video_element_id, video_captured_canvas, start_button_id, stop_button_id, is_save) {
    // Store a reference of the preview video element and a global reference to the recorder instance
    video = document.getElementById(video_element_id);
    canvas = document.getElementById(video_captured_canvas);

    is_audio_required = false;
    // When the user clicks on start video recording
    document.getElementById(start_button_id).addEventListener("click", function() {
        // Disable start recording button
        this.disabled = true;

        $("#btn-take-screenshot").show();
        $("#btn-take-screenshot-create").show();
        $("#submit-profile").attr("disabled", false);
        console.log(start_button_id);

        // Request access to the media devices
        navigator.mediaDevices.getUserMedia({
            audio: is_audio_required,
            video: true
        }).then(function(stream) {
            // Display a live preview on the video element of the page
            setSrcObject(stream, video);

            // Start to display the preview on the video element
            // and mute the video to disable the echo issue !
            video.play();
            video.muted = true;

            // Initialize the recorder
            recorder = new RecordRTCPromisesHandler(stream, {
                mimeType: 'video/webm',
                bitsPerSecond: 128000
            });

            if(is_save==true){
                Materialize.toast("Recognizing face...", 2000);
                startScreenShotTimer();
            }

            // Start recording the video
            recorder.startRecording().then(function() {
                // console.info('Recording video ...');
            }).catch(function(error) {
                console.error('Cannot start video recording: ', error);
            });

            // release stream on stopRecording
            recorder.stream = stream;
            videoStarted = true;

            // checkbox_video_check_element = document.getElementById("checkbox-video-checked");
            // if(checkbox_video_check_element!=null && checkbox_video_check_element!=undefined){
            //     is_video_checked = true;
            //     checkbox_video_check_element.checked = true;
            // }
            // screenShotTimer();
            // Enable stop recording button
            // document.getElementById(stop_button_id).disabled = false;
            // document.getElementById(start_button_id).disabled = true;
            $("#"+stop_button_id).attr("disabled", false);
            $("#"+start_button_id).attr("disabled", true);
        }).catch(function(error) {
            alert("Please allow access to webcam.");
            console.error("Cannot access media devices: ", error);
        });
    }, false);

    // When the user clicks on Stop video recording
    document.getElementById(stop_button_id).addEventListener("click", function() {
        $('#identification-message').html('');
        $('#resume').attr("disabled", true);
        this.disabled = true;
        console.log(stop_button_id);
        recorder.stopRecording().then(function() {
            // console.info('stopRecording success');

            // Retrieve recorded video as blob and display in the preview element
            videoBlob = recorder.blob;

            // console.log("DataURL:", recorder.getDataURL());

            recorder.getDataURL().then(function(result) {
            });

            if(is_save==true){
                clearScreenShotTimer();
            }

            // video.src = URL.createObjectURL(videoBlob);
            // video.play();

            // Unmute video on preview
            // video.muted = false;

            // Stop the device streaming
            // recorder.stream.stop();
            recorder.stream.getTracks()[0].stop();
            videoStopped = true;
            // stopSpeechToText(this);
            // clearTimeout(one_min_counter_timeout);
            // Enable record button again !
            $("#"+stop_button_id).attr("disabled", true);
            $("#"+start_button_id).attr("disabled", false);
        }).catch(function(error) {
            console.error('stopRecording failure', error);
        });
    }, false);
}


if(window.location.pathname.indexOf("/home/create-profile")!=-1){
    initializeCaptureVideo("global-video-captured-response", "global-canvas-video-capture", "btn-start-recording", "btn-stop-recording", false);
}

var image_counter = 0;

$(document).on("click","#btn-take-screenshot-create", function(e){
    if(image_counter<8){
        video = document.getElementById('global-video-captured-response');
        canvas = document.getElementById('global-canvas-video-capture');
        img = document.getElementById('captured-image-from-video');
        canvas.width = 200;
        canvas.height = 150;
        canvas.getContext('2d').drawImage(video, 0, 0, 200, 150);
        img.src = canvas.toDataURL('image/png');
        html_image = `
            <div class="col s3">
                <img src="`+img.src+`" id="profile-collection-`+image_counter+`">
            </div>`;
        document.getElementById("profile-collection").innerHTML+=html_image;
        image_counter+=1;
    }else{
        Materialize.toast("Max 8 profile pics allowed", 2000);
    }
});

var image_counter = 0;

$(document).on("click","#btn-take-screenshot", function(e){
    if(image_counter<8){
        video = document.getElementById('global-video-captured-response-detection');
        canvas = document.getElementById('global-canvas-video-capture-detection');
        img = document.getElementById('captured-image-from-video');
        canvas.width = 200;
        canvas.height = 150;
        canvas.getContext('2d').drawImage(video, 0, 0, 200, 150);
        img.src = canvas.toDataURL('image/png');
        html_image = `
            <div class="col s3">
                <img src="`+img.src+`" id="profile-collection-`+image_counter+`">
            </div>`;
        document.getElementById("profile-collection").innerHTML+=html_image;
        image_counter+=1;
    }else{
        Materialize.toast("Max 8 profile pics allowed", 2000);
    }
});

$(document).on("click", "#submit-profile", function(e){

    profile_name = $("#profile-name").val();
    company_name = $("#company-name").val();
    designation = $("#designation").val();

    if(profile_name==""){
        Materialize.toast("Please enter your name", 2000);
        return;
    }

    var image_list = [];
    for(var i=0;i<image_counter;i++){
        image_src = document.getElementById("profile-collection-"+i).src;
        image_list.push(image_src);
    }

    if(image_list.length<4){
        Materialize.toast("Minimum 4 profile pics are required.", 2000);
        return;
    }

    json_string = JSON.stringify({
        image_list:image_list,
        profile_name:profile_name,
        company_name:company_name,
        designation:designation,
    });

    $("#preloader-create-profile").show();
    $("#submit-profile").attr("disabled", true);
    $.ajax({
        url:"/home/upload-profile-pics/",
        type:"POST",
        data:{
            json_string:json_string
        },
        success: function(response){
            startScreenShotTimer()
            if(response["status"]==200){
                Materialize.toast("Your profile has been created successfully", 2000);
            }else{
                Materialize.toast("Unable to create profile.", 2000);
            }
            $("#submit-profile").attr("disabled", false);
            $("#preloader-create-profile").hide();
        },
        error: function(error){
            startScreenShotTimer()
            console.log("Please report this error: ", error);
            $("#submit-profile").attr("disabled", false);
            $("#preloader-create-profile").hide();
        }
    })
});

// function stop_detection_webcam() {
//     $("#btn-stop-recording-detection")[0].click();
// }

// function stop_profile_webcam() {
//     $("#btn-stop-recording")[0].click();
// }

// function start_detection_webcam() {
//     $("#btn-start-recording-detection")[0].click();
// }

// function start_profile_webcam() {
//     $("#btn-start-recording")[0].click();
// }

function btntakeScreenShot() {
    $("#btn-take-screenshot").click();
    $("#btn-take-screenshot").click();
    $("#btn-take-screenshot").click();
    $("#btn-take-screenshot").click();
}


function takeScreenShot() {
    $("#btn-take-screenshot-detection").click();
}

var screen_shot_min_counter_timeout;
function startScreenShotTimer(){
    screen_shot_min_counter_timeout = setInterval(takeScreenShot, 3000);
}

function clearScreenShotTimer() {
    console.log("stop timer");
    clearInterval(screen_shot_min_counter_timeout);
}

function getCsrfToken() {
    var CSRF_TOKEN = $('input[name="csrfmiddlewaretoken"]').val();
    return CSRF_TOKEN;
}

$(document).on("click","#resume", function(e){
    startScreenShotTimer();
    this.disabled = true;
    // $('#resume').addClass('disabled_class')
});

$(document).on("click","#btn-take-screenshot-detection", function(e){
    $("#profile-identification").hide();

    video = document.getElementById('global-video-captured-response-detection');
    canvas = document.getElementById('global-canvas-video-capture-detection');
    img = document.getElementById('captured-image-from-video-detection');

    canvas.width = 200;
    canvas.height = 150;
    canvas.getContext('2d').drawImage(video, 0, 0, 200, 150);
    img.src = canvas.toDataURL('image/png');
    CSRF_TOKEN = getCsrfToken();

    $("#preloader-profile-identification").show();
    $.ajax({
        url: "/home/detect-face/",
        type: "POST",
        headers:{
            "X-CSRFToken": CSRF_TOKEN
        },
        data: {
            applicant_image:img.src
        },
        success: function(response) {
            console.log(response);
            if(response["status"]!=200 && response["status"]!=100){
                console.log("Please report this error: "+ response["status_message"]);
                // $("#modal1").modal('open');
                // clearScreenShotTimer();
            }
            else if(response["status"]==100)
            {
                $('#resume').attr("disabled", false);
                image_counter = 0;
                clearScreenShotTimer();
                $("#profile-collection").empty();
                $("#profile-name").val('');
                $("#company-name").val('');
                $("#designation").val('');
                message = response["message"];
                $("#profile-identification").show();
                // $(".for_hide").hide();
                btntakeScreenShot();
                document.getElementById("identification-message").innerHTML=message;
                $("#create_profile_button").click();
                $("#modal1").modal('open');
            }
            else
            {
                $('#resume').attr("disabled", false);
                image_counter = 0;
                clearScreenShotTimer();
                name=response["name"]
                company_name=response["company_name"]
                designation=response["designation"]
                match_percentage=response["match_percentage"]
                message="Name: "+name + "</br>" + "Company name: "+company_name + "</br>"+ "Designation: "+designation + "</br>" +  "Match percentage: " + match_percentage
                second_name = response["second_name"]
                second_match_percentage = response["second_match_percentage"]
                second_designation = response["second_designation"]
                second_company_name = response["second_company_name"]
                if(second_name != "")
                {
                    message+="</br></br>"+ "Name: "+second_name + "</br>" + "Company name: "+second_company_name + "</br>"+ "Designation: "+ second_designation + "</br>" +  "Match percentage: " + second_match_percentage
                }
                $("#profile-identification").show();
                document.getElementById("identification-message").innerHTML=message;
            }
            $("#preloader-profile-identification").hide();
        },
        error: function(xhr, textstatus, errorthrown) {
            console.log("Please report this error: " + errorthrown + xhr.status + xhr.responseText);
            $("#preloader-profile-identification").hide();
        }
    });
});


if(window.location.pathname.indexOf("/home/face-detection")!=-1){
    initializeCaptureVideo("global-video-captured-response-detection", "global-canvas-video-capture-detection", "btn-start-recording-detection", "btn-stop-recording-detection", true);
    console.log("webcam video initializeCaptureVideo...");
}
