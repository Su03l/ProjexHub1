import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Github,
  Twitter,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

export function Footer() {
  const handleContactClick = () => {
    // WhatsApp number - replace with actual number
    const phoneNumber = "966501234567"; // Example Saudi number
    const message = "مرحبا، أريد التواصل معكم حول منصة ProjexHub";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="text-xl font-bold text-gradient">ProjexHub</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              منصة تبادل مشاريع التخرج الجامعية - اكتشف، شارك، وتعلم مع مجتمع من
              المبدعين
            </p>
            <div className="flex items-center space-x-4 space-x-reverse">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <button
                onClick={handleContactClick}
                className="text-gray-400 hover:text-primary-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              روابط سريعة
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/explore"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                >
                  تصفح المشاريع
                </Link>
              </li>
              <li>
                <Link
                  to="/upload"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                >
                  رفع مشروع
                </Link>
              </li>
              <li>
                <Link
                  to="/competition"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                >
                  المسابقة
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                >
                  إنشاء حساب
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                >
                  تسجيل الدخول
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              الدعم والتواصل
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                >
                  مركز المساعدة
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                >
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                >
                  تواصل معنا
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@projexhub.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                >
                  البريد الإلكتروني
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                >
                  بلاغ عن مشكلة
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                >
                  شروط الاستخدام
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                >
                  سياسة الخصوصية
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2024 ProjexHub. جميع الحقوق محفوظة.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            منصة سعودية للطلاب الجامعيين
          </p>
        </div>
      </div>
    </footer>
  );
}
