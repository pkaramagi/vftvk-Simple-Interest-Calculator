window.addEventListener('load', function () {
  
  var rate = document.getElementById("rate");
var output = document.getElementById("interest-value");
output.innerHTML = rate.value + "%"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
rate.oninput = function() {
	
  output.innerHTML = (this.value) + "%";
}
  
});



function compute()
{
	var output;
	var rate = document.getElementById("rate").value;
	var principal= document.getElementById("principal").value;
	var years = document.getElementById("years").value;
	var resultContainer = document.getElementById("result");
	
	if(isNaN(principal)){
		alert('Please input numbers only');
    }
    else if(principal<= 0){
        alert('Please Input Positive Number');
    }
	else{
		yearlyInterest = principal * (rate/100);
		totalInterest = yearlyInterest * years;
		formattedYears = new Date().getFullYear() + Number(years);
		output = 'If you deposit '+principal+',<br/>';
		output += 'at an interest of '+rate+'%.<br/>';
		output += 'You will recieve an amount of ' +totalInterest+',<br/>';
		output += 'in the year '+formattedYears; 
	

		resultContainer.innerHTML = output;
		
	}
		
	
    
}
    

    