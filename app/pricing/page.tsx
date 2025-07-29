"use client";

import { useState } from "react";
import { motion, AnimatePresence, Transition } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Rocket, Award, Users } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

interface Plan {
  name: string;
  icon: React.ElementType;
  price: {
    monthly: number | string;
    annual: number | string;
  };
  description: string;
  features: string[];
  popular: boolean;
}

export default function PricingPage() {
  const { t } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly"
  );

  const plans: Plan[] = [
    {
      name: t("pricing.basic"),
      icon: Rocket,
      price: { monthly: 97, annual: 78 },
      description: "Perfecto para profesionales que empiezan",
      features: [
        t("basic.feature1"),
        t("basic.feature2"),
        t("basic.feature3"),
        t("basic.feature4"),
        t("basic.feature5"),
      ],
      popular: false,
    },
    {
      name: t("pricing.pro"),
      icon: Award,
      price: { monthly: 297, annual: 238 },
      description: "Ideal para profesionales establecidos",
      features: [
        t("pro.feature1"),
        t("pro.feature2"),
        t("pro.feature3"),
        t("pro.feature4"),
        t("pro.feature5"),
        t("pro.feature6"),
        t("pro.feature7"),
      ],
      popular: true,
    },
    {
      name: t("pricing.enterprise"),
      icon: Users,
      price: { monthly: "Personalizado", annual: "Personalizado" },
      description: "Para empresas y equipos",
      features: [
        t("enterprise.feature1"),
        t("enterprise.feature2"),
        t("enterprise.feature3"),
        t("enterprise.feature4"),
        t("enterprise.feature5"),
      ],
      popular: false,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      } as Transition,
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <main>
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-950"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={itemVariants}>
              <Badge variant="secondary" className="mb-4">
                Planes y Precios
              </Badge>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white"
            >
              {t("pricing.title")}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              {t("pricing.subtitle")}
            </motion.p>
          </div>
        </motion.section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            <span
              className={`font-medium ${
                billingCycle === "monthly"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              Mensual
            </span>
            <div
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "annual" : "monthly"
                )
              }
              className={`relative w-14 h-8 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer p-1`}
            >
              <motion.div
                className="w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md"
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                style={{ x: billingCycle === "annual" ? "24px" : "0px" }}
              />
            </div>
            <span
              className={`font-medium ${
                billingCycle === "annual"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              Anual
            </span>
            <Badge
              variant="outline"
              className="text-green-600 border-green-300 dark:text-green-400 dark:border-green-600"
            >
              Ahorra 20%
            </Badge>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
          >
            {plans.map((plan, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className={`relative flex flex-col h-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 dark:bg-gray-900 ${
                    plan.popular
                      ? "border-2 border-primary shadow-primary/20 scale-105"
                      : "border dark:border-gray-800"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        <Star className="w-4 h-4 mr-1" />
                        Más Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.05, 1, 1.05, 1],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <plan.icon className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                    </motion.div>
                    <CardTitle className="text-xl sm:text-2xl font-bold dark:text-white">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-4">
                      {plan.price.monthly === "Personalizado" ? (
                        <div className="text-2xl sm:text-3xl font-bold dark:text-white">
                          {plan.price.monthly}
                        </div>
                      ) : (
                        <div className="relative flex items-baseline justify-center h-12 overflow-hidden">
                          <span className="text-3xl sm:text-4xl font-bold dark:text-white">
                            $
                          </span>
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={billingCycle}
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -20, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="inline-block text-3xl sm:text-4xl font-bold dark:text-white"
                            >
                              {plan.price[billingCycle]}
                            </motion.span>
                          </AnimatePresence>
                          <span className="text-muted-foreground ml-2 text-sm">
                            / mes
                          </span>
                        </div>
                      )}
                      {billingCycle === "annual" &&
                        plan.price.monthly !== "Personalizado" && (
                          <p className="text-sm text-muted-foreground mt-1">
                            Facturado anualmente
                          </p>
                        )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3"
                        >
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full mt-auto shadow-lg transition-all duration-300"
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                    >
                      {plan.price.monthly === "Personalizado"
                        ? t("pricing.contactUs")
                        : t("pricing.getStarted")}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="py-16 bg-gray-50 dark:bg-gray-900/50 px-4 sm:px-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-bold mb-4 dark:text-white"
              >
                {t("faq.title")}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-muted-foreground"
              >
                {t("faq.subtitle")}
              </motion.p>
            </div>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
            >
              {[1, 2, 3, 4].map((i) => (
                <motion.div key={i} variants={itemVariants}>
                  <h3 className="font-semibold mb-2 dark:text-white">
                    {t(`faq.question${i}`)}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t(`faq.answer${i}`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
