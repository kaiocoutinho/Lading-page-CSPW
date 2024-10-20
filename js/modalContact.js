function showMessage() {
  const message = document.querySelector("#message");
  message.classList.remove("hide");
  setTimeout(() => {
    message.classList.add("hide");
  }, 2000);
}

document.querySelector("#saveBtn").addEventListener("click", (ev) => {
  ev.preventDefault();
  showMessage();
});
