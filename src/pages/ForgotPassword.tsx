import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Mail, Lock, ArrowRight, CheckCircle } from "lucide-react";

export default function ForgotPassword() {
  const [step, setStep] = useState(1); // 1: email, 2: verification, 3: new password
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending verification code
    console.log("Sending verification code to:", email);
    setStep(2);
  };

  const handleVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = verificationCode.join("");
    if (code.length === 6) {
      console.log("Verification code:", code);
      setStep(3);
    }
  };

  const handlePasswordReset = (e: React.FormData) => {
    e.preventDefault();
    if (newPassword === confirmPassword && newPassword.length >= 6) {
      console.log("Password reset successful");
      alert("تم إعادة تعيين كلمة المرور بنجاح!");
      // Redirect to login
    }
  };

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const renderEmailStep = () => (
    <form onSubmit={handleEmailSubmit} className="space-y-6">
      <div className="text-center mb-6">
        <Mail className="w-16 h-16 text-primary-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          نسيت كلمة المرور؟
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          أدخل بريدك الإلكتروني وسنرسل لك رمز التحقق
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">البريد الإلكتروني</Label>
        <Input
          id="email"
          type="email"
          placeholder="example@university.edu.sa"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-right"
          required
        />
      </div>

      <Button type="submit" className="w-full btn-gradient text-white py-3">
        إرسال رمز التحقق
      </Button>

      <div className="text-center">
        <Link
          to="/login"
          className="text-primary-600 hover:text-primary-700 font-medium"
        >
          العودة لتسجيل الدخول
        </Link>
      </div>
    </form>
  );

  const renderVerificationStep = () => (
    <form onSubmit={handleVerificationSubmit} className="space-y-6">
      <div className="text-center mb-6">
        <Mail className="w-16 h-16 text-primary-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          تحقق من بريدك الإلكتروني
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          أدخل الرمز المكون من 6 أرقام المرسل إلى {email}
        </p>
      </div>

      <div className="space-y-2">
        <Label>رمز التحقق</Label>
        <div className="flex justify-center gap-3">
          {verificationCode.map((digit, index) => (
            <Input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              className="w-12 h-12 text-center text-lg font-bold"
              required
            />
          ))}
        </div>
      </div>

      <Button type="submit" className="w-full btn-gradient text-white py-3">
        تحقق من الرمز
      </Button>

      <div className="text-center">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="text-primary-600 hover:text-primary-700 font-medium"
        >
          إرسال رمز جديد
        </button>
      </div>
    </form>
  );

  const renderPasswordStep = () => (
    <form onSubmit={handlePasswordReset} className="space-y-6">
      <div className="text-center mb-6">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          إنشاء كلمة مرور جديدة
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          اختر كلمة مرور قوية لحماية حسابك
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="newPassword">كلمة المرور الجديدة</Label>
        <Input
          id="newPassword"
          type="password"
          placeholder="أدخل كلمة مرور قوية"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="text-right"
          minLength={6}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="أعد إدخال كلمة المرور"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="text-right"
          minLength={6}
          required
        />
      </div>

      <Button type="submit" className="w-full btn-gradient text-white py-3">
        إعادة تعيين كلمة المرور
      </Button>
    </form>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-12">
      <div className="w-full max-w-md px-4">
        <Card className="gradient-card p-8">
          {step === 1 && renderEmailStep()}
          {step === 2 && renderVerificationStep()}
          {step === 3 && renderPasswordStep()}
        </Card>
      </div>
    </div>
  );
}
