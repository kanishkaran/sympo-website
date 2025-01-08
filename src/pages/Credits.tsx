import { motion } from 'framer-motion';
import { Star, Users, ClipboardCheck, Award, Feather, PiggyBank, UserCircle } from 'lucide-react';

const generalCredits = [
  {
    category: "Head of the Department (AI & DS)",
    members: ["Dr. Visu P"],
    icon: UserCircle,
  },
  {
    category: "Staff Coordinator",
    members: ["Mrs. Rajasuganya P.V"],
    icon: Star,
  },
  {
    category: "Student Coordinators",
    members: [
      "Charan K",
      "Jasmine Rennita V",
      "Kanishkaran M",
      "Keerthana S",
    ],
    icon: Users,
  },
  {
    category: "Committee Leads",
    members: ["Aparna K", "Jagadeesh M"],
    icon: ClipboardCheck,
  },
  {
    category: "Tech Leads",
    members: ["Tharun E", "Trisha B"],
    icon: Award,
  },
  {
    category: "Non-Tech Leads",
    members: ["Prithi Prasanna P", "Gowtham S"],
    icon: Feather,
  },
  {
    category: "Treasurer",
    members: ["Prabhakar V"],
    icon: PiggyBank,
  },
];

const committeeCredits = [
  { committee: "Canvasing Committee", members: ["Jeffrey Terrance Daniel", "Charan K", "Jasmine Rennita V"] },
  { committee: "Certification Committee", members: ["Dharunikha N"] },
  { committee: "Decoration Committee", members: ["Kezia Sona Francisca M A", "Sumisha D", "Madesh Pon Durai S I", "Pranov L"] },
  { committee: "Documentation Committee", members: ["Charan K", "Jasmine Rennita V"] },
  { committee: "Editing Committee", members: ["Dhanush Kodi S"] },
  { committee: "Food Committee", members: ["Aparna K", "Athiqur Raasith M S"] },
  { committee: "Hospitality Committee", members: ["Aparna K", "Jagadeesh M"] },
  { committee: "Marketing Committee", members: ["Parnika R", "Lekha S", "Gowtham S"] },
  { committee: "Photography Committee", members: ["Vishal Raj T", "Rakesh M"] },
  { committee: "Registration Committee", members: ["Sumisha D", "Swetha R", "Rahul A", "Dhanush S"] },
  { committee: "Sponsorship Committee", members: ["Pranav Kumar G", "Parnika R", "Kezia Sona Francisca M A"] },
  { committee: "Stall Committee", members: ["Pranav Kumar G", "Pranov L", "Bharath P R"] },
];

export default function Credits() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen flex flex-col pt-24 px-4 bg-gradient-to-br from-navy via-navy-light to-navy">
      <div className="max-w-7xl mx-auto">
        {/* General Credits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gold-gradient">
            Credits
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Recognizing the incredible efforts of our final-year students from the Artificial Intelligence and Data Science department, behind COGNEBULA'25.
          </p>
          {/* <p className="text-lg text-gold/80 mt-4">
            "One last time, together we shine."
          </p> */}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {generalCredits.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-gold/30"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <item.icon className="w-6 h-6 text-gold" />
                <h3 className="text-xl font-bold text-gold">{item.category}</h3>
              </div>
              <ul className="space-y-2 text-white/90">
                {item.members.map((member, idx) => (
                  <li key={idx} className="flex items-center">
                    <span>{member}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Committee Credits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gold-gradient">
            Committees
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
          A closer look at the committees and their contributions to the event.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {committeeCredits.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-gold/30"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-xl font-bold mb-4 text-gold">{item.committee}</h3>
              <ul className="space-y-2 text-white/90">
                {item.members.map((member, idx) => (
                  <li key={idx}>{member}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Farewell Message */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <p className="text-lg text-white/70">
            As we bid farewell to this incredible journey, we hope this symposium becomes a cherished memory, marking the culmination of our efforts.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
