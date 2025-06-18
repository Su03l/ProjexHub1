import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { SearchInput } from "../components/ui/search-input";
import { ProjectCard } from "../components/ui/project-card";
import { FilterSidebar } from "../components/ui/filter-sidebar";
import { EmptyState } from "../components/ui/empty-state";
import { LoadingSpinner } from "../components/ui/loading-spinner";
import { BookOpen, Plus, Users, Search } from "lucide-react";
import { Project, FilterOptions } from "@/lib/types";

export default function ExploreProjects() {
  const [filters, setFilters] = useState<FilterOptions>({
    searchQuery: "",
    university: "",
    major: "",
    year: "",
    sortBy: "newest",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Sample project data - will be replaced with API call
  const sampleProjects: Project[] = [
    {
      id: "1",
      title: "نظام إدارة المرضى باستخدام الذكاء الاصطناعي",
      description:
        "تطبيق ويب متكامل لإدارة بيانات المرضى وحجز المواعيد باستخدام خوارزميات التعلم الآلي لتحسين كفاءة الخدمات الطبية",
      author: "سليمان يوسف",
      authorId: "1",
      university: "جامعة طيبة",
      major: "علوم الحاسب",
      year: "2025",
      rating: 4.8,
      views: 245,
      comments: 18,
      likes: 156,
      downloadCount: 89,
      tags: ["ذكاء اصطناعي", "تطوير ويب", "صحة", "قواعد بيانات"],
      skills: ["React", "Node.js", "Python", "TensorFlow"],
      files: [],
      featured: true,
      uploadDate: new Date("2025-01-15"),
      updatedAt: new Date("2025-01-15"),
    },
  ];

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = sampleProjects.filter((project) => {
      if (
        filters.searchQuery &&
        !project.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
        !project.description.toLowerCase().includes(filters.searchQuery.toLowerCase())
      ) {
        return false;
      }
      if (filters.university && project.university !== filters.university) return false;
      if (filters.major && project.major !== filters.major) return false;
      if (filters.year && project.year !== filters.year) return false;
      return true;
    });

    // Sort projects
    switch (filters.sortBy) {
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "views":
        filtered.sort((a, b) => b.views - a.views);
        break;
      case "comments":
        filtered.sort((a, b) => b.comments - a.comments);
        break;
      case "newest":
      default:
        filtered.sort((a, b) => b.uploadDate.getTime() - a.uploadDate.getTime());
        break;
    }

    return filtered;
  }, [filters]);

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

        {/* Search Bar */}
        <Card className="gradient-card p-6 mb-8 max-w-4xl mx-auto">
          <SearchInput
            placeholder="ابحث في المشاريع..."
            value={filters.searchQuery}
            onChange={(value) => setFilters({ ...filters, searchQuery: value })}
          />
        </Card>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <FilterSidebar filters={filters} onFiltersChange={setFilters} />
            </div>

            {/* Projects Grid */}
            <div className="lg:col-span-3">
              {isLoading ? (
                <div className="flex justify-center py-12">
                  <LoadingSpinner size="lg" text="جاري تحميل المشاريع..." />
                </div>
              ) : filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon={BookOpen}
                  title="لا توجد نتائج للبحث"
                  description="جرب تعديل معايير البحث أو المرشحات للعثور على مشاريع مناسبة"
                  actionLabel="رفع مشروع جديد"
                  onAction={() => window.location.href = '/upload'}
                />
              )}
            </div>
          </div>

          {/* Coming Soon Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
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
                ستجد مشاريع من جميع التخصصات والجامعات السعودية
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}