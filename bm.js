document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.circle-nav li a');

    // Add hover effect for scaling and rotating
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.2) rotate(10deg)';
            link.style.transition = 'transform 0.5s ease';
        });

        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Scroll with bounce animation when clicking links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
            document.addEventListener("DOMContentLoaded", function() {
    const smoothLinks = document.querySelectorAll(".smooth-scroll");

    smoothLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // إيقاف الانتقال الفوري
            const targetId = this.getAttribute("href"); // الحصول على الـ ID
            const targetElement = document.querySelector(targetId);

            // تأخير الانتقال (مثلاً 500 ملي ثانية)
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: "smooth", // للتمرير السلس
                    block: "start"      // الانتقال لأعلى المحتوى
                });
            }, 1000); // زمن التأخير بالمللي ثانية
        });
   });
   });
   });
   });
});
