import { useState, useEffect, createContext, useContext } from 'react';
import { User } from '@/lib/types';
import { useLocalStorage } from './useLocalStorage';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: any) => Promise<boolean>;
  updateProfile: (userData: Partial<User>) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function useAuthState() {
  const [user, setUser] = useLocalStorage<User | null>('user', null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!user);

  useEffect(() => {
    setIsAuthenticated(!!user);
  }, [user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      const mockUser: User = {
        id: '1',
        firstName: 'مستخدم',
        lastName: 'تجريبي',
        email,
        university: 'جامعة الملك سعود',
        major: 'علوم الحاسب',
        educationLevel: 'بكالوريوس',
        isCurrentlyStudying: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      setUser(mockUser);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (userData: any): Promise<boolean> => {
    try {
      // Simulate API call
      const newUser: User = {
        id: Date.now().toString(),
        ...userData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      setUser(newUser);
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const updateProfile = async (userData: Partial<User>): Promise<boolean> => {
    try {
      if (user) {
        const updatedUser = { ...user, ...userData, updatedAt: new Date() };
        setUser(updatedUser);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Profile update error:', error);
      return false;
    }
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
    register,
    updateProfile,
  };
}