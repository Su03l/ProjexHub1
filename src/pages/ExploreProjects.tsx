import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Search,
  Filter,
  Star,
  Eye,
  MessageCircle,
  BookOpen,
  ArrowLeft,
  Calendar,
  User,
  GraduationCap,
} from "lucide-react";

export default function ExploreProjects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedMajor, setSelectedMajor] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  // Mock projects data
  const projects = [
    {
      id: 1,
      title: "نظام إدارة المكتبات الذكي",
      description:
        "نظام متطور لإ��ارة المكتبات الجامعية باستخدام تقنيات الذكاء الاصطناعي مع واجهة مستخدم حديثة وقاعدة بيانات متقدمة",
      author: "سارة أحمد محمد",
      university: "جامعة الملك سعود",
      major: "علوم الحاسب",
      year: "2024",
      rating: 4.8,
      views: 1240,
      comments: 23,
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "AI", "MongoDB"],
      uploadDate: "2024-01-15",
    },
    {
      id: 2,
      title: "تطبيق التعلم التفاعلي للأطفال",
      description:
        "منصة تعليمية تفاعلية مخصصة للأطفال مع ألعاب تعليمية ذكية ونظام تتبع التقدم",
      author: "محمد عبدالله الزهراني",
      university: "جامعة الملك عبدالعزيز",
      major: "هندسة البرمجيات",
      year: "2023",
      rating: 4.9,
      views: 856,
      comments: 15,
      image: "/placeholder.svg",
      tags: ["Flutter", "Firebase", "Gamification"],
      uploadDate: "2024-01-10",
    },
    {
      id: 3,
      title: "نظام مراقبة جودة الهواء",
      description:
        "شبكة استشعار لمراقبة جودة الهواء في المدن مع تحليل بيانات فوري وتقارير مفصلة",
      author: "فاطمة علي الحربي",
      university: "جامعة الملك فهد للبترول والمعادن",
      major: "هندسة الحاسب",
      year: "2024",
      rating: 4.7,
      views: 692,
      comments: 18,
      image: "/placeholder.svg",
      tags: ["IoT", "Python", "Data Analysis"],
      uploadDate: "2024-01-08",
    },
    {
      id: 4,
      title: "منصة التجارة الإلكترونية المتكاملة",
      description:
        "نظام تجارة إلكترونية شامل مع إدارة المنتجات والمدفوعات والشحن",
      author: "عبدالرحمن خالد العتيبي",
      university: "جامعة الملك خالد",
      major: "تقنية المعلومات",
      year: "2023",
      rating: 4.6,
      views: 543,
      comments: 12,
      image: "/placeholder.svg",
      tags: ["Laravel", "Vue.js", "MySQL"],
      uploadDate: "2024-01-05",
    },
    {
      id: 5,
      title: "نظام إدارة المستشفيات الذكي",
      description:
        "نظام إدارة متطور للمستشفيات مع ميزات الذكاء الاصطناعي لجدولة المواعيد",
      author: "نورا سعد الغامدي",
      university: "جامعة الملك سعود للعلوم الصحية",
      major: "نظم المعلومات الصحية",
      year: "2024",
      rating: 4.5,
      views: 789,
      comments: 20,
      image: "/placeholder.svg",
      tags: ["Angular", "Spring Boot", "Oracle"],
      uploadDate: "2024-01-03",
    },
    {
      id: 6,
      title: "تطبيق الواقع المعزز للتعليم",
      description:
        "تطبيق تعليمي يستخدم تقنيات الواقع المعزز لتحسين تجربة التعلم",
      author: "أحمد محمد الشهري",
      university: "جامعة الملك عبدالعزيز",
      major: "الواقع المعزز والافتراضي",
      year: "2023",
      rating: 4.8,
      views: 657,
      comments: 16,
      image: "/placeholder.svg",
      tags: ["Unity", "ARCore", "C#"],
      uploadDate: "2024-01-01",
    },
  ];

  const universities = [
    "جامعة الملك سعود",
    "جامعة الملك عبدالعزيز",
    "جامعة الملك فهد للبترول والمعادن",
    "جامعة الملك خالد",
    "جامعة الملك سعود للعلوم الصحية",
  ];

  const majors = [
    "علوم الحاسب",
    "هندسة البرمجيات",
    "هندسة الحاسب",
    "تقنية المعلومات",
    "نظم المعلومات الصحية",
    "الواقع المعزز والافتراضي",
  ];

  const years = ["2024", "2023", "2022", "2021"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gradient mb-4">
            تصفح المشاريع
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            اكتشف مشاريع التخرج المبدعة من طلاب الجامعات السعودية
          </p>
        </div>

        {/* Filters */}
        <Card className="gradient-card p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="ابحث في المشاريع..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10 text-right"
                />
              </div>
            </div>

            {/* University Filter */}
            <Select
              onValueChange={(value) =>
                setSelectedUniversity(value === "all-universities" ? "" : value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="الجامعة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-universities">جميع الجامعات</SelectItem>
                {universities.map((university) => (
                  <SelectItem
                    key={university}
                    value={university}
                    className="text-right"
                  >
                    {university}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Major Filter */}
            <Select
              onValueChange={(value) =>
                setSelectedMajor(value === "all-majors" ? "" : value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="التخصص" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-majors">جميع التخصصات</SelectItem>
                {majors.map((major) => (
                  <SelectItem key={major} value={major} className="text-right">
                    {major}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Year Filter */}
            <Select
              onValueChange={(value) =>
                setSelectedYear(value === "all-years" ? "" : value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="السنة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-years">جميع السنوات</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={year} className="text-right">
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort By */}
            <Select onValueChange={setSortBy} defaultValue="newest">
              <SelectTrigger>
                <SelectValue placeholder="ترتيب حسب" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest" className="text-right">
                  الأحدث
                </SelectItem>
                <SelectItem value="rating" className="text-right">
                  الأعلى تقييماً
                </SelectItem>
                <SelectItem value="views" className="text-right">
                  الأكثر مشاهدة
                </SelectItem>
                <SelectItem value="comments" className="text-right">
                  الأكث�� تعليقاً
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            عرض {projects.length} مشروع
          </p>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 ml-2" />
            المزيد من الفلاتر
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="gradient-card hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-6">
                {/* Project Image */}
                <div className="aspect-video bg-gradient-secondary rounded-lg mb-4 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-sm">
                  {project.description}
                </p>

                {/* Author & University */}
                <div className="mb-4 space-y-2">
                  <div className="flex items-center space-x-2 space-x-reverse text-sm">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="font-medium text-gray-900 dark:text-white">
                      {project.author}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse text-sm">
                    <GraduationCap className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-400">
                      {project.university}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{project.major}</Badge>
                    <div className="flex items-center space-x-1 space-x-reverse text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
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
                </div>

                {/* View Project Button */}
                <Link to={`/project/${project.id}`}>
                  <Button className="w-full btn-gradient text-white">
                    عرض المشروع
                    <ArrowLeft className="w-4 h-4 mr-2" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3">
            تحميل المزيد من المشاريع
          </Button>
        </div>
      </div>
    </div>
  );
}
