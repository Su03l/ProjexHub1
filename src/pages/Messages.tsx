import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import {
  MessageCircle,
  Send,
  Search,
  User,
  Online,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  Image,
  File,
} from "lucide-react";

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for conversations
  const conversations = [
    {
      id: 1,
      name: "د. محمد الأحمد",
      university: "جامعة الملك سعود",
      avatar: "/placeholder.svg",
      lastMessage: "شكراً لك على المشروع الرائع، هل يمكنك إرسال الكود المصدري؟",
      timestamp: "10:30 ص",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "سارة أحمد محمد",
      university: "جامعة الملك عبدالعزيز",
      avatar: "/placeholder.svg",
      lastMessage: "مرحباً، أعجبني مشروعك في الذكاء الاصطناعي",
      timestamp: "أمس",
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: "أحمد عبدالله الزهراني",
      university: "جامعة الملك فهد",
      avatar: "/placeholder.svg",
      lastMessage: "هل يمكنني الاستفادة من مشروعك في بحثي؟",
      timestamp: "أمس",
      unread: 1,
      online: true,
    },
    {
      id: 4,
      name: "فاطمة علي الحربي",
      university: "جامعة الملك خالد",
      avatar: "/placeholder.svg",
      lastMessage: "ممتاز! أتطلع لرؤية المزيد من أعمالك",
      timestamp: "2 أيام",
      unread: 0,
      online: false,
    },
    {
      id: 5,
      name: "عبدالرحمن خالد العتيبي",
      university: "جامعة نجران",
      avatar: "/placeholder.svg",
      lastMessage: "شكراً للمساعدة في مشروع التجارة الإلكترونية",
      timestamp: "3 أيام",
      unread: 0,
      online: true,
    },
  ];

  // Mock data for messages
  const messages = [
    {
      id: 1,
      senderId: 1,
      senderName: "د. محمد الأحمد",
      content: "مرحباً، شاهدت مشروعك عن نظام إدارة المكتبات وأعجبني كثيراً",
      timestamp: "09:15 ص",
      type: "text",
    },
    {
      id: 2,
      senderId: "me",
      senderName: "أنت",
      content: "شكراً لك دكتور محمد، أسعدني إعجابك بالمشروع",
      timestamp: "09:18 ص",
      type: "text",
    },
    {
      id: 3,
      senderId: 1,
      senderName: "د. محمد الأحمد",
      content:
        "الفكرة مبدعة والتنفيذ احترافي. هل استخدمت أي مكتبات خاصة للذكاء الاصطناعي؟",
      timestamp: "09:20 ص",
      type: "text",
    },
    {
      id: 4,
      senderId: "me",
      senderName: "أنت",
      content: "نعم، استخدمت TensorFlow للتوصيات الذكية وOpenCV لمعالجة الصور",
      timestamp: "09:25 ص",
      type: "text",
    },
    {
      id: 5,
      senderId: 1,
      senderName: "د. محمد الأحمد",
      content: "ممتاز! هل يمكنك مشاركة بعض التفاصيل التقنية؟",
      timestamp: "09:28 ص",
      type: "text",
    },
    {
      id: 6,
      senderId: "me",
      senderName: "أنت",
      content: "بالطبع، سأرسل لك الوثائق التقنية",
      timestamp: "09:30 ص",
      type: "text",
    },
    {
      id: 7,
      senderId: 1,
      senderName: "د. محمد الأحمد",
      content: "شكراً لك على المشروع الرائع، هل يمكنك إرسال الكود المصدري؟",
      timestamp: "10:30 ص",
      type: "text",
    },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle sending message
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const selectedConversation = conversations.find(
    (conv) => conv.id === selectedChat,
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gradient mb-4">الرسائل</h1>
          <p className="text-gray-600 dark:text-gray-400">
            تواصل مع المجتمع الأكاديمي
          </p>
        </div>

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

            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedChat(conversation.id)}
                  className={`p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer transition-colors ${
                    selectedChat === conversation.id
                      ? "bg-primary-50 dark:bg-primary-900/20"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      {conversation.online && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium text-gray-900 dark:text-white truncate">
                          {conversation.name}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {conversation.timestamp}
                        </span>
                      </div>

                      <p className="text-xs text-gray-500 mb-1">
                        {conversation.university}
                      </p>

                      <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                        {conversation.lastMessage}
                      </p>

                      {conversation.unread > 0 && (
                        <Badge className="mt-2 bg-primary-500 text-white">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Chat Area */}
          <Card className="gradient-card lg:col-span-2 flex flex-col">
            {selectedConversation ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      {selectedConversation.online && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {selectedConversation.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {selectedConversation.online ? "متصل الآن" : "غير متصل"}{" "}
                        • {selectedConversation.university}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Button variant="ghost" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Video className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.senderId === "me" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md ${msg.senderId === "me" ? "order-1" : "order-2"}`}
                      >
                        <div
                          className={`p-3 rounded-lg ${
                            msg.senderId === "me"
                              ? "bg-primary-500 text-white"
                              : "bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600"
                          }`}
                        >
                          <p className="text-sm">{msg.content}</p>
                        </div>
                        <p
                          className={`text-xs text-gray-500 mt-1 ${msg.senderId === "me" ? "text-left" : "text-right"}`}
                        >
                          {msg.timestamp}
                        </p>
                      </div>

                      {msg.senderId !== "me" && (
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center ml-2 order-1 flex-shrink-0">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <form
                    onSubmit={handleSendMessage}
                    className="flex items-center space-x-2 space-x-reverse"
                  >
                    <Button type="button" variant="ghost" size="sm">
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    <Button type="button" variant="ghost" size="sm">
                      <Image className="w-4 h-4" />
                    </Button>

                    <Input
                      placeholder="اكتب رسالتك..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex-1 text-right"
                    />

                    <Button type="button" variant="ghost" size="sm">
                      <Smile className="w-4 h-4" />
                    </Button>

                    <Button type="submit" className="btn-gradient text-white">
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                    اختر محادثة للبدء
                  </h3>
                  <p className="text-gray-500">
                    اختر محادثة من القائمة لعرض الرسائل
                  </p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
