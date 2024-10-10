// عناصر التحكم
const subscriptionBtn = document.getElementById('subscription-btn');
const freeAccessBtn = document.getElementById('free-access-btn');
const loginForm = document.getElementById('login-form');
const initialButtons = document.getElementById('initial-buttons');
const backBtn = document.getElementById('back-btn');

// عند النقر على زر "استخدام اشتراك"
subscriptionBtn.addEventListener('click', () => {
    initialButtons.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// عند النقر على زر "عودة"
backBtn.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    initialButtons.classList.remove('hidden');
});

// عند النقر على زر "نصف ساعة مجانا" (يمكن إضافة عمليات أخرى هنا لاحقاً)
freeAccessBtn.addEventListener('click', () => {
    alert('تم تفعيل نصف ساعة مجاناً');
});
