let statusChangeBtn = document.querySelector(".status-change-btn");
let statusRn = document.querySelector("#status-rn");
let statusChangeBtnStatus = document.querySelector("#status-change-btn-status");

statusChangeBtn.addEventListener("click", () => {
  if (statusRn.textContent == "Read") {
    statusChangeBtnStatus.textContent = "Read";
    statusRn.textContent = "Unread";
  } else {
    statusChangeBtnStatus.textContent = "Unread";
    statusRn.textContent = "Read";
  }
}); // DOESNT WORK ON MULTIPLE CARDS
