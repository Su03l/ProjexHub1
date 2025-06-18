import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Card } from './card';
import { Button } from './button';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
          <Card className="gradient-card p-8 text-center max-w-md">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              حدث خطأ غير متوقع
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              نعتذر، حدث خطأ في التطبيق. يرجى المحاولة مرة أخرى.
            </p>
            <Button
              onClick={() => window.location.reload()}
              className="btn-gradient text-white"
            >
              إعادة تحميل الصفحة
            </Button>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}