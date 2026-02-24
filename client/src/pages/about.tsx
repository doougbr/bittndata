import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Rocket } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl text-center mb-16"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl font-heading">
            <span className="text-primary">Sobre</span> a Bitt’n’Data
          </h1>
          <p className="text-xl text-muted-foreground">
            Nossa especialidade é te ajudar a aproveitar ao máximo os dados da sua empresa
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 lg:gap-24 mb-24 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">O fundador</h2>
            <p className="text-muted-foreground leading-relaxed">
              Douglas Bittencourt Ribeiro atua na área de dados há mais de 6 anos. Formado em Administração, com pós-graduação em Neuromarketing, já passei por diversos segmentos como farmacêutico, tecnologia, educação e automotivo. Durante minha trajetória, tive a oportunidade de participar dos mais variados projetos, de estruturação de Data Warehouse a migração de BI, interagindo com diferentes áreas das empresas, o que me permitiu aprender rapidamente a entender problemas e identificar soluções.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Acredito que os dados não são apenas um subproduto dos negócios: eles são a nova matéria-prima da inovação. Nosso nome reflete a obsessão por cada "bit" de informação e os "dados" que impulsionam as decisões.
            </p>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-muted/50 shadow-2xl">
             <img 
               src="/images/douglas.jpg" 
               alt="Douglas Bittencourt Ribeiro" 
               className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
             />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-24">
          {[
            {
              icon: Target,
              title: "Nossa Missão",
              text: "Democratizar a análise avançada de dados e tornar a IA de nível empresarial acessível para organizações inovadoras."
            },
            {
              icon: Rocket,
              title: "Nossa Visão",
              text: "Um mundo onde cada decisão de negócio seja apoiada por inteligência precisa e em tempo real, em vez de apenas intuição."
            },
            {
              icon: Users,
              title: "Nossa Cultura",
              text: "Valorizamos a curiosidade, a precisão e as práticas éticas de dados. Construímos sistemas que são transparentes e confiáveis."
            }
          ].map((item, i) => (
            <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
