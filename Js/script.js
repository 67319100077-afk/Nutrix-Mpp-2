// ---------- Alert ----------
function showAlert(message) {
    alert(message);
}

// ---------- Smooth Scroll ----------
const learnBtn = document.getElementById("learnBtn");
const aboutSection = document.getElementById("about");

learnBtn.addEventListener("click", () => {
    aboutSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ---------- Scroll to top on refresh ----------
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// ---------- Fade-in About Images ----------
const fadeItems = document.querySelectorAll('.fade-item');

function handleFade() {
    const triggerBottom = window.innerHeight * 0.85;
    fadeItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if(itemTop < triggerBottom) {
            item.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleFade);
window.addEventListener('load', handleFade);

// ---------- Fade-in About Images ----------
const aboutItems = document.querySelectorAll('.about-item');

function fadeInAbout() {
    const triggerBottom = window.innerHeight - 100;

    aboutItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if(itemTop < triggerBottom) {
            item.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', fadeInAbout);
window.addEventListener('load', fadeInAbout); // แสดงทันทีถ้าอยู่ใน viewport
// Auto scroll after 10 seconds
setTimeout(() => {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"  // เลื่อนลงแบบนุ่มๆ
    });
}, 5000); // 5000 = 5 วิ
// เปิดโมดูล
function openModal(id) {
    document.getElementById(id).style.display = "block";
    document.body.style.overflow = "hidden"; // ห้ามเลื่อนข้างหลัง
}

// ปิดโมดูล
function closeModal(id) {
    document.getElementById(id).style.display = "none";
    document.body.style.overflow = "auto";
}

// ปิดเมื่อคลิกนอกกล่อง
window.onclick = function(event) {
    const modals = document.querySelectorAll('.news-modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
}
