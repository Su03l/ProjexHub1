import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Search, Filter, BookOpen, Users, Plus } from "lucide-react";

export default function ExploreProjects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedMajor, setSelectedMajor] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  // All Saudi Universities
  const universities = [
    "جامعة الملك سعود",
    "جامعة الملك عبدالعزيز",
    "جامعة الملك فهد للبترول والمعادن",
    "جامعة الملك خالد",
    "جامعة الملك فيصل",
    "جامعة الإمام محمد بن سعود الإسلامية",
    "جامعة أم القرى",
    "الجامعة الإسلامية بالمدينة المنورة",
    "جامعة طيبة",
    "جامعة الطائف",
    "جامعة جازان",
    "جامعة نجران",
    "جامعة الباحة",
    "جامعة الحدود الشمالية",
    "جامعة الجوف",
    "جامعة حائل",
    "جامعة تبوك",
    "جامعة القصيم",
    "جامعة الأميرة نورة بنت عبدالرحمن",
    "جامعة الملك سعود بن عبدالعزيز للعلوم الصحية",
    "جامعة الفيصل",
    "جامعة الأمير سطام بن عبدالعزيز",
    "جامعة المجمعة",
    "جامعة شقراء",
    "جامعة الدمام",
    "جامعة بيشة",
    "الجامعة السعودية الإلكترونية",
    "جامعة الأمير محمد بن فهد",
    "جامعة دار العلوم",
    "جامعة الملك عبدالله للعلوم والتقنية",
    "كلية الأمير سلطان العسكرية للعلوم ال��حية",
    "جامعة الأمير سلطان",
    "جامعة الأمير مقرن",
    "جامعة الأمير فهد بن سلطان",
    "كليات الريان",
    "كليات الغد الدولية للعلوم الصحية",
    "جامعة اليمامة",
    "جامعة رياض العلم",
    "كليات الفارابي",
    "جامعة العلوم والتقنية",
    "كليات عنيزة",
    "جامعة المعرفة",
    "جامعة الأعمال والتكنولوجيا",
    "الكلية التقنية العليا",
    "معهد الإدارة العامة",
  ];

  // Comprehensive list of majors
  const majors = [
    // Computer Science & IT
    "علوم الحاسب",
    "هندسة البرمجيات",
    "هندسة الحاسب",
    "نظم المعلومات",
    "تقنية المعلومات",
    "الذكاء الاصطناعي",
    "الأمن السيبراني",
    "علوم البيانات",
    "هندسة الشبكات",
    "تطوير الألعاب",
    "الحوسبة السحابية",
    "إنترنت الأشياء",
    "الواقع المعزز والافتراضي",
    "الروبوتات",
    "البلوك تشين",
    "التجارة الإلكترونية",
    "إدارة الأعمال التقنية",
    "تصميم تجربة المستخدم",
    "الجرافيك والوسائط المتعددة",

    // Engineering
    "هندسة الطيران",
    "الهندسة المدنية",
    "الهندسة الكهربائية",
    "الهندسة الميكانيكية",
    "الهندسة الكيميائية",
    "الهندسة الصناعية",
    "هندسة البترول",
    "هندسة المواد",
    "هندسة البيئة",
    "هندسة التعدين",
    "هندسة الطاقة المتجددة",
    "هندسة الاتصالات",
    "هندسة الإلكترونيات",
    "هندسة التحكم",
    "هندسة الطيران والفضاء",
    "هندسة المياه والبيئة",
    "هندسة الأغذية",
    "هندسة الزراعة",
    "هندسة الغابات",
    "هندسة المساحة",

    // Medical Sciences
    "الطب",
    "طب الأسنان",
    "الصيدلة",
    "التمريض",
    "العلوم الطبية التطبيقية",
    "العلاج الطبيعي",
    "تقنية الأشعة",
    "المختبرات الطبية",
    "التغذية الإكلينيكية",
    "الصحة العامة",
    "إدارة المعلومات الصحية",
    "الطب البيطري",
    "طب العيون",
    "طب الأطفال",
    "طب النساء والولادة",
    "الجراحة",
    "الطب النفسي",
    "طب الطوارئ",
    "طب الأسرة",
    "الطب الباطني",

    // Sciences
    "الفيزياء",
    "الكيمياء",
    "الأحياء",
    "الرياضيات",
    "الإحصاء",
    "الجيولوجيا",
    "الجغرافيا",
    "علوم البحار",
    "علوم الأرض",
    "علوم الفضاء",
    "البيولوجيا الجزيئية",
    "الكيمياء الحيوية",
    "الفيزياء الحيوية",
    "علوم البيئة",
    "علوم المناخ",
    "علوم الطعام",
    "علوم الحياة",
    "النانو تكنولوجي",
    "العلوم النووية",
    "علوم المختبرات",

    // Business & Management
    "إدارة الأعمال",
    "المحاسبة",
    "التمويل",
    "التسويق",
    "الموارد البشرية",
    "إدارة العمليات",
    "ريادة الأعمال",
    "التجارة الدولية",
    "إدارة السلسلة التوريدية",
    "إدارة المشاريع",
    "إدارة الجودة",
    "إدارة المخاطر",
    "الاقتصاد",
    "الاقتصاد الإسلامي",
    "المصرفية الإسلامية",
    "التأمين",
    "الاستثمار",
    "التجارة الإلكترونية",
    "إدارة الفنادق",
    "إدارة السياحة",

    // Law & Political Science
    "القانون",
    "الشريعة الإسلامية",
    "العلوم السياسية",
    "العلاقات الدولية",
    "الدبلوماسية",
    "الأمن الوطني",
    "العدالة الجنائية",
    "القانون التجاري",
    "القانون الدولي",
    "حقوق الإنسان",

    // Media & Communication
    "الإعلام والاتصال",
    "الصحافة",
    "الإذاعة والتلفزيون",
    "العلاقات العامة",
    "الإعلان",
    "الإنتاج الإعلامي",
    "الإعلام الرقمي",
    "التصوير الفوتوغرافي",
    "المونتاج والإخراج",
    "الإعلام الرياضي",

    // Arts & Design
    "التصميم الجرافيكي",
    "التصميم الداخلي",
    "تصميم الأزياء",
    "الفنون الجميلة",
    "النحت",
    "الرسم",
    "الخط العربي",
    "التصوير الفوتوغرافي",
    "التصميم الصناعي",
    "تصميم المجوهرات",

    // Architecture & Planning
    "العمارة",
    "التخطيط العمراني",
    "هندسة المناظر الطبيعية",
    "العمارة الداخلية",
    "التصميم المعماري",
    "إدارة الإنشاءات",
    "تقنية البناء",
    "المساحة",
    "التخطيط الإقليمي",
    "إدارة المشاريع الإنشائية",

    // Social Sciences
    "علم النفس",
    "علم الاجتماع",
    "الخدمة الاجتماعية",
    "التاريخ",
    "الجغرافيا",
    "الأنثروبولوجيا",
    "علم الآثار",
    "الدراسات الإسلامية",
    "الدراسات العربية",
    "الفلسفة",

    // Languages & Literature
    "الأدب العربي",
    "اللغة الإنجليزية",
    "اللغة الفرنسية",
    "اللغة الألمانية",
    "اللغة الإسبانية",
    "اللغة الصينية",
    "اللغة اليابانية",
    "الترجمة",
    "اللسانيات",
    "الأدب المقارن",

    // Education
    "التربية وعلم النفس",
    "المناهج وطرق التدريس",
    "الإدارة التربوية",
    "التربية الخاصة",
    "تقنيات التعليم",
    "التربية الفنية",
    "التربية البدنية",
    "رياض الأطفال",
    "التعليم الابتدائي",
    "التربية الإسلامية",

    // Agriculture & Food
    "الزراعة",
    "الإنتاج النباتي",
    "الإنتاج الحيواني",
    "علوم التربة",
    "وقاية النبات",
    "الاقتصاد الزراعي",
    "الإرشاد الزراعي",
    "هندسة الري",
    "تقنية الغذاء",
    "علوم الألبان",

    // Sports & Physical Education
    "التربية البدنية",
    "علوم الرياضة",
    "الطب الرياضي",
    "الإدارة الرياضية",
    "التدريب الرياضي",
    "فسيولوجيا الرياضة",
    "النشاط البدني المكيف",
    "الترويح الرياضي",
    "علم النفس الرياضي",
    "الإعلام الرياضي",

    // Public Administration
    "الإدارة العامة",
    "إدارة الموارد البشرية",
    "إدارة المالية العامة",
    "السياسات العامة",
    "التنمية الإدارية",
    "إدارة المدن",
    "الأمن العام",
    "إدارة الكوارث",
    "الإدارة الصحية",
    "إدارة التعليم",
  ];

  const years = ["2025", "2024", "2023", "2022", "2021"];

  // Sample project data
  const sampleProjects = [
    {
      id: 1,
      title: "نظام إدارة المرضى باستخدام الذكاء الاصطناعي",
      description:
        "تطبيق ويب متكامل لإدارة بيانات المرضى وحجز المواعيد باستخدام خوارزميات التعلم الآلي لتحسين كفاءة الخدمات الطبية",
      author: "سليمان يوسف",
      university: "جامعة طيبة",
      major: "علوم الحاسب",
      year: "2025",
      rating: 4.8,
      views: 245,
      comments: 18,
      tags: ["ذكاء اصطناعي", "تطوير ويب", "صحة", "قواعد بيانات"],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&h=250",
      downloadCount: 89,
      featured: true,
    },
  ];

  // Filter projects based on search and filters
  const filteredProjects = sampleProjects.filter((project) => {
    if (
      searchQuery &&
      !project.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !project.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    if (selectedUniversity && project.university !== selectedUniversity)
      return false;
    if (selectedMajor && project.major !== selectedMajor) return false;
    if (selectedYear && project.year !== selectedYear) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 w-full">
      <div className="w-full px-4">
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
        <Card className="gradient-card p-4 sm:p-6 mb-6 sm:mb-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4">
            {/* Search */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="ابحث في المشاريع..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10 text-right min-h-[44px]"
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
                  الأكثر تعليقاً
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="gradient-card overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    {project.featured && (
                      <div className="absolute top-3 right-3 bg-accent-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        مميز
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3 flex space-x-2 space-x-reverse">
                      <span className="bg-white/90 text-gray-700 px-2 py-1 rounded text-xs">
                        {project.views} مشاهدة
                      </span>
                      <span className="bg-white/90 text-gray-700 px-2 py-1 rounded text-xs">
                        ⭐ {project.rating}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    {/* Project Title */}
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Author & University */}
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {project.author}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {project.university} • {project.major}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span>{project.comments} تعليق</span>
                      <span>{project.downloadCount} تحميل</span>
                      <span>{project.year}</span>
                    </div>

                    {/* Action Button */}
                    <Link to={`/project/${project.id}`} className="w-full">
                      <Button className="w-full btn-gradient text-white">
                        عرض المشروع
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            /* No Results Message */
            <div className="max-w-4xl mx-auto">
              <Card className="gradient-card p-12 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  لا توجد نتائج للبحث
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                  جرب تعديل معايير البحث أو المرشحات للعثور على مشاريع مناسبة
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/upload">
                    <Button className="btn-gradient text-white px-8 py-3">
                      <Plus className="w-5 h-5 ml-2" />
                      رفع مشروع جديد
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="px-8 py-3"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedUniversity("");
                      setSelectedMajor("");
                      setSelectedYear("");
                    }}
                  >
                    إعادة تعيين المرشحات
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-7xl mx-auto mt-8 sm:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <Card className="gradient-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                بحث متقدم
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                ستتمكن قريباً من البحث بمعايير متقدمة ومرشحات ذكية
              </p>
            </Card>

            <Card className="gradient-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                مجتمع نشط
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                انضم إلى مجتمع متنامي من الطلاب والأكاديميين المبدعين
              </p>
            </Card>

            <Card className="gradient-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                مشاريع متنوعة
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                ستجد مشاريع من جميع التخصصات والجامعات السعود��ة
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
