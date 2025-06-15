import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Search,
  BookOpen,
  Users,
  Trophy,
  Star,
  Eye,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Award,
  Filter,
  ArrowLeft,
} from "lucide-react";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Mock data for featured projects
  const featuredProjects = [
    {
      id: 1,
      title: "نظام إدارة المكتبات الذكي",
      description:
        "نظام متطور لإدارة المكتبات الجامعية باستخدام تقنيات الذكاء الاصطناعي",
      author: "سارة أحمد محمد",
      university: "جامعة الملك سعود",
      major: "علوم الحاسب",
      rating: 4.8,
      views: 1240,
      comments: 23,
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "AI", "MongoDB"],
    },
    {
      id: 2,
      title: "تطبيق التعلم التفاعلي للأطفال",
      description: "منصة تعليمية تفاعلية مخصصة للأطفال مع ألعاب تعليمية ذكية",
      author: "محمد عبدالله الزهراني",
      university: "جامعة الملك عبدالعزيز",
      major: "هندسة البرمجيات",
      rating: 4.9,
      views: 856,
      comments: 15,
      image: "/placeholder.svg",
      tags: ["Flutter", "Firebase", "Gamification"],
    },
    {
      id: 3,
      title: "نظام مراقبة جودة الهواء",
      description:
        "شبكة استشعار لمراقبة جودة الهواء في المدن مع تحليل بيانات فوري",
      author: "فاطمة علي الحربي",
      university: "جامعة الملك فهد للبترول والمعادن",
      major: "هندسة الحاسب",
      rating: 4.7,
      views: 692,
      comments: 18,
      image: "/placeholder.svg",
      tags: ["IoT", "Python", "Data Analysis"],
    },
  ];

  const majors = [
    "علوم الحاسب",
    "هندسة البرمجيات",
    "هندسة الحاسب",
    "نظم المعلومات",
    "الذكاء الاصطناعي",
    "الأمن السيبراني",
  ];

  const universities = [
    "جامعة الملك سعود",
    "جامعة الملك عبدالعزيز",
    "جامعة الملك فهد للبترول والمعادن",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="floating-element">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">ProjexHub</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              منصة تبادل مشاريع التخرج الجامعية - اكتشف، شارك، وتعلم مع مجتمع من
              المبدعين
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
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
                <Button className="btn-gradient text-white mr-2">بحث</Button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: BookOpen, label: "مشروع", count: "2,450" },
              { icon: Users, label: "طالب", count: "8,200" },
              { icon: Trophy, label: "مسابقة", count: "24" },
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
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              المشاريع المميزة
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              اكتشف أفضل مشاريع التخرج من طلاب الجامعات السعودية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="gradient-card hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="p-6">
                  <div className="aspect-video bg-gradient-secondary rounded-lg mb-4 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {project.author}
                      </div>
                      <div className="text-gray-500">{project.university}</div>
                    </div>
                    <Badge variant="secondary">{project.major}</Badge>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{project.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <Eye className="w-4 h-4" />
                        <span>{project.views}</span>
                      </div>
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <MessageCircle className="w-4 h-4" />
                        <span>{project.comments}</span>
                      </div>
                    </div>
                    <Link
                      to={`/project/${project.id}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/explore">
              <Button className="btn-gradient text-white px-8 py-3">
                عرض جميع المشاريع
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              تصفح حسب التخصص
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {majors.map((major, index) => (
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
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-accent opacity-10"></div>
            <div className="relative">
              <Trophy className="w-16 h-16 text-accent-500 mx-auto mb-6 floating-element" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                مسابقة شهر يناير 2024
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                شارك مشروعك واربح جوائز قيمة تصل إلى 10,000 ريال
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
      </section>

      {/* Recent Activity */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              آخر الأنشطة
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "مشروع جديد",
                desc: "تم رفع مشروع نظام إدارة المستشفيات",
                time: "منذ ساعتين",
              },
              {
                icon: Award,
                title: "تقييم عالي",
                desc: "حصل مشروع التعلم الآلي على 5 نجوم",
                time: "منذ 4 ساعات",
              },
              {
                icon: MessageCircle,
                title: "تعليق جديد",
                desc: "تم إضافة تعليق على مشروع التجارة الإلكترونية",
                time: "منذ 6 ساعات",
              },
              {
                icon: Users,
                title: "عضو جديد",
                desc: "انضم 15 طالب جديد للمنصة",
                time: "منذ يوم",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="gradient-card p-6 hover:shadow-lg transition-all duration-300"
              >
                <activity.icon className="w-8 h-8 text-primary-500 mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {activity.desc}
                </p>
                <p className="text-gray-500 text-xs">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
