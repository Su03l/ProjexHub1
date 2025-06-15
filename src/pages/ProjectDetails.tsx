import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Star,
  Eye,
  MessageCircle,
  Download,
  ExternalLink,
  Github,
  Play,
  User,
  GraduationCap,
  Calendar,
  Heart,
  Share2,
  ArrowRight,
  Send,
  ThumbsUp,
  CheckCircle,
  AlertCircle,
  Lightbulb,
} from "lucide-react";

export default function ProjectDetails() {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);

  // Mock project data
  const project = {
    id: 1,
    title: "نظام إدارة المكتبات الذكي",
    description: `نظام متطور وشامل لإدارة المكتبات الجامعية يعتمد على أحدث تقنيات الذكاء الاصطناعي. يهدف المشروع إلى تحسين تجربة المستخدمين في المكتبات من خلال توفير واجهة حديثة وسهلة الاستخدام، مع إمكانيات بحث ذكية وتوصيات شخصية للكتب والمراجع.

يتضمن النظام ميزات متقدمة مثل إدارة المخزون بالذكاء الاصطناعي، نظام حجز إلكتروني متطور، وتحليلات مفصلة لاستخد��م المكتبة. كما يدعم النظام تقنيات الواقع المعزز لمساعدة المستخدمين في العثور على الكتب داخل المكتبة.`,
    author: "سارة أحمد محمد",
    university: "جامعة الملك سعود",
    major: "علوم الحاسب",
    year: "2024",
    rating: 4.8,
    views: 1240,
    comments: 23,
    likes: 156,
    downloadCount: 89,
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "AI", "MongoDB", "Express", "TensorFlow"],
    uploadDate: "2024-01-15",
    files: [
      { name: "تقرير المشروع النهائي.pdf", size: "2.4 MB", type: "pdf" },
      { name: "العرض التقديمي.pptx", size: "5.1 MB", type: "presentation" },
      { name: "كود المشروع", size: "45 MB", type: "code" },
    ],
    links: [
      { name: "الكود على GitHub", url: "https://github.com", icon: Github },
      {
        name: "عرض المشروع المباشر",
        url: "https://demo.com",
        icon: ExternalLink,
      },
      { name: "فيديو الشرح", url: "https://youtube.com", icon: Play },
    ],
    aiAnalysis: {
      strengths: [
        "استخدام تقنيات حديثة ومتطورة",
        "واجهة مستخدم بديهية وسهلة الاستخدام",
        "تطبيق مبادئ الذكاء الاصطناعي بشكل فعال",
        "توثيق شامل ومفصل للمشروع",
      ],
      weaknesses: [
        "يمكن تحسين أداء قاعدة البيانات",
        "الحاجة لمزيد من اختبارات الأمان",
        "واجهة الإدارة تحتاج تطوير إضافي",
      ],
      suggestions: [
        "إضافة نظام إشعارات فورية",
        "تطوير تطبيق محمول مصاحب",
        "تحسين خوارزميات التوصية",
        "إضافة ميزة التصدير لصيغ متعددة",
      ],
    },
  };

  const comments = [
    {
      id: 1,
      author: "د. محمد الأحمد",
      university: "جامعة الملك سعود",
      comment:
        "مشروع رائع ومتميز! الفكرة مبدعة والتنفيذ احترافي. أنصح بتطوير تطبيق محمول مصاحب.",
      rating: 5,
      date: "2024-01-20",
      likes: 12,
    },
    {
      id: 2,
      author: "أحمد عبدالله",
      university: "جامعة الملك عبدالعزيز",
      comment:
        "استفدت كثيراً من هذا المشروع في بحثي. الكود منظم والتوثيق ممتاز.",
      rating: 4,
      date: "2024-01-18",
      likes: 8,
    },
    {
      id: 3,
      author: "فاطمة الزهراني",
      university: "جامعة الملك فهد",
      comment: "هل يمكن تطبيق نفس الفكرة على مكتبات المدارس؟ مشروع ملهم جداً!",
      rating: 5,
      date: "2024-01-16",
      likes: 5,
    },
  ];

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission
    console.log("Comment submitted:", { comment, rating });
    setComment("");
    setRating(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 space-x-reverse mb-6 text-sm text-gray-500">
          <Link to="/" className="hover:text-primary-600">
            الرئيسية
          </Link>
          <span>/</span>
          <Link to="/explore" className="hover:text-primary-600">
            تصفح المشاريع
          </Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">تفاصيل المشروع</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Header */}
            <Card className="gradient-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="font-medium">{project.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <GraduationCap className="w-4 h-4 text-gray-400" />
                      <span>{project.university}</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <Badge variant="secondary" className="mb-4">
                    {project.major}
                  </Badge>
                </div>

                <div className="flex items-center space-x-2 space-x-reverse">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsLiked(!isLiked)}
                    className={isLiked ? "text-red-500 border-red-500" : ""}
                  >
                    <Heart
                      className={`w-4 h-4 ml-1 ${isLiked ? "fill-current" : ""}`}
                    />
                    {project.likes + (isLiked ? 1 : 0)}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 ml-1" />
                    مشاركة
                  </Button>
                </div>
              </div>

              {/* Project Image */}
              <div className="aspect-video bg-gradient-secondary rounded-lg mb-6 flex items-center justify-center">
                <Play className="w-16 h-16 text-white" />
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-6 space-x-reverse text-sm text-gray-500">
                <div className="flex items-center space-x-1 space-x-reverse">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{project.rating}</span>
                </div>
                <div className="flex items-center space-x-1 space-x-reverse">
                  <Eye className="w-4 h-4" />
                  <span>{project.views} مشاهدة</span>
                </div>
                <div className="flex items-center space-x-1 space-x-reverse">
                  <MessageCircle className="w-4 h-4" />
                  <span>{project.comments} تعليق</span>
                </div>
                <div className="flex items-center space-x-1 space-x-reverse">
                  <Download className="w-4 h-4" />
                  <span>{project.downloadCount} تحميل</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Project Description */}
            <Card className="gradient-card p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                وصف المشروع
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                {project.description.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>

            {/* AI Analysis */}
            <Card className="gradient-card p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                <Lightbulb className="w-6 h-6 ml-2 text-accent-500" />
                تحليل الذكاء الاصطناعي
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Strengths */}
                <div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 ml-1" />
                    نقاط القوة
                  </h3>
                  <ul className="space-y-2">
                    {project.aiAnalysis.strengths.map((strength, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                      >
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-2 flex-shrink-0"></span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses */}
                <div>
                  <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-3 flex items-center">
                    <AlertCircle className="w-4 h-4 ml-1" />
                    نقاط التحسين
                  </h3>
                  <ul className="space-y-2">
                    {project.aiAnalysis.weaknesses.map((weakness, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                      >
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 ml-2 flex-shrink-0"></span>
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Suggestions */}
                <div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center">
                    <Lightbulb className="w-4 h-4 ml-1" />
                    اقتراحات التطوير
                  </h3>
                  <ul className="space-y-2">
                    {project.aiAnalysis.suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 ml-2 flex-shrink-0"></span>
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Comments Section */}
            <Card className="gradient-card p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                التعليقات والتقييمات
              </h2>

              {/* Add Comment Form */}
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  أضف تعليقك وتقييمك
                </h3>
                <form onSubmit={handleSubmitComment} className="space-y-4">
                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      التقييم
                    </label>
                    <div className="flex items-center space-x-1 space-x-reverse">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className={`p-1 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
                        >
                          <Star className="w-6 h-6 fill-current" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      التعليق
                    </label>
                    <Textarea
                      placeholder="شاركنا رأيك حول هذا المشروع..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="text-right"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="btn-gradient text-white">
                    <Send className="w-4 h-4 ml-2" />
                    إرسال التعليق
                  </Button>
                </form>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {comment.author}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {comment.university} • {comment.date}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1 space-x-reverse">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${star <= comment.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {comment.comment}
                    </p>
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="w-4 h-4 ml-1" />
                      {comment.likes}
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Download Section */}
            <Card className="gradient-card p-6">
              <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                تحميل المشروع
              </h3>
              <div className="space-y-3">
                {project.files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-sm">{file.name}</p>
                      <p className="text-xs text-gray-500">{file.size}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Links Section */}
            <Card className="gradient-card p-6">
              <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                روابط مفيدة
              </h3>
              <div className="space-y-3">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 space-x-reverse p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <link.icon className="w-5 h-5 text-primary-600" />
                    <span className="font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Contact Author */}
            <Card className="gradient-card p-6">
              <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                تواصل مع المؤلف
              </h3>
              <Link to="/messages">
                <Button className="w-full btn-gradient text-white">
                  <MessageCircle className="w-4 h-4 ml-2" />
                  ابدأ محادثة
                </Button>
              </Link>
            </Card>

            {/* Related Projects */}
            <Card className="gradient-card p-6">
              <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                مشاريع مشابهة
              </h3>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <h4 className="font-medium text-sm mb-1">
                      نظام إدارة الطلاب الذكي
                    </h4>
                    <p className="text-xs text-gray-500 mb-2">
                      جامعة الملك عبدالعزيز
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 space-x-reverse text-xs">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span>4.5</span>
                      </div>
                      <Link
                        to={`/project/${i + 1}`}
                        className="text-primary-600 text-xs hover:underline"
                      >
                        عرض
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
