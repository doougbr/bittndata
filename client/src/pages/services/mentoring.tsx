import { motion } from "framer-motion";

export default function CareerMentoring() {
  return (
    <div className="min-h-screen pt-32 pb-12">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl font-heading">
            Mentoria de <span className="text-primary">Carreira</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Acelere sua evolução profissional no mercado de dados com acompanhamento personalizado.
          </p>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="text-xl font-bold mb-4 text-primary">Desenvolvimento Estratégico</h3>
            <p className="text-muted-foreground">Plano de carreira, revisão de portfólio e preparação para desafios técnicos.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
