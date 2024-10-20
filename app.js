console.log("Hello World");
const name = "Elizabeth Booth";
let hasDownloadedResume = false;

function resumeAlert() {
  if (hasDownloadedResume == false) {
    setTimeout(() => {
      alert("Your resume downloaded successfully!");
    }, 2000);
  }
  hasDownloadedResume = true;
}

function showGreeting(name) {
  let todaysDate = new Date();
  let theHour = todaysDate.getHours();
  if (theHour < 12) {
    return "Good morning my name is " + name + " welcome to my portfolio";
  } else if (theHour === 12) {
    return "Good afternoon, my name is " + name + ", welcome to my portfolio.";
  } else if (theHour > 12 && theHour < 18) {
    return "Good afternoon my name is " + name + " welcome to my portfolio";
  } else if (theHour === 18) {
    return "Good evening, my name is " + name + ", welcome to my portfolio.";
  } else if (theHour > 18) {
    return "Good evening my name is " + name + " welcome to my portfolio";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("greetingSec").innerHTML = showGreeting(name);
});

function daysUntilDeadline(projectdate) {
  let projectCast = new Date(projectdate);
  let currentDay = new Date();
  let difference = projectCast - currentDay;
  let numDays = Math.ceil(difference / (1000 * 60 * 60 * 24));

  return "Days until complete: " + numDays;
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("daysTil").innerHTML = daysUntilDeadline("11/1/2024");
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("submitButton")
    .addEventListener("click", function () {
      const enteredSkill = document.getElementById("usrInput").value;

      if (enteredSkill.trim() != "") {
        const li = document.createElement("li");
        li.className = "col-2";
        li.textContent = enteredSkill;

        document.querySelector("#skillsList .row").appendChild(li);

        document.getElementById("usrInput").value = "";
      } else {
        alert("Error enter a skill.");
      }
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const projectTitles = [
    "MIPS Assembly Random Number Generator",
    "DNA project",
    "Placeholder project",
  ];

  const projectDescriptions = [
    "This project introduced me to lower level languages and their application to physical electronics. MIPS uses registers which correlate to memory directly on the chip. I used an algorithm which simulated a random generator.",
    "A full-stack web application built with HTML, CSS, and JavaScript, demonstrating the principles of responsive design.",
    "Analyzed large datasets using Python and Pandas, creating visualizations and reports to summarize findings.",
  ];

  const projectDeadlines = [
    "2024-07-23", 
    "2024-10-31", 
    "2024-11-30", 
  ];

  const projectImages = [
    "reportCover.png",
    "DNAproject1.png",
    "stockprojectimg.jpg",
  ];

  const projectsContainer = document.getElementById("projectsDynam");

  for (let i = 0; i < projectTitles.length; i++) {
    const projectCard = document.createElement("div");
    projectCard.className = "col-lg mb-4";
    projectCard.innerHTML = `
      <div class="card cardOne">
        <img class="card-img-top" src= ${projectImages[i]} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">${projectTitles[i]}</h5>
          <p class="card-text">${projectDescriptions[i]}</p>
          <div class="list-group-item deadlineProj">Deadline: ${projectDeadlines[i]}</div> 
          <div class="list-group-item statusProj">Status: <span id="status-${i}"></span></div>
        </div>
      </div>
    `;

    projectsContainer.appendChild(projectCard); 
  }
  function projectStatus() {
    const currentDay = new Date();

    for (let i = 0; i < projectDeadlines.length; i++) {
      const deadlineDate = new Date(projectDeadlines[i]);
      const statusElement = document.getElementById(`status-${i}`);

      if (deadlineDate > currentDay) {
        statusElement.textContent = "Ongoing";
      } else {
        statusElement.textContent = "Completed";
      }
    }
  }
  projectStatus();
});

document.addEventListener("DOMContentLoaded", function () {
  let count = 0;
  document
    .getElementById("downloadResumeBtn")
    .addEventListener("click", function () {
      count++;
      document.getElementById("downloadResumeBtn").innerHTML = `
    <p>How many times you downloaded my resume: ${count}</p>
    `;
    });
});

// Data for Education
const educationData = [
  { title: "NAU", date: "2023-Present", location: "Flagstaff, AZ" },
  {
    title: "Robothon",
    date: "Fall 2023",
    description:
      "Arduino microcontrollers were used to control a robot through an obstacle course.",
  },
  {
    title: "Unreal Engine 5",
    date: "Spring 2023",
    description: "Intro to basic game development.",
  },
];

const experienceData = [
  {
    role: "Lorem ipsum dolor",
    company: "Dolor Sit Amet",
    startDate: "Consectetur 2022",
    endDate: "Adipiscing 2022",
    description:
      "Worked on lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    role: "Tempor Incididunt",
    company: "Labore Et Dolore",
    startDate: "Magna 2021",
    endDate: "Aliqua 2021",
    description:
      "Taught lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function tableCreation(headers, data, experience) {
  const table = document.createElement("table");
  table.classList.add("table", "table-bordered");

  const thead = document.createElement("thead");
  thead.classList.add("thead-dark");

  const headerRows = document.createElement("tr");

  headers.forEach((header) => {
    const thCreation = document.createElement("th");
    thCreation.textContent = header;
    headerRows.appendChild(thCreation);
  });

  thead.appendChild(headerRows);
  table.appendChild(thead);

  const tableBody = document.createElement("tbody");
  data.forEach((row) => {
    const tableRow = document.createElement("tr");
    for (const i in row) {
      const tableD = document.createElement("td");
      tableD.innerHTML = row[i];
      tableRow.appendChild(tableD);
    }
    tableBody.appendChild(tableRow);
  });
  table.appendChild(tableBody);
  return table;
}

function insertTables() {
  const tableContainer = document.getElementById("tables-container");
  const educationTbHeader = ["Title", "Date", "Details"];

  const educationTable = tableCreation(educationTbHeader, educationData, false);
  tableContainer.appendChild(educationTable);

  const experienceHeaders = [
    "Role",
    "Company",
    "Start Date",
    "End Date",
    "Description",
  ];
  const experienceTable = tableCreation(
    experienceHeaders,
    experienceData,
    true
  );
  tableContainer.appendChild(experienceTable);
}

window.onload = insertTables;
