
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Award, Calendar, Target, Clock, Star } from "lucide-react";
import Header from "./Header";

const StudentDashboard = () => {
  // Mock data for student
  const studentData = {
    name: "أحمد محمد",
    currentLevel: "الجزء الثالث",
    pagesMemorized: 45,
    totalPages: 604,
    lastRecitation: "سورة آل عمران - الآية 150-200",
    nextTest: "غداً الساعة 10:00 ص",
    grade: 4.2,
    attendance: 92
  };

  const recentActivities = [
    { action: "تسميع صفحة 45", grade: "ممتاز", date: "اليوم" },
    { action: "سبر سورة البقرة", grade: "جيد جداً", date: "أمس" },
    { action: "تسميع صفحة 44", grade: "ممتاز", date: "قبل يومين" },
    { action: "مراجعة الجزء الثاني", grade: "جيد", date: "قبل 3 أيام" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 islamic-pattern">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            مرحباً {studentData.name}
          </h1>
          <p className="text-lg text-gray-600">
            تابع رحلتك في حفظ القرآن الكريم
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الصفحات المحفوظة</CardTitle>
              <BookOpen className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studentData.pagesMemorized}</div>
              <p className="text-xs text-green-100">
                من أصل {studentData.totalPages} صفحة
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">متوسط التقدير</CardTitle>
              <Star className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studentData.grade}/5</div>
              <p className="text-xs text-blue-100">ممتاز</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">نسبة الحضور</CardTitle>
              <Calendar className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studentData.attendance}%</div>
              <p className="text-xs text-amber-100">ممتاز</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">المستوى الحالي</CardTitle>
              <Target className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold">{studentData.currentLevel}</div>
              <p className="text-xs text-purple-100">في التقدم</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Progress Details */}
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-green-600" />
                تقدم الحفظ
              </CardTitle>
              <CardDescription>نظرة عامة على إنجازاتك</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>تقدم الحفظ العام</span>
                  <span>{Math.round((studentData.pagesMemorized / studentData.totalPages) * 100)}%</span>
                </div>
                <Progress value={(studentData.pagesMemorized / studentData.totalPages) * 100} className="h-2" />
              </div>
              
              <div className="p-4 rounded-lg bg-green-50">
                <h4 className="font-medium text-green-800 mb-2">آخر تسميع</h4>
                <p className="text-sm text-green-700">{studentData.lastRecitation}</p>
              </div>
              
              <div className="p-4 rounded-lg bg-blue-50">
                <h4 className="font-medium text-blue-800 mb-2">الموعد القادم</h4>
                <p className="text-sm text-blue-700 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {studentData.nextTest}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" />
                النشاط الأخير
              </CardTitle>
              <CardDescription>آخر عمليات التسميع والسبر</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.date}</p>
                  </div>
                  <Badge variant="secondary">{activity.grade}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
