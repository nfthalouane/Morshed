// بيانات الموارد البيداغوجية
const resources = [
    {
        type: 'خطط علاجية',
        items: [
            'خطة علاج صعوبات الرياضيات',
            'استراتيجيات تحسين القراءة',
            'برنامج تعزيز التركيز',
            'دليل التعامل مع صعوبات الكتابة'
        ]
    },
    {
        type: 'أنشطة تفاعلية',
        items: [
            'ألعاب تعليمية للرياضيات',
            'تمارين إدارة القلق',
            'أنشطة بناء الثقة',
            'تمارين التركيز والانتباه'
        ]
    },
    {
        type: 'نماذج التقارير',
        items: [
            'نموذج تقرير التوجيه المدرسي',
            'نموذج تقييم نفسي',
            'نموذج خطة الدعم الفردي',
            'نموذج متابعة الطالب'
        ]
    }
];

// دالة لتحميل وعرض الموارد
function loadResources() {
    const resourcesContainer = document.querySelector('.resources');
    
    if (!resourcesContainer) return;
    
    resourcesContainer.innerHTML = '';
    
    resources.forEach(category => {
        const resourceCard = document.createElement('div');
        resourceCard.className = 'resource-card';
        resourceCard.innerHTML = `
            <div class="resource-header">
                <h3>${category.type}</h3>
            </div>
            <div class="resource-body">
                <ul>
                    ${category.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <button class="btn" style="margin-top: 15px; width: 100%;">عرض الكل</button>
            </div>
        `;
        resourcesContainer.appendChild(resourceCard);
    });
}