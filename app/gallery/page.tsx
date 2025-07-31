"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const photos = [
  {
    src: "/images/1.jpg",
  },
  {
    src: "/images/2.jpg",
  },
  {
    src: "/images/3.jpg",
  },
  {
    src: "/images/4.jpg",
  },
  {
    src: "/images/5.jpg",
  },
  {
    src: "/images/6.jpg",
  },
  {
    src: "/images/7.jpg",
  },
  {
    src: "/images/8.jpg",
  },
  {
    src: "/images/9.jpg",
  },
  // Add more photos as needed
]

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
          Our Beautiful Memories
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Every photo tells a story of our love, laughter, and the magic we create together
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.caption}
                width={800}
                height={600}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium">{photo.caption}</p>
                <p className="text-xs opacity-80">{photo.date}</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart className="w-6 h-6 text-pink-300" fill="currentColor" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link href="/letter">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-500 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-pink-500/25 transition-all duration-300"
            >
              Read My Letter to You
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[currentIndex].src || "/placeholder.svg"}
                alt={photos[currentIndex].caption}
                width={800}
                height={600}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-lg mb-2">{photos[currentIndex].caption}</p>
                <p className="text-pink-300 text-sm">{photos[currentIndex].date}</p>
              </div>

              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-pink-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-pink-300 transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-pink-300 transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
