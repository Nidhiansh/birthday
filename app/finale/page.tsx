"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Heart, Sparkles, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FinalePage() {
  const [showVideo, setShowVideo] = useState(false)
  const [showFireworks, setShowFireworks] = useState(false)
  const [showFinalMessage, setShowFinalMessage] = useState(false)

  const playVideo = () => {
    setShowVideo(true)
    // Fireworks will now be triggered by the video's onEnded event
  }

  // Fireworks animation
  const fireworks = [...Array(12)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    color: ["#ff6b9d", "#c44569", "#f8b500", "#3742fa", "#2ed573"][Math.floor(Math.random() * 5)],
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Fireworks */}
      <AnimatePresence>
        {showFireworks && (
          <div className="absolute inset-0 pointer-events-none">
            {fireworks.map((firework) => (
              <motion.div
                key={firework.id}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left: `${firework.x}%`,
                  top: `${firework.y}%`,
                  backgroundColor: firework.color,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: firework.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300 opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${16 + Math.random() * 20}px`,
            }}
            animate={{
              y: [window.innerHeight + 100, -100],
              rotate: [0, 360],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 8,
            }}
          >
            <Heart fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {!showVideo && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 mb-8">
              The Grand Finale
            </h1>

            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="mb-12"
            >
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-pink-500/25 transition-all duration-300">
                <Play className="w-24 h-24 text-white ml-2" />
              </div>
            </motion.div>

            <p className="text-xl md:text-2xl text-pink-200 mb-8 leading-relaxed">
              I've created something special just for you...
              <br />
              <span className="text-lg opacity-80">A video montage of our beautiful memories together</span>
            </p>

            <Button
              onClick={playVideo}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Play className="w-6 h-6 mr-3" />
              Play Our Love Story
            </Button>
          </motion.div>
        )}

        {showVideo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-2xl mx-auto" // Reduced max-width for vertical video
          >
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl mb-8">
              <video
                className="w-full h-auto max-h-[70vh] object-contain" // Adjusted for vertical video
                controls
                autoPlay
                muted // Required for autoplay in most browsers
                onEnded={() => {
                  setShowFireworks(true)
                  setTimeout(() => {
                    setShowFinalMessage(true)
                  }, 3000)
                }}
              >
                <source src="/videos/y.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {!showFinalMessage && (
              <p className="text-pink-200 text-lg">Watching our journey together... 💕</p>
            )}
          </motion.div>
        )}

        <AnimatePresence>
          {showFinalMessage && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto mt-12"
            >
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-pink-300/30 shadow-2xl"
              >
                <Sparkles className="w-16 h-16 text-yellow-300 mx-auto mb-6" />

                <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 mb-6">
                  Happy Birthday, My Love! 🎉
                </h2>

                <p className="text-lg md:text-xl text-pink-200 leading-relaxed mb-8">
                  This website is just a small digital hug until I can hold you in person again.
                  <br />
                  You mean the world to me, and I can't wait to celebrate many more birthdays with you.
                  <br />
                  <span className="text-yellow-300 font-semibold">
                    Here's to another year of your amazing existence! ✨
                  </span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-pink-500/25 transition-all duration-300"
                    >
                      <Home className="w-5 h-5 mr-2" />
                      Start Over
                    </Button>
                  </Link>

                  <p className="text-pink-300 text-sm">Relive this magical journey anytime 💖</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}