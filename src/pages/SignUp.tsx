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
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    university: "",
    major: "",
    year: "",
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
    "كلية الأمير سلطان العسكرية للعلوم الصحية",
    "جامعة الملك عبدالله للعلوم والتقنية",
  ];

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
    "التجارة الإلكترونية",
    "إدارة الأعمال التقنية",
    "تصميم تجربة المستخدم",
    "الجرافيك والوسائط المتعددة",
    "هندسة الطيران",
    "الهندسة المدنية",
    "الهندسة الكهربائية",
    "الهندسة الميكانيكية",
    "الهندسة الكيميائية",
    "الهندسة الصناعية",
    "الطب",
    "طب الأسنان",
    "الصيدلة",
    "التمريض",
    "العلوم الطبية التطبيقية",
    "الفيزياء",
    "الكيمياء",
    "الأحياء",
    "الرياضيات",
    "الإحصاء",
    "إدارة الأعمال",
    "المحاسبة",
    "التمويل",
    "التسويق",
    "الموارد البشرية",
    "القانون",
    "العلوم السياسية",
    "العلاقات الدولية",
    "الإعلام والاتصال",
    "الصحافة",
    "التصميم الجرافيكي",
    "العمارة",
    "التخطيط العمراني",
    "علم النفس",
    "علم الاجتماع",
    "الخدمة الاجتماعية",
    "التاريخ",
    "الجغرافيا",
    "الأدب العربي",
    "اللغة الإنجليزية",
    "الترجمة",
  ];

  const academicYears = [
    "السنة الأولى",
    "السنة الثانية",
    "السنة الثالثة",
    "السنة الرابعة",
    "السنة الخامسة",
    "الماجستير",
    "الدكتوراه",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-2xl mx-auto">
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
            {/* Full Name */}
            <div className="space-y-2">
              <Label
                htmlFor="fullName"
                className="flex items-center space-x-2 space-x-reverse"
              >
                <User className="w-4 h-4" />
                <span>الاسم الكامل</span>
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="أدخل اسمك الكامل"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="text-right"
                required
              />
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

            {/* Academic Year */}
            <div className="space-y-2">
              <Label className="flex items-center space-x-2 space-x-reverse">
                <GraduationCap className="w-4 h-4" />
                <span>السنة الدراسية</span>
              </Label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, year: value })
                }
              >
                <SelectTrigger className="text-right">
                  <SelectValue placeholder="اختر سنتك الدراسية" />
                </SelectTrigger>
                <SelectContent>
                  {academicYears.map((year) => (
                    <SelectItem key={year} value={year} className="text-right">
                      {year}
                    </SelectItem>
                  ))}
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
                لديك حساب بالفعل؟{" "}
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
