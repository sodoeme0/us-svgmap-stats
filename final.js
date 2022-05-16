$(document).ready(function() {
    $("a").each(function() {

        $(this).hover(function(){
            var currentState = $(this).attr("title");
            $("#state_td").text($(this).attr("title"));
            $.getJSON("states.json", function(data){
                $.each(data, function() {
                    $.each(this, function(key, val){
                        if(val.name == currentState){
                            document.getElementById("droprate_td").innerHTML = val.drop_rates;
                                document.getElementById("povrate_td").innerHTML = val.poverty_rates;




                        }



                    })


                })

            })

        });

    });
});