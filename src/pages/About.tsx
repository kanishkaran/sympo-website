
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-blue-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          About <span className="text-blue-400">COGNEBULA '25</span>
        </h1>
        <div className="space-y-6 sm:space-y-8 text-center">
          {/* Introduction Section */}
          <p className="text-lg sm:text-xl">
            Welcome to <span className="font-bold text-blue-400">Cognebula '25</span>, 
            the annual symposium hosted by the Department of Artificial Intelligence & Data Science at 
            <span className="text-blue-300"> Velammal Engineering College</span>. 
            A celebration of technology, innovation, and collaboration, Cognebula is a 
            platform for tech enthusiasts, innovators, and dreamers.
          </p>

          {/* Event Highlights Section */}
          <div className="bg-black/50 backdrop-blur-md rounded-lg p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gold-gradient mb-4">
              Event Highlights
            </h2>
            <ul className="list-disc list-inside space-y-3 text-left sm:text-center">
              <li>Engaging <span className="text-blue-300">Technical Competitions</span> to showcase your skills.</li>
              <li>Creative <span className="text-blue-300">Non-Technical Activities</span> for fun and bonding.</li>
              <li>Exclusive <span className="text-blue-300">Workshops</span> led by industry experts.</li>
              <li>A vibrant platform with <span className="text-blue-300">500+ participants</span> from across the region.</li>
            </ul>
          </div>

          {/* Purpose Section */}
          <p className="text-lg sm:text-xl">
            Our mission is to empower individuals to harness the potential of artificial intelligence 
            and data science while fostering an environment of creativity, learning, and networking. 
            Whether you are a tech enthusiast or someone looking for inspiration, Cognebula '25 has 
            something for everyone.
          </p>

          {/* Call to Action Section */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => window.open("https://shorturl.at/CVF4K", "_blank")}
              className="bg-gradient-to-r from-blue-500 to-yellow-500 text-navy px-6 py-3 rounded-md font-bold text-lg hover:opacity-90 transition shadow-lg"
            >
              Join Us and Be Part of the Innovation
            </button>
            <p className="text-sm text-gray-300 mt-4">
              Don’t miss this opportunity to connect, compete, and create!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
