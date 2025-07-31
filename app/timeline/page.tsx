"use client"

import { motion } from "framer-motion"
import { Calendar, Heart, Star, Gift, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const timelineEvents = [
  {
    date: "August 01, 2023",
    title: "The Day We Met",
    description:
      "Our first meeting after me confessing my feelings. I still remember how I was shivering and nervous.",
    image: "/images/a.jpg",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
  },
  
  {
    date: "August 07, 2023",
    title: 'First "I Love You"',
    description: "I still remember I was coming from college and you asked for us to be the together, It was the first time we said I love you",
    image: "/images/b.jpg",
    icon: Heart,
    color: "from-red-500 to-pink-500",
  },
  {
    date: "September 26, 2023",
    title: "Our First Date",
    description: "We went to Hanuman mandir for our first date. And the fun part is that my parents also went there for their first date",
    image: "/images/c.jpg",
    icon: Star,
    color: "from-purple-500 to-pink-500",
  },
  
  {
    date: "Today",
    title: "Your Special Day",
    description: "Another year of your beautiful existence, and I get to celebrate it with you. Here's to many more!",
    image: "/images/e.jpg",
    icon: Gift,
    color: "from-yellow-500 to-orange-500",
  },
]

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 mb-4">
          Our Love Story Timeline
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Every moment with you is a treasure, every memory a precious gem in the story of us
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="container mx-auto px-4 pb-12">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-300 to-purple-300 h-full hidden md:block" />

          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-16 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-pink-400 rounded-full z-10 hidden md:block" />

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${isEven ? "md:pr-8" : "md:pl-8"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-pink-200 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${event.color} text-white mr-4`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center text-sm text-gray-500 mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {event.date}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                      </div>
                    </div>

                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />

                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            )
          })}
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-16"
        >
          <Link href="/finale">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
            >
              The Grand Finale
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
