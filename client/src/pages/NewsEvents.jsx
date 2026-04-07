import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react';

const NewsEvents = () => {
  const events = [
    {
      id: 1,
      title: "Empowering Women, Inspiring Change – Women's Day 2026",
      date: "March 8, 2026",
      time: "10:00 AM - 4:00 PM",
      location: "College Auditorium",
      description: "Celebrating International Women's Day with inspiring talks, workshops, and cultural programs.",
      category: "Cultural",
      image: "/api/placeholder/400/250",
      attendees: 500
    },
    {
      id: 2,
      title: "Road Safety Awareness Programme",
      date: "December 11, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "College Campus",
      description: "Awareness program on road safety in collaboration with local traffic police.",
      category: "Awareness",
      image: "/api/placeholder/400/250",
      attendees: 300
    },
    {
      id: 3,
      title: "Techno Vision 2K25 Project Exhibition",
      date: "December 4-5, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Engineering Block",
      description: "Annual project exhibition showcasing innovative student projects and research work.",
      category: "Technical",
      image: "/api/placeholder/400/250",
      attendees: 800
    },
    {
      id: 4,
      title: "ATAL FDP on Internet of Things",
      date: "January 8, 2026",
      time: "10:00 AM - 4:00 PM",
      location: "Seminar Hall",
      description: "Six-day Faculty Development Program on IoT applications and emerging technologies.",
      category: "Academic",
      image: "/api/placeholder/400/250",
      attendees: 50
    },
    {
      id: 5,
      title: "IEEE International Conference",
      date: "February 15-16, 2026",
      time: "9:00 AM - 6:00 PM",
      location: "Conference Hall",
      description: "International conference on recent trends in engineering and technology.",
      category: "Conference",
      image: "/api/placeholder/400/250",
      attendees: 200
    },
    {
      id: 6,
      title: "Independence Day Celebration",
      date: "August 15, 2025",
      time: "8:00 AM - 11:00 AM",
      location: "College Ground",
      description: "Flag hoisting ceremony and cultural programs celebrating India's independence.",
      category: "National",
      image: "/api/placeholder/400/250",
      attendees: 1000
    }
  ];

  const news = [
    {
      id: 1,
      title: "8 Student Projects Selected by KSCST",
      date: "March 2, 2026",
      excerpt: "Congratulations to our students whose projects have been selected for sponsorship under the 49th Series (2025-26) by Karnataka State Council for Science and Technology.",
      category: "Achievement",
      readMore: "#"
    },
    {
      id: 2,
      title: "Faculty Recruitment Notification",
      date: "December 15, 2025",
      excerpt: "Applications are invited from eligible candidates for faculty positions. Last date to apply: 31 December 2025.",
      category: "Announcement",
      readMore: "#"
    },
    {
      id: 3,
      title: "SERB Research Grant Awarded",
      date: "November 20, 2025",
      excerpt: "KLECET secured a grant of 25 Lakh for research proposal by SERB, Govt. of India.",
      category: "Research",
      readMore: "#"
    },
    {
      id: 4,
      title: "Best Project Award by KSCST",
      date: "October 15, 2025",
      excerpt: "Our college project received the 'Best Project of the Year' Award by Karnataka State Council for Science and Technology.",
      category: "Achievement",
      readMore: "#"
    }
  ];

  const categories = ["All", "Academic", "Technical", "Cultural", "Conference", "National"];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6"
          >
            News & Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Stay updated with the latest happenings at KLE College
          </motion.p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join us for exciting events and activities
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-600 hover:bg-primary-200 dark:hover:bg-primary-900/40 transition-colors duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="card overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                  <Calendar className="h-12 w-12 text-white" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      {event.attendees}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {event.description}
                  </p>

                  <button className="w-full btn-primary text-center">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest News
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Stay informed about college updates and achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900/20 text-secondary-600 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.excerpt}
                </p>

                <a
                  href={item.readMore}
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 font-semibold"
                >
                  Read More <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Event Gallery
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Capturing memorable moments from our events
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Technical Talk", count: 12 },
              { title: "GTTC Training", count: 8 },
              { title: "Industrial Visits", count: 15 },
              { title: "Cultural Events", count: 20 }
            ].map((gallery, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-primary-400 to-secondary-400 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold">{gallery.count}</div>
                    <div className="text-sm">Photos</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="font-semibold">{gallery.title}</div>
                    <div className="text-sm">View Gallery</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="btn-primary">
              View All Galleries
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Stay Updated
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 text-blue-100"
          >
            Subscribe to our newsletter for the latest news and events
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100 px-8">
              Subscribe
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewsEvents;