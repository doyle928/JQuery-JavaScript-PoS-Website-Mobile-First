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
        //$("#cart").hide();
        $("#receiptPage").hide();
    });
    $(".everydayButton").click(function () {
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").show();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        //$("#cart").hide();
        $("#receiptPage").hide();
    });
    $(".dressButton").click(function () {
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").show();
        $("#jeansCollectionPage").hide();
        //$("#cart").hide();
        $("#receiptPage").hide();
    });
    $(".jeanButton").click(function () {
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").show();
        //$("#cart").hide();
        $("#receiptPage").hide();
    });
    $(".cartButton").click(function () {
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        $("#cart").hide();
        $("#receiptPage").hide();
        $("#paymentChoice").show();
    });
    $(".payment").click(function () {
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        $("#cart").hide();
        $("#receiptPage").hide();
        $("#paymentButtons").show();
    })
    $("#cashButton").click(function () {
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        $("#cart").hide();
        $("#receiptPage").hide();
        $("#paymentButtons").hide();
        $("#cashPay").show();
    })
    $("#creditCardButton").click(function () {
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        $("#cart").hide();
        $("#receiptPage").hide();
        $("#paymentButtons").hide();
        $("#cashPay").hide();
        $("#creditCardPay").show();

    })
    $("#cashPaySubmit").click(function () {
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        $("#cart").hide();
        $("#receiptPage").show();
        $("#paymentButtons").hide();
        $("#cashPay").hide();
        $("#creditCardPay").hide();
    })
    $("#ccPaySubmit".click(function () {
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        $("#cart").hide();
        $("#receiptPage").show();
        $("#paymentButtons").hide();
        $("#cashPay").hide();
        $("#creditCardPay").hide();
    })

    //everyday add to cart buttons
    

)});