import { useRoute } from "wouter";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Calendar, User } from "lucide-react";

// Mock data matching the blog page
const postsData: Record<string, any> = {
  "transformacao-power-bi": {
    title: "Como o Power BI pode transformar sua tomada de decisão",
    date: "2024-03-20",
    author: "Douglas Bittencourt Ribeiro",
    content: `O Power BI não é apenas uma ferramenta de visualização; é um motor de insights que pode mudar a forma como você enxerga sua empresa.

### Por que usar Power BI?

1. **Conectividade**: Conecte-se a centenas de fontes de dados.
2. **Tempo Real**: Tome decisões baseadas no que está acontecendo agora.
3. **Colaboração**: Compartilhe relatórios facilmente com sua equipe.

Nossa metodologia na **Bitt'n'Data** foca em criar dashboards que não são apenas bonitos, mas extremamente funcionais e estratégicos.`
  },
  "arquitetura-dados": {
    title: "A importância da Arquitetura de Dados",
    date: "2024-03-15",
    author: "Douglas Bittencourt Ribeiro",
    content: `Muitas empresas tentam implementar IA sem antes arrumar a casa. A arquitetura de dados é a fundação de todo o prédio.

### Pilares de uma boa arquitetura:

*   **Escalabilidade**: Sua estrutura deve crescer com você.
*   **Segurança**: Proteção total dos ativos de informação.
*   **Qualidade**: Dados confiáveis geram decisões confiáveis.

Na Bitt'n'Data, ajudamos a construir essa fundação robusta.`
  }
};

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  const post = slug ? postsData[slug] : null;

  if (!post) {
    return (
      <div className="container pt-32 text-center">
        <h1 className="text-2xl font-bold">Post não encontrado</h1>
        <Button asChild variant="link" className="mt-4">
          <Link href="/blog">Voltar ao Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container max-w-3xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Button asChild variant="ghost" className="mb-8 -ml-4 text-muted-foreground hover:text-primary">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao Blog
            </Link>
          </Button>

          <header className="mb-12">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl font-heading leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('pt-BR')}
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </div>
            </div>
          </header>

          <div className="prose prose-invert prose-purple max-w-none">
            <ReactMarkdown
              components={{
                h3: ({node, ...props}) => <h3 className="text-2xl font-bold mt-8 mb-4 text-white" {...props} />,
                p: ({node, ...props}) => <p className="text-lg leading-relaxed text-muted-foreground mb-6" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground" {...props} />,
                li: ({node, ...props}) => <li className="text-lg" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-muted-foreground" {...props} />,
                strong: ({node, ...props}) => <strong className="text-white font-bold" {...props} />
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
