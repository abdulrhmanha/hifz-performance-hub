
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  UserPlus, 
  BookOpen, 
  TrendingUp,
  Award,
  Calendar,
  Star,
  Target,
  Settings,
  BarChart3
} from "lucide-react";
import Header from "./Header";

const AdminDashboard = () => {
  const adminStats = {
    totalStudents: 45,
    totalTeachers: 8,
    totalPages: 1250,
    completedRecitations: 180,
    pendingTests: 12,
    averageGrade: 4.2,
    activeClasses: 6,
    monthlyProgress: 15
  };

  const recentActivities = [
    { user: "أحمد محمد", action: "تسميع صفحة 25", type: "student", grade: "ممتاز", time: "قبل ساعة" },
    { user: "أستاذ علي", action: "إضافة طالب جديد", type: "teacher", grade: "-", time: "قبل ساعتين" },
    { user: "فاطمة علي", action: "سبر الجزء الثاني", type: "student", grade: "جيد جداً", time: "قبل 3 ساعات" },
    { user: "أستاذ محمد", action: "تحديث نتائج السبر", type: "teacher", grade: "-", time: "قبل 4 ساعات" }
  ];

  const systemStats = [
    { label: "معدل الحضور الشهري", value: "92%", trend: "+5%" },
    { label: "معدل إكمال الواجبات", value: "87%", trend: "+2%" },
    { label: "رضا الطلاب", value: "4.5/5", trend: "+0.3" },
    { label: "كفاءة المدرسين", value: "96%", trend: "+1%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 islamic-pattern">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            لوحة تحكم المدير
          </h1>
          <p className="text-lg text-gray-600">
            إدارة شاملة لنظام حفظ القرآن الكريم
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">إجمالي الطلاب</CardTitle>
              <Users className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{adminStats.totalStudents}</div>
              <p className="text-xs text-green-100">+3 هذا الأسبوع</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">المدرسون</CardTitle>
              <UserPlus className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{adminStats.totalTeachers}</div>
              <p className="text-xs text-blue-100">نشطون هذا الشهر</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-500 to-amber-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">الصف النشطة</CardTitle>
              <BookOpen className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{adminStats.activeClasses}</div>
              <p className="text-xs text-amber-100">من أصل 8 صفوف</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">التقدم الشهري</CardTitle>
              <TrendingUp className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{adminStats.monthlyProgress}%</div>
              <p className="text-xs text-purple-100">زيادة عن الشهر الماضي</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-gray-600" />
              إجراءات سريعة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col gap-2 bg-green-600 hover:bg-green-700">
                <UserPlus className="w-6 h-6" />
                إضافة طالب
              </Button>
              <Button className="h-20 flex flex-col gap-2 bg-blue-600 hover:bg-blue-700">
                <Users className="w-6 h-6" />
                إضافة مدرس
              </Button>
              <Button className="h-20 flex flex-col gap-2 bg-amber-600 hover:bg-amber-700">
                <BarChart3 className="w-6 h-6" />
                التقارير
              </Button>
              <Button className="h-20 flex flex-col gap-2 bg-purple-600 hover:bg-purple-700">
                <Settings className="w-6 h-6" />
                الإعدادات
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* System Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-600" />
                إحصائيات النظام
              </CardTitle>
              <CardDescription>نظرة عامة على الأداء</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {systemStats.map((stat, index) => (
                <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-gray-50">
                  <span className="font-medium text-gray-900">{stat.label}</span>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-green-600">{stat.trend}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-amber-600" />
                إحصائيات التقدم العامة
              </CardTitle>
              <CardDescription>نظرة عامة على التحصيل</CardDescription>
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
                  <div className="text-2xl font-bold text-green-600">{adminStats.pendingTests}</div>
                  <p className="text-sm text-green-700">سبر معلق</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-blue-50">
                  <div className="text-2xl font-bold text-blue-600">{adminStats.completedRecitations}</div>
                  <p className="text-sm text-blue-700">تسميع مكتمل</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent System Activity */}
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-600" />
              النشاط الأخير في النظام
            </CardTitle>
            <CardDescription>آخر الأنشطة والفعاليات</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.user}</p>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                </div>
                <div className="text-left flex items-center gap-3">
                  <Badge variant={activity.type === 'student' ? 'default' : 'secondary'}>
                    {activity.type === 'student' ? 'طالب' : 'مدرس'}
                  </Badge>
                  {activity.grade !== '-' && (
                    <Badge variant="outline">{activity.grade}</Badge>
                  )}
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
