"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Rocket, Check } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "./language-provider";

export function HeroSection() {
  const { t } = useLanguage();

  const slogans = Array.from({ length: 6 }, (_, i) =>
    t(`hero.slogan.${i + 1}`)
  ).filter(Boolean);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 sm:py-32">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="">
        <motion.div
          className="mx-auto max-w-4xl text-center px-4 sm:px-6 md:max-w-5xl lg:max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8 inline-flex items-center rounded-full border bg-white/80 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium shadow-sm backdrop-blur-sm"
          >
            <Rocket className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-purple-600" />
            {t("hero.badge")}
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-6 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t("hero.title")}
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mb-8 font-semibold text-gray-700 text-lg sm:text-xl md:text-2xl max-w-xl mx-auto"
          >
            {t("hero.subtitle")}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mb-10 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 px-4 sm:px-0"
          >
            <Button
              size="lg"
              className="text-lg px-6 py-3 h-auto bg-blue-600 hover:bg-blue-700 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {t("cta.startFree")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-6 py-3 h-auto bg-transparent shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              asChild
            >
              <Link href="/methodology">
                <Play className="mr-2 h-5 w-5" />
                {t("hero.secondary")}
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-600 mb-12 px-4 sm:px-0"
          >
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              <p className="font-bold">{t("cta.noCard")}</p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              <p className="font-bold">{t("cta.freeTrial")}</p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4 sm:px-0"
          >
            {slogans.map((slogan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-gray-200 hover:bg-white/80 transition-all duration-300 hover:scale-105"
              >
                <p className="text-sm font-medium text-gray-700">{slogan}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000" />
    </section>
  );
}
