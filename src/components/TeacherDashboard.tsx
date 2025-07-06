
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Calendar, Award, Clock, Plus } from "lucide-react";
import Header from "./Header";

const TeacherDashboard = () => {
  const teacherData = {
    name: "أستاذ محمد العلي",
    studentsCount: 15,
    pendingTests: 5,
    completedToday: 8,
    averageGrade: 4.3
  };

  const myStudents = [
    { name: "أحمد محمد", progress: 75, lastActivity: "تسميع صفحة 45", grade: "ممتاز" },
    { name: "فاطمة علي", progress: 60, lastActivity: "سبر الجزء الثاني", grade: "جيد جداً" },
    { name: "يوسف حسن", progress: 85, lastActivity: "تسميع سورة البقرة", grade: "ممتاز" },
    { name: "عائشة سالم", progress: 45, lastActivity: "مراجعة الجزء الأول", grade: "جيد" }
  ];

  const pendingTests = [
    { student: "أحمد محمد", test: "سبر الجزء الثالث", scheduled: "غداً 10:00 ص" },
    { student: "فاطمة علي", test: "تسميع صفحة 65", scheduled: "اليوم 2:00 م" },
    { student: "يوسف حسن", test: "مراجعة شاملة", scheduled: "بعد غد 11:00 ص" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 islamic-pattern">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            مرحباً {teacherData.name}
          </h1>
          <p className="text-lg text-gray-600">
            إدارة ومتابعة تقدم طلابك
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">عدد الطلاب</CardTitle>
              <Users className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teacherData.studentsCount}</div>
              <p className="text-xs text-blue-100">طالب نشط</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">سبر معلق</CardTitle>
              <Clock className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teacherData.pendingTests}</div>
              <p className="text-xs text-amber-100">يتطلب متابعة</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">مكتمل اليوم</CardTitle>
              <BookOpen className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teacherData.completedToday}</div>
              <p className="text-xs text-green-100">تسميع</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">متوسط التقدير</CardTitle>
              <Award className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teacherData.averageGrade}/5</div>
              <p className="text-xs text-purple-100">ممتاز</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* My Students */}
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    طلابي
                  </CardTitle>
                  <CardDescription>متابعة تقدم الطلاب</CardDescription>
                </div>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  إضافة طالب
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {myStudents.map((student, index) => (
                <div key={index} className="p-4 rounded-lg border bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">{student.name}</h4>
                    <Badge variant="secondary">{student.grade}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{student.lastActivity}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">التقدم: {student.progress}%</span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">تفاصيل</Button>
                      <Button size="sm" variant="outline">تسميع</Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Pending Tests */}
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-600" />
                المواعيد المعلقة
              </CardTitle>
              <CardDescription>السبر والتسميع القادم</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingTests.map((test, index) => (
                <div key={index} className="p-4 rounded-lg border bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">{test.student}</h4>
                    <Badge variant="outline">{test.scheduled}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{test.test}</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      بدء السبر
                    </Button>
                    <Button size="sm" variant="outline">
                      تأجيل
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
