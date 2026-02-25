import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// In a real app, this would be generated from reading the .md files in client/src/posts/
// For this prototype, we'll keep the list synchronized with the files we created
const posts = [
  {
    slug: "transformacao-power-bi",
    title: "O que realmente melhora e velocidade de relatórios de BI (e quase ninguém fala)",
    date: "2026-02-26",
    excerpt: "Dicas que quase ninguém fala e que vão dar um belo up na velocidade de seus relatórios.",
    author: "Douglas Bittencourt Ribeiro",
    category: "Arquitetura"
  },
  {
    slug: "arquitetura-dados",
    title: "A importância da Arquitetura de Dados",
    date: "2024-03-15",
    excerpt: "Antes de analisar, é preciso estruturar. Saiba por que uma base sólida é crucial para qualquer estratégia de IA.",
    author: "Douglas Bittencourt Ribeiro",
    category: "Arquitetura"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl text-center mb-16"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl font-heading text-white">
            Nosso <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Insights, tendências e novidades do mundo dos dados e tecnologia.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="flex h-full flex-col overflow-hidden border-white/10 bg-white/5 transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(157,78,221,0.1)] cursor-pointer group">
                  <div className="h-48 w-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-0">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-base text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pt-0 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-primary font-medium text-sm">
                      Ler mais <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
