document.addEventListener('DOMContentLoaded', () => {
    // تهيئة مكتبة الرسوم المتحركة
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // شريط التقدم
    const progressBar = document.querySelector('.progress-bar');
    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    });

    // الوضع الليلي/النهاري
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.setAttribute('data-theme', 
            document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
        );
        themeToggle.innerHTML = document.body.getAttribute('data-theme') === 'light' 
            ? '<i class="fas fa-moon"></i>' 
            : '<i class="fas fa-sun"></i>';
    });

    // القائمة الجانبية للجوال
    const menuBtn = document.getElementById('menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    menuBtn.addEventListener('click', () => {
        mobileNav.style.right = mobileNav.style.right === '0px' ? '-250px' : '0px';
    });

    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('#mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.style.right = '-250px';
        });
    });

    // عداد التنزيلات الوهمي
    const downloadCount = document.getElementById('download-count');
    let count = 2;
    
    // تحديث العداد كل ثانية
    setInterval(() => {
        count += Math.floor(Math.random() * 1) + 1; // زيادة عشوائية بين 1-3
        downloadCount.textContent = count.toLocaleString();
    }, 4000);

    // زر التنزيل الرئيسي
    const downloadBtn = document.getElementById('download-btn');
    downloadBtn.addEventListener('click', () => {
        // إنشاء عنصر <a> خفي للتنزيل
        const link = document.createElement('a');
        link.href = 'PrivacyApp.zip'; // اسم ملف البرنامج
        link.download = 'PrivacyApp.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // زيادة العداد عند التنزيل
        count += 1;
        downloadCount.textContent = count.toLocaleString();
        
        // رسالة تأكيد
        alert('جاري تحميل البرنامج... شكراً لاستخدامك PrivacyApp!');
    });

    // أزرار أنظمة التشغيل
    document.querySelectorAll('.os-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const os = btn.getAttribute('data-os');
            
            // إنشاء عنصر <a> خفي للتنزيل حسب النظام
            const link = document.createElement('a');
            link.href = `PrivacyApp_${os}.zip`;
            link.download = `PrivacyApp_${os}.zip`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // زيادة العداد عند التنزيل
            count += 1;
            downloadCount.textContent = count.toLocaleString();
            
            // رسالة تأكيد
            alert(`جاري تحميل الإصدار الخاص بـ ${os}... شكراً لاستخدامك PrivacyApp!`);
        });
    });
});