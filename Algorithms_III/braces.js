/*
	Jose Chery
	Braces Algorithm

	Given an N different open and close braces in a string "( { [ } ] )", 
	check whether the string has matching braces. 
   	Return true if the braces match, false otherwise.
 */

// String to braces 
var braces = "({[]}])"; 

// Function to check string
function checkBraces(braces) {
	// Function to check for matching braces
	function check(brace){
		for(y in braces){
			if(braces[y] == brace){
				return true; 
			}
		}
	}
	// Error catching variable
	var Errors = false;  
	// Iterate through characters in string
	for(x in braces){
		// Print current string character
		console.log('Checking '+braces[x]); 
		switch (braces[x]) {
			case '(':
				if(!check(')')){
					console.log("'(' does not have a matching brace."); 
					Errors = true; 
				}
			break; 
			case ')':
				if(!check('(')){
					console.log("'(' does not have a matching brace."); 
					Errors = true; 
				}
			break; 
			case '{':
				if(!check('}')){
					console.log("'}' does not have a matching brace."); 
					Errors = true; 
				}
			break;
			case '}':
				if(!check('{')){
					console.log("'{' does not have a matching brace."); 
					Errors = true; 
				}
			break;
			case '[':
				if(!check(']')){
					console.log("']' does not have a matching brace."); 
					Errors = true; 
				}
			break;
			case ']':
				if(!check('[')){
					console.log("'[' does not have a matching brace."); 
					Errors = true; 
				}
			break; 
		}
	}
	if(!Errors){
		return true; 
	} else {
		return false;
	}
}

// Function call to check string for matching braces
var results = checkBraces(braces); 

// Print results
console.log(results);