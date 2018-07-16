$(document).ready(function() {
    //  sikayet button
    $("#navigationButton0").on("click", function() {
        window.location.href = "sema_3_1_1_x.html"
    });

    //  konum button
    $("#navigationButton1").on("click", function() {
        window.location.href = "sema_3_1_2_x.html";
    });

    //  kaynak button
    $("#navigationButton2").on("click", function() {
        window.location.href = "sema_3_1_3_x.html";
    });

    //  zaman button
    $("#navigationButton3").on("click", function() {
        window.location.href = "sema_3_1_4_0.html";
    });

    //  ek bilgi button
    $("#navigationButton4").on("click", function() {
        window.location.href = "sema_3_1_5_0.html";
    });

    //  cancel button
    $("#cancelButton").on("click", function() {
        window.location.href = "sema_3.html";
    })

    //  next button
    $("#nextButton").on("click", function() {
        //  check if hidden page div exists
        if ( $("#pageDataDiv").length )
        {
            console.log("hidden page data found");


            //  check if data has data-add-sikayet-page-index attribute
            var attr = $("#pageDataDiv").attr("data-add-sikayet-page-index");
            console.log(attr);
            if ((typeof attr != typeof undefined) && (attr != false))
            {
                console.log("attribute exists");
                if (attr == 1)
                {
                    window.location.href = "sema_3_1_2_x.html";
                }
                else if (attr == 2)
                {
                    window.location.href = "sema_3_1_3_x.html";
                }
                else if (attr == 3)
                {
                    window.location.href = "sema_3_1_4_0.html";
                }
                else if (attr == 4)
                {
                    window.location.href = "sema_3_1_5_0.html";
                }
                else if (attr == 5)
                {
                    //  TO DO: preview sayfasina yolla
                    window.location.href = "sema_3.html";
                }
            }
        }
    })
})