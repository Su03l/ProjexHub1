import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  User,
  GraduationCap,
  MapPin,
  Calendar,
  Settings,
  Upload,
  BookOpen,
  Users,
  Plus,
} from "lucide-react";

export default function Profile() {
  const [isOwnProfile, setIsOwnProfile] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 w-full">
      <div className="w-full px-4">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <Card className="gradient-card p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
              </div>

              {/* User Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      الملف الشخصي
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <GraduationCap className="w-4 h-4" />
                        <span>سيتم تحديث البيانات لاحقاً</span>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <MapPin className="w-4 h-4" />
                        <span>المملكة العربية السعودية</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-4 md:mt-0">
                    <Button variant="outline">
                      <Settings className="w-4 h-4 ml-2" />
                      تعديل الملف الشخصي
                    </Button>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-2xl">
                  مرحباً بك في ملفك الشخصي. ستظهر معلوماتك ومشاريعك هنا بعد
                  إضافة البيانات من خلال النظام الخلفي.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      0
                    </div>
                    <div className="text-xs text-gray-500">مشروع</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      0
                    </div>
                    <div className="text-xs text-gray-500">مشاهدة</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      0
                    </div>
                    <div className="text-xs text-gray-500">تقييم</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      0
                    </div>
                    <div className="text-xs text-gray-500">تعليق</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      0
                    </div>
                    <div className="text-xs text-gray-500">متابع</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      0
                    </div>
                    <div className="text-xs text-gray-500">يتابع</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Empty State */}
          <Card className="gradient-card p-12 text-center">
            <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              لم تقم برفع أي مشاريع بعد
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              ابدأ في مشاركة مشاريعك مع المجتمع الأكاديمي واحصل على تقييمات
              مفيدة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-gradient text-white px-8 py-3">
                <Plus className="w-5 h-5 ml-2" />
                رفع مشروع جديد
              </Button>
              <Button variant="outline" className="px-8 py-3">
                <Users className="w-5 h-5 ml-2" />
                تصفح المشاريع
              </Button>
            </div>
          </Card>

          {/* Coming Soon Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="gradient-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                مشاريعي
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                ستظهر جميع مشاريعك المرفوعة هنا
              </p>
            </Card>

            <Card className="gradient-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                النشاط
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                سجل نشاطاتك وتفاعلاتك مع المجتمع
              </p>
            </Card>

            <Card className="gradient-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                الإنجازات
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                شاراتك وإنجازاتك في المنصة
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
