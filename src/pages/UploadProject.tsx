import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Upload,
  FileText,
  Image,
  Video,
  Github,
  ExternalLink,
  X,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Sparkles,
} from "lucide-react";

export default function UploadProject() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    major: "",
    year: "",
    skills: [],
    githubUrl: "",
    demoUrl: "",
    videoUrl: "",
  });

  const [files, setFiles] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const majors = [
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
  ];

  const academicYears = ["2024", "2023", "2022", "2021", "2020"];

  const skillsList = [
    "React",
    "Vue.js",
    "Angular",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Python",
    "Django",
    "Flask",
    "Java",
    "Spring Boot",
    "C#",
    ".NET",
    "PHP",
    "Laravel",
    "Flutter",
    "React Native",
    "Swift",
    "Kotlin",
    "Unity",
    "Unreal Engine",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "OpenCV",
    "NLP",
    "Machine Learning",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Google Cloud",
    "Git",
    "GitHub",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Sass",
    "Bootstrap",
    "Tailwind CSS",
    "Figma",
    "Adobe XD",
    "Photoshop",
    "Illustrator",
  ];

  const handleSkillSelect = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const removeSkill = (skillToRemove) => {
    setSelectedSkills(
      selectedSkills.filter((skill) => skill !== skillToRemove),
    );
  };

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles([...files, ...uploadedFiles]);
  };

  const removeFile = (indexToRemove) => {
    setFiles(files.filter((_, index) => index !== indexToRemove));
  };

  const analyzeProject = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAiAnalysis({
        score: 85,
        strengths: [
          "عنوان واضح ومعبر عن المشروع",
          "وصف مفصل يغطي جوانب المشروع",
          "استخدام تقنيات حديثة ومتنوعة",
          "تنظيم جيد للملفات والمرفقات",
        ],
        suggestions: [
          "أضف المزيد من الصور التوضيحية",
          "قم بتضمين فيديو شرح للمشروع",
          "أضف رابط للكود المصدري على GitHub",
          "تأكد من وجود ملف README شامل",
        ],
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Project submitted:", { formData, files, selectedSkills });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gradient mb-4">
            رفع مشروع جديد
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            شارك مشروعك مع مجتمع ProjexHub واحصل على تقييمات وملاحظات قيمة
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card className="gradient-card p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              المعلومات الأساسية
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Title */}
              <div className="md:col-span-2">
                <Label htmlFor="title">عنوان المشروع *</Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="أدخل عنوان مشروعك"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="text-right"
                  required
                />
              </div>

              {/* Major */}
              <div>
                <Label>التخصص *</Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, major: value })
                  }
                >
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر تخصصك" />
                  </SelectTrigger>
                  <SelectContent>
                    {majors.map((major) => (
                      <SelectItem
                        key={major}
                        value={major}
                        className="text-right"
                      >
                        {major}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Academic Year */}
              <div>
                <Label>السنة الدراسية *</Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, year: value })
                  }
                >
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر السنة" />
                  </SelectTrigger>
                  <SelectContent>
                    {academicYears.map((year) => (
                      <SelectItem
                        key={year}
                        value={year}
                        className="text-right"
                      >
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Project Description */}
              <div className="md:col-span-2">
                <Label htmlFor="description">وصف المشروع *</Label>
                <Textarea
                  id="description"
                  placeholder="اكتب وصفاً مفصلاً عن مشروعك، أهدافه، والمشاكل التي يحلها..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="text-right"
                  rows={6}
                  required
                />
              </div>
            </div>
          </Card>

          {/* Skills and Technologies */}
          <Card className="gradient-card p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              التقنيات والمهارات المستخدمة
            </h2>

            {/* Selected Skills */}
            {selectedSkills.length > 0 && (
              <div className="mb-4">
                <Label>المهارات المختارة:</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedSkills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm"
                    >
                      <span>{skill}</span>
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="mr-2 hover:text-red-500"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Selection */}
            <div>
              <Label>اختر التقنيات المستخدمة:</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-2 max-h-60 overflow-y-auto">
                {skillsList.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => handleSkillSelect(skill)}
                    disabled={selectedSkills.includes(skill)}
                    className={`p-2 text-sm rounded-lg border transition-colors ${
                      selectedSkills.includes(skill)
                        ? "bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 border-primary-300"
                        : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-600"
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </Card>

          {/* Files and Media */}
          <Card className="gradient-card p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              الملفات والوسائط
            </h2>

            {/* File Upload */}
            <div className="mb-6">
              <Label>رفع الملفات (PDF, PPT, ZIP, RAR)</Label>
              <div className="mt-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  اسحب الملفات هنا أو انقر للاختيار
                </p>
                <input
                  type="file"
                  multiple
                  accept=".pdf,.ppt,.pptx,.zip,.rar,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <Label htmlFor="file-upload">
                  <Button type="button" variant="outline" asChild>
                    <span>اختيار الملفات</span>
                  </Button>
                </Label>
              </div>

              {/* Uploaded Files */}
              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <FileText className="w-5 h-5 text-blue-500" />
                        <div>
                          <p className="font-medium text-sm">{file.name}</p>
                          <p className="text-xs text-gray-500">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label
                  htmlFor="githubUrl"
                  className="flex items-center space-x-2 space-x-reverse"
                >
                  <Github className="w-4 h-4" />
                  <span>رابط GitHub</span>
                </Label>
                <Input
                  id="githubUrl"
                  type="url"
                  placeholder="https://github.com/username/project"
                  value={formData.githubUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, githubUrl: e.target.value })
                  }
                  className="text-right"
                />
              </div>

              <div>
                <Label
                  htmlFor="demoUrl"
                  className="flex items-center space-x-2 space-x-reverse"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>رابط العرض المباشر</span>
                </Label>
                <Input
                  id="demoUrl"
                  type="url"
                  placeholder="https://project-demo.com"
                  value={formData.demoUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, demoUrl: e.target.value })
                  }
                  className="text-right"
                />
              </div>

              <div>
                <Label
                  htmlFor="videoUrl"
                  className="flex items-center space-x-2 space-x-reverse"
                >
                  <Video className="w-4 h-4" />
                  <span>رابط فيديو الشرح</span>
                </Label>
                <Input
                  id="videoUrl"
                  type="url"
                  placeholder="https://youtube.com/watch?v=..."
                  value={formData.videoUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, videoUrl: e.target.value })
                  }
                  className="text-right"
                />
              </div>
            </div>
          </Card>

          {/* AI Analysis */}
          <Card className="gradient-card p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <Sparkles className="w-6 h-6 ml-2 text-accent-500" />
              تحليل المشروع بالذكاء الاصطناعي
            </h2>

            {!aiAnalysis && !isAnalyzing && (
              <div className="text-center py-8">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  احصل على تحليل فوري لمشروعك وتوصيات لتحسينه
                </p>
                <Button
                  type="button"
                  onClick={analyzeProject}
                  className="btn-gradient text-white"
                >
                  <Lightbulb className="w-4 h-4 ml-2" />
                  تحليل المشروع
                </Button>
              </div>
            )}

            {isAnalyzing && (
              <div className="text-center py-8">
                <div className="animate-spin w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400">
                  جاري تحليل مشروعك...
                </p>
              </div>
            )}

            {aiAnalysis && (
              <div className="space-y-6">
                {/* Score */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {aiAnalysis.score}/100
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    درجة جودة المشروع
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Strengths */}
                  <div>
                    <h3 className="font-semibold text-green-600 dark:text-green-400 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 ml-1" />
                      نقاط القوة
                    </h3>
                    <ul className="space-y-2">
                      {aiAnalysis.strengths.map((strength, index) => (
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

                  {/* Suggestions */}
                  <div>
                    <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center">
                      <AlertCircle className="w-4 h-4 ml-1" />
                      اقتراحات التحسين
                    </h3>
                    <ul className="space-y-2">
                      {aiAnalysis.suggestions.map((suggestion, index) => (
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
              </div>
            )}
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              className="btn-gradient text-white px-12 py-3 text-lg"
            >
              <Upload className="w-5 h-5 ml-2" />
              نشر المشروع
            </Button>
            <p className="text-sm text-gray-500 mt-2">
              سيتم مراجعة المشروع قبل النشر
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
