import React from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Shield,
  Users,
  BookOpen,
  MessageCircle,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Settings,
  BarChart3,
} from "lucide-react";

export default function Admin() {
  // Mock admin data
  const stats = {
    totalUsers: 8240,
    totalProjects: 2450,
    pendingReviews: 23,
    totalReports: 12,
    monthlyGrowth: 15.2,
  };

  const pendingProjects = [
    {
      id: 1,
      title: "نظام إدارة الطلاب المتقدم",
      author: "أحمد محمد العتيبي",
      university: "جامعة الملك سعود",
      submitDate: "2024-01-20",
      status: "pending",
    },
    {
      id: 2,
      title: "تطبيق الواقع المعزز للتعليم",
      author: "فاطمة علي الزهراني",
      university: "جامعة الملك عبدالعزيز",
      submitDate: "2024-01-19",
      status: "pending",
    },
    {
      id: 3,
      title: "منصة التجارة الإلكترونية الذكية",
      author: "سعد عبدالله الحربي",
      university: "جامعة الملك فهد",
      submitDate: "2024-01-18",
      status: "pending",
    },
  ];

  const reports = [
    {
      id: 1,
      type: "محتوى غير مناسب",
      reportedItem: "مشروع: نظام إدارة المخزون",
      reporter: "مجهول",
      date: "2024-01-20",
      status: "pending",
    },
    {
      id: 2,
      type: "انتهاك حقوق الطبع",
      reportedItem: "مشروع: تطبيق المحادثة",
      reporter: "د. محمد الأحمد",
      date: "2024-01-19",
      status: "under_review",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gradient mb-4 flex items-center justify-center">
            <Shield className="w-10 h-10 ml-3" />
            لوحة تحكم الإدارة
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            إدارة وتنظيم منصة ProjexHub
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="gradient-card p-6 text-center">
            <Users className="w-8 h-8 text-primary-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {stats.totalUsers}
            </div>
            <div className="text-sm text-gray-500">المستخدمين</div>
          </Card>

          <Card className="gradient-card p-6 text-center">
            <BookOpen className="w-8 h-8 text-secondary-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {stats.totalProjects}
            </div>
            <div className="text-sm text-gray-500">المشاريع</div>
          </Card>

          <Card className="gradient-card p-6 text-center">
            <Clock className="w-8 h-8 text-accent-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {stats.pendingReviews}
            </div>
            <div className="text-sm text-gray-500">مراجعات معلقة</div>
          </Card>

          <Card className="gradient-card p-6 text-center">
            <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {stats.totalReports}
            </div>
            <div className="text-sm text-gray-500">البلاغات</div>
          </Card>

          <Card className="gradient-card p-6 text-center">
            <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              +{stats.monthlyGrowth}%
            </div>
            <div className="text-sm text-gray-500">النمو الشهري</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pending Projects */}
          <Card className="gradient-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                المشاريع المعلقة للمراجعة
              </h2>
              <Badge variant="secondary">{pendingProjects.length}</Badge>
            </div>

            <div className="space-y-4">
              {pendingProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        بواسطة: {project.author}
                      </p>
                      <p className="text-sm text-gray-500">
                        {project.university} • {project.submitDate}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-yellow-50 text-yellow-700 border-yellow-200"
                    >
                      معلق
                    </Badge>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="btn-gradient text-white">
                      <CheckCircle className="w-4 h-4 ml-1" />
                      موافقة
                    </Button>
                    <Button size="sm" variant="outline">
                      مراجعة
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-red-600 border-red-200"
                    >
                      رفض
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-4">
              عرض جميع المراجعات المعلقة
            </Button>
          </Card>

          {/* Reports */}
          <Card className="gradient-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                البلاغات والتقارير
              </h2>
              <Badge variant="destructive">{reports.length}</Badge>
            </div>

            <div className="space-y-4">
              {reports.map((report) => (
                <div
                  key={report.id}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                        {report.type}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {report.reportedItem}
                      </p>
                      <p className="text-sm text-gray-500">
                        بلغ من: {report.reporter} • {report.date}
                      </p>
                    </div>
                    <Badge
                      variant={
                        report.status === "pending"
                          ? "destructive"
                          : "secondary"
                      }
                    >
                      {report.status === "pending" ? "معلق" : "قيد المراجعة"}
                    </Badge>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="btn-gradient text-white">
                      مراجعة
                    </Button>
                    <Button size="sm" variant="outline">
                      تجاهل
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-red-600 border-red-200"
                    >
                      اتخاذ إجراء
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-4">
              عرض جميع البلاغات
            </Button>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="gradient-card p-6 mt-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            الإجراءات السريعة
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center"
            >
              <Users className="w-6 h-6 mb-2" />
              إدارة المستخدمين
            </Button>

            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center"
            >
              <BookOpen className="w-6 h-6 mb-2" />
              إدارة المشاريع
            </Button>

            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center"
            >
              <MessageCircle className="w-6 h-6 mb-2" />
              إدارة المحادثات
            </Button>

            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center"
            >
              <BarChart3 className="w-6 h-6 mb-2" />
              التقارير والإحصائيات
            </Button>
          </div>
        </Card>

        {/* System Settings */}
        <Card className="gradient-card p-6 mt-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                إعدادات النظام
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                إدارة إعدادات المنصة والمسابقات
              </p>
            </div>

            <Button className="btn-gradient text-white">
              <Settings className="w-4 h-4 ml-2" />
              فتح الإعدادات
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
