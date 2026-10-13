/* =========================================================
   إعدادات الإرسال إلى المعلمة — عدّليها مرة واحدة فقط
   مفتاح anon مخصّص للاستخدام العلني في الصفحات وليس سرًّا.
   لا تضعي هنا مفتاح service_role أبدًا.
   ========================================================= */
window.READING_CONFIG = {
  // رابط المشروع، مثال: 'https://abcdxyz.supabase.co'
  SUPABASE_URL: 'https://cwxktjffhwieochbabch.supabase.co',
  // المفتاح العام (anon public)
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3eGt0amZmaHdpZW9jaGJhYmNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE5MTY3NDYsImV4cCI6MjEwNzQ5Mjc0Nn0.pUoERpeqtgO17yYqwZrpEV6hayaYCiuKUPk_HPZhNvo',
  // بريد حساب المعلمة الثابت (لا تغيّريه إلا إذا غيّرتِه في سوبابيس وفي ملف SQL). الدخول يتم بكلمة المرور فقط
  TEACHER_EMAIL: 'teacher@example.com',
  // اقتراحات للشعب تظهر للطالبات (اختياري)
  CLASSES: ['أول متوسط / 1', 'أول متوسط / 2', 'ثاني متوسط / 1', 'ثاني متوسط / 2']
};
