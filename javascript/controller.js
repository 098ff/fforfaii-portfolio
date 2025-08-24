async function loadNavbar() {
  try {
    const res = await fetch("../html/navbar.html");
    const html = await res.text();
    document.getElementById("nav-bar").innerHTML = html;
  } catch (err) {
    console.error("Failed to load navbar:", err);
  }
}

loadNavbar();