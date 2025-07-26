// بيانات الاختبارات النفسية
const assessments = [
    {
        id: 'iq-test',
        title: 'اختبار الذكاء (IQ)',
        description: 'قياس القدرات العقلية والمنطقية',
        questions: 30,
        duration: '30 دقيقة'
    },
    {
        id: 'career-test',
        title: 'اختبار الميول المهنية',
        description: 'تحديد المجالات المناسبة للتلميذ',
        questions: 20,
        duration: '20 دقيقة'
    },
    {
        id: 'anxiety-test',
        title: 'مقياس القلق',
        description: 'تقييم مستويات القلق والتوتر',
        questions: 15,
        duration: '15 دقيقة'
    },
    {
        id: 'confidence-test',
        title: 'مقياس الثقة بالنفس',
        description: 'تقييم مستوى تقدير الذات',
        questions: 12,
        duration: '10 دقيقة'
    }
];

// دالة لتحميل وعرض الاختبارات
function loadAssessments() {
    const testsContainer = document.querySelector('.tests-grid');
    
    if (!testsContainer) return;
    
    testsContainer.innerHTML = '';
    
    assessments.forEach(test => {
        const testCard = document.createElement('div');
        testCard.className = 'test-card';
        testCard.innerHTML = `
            <h4>${test.title}</h4>
            <p>${test.description}</p>
            <p>عدد الأسئلة: ${test.questions}</p>
            <p>المدة: ${test.duration}</p>
            <button class="btn" data-test="${test.id}">بدء الاختبار</button>
        `;
        testsContainer.appendChild(testCard);
    });
    
    // إضافة مستمعين للأحداث للأزرار
    document.querySelectorAll('.tests-grid .btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const testId = this.getAttribute('data-test');
            startAssessment(testId);
        });
    });
}

// دالة لبدء الاختبار
function startAssessment(testId) {
    alert(`سيتم بدء اختبار: ${testId}\nهذه الميزة قيد التطوير حالياً.`);
}