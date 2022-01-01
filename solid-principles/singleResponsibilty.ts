/*
Single Responsibility - A class or method should be responsible for a single part of the functionality.

When this is violated? - e.g: 
1. You have error handling code in your class
2. You have presentation logic
3. Fille/DB/API execution


Below we have the solutions.
*/

export class HttpClient {
	//Exists to avoid Intellisense errors
}

var httpClient = new HttpClient();
filterEmployees(httpClient, []).then((employees) => {
	displayEmployees(employees); // Solution 2
	recordEmployee(employees, httpClient); // Solution 3
});

export function filterEmployees(httpClient, filters): Promise<any> {
	try {
		filters = removeDuplicateFilters(filters);
		return httpClient
			.get('/api/employees')
			.then((employees) => {
				let result = applyFilters(employees);
				return result;
			})
			.catch((err) => {
				handleError(err, 'Something went wrong while processing the employees'); // Solution 1
			});
	} catch (err) {
		handleError(err, 'Application critical error'); // Solution 1
	}
}

function recordEmployee(result: any[], httpClient: any) {
	result.forEach((employee) => {
		httpClient.post('/api/employees/record', employee);
	});
}

function displayEmployees(result: any[]) {
	let list = document.getElementById('employees-list');
	result.forEach((employee) => {
		let employeeItem = document.createElement('li');
		employeeItem.innerHTML = `<strong>${employee.lastName}</strong> ${employee.firstName}`;
		list.appendChild(employeeItem);
	});
}

function handleError(err, msg) {
	console.error(msg);
	let messageBox = new MessageBox();
	messageBox.show(msg);
}

function removeDuplicateFilters(filters) {
	//Exists to avoid Intellisense errors
}

function applyFilters(filters): any[] {
	//Exists to avoid Intellisense errors
	return [];
}

export class MessageBox {
	//Exists to avoid Intellisense errors
	show(msg) {}
}
