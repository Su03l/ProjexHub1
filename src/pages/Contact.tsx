import React from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "966531608085"; // رقم الواتساب الرسمي
    const message = "مرح��ا، أريد التواصل معكم حول منصة ProjexHub";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gradient mb-4">تواصل معنا</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            نحن هنا للمساعدة! تواصل معنا عبر الواتساب أو أي من الطرق أدناه
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* WhatsApp Contact */}
          <Card className="gradient-card p-8 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              واتساب
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              تواصل معنا مباشرة عبر الواتساب للحصول على رد سريع
            </p>
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3"
            >
              <MessageCircle className="w-5 h-5 ml-2" />
              فتح الواتساب
            </Button>
          </Card>

          {/* Email Contact */}
          <Card className="gradient-card p-8 text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              البريد الإلكتروني
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              أرسل لنا رسالة مفصلة عبر البريد الإلكتروني
            </p>
            <Button
              onClick={() => window.open("mailto:info@projexhub.com")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3"
            >
              <Mail className="w-5 h-5 ml-2" />
              إرسال بريد إلكتروني
            </Button>
          </Card>
        </div>

        {/* Additional Contact Info */}
        <Card className="gradient-card p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            معلومات إضافية
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Phone className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                الهاتف
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                +966 50 123 4567
              </p>
            </div>

            <div className="text-center">
              <Mail className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                البريد الإلكتروني
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                info@projexhub.com
              </p>
            </div>

            <div className="text-center">
              <MapPin className="w-8 h-8 text-primary-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                الموقع
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                المملكة العربية السعودية
              </p>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <Card className="gradient-card p-8 mt-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            أسئلة شائعة
          </h3>
          <div className="text-right space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                كيف يمكنني رفع مشروعي؟
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                يمكنك رفع مشروعك من خلال صفحة "رفع مشروع" بعد تسجيل الدخول إلى
                حسابك.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                هل المنصة مجانية؟
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                نعم، المنصة مجانية تماماً لجميع طلاب الجامعات السعودية.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                كيف يمكنني التواصل مع أصحاب المشاريع؟
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                يمكنك التواصل معهم من خلال نظام الرسائل الداخلي في المنصة بعد
                تسجيل الدخول.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
