
    $(function () {
        $("#datepicker").datepicker();
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

function test() {

    let index = $(".btnEdit").parent().parent().attr("data-row");

    let index2 = document.querySelector(`[data-row="${index}"] :first-child`).textContent
    let index3 = document.querySelector(`[data-row="${index}"] :nth-child(2)`).textContent
    let index4 = document.querySelector(`[data-row="${index}"] :nth-child(3)`).textContent

    $("#txtName").val(index2.trim());
    $("#txtAGE").val(index3.trim());
    $("#datepicker").val(index4.trim());
    $("#btnSend").html('送出編輯');

}
