
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import StudentsSection from "@/components/StudentsSection";
import TeachersSection from "@/components/TeachersSection";
import RecitationSection from "@/components/RecitationSection";
import ReportsSection from "@/components/ReportsSection";
import { 
  UserPlus, 
  Users, 
  BookOpen, 
  TrendingUp,
  Award,
  Calendar,
  Star,
  Target
} from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock data for demonstration
  const stats = {
    totalStudents: 45,
    totalTeachers: 8,
    totalPages: 1250,
    completedRecitations: 180,
    pendingTests: 12,
    averageGrade: 4.2
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 islamic-pattern">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            نظام إدارة حفظ القرآن الكريم
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            منصة شاملة لإدارة ومتابعة تقدم الطلاب في حفظ كتاب الله العزيز
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              لوحة التحكم
            </TabsTrigger>
            <TabsTrigger value="students" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              الطلاب
            </TabsTrigger>
            <TabsTrigger value="teachers" className="flex items-center gap-2">
              <UserPlus className="w-4 h-4" />
              المدرسون
            </TabsTrigger>
            <TabsTrigger value="recitation" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              التسميع
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              التقارير
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">إجمالي الطلاب</CardTitle>
                  <Users className="h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalStudents}</div>
                  <p className="text-xs text-green-100">
                    +3 هذا الأسبوع
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">المدرسون</CardTitle>
                  <UserPlus className="h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalTeachers}</div>
                  <p className="text-xs text-blue-100">
                    نشطون هذا الشهر
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">الصفحات المحفوظة</CardTitle>
                  <BookOpen className="h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalPages}</div>
                  <p className="text-xs text-amber-100">
                    من أصل 604 صفحة
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">متوسط التقدير</CardTitle>
                  <Star className="h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.averageGrade}/5</div>
                  <p className="text-xs text-purple-100">
                    ممتاز
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-green-600" />
                    النشاط الأخير
                  </CardTitle>
                  <CardDescription>آخر عمليات التسميع والسبر</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { student: "أحمد محمد", action: "تسميع صفحة 25", grade: "ممتاز", time: "قبل ساعة" },
                    { student: "فاطمة علي", action: "سبر الجزء الثاني", grade: "جيد جداً", time: "قبل ساعتين" },
                    { student: "يوسف حسن", action: "تسميع سورة البقرة", grade: "ممتاز", time: "قبل 3 ساعات" },
                    { student: "عائشة سالم", action: "تسميع صفحة 15", grade: "جيد", time: "قبل 4 ساعات" },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{activity.student}</p>
                        <p className="text-sm text-gray-600">{activity.action}</p>
                      </div>
                      <div className="text-left">
                        <Badge variant="secondary" className="mb-1">{activity.grade}</Badge>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-amber-600" />
                    إحصائيات التقدم
                  </CardTitle>
                  <CardDescription>نظرة عامة على الأداء</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>تقدم الحفظ العام</span>
                      <span>68%</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>معدل الحضور</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>نجاح السبر</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-3 rounded-lg bg-green-50">
                      <div className="text-2xl font-bold text-green-600">{stats.pendingTests}</div>
                      <p className="text-sm text-green-700">سبر معلق</p>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-blue-50">
                      <div className="text-2xl font-bold text-blue-600">{stats.completedRecitations}</div>
                      <p className="text-sm text-blue-700">تسميع مكتمل</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="students">
            <StudentsSection />
          </TabsContent>

          <TabsContent value="teachers">
            <TeachersSection />
          </TabsContent>

          <TabsContent value="recitation">
            <RecitationSection />
          </TabsContent>

          <TabsContent value="reports">
            <ReportsSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
