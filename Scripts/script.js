var counter = 0;
var subTotal = 0;
var total = 0;
$("#receiptPage").hide();
$(document).ready(function () {
    $("#cashPay").hide();
    $("#creditCardPay").hide();
    $("#cartCounter").hide();
    $("#cartCounter").hide();
    $("#invoice").hide();
    for (i = 0; i < 12; i++) {
        $(".productCart" + (i + 1)).hide();
        $(".productReceipt" + (i + 1)).hide();
    }

    // $("#receiptPage").hide();

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
        $(".footer").show();
        $("#receiptPage").hide();
        $(".cashFormFail").hide();
        $(".cashFail").hide();
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
        } else if (which == "payment") {
            $("#paymentButtons").show();
        }
    });
    //everyday add to cart buttons

    subTotal = 0;
    // add products to cart
    $(".productBuyButton").click(function () {

        var productId = $(this).attr("data-product-id");
        $(".productCart" + productId).show();
        $(".productReceipt" + productId).show();
        counter++;
        $("#cartCounter").show();
        $("#cartCounter > p").html(counter);
        if (counter >= 10) {
            $("#cartCounter > p").css({
                "font-size": "8px"
            });
        } else {
            $("#cartCounter > p").css({
                "font-size": "10px"
            });
        }
        var addingTotal = $(".productCart" + productId).find("h3").text();
        addingTotal = addingTotal.substring(1, addingTotal.length);
        addingTotal = parseInt(addingTotal);
        subTotal += addingTotal;
        console.log(subTotal);
    });

    // remove products from cart
    $(".productRemoveButton").click(function () {
        var productId = $(this).attr("data-cart-id");
        $(".productCart" + productId).hide();
        $(".productReceipt" + productId).hide();
        counter--;
        $("#cartCounter > p").html(counter);
        if (counter <= 0) {
            counter = 0;
            $("#cartCounter").hide();
        }
        if (counter >= 10) {
            $("#cartCounter > p").css({
                "font-size": "8px"
            });
        } else {
            $("#cartCounter > p").css({
                "font-size": "10px"
            });
        }
        var addingTotal = $(".productCart" + productId).find("h3").text();
        addingTotal = addingTotal.substring(1, addingTotal.length);
        addingTotal = parseInt(addingTotal);
        subTotal -= addingTotal;
        console.log(subTotal);
    });

    $("#cashButton").click(function () {
        $("#cashTotalBefore > .typeTo").empty();
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
        $(".cashFormFail").hide();
        $(".cashFail").hide();
        $("#cashTotalBefore > .typeTo").append("$" + subTotal);
        var salesTax = $("#cashSalesTax > .typeTo").text();
        salesTax = parseInt(salesTax) / 100 + 1;
        var totalRound = Math.round((subTotal * salesTax) * 100) / 100;
        $("#cashPayTotal > .typeTo").text("$" + totalRound);
    })
    $("#creditCardButton").click(function () {
        $("#cashTotalBeforeCC > .typeTo").empty();
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
        $(".nameFail").hide();
        $(".cardNumFail").hide();
        $(".cvvFail").hide();
        $("#cashTotalBeforeCC > .typeTo").append("$" + subTotal);
        var salesTax = $("#cashSalesTaxCC > .typeTo").text();
        salesTax = parseInt(salesTax) / 100 + 1;
        var totalRound = Math.round((subTotal * salesTax) * 100) / 100;
        $("#cashPayTotalCC > .typeTo").text("$" + totalRound);
    })

    $("#ccPayButton").click(function (event) {
        var owner = $("#owner").val();
        var ccNumber = $("#cardNumber").val();
        var expireMonth = $("#month").val();
        var expireYear = $("#year").val();
        var cvv = $("#cvv").val();
        event.preventDefault();

        var salesTax = $("#cashSalesTaxCC > .typeTo").text();
        salesTax = parseInt(salesTax) / 100 + 1;
        console.log(subTotal);
        var total = subTotal * salesTax;

        if (owner != null && owner != "") {
            if (ccNumber != null && ccNumber != "" && ccNumber.length != 15) {
                if (cvv != null && cvv != "") {
                    $("#receiptPage").show();
                    $("#paymentButtons").hide();
                    $("#cashPay").hide();
                    $("#creditCardPay").hide();
                    $("#paymentChoice").hide();
                    $(".nameFail").hide();
                    $(".cardNumFail").hide();
                    $(".cvvFail").hide();
                    $("#invoice").show();
                    $("#invoiceCashChange").hide();
                    $("#invoiceCashPaid").hide();
                    $("#invoicePayment > .invoiceWrite").text("Credit Card");
                    $("#invoiceTotal > .invoiceWrite").text("$" + (Math.round(total * 100) / 100));
                    ccNumber = ccNumber.substring(15,19);
                    $("#invoiceCard > .invoiceWrite").text("-" + ccNumber);

                } else {
                    $(".nameFail").hide();
                    $(".cardNumFail").hide();
                    $(".cvvFail").show();
                }
            } else {
                $(".nameFail").hide();
                $(".cardNumFail").show();
                $(".cvvFail").hide();
            }
        } else {
            $(".nameFail").show();
            $(".cardNumFail").hide();
            $(".cvvFail").hide();
        }

    })
    $(".cashPaySubmit").click(function () {
        var cashGiven = $("#cashTendered").val();
        var salesTax = $("#cashSalesTaxCC > .typeTo").text();
        salesTax = parseInt(salesTax) / 100 + 1;
        console.log(subTotal);
        console.log(cashGiven);
        var total = subTotal * salesTax;
        if (cashGiven != null || cashGiven != "") {
            if (cashGiven >= total) {
                var change = cashGiven - total;
                change = Math.round(change * 100) / 100;
                console.log(change);
                $(".invoiceWrite").empty();
                $("#receiptPage").show();
                $("#paymentButtons").hide();
                $("#cashPay").hide();
                $("#creditCardPay").hide();
                $("#paymentChoice").hide();
                $("#invoice").show();
                $("#invoiceCard").hide();
                $(".cashFormFail").hide();
                $(".cashFail").hide();
                $("#invoicePayment > .invoiceWrite").text("Cash");
                $("#invoiceTotal > .invoiceWrite").text("$" + (Math.round(total * 100) / 100));
                $("#invoiceCashPaid > .invoiceWrite").text("$" + cashGiven);
                $("#invoiceCashChange > .invoiceWrite").text("$" + change);
            } else {
                $(".cashFormFail").hide();
                $(".cashFail").show();
            }
        } else {
            $(".cashFormFail").show();
            $(".cashFail").hide();
        }
    });
    total = 0;
    subTotal = 0;
});
