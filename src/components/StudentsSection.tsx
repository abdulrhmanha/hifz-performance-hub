
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserPlus, Search, BookOpen, Award, Calendar, User } from "lucide-react";

const StudentsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [newStudent, setNewStudent] = useState({
    name: "",
    age: "",
    level: "",
    teacher: "",
    phone: "",
    notes: ""
  });

  const students = [
    {
      id: 1,
      name: "أحمد محمد السالم",
      age: 12,
      level: "متوسط",
      teacher: "الأستاذ خالد",
      progress: 75,
      currentPage: 180,
      totalPages: 604,
      grade: "ممتاز",
      joinDate: "2024/01/15",
      phone: "0501234567",
      status: "نشط"
    },
    {
      id: 2,
      name: "فاطمة علي الزهراني",
      age: 14,
      level: "متقدم",
      teacher: "الأستاذة عائشة",
      progress: 90,
      currentPage: 545,
      totalPages: 604,
      grade: "ممتاز",
      joinDate: "2023/09/20",
      phone: "0507654321",
      status: "نشط"
    },
    {
      id: 3,
      name: "يوسف حسن القرني",
      age: 10,
      level: "مبتدئ",
      teacher: "الأستاذ محمد",
      progress: 45,
      currentPage: 95,
      totalPages: 604,
      grade: "جيد جداً",
      joinDate: "2024/03/10",
      phone: "0509876543",
      status: "نشط"
    },
    {
      id: 4,
      name: "عائشة سالم الغامدي",
      age: 13,
      level: "متوسط",
      teacher: "الأستاذة مريم",
      progress: 60,
      currentPage: 220,
      totalPages: 604,
      grade: "جيد",
      joinDate: "2024/02/05",
      phone: "0501357924",
      status: "غائب"
    }
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.teacher.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "نشط": return "bg-green-500";
      case "غائب": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "ممتاز": return "bg-green-100 text-green-800";
      case "جيد جداً": return "bg-blue-100 text-blue-800";
      case "جيد": return "bg-yellow-100 text-yellow-800";
      case "مقبول": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const handleAddStudent = () => {
    console.log("إضافة طالب جديد:", newStudent);
    // هنا سيتم إضافة الطالب إلى قاعدة البيانات
    setNewStudent({ name: "", age: "", level: "", teacher: "", phone: "", notes: "" });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">إدارة الطلاب</h2>
          <p className="text-gray-600 mt-1">متابعة وإدارة جميع الطلاب المسجلين في النظام</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">
              <UserPlus className="w-4 h-4 ml-2" />
              إضافة طالب جديد
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>إضافة طالب جديد</DialogTitle>
              <DialogDescription>
                أدخل بيانات الطالب الجديد لإضافته إلى النظام
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم الكامل</Label>
                <Input
                  id="name"
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                  placeholder="أدخل الاسم الكامل"
                  className="text-right"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">العمر</Label>
                  <Input
                    id="age"
                    type="number"
                    value={newStudent.age}
                    onChange={(e) => setNewStudent({...newStudent, age: e.target.value})}
                    placeholder="العمر"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input
                    id="phone"
                    value={newStudent.phone}
                    onChange={(e) => setNewStudent({...newStudent, phone: e.target.value})}
                    placeholder="05xxxxxxxx"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="level">المستوى</Label>
                <Select value={newStudent.level} onValueChange={(value) => setNewStudent({...newStudent, level: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر المستوى" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="مبتدئ">مبتدئ</SelectItem>
                    <SelectItem value="متوسط">متوسط</SelectItem>
                    <SelectItem value="متقدم">متقدم</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="teacher">المدرس المسؤول</Label>
                <Select value={newStudent.teacher} onValueChange={(value) => setNewStudent({...newStudent, teacher: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر المدرس" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="الأستاذ خالد">الأستاذ خالد</SelectItem>
                    <SelectItem value="الأستاذة عائشة">الأستاذة عائشة</SelectItem>
                    <SelectItem value="الأستاذ محمد">الأستاذ محمد</SelectItem>
                    <SelectItem value="الأستاذة مريم">الأستاذة مريم</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleAddStudent} className="w-full bg-green-600 hover:bg-green-700">
                إضافة الطالب
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="البحث عن طالب أو مدرس..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <Card key={student.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/api/placeholder/48/48" alt={student.name} />
                    <AvatarFallback className="bg-green-500 text-white text-lg font-bold">
                      {student.name.split(' ')[0][0]}{student.name.split(' ')[1]?.[0] || ''}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{student.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <User className="w-3 h-3" />
                      {student.age} سنة - {student.level}
                    </CardDescription>
                  </div>
                </div>
                <div className={`w-3 h-3 rounded-full ${getStatusColor(student.status)}`}></div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>التقدم العام</span>
                  <span>{student.progress}%</span>
                </div>
                <Progress value={student.progress} className="h-2" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>الصفحة الحالية: {student.currentPage}</span>
                  <span>من {student.totalPages}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Badge className={getGradeColor(student.grade)}>
                  {student.grade}
                </Badge>
                <span className="text-sm text-gray-600">{student.teacher}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>انضم: {student.joinDate}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <BookOpen className="w-3 h-3" />
                  <span>{Math.floor(student.currentPage / 20)} جزء</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  تفاصيل
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  تسميع
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">لا توجد نتائج</h3>
            <p className="text-gray-600">لم يتم العثور على طلاب مطابقين لمعايير البحث</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default StudentsSection;
