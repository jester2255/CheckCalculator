//wage variables
//hrs, wage & overtimeHrs are gathered from DOM
var hrs, wage, ovrtmhrs;
const cellPhone = 22.51;
//Pre Tax variables
//retireEE = 401K contribution % gathered from DOM as well as the hsa
//the rest are constants.
var retireEE, hsa;
const dent = 17.50;
const medical = 68.90;
const vision = 7.44;
const wellDiscount = 20.00;
//Tax variables
//calculated from the adjusted gross income
var social, medicare, feds, state;
//post tax contributions
const accident = 6.94;
/*More variables*/
var retireER; //employer 401k contribution 
const ltdER = 3.12; //Employer Long term disability
const hsaER = 60.00; //Employer HSA Contribution


$( "button" ).on( "click", function notify(){
	console.log("it worked")
});

function preTax (){
	var gross = (hrs * wage) + (ovrtmhrs * ot) + cellPhone
}

function overtime(){//overtime hours = time and a half
var half = wage / 2
var ot = wage + half
}