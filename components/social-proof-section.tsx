"use client"

import Image from "next/image"
import { motion, Variants } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"
import { ArrowRight } from "lucide-react"


const companies = [
  { name: "Insparya" },
  { name: "Freshly Cosmetics" },
  { name: "Genesy" },
  { name: "Etalentum" },
  { name: "Morillas" },
]

const users = [
  { name: "Mireia Trepat", title: "(ex-CMO Freshly Cosmetics)", avatar: "/avatars/juliane.jpg" },
  { name: "Anna Bayón", title: "(LinkedIn Top Voice)", avatar: "/avatars/sophie.jpg" },
  { name: "Kai Brandt", title: "(CEO - Genesy)", avatar: "/avatars/samuel.jpg" },
  { name: "Mathieu Carenzo", title: "(Business Angel & Author)", avatar: "/avatars/lisa.jpg" },
  { name: "Lena Bödeker", title: "Co-Founder - Current Energy", avatar: "/avatars/lena.jpg" },
  { name: "Jaime Gomez", title: "Co-Founder - Looks", avatar: "/avatars/jaime.jpg" },
  { name: "Alina Rauch", title: "Founder & Podcast Host", avatar: "/avatars/alina.jpg" },
  { name: "Marc Morillas", title: "(CEO - Morillas)", avatar: "/avatars/viggo.jpg" },
]

export function SocialProofSection() {
  const { t, isLoaded } = useLanguage()

  if (!isLoaded) {
    return (
      <section className="py-20 sm:py-28 bg-white">
        <div className="container mx-auto px-4 animate-pulse">
          <div className="h-8 bg-gray-200 rounded mx-auto w-3/4 md:w-1/2"></div>
          <div className="h-5 bg-gray-200 rounded mx-auto w-1/2 md:w-1/3 mt-4"></div>
          <div className="flex justify-center gap-8 md:gap-12 mt-12">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-8 w-24 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="flex justify-center gap-8 md:gap-12 mt-16">
            {[...Array(4)].map((_, i) => (
               <div key={i} className="w-24 h-24 bg-gray-200 rounded-full"></div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-20 sm:py-28 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t("social.title")}</h2>
            <Button asChild variant="outline" className="shrink-0 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <Link href="/customers">
                {t("cta.seeMore")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600">
            {t("social.subtitle")}
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 md:gap-x-16">
            {companies.map(company => (
              <motion.div
                key={company.name}
                variants={itemVariants}
                className="text-2xl font-semibold text-gray-600 hover:text-gray-600 transition-colors duration-300"
              >
                {company.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={itemVariants}
        >
          <motion.div
            className="flex gap-x-10"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              ease: "linear",
              duration: 4,
              repeat: Infinity,
            }}
          >
            {[...users, ...users].map((user, index) => (
              <div key={`${user.name}-${index}`} className="text-center flex-shrink-0 w-40">
                <Image src={user.avatar} alt={`Avatar of ${user.name}`} width={96} height={96} className="rounded-full mx-auto shadow-md" unoptimized />
                <h3 className="mt-4 text-base font-semibold text-gray-900 truncate">{user.name}</h3>
                <p className="mt-1 text-sm text-gray-600 truncate">{user.title}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}