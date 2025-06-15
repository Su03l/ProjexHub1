import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  User,
  GraduationCap,
  MapPin,
  Calendar,
  Star,
  Eye,
  MessageCircle,
  Settings,
  Upload,
  Award,
  BookOpen,
  TrendingUp,
  Edit,
  Mail,
  Phone,
} from "lucide-react";

export default function Profile() {
  const [isOwnProfile, setIsOwnProfile] = useState(true);

  // Mock user data
  const user = {
    id: 1,
    name: "سارة أحمد محمد",
    university: "جامعة الملك سعود",
    major: "علوم الحاسب",
    year: "2024",
    joinDate: "انضم في يناير 2023",
    bio: "طالبة علوم حاسب مهتمة بالذكاء الاصطناعي وتطوير الويب. أحب تطوير حلول تقنية للمشاكل الواقعية وأسعى لتعلم أحدث التقنيات.",
    location: "الرياض، السعودية",
    email: "sarah.ahmed@example.com",
    phone: "+966 50 123 4567",
    stats: {
      projects: 5,
      totalViews: 3240,
      totalRating: 4.7,
      comments: 89,
      followers: 156,
      following: 98,
    },
    achievements: [
      {
        id: 1,
        title: "مشروع الشهر",
        description: "حصل على أفضل مشروع في شهر يناير",
        icon: Award,
        color: "text-yellow-500",
      },
      {
        id: 2,
        title: "مطور نشط",
        description: "رفع أكثر من 5 مشاريع",
        icon: Upload,
        color: "text-blue-500",
      },
      {
        id: 3,
        title: "محبوب من المجتمع",
        description: "حصل على أكثر من 100 إعجاب",
        icon: Star,
        color: "text-red-500",
      },
      {
        id: 4,
        title: "خبير تقني",
        description: "متخصص في الذكاء الاصطناعي",
        icon: BookOpen,
        color: "text-green-500",
      },
    ],
    projects: [
      {
        id: 1,
        title: "نظام إدارة المكتبات الذكي",
        description:
          "نظام متطور لإدارة المكتبات الجامعية باستخدام تقنيات الذكاء الاص��ناعي",
        rating: 4.8,
        views: 1240,
        comments: 23,
        date: "2024-01-15",
        tags: ["React", "Node.js", "AI", "MongoDB"],
      },
      {
        id: 2,
        title: "تطبيق التعلم التفاعلي",
        description: "منصة تعليمية تفاعلية للطلاب مع ميزات ذكية",
        rating: 4.9,
        views: 856,
        comments: 15,
        date: "2023-12-10",
        tags: ["Flutter", "Firebase", "AI"],
      },
      {
        id: 3,
        title: "نظام التوصيات الذكي",
        description: "نظام توصيات للكتب والمراجع العلمية",
        rating: 4.6,
        views: 654,
        comments: 12,
        date: "2023-11-20",
        tags: ["Python", "ML", "TensorFlow"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <Card className="gradient-card p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
              {isOwnProfile && (
                <Button
                  size="sm"
                  className="absolute -bottom-2 -right-2 rounded-full"
                >
                  <Edit className="w-4 h-4" />
                </Button>
              )}
            </div>

            {/* User Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {user.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <GraduationCap className="w-4 h-4" />
                      <span>{user.university}</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <BookOpen className="w-4 h-4" />
                      <span>{user.major}</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Calendar className="w-4 h-4" />
                      <span>{user.year}</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <MapPin className="w-4 h-4" />
                      <span>{user.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 md:mt-0">
                  {isOwnProfile ? (
                    <Button variant="outline">
                      <Settings className="w-4 h-4 ml-2" />
                      تعديل الملف الشخصي
                    </Button>
                  ) : (
                    <>
                      <Button className="btn-gradient text-white">
                        <MessageCircle className="w-4 h-4 ml-2" />
                        مراسلة
                      </Button>
                      <Button variant="outline">متابعة</Button>
                    </>
                  )}
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-2xl">
                {user.bio}
              </p>

              {/* Contact Info */}
              {isOwnProfile && (
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Mail className="w-4 h-4" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Phone className="w-4 h-4" />
                    <span>{user.phone}</span>
                  </div>
                </div>
              )}

              {/* Stats */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {user.stats.projects}
                  </div>
                  <div className="text-xs text-gray-500">مشروع</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {user.stats.totalViews}
                  </div>
                  <div className="text-xs text-gray-500">مشاهدة</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {user.stats.totalRating}
                  </div>
                  <div className="text-xs text-gray-500">تقييم</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {user.stats.comments}
                  </div>
                  <div className="text-xs text-gray-500">تعليق</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {user.stats.followers}
                  </div>
                  <div className="text-xs text-gray-500">متابع</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {user.stats.following}
                  </div>
                  <div className="text-xs text-gray-500">يتابع</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Profile Content */}
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="projects">المشاريع</TabsTrigger>
            <TabsTrigger value="achievements">الإنجازات</TabsTrigger>
            <TabsTrigger value="activity">النشاط</TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {user.projects.map((project) => (
                <Card
                  key={project.id}
                  className="gradient-card hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-6">
                    {/* Project Image */}
                    <div className="aspect-video bg-gradient-secondary rounded-lg mb-4 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-sm">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-3 space-x-reverse">
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
                      <span className="text-xs">{project.date}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {user.achievements.map((achievement) => (
                <Card key={achievement.id} className="gradient-card p-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div
                      className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-800 ${achievement.color}`}
                    >
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <Card className="gradient-card p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                النشاط الأخير
              </h3>

              <div className="space-y-4">
                {[
                  {
                    action: "رفع مشروع جديد",
                    item: "نظام إدارة المكتبات الذكي",
                    time: "منذ يومين",
                    icon: Upload,
                  },
                  {
                    action: "حصل على تقييم",
                    item: "5 نجوم على مشروع التعلم التفاعلي",
                    time: "منذ 3 أيام",
                    icon: Star,
                  },
                  {
                    action: "علق على مشروع",
                    item: "نظام مراقبة جودة الهواء",
                    time: "منذ أسبوع",
                    icon: MessageCircle,
                  },
                  {
                    action: "انضم للمنصة",
                    item: "مرحباً بك في ProjexHub",
                    time: "منذ سنة",
                    icon: User,
                  },
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 space-x-reverse p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <activity.icon className="w-4 h-4 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 dark:text-white">
                        <span className="font-medium">{activity.action}</span>{" "}
                        {activity.item}
                      </p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
