window.onload= function() {
        document.getElementById('preloader').style.display = 'none';
    };
$.preloadImages = function(){
    for(var i=0;i<arguments.length;i++){
    $("<img />").attr("src",arguments[i]);
    }
}
$.preloadImages("graduate-removebg-preview.png");
$(document).ready(  async function () {
    $("#r6").hide();
    $("#r5").hide();
    $("#r4").hide();
    $("#nu").hide();
})
$(document).ready(  async function () {
    

    // $("#e4").mouseover(function () {
    //     $("#e4").hide();
    //     $("#r6").toggle();
    //     $("#r5").hide();
    //     $("#r4").hide();
    // })
    // $("#e4").mouseout(function () {
    //     $("#e4").toggle();
    //     $("#r6").hide();
    //     $("#r5").hide();
    //     $("#r4").hide();
    // })
    $("#e4").click(function () {
        $("#e4").toggle();
        $("#r6").toggle();
        $("#r5").hide();
        $("#r4").hide();
    })
    $("#r6").click(function () {
        $("#e4").toggle();
        $("#r6").toggle();
        $("#r5").hide();
        $("#r4").hide();
    })
    
})
$(document).ready(  async function () {
    // $("#e3").mouseover(function () {
    //     $("#e3").toggle();
    //     $("#r6").toggle();
    //     $("#r5").toggle();
    //     $("#r4").toggle();
    // })
    // $("#e3").mouseout(function () {
    //     $("#e3").toggle();
    //     $("#r5").toggle();
    //     $("#r4").toggle();
    //     $("#r6").toggle();
    // })
    $("#e3").click(function () {
        $("#e3").toggle();    
        $("#r5").toggle();
        $("#r6").hide();
        $("#r4").hide();
    })
    $("#r5").click(function () {
        $("#e3").toggle();    
        $("#r5").toggle();
        $("#r6").hide();
        $("#r4").hide();
    })
})
$(document).ready(async function () {
    // $("#e2").mouseover( function () {
    //     $("#e2").toggle();
    //     $("#r6").toggle();
    //     $("#r5").toggle();
    //     $("#r4").toggle();
    // })
    // $("#e2").mouseout(function () {
    //     $("#e2").toggle();
    //     $("#r5").toggle();
    //     $("#r4").toggle();
    //     $("#r6").toggle();
    // }) 
    $("#e2").click(function () {
        $("#e2").toggle();
        $("#r6").hide();
        $("#r5").hide();
        $("#r4").toggle();
    })
    $("#r4").click(function () {
        $("#e2").toggle();
        $("#r6").hide();
        $("#r5").hide();
        $("#r4").toggle();
    })
})

    // $("#arrow1").mouseover(function () {
    //     $("#c1").toggle();
    // })
    // $("#arrow1").mouseleave(function () {
    //     $("#c1").hide();
    // })
    // $("#arrow2").mouseover(function () {
    //     $("#c2").toggle();
    // })
    // $("#arrow2").mouseleave(function () {
    //     $("#c2").hide();
    // })
//})
// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("@medi");
//     divs.forEach(div => {
//         div.classList.toggle('dark-mode');
//     });

//  }
