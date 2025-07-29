"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, FileCode, Mail, Send, ShieldCheck } from "lucide-react"
import { useLanguage } from "./language-provider"
import { motion, Variants } from "framer-motion"

export function CTASection() {
  const { t, isLoaded } = useLanguage()

  const floatingIcons = [
    { icon: Mail, position: "top-1/4 left-[15%]", color: "bg-green-500/10 text-green-600", delay: 0, size: "p-3" },
    { icon: Send, position: "top-10 right-[15%]", color: "bg-blue-500/10 text-blue-600", delay: 1, size: "p-4" },
    { icon: BarChart3, position: "bottom-1/4 right-[10%]", color: "bg-yellow-500/10 text-yellow-600", delay: 2, size: "p-3" },
    { icon: FileCode, position: "bottom-1/3 left-[10%]", color: "bg-red-500/10 text-red-600", delay: 3, size: "p-4" },
    { icon: ShieldCheck, position: "top-1/2 right-[5%]", color: "bg-purple-500/10 text-purple-600", delay: 0.5, size: "p-2" },
  ]

  if (!isLoaded) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4 mx-auto w-96"></div>
              <div className="h-6 bg-gray-200 rounded mb-8 mx-auto w-full max-w-2xl"></div>
              <div className="h-12 bg-gray-200 rounded mb-8 mx-auto w-80"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="min-h-screen bg-gray-50 overflow-hidden flex items-center justify-center relative">
      <div className="container relative">
        {floatingIcons.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={index}
              className={`absolute ${item.position} hidden lg:block`}
              animate={{
                y: [0, -25, 0], 
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                delay: item.delay, 
              }}
            >
              <div className={`rounded-xl backdrop-blur-sm ${item.color} ${item.size}`}>
                <Icon className="h-8 w-8" />
              </div>
            </motion.div>
          )
        })}


        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            {t("cta.section.title")}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl mb-8 text-muted-foreground">
            {t("cta.section.subtitle")}
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-8">
            <Button
              size="lg"
              className="whitespace-nowrap bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-1"
            >
              {t("cta.startFree")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}