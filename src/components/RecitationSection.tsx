
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { BookOpen, Plus, Calendar as CalendarIcon, Clock, Award, Target } from "lucide-react";

const RecitationSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [newRecitation, setNewRecitation] = useState({
    studentId: "",
    type: "", // صفحة، سورة، جزء
    startPage: "",
    endPage: "",
    surah: "",
    part: "",
    grade: "",
    notes: "",
    date: new Date().toISOString().split('T')[0]
  });

  const recentRecitations = [
    {
      id: 1,
      studentName: "أحمد محمد السالم",
      teacher: "الأستاذ خالد",
      type: "صفحة",
      content: "الصفحة 25",
      grade: "ممتاز",
      date: "2024/01/20",
      time: "10:30 ص",
      notes: "حفظ متقن مع تجويد جيد"
    },
    {
      id: 2,
      studentName: "فاطمة علي الزهراني", 
      teacher: "الأستاذة عائشة",
      type: "سورة",
      content: "سورة البقرة",
      grade: "جيد جداً",
      date: "2024/01/20",
      time: "11:00 ص",
      notes: "بعض الأخطاء البسيطة في التجويد"
    },
    {
      id: 3,
      studentName: "يوسف حسن القرني",
      teacher: "الأستاذ محمد",
      type: "جزء",
      content: "الجزء الثاني",
      grade: "جيد",
      date: "2024/01/19",
      time: "2:15 م",
      notes: "يحتاج مراجعة بعض المواضع"
    }
  ];

  const upcomingTests = [
    {
      id: 1,
      studentName: "عائشة سالم الغامدي",
      type: "سبر",
      content: "الجزء الأول",
      scheduledDate: "2024/01/22",
      scheduledTime: "10:00 ص",
      teacher: "الأستاذة مريم",
      status: "معلق"
    },
    {
      id: 2,
      studentName: "أحمد محمد السالم",
      type: "مراجعة",
      content: "من الصفحة 20 إلى 30",
      scheduledDate: "2024/01/23",
      scheduledTime: "11:30 ص", 
      teacher: "الأستاذ خالد",
      status: "مجدول"
    }
  ];

  const students = [
    { id: 1, name: "أحمد محمد السالم", currentPage: 25 },
    { id: 2, name: "فاطمة علي الزهراني", currentPage: 545 },
    { id: 3, name: "يوسف حسن القرني", currentPage: 95 },
    { id: 4, name: "عائشة سالم الغامدي", currentPage: 220 }
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "معلق": return "bg-red-100 text-red-800";
      case "مجدول": return "bg-blue-100 text-blue-800";
      case "مكتمل": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const handleAddRecitation = () => {
    console.log("إضافة تسميع جديد:", newRecitation);
    setNewRecitation({
      studentId: "",
      type: "",
      startPage: "",
      endPage: "",
      surah: "",
      part: "",
      grade: "",
      notes: "",
      date: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">إدارة التسميع</h2>
          <p className="text-gray-600 mt-1">تسجيل ومتابعة تسميع الطلاب والسبر</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="w-4 h-4 ml-2" />
              تسجيل تسميع جديد
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>تسجيل تسميع جديد</DialogTitle>
              <DialogDescription>
                أدخل تفاصيل التسميع الجديد
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="student">الطالب</Label>
                <Select value={newRecitation.studentId} onValueChange={(value) => setNewRecitation({...newRecitation, studentId: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الطالب" />
                  </SelectTrigger>
                  <SelectContent>
                    {students.map((student) => (
                      <SelectItem key={student.id} value={student.id.toString()}>
                        {student.name} - الصفحة الحالية: {student.currentPage}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">نوع التسميع</Label>
                <Select value={newRecitation.type} onValueChange={(value) => setNewRecitation({...newRecitation, type: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر نوع التسميع" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="صفحة">صفحة</SelectItem>
                    <SelectItem value="سورة">سورة</SelectItem>
                    <SelectItem value="جزء">جزء</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {newRecitation.type === "صفحة" && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="startPage">من الصفحة</Label>
                    <Input
                      id="startPage"
                      type="number"
                      value={newRecitation.startPage}
                      onChange={(e) => setNewRecitation({...newRecitation, startPage: e.target.value})}
                      placeholder="رقم الصفحة"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endPage">إلى الصفحة</Label>
                    <Input
                      id="endPage"
                      type="number"
                      value={newRecitation.endPage}
                      onChange={(e) => setNewRecitation({...newRecitation, endPage: e.target.value})}
                      placeholder="رقم الصفحة"
                    />
                  </div>
                </div>
              )}

              {newRecitation.type === "سورة" && (
                <div className="space-y-2">
                  <Label htmlFor="surah">اسم السورة</Label>
                  <Input
                    id="surah"
                    value={newRecitation.surah}
                    onChange={(e) => setNewRecitation({...newRecitation, surah: e.target.value})}
                    placeholder="مثال: سورة البقرة"
                    className="text-right"
                  />
                </div>
              )}

              {newRecitation.type === "جزء" && (
                <div className="space-y-2">
                  <Label htmlFor="part">رقم الجزء</Label>
                  <Select value={newRecitation.part} onValueChange={(value) => setNewRecitation({...newRecitation, part: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الجزء" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({length: 30}, (_, i) => (
                        <SelectItem key={i+1} value={(i+1).toString()}>
                          الجزء {i+1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="grade">التقدير</Label>
                <Select value={newRecitation.grade} onValueChange={(value) => setNewRecitation({...newRecitation, grade: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر التقدير" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ممتاز">ممتاز</SelectItem>
                    <SelectItem value="جيد جداً">جيد جداً</SelectItem>
                    <SelectItem value="جيد">جيد</SelectItem>
                    <SelectItem value="مقبول">مقبول</SelectItem>
                    <SelectItem value="ضعيف">ضعيف</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">ملاحظات</Label>
                <Textarea
                  id="notes"
                  value={newRecitation.notes}
                  onChange={(e) => setNewRecitation({...newRecitation, notes: e.target.value})}
                  placeholder="أدخل ملاحظات حول التسميع..."
                  className="text-right"
                  rows={3}
                />
              </div>

              <Button onClick={handleAddRecitation} className="w-full bg-green-600 hover:bg-green-700">
                تسجيل التسميع
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="recent" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="recent" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            التسميع الأخير
          </TabsTrigger>
          <TabsTrigger value="scheduled" className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4" />
            السبر المجدول
          </TabsTrigger>
          <TabsTrigger value="calendar" className="flex items-center gap-2">
            <Target className="w-4 h-4" />
            التقويم
          </TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-green-600" />
                آخر عمليات التسميع
              </CardTitle>
              <CardDescription>سجل التسميع المسجل اليوم</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentRecitations.map((recitation) => (
                  <div key={recitation.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-medium text-gray-900">{recitation.studentName}</h4>
                        <Badge variant="outline">{recitation.type}</Badge>
                        <Badge className={getGradeColor(recitation.grade)}>
                          {recitation.grade}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{recitation.content}</p>
                      <p className="text-sm text-gray-500">{recitation.teacher}</p>
                      {recitation.notes && (
                        <p className="text-xs text-gray-500 mt-1 italic">"{recitation.notes}"</p>
                      )}
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                        <CalendarIcon className="w-3 h-3" />
                        <span>{recitation.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{recitation.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-blue-600" />
                السبر والمراجعات المجدولة
              </CardTitle>
              <CardDescription>المواعيد القادمة للسبر والمراجعة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingTests.map((test) => (
                  <div key={test.id} className="flex items-center justify-between p-4 rounded-lg border border-blue-200 bg-blue-50">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-medium text-gray-900">{test.studentName}</h4>
                        <Badge variant="outline">{test.type}</Badge>
                        <Badge className={getStatusColor(test.status)}>
                          {test.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{test.content}</p>
                      <p className="text-sm text-gray-500">{test.teacher}</p>
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-1 text-sm text-gray-700 mb-1 font-medium">
                        <CalendarIcon className="w-3 h-3" />
                        <span>{test.scheduledDate}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-700 font-medium">
                        <Clock className="w-3 h-3" />
                        <span>{test.scheduledTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>تقويم التسميع</CardTitle>
                <CardDescription>اختر تاريخ لعرض التسميع</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>إحصائيات سريعة</CardTitle>
                <CardDescription>نظرة عامة على الأداء</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-green-50 text-center">
                    <div className="text-2xl font-bold text-green-600">18</div>
                    <p className="text-sm text-green-700">تسميع اليوم</p>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-50 text-center">
                    <div className="text-2xl font-bold text-blue-600">5</div>
                    <p className="text-sm text-blue-700">سبر معلق</p>
                  </div>
                  <div className="p-3 rounded-lg bg-yellow-50 text-center">
                    <div className="text-2xl font-bold text-yellow-600">92%</div>
                    <p className="text-sm text-yellow-700">معدل النجاح</p>
                  </div>
                  <div className="p-3 rounded-lg bg-purple-50 text-center">
                    <div className="text-2xl font-bold text-purple-600">4.3</div>
                    <p className="text-sm text-purple-700">متوسط التقدير</p>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <h4 className="font-medium text-gray-900">التوزيع حسب التقدير</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>ممتاز</span>
                      <span className="font-medium">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>جيد جداً</span>
                      <span className="font-medium">30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '30%'}}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>جيد</span>
                      <span className="font-medium">20%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '20%'}}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>مقبول</span>
                      <span className="font-medium">5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{width: '5%'}}></div>
                    </div>
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

export default RecitationSection;
