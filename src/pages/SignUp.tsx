import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { LoadingSpinner } from "../components/ui/loading-spinner";
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
import { SAUDI_UNIVERSITIES, ACADEMIC_MAJORS, EDUCATION_LEVELS } from "@/lib/constants";
import { FormData } from "@/lib/types";

export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
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

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "الاسم الأول مطلوب";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "الاسم الأخير مطلوب";
    }

    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }

    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة";
    } else if (formData.password.length < 6) {
      newErrors.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "كلمات المرور غير متطابقة";
    }

    if (!formData.university) {
      newErrors.university = "الجامعة مطلوبة";
    }

    if (!formData.major) {
      newErrors.major = "التخصص مطلوب";
    }

    if (!formData.educationLevel) {
      newErrors.educationLevel = "المرحلة الدراسية مطلوبة";
    }

    if (!formData.isCurrentlyStudying) {
      newErrors.isCurrentlyStudying = "الحالة الدراسية مطلوبة";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Form submitted:", formData);
      alert("تم إنشاء الحساب بنجاح!");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert("حدث خطأ أثناء إنشاء الحساب. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsLoading(false);
    }
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
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
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  className="text-right"
                  disabled={isLoading}
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500">{errors.firstName}</p>
                )}
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
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  className="text-right"
                  disabled={isLoading}
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500">{errors.lastName}</p>
                )}
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
                onChange={(e) => updateFormData("email", e.target.value)}
                className="text-right"
                disabled={isLoading}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
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
                  onChange={(e) => updateFormData("password", e.target.value)}
                  className="text-right pr-10"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
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
                onChange={(e) => updateFormData("confirmPassword", e.target.value)}
                className="text-right"
                disabled={isLoading}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-500">{errors.confirmPassword}</p>
              )}
            </div>

            {/* University */}
            <div className="space-y-2">
              <Label className="flex items-center space-x-2 space-x-reverse">
                <GraduationCap className="w-4 h-4" />
                <span>الجامعة</span>
              </Label>
              <Select
                onValueChange={(value) => updateFormData("university", value)}
                disabled={isLoading}
              >
                <SelectTrigger className="text-right">
                  <SelectValue placeholder="اختر جامعتك" />
                </SelectTrigger>
                <SelectContent>
                  {SAUDI_UNIVERSITIES.map((university) => (
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
              {errors.university && (
                <p className="text-sm text-red-500">{errors.university}</p>
              )}
            </div>

            {/* Major */}
            <div className="space-y-2">
              <Label className="flex items-center space-x-2 space-x-reverse">
                <BookOpen className="w-4 h-4" />
                <span>التخصص</span>
              </Label>
              <Select
                onValueChange={(value) => updateFormData("major", value)}
                disabled={isLoading}
              >
                <SelectTrigger className="text-right">
                  <SelectValue placeholder="اختر تخصصك" />
                </SelectTrigger>
                <SelectContent>
                  {ACADEMIC_MAJORS.map((major) => (
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
              {errors.major && (
                <p className="text-sm text-red-500">{errors.major}</p>
              )}
            </div>

            {/* Education Level */}
            <div className="space-y-2">
              <Label className="flex items-center space-x-2 space-x-reverse">
                <GraduationCap className="w-4 h-4" />
                <span>المرحلة الدراسية</span>
              </Label>
              <Select
                onValueChange={(value) => updateFormData("educationLevel", value)}
                disabled={isLoading}
              >
                <SelectTrigger className="text-right">
                  <SelectValue placeholder="اختر مرحلتك الدراسية" />
                </SelectTrigger>
                <SelectContent>
                  {EDUCATION_LEVELS.map((level) => (
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
              {errors.educationLevel && (
                <p className="text-sm text-red-500">{errors.educationLevel}</p>
              )}
            </div>

            {/* Currently Studying */}
            <div className="space-y-2">
              <Label className="flex items-center space-x-2 space-x-reverse">
                <BookOpen className="w-4 h-4" />
                <span>الحالة الدراسية</span>
              </Label>
              <Select
                onValueChange={(value) => updateFormData("isCurrentlyStudying", value)}
                disabled={isLoading}
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
              {errors.isCurrentlyStudying && (
                <p className="text-sm text-red-500">{errors.isCurrentlyStudying}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full btn-gradient text-white py-3"
              disabled={isLoading}
            >
              {isLoading ? (
                <LoadingSpinner size="sm" />
              ) : (
                "إنشاء الحساب"
              )}
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