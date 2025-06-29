
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Users, Star, Phone, Mail, MessageCircle, Award, TrendingUp, Shield } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "תודה על הפנייה!",
      description: "ניצור איתך קשר בקרוב לתיאום פגישת הייעוץ המקצועית",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const benefits = [
    "ייעוץ אישי מותאם למצב המשפחתי שלכם",
    "תוכנית תקציב מפורטת וברורה",
    "כלים פרקטיים לחיסכון חודשי",
    "הדרכה לניהול חובות ויציאה מהמינוס",
    "מעקב והכוונה רציפה עד להשגת היעדים"
  ];

  const testimonials = [
    {
      name: "שרה כהן",
      text: "תוך 3 חודשים הצלחנו לחסוך 2,000 ש״ח בחודש ולצאת מהמינוס. הייעוץ שינה לנו את החיים!"
    },
    {
      name: "דוד לוי",
      text: "סוף סוף יש לנו שליטה על התקציב. המערכת פשוטה וקלה ליישום, ממליץ בחום!"
    },
    {
      name: "רחל גולדשטיין",
      text: "הכי חשוב שהבנו איך לתעדף הוצאות. היום אנחנו חוסכים לחופשה הראשונה שלנו!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50" dir="rtl">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/e99219e3-5aaf-4513-a989-3ed57bf0e0ee.png" 
              alt="פיני שגב יועץ פיננסי" 
              className="w-32 h-32 object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4 leading-tight">
            פיני שגב - יועץ פיננסי לכלכלת המשפחה
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-700 mb-6 leading-tight">
            רוצים לצאת מהמינוס
            <br />
            <span className="text-teal-600">אחת ולתמיד?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            הפסיקו לדאוג על כסף בסוף החודש. קבלו ייעוץ מקצועי וצאו למסע של שליטה כלכלית וחיסכון חכם
          </p>

          <div className="flex items-center justify-center gap-2 mb-8 text-teal-700">
            <Users className="w-6 h-6" />
            <span className="text-lg font-semibold">מעל 500 משפחות כבר שיפרו את מצבם הכלכלי איתנו</span>
          </div>

          <Button 
            size="lg" 
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            לקבלת ייעוץ מקצועי
          </Button>
        </div>
      </section>

      {/* About the Advisor Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              מי אני ומה אני מציע
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                פיני שגב - יועץ פיננסי מוסמך
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                בעל ניסיון של מעל 15 שנה בתחום הייעוץ הפיננסי, מתמחה בכלכלת המשפחה וניהול תקציב אישי. 
                עזרתי למאות משפחות להשיג יציבות כלכלית ולבנות עתיד פיננסי בטוח.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">יועץ פיננסי מוסמך עם רישיון משרד האוצר</span>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">מומחה לתכנון פיננסי ארוך טווח</span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">מתמחה בניהול סיכונים וחיסכון למשפחות</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl border border-teal-200">
              <h3 className="text-2xl font-bold text-teal-800 mb-4">
                הגישה שלי
              </h3>
              <p className="text-teal-700 text-lg leading-relaxed">
                אני מאמין שכל משפחה יכולה להשיג יציבות כלכלית עם התוכנית הנכונה. 
                הגישה שלי מבוססת על הבנת הצרכים הייחודיים של כל משפחה ובניית תוכנית מעשית ומותאמת אישית.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                מכירים את התחושה?
              </h2>
              <ul className="space-y-4 text-slate-600 text-lg">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span>בסוף החודש אין כסף והחשבונות צבורים</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span>לא יודעים לאן הכסף נעלם</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span>חיים מחשבון עובר לחשבון עובר</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span>חולמים על חיסכון אבל זה נראה בלתי אפשרי</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                הפתרון כאן!
              </h3>
              <p className="text-green-700 text-lg leading-relaxed">
                עם ייעוץ מקצועי ותוכנית פעולה מותאמת אישית, תלמדו לנהל את הכסף בחכמה, 
                תצאו מהמינוס ותתחילו לחסוך למטרות שחשובות לכם באמת.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-teal-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            מה תקבלו בייעוץ?
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            כל מה שאתם צריכים כדי להשיג שליטה כלכלית מלאה
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white border-teal-200">
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 text-right">{benefit}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
            מה הלקוחות שלנו אומרים
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-teal-50 border-blue-200">
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <p className="font-semibold text-teal-800">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 px-4 bg-gradient-to-b from-teal-50 to-blue-100">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              קבלו פגישת ייעוץ מקצועית
            </h2>
            <p className="text-xl text-slate-600">
              השאירו פרטים ונחזור אליכם תוך 24 שעות
            </p>
          </div>

          <Card className="p-8 shadow-xl bg-white border-2 border-teal-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-700 font-semibold mb-2">שם מלא *</label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="text-right border-teal-200 focus:border-teal-400"
                  placeholder="הכניסו את שמכם המלא"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">טלפון *</label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="text-right border-teal-200 focus:border-teal-400"
                    placeholder="050-1234567"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">דוא״ל</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="text-right border-teal-200 focus:border-teal-400"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">ספרו לנו על המצב שלכם (אופציונלי)</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="text-right border-teal-200 focus:border-teal-400 min-h-[100px]"
                  placeholder="למשל: חובות, קשיים בחיסכון, בעיות תקציב..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                שלחו פנייה וקבלו ייעוץ מקצועי
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-4">פיני שגב - יועץ פיננסי לכלכלת המשפחה</h3>
          <p className="text-slate-300 mb-6">
            עוזר למשפחות להשיג שליטה כלכלית ולבנות עתיד פיננסי יציב
          </p>
          
          <div className="flex items-center justify-center gap-8 text-slate-300">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>050-123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>info@pini-sagiv.co.il</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
