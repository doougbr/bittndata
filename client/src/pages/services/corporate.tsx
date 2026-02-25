import { motion } from "framer-motion";

export default function CorporateConsultancy() {
  return (
    <div className="min-h-screen pt-32 pb-12">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl font-heading">
            Consultoria para <span className="text-primary">Empresas</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Soluções estratégicas de dados para impulsionar o crescimento e a eficiência do seu negócio.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="text-xl font-bold mb-4 text-primary">Arquitetura de BI</h3>
              <p className="text-muted-foreground">Estruturação de dashboards e pipelines de dados escaláveis.</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="text-xl font-bold mb-4 text-primary">Governança de Dados</h3>
              <p className="text-muted-foreground">Políticas e processos para garantir a qualidade e segurança da informação.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
