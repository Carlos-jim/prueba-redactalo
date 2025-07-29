export function StatsSection() {
  const stats = [
    {
      number: "15M+",
      label: "Personas Alcanzadas",
      description: "Nuestros clientes este año",
    },
    {
      number: "8M+",
      label: "Alcance Personal",
      description: "Con nuestras cuentas propias",
    },
    {
      number: "1000+",
      label: "Profesionales",
      description: "Confían en nuestra metodología",
    },
    {
      number: "7",
      label: "Años de Experiencia",
      description: "Creando contenido exitoso",
    },
  ]

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Resultados que hablan por sí solos</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Estos números reflejan el impacto real de nuestra metodología en el crecimiento de marcas personales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-sm opacity-80">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
