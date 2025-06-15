import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Search, BookOpen, Users, Trophy, Sparkles, Clock } from "lucide-react";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time with English numbers
  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Riyadh",
    };
    return date.toLocaleTimeString("en-US", options);
  };

  // Format date with English numbers but Arabic text
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Riyadh",
    };
    // Get Arabic text but with English numbers
    return date.toLocaleDateString("ar-SA-u-nu-latn", options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 w-full">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="relative w-full text-center px-4">
          <div className="floating-element">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">ProjexHub</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
              منصة تبادل مشاريع التخرج الجامعية - اكتشف، شارك، وتعلم مع مجتمع من
              المبدعين
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative gradient-card p-1">
              <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-4">
                <Search className="w-6 h-6 text-gray-400 ml-3" />
                <input
                  type="text"
                  placeholder="ابحث عن مشروع، تخصص، أو جامعة..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-right"
                />
                <Link to="/explore">
                  <Button className="btn-gradient text-white mr-2">بحث</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Real-time Clock */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="gradient-card p-6 text-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-primary-500 ml-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  التوقيت الحالي - الرياض
                </h3>
              </div>

              {/* Date Display */}
              <div className="mb-4">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {formatDate(currentTime)}
                </div>
              </div>

              {/* Time Components */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {currentTime.getHours().toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-primary-600/70 dark:text-primary-400/70 font-medium">
                    ساعة
                  </div>
                </div>

                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">
                    {currentTime.getMinutes().toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-secondary-600/70 dark:text-secondary-400/70 font-medium">
                    دقيقة
                  </div>
                </div>

                <div className="bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 rounded-lg p-3">
                  <div className="text-2xl font-bold text-accent-600 dark:text-accent-400">
                    {currentTime.getSeconds().toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs text-accent-600/70 dark:text-accent-400/70 font-medium">
                    ثانية
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {[
              { icon: BookOpen, label: "مشروع", count: "0" },
              { icon: Users, label: "طالب", count: "0" },
              { icon: Trophy, label: "مسابقة", count: "0" },
              { icon: Sparkles, label: "جامعة", count: "45" },
            ].map((stat, index) => (
              <div key={index} className="gradient-card p-6 text-center">
                <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.count}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Welcome Message */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="gradient-card p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                مرحباً بك في ProjexHub
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                أول منصة سعودية لتبادل مشاريع التخرج الجامعية
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                انضم إلى مجتمعنا من الطلاب والأكاديميين، شارك مشاريعك، واستفد من
                خبرات الآخرين في رحلتك الأكاديمية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button className="btn-gradient text-white px-8 py-3">
                    إنشاء حساب جديد
                  </Button>
                </Link>
                <Link to="/explore">
                  <Button variant="outline" className="px-8 py-3">
                    تصفح المشاريع
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 w-full">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              ماذا يمكنك فعله في ProjexHub؟
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              استكشف المميزات المتنوعة التي تجعل من تجربتك الأكاديمية أكثر
              إثراءً
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="gradient-card p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                رفع المشاريع
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                شارك مشاريعك مع المجتمع الأكاديمي واحصل على تقييمات مفيدة
              </p>
            </Card>

            <Card className="gradient-card p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                تصفح واستكشف
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                اكتشف مشاريع مبدعة من طلاب الجامعات السعودية في مختلف التخصصات
              </p>
            </Card>

            <Card className="gradient-card p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                التواصل والنقاش
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                تواصل مع أصحاب المشاريع وشارك في النقاشات الأكاديمية
              </p>
            </Card>

            <Card className="gradient-card p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                المسابقات
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                شارك في المسابقات الشهرية واربح جوائز قيمة
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 w-full">
        <div className="w-full px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              تصفح حسب التخصص
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              اختر التخصص الذي يهمك واستكشف المشاريع المتعلقة به
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
            {[
              "علوم الحاسب",
              "الهندسة",
              "الطب",
              "إدارة الأعمال",
              "التصميم",
              "العلوم",
            ].map((major, index) => (
              <Link
                key={index}
                to={`/explore?major=${encodeURIComponent(major)}`}
                className="gradient-card p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {major}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Competition Banner */}
      <section className="py-16 w-full">
        <div className="w-full px-4">
          <div className="max-w-5xl mx-auto">
            <div className="gradient-card p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-accent opacity-10"></div>
              <div className="relative">
                <Trophy className="w-16 h-16 text-accent-500 mx-auto mb-6 floating-element" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  المسابقة الشهرية
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  شارك مشروعك في المسابقة واربح جوائز قيمة تصل إلى 10,000 ريال
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/competition">
                    <Button className="btn-gradient text-white px-8 py-3">
                      تفاصيل المسابقة
                    </Button>
                  </Link>
                  <Link to="/upload">
                    <Button variant="outline" className="px-8 py-3">
                      شارك مشروعك
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 w-full">
        <div className="w-full px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              ابدأ رحلتك الأكاديمية معنا
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              انضم إلى آلاف الطلاب والأكاديميين في أكبر منصة سعودية لتبادل
              المشاريع الجامعية
            </p>
            <Link to="/signup">
              <Button className="btn-gradient text-white px-12 py-4 text-lg">
                <Sparkles className="w-5 h-5 ml-2" />
                إنشاء حساب مجاني
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
