import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-2xl font-bold text-transparent font-heading mb-4 block w-fit">
              Bitt’n’Data
            </Link>
            <p className="max-w-xs text-muted-foreground">
              Capacitando empresas com insights baseados em dados e soluções tecnológicas de ponta.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Conecte-se</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.linkedin.com/company/bitt-n-data/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Bitt’n’Data Inc. Todos os direitos reservados.
          </p>
          <div className="mt-4 flex gap-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Política de Privacidade
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
