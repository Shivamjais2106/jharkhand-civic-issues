function showTab(tabId) {
  document.querySelectorAll("main > div").forEach(div => div.style.display = "none");
  document.getElementById("tab-" + tabId).style.display = "block";
}

function clearFilters() {
  document.getElementById("search").value = "";
  document.getElementById("statusFilter").value = "all";
  document.getElementById("categoryFilter").value = "all";
}

function exportCSV() {
  alert("Export to CSV triggered!");
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}