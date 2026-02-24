import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const posts = [
  {
    title: "O Futuro da Análise Preditiva no Varejo",
    excerpt: "Como a IA está transformando a gestão de inventário e as estratégias de personalização do cliente para 2026.",
    date: "15 de Fev, 2026",
    category: "Estratégia de IA",
    readTime: "5 min de leitura"
  },
  {
    title: "Migrando Data Warehouses Legados para a Nuvem",
    excerpt: "Um guia passo a passo para modernizar sua infraestrutura sem tempo de inatividade ou perda de dados.",
    date: "10 de Fev, 2026",
    category: "Infraestrutura",
    readTime: "8 min de leitura"
  },
  {
    title: "Ética de Dados: Navegando pela Privacidade na Era do Big Data",
    excerpt: "Por que políticas de dados transparentes estão se tornando a maior vantagem competitiva para empresas de tecnologia.",
    date: "02 de Fev, 2026",
    category: "Conformidade",
    readTime: "6 min de leitura"
  },
  {
    title: "Entendendo Bancos de Dados Vetoriais",
    excerpt: "Por que o armazenamento de dados de alta dimensão é crucial para a próxima geração de aplicações LLM.",
    date: "28 de Jan, 2026",
    category: "Tecnologia",
    readTime: "10 min de leitura"
  },
  {
    title: "Visualizando Conjuntos de Dados Complexos",
    excerpt: "Melhores práticas para criar dashboards que os executivos realmente usarão e entenderão.",
    date: "15 de Jan, 2026",
    category: "Analytics",
    readTime: "4 min de leitura"
  },
  {
    title: "A Ascensão da Computação de Borda no IoT",
    excerpt: "Processando dados mais perto da fonte: benefícios, desafios e padrões de implementação.",
    date: "05 de Jan, 2026",
    category: "IoT",
    readTime: "7 min de leitura"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl font-heading">Insights</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Últimas tendências, tutoriais e pensamentos de nossos especialistas em dados.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="flex h-full flex-col overflow-hidden border-white/10 bg-white/5 transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(157,78,221,0.1)]">
                <div className="h-48 w-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30 border-0">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="line-clamp-3 text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="px-0 text-primary hover:text-primary/80">
                    Ler Artigo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
