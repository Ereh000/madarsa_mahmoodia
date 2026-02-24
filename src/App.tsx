import React from 'react';
import { 
  Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, 
  BookOpen, Heart, Users, GraduationCap, Globe, Book, Moon, HandCoins, Building, Building2, HeartHandshake, Mic, Languages, Monitor
} from 'lucide-react';

const Header = () => (
  <header className="w-full bg-white">
    {/* Top Bar */}
    <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2b4c7e] text-center md:text-left font-serif">
          مدرسہ محمودیہ تجوید القرآن شیر پورہ اوجلان
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-[#2b4c7e] mt-2">
          Madrasa Mahmoodia Tajweedul Quran Ujlan
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <button className="bg-[#b91c1c] text-white px-6 py-1 rounded font-bold w-24">اردو</button>
          <button className="bg-[#1e3a8a] text-white px-6 py-1 rounded font-bold w-24">العربية</button>
        </div>
        <div className="flex gap-2">
          <button className="bg-[#1e3a8a] text-white px-6 py-1 rounded font-bold w-24">English</button>
          <button className="bg-[#b91c1c] text-white px-6 py-1 rounded font-bold w-24">हिंदी</button>
        </div>
      </div>
    </div>
    
    {/* Navigation */}
    <nav className="bg-[#4caf50] text-white">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 py-3 text-sm md:text-base font-medium">
          <li><a href="#" className="hover:text-gray-200">Home</a></li>
          <li><a href="#" className="hover:text-gray-200">About Madrasa ▾</a></li>
          <li><a href="#" className="hover:text-gray-200">Departments</a></li>
          <li><a href="#" className="hover:text-gray-200">Visitors ▾</a></li>
          <li><a href="#" className="hover:text-gray-200">Needs & Future Plans</a></li>
          <li><a href="#" className="hover:text-gray-200">Social Relief</a></li>
          <li><a href="#" className="hover:text-gray-200">Gallery ▾</a></li>
          <li><a href="#" className="hover:text-gray-200">Budget</a></li>
          <li><a href="#" className="hover:text-gray-200">Donation</a></li>
          <li><a href="#" className="hover:text-gray-200">Contact</a></li>
          <li><a href="#" className="hover:text-gray-200">News</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <section className="w-full h-[400px] md:h-[500px] bg-gray-200 relative">
    <img 
      src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
      alt="Madrasa Building" 
      className="w-full h-full object-cover"
    />
  </section>
);

