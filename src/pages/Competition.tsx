import React from "react";
import { Card } from "../components/ui/card";
import { Trophy, Calendar, Clock, Gift } from "lucide-react";

export default function Competition() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Coming Soon Section */}
        <Card className="gradient-card p-12">
          <div className="floating-element">
            <Trophy className="w-24 h-24 text-accent-500 mx-auto mb-8 glow-effect" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            قريباً
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            مسابقة ProjexHub الشهرية
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            مسابقة شهرية مثيرة لأفضل مشاريع التخرج من طلاب الجامعات السعودية مع
            جوائز قيمة وفرص للتطوير المهني
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <Gift className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                جوائز قيمة
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                جوائز نقدية تصل إلى 10,000 ريال للفائزين
              </p>
            </div>

            <div className="text-center">
              <Trophy className="w-12 h-12 text-secondary-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                شهادات تقدير
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                شهادات معتمدة من أكاديميين متخصصين
              </p>
            </div>

            <div className="text-center">
              <Calendar className="w-12 h-12 text-accent-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                فرص وظيفية
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                فرص للتوظيف والتدريب في شركات تقنية رائدة
              </p>
            </div>
          </div>

          {/* Launch Timeline */}
          <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-8 mb-8">
            <div className="flex items-center justify-center space-x-4 space-x-reverse">
              <Clock className="w-6 h-6 text-primary-500" />
              <span className="text-lg font-medium text-gray-900 dark:text-white">
                سيتم تحديد الوقت والتاريخ لاحقاً....
              </span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              كن من أول المشاركين! ابدأ في تحضير مشروعك الآن
            </p>
            <p className="text-sm text-gray-500">
              ستتلقى إشعاراً فور إطلاق المسابقة
            </p>
          </div>
        </Card>

        {/* Future Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="gradient-card p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              التقييم العادل
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              لجنة تحكيم من أكاديميين وخبراء في التقنية لضمان العدالة والشفافية
            </p>
          </Card>

          <Card className="gradient-card p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              فئات متنوعة
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              مسابقات في فئات مختلفة: الذكاء الاصطناعي، تطوير الويب، التطبيقات،
              وأكثر
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
