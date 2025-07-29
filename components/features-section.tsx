"use client"

import { Badge } from "@/components/ui/badge"
import { Check, Clock, Shield, Target, TrendingUp, Users, Zap } from "lucide-react"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { useLanguage } from "./language-provider"

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Clock,
      title: t("features.item1.title"),
      description: [
        t("features.item1.desc.point1"),
        t("features.item1.desc.point2"),
        t("features.item1.desc.point3"),
        t("features.item1.desc.point4"),
        t("features.item1.desc.point5"),
      ],
      badge: t("features.item1.badge"),
      imageUrl: "/redactalo.png",
      color: "text-blue-600 bg-blue-100",
    },
    {
      icon: Target,
      title: t("features.item2.title"),
      description: [
        t("features.item2.desc.point1"),
        t("features.item2.desc.point2"),
        t("features.item2.desc.point3"),
      ],
      badge: t("features.item2.badge"),
      imageUrl: "/redactalo.png",
      color: "text-green-600 bg-green-100",
    },
    {
      icon: TrendingUp,
      title: t("features.item3.title"),
      description: [
        t("features.item3.desc.point1"),
        t("features.item3.desc.point2"),
        t("features.item3.desc.point3"),
      ],
      badge: t("features.item3.badge"),
      imageUrl: "/redactalo.png",
      color: "text-purple-600 bg-purple-100",
    },
    {
      icon: Users,
      title: t("features.item4.title"),
      description: [
        t("features.item4.desc.point1"),
        t("features.item4.desc.point2"),
        t("features.item4.desc.point3"),
      ],
      badge: t("features.item4.badge"),
      imageUrl: "/redactalo.png",
      color: "text-red-600 bg-red-100",
    },
    {
      icon: Zap,
      title: t("features.item5.title"),
      description: [
        t("features.item5.desc.point1"),
        t("features.item5.desc.point2"),
        t("features.item5.desc.point3"),
      ],
      badge: t("features.item5.badge"),
      imageUrl: "/redactalo.png",
      color: "text-yellow-600 bg-yellow-100",
    },
    {
      icon: Shield,
      title: t("features.item6.title"),
      description: [
        t("features.item6.desc.point1"),
        t("features.item6.desc.point2"),
        t("features.item6.desc.point3"),
      ],
      badge: t("features.item6.badge"),
      imageUrl: "/redactalo.png",
      color: "text-indigo-600 bg-indigo-100",
    },
  ]

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
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
    <section className="min-h-screen bg-gray-50 overflow-x-hidden py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="m-auto w-full max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Badge variant="secondary" className="mb-4">
              {t("features.badge")}
            </Badge>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t("features.title")}</motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("features.subtitle")}
          </motion.p>
        </motion.div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants}
            >
              <div className={`relative aspect-video w-full ${index % 2 !== 0 ? "lg:order-last" : ""}`}>
                {feature.imageUrl && (
                  <Image
                    fill
                    src={feature.imageUrl}
                    alt={feature.title}
                    className="rounded-lg shadow-xl object-cover transition-transform duration-500 hover:scale-105"
                  />
                )}
              </div>

              <div>
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className="inline-block mb-4"
                >
                  <div className={`p-3 rounded-lg ${feature.color}`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold tracking-tight mb-3">{feature.title}</h3>
                {Array.isArray(feature.description) ? (
                  <ul className="space-y-3 text-lg text-muted-foreground leading-relaxed">
                    {feature.description.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
