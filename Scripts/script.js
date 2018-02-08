var counter = 0;
$(document).ready(function () {
            $("#cashPay").hide();
        $("#creditCardPay").hide();
        $("#cartCounter").hide();
  for(i=0; i<12; i++) {
  $(".productCart"+ (i+1)).hide();
  }
    $("#cartCounter").hide();
    for (i = 0; i < 12; i++) {
        $(".productCart" + (i + 1)).hide();
    }

    $("#receiptPage").hide();
    //moblie sliding nav bar
    $(".sideNavButton").click(function () {
        $("#sideNav").toggle("slide", 300);
    });
    $("#sideNav").click(function () {
        $("#sideNav").toggle("slide", 300);
    });

    //nav buttons, just add the class name to the html element
    $(".homeButton, .everydayButton, .dressButton, .jeanButton, .cartButton").click(function (event) {
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        $("#cartPage").hide();
        $("#paymentChoice").hide();
        $(".cartPayIcon").empty();
        $(".cartPayIcon").text("shopping_cart");
        $("#cashPay").hide();
        $("#creditCardPay").hide();
        var which = "";
        which = $(this).attr("class").split(' ').pop();
        if (which == "homeButton") {
            $("#main").show();
        } else if (which == "everydayButton") {
            $("#everyDayShirtsCollectionPage").show();
        } else if (which == "dressButton") {
            $("#dressShirtsCollectionPage").show();
        } else if (which == "jeanButton") {
            $("#jeansCollectionPage").show();
        } else if (which == "cartButton") {
            $("#cartPage").show();
            $(".cartPayIcon").empty();
            $(".cartPayIcon").text("payment");
            $(".footer").hide();
        } else if(which == "payment"){
            $("#paymentButtons").show();
        }
    });
    //everyday add to cart buttons

    var subTotal = 40; //$().val();
    var owner = $("#owner").val();
    var ccNumber = $("#cardNumber").val();
    var expireMonth = $("#month").val();
    var expireYear = $("#year").val();
    var cvv = $("#cvv").val();

    function salesTax(total) {
        total = subTotal * 1.06;
        console.log(total);
        return total;
    }
    var total =  salesTax(subTotal);
    $("#payNow").click(function(){
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        $("#cartPage").hide();
        $("#paymentButtons").hide();
        $(".cartPayIcon").empty();
        $(".cartPayIcon").text("shopping_cart");
        $("#cashPay").hide();
        $("#creditCardPay").hide();
        $("#paymentChoice").show();
    })
    $("#cashButton").click(function(){
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        $("#cartPage").hide();
        $("#paymentButtons").hide();
        $(".cartPayIcon").empty();
        $(".cartPayIcon").text("shopping_cart");
        $("#cashPay").show();
        $("#creditCardPay").hide();
        $("#paymentChoice").hide();
    })
    $("#creditCardButton").click(function(){
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        $("#cartPage").hide();
        $("#paymentButtons").hide();
        $(".cartPayIcon").empty();
        $(".cartPayIcon").text("shopping_cart");
        $("#cashPay").hide();
        $("#creditCardPay").show();
        $("#paymentChoice").hide();
    })


    $("#ccPayButton").click(function (event) {
        event.preventDefault();
        if (owner != null || owner != "") {
            if (ccNumber != null || ccNumber != "") {
                if (expireMonth != null || expireMonth != "") {
                    if (expireYear != null || expireYear != "") {
                        if (cvv != null || cvv != "") {
                            $("#receiptPage").show();
                            $("#paymentButtons").hide();
                            $("#cashPay").hide();
                            $("#creditCardPay").hide();
                            $("#paymentChoice").hide();
                        } else {
                            alert("");
                        }
                    } else {
                        alert("");
                    }
                } else {
                    alert("");
                }
            } else {
                alert("");
            }
        } else {
            alert("");
        }
    })

    $("#cashPaySubmit").click(function () {
        var cashGiven = $("#cashTendered").val();
        if (cashGiven != null || cashGiven != "") {
            if (cashGiven >= total) {
                var change = cashGiven - total;
                $("#receiptPage > p").append(change);
                $("#receiptPage").show();
            }
        }
    })
    $("#cashTendered").val();
    $("#owner").val();
    $("#cvv").val();
    $("#cardNumber").val();


    // add products to cart
    $(".productBuyButton").click(function () {
        var productId = $(this).attr("data-product-id");
        $(".productCart" + productId).show();
        counter++;
        $("#cartCounter").show();
        $("#cartCounter > p").html(counter);
        if(counter >= 10){
            $("#cartCounter > p").css({"font-size": "8px"});
        }else {
            $("#cartCounter > p").css({"font-size": "10px"});
        }
        console.log(counter);
    });

    // remove products from cart
    $(".productRemoveButton").click(function () {
        var productId = $(this).attr("data-cart-id");
        $(".productCart" + productId).hide();
        counter--;
        $("#cartCounter > p").html(counter);
        if(counter <= 0){
            counter = 0;
            $("#cartCounter").hide();
        }
        if(counter >= 10){
            $("#cartCounter > p").css({"font-size":"8px"});
        }else {
            $("#cartCounter > p").css({"font-size":"10px"});
        }
    });
});