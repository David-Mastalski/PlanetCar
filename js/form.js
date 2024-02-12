const rodoCheckBox = document.querySelector("#rodo");
const submitBtn = document.querySelector(".submitBtn");

rodoCheckBox.addEventListener("change", (e) => {
  submitBtn.disabled = !e.target.checked;
});
