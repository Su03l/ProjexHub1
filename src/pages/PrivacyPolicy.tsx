import React from "react";
import { Card } from "../components/ui/card";
import { Shield, Eye, Lock, Database, Users, Settings } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gradient mb-4">
            سياسة الخصوصية
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            كيف نحمي خصوصيتك ونتعامل مع بياناتك على منصة ProjexHub
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            آخر تحديث: يناير 2025
          </p>
        </div>

        {/* Introduction */}
        <Card className="gradient-card p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center ml-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              التزامنا بخصوصيتك
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            نحن في منصة ProjexHub نتفهم أهمية خصوصيتك وحماية بياناتك الشخصية.
            هذه السياسة توضح كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك عند
            استخدام منصتنا لتبادل مشاريع التخرج الجامعية.
          </p>
        </Card>

        {/* Privacy Sections */}
        <div className="space-y-6">
          {/* Section 1 */}
          <Card className="gradient-card p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Database className="w-5 h-5 text-blue-500 ml-2" />
              1. البيانات التي نجمعها
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  معلومات الحساب:
                </h4>
                <p>• الاسم الأول والأخير</p>
                <p>• البريد الإلكتروني</p>
                <p>• الجامعة والتخصص</p>
                <p>• المستوى التعليمي وحالة الدراسة</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  معلومات المشاريع:
                </h4>
                <p>• عناوين ووصف المشاريع</p>
                <p>• الملفات المرفوعة</p>
                <p>• التعليقات والتقييمات</p>
                <p>• روابط المشاريع الخارجية</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  معلومات الاستخدام:
                </h4>
                <p>• عدد مرات زيارة المنصة</p>
                <p>• الصفحات التي تزورها</p>
                <p>• وقت التصفح</p>
                <p>• نوع المتصفح والجهاز</p>
              </div>
            </div>
          </Card>

          {/* Section 2 */}
          <Card className="gradient-card p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 text-green-500 ml-2" />
              2. كيف نستخدم بياناتك
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>
                • <strong>تقديم الخدمة:</strong> إنشاء وإدارة حسابك ومشاريعك
              </p>
              <p>
                • <strong>التخصيص:</strong> عرض مشاريع مناسبة لتخصصك وجامعتك
              </p>
              <p>
                • <strong>التواصل:</strong> إرسال إشعارات وتحديثات مهمة
              </p>
              <p>
                • <strong>الأمان:</strong> حماية المنصة من سوء الاستخدام
              </p>
              <p>
                • <strong>التطوير:</strong> تحسين المنصة وإضافة ميزات جديدة
              </p>
              <p>
                • <strong>الإحصائيات:</strong> فهم كيفية استخدام المنصة (بيانات
                مجهولة)
              </p>
            </div>
          </Card>

          {/* Section 3 */}
          <Card className="gradient-card p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-purple-500 ml-2" />
              3. مشاركة البيانات
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  المعلومات العامة:
                </h4>
                <p>• اسمك وجامعتك وتخصصك (مرئية للمستخدمين الآخرين)</p>
                <p>• مشاريعك المنشورة وتفاصيلها</p>
                <p>• تعليقاتك وتقييماتك العامة</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  المعلومات الخاصة:
                </h4>
                <p>• بريدك الإلكتروني (غير مرئي للمستخدمين)</p>
                <p>• رسائلك الخاصة</p>
                <p>• إعدادات حسابك الشخصية</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  عدم المشاركة مع الغير:
                </h4>
                <p>
                  نحن لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة
                  للأغراض التجارية
                </p>
              </div>
            </div>
          </Card>

          {/* Section 4 */}
          <Card className="gradient-card p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Lock className="w-5 h-5 text-red-500 ml-2" />
              4. حماية البيانات
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>
                • <strong>التشفير:</strong> جميع البيانات محمية بتشفير SSL
              </p>
              <p>
                • <strong>كلمات المرور:</strong> محفوظة بتقنيات التشفير المتقدمة
              </p>
              <p>
                • <strong>الخوادم الآمنة:</strong> بياناتك محفوظة في خوادم محمية
              </p>
              <p>
                • <strong>المراقبة:</strong> مراقبة مستمرة للحماية من التهديدات
              </p>
              <p>
                • <strong>النسخ الاحتياطية:</strong> نسخ احتياطية منتظمة لحماية
                بياناتك
              </p>
              <p>
                • <strong>فريق الأمان:</strong> فريق متخصص لضمان أمان المنصة
              </p>
            </div>
          </Card>

          {/* Section 5 */}
          <Card className="gradient-card p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-orange-500 ml-2" />
              5. حقوقك في البيانات
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>
                • <strong>الوصول:</strong> طلب نسخة من جميع بياناتك المحفوظة
              </p>
              <p>
                • <strong>التصحيح:</strong> تحديث أو تصحيح معلوماتك الشخصية
              </p>
              <p>
                • <strong>الحذف:</strong> طلب حذف حسابك وبياناتك نهائياً
              </p>
              <p>
                • <strong>التحكم:</strong> إدارة إعدادات الخصوصية في حسابك
              </p>
              <p>
                • <strong>الانسحاب:</strong> إلغاء الموافقة على استخدام بياناتك
              </p>
              <p>
                • <strong>النقل:</strong> تصدير بياناتك بتنسيق قابل للقراءة
              </p>
            </div>
          </Card>

          {/* Section 6 */}
          <Card className="gradient-card p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              6. ملفات تعريف الارتباط (Cookies)
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>
                • <strong>ملفات ضرورية:</strong> لضمان عمل المنصة بشكل صحيح
              </p>
              <p>
                • <strong>ملفات الأداء:</strong> لفهم كيفية تفاعلك مع المنصة
              </p>
              <p>
                • <strong>ملفات التخصيص:</strong> لحفظ تفضيلاتك وإعداداتك
              </p>
              <p>
                • <strong>التحكم:</strong> يمكنك إدارة هذه الملفات من إعدادات
                متصفحك
              </p>
              <p>
                • <strong>بدون ملفات شخصية:</strong> لا نستخدم ملفات تتبع لأغراض
                إعلانية
              </p>
            </div>
          </Card>

          {/* Section 7 */}
          <Card className="gradient-card p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              7. الأطفال والقُصَّر
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>• المنصة مخصصة للطلاب الجامعيين (18 سنة فأكثر)</p>
              <p>• لا نجمع بيانات من الأطفال دون 18 سنة عمداً</p>
              <p>• إذا اكتشفنا حساب لقاصر، سنحذفه فوراً</p>
              <p>• نطلب من المستخدمين تأكيد عمرهم عند التسجيل</p>
            </div>
          </Card>

          {/* Section 8 */}
          <Card className="gradient-card p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              8. الخدمات الخارجية
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>
                • <strong>روابط خارجية:</strong> لسنا مسؤولين عن سياسات خصوصية
                المواقع المرتبطة
              </p>
              <p>
                • <strong>ملفات المشاريع:</strong> قد تُحفظ في خدمات تخزين
                سحابية آمنة
              </p>
              <p>
                • <strong>أدوات التحليل:</strong> قد نستخدم أدوات لفهم استخدام
                المنصة (بيانات مجهولة)
              </p>
              <p>
                • <strong>النسخ الاحتياطية:</strong> محفوظة في خوادم آمنة داخل
                المملكة
              </p>
            </div>
          </Card>

          {/* Section 9 */}
          <Card className="gradient-card p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              9. حفظ البيانات
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>• نحتفظ ببياناتك طالما حسابك نشط</p>
              <p>• بعد حذف الحساب، نحذف معظم البيانات خلال 30 يوماً</p>
              <p>• قد نحتفظ ببعض البيانات لأغراض قانونية أو أمنية</p>
              <p>• المشاريع المنشورة قد تبقى لفائدة المجتمع الأكاديمي</p>
              <p>• يمكنك طلب حذف مشاريعك في أي وقت</p>
            </div>
          </Card>

          {/* Section 10 */}
          <Card className="gradient-card p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              10. تحديث السياسة
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>• قد نحدث هذه السياسة من وقت لآخر</p>
              <p>• سنشعرك بأي تغييرات مهمة عبر البريد الإلكتروني أو المنصة</p>
              <p>• تاريخ آخر تحديث مذكور في أعلى الصفحة</p>
              <p>• استمرار استخدامك للمنصة يعني موافقتك على التحديثات</p>
            </div>
          </Card>

          {/* Contact Section */}
          <Card className="gradient-card p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              التواصل حول الخصوصية
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-2">
              <p>
                إذا كان لديك أي استفسار حول سياسة الخصوصية أو كيفية التعامل مع
                بياناتك:
              </p>
              <p>
                • تواصل معنا عبر صفحة{" "}
                <a href="/contact" className="text-primary-600 hover:underline">
                  تواصل معنا
                </a>
              </p>
              <p>• أرسل لنا رسالة عبر الواتساب</p>
              <p>• نحن ملتزمون بالرد على استفساراتك خلال 48 ساعة</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
