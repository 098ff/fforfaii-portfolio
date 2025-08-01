// Script for special hover effect

document.addEventListener("DOMContentLoaded", () => {

    // Aboutme-GithubClick
    const clkEl = document.querySelector(".git-1");
    const doodleEl = document.querySelector(".git-2");
    const giticonEl = document.querySelector(".git-3");

    if (clkEl && doodleEl && giticonEl) {
        clkEl.addEventListener("mouseenter", () => {
            clkEl.style.transform = "rotate(15deg)";
            doodleEl.style.transform = "translate(-5px, 5px) rotate(5deg)";
            giticonEl.style.transform = "scale(1.1)";
        });

        clkEl.addEventListener("mouseleave", () => {
            clkEl.style.transform = "rotate(0deg)";
            doodleEl.style.transform = "translateY(0px) rotate(0deg)";
            giticonEl.style.transform = "scale(1)";
        });

        giticonEl.addEventListener("mouseenter", () => {
            clkEl.style.transform = "rotate(15deg)";
            doodleEl.style.transform = "translate(-5px, 5px) rotate(5deg)";
            giticonEl.style.transform = "scale(1.1)";
        });

        giticonEl.addEventListener("mouseleave", () => {
            clkEl.style.transform = "rotate(0deg)";
            doodleEl.style.transform = "translateY(0px) rotate(0deg)";
            giticonEl.style.transform = "scale(1)";
        });
    }

    // Aboutme-DownloadResume
    const loadEl = document.querySelector(".load");
    const mouse_whEl = document.querySelector(".me-3");
    const abt_starbgEl = document.querySelector(".me-2");

    if (loadEl && mouse_whEl) {
        loadEl.addEventListener("mouseenter", () => {
            loadEl.style.transform = "translateX(10px)";
            mouse_whEl.style.transform = "translate(-10px, 10px)";
            abt_starbgEl.style.transform = "rotate(45deg)";
        });

        loadEl.addEventListener("mouseleave", () => {
            loadEl.style.transform = "translateX(0px)";
            mouse_whEl.style.transform = "translate(0, 0)";
            abt_starbgEl.style.transform = "rotate(0deg)";
        });
    }

    // Aboutme-CPStudent
    const cpstdEl = document.querySelector(".who-3");
    const abt_starsmEl = document.querySelector(".who-1");
    const mouse_grEl = document.querySelector(".who-2");
    if (cpstdEl && mouse_grEl && abt_starsmEl) {
        cpstdEl.addEventListener("mouseenter", () => {
            cpstdEl.style.transform = "translateX(-10px)";
            mouse_grEl.style.transform = "translate(5px, 10px)";
            abt_starsmEl.style.transform = "translate(5px, 5px) rotate(-45deg)";
        });

        cpstdEl.addEventListener("mouseleave", () => {
            cpstdEl.style.transform = "translateX(0px)";
            mouse_grEl.style.transform = "translate(0, 0)";
            abt_starsmEl.style.transform = "translate(0, 0) rotate(0deg)";
        });
    }

});
