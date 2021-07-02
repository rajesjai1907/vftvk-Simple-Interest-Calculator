function compute()
{
    var principal = document.getElementById("principal").value;

    // validate the amount entered
    if (principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;

    var years = document.getElementById("years").value;


    // get today's date
    var today = new Date();
    // retrieve only the full number indicating the year
    var yyyy = today.getFullYear();
    // convert string number of year in integer value
    var n_years = parseInt(years);
    yyyy = n_years+ yyyy;
    var interest = principal * n_years * rate / 100;
    //alert(principal+" * "+n_years+" * "+rate);

    document.getElementById("result").innerHTML = rate+"%";
    var inner = "<br>If you deposit <span style=\"background-color: #FFFF00\">"+principal+ "</span>, <br>"+
    "at an interest rate of <span style=\"background-color: #FFFF00\">"+rate+"%</span>. <br>"+
    "You will receive an amount of <span style=\"background-color: #FFFF00\">"+interest+"</span>,<br>"+
    "in the year <span style=\"background-color: #FFFF00\">"+yyyy+"</span>";
    document.getElementById("result2").innerHTML = inner;

}

