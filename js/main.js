
$(document).ready(function(){
    $("#read-more1").click(function(e){
        e.preventDefault();
        $("#article1").slideToggle("slow");
    });
    
    $("#read-more2").click(function(e){
        e.preventDefault();
        $("#article2").slideToggle("slow");
    });
    

    if (el.text() === "Read more >") {
            para.slideDown(1000, function () {
                //this runs when animation is complete
                el.text('Read less <');
            });
        } else {
            para.slideUp(1000, function () {
                //this runs when animation is complete
                el.text('Read more >');
            });
        }
});

