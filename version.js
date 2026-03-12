// version.js
const VERSION = "1.6";

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById("version");
  if (el) el.textContent = VERSION;
});