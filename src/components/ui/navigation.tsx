import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./button";
import { ThemeToggle } from "./theme-toggle";
import {
  Search,
  Bell,
  MessageCircle,
  User,
  Home,
  Upload,
  Trophy,
  Menu,
  X,
} from "lucide-react";

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate login when clicking login button (for demo purposes)
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const navItems = [
    { href: "/", label: "الرئيسية", icon: Home },
    { href: "/explore", label: "تصفح المشاريع", icon: Search },
    { href: "/upload", label: "رفع مشروع", icon: Upload },
    { href: "/competition", label: "المسابقة", icon: Trophy },
    ...(isLoggedIn
      ? [{ href: "/messages", label: "الرسائل", icon: MessageCircle }]
      : []),
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-2xl font-bold text-gradient">ProjexHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center space-x-2 space-x-reverse px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-primary-600 bg-primary-50 dark:bg-primary-900/20"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <ThemeToggle />

            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent-500 rounded-full text-xs"></span>
                </Button>
                <Button variant="ghost" size="sm">
                  <User className="w-5 h-5" />
                </Button>
              </>
            ) : (
              <div className="flex items-center space-x-2 space-x-reverse">
                <Link to="/login">
                  <Button variant="ghost" size="sm" onClick={handleLogin}>
                    تسجيل الدخول
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="btn-gradient text-white">
                    إنشاء حسا��
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`flex items-center space-x-3 space-x-reverse px-3 py-2 rounded-lg text-sm font-medium ${
                      isActive
                        ? "text-primary-600 bg-primary-50 dark:bg-primary-900/20"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
