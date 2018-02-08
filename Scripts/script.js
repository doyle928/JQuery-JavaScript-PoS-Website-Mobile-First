$(document).ready(function () {

    //moblie sliding nav bar
    $(".sideNavButton").click(function () {
        $("#sideNav").toggle("slide",300);        
    });
    $("#sideNav").click(function () {
        $("#sideNav").toggle("slide",300);        
    });

    //nav buttons, just add the class name to the html element
    $(".homeButton").click(function (){
        $("#main").show();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        //$("#cart").hide();
        //$("#recieptPage").hide();
    });
    $(".everydayButton").click(function (){
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").show();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        //$("#cart").hide();
        //$("#recieptPage").hide();
    });
    $(".dressButton").click(function (){
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").show();
        $("#jeansCollectionPage").hide();
        //$("#cart").hide();
        //$("#recieptPage").hide();
    });
    $(".jeanButton").click(function (){
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").show();
        //$("#cart").hide();
        //$("#recieptPage").hide();
    });
    $(".cartButton").click(function (){
        $("#main").hide();
        $("#everyDayShirtsCollectionPage").hide();
        $("#dressShirtsCollectionPage").hide();
        $("#jeansCollectionPage").hide();
        //$("#cart").hide();
        //$("#recieptPage").hide();
    });

    //everyday add to cart buttons
    

});