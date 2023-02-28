

$(function () {
    $("#datepicker").datepicker();
});

let list = document.querySelectorAll(".btnEdit");

//list.addEventListener(`click`, function (e) {
//    let num = e.target.getAttribute("data-row");
//    console.log(num);
//});

$(".btnEdit").click(function (e) {
    let num = e.target.getAttribute("data-index"); 
    let index2 = document.querySelector(`[data-row="${num}"] :first-child`).textContent
    let index3 = document.querySelector(`[data-row="${num}"] :nth-child(2)`).textContent
    let index4 = document.querySelector(`[data-row="${num}"] :nth-child(3)`).textContent

    $("#txtName").val(index2.trim());
    $("#txtAGE").val(index3.trim());
    $("#datepicker").val(index4.trim());
    $("#txtID").val(num);
    $("#btnSend").html('送出編輯');

    $('#form1').attr('action', '/Home/HomeWorkEdit')

    alert('進行編輯');
});


//$(".btnEdit").click(function (e) {

//    let index = $("#btnEdit").parent().parent().attr("data-row");

//    let index2 = document.querySelector(`[data-row="${index}"] :first-child`).textContent
//    let index3 = document.querySelector(`[data-row="${index}"] :nth-child(2)`).textContent
//    let index4 = document.querySelector(`[data-row="${index}"] :nth-child(3)`).textContent

//    $("#txtName").val(index2.trim());
//    $("#txtAGE").val(index3.trim());
//    $("#datepicker").val(index4.trim());
//    $("#btnSend").html('送出編輯');


//});

//function click123(event) {
//    var a = event.target.getAttribute(".class");
//    console.log(a);
//}

    //let index2 = document.querySelector(`[data-row="${index}"] :first-child`).textContent
    //let index3 = document.querySelector(`[data-row="${index}"] :nth-child(2)`).textContent
    //let index4 = document.querySelector(`[data-row="${index}"] :nth-child(3)`).textContent

    //$("#txtName").val(index2.trim());
    //$("#txtAGE").val(index3.trim());
    //$("#datepicker").val(index4.trim());
    //$("#btnSend").html('送出編輯');

