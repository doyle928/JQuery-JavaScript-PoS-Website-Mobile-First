$(document).ready(function () {
<<<<<<< HEAD
  // hide products from cart to start
  for(i=0; i<12; i++) {
  $("#productCart"+ (i+1)).hide();
  }
=======
    $("#receiptPage").hide();

>>>>>>> 8963f6c4f863cc148ed5fed6f7d69caac2a4f5ae
    //moblie sliding nav bar
    $(".sideNavButton").click(function () {
        $("#sideNav").toggle("slide", 300);
    });
    $("#sideNav").click(function () {
        $("#sideNav").toggle("slide", 300);
    });

    //nav buttons, just add the class name to the html element
<<<<<<< HEAD
    $(".homeButton").click(function () {
        $("#main").show();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        $("#cartPage").hide();
        $("#receiptPage").hide();
    });
    $(".everydayButton").click(function () {
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").show();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        $("#cartPage").hide();
        $("#receiptPage").hide();
    });
    $(".dressButton").click(function () {
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").show();
        $("#jeansCollectionPage").hide();
        $("#cartPage").hide();
        $("#receiptPage").hide();
    });
    $(".jeanButton").click(function () {
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").show();
        $("#cartPage").hide();
        $("#receiptPage").hide();
    });
    $(".cartButton").click(function () {
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        $("#cartPage").show();
        $("#receiptPage").hide();
        // $("#paymentChoice").show();
        $(".cartPayIcon").empty();
        $(".cartPayIcon").text("payment");

    });
    $(".payment").click(function () {
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        $("#cartPage").hide();
        $("#receiptPage").hide();
        $("#paymentButtons").show();
    })
    $("#cashButton").click(function () {
=======
    $(".homeButton, .everydayButton, .dressButton, .jeanButton, .cartButton, .payment").click(function (event){
>>>>>>> 8963f6c4f863cc148ed5fed6f7d69caac2a4f5ae
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        $("#cartPage").hide();
        $("#paymentButtons").hide();
<<<<<<< HEAD
        $("#cashPay").show();
        $("#paymentChoice").show();
    })
    $("#creditCardButton").click(function () {
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        $("#cartPage").hide();

        $("#receiptPage").hide();
        $("#paymentButtons").hide();
        $("#cashPay").hide();
        $("#creditCardPay").show();
        $("#paymentChoice").show();

    })
    $("#cashPaySubmit").click(function () {
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        $("#cartPage").hide();
        $("#receiptPage").show();
        $("#paymentButtons").hide();
        $("#cashPay").hide();
        $("#creditCardPay").hide();
        $("#paymentChoice").hide();
    })
=======
        var which = "";
        which = $(this).attr("class").split(' ').pop();
        if(which == "homeButton"){
            $("#main").show();
        } else if(which == "everydayButton"){
            $("#everyDayShirtsCollectionPage").show();
        } else if(which == "dressButton"){
            $("#dressShirtsCollectionPage").show();
        } else if(which == "jeanButton"){
            $("#jeansCollectionPage").show();
        } else if(which == "cartButton"){
            $("#cartPage").show();
        } else if(which == "payment"){
            $("#paymentButtons").show();
        }
    });
>>>>>>> 8963f6c4f863cc148ed5fed6f7d69caac2a4f5ae


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

    $("#ccPayButton").click(function (event) {
        event.preventDefault();
        if (owner != null || owner != "") {
            if (ccNumber != null || ccNumber != "") {
                if (expireMonth != null || expireMonth != "") {
                    if (expireYear != null || expireYear != "") {
                        if (cvv != null || cvv != "") {
                            $("#main").hide();
                            $("#everyDayShirtsCollectionPage").hide();
                            $("#dressShirtsCollectionPage").hide();
                            $("#jeansCollectionPage").hide();
                            $("#cartPage").hide();
                            $("#receiptPage").show();
                            $("#paymentButtons").hide();
                            $("#cashPay").hide();
                            $("#creditCardPay").hide();
                            $("#paymentChoice").hide();
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    })

    $("#cashPaySubmit").click(function(){
        var cashGiven = $("#cashTendered").val();
        if (cashGiven != null || cashGiven != "") {
            if (cashGiven >= total) {
                var change = cashGiven - total;
                $("#receiptPage > p").append(change);


            }
        }
    })
    $("#cashTendered").val();
    $("#owner").val();
    $("#cvv").val();
    $("#cardNumber").val();


    // add products to cart
    $(".productBuyButton").click(function() {
      var productId = $(this).attr("data-product-id");
      $("#productCart" + productId).show();
    });

    // remove products from cart
    $(".productRemoveButton").click(function() {
      $(this).parent().parent().hide();
    });

});
