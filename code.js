$("button").button();
$('#tabs').tabs();
$("#calculateformileage").click(calculate);
$("#semester1").click(semester1)
$("#semester2").click(semester2)
$("#getaverage").click(getaverage)
$("#resetbtn").click(reset)
$("#resetbtn2").click(reset)
$("#resetbtn3").click(reset)
$("#add").click(addtolist)


let semester;
let totalcalories = 0;


function calculate(){
    let distance = Number($("#distancebox").val())
    let gas = Number($("#gastankbox").val())
       
    let mileage = gas/distance * 100;
    
    $("#totalmileage").html(`Your car's gas rating is ${mileage.toFixed(2)}L per 100km`)
    
    
}



function reset(){
    
    $("#distancebox").val("")
    $("#gastankbox").val("")
    $("#totalmileage").html("")
    $("#course1field").val("")
    $("#course2field").val("")
    $("#course3field").val("")
    $("#course4field").val("")
    $("#average").html("")
    $("#courses").css("display",'none')
    $("#fooditem").val("")
    $("#calories").val("")
    totalcalories = 0;
    $("#amountoftotalcalories").html(`${totalcalories}`);
     $("#thelist").html("")
}




function semester1(){
    $("#course1").html("1 ");
    $("#course2").html("1 ");
    $("#course3").html("1 ");
    $("#course4").html("1 ");
    $("#courses").css("display",'inherit')
    semester = 1
    
  
    
}

function semester2(){
    
    $("#course1").html("2 ");
    $("#course2").html("2 ");
    $("#course3").html("2 ");
    $("#course4").html("2 ");
    $("#courses").css("display",'inherit')
    semester =2;
    
    
}

function getaverage(){
    let grade1 = Number($("#course1field").val())
    let grade2 = Number($("#course2field").val())
    let grade3 = Number($("#course3field").val())
    let grade4 = Number($("#course4field").val())
    
    let averagegrade = (grade1+grade2+grade3+grade4)/4
    
    $("#average").html(`Your Average for semester ${semester}  is ${averagegrade.toFixed(2)}%`);
    
    
}


function addtolist(){
    let item = $("#fooditem").val()
    let calories = Number($("#calories").val())
     $("#thelist").append(`<option>${item}:${calories} </option>`)
    
totalcalories += calories;
    
    $("#amountoftotalcalories").html(`Total Calories: ${totalcalories}`);
    $("#calories").val("")
    
    
}