const Introduction = () => (
  <section className="py-16 relative">
    <div className="absolute inset-0 z-0 opacity-20">
      <img 
        src="https://images.unsplash.com/photo-1564769625905-50e93615e769?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
        alt="Background" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-white/90 p-8 rounded-lg shadow-lg">
        <h3 className="text-[#2b4c7e] font-bold text-lg mb-2">An Introduction Of</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-[#4caf50] mb-6">Madrasa Mahmoodia Tajweedul Quran</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Really teaching and learning are such a base which guides the life to straight ways and on which the base of society and nation stands on. If the base is strong then the building will be strong otherwise not. So the intellectuals say "Education is a center and combination" By this as you saw so shall you reap. If the deterioration of new race is analyses then the illiteracy along with wrong education will be found. As Islam has put focus on vital importance of education as force in tracing it. If you have a glance then you will find that the new generation is the frontier, if they are free from dirt of environment they can raise a slog and bend the direction of
        </p>
        <button className="bg-[#2b4c7e] text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition">
          Read More
        </button>
      </div>
    </div>
  </section>
);

const Pillars = () => {
  const pillars = [
    { icon: <BookOpen className="w-10 h-10 text-[#4caf50]" />, title: "Salah", desc: "Salah is a cure for the lost souls, confused minds and for the broken hearted" },
    { icon: <Moon className="w-10 h-10 text-[#4caf50]" />, title: "Fasting", desc: "The Prophet S.A.W. Said : \"Du'a of a fasting person is accepted\" - [Bhukhari Shareef]" },
    { icon: <HandCoins className="w-10 h-10 text-[#4caf50]" />, title: "Zakah", desc: "Allah Said : \"Spend, O Son Of Adam, and shall spend on you\" [Bukhari & Muslim]" },
    { icon: <Building className="w-10 h-10 text-[#4caf50]" />, title: "Hajj", desc: "The Reward For An Accepted Hajj Is Nothing Less Than Paradise" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-4 border-[#4caf50] flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-[#2b4c7e] mb-3">{pillar.title}</h3>
              <p className="text-gray-600 text-sm px-4">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Activities = () => {
  const activities = [
    { 
      icon: <BookOpen className="w-12 h-12 text-white mb-4" />, 
      title: "Islamic Education", 
      desc: "Alhamdulillah ! Many Islamic courses like Class Atfal, Hifz, Tajweed & Qira't and Persian are available with fooding and living in hostel of Madrasa.",
      bg: "bg-[#4caf50]"
    },
    { 
      icon: <Building2 className="w-12 h-12 text-white mb-4" />, 
      title: "Middle School", 
      desc: "A Middle school also running by Madrasa which is recognized with Rajasthan Educational Board in which Hindi, English, Science etc are taught.",
      bg: "bg-[#2e7d32]"
    },
    { 
      icon: <HeartHandshake className="w-12 h-12 text-white mb-4" />, 
      title: "Relief Rehabilitation", 
      desc: "Time to time Social relief services also provided to Muslims and other people by Madrasa Mahmoodia along with Modern and Islamic Education.",
      bg: "bg-[#4caf50]"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h3 className="text-[#2b4c7e] font-bold text-lg">Activities Of</h3>
        <h2 className="text-4xl font-bold text-[#4caf50]">Madrasa</h2>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        {activities.map((act, idx) => (
          <div key={idx} className={`flex-1 ${act.bg} text-white p-12 flex flex-col items-center text-center`}>
            {act.icon}
            <h3 className="text-2xl font-bold mb-4">{act.title}</h3>
            <p className="mb-8 leading-relaxed">{act.desc}</p>
            <button className={`${act.bg === 'bg-[#2e7d32]' ? 'bg-transparent border-2 border-white text-white' : 'bg-white text-[#4caf50]'} px-8 py-2 rounded-full font-bold hover:bg-opacity-90 transition mt-auto`}>
              READ MORE
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const Courses = () => {
  const courses = [
    { icon: <Book className="w-8 h-8 text-[#4caf50]" />, title: "Tahfeez-ul-Quran", desc: "This department is a respectable department in which 45 students are getting their education and 3 teachers give them their best teaching service. For Hifz classes urdu dictation is must and to increase speech power \"Anjuman-Taqwiyatul-Kalaam\" is provided." },
    { icon: <Mic className="w-8 h-8 text-[#4caf50]" />, title: "Tajweed And Qira't", desc: "This is such a vital department in which reading of Quran is must with Tajweed & Qira't for all the students from Urdu First year to Persian class. Two skilled teachers are teaching in this departments." },
    { icon: <Languages className="w-8 h-8 text-[#4caf50]" />, title: "Persian And Deeniyat", desc: "This is also one of the significant department of this madrasa. There are 99 students getting their education in this department who are under supervision of 5 teachers." },
    { icon: <Monitor className="w-8 h-8 text-[#4caf50]" />, title: "Modern Education", desc: "This is the modern education department in Madrasa. There are 7 teachers in this departments. For making student talented from class Atfal to Persian, a library is also available." },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gray-50 rounded-l-full -z-10 opacity-50"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-[#2b4c7e] font-bold text-lg">Available Courses</h3>
          <h2 className="text-4xl font-bold text-[#4caf50]">In Madrasa</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {courses.map((course, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                {course.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2b4c7e] mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{course.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-[#2b4c7e] text-white px-10 py-3 rounded-full font-bold hover:bg-blue-800 transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

const Certificates = () => (
  <section className="py-16 bg-[#4caf50] text-white text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">FCRA / 12AA / 80G</h2>
      <p className="mb-12 max-w-4xl mx-auto font-medium">
        All The Donations Are Exempted Under U/S 80-G Of IT Act VIDE CIT. JAIPUR Certificate No. AAEAM7050P 08/2017-18/S-365/80G
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white p-2 rounded shadow-lg">
            <img 
              src={`https://placehold.co/400x500/ffffff/cccccc?text=Certificate+${i}`} 
              alt={`Certificate ${i}`} 
              className="w-full h-auto border border-gray-200"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Gallery = () => {
  const items = [
    { img: "https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Independance Day Program" },
    { img: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Masjid Of Jamia" },
    { img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Student Before Salah" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#4caf50]">Photo Gallery</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 flex flex-col">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-center flex-1 flex flex-col justify-between">
                <h3 className="text-xl font-bold text-[#2b4c7e] mb-4">{item.title}</h3>
                <button className="bg-[#4caf50] text-white px-6 py-2 rounded-full font-bold hover:bg-green-600 transition mx-auto inline-block">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FooterCTA = () => (
  <section className="py-16 bg-[#4caf50] relative overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <img 
        src="https://images.unsplash.com/photo-1564769625905-50e93615e769?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
        alt="Background" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="container mx-auto px-4 relative z-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white">Thanks For Visiting Our Website</h2>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#222222] text-gray-300 py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 font-serif flex items-center gap-2">
            <Building className="w-8 h-8" />
            جامعہ محمودیہ
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
              <span>Sherpura Ujlan, Pokhran, Distt. Jaisalmer</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400 shrink-0" />
              <span>91-98294 66560+</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400 shrink-0" />
              <span>info@madrasamtq.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400 shrink-0" />
              <span>madarsamahmoodiya2@gmail.com</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Important Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Departments & Courses</a></li>
            <li><a href="#" className="hover:text-white transition">Needs & Future Plans</a></li>
            <li><a href="#" className="hover:text-white transition">How To Donate</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition">Madrasa At A Glance</a></li>
            <li><a href="#" className="hover:text-white transition">About Madrasa</a></li>
            <li><a href="#" className="hover:text-white transition">Our Certificates</a></li>
            <li><a href="#" className="hover:text-white transition">Aims & Objectives</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition">Social Relief</a></li>
            <li><a href="#" className="hover:text-white transition">Photo Gallery</a></li>
            <li><a href="#" className="hover:text-white transition">Video Gallery</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>Copyright © 2019. Madrasa Mahmoodia Tajweedul Quran.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#4caf50] transition text-white"><Twitter className="w-4 h-4" /></a>
          <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#4caf50] transition text-white"><Facebook className="w-4 h-4" /></a>
          <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#4caf50] transition text-white"><Instagram className="w-4 h-4" /></a>
          <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#4caf50] transition text-white"><Youtube className="w-4 h-4" /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50">
      <Header />
      <Hero />
      <Introduction />
      <Pillars />
      <Activities />
      <Courses />
      <Certificates />
      <Gallery />
      <FooterCTA />
      <Footer />
    </div>
  );
}
