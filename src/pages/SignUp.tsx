import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  GraduationCap,
  BookOpen,
} from "lucide-react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    university: "",
    major: "",
    educationLevel: "",
    isCurrentlyStudying: "",
  });

  const saudiUniversities = [
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
    "كلية الأمير سلطان العسكرية للعلوم الصحية",
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

  const educationLevels = [
    "بكالوريوس",
    "ماجستير",
    "دكتوراه",
    "دبلوم عالي",
    "دبلوم",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("تم إنشاء الحساب بنجاح!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="w-full max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gradient mb-4">
            إنشاء حساب جديد
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            انضم إلى مجتمع ProjexHub وابدأ في مشاركة مشاريعك
          </p>
        </div>

        <Card className="gradient-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="firstName"
                  className="flex items-center space-x-2 space-x-reverse"
                >
                  <User className="w-4 h-4" />
                  <span>الاسم الأول</span>
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="أدخل اسمك الأول"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="text-right"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="lastName"
                  className="flex items-center space-x-2 space-x-reverse"
                >
                  <User className="w-4 h-4" />
                  <span>الاسم الأخير</span>
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="أدخل اسمك الأخير"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="text-right"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="flex items-center space-x-2 space-x-reverse"
              >
                <Mail className="w-4 h-4" />
                <span>البريد الإلكتروني</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="example@university.edu.sa"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="text-right"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="flex items-center space-x-2 space-x-reverse"
              >
                <Lock className="w-4 h-4" />
                <span>كلمة المرور</span>
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="أدخل كلمة مرور قوية"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="text-right pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className="flex items-center space-x-2 space-x-reverse"
              >
                <Lock className="w-4 h-4" />
                <span>تأكيد كلمة المرور</span>
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="أعد إدخال كلمة المرور"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="text-right"
                required
              />
            </div>

            {/* University */}
            <div className="space-y-2">
              <Label className="flex items-center space-x-2 space-x-reverse">
                <GraduationCap className="w-4 h-4" />
                <span>الجامعة</span>
              </Label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, university: value })
                }
              >
                <SelectTrigger className="text-right">
                  <SelectValue placeholder="اختر جامعتك" />
                </SelectTrigger>
                <SelectContent>
                  {saudiUniversities.map((university) => (
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
            </div>

            {/* Major */}
            <div className="space-y-2">
              <Label className="flex items-center space-x-2 space-x-reverse">
                <BookOpen className="w-4 h-4" />
                <span>التخصص</span>
              </Label>
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

            {/* Education Level */}
            <div className="space-y-2">
              <Label className="flex items-center space-x-2 space-x-reverse">
                <GraduationCap className="w-4 h-4" />
                <span>المرحلة الدراسية</span>
              </Label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, educationLevel: value })
                }
              >
                <SelectTrigger className="text-right">
                  <SelectValue placeholder="اختر مرحلتك الدراسية" />
                </SelectTrigger>
                <SelectContent>
                  {educationLevels.map((level) => (
                    <SelectItem
                      key={level}
                      value={level}
                      className="text-right"
                    >
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Currently Studying */}
            <div className="space-y-2">
              <Label className="flex items-center space-x-2 space-x-reverse">
                <BookOpen className="w-4 h-4" />
                <span>الحالة الدراسية</span>
              </Label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, isCurrentlyStudying: value })
                }
              >
                <SelectTrigger className="text-right">
                  <SelectValue placeholder="اختر حالتك الدراسية" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="studying" className="text-right">
                    طالب حالياً
                  </SelectItem>
                  <SelectItem value="graduated" className="text-right">
                    متخرج
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full btn-gradient text-white py-3"
            >
              إنشاء الحساب
            </Button>

            {/* Login Link */}
            <div className="text-center">
              <span className="text-gray-600 dark:text-gray-400">
                هل لديك حساب؟{" "}
              </span>
              <Link
                to="/login"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                تسجيل الدخول
              </Link>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
