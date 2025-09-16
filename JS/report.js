// ✅ CATEGORY SELECTION
const categoryCards = document.querySelectorAll(".category-card");
const issueCategoryInput = document.getElementById("issueCategory");
const otherIssueBox = document.getElementById("otherIssueBox");
const otherIssueText = document.getElementById("otherIssueText");

categoryCards.forEach(card => {
  card.addEventListener("click", () => {
    // Deselect all
    categoryCards.forEach(c => c.classList.remove("selected"));

    // Select clicked
    card.classList.add("selected");
    const value = card.dataset.value;

    if (value === "Others") {
      otherIssueBox.style.display = "block";
      issueCategoryInput.value = otherIssueText.value; // update dynamically
    } else {
      otherIssueBox.style.display = "none";
      issueCategoryInput.value = value;
    }
  });
});

// Update hidden input when typing in "Others"
if (otherIssueText) {
  otherIssueText.addEventListener("input", () => {
    issueCategoryInput.value = otherIssueText.value;
  });
}

// ✅ FILE PREVIEW (Image / Video)
const fileInput = document.getElementById("issueFile");
const previewImg = document.getElementById("previewImg");
const previewVideo = document.getElementById("previewVideo");

fileInput.addEventListener("change", function () {
  const file = this.files[0];
  if (!file) return;

  const fileURL = URL.createObjectURL(file);

  if (file.type.startsWith("image/")) {
    previewImg.src = fileURL;
    previewImg.style.display = "block";
    previewVideo.style.display = "none";
  } else if (file.type.startsWith("video/")) {
    previewVideo.src = fileURL;
    previewVideo.style.display = "block";
    previewImg.style.display = "none";
  }
});

// ✅ FORM SUBMISSION
const reportForm = document.getElementById("reportForm");
const successMsg = document.getElementById("successMsg");

reportForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Simple validation
  if (!issueCategoryInput.value) {
    alert("⚠️ Please select a category before submitting!");
    return;
  }

  // Show success message
  successMsg.classList.add("show");

  // Reset form after 2 sec
  setTimeout(() => {
    successMsg.classList.remove("show");
    reportForm.reset();
    previewImg.style.display = "none";
    previewVideo.style.display = "none";
    issueCategoryInput.value = "";
    otherIssueBox.style.display = "none";
    categoryCards.forEach(c => c.classList.remove("selected"));
  }, 2000);
});

// ✅ VOTING SYSTEM
function vote(btn, type) {
  const card = btn.closest(".issue-card");
  const countEl = card.querySelector(".vote-count");
  let count = parseInt(countEl.textContent);

  if (type === "up") count++;
  else if (type === "down") count--;

  countEl.textContent = count;
}

// ✅ ADD COMMENT
function addComment(btn) {
  const card = btn.closest(".issue-card");
  const input = card.querySelector(".comment-input");
  const list = card.querySelector(".comment-list");

  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
  }
}
