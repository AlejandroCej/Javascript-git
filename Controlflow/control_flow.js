//Use of if operator
let userRole = "admin";
let accessLevel;

if (userRole === "admin"){
    accessLevel = "Full access granted";
} else if (userRole === "manager"){
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted"
}
console.log("Access Level: ", accessLevel);

//Use of nested if operator
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
	if (userRole === "admin") {
		userMessage = "Welcome, admin!";
	} else {
		userMessage = "Welcome, User!";
	} 
} else {
	userMessage = "Please log in to access the system.";
}
console.log("User Message: ", userMessage);

//Use of switch operator
let userType = "subscriber";
let userCategory;

switch (userType) {
	case "admin":
		userCategory = "Administrator";
		break;
	case "manager":
		userCategory = "Manager";
		break;
	case "subscriber":
		userCategory = "Subscriber";
		break;
	default:
		userCategory = "Unknown";
}
console.log("User Category:", userCategory);

//use of ternary operator
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);