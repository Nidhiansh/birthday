"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Heart, Lock, Unlock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const letterText = `My Dearest Surbhi,

As I write this letter, my heart is overflowing with love and gratitude for having you in my life. Today isn't just your birthday – it's a celebration of the incredible person you are and the joy you bring to everyone around you.

From the moment we met, you've been a source of light in my world. Your laugh is my favorite sound, your smile my favorite sight, and your love my greatest treasure. You have this amazing ability to make ordinary moments feel magical, and every day with you feels like a gift.

Thank you for being patient with my silly jokes, for supporting my dreams even when they seem impossible, and for loving me exactly as I am. Thank you for the late-night conversations, and the quiet moments where we just exist together in perfect harmony.

On this special day, I want you to know that you are cherished, you are loved, and you are absolutely extraordinary. I can't wait to create more beautiful memories with you and to see what amazing things this new year of your life will bring.

Happy Birthday, my love. Here's to you, to us, and to all the adventures that await us.

With all my love and endless birthday wishes,
Your devoted admirer 💖
      (🦛🦛🦛🦛)`

export default function LetterPage() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (isUnlocked && currentIndex < letterText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(letterText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 30)
      return () => clearTimeout(timer)
    }
  }, [isUnlocked, currentIndex])

  const unlockLetter = () => {
    setIsUnlocked(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-200 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${12 + Math.random() * 16}px`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          >
            <Heart fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-pink-600 mb-4">
            A Letter From My Heart
          </h1>
          <p className="text-lg text-gray-600">Written with love, sealed with a kiss 💋</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {!isUnlocked ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 text-center border border-pink-200"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="mb-8"
              >
                <Lock className="w-16 h-16 text-pink-500 mx-auto" />
              </motion.div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">A Special Message Awaits</h2>
              <p className="text-gray-600 mb-8 text-lg">
                This letter contains all the words my heart wants to share with you.
                <br />
                Are you ready to unlock it?
              </p>

              <Button
                onClick={unlockLetter}
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Unlock className="w-5 h-5 mr-2" />
                Unlock My Heart
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-200"
            >
              <div className="prose prose-lg max-w-none">
                <div className="font-serif text-gray-800 leading-relaxed text-lg whitespace-pre-line">
                  {displayedText}
                  {currentIndex < letterText.length && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                      className="text-pink-500"
                    >
                      |
                    </motion.span>
                  )}
                </div>
              </div>

              {currentIndex >= letterText.length && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex justify-center items-center mt-12 pt-8 border-t border-pink-200"
                >
                  <Link href="/timeline">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-pink-500/25 transition-all duration-300"
                    >
                      Journey Through Our Timeline
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}