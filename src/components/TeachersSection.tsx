
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { UserPlus, Search, Users, BookOpen, Award, Phone } from "lucide-react";

const TeachersSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    specialty: "",
    phone: "",
    email: "",
    experience: "",
    notes: ""
  });

  const teachers = [
    {
      id: 1,
      name: "الأستاذ خالد أحمد",
      specialty: "تحفيظ وتجويد",
      studentsCount: 12,
      experience: "5 سنوات",
      phone: "0501234567",
      email: "khalid@example.com",
      totalPages: 890,
      averageGrade: 4.5,
      joinDate: "2020/01/15",
      status: "نشط"
    },
    {
      id: 2,
      name: "الأستاذة عائشة محمد",
      specialty: "تحفيظ للأطفال",
      studentsCount: 15,
      experience: "8 سنوات",
      phone: "0507654321",
      email: "aisha@example.com",
      totalPages: 1240,
      averageGrade: 4.8,
      joinDate: "2018/09/20",
      status: "نشط"
    },
    {
      id: 3,
      name: "الأستاذ محمد علي",
      specialty: "تحفيظ ومراجعة",
      studentsCount: 8,
      experience: "3 سنوات",
      phone: "0509876543",
      email: "mohammed@example.com",
      totalPages: 580,
      averageGrade: 4.2,
      joinDate: "2022/03/10",
      status: "نشط"
    },
    {
      id: 4,
      name: "الأستاذة مريم حسن",
      specialty: "تجويد وأحكام",
      studentsCount: 10,
      experience: "6 سنوات",
      phone: "0501357924",
      email: "mariam@example.com",
      totalPages: 720,
      averageGrade: 4.3,
      joinDate: "2019/11/05",
      status: "إجازة"
    }
  ];

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "نشط": return "bg-green-100 text-green-800";
      case "إجازة": return "bg-yellow-100 text-yellow-800";
      case "غير نشط": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getGradeStars = (grade: number) => {
    return "★".repeat(Math.floor(grade)) + "☆".repeat(5 - Math.floor(grade));
  };

  const handleAddTeacher = () => {
    console.log("إضافة مدرس جديد:", newTeacher);
    setNewTeacher({ name: "", specialty: "", phone: "", email: "", experience: "", notes: "" });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">إدارة المدرسين</h2>
          <p className="text-gray-600 mt-1">متابعة وإدارة جميع المدرسين في النظام</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <UserPlus className="w-4 h-4 ml-2" />
              إضافة مدرس جديد
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>إضافة مدرس جديد</DialogTitle>
              <DialogDescription>
                أدخل بيانات المدرس الجديد لإضافته إلى النظام
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="teacherName">الاسم الكامل</Label>
                <Input
                  id="teacherName"
                  value={newTeacher.name}
                  onChange={(e) => setNewTeacher({...newTeacher, name: e.target.value})}
                  placeholder="أدخل الاسم الكامل"
                  className="text-right"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="specialty">التخصص</Label>
                <Input
                  id="specialty"
                  value={newTeacher.specialty}
                  onChange={(e) => setNewTeacher({...newTeacher, specialty: e.target.value})}
                  placeholder="مثال: تحفيظ وتجويد"
                  className="text-right"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="teacherPhone">رقم الهاتف</Label>
                  <Input
                    id="teacherPhone"
                    value={newTeacher.phone}
                    onChange={(e) => setNewTeacher({...newTeacher, phone: e.target.value})}
                    placeholder="05xxxxxxxx"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">سنوات الخبرة</Label>
                  <Input
                    id="experience"
                    value={newTeacher.experience}
                    onChange={(e) => setNewTeacher({...newTeacher, experience: e.target.value})}
                    placeholder="مثال: 5 سنوات"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  type="email"
                  value={newTeacher.email}
                  onChange={(e) => setNewTeacher({...newTeacher, email: e.target.value})}
                  placeholder="example@email.com"
                />
              </div>

              <Button onClick={handleAddTeacher} className="w-full bg-blue-600 hover:bg-blue-700">
                إضافة المدرس
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
              placeholder="البحث عن مدرس أو تخصص..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map((teacher) => (
          <Card key={teacher.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/api/placeholder/64/64" alt={teacher.name} />
                  <AvatarFallback className="bg-blue-500 text-white text-xl font-bold">
                    {teacher.name.split(' ')[1]?.[0] || teacher.name[0]}{teacher.name.split(' ')[2]?.[0] || teacher.name.split(' ')[1]?.[0] || ''}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{teacher.name}</CardTitle>
                  <CardDescription>{teacher.specialty}</CardDescription>
                  <Badge className={`mt-1 ${getStatusColor(teacher.status)}`}>
                    {teacher.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-lg bg-blue-50">
                  <div className="text-2xl font-bold text-blue-600">{teacher.studentsCount}</div>
                  <p className="text-sm text-blue-700">طالب</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-green-50">
                  <div className="text-2xl font-bold text-green-600">{teacher.totalPages}</div>
                  <p className="text-sm text-green-700">صفحة</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">التقييم العام</span>
                  <div className="flex items-center gap-1">
                    <span className="text-lg text-yellow-500">{getGradeStars(teacher.averageGrade)}</span>
                    <span className="text-sm text-gray-600">({teacher.averageGrade})</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Award className="w-3 h-3" />
                  <span>خبرة: {teacher.experience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3" />
                  <span>{teacher.phone}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  تفاصيل
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  الطلاب
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTeachers.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">لا توجد نتائج</h3>
            <p className="text-gray-600">لم يتم العثور على مدرسين مطابقين لمعايير البحث</p>
          </CardContent>
        </Card>
      )}

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{teachers.length}</div>
              <p className="text-sm text-gray-600">إجمالي المدرسين</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {teachers.reduce((sum, teacher) => sum + teacher.studentsCount, 0)}
              </div>
              <p className="text-sm text-gray-600">إجمالي الطلاب</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {(teachers.reduce((sum, teacher) => sum + teacher.averageGrade, 0) / teachers.length).toFixed(1)}
              </div>
              <p className="text-sm text-gray-600">متوسط التقييم</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {teachers.filter(teacher => teacher.status === "نشط").length}
              </div>
              <p className="text-sm text-gray-600">المدرسون النشطون</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeachersSection;
