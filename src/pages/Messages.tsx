import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { MessageCircle, Send, Search, Plus, Users, Mail } from "lucide-react";

export default function Messages() {
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 w-full">
      <div className="w-full px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gradient mb-4">الرسائل</h1>
          <p className="text-gray-600 dark:text-gray-400">
            تواصل مع المجتمع الأكاديمي
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
            {/* Conversations List */}
            <Card className="gradient-card lg:col-span-1 flex flex-col">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="ابحث في المحادثات..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-10 text-right"
                  />
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center p-8">
                <div className="text-center">
                  <Mail className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                    لا توجد محادثات
                  </h3>
                  <p className="text-gray-500 mb-4">
                    ابدأ محادثة جديدة للتواصل مع أصحاب المشاريع
                  </p>
                  <Button className="btn-gradient text-white">
                    <Plus className="w-4 h-4 ml-2" />
                    محادثة جديدة
                  </Button>
                </div>
              </div>
            </Card>

            {/* Chat Area */}
            <Card className="gradient-card lg:col-span-2 flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <MessageCircle className="w-24 h-24 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                    مرحباً بك في نظام الرسائل
                  </h3>
                  <p className="text-gray-500 mb-8 max-w-md">
                    اختر محادثة من القائمة أو ابدأ محادثة جديدة للتواصل مع أصحاب
                    المشاريع في المنصة
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="btn-gradient text-white">
                      <MessageCircle className="w-4 h-4 ml-2" />
                      بدء محادثة جديدة
                    </Button>
                    <Button variant="outline">
                      <Users className="w-4 h-4 ml-2" />
                      تصفح المشاريع
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Coming Soon Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="gradient-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                رسائل فورية
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                تواصل مع أصحاب المشاريع في الوقت الفعلي
              </p>
            </Card>

            <Card className="gradient-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                مجموعات نقاش
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                انضم لمجموعات النقاش حسب التخصص
              </p>
            </Card>

            <Card className="gradient-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                إشعارات ذكية
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                احصل على إشعارات عند وصول رسائل جديدة
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
