export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#C41E7A] to-[#7B2D8E] py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Ofimundo</h3>
        <p className="text-white/80 mb-4">Soluciones de Automatización</p>
        <p className="text-white/60 text-sm">
          © {new Date().getFullYear()} Ofimundo. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
