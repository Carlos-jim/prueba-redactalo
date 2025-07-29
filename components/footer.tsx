import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Producto: [
    { name: "Metodología", href: "/methodology" },
    { name: "Precios", href: "/pricing" },
    { name: "Casos de Éxito", href: "/case-studies" },
    { name: "Playbook", href: "/playbook" },
  ],
  Empresa: [
    { name: "Sobre Nosotros", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Comunidad", href: "/community" },
    { name: "Contacto", href: "/contact" },
  ],
  Social: [
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "X", href: "#" },
  ],
  Legal: [
    { name: "Términos de Servicio", href: "/terms" },
    { name: "Política de Privacidad", href: "/privacy" },
    { name: "Aviso de Cookies", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-indigo-950 to-blue-800 text-gray-300 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 starfield-animation opacity-50"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 flex justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="font-black text-white/5 leading-none select-none text-5xl sm:text-7xl md:text-[10rem] lg:text-[15rem]">
          REDACTALO
        </div>
      </div>

      <div className="relative z-10 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-3 text-sm">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-white/10" />

        <div className="pt-8 text-center sm:text-right text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Redactalo. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
