"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";


export default function MethodologyPage() {
  const methodologySteps = [
    {
      icon: Target,
      title: "Análisis de Objetivos",
      description:
        "Definimos tus metas específicas y audiencia objetivo para crear una estrategia personalizada.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Users,
      title: "Creación de Contenido",
      description:
        "Desarrollamos posts auténticos que reflejan tu personalidad y expertise profesional.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: TrendingUp,
      title: "Optimización Continua",
      description:
        "Analizamos métricas y ajustamos la estrategia para maximizar el engagement y conversiones.",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen">
      <main>
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Nuestra Metodología
            </Badge>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl mb-6"
            >
              Metodología de Redactalo
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              El método Redactalo está diseñado para ayudar a profesionales y empresas B2B a conseguir visibilidad, autoridad y ventas creando contenido auténtico y personal para tener resultados en LinkedIn.
            </motion.p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-100 to-purple-100 p-10 shadow-xl"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-8">Transformación con Redactalo</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 items-center text-center gap-4">
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-blue-500 rounded-full text-white text-xl font-bold flex items-center justify-center mx-auto mb-2 shadow-lg"
                    >
                      1
                    </motion.div>
                    <p className="text-sm font-medium">Situación Actual</p>
                  </div>
                  <div className="hidden sm:block">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"
                    />
                  </div>
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-green-500 rounded-full text-white text-xl font-bold flex items-center justify-center mx-auto mb-2 shadow-lg"
                    >
                      ✓
                    </motion.div>
                    <p className="text-sm font-medium">Resultados Reales</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-block px-6 py-2 rounded-full bg-white text-purple-600 font-semibold shadow"
                  >
                    Metodología Redactalo como puente de éxito
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">7 Años de Experiencia</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Después de 7 años creando contenido en redes sociales, tanto para nosotros como para clientes, hemos decidido sintetizar todo este conocimiento en nuestro propio algoritmo para crear tu estrategia a medida según tus necesidades y objetivos.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nuestra metodología está basada en los conceptos que realmente importan para tener resultados y conseguir visibilidad, autoridad y ventas.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-lg flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.196-2.121M17 20H7m10 0v-2c0-1.654-.672-3.207-1.757-4.243M7 20H2v-2a3 3 0 015.196-2.121M7 20v-2c0-1.654.672-3.207 1.757-4.243m0 0a5.002 5.002 0 019.486 0"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium">Equipo trabajando en estrategia</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-4"
              >
                Cómo Funciona Nuestra Metodología
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl text-muted-foreground"
              >
                Un proceso probado en 3 pasos para transformar tu presencia en LinkedIn
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {methodologySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center transition-transform duration-300">
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${step.color}`}
                      >
                        <step.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
