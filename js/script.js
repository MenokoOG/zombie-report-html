// Get elements
const form = document.getElementById("zombieForm");
const reportsList = document.getElementById("reportsList");
const downloadBtn = document.getElementById("downloadJson");
let editIndex = null; // To track the report being edited

// Retrieve saved reports from localStorage on page load
document.addEventListener("DOMContentLoaded", loadReports);

// Submit form handler
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const location = document.getElementById("location").value;
  const description = document.getElementById("description").value;

  const report = {
    location: location,
    description: description,
    timestamp: new Date().toLocaleString(),
  };

  if (editIndex !== null) {
    // Edit existing report
    updateReport(report, editIndex);
  } else {
    // Add new report
    saveReport(report);
  }

  loadReports(); // Reload the reports to reflect the new or edited one
  form.reset();
  editIndex = null; // Reset edit index after saving
});

// Save report to localStorage
function saveReport(report) {
  let reports = JSON.parse(localStorage.getItem("zombieReports")) || [];
  reports.push(report);
  localStorage.setItem("zombieReports", JSON.stringify(reports));
}

// Update report in localStorage
function updateReport(report, index) {
  let reports = JSON.parse(localStorage.getItem("zombieReports")) || [];
  reports[index] = report; // Replace report at the specified index
  localStorage.setItem("zombieReports", JSON.stringify(reports));
  loadReports(); // Reload reports to reflect changes
}

// Add report to the list
function addReportToList(report, index) {
  const li = document.createElement("li");
  li.innerHTML = `
      <strong>${report.location}</strong> (${report.timestamp})<br>${report.description}
      <br><button class="edit-btn" data-index="${index}">Edit</button>
      <button class="delete-btn" data-index="${index}">Delete</button>
  `;
  reportsList.appendChild(li);
}

// Load reports from localStorage
function loadReports() {
  reportsList.innerHTML = ""; // Clear list before loading
  let reports = JSON.parse(localStorage.getItem("zombieReports")) || [];
  reports.forEach((report, index) => {
    addReportToList(report, index);
  });

  // Attach event listeners after rendering
  document.querySelectorAll(".edit-btn").forEach((button) => {
    button.addEventListener("click", function () {
      editReport(this.dataset.index);
    });
  });

  document.querySelectorAll(".delete-btn").forEach((button) => {
    button.addEventListener("click", function () {
      deleteReport(this.dataset.index);
    });
  });
}

// Edit report
function editReport(index) {
  let reports = JSON.parse(localStorage.getItem("zombieReports")) || [];
  const report = reports[index]; // Access report by index

  if (report) {
    document.getElementById("location").value = report.location;
    document.getElementById("description").value = report.description;
    editIndex = index; // Set the index for editing
  } else {
    console.error("Report not found");
  }
}

// Delete report
function deleteReport(index) {
  let reports = JSON.parse(localStorage.getItem("zombieReports")) || [];
  reports.splice(index, 1); // Remove the report at the given index
  localStorage.setItem("zombieReports", JSON.stringify(reports));
  loadReports(); // Reload reports after deletion
}

// Download reports as a Text file
downloadBtn.addEventListener("click", function () {
  let reports = JSON.parse(localStorage.getItem("zombieReports")) || [];

  if (reports.length > 0) {
    // Prepare the content for the text file
    let textContent = "Zombie Reports\n\n";
    reports.forEach((report, index) => {
      textContent += `Report #${index + 1}\n`;
      textContent += `Location: ${report.location}\n`;
      textContent += `Description: ${report.description}\n`;
      textContent += `Reported on: ${report.timestamp}\n\n`;
    });

    // Create a blob with the text content
    const blob = new Blob([textContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "zombie-reports.txt";
    link.click();
  } else {
    alert("No reports available for download!");
  }
});
