import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, ArrowRightLeft, Database, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    title: "Aulas de Excel e Power BI",
    description: "Capacite sua equipe com treinamentos personalizados em Excel e Power BI. Oferecemos modalidades particular, em grupo ou In-Company, adaptadas ao nível de conhecimento e necessidades específicas do seu negócio.",
    icon: GraduationCap,
    details: ["Treinamento Particular", "Workshops em Grupo", "Programas In-Company"]
  },
  {
    title: "Migração de BI",
    description: "Transição suave e segura de suas ferramentas de Business Intelligence. Garantimos a integridade dos dados e a continuidade dos seus dashboards durante a mudança para plataformas mais modernas e eficientes.",
    icon: ArrowRightLeft,
    details: ["Mapeamento de Dashboards", "Migração de Lógica de Negócio", "Validação de Dados"]
  },
  {
    title: "Estruturação de Banco de Dados",
    description: "Desenvolvimento de arquiteturas de dados sólidas e escaláveis. Organizamos suas informações para garantir performance, segurança e facilidade de acesso para futuras análises.",
    icon: Database,
    details: ["Modelagem de Dados", "Otimização de Queries", "Segurança e Backup"]
  },
  {
    title: "Automação de Ingestão de Dados",
    description: "Elimine processos manuais e erros humanos. Criamos pipelines automatizados que coletam, transformam e carregam seus dados de diversas fontes diretamente para seu ambiente de análise.",
    icon: Zap,
    details: ["ETL Automatizado", "Conexão com APIs", "Monitoramento de Fluxos"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl text-center mb-16"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl font-heading">
            Nossos <span className="text-primary">Serviços</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Soluções estratégicas para transformar dados brutos em vantagem competitiva para sua empresa.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-white/10 bg-white/5 hover:border-primary/50 transition-all group">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 rounded-2xl border border-white/10 bg-gradient-to-r from-primary/10 to-transparent p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Precisa de uma solução personalizada?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Estamos prontos para entender seu desafio específico e desenhar a melhor estratégia de dados para o seu negócio.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Fale com um Especialista</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
