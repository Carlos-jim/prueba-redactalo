"use client";

import { useState } from "react";
import { Star, Quote, ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";

export default function CustomersPage() {
  const { t } = useLanguage();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const customers = [
    {
      id: 1,
      name: t("customers.customer1.name"),
      role: t("customers.customer1.role"),
      company: t("customers.customer1.company"),
      avatar: "/avatars/juliane.jpg",
      rating: 5,
      testimonial: t("customers.customer1.testimonial"),
      metrics: { growth: "+340%", efficiency: "95%" },
      industry: "redactalo.ai",
    },
    {
      id: 2,
      name: t("customers.customer2.name"),
      role: t("customers.customer2.role"),
      company: t("customers.customer2.company"),
      avatar: "/avatars/lisa.jpg",
      rating: 5,
      testimonial: t("customers.customer2.testimonial"),
      metrics: { growth: "+280%", efficiency: "92%" },
      industry: "redactalo.ai",
    },
    {
      id: 3,
      name: t("customers.customer3.name"),
      role: t("customers.customer3.role"),
      company: t("customers.customer3.company"),
      avatar: "/avatars/jaime.jpg",
      rating: 5,
      testimonial: t("customers.customer3.testimonial"),
      metrics: { growth: "+420%", efficiency: "98%" },
      industry: "redactalo.ai",
    },
  ];

  const stats = [
    {
      icon: Zap,
      value: "10M+",
      label: t("customers.stat1.label"),
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Shield,
      value: "99.9%",
      label: t("customers.stat2.label"),
      color: "from-indigo-400 to-indigo-600",
    },
    {
      icon: Sparkles,
      value: "500+",
      label: t("customers.stat3.label"),
      color: "from-sky-400 to-sky-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-50 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            {t("customers.badge")}
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            {t("customers.title.line1")}
            <span className="block bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              {t("customers.title.line2")}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t("customers.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div variants={itemVariants} key={index}>
              <Card className="bg-white/80 backdrop-blur-xl border border-blue-100 hover:border-blue-200 transition-all duration-500 group shadow-lg hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-slate-800 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-600">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {customers.map((customer) => (
            <motion.div variants={itemVariants} key={customer.id}>
              <Card
                key={customer.id}
                className={`relative bg-white/90 backdrop-blur-xl border transition-all duration-500 cursor-pointer group shadow-lg hover:shadow-2xl ${
                  activeCard === customer.id
                    ? "border-blue-300 shadow-2xl shadow-blue-500/20 scale-105"
                    : "border-blue-100 hover:border-blue-200"
                }`}
                onMouseEnter={() => setActiveCard(customer.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardContent className="relative p-8">
                  <div className="absolute top-4 right-4 text-blue-200">
                    <Quote className="w-8 h-8" />
                  </div>

                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <img
                        src={customer.avatar || "/placeholder.svg"}
                        alt={customer.name}
                        className="w-16 h-16 rounded-full border-2 border-blue-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-slate-800 font-semibold text-lg">
                        {customer.name}
                      </h3>
                      <p className="text-slate-600 text-sm">{customer.role}</p>
                      <p className="text-blue-600 text-sm font-medium">
                        {customer.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(customer.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    {customer.testimonial}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-500">
                        {customer.metrics.growth}
                      </div>
                      <div className="text-xs text-slate-500">{t("customers.metric.growth")}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-500">
                        {customer.metrics.efficiency}
                      </div>
                      <div className="text-xs text-slate-500">{t("customers.metric.efficiency")}</div>
                    </div>
                  </div>
                  <Badge className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-700 border border-blue-200">
                    {customer.industry}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section  */}
        <div className="text-center">
           <Card className="bg-gradient-to-r from-blue-500/5 to-indigo-500/5 backdrop-blur-xl border border-blue-200 max-w-4xl mx-auto shadow-xl"> 
            <CardContent className="p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {t("customers.cta.title")}
              </h3>
              <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
                {t("customers.cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold group">
                  {t("customers.cta.primary")}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg bg-transparent"
                >
                  {t("customers.cta.secondary")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating Elements */}
       <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div> 
      <div className="absolute top-40 right-20 w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-sky-400 rounded-full animate-ping delay-500"></div>
    </motion.section>
  );
}
