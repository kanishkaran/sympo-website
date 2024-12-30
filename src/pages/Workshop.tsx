import { motion } from 'framer-motion';
import WorkshopCard from '../components/WorkshopCard';
import { Book, Code, Brain, Laptop, Database, BarChart, Cpu, FileSearch, Activity, ShieldAlert, Sliders} from 'lucide-react';

export default function Workshop() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  

  return (
    <div className="min-h-screen flex flex-col pt-24 px-4 bg-gradient-to-br from-navy via-navy-light to-navy">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gold-gradient">
          From Data Foundations to AI Elevations
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join us for an immersive workshop on cutting-edge AI and Data frameworks and technologies,
            led by industry experts from top tech companies.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <WorkshopCard
            title="Unlocking AI: From Data to Insights"
            date="Feb 15, 2025"
            time="1:00 PM - 3:00 PM"
            capacity="Limited participants"
            description="Learn about data foundations, AI advancements, and ethical considerations in this immersive workshop from industry Experts"
            imageUrl="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80"
            speaker={{
              name: 'Mr. Prasana Kumar Parthasarathy',
              organization: 'Capco',
            }}
          />

          
          <div className="space-y-6">
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-gold/30"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold mb-4 text-gold">What You'll Learn</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Brain, text: 'Understanding Data Foundations & Big Data Frameworks' },
                  { icon: Code, text: 'Building AI Models and Evaluating Performance' },
                  { icon: Laptop, text: 'Ethical and Responsible AI Practices' },
                  { icon: Book, text: 'Exploring AI Applications and Future Trends' }
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-white/90">
                    <item.icon className="w-5 h-5 mr-2 text-gold" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-gold/30"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold mb-4 text-gold">Topic Overview</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: <Database className="w-5 h-5 text-gold" />, topic: 'Understanding the Foundation of Data' },
                  { icon: <Sliders className="w-5 h-5 text-gold" />, topic: 'Big Data Frameworks' },
                  { icon: <BarChart className="w-5 h-5 text-gold" />, topic: 'Data Analytics' },
                  { icon: <Cpu className="w-5 h-5 text-gold" />, topic: 'Introduction to AI' },
                  { icon: <Code className="w-5 h-5 text-gold" />, topic: 'Building AI Models with Data' },
                  { icon: <Activity className="w-5 h-5 text-gold" />, topic: 'Evaluating Model Performance' },
                  { icon: <FileSearch className="w-5 h-5 text-gold" />, topic: 'AI in Action' },
                  { icon: <ShieldAlert className="w-5 h-5 text-gold" />, topic: 'Ethical and Responsible AI' },
                  { icon: <Activity className="w-5 h-5 text-gold" />, topic: 'Bias in AI Models' },
                  { icon: <Book className="w-5 h-5 text-gold" />, topic: 'Future of AI' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 text-white/90">
                    {item.icon}
                    <span>{item.topic}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-gold/30">
            <h3 className="text-xl font-bold mb-4 text-gold">Prerequisites</h3>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-center">
                <Code className="w-5 h-5 mr-2 text-gold" />
                Familiarity with Basic Python Programming
              </li>
              <li className="flex items-center">
                <Brain className="w-5 h-5 mr-2 text-gold" />
                Enthusiasm to Explore and Learn the World of AI
              </li>
              <li className="flex items-center">
                <Laptop className="w-5 h-5 mr-2 text-gold" />
                Laptop (Recommended for Hands-on Practice)
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-gold/30">
            <h3 className="text-xl font-bold mb-4 text-gold">What We Provide</h3>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-center">
                <Book className="w-5 h-5 mr-2 text-gold" />
                Comprehensive Workshop Materials
              </li>
              <li className="flex items-center">
                <Code className="w-5 h-5 mr-2 text-gold" />
                In-depth Knowlegde
              </li>
              <li className="flex items-center">
                <Brain className="w-5 h-5 mr-2 text-gold" />
                Certificate of Completion
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <button
            onClick={() => window.open("https://your-google-form-url-here", "_blank")}
            className="inline-block bg-gradient-to-r from-gold to-gold-light text-navy px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Register for Workshop
          </button>
          <p className="text-white/70 mt-4">
            Limited seats available. Early bird registrations get special benefits!
          </p>
        </motion.div>
      </div>
    </div>
  );
}