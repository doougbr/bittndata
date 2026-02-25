import { motion } from "framer-motion";

export default function Training() {
  return (
    <div className="min-h-screen pt-32 pb-12">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl font-heading">
            Cursos & <span className="text-primary">Treinamentos</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Capacitação técnica em Excel, Power BI e Engenharia de Dados.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="text-xl font-bold mb-4 text-primary">Excel Avançado</h3>
              <p className="text-muted-foreground">Domine fórmulas, automações e análise de dados.</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="text-xl font-bold mb-4 text-primary">Power BI In-Company</h3>
              <p className="text-muted-foreground">Treinamentos personalizados para as necessidades da sua equipe.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
