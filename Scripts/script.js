$(document).ready(function () {

    //moblie sliding nav bar
    $(".sideNavButton").click(function () {
        $("#sideNav").toggle("slide", 300);
    });
    $("#sideNav").click(function () {
        $("#sideNav").toggle("slide", 300);
    });

    //nav buttons, just add the class name to the html element
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
        $("#cartPage").hide();
        $("#receiptPage").hide();
        $("#paymentChoice").show();
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
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        $("#cartPage").hide();
        $("#receiptPage").hide();
        $("#paymentButtons").hide();
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
    



});