import React from 'react';
import { Card } from './card';
import { Label } from './label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { SAUDI_UNIVERSITIES, ACADEMIC_MAJORS, ACADEMIC_YEARS } from '@/lib/constants';
import { FilterOptions } from '@/lib/types';

interface FilterSidebarProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
}

export function FilterSidebar({ filters, onFiltersChange }: FilterSidebarProps) {
  const updateFilter = (key: keyof FilterOptions, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <Card className="gradient-card p-6">
      <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
        تصفية النتائج
      </h3>

      <div className="space-y-4">
        {/* University Filter */}
        <div>
          <Label>الجامعة</Label>
          <Select
            onValueChange={(value) =>
              updateFilter('university', value === 'all-universities' ? '' : value)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="جميع الجامعات" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-universities">جميع الجامعات</SelectItem>
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
        </div>

        {/* Major Filter */}
        <div>
          <Label>التخصص</Label>
          <Select
            onValueChange={(value) =>
              updateFilter('major', value === 'all-majors' ? '' : value)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="جميع التخصصات" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-majors">جميع التخصصات</SelectItem>
              {ACADEMIC_MAJORS.map((major) => (
                <SelectItem key={major} value={major} className="text-right">
                  {major}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Year Filter */}
        <div>
          <Label>السنة</Label>
          <Select
            onValueChange={(value) =>
              updateFilter('year', value === 'all-years' ? '' : value)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="جميع السنوات" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-years">جميع السنوات</SelectItem>
              {ACADEMIC_YEARS.map((year) => (
                <SelectItem key={year} value={year} className="text-right">
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Sort By */}
        <div>
          <Label>ترتيب حسب</Label>
          <Select
            onValueChange={(value) => updateFilter('sortBy', value as FilterOptions['sortBy'])}
            defaultValue="newest"
          >
            <SelectTrigger>
              <SelectValue placeholder="ترتيب حسب" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest" className="text-right">
                الأحدث
              </SelectItem>
              <SelectItem value="rating" className="text-right">
                الأعلى تقييماً
              </SelectItem>
              <SelectItem value="views" className="text-right">
                الأكثر مشاهدة
              </SelectItem>
              <SelectItem value="comments" className="text-right">
                الأكثر تعليقاً
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
}