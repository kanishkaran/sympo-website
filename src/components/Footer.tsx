import { YoutubeIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

export default function Footer() {
  const coordinators = [
    {
      name: "Dr. Visu P",
      role: "Head of Department (AI & DS)",
      phone: "",
      email: "hodaids@velammal.edu.in",
    },
    {
      name: "Mrs. Rajasuganya P.V",
      role: "Staff Coordinator",
      phone: "",
      email: "rajasuganya@velammal.edu.in",
    },
    {
      name: "Charan K",
      role: "Student Coordinator",
      phone: "+91 99949 23310",
      email: "charankesavanm@gmail.com",
    },
    {
      name: "Jasmine Rennita V",
      role: "Student Coordinator",
      phone: "+91 79045 23860",
      email: "jasminerennita15403@gmail.com",
    },
    {
      name: "Kanishkaran M",
      role: "Student Coordinator",
      phone: "+91 63745 38518",
      email: "kanishkaran456@gmail.com",
    },
    {
      name: "Keerthana S",
      role: "Student Coordinator",
      phone: "+91 88387 86784",
      email: "keerthanas1200@gmail.com",
    },
  ];

  return (
    <footer className="bg-navy-light text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gold mb-4">Contact </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coordinators.map((coordinator, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold">{coordinator.name}</h4>
                  <p className="text-sm text-gray-300">{coordinator.role}</p>
                  <p className="text-sm">{coordinator.phone}</p>
                  <p className="text-sm">{coordinator.email}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gold mb-4">Location</h3>
            <div className="h-64 w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124325.90539857533!2d80.10915994683197!3d13.15075657230726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264a10c856599%3A0xac3348f41097ba7f!2sVelammal%20Engineering%20College!5e0!3m2!1sen!2sin!4v1734858907283!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a
              href="https://www.instagram.com/cognebula_2k25/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 rounded-full shadow-lg hover:scale-110 transition-all"
            >
              <InstagramIcon className="text-white h-8 w-8 sm:h-10 sm:w-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/cognebula-ai-ds/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full shadow-lg hover:scale-110 transition-all"
            >
              <LinkedinIcon className="text-navy h-8 w-8 sm:h-10 sm:w-10" />
            </a>
          </div>
          <p className="mt-4">Velammal Engineering College, Surapet, Chennai</p>
          <p>&copy; 2025 COGNEBULA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
