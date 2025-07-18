// method to display the image after 10 seconds

document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.getElementById("myProfilePic");
    if(profileImage){
    profileImage.style.opacity = 0 ;

    setTimeout(() => {
        profileImage.style.transition = 'opacity 1s ease-in-out';
        profileImage.style.opacity = 1;
    }, 10000); // 10 seconds
    }
});

// method to show current date and year in the footer section

document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById('currentYear');
    const date = document.getElementById('currentDate');

    if(year && date) {
    const now = new Date();
    year.textContent = now.getFullYear();
    date.textContent = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
});

// mark to grade converter

document.addEventListener("DOMContentLoaded", () => {
    const convertBtn = document.getElementById("convertBtn");
    if (convertBtn) {
        convertBtn.addEventListener("click", MarkToGrade);
    }
});

function MarkToGrade (){
    const markInput = document.getElementById("markInput");
    const gradeOutput = document.getElementById("gradeOutput");
    const validationMessage = document.getElementById("validationMessage");

    if (!markInput || !gradeOutput || !validationMessage) {
            console.error("Mark to grade converter elements not found. Cannot perform conversion.");
            return; 
        }

    // clears previous inputs
    gradeOutput.textContent = '';
    validationMessage.textContent = '';

    const markString = markInput.value.trim();

    if(markString === ''){
        validationMessage.textContent = "Please enter a mark.";
        return;
    }

    const mark = parseFloat(markString); // parseFloat ensures that the mark entered should not exceed 100

    if(isNaN(mark)){
        validationMessage.textContent = "Invalid input: Please enter a numeric value.";
        return;
    }

    if (mark < 0) {
        validationMessage.textContent = "Invalid mark: Mark cannot be negative.";
        return;
    }

    if (mark > 100) {
        validationMessage.textContent = "Invalid mark: Mark cannot exceed 100.";
        return;
    }

    let grade;
    if (mark >= 90) {
        grade = 'A';
    } else if (mark >= 80) {
        grade = 'B';
    } else if (mark >= 70) {
        grade = 'C';
    } else if (mark >= 60) {
        grade = 'D';
    } else if (mark >= 50) {
        grade = 'E';
    } else {
        grade = 'F';
    }
    gradeOutput.textContent = `Grade: ${grade}`;

};

// Staff 

document.addEventListener("DOMContentLoaded", () => {

    const tableBody = document.getElementById("tableBody");
    const staffTable = document.getElementById("staffTable");

    if (!tableBody || !staffTable) return;
   
        var dataSet = [   
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
];


let sortDirection = true;

function insertTableData(data){
    tableBody.innerHTML = ' ';

    data.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}   

function sortTable(columnIndex){
    const sorted = [...dataSet].sort((a,b) => {
        let valA = a[columnIndex];
        let valB = b[columnIndex];

        // Salary and Ext
        if(columnIndex === 3){
            valA = parseInt(valA);
            valB = parseInt(valB);
        } else if(columnIndex === 5){
            valA = parseFloat(valA.replace(/[$,]/g, ""));
            valB = parseFloat(valB.replace(/[$,]/g, ""));
        } else if (columnIndex === 4) {
        // Sort dates
            valA = new Date(valA);
            valB = new Date(valB);
         } else {
            valA = valA.toString().toLowerCase();
            valB = valB.toString().toLowerCase();
        }
    return sortDirection ? (valA > valB ? 1 : -1) : (valA < valB ? 1 : -1);
  });

     sortDirection = !sortDirection;
    insertTableData(sorted);

}

    insertTableData(dataSet);
    const headers = document.querySelectorAll("#staffTable thead th");
    headers.forEach((th, index) => {
      th.addEventListener("click", () => sortTable(index));
    }); 
});

// Temperature converter


const tempInput = document.getElementById("tempInput");
const unitSelect = document.getElementById("unitSelect");
const resultC = document.getElementById("resultCelsius");
const resultF = document.getElementById("resultFahrenheit");
const resultK = document.getElementById("resultKelvin");

// Conversions

function convertTemperature() {
    const temp = parseFloat(tempInput.value);
    const unit = unitSelect.value;

if(isNaN(temp)) {
    resultC.textContent = "";
    resultF.textContent = "";
    resultK.textContent = "";
    return;
}

let celsius, fahrenheit, kelvin; 

if(unit === "celsius") {
    celsius = temp;
    fahrenheit = (temp * 9/5) + 32; 
    kelvin = temp + 273.15;
} else if (unit === "fahrenheit") {
      celsius = (temp - 32) * 5/9;
      fahrenheit = temp;
      kelvin = celsius + 273.15;
} else if (unit === "kelvin") {
      celsius = temp - 273.15;
      fahrenheit = (celsius * 9/5) + 32;
      kelvin = temp;
}

// Results rounded to 2 decimal places
celsius = celsius.toFixed(2);
fahrenheit = fahrenheit.toFixed(2);
kelvin = kelvin.toFixed(2);

// Result display

    resultC.textContent = (unit !== "celsius") ? `Celsius: ${celsius} °C` : "";
    resultF.textContent = (unit !== "fahrenheit") ? `Fahrenheit: ${fahrenheit} °F` : "";
    resultK.textContent = (unit !== "kelvin") ? `Kelvin: ${kelvin} K` : "";

}
// Event Listeners

tempInput.addEventListener("input", convertTemperature);
unitSelect.addEventListener("change", convertTemperature);


