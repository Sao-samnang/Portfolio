$(document).ready(function(){
    $("body").css("height","100vh")
    setTimeout(()=>{
        $(".loading").remove();
        $(".contain-body").css("display","block")
        $("body").css("height","auto")
    },1000);
})