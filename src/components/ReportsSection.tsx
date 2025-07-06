
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Award, TrendingUp, Users, BookOpen, Download, Filter } from "lucide-react";

const ReportsSection = () => {
  const gradeDistribution = [
    { name: 'ممتاز', value: 45, color: '#10B981' },
    { name: 'جيد جداً', value: 30, color: '#3B82F6' },
    { name: 'جيد', value: 20, color: '#F59E0B' },
    { name: 'مقبول', value: 5, color: '#EF4444' }
  ];

  const monthlyProgress = [
    { month: 'سبتمبر', students: 35, pages: 840 },
    { month: 'أكتوبر', students: 38, pages: 920 },
    { month: 'نوفمبر', students: 42, pages: 1050 },
    { month: 'ديسمبر', students: 45, pages: 1180 },
    { month: 'يناير', students: 45, pages: 1250 }
  ];

  const teacherPerformance = [
    { name: 'الأستاذ خالد', students: 12, avgGrade: 4.5, completedPages: 890 },
    { name: 'الأستاذة عائشة', students: 15, avgGrade: 4.8, completedPages: 1240 },
    { name: 'الأستاذ محمد', students: 8, avgGrade: 4.2, completedPages: 580 },
    { name: 'الأستاذة مريم', students: 10, avgGrade: 4.3, completedPages: 720 }
  ];

  const topStudents = [
    { 
      name: "فاطمة علي الزهراني", 
      progress: 90, 
      pages: 545, 
      grade: "ممتاز", 
      teacher: "الأستاذة عائشة",
      recitations: 42
    },
    { 
      name: "أحمد محمد السالم", 
      progress: 75, 
      pages: 180, 
      grade: "ممتاز", 
      teacher: "الأستاذ خالد",
      recitations: 28
    },
    { 
      name: "عائشة سالم الغامدي", 
      progress: 60, 
      pages: 220, 
      grade: "جيد", 
      teacher: "الأستاذة مريم",
      recitations: 35
    },
    { 
      name: "يوسف حسن القرني", 
      progress: 45, 
      pages: 95, 
      grade: "جيد جداً", 
      teacher: "الأستاذ محمد",
      recitations: 18
    }
  ];

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "ممتاز": return "bg-green-100 text-green-800";
      case "جيد جداً": return "bg-blue-100 text-blue-800";
      case "جيد": return "bg-yellow-100 text-yellow-800";
      case "مقبول": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">التقارير والإحصائيات</h2>
          <p className="text-gray-600 mt-1">تحليل شامل لأداء الطلاب والمدرسين</p>
        </div>

        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="فترة التقرير" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">جميع الفترات</SelectItem>
              <SelectItem value="thisMonth">هذا الشهر</SelectItem>
              <SelectItem value="lastMonth">الشهر الماضي</SelectItem>
              <SelectItem value="thisYear">هذا العام</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            تصدير التقرير
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">إجمالي الطلاب</p>
                <p className="text-2xl font-bold text-gray-900">45</p>
                <p className="text-xs text-green-600">+3 هذا الشهر</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">الصفحات المحفوظة</p>
                <p className="text-2xl font-bold text-gray-900">1,250</p>
                <p className="text-xs text-green-600">+70 هذا الأسبوع</p>
              </div>
              <BookOpen className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">متوسط التقدير</p>
                <p className="text-2xl font-bold text-gray-900">4.4/5</p>
                <p className="text-xs text-green-600">ممتاز</p>
              </div>
              <Award className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">معدل الإنجاز</p>
                <p className="text-2xl font-bold text-gray-900">68%</p>
                <p className="text-xs text-green-600">+5% من الشهر الماضي</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
          <TabsTrigger value="students">تقارير الطلاب</TabsTrigger>
          <TabsTrigger value="teachers">تقارير المدرسين</TabsTrigger>
          <TabsTrigger value="performance">الأداء</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>توزيع التقديرات</CardTitle>
                <CardDescription>نسبة التقديرات المختلفة</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={gradeDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, value}) => `${name}: ${value}%`}
                    >
                      {gradeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>التقدم الشهري</CardTitle>
                <CardDescription>إجمالي الصفحات المحفوظة شهرياً</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyProgress}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="pages" 
                      stroke="#10B981" 
                      strokeWidth={3}
                      name="الصفحات"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="students" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>أفضل الطلاب أداءً</CardTitle>
              <CardDescription>الطلاب المتميزون حسب التقدم والتقديرات</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topStudents.map((student, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{student.name}</h4>
                        <p className="text-sm text-gray-600">{student.teacher}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-sm font-medium text-gray-900">{student.pages}</div>
                        <div className="text-xs text-gray-500">صفحة</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium text-gray-900">{student.recitations}</div>
                        <div className="text-xs text-gray-500">تسميع</div>
                      </div>
                      <div className="text-center min-w-20">
                        <Progress value={student.progress} className="h-2 mb-1" />
                        <div className="text-xs text-gray-500">{student.progress}%</div>
                      </div>
                      <Badge className={getGradeColor(student.grade)}>
                        {student.grade}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="teachers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>أداء المدرسين</CardTitle>
              <CardDescription>إحصائيات المدرسين وطلابهم</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={teacherPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="students" fill="#3B82F6" name="عدد الطلاب" />
                  <Bar dataKey="completedPages" fill="#10B981" name="الصفحات المكتملة" />
                </BarChart>
              </ResponsiveContainer>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                {teacherPerformance.map((teacher, index) => (
                  <div key={index} className="p-4 rounded-lg border">
                    <h4 className="font-medium text-gray-900 mb-2">{teacher.name}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>الطلاب:</span>
                        <span className="font-medium">{teacher.students}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>متوسط التقدير:</span>
                        <span className="font-medium">{teacher.avgGrade}/5</span>
                      </div>
                      <div className="flex justify-between">
                        <span>الصفحات:</span>
                        <span className="font-medium">{teacher.completedPages}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>الأداء العام</CardTitle>
                <CardDescription>مؤشرات الأداء الرئيسية</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>معدل الحضور</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>معدل إتمام التسميع</span>
                    <span>87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>نجاح السبر</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>رضا الطلاب</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>الأهداف والإنجازات</CardTitle>
                <CardDescription>مقارنة الأهداف المحققة</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg bg-green-50">
                  <div>
                    <p className="font-medium text-green-800">الهدف السنوي للصفحات</p>
                    <p className="text-sm text-green-600">1,500 صفحة</p>
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-green-700">83%</p>
                    <p className="text-sm text-green-600">مكتمل</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 rounded-lg bg-blue-50">
                  <div>
                    <p className="font-medium text-blue-800">هدف عدد الطلاب</p>
                    <p className="text-sm text-blue-600">50 طالب</p>
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-blue-700">90%</p>
                    <p className="text-sm text-blue-600">مكتمل</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 rounded-lg bg-yellow-50">
                  <div>
                    <p className="font-medium text-yellow-800">هدف متوسط التقدير</p>
                    <p className="text-sm text-yellow-600">4.5/5</p>
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-yellow-700">98%</p>
                    <p className="text-sm text-yellow-600">مكتمل</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReportsSection;
