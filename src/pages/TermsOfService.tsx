import React from "react";
import { Card } from "../components/ui/card";
import { CheckCircle, Shield, Users, FileText } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gradient mb-4">
            شروط الاستخدام
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            الشروط والأحكام الخاصة باستخدام منصة ProjexHub
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            آخر تحديث: يناير 2025
          </p>
        </div>

        {/* Introduction */}
        <Card className="gradient-card p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center ml-4">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              مقدمة
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            مرحباً بك في منصة ProjexHub، المنصة الرائدة لتبادل مشاريع التخرج
            الجامعية في المملكة العربية السعودية. باستخدامك لهذه المنصة، فإنك
            توافق على الالتزام بالشروط والأحكام التالية. يرجى قراءة هذه الشروط
            بعناية قبل استخدام منصتنا.
          </p>
        </Card>

        {/* Terms Sections */}
        <div className="space-y-6">
          {/* Section 1 */}
          <Card className="gradient-card p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
              1. قبول الشروط
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>
                • بإنشاء حساب أو استخدام منصة ProjexHub، فإنك تؤكد موافقتك على
                هذه الشروط
              </p>
              <p>
                • إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام المنصة
              </p>
              <p>• نحتفظ بالحق في تعديل هذه الشروط في أي وقت مع إشعارك بذلك</p>
            </div>
          </Card>

          {/* Section 2 */}
          <Card className="gradient-card p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-blue-500 ml-2" />
              2. استخدام المنصة
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>• المنصة مخصصة للطلاب الجامعيين في المملكة العربية السعودية</p>
              <p>
                • يجب أن تكون المشاريع المرفوعة أعمال أصلية أو بإذن من أصحابها
              </p>
              <p>• يُمنع رفع محتوى مخالف للنظام العام أو الآداب العامة</p>
              <p>• يُمنع استخدام المنصة لأغراض تجارية دون إذن مسبق</p>
              <p>• احترام حقوق الملكية الفكرية للمشاريع المنشورة</p>
            </div>
          </Card>

          {/* Section 3 */}
          <Card className="gradient-card p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-purple-500 ml-2" />
              3. المحتوى والمسؤولية
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>• أنت مسؤول عن جميع المحتويات التي ترفعها على المنصة</p>
              <p>• يجب أن تحصل على جميع الأذونات اللازمة قبل نشر أي مشروع</p>
              <p>
                • المنصة غير مسؤولة عن دقة أو صحة المحتوى المنشور من قبل
                المستخدمين
              </p>
              <p>• نحتفظ بالحق في إزالة أي محتوى نراه غير مناسب</p>
              <p>• لا نتحمل مسؤولية أي نزاعات قد تنشأ حول الملكية الفكرية</p>
            </div>
          </Card>

          {/* Section 4 */}
          <Card className="gradient-card p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              4. حقوق المستخدمين
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>• الحق في الوصول إلى المنصة واستخدام ميزاتها</p>
              <p>• الحق في رفع وإدارة مشاريعك الشخصية</p>
              <p>• الحق في التفاعل مع مشاريع المستخدمين الآخرين</p>
              <p>• الحق في حذف حسابك في أي وقت</p>
              <p>• الحق في الحصول على الدعم الفني</p>
            </div>
          </Card>

          {/* Section 5 */}
          <Card className="gradient-card p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              5. القيود والمحظورات
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>• عدم محاولة اختراق أو تعطيل المنصة</p>
              <p>• عدم انتحال شخصية مستخدمين آخرين</p>
              <p>• عدم نشر محتوى مؤذي أو مسيء</p>
              <p>• عدم استخدام برامج آلية لتجميع البيانات</p>
              <p>• عدم بيع أو نقل حسابك لطرف ثالث</p>
            </div>
          </Card>

          {/* Section 6 */}
          <Card className="gradient-card p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              6. الخدمات والتوفر
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>• نسعى لتوفير المنصة على مدار الساعة ولكن لا نضمن ذلك</p>
              <p>• قد نقوم بصيانة دورية تتطلب إيقاف المنصة مؤقتاً</p>
              <p>• لا نضمن خلو المنصة من الأخطاء أو المشاكل التقنية</p>
              <p>• نحتفظ بالحق في تطوير وتحديث المنصة</p>
            </div>
          </Card>

          {/* Section 7 */}
          <Card className="gradient-card p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              7. إنهاء الخدمة
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>• يمكنك إنهاء حسابك في أي وقت من خلال إعدادات الحساب</p>
              <p>• نحتفظ بالحق في إيقاف أو حذف الحسابات المخالفة</p>
              <p>• عند إنهاء الحساب، قد نحتفظ ببعض البيانات لأغراض قانونية</p>
              <p>• المشاريع المنشورة قد تبقى متاحة بعد حذف الحساب</p>
            </div>
          </Card>

          {/* Section 8 */}
          <Card className="gradient-card p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              8. تحديد المسؤولية
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>• المنصة تُقدم "كما هي" دون ضمانات صريحة أو ضمنية</p>
              <p>• لا نتحمل مسؤولية أي أضرار مباشرة أو غير مباشرة</p>
              <p>• مسؤو��يتنا محدودة بقدر ما يسمح به النظام السعودي</p>
              <p>• المستخدم مسؤول عن أمان حسابه وكلمة المرور</p>
            </div>
          </Card>

          {/* Section 9 */}
          <Card className="gradient-card p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              9. القانون المطبق
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-3">
              <p>• تخضع هذه الشروط لأنظمة المملكة العربية السعودية</p>
              <p>• أي نزاع ينشأ يخضع لاختصاص المحاكم السعودية</p>
              <p>• في حالة تعارض أي بند مع النظام السعودي، يُطبق النظام</p>
              <p>• هذه الشروط تشكل الاتفاقية الكاملة بيننا وبينك</p>
            </div>
          </Card>

          {/* Contact Section */}
          <Card className="gradient-card p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              التواصل معنا
            </h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-2">
              <p>
                إذا كان لديك أي استفسار حول شروط الاستخدام، يرجى التواصل معنا:
              </p>
              <p>
                • عبر صفحة{" "}
                <a href="/contact" className="text-primary-600 hover:underline">
                  تواصل معنا
                </a>
              </p>
              <p>• عبر الواتساب للحصول على رد سريع</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
