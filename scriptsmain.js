// كود جافاسكريبت أساسي للتفاعلية
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const feature = this.closest('.feature-card');
        if (feature) {
            alert(`ستتم إضافة الوظيفة الكاملة لـ "${feature.querySelector('h3').textContent}" في النسخة القادمة!`);
        } else {
            alert('الوظيفة قيد التطوير، شكرًا لتفهمك!');
        }
    });
});

// رسالة ترحيب عند تحميل الصفحة
window.onload = function() {
    console.log('مرحبًا! منصة تادريم جاهزة للتطوير.');
    
    // تحميل الاختبارات والموارد
    loadAssessments();
    loadResources();
};