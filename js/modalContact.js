function showMessage() {
  const message = document.querySelector("#message");
  message.classList.remove("hide");
  setTimeout(() => {
    message.classList.add("hide");
  }, 1500);
}

document.querySelector("#saveBtn").addEventListener("click", () => {
  showMessage();
});
