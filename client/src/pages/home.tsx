import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, BarChart3, Database, BrainCircuit, ShieldCheck, Zap, Globe } from "lucide-react";
import heroBg from "../assets/hero-bg.png";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Data Background" 
            className="h-full w-full object-cover opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary backdrop-blur-md">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Soluções de Dados Prontas para o Futuro
            </div>
            <h1 className="mb-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl font-heading">
              Transforme seus Dados em <span className="text-primary">Inteligência</span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Ajudamos empresas a desbloquear o verdadeiro potencial de sua infraestrutura de dados através de análises avançadas e estratégias personalizadas.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white h-12 px-8 text-base shadow-[0_0_30px_rgba(157,78,221,0.4)] transition-transform hover:scale-105">
                <Link href="/contact">Inicie sua Jornada</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                <Link href="/about">Saiba Mais</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background/50">
        <div className="container px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Nossa Expertise</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Soluções abrangentes de dados personalizadas para as necessidades do seu negócio.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Database,
                title: "Arquitetura de Dados",
                description: "Construa pipelines de dados escaláveis, seguros e eficientes que crescem com sua empresa.",
              },
              {
                icon: BrainCircuit,
                title: "IA & Machine Learning",
                description: "Aproveite modelos preditivos para automatizar processos e descobrir oportunidades ocultas.",
              },
              {
                icon: BarChart3,
                title: "Business Analytics",
                description: "Transforme números brutos em insights visuais acionáveis para uma melhor tomada de decisão.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative h-full overflow-hidden border-white/10 bg-white/5 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(157,78,221,0.15)]">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        <div className="container relative px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Por que as empresas líderes escolhem a Bitt’n’Data</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Não apenas gerenciamos dados; criamos valor. Nossa metodologia proprietária garante implementação eficiente, buscando sempre redução de custos e maior ROI.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Zap, title: "Implementação Rápida", desc: "Implante soluções 2x mais rápido com nossos frameworks modulares." },
                  { icon: ShieldCheck, title: "Segurança Empresarial", desc: "Criptografia de nível bancário e padrões de conformidade integrados." },
                  { icon: Globe, title: "Escalabilidade Global", desc: "Infraestrutura projetada para lidar com petabytes de dados em todo o mundo." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/20 text-secondary border border-secondary/30">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-20 blur-3xl rounded-full" />
              <div className="relative rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-mono text-sm text-muted-foreground">Status do Sistema</span>
                    <span className="flex items-center text-sm text-green-400"><span className="mr-2 h-2 w-2 rounded-full bg-green-400"></span>Operacional</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded-full bg-white/10">
                      <div className="h-full w-3/4 rounded-full bg-primary"></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Processamento de Dados</span>
                      <span>75%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="rounded-lg bg-white/5 p-4">
                      <div className="text-2xl font-bold text-white">99.9%</div>
                      <div className="text-xs text-muted-foreground">Uptime</div>
                    </div>
                    <div className="rounded-lg bg-white/5 p-4">
                      <div className="text-2xl font-bold text-white">2.5PB</div>
                      <div className="text-xs text-muted-foreground">Processados</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary/20 via-background to-secondary/20 px-6 py-16 text-center shadow-2xl md:px-12 md:py-24">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-secondary/30 blur-3xl"></div>
            
            <h2 className="relative mb-4 text-3xl font-bold tracking-tight sm:text-5xl">Pronto para otimizar seus dados?</h2>
            <p className="relative mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Agende uma conversa conosco e descubra o valor oculto em sua organização.
            </p>
            <Button asChild size="lg" className="relative h-14 bg-white text-black hover:bg-white/90 px-8 text-lg font-semibold">
              <Link href="/contact">Obter uma Consultoria <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
