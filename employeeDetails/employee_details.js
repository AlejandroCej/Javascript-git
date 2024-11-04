const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, especialization: 'JavScript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, especialization: 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, especialization: 'Java' },
];

//Function to display all employees
function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary} - ${employee.especialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary} - ${employee.especialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.age} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.especialization}</p>`;
    }
    else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}

function findEspecialization(employeeEsp) {
    const espEmployee = employees.find(employee => employee.especialization === employeeEsp);
    if (espEmployee) {
        document.getElementById('employeesDetails').innerHTML = `<p>${espEmployee.id}: ${espEmployee.name}: ${espEmployee.age} - ${espEmployee.department} - $${espEmployee.salary} - ${espEmployee.especialization}</p>`;
    }
    else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this especialization';
    }
}