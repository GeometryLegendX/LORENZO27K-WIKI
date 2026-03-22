// version.js
const VERSION = "2.41";

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById("version");
  if (el) el.textContent = VERSION;
});
