import { motion } from 'framer-motion';
import { Star, Users, ClipboardCheck, Award, Feather, PiggyBank } from 'lucide-react';

const generalCredits = [
  {
    category: "Staff Coordinator",
    members: ["Rajasuganya P.V"],
    icon: Star,
  },
  {
    category: "Student Coordinators",
    members: [
      "Charan",
      "Jasmine Rennita V",
      "Kanishkaran",
      "Keerthana",
    ],
    icon: Users,
  },
  {
    category: "Committee Leads",
    members: ["Aparna K", "Jagadeesh"],
    icon: ClipboardCheck,
  },
  {
    category: "Tech Leads",
    members: ["Tharun", "Trisha B"],
    icon: Award,
  },
  {
    category: "Non-Tech Leads",
    members: ["Prithi Prasanna P", "Gowtham"],
    icon: Feather,
  },
  {
    category: "Treasurer",
    members: ["Prabhakar "],
    icon: PiggyBank,
  },
];

const committeeCredits = [
  { committee: "Documentation", members: ["Prithi Prasanna", "Jasmine"] },
  { committee: "Food", members: ["Aparna"] },
  { committee: "Registration & Tag Distribution", members: ["Sumisha", "Swetha", "Rahul", "Dhanush"] },
  { committee: "Certification", members: ["Dharunikha"] },
  { committee: "Editing", members: ["Dhanushkodi", "Rakesh", "Vishal"] },
  { committee: "Marketing", members: ["Parnika", "Lekha"] },
  { committee: "Decoration", members: ["Kezia", "Sumisha", "Madesh", "Pranov"] },
  { committee: "Sponsorship", members: ["Pranav G", "Parnika R", "Kezia"] },
  { committee: "Photography", members: ["Vishal Raj"] },
  { committee: "Social Media", members: ["Charan", "Parnika", "Aparna"] },
  { committee: "Hospitality", members: ["Juniors"] },
  { committee: "Stall", members: ["Naveen M"] },
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
