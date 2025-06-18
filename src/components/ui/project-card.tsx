import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './card';
import { Button } from './button';
import { Badge } from './badge';
import { Star, Eye, MessageCircle, User, GraduationCap } from 'lucide-react';
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card className={`gradient-card overflow-hidden hover:shadow-lg transition-all duration-300 group ${className}`}>
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        {project.featured && (
          <div className="absolute top-3 right-3 bg-accent-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            مميز
          </div>
        )}
        <div className="absolute bottom-3 left-3 flex space-x-2 space-x-reverse">
          <span className="bg-white/90 text-gray-700 px-2 py-1 rounded text-xs">
            {project.views} مشاهدة
          </span>
          <span className="bg-white/90 text-gray-700 px-2 py-1 rounded text-xs">
            ⭐ {project.rating}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Project Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors line-clamp-2">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Author & University */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 space-x-reverse mb-1">
            <User className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {project.author}
            </span>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <GraduationCap className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {project.university} • {project.major}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs"
            >
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center space-x-1 space-x-reverse">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>{project.rating}</span>
          </div>
          <div className="flex items-center space-x-1 space-x-reverse">
            <MessageCircle className="w-4 h-4" />
            <span>{project.comments}</span>
          </div>
          <div className="flex items-center space-x-1 space-x-reverse">
            <Eye className="w-4 h-4" />
            <span>{project.views}</span>
          </div>
          <span>{project.year}</span>
        </div>

        {/* Action Button */}
        <Link to={`/project/${project.id}`} className="w-full">
          <Button className="w-full btn-gradient text-white">
            عرض المشروع
          </Button>
        </Link>
      </div>
    </Card>
  );
}