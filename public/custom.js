$(document).ready(function(){$(".main").on("click",function(){
    let icon=$(this).find(".fa")
    icon.toggleClass("fa-times")
    icon.toggleClass("fa-plus")
    if(icon.hasClass("fa-times")){
        $(this).css("border-bottom","0")
    }else{$(this).css("border-bottom","1px solid #929293")}
    $(this).siblings("li").slideToggle()
})})