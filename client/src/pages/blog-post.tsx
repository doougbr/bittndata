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

1. **Deixar sua ferramenta o mais próximo possível da fonte dos dados**

A premissa é simples: Se seu aplicativo (Power BI, Looker Studio, Metabase, Excel, etc.) estiver instalado em uma máquina, e o banco de dados que você está consumindo estiver um servidor próximo (na mesma região ou até mesmo na mesma rede local), a transferência dos dados é mais rápida do que se você estiver lendo dados de um servidor na nuvem que está em outro país, por exemplo, pois a latência tende a ser menor. Se você usa Direct Query esse impacto é mais significativo ainda, pois nesse caso cada visual vira uma chamada ao banco.

2.** Se for usar views, use views materializadas sempre que possível**

A view materializada armazena o resultado da sua view em disco, como se fosse uma tabela. Seu problema é que ela não atualiza automaticamente, necessitando de um “refresh” sempre que precisar dos dados mais atualizados. 

Já a view comum, basicamente roda toda a consulta novamente toda vez que é atualizada, deixando seu relatório muito mais lento para carregar.

3. **Usar Redis ou outro banco de dados em memória para cache**

Ele funciona como um complemento ao seu banco de dados “comum” (que armazena os dados em disco, logo é mais lento). Depois de configurado, o Redis faz a leitura dos dados e armazena na RAM por um certo período de tempo, fazendo com que a velocidade de entrega seja muito maior. Seu tempo de cache pode ser configurado de acordo com sua necessidade.

4. **Evitar fazer ETL no aplicativo**

Aplicativos como o Power BI possuem ótimas ferramentas de tratamento de dados, como o Power Query e fórmula DAX. Ainda assim, por mais otimizado que seja, cada camada de alteração adicionada acrescenta um peso a mais no carregamento. Atualmente existem inúmeras ferramentas que permitem fazer esse ETL em etapas anteriores e carregar os dados praticamente prontos no PBI, deixando apenas para pequenos ajustes e relacionamentos. 

Um outro ponto é que em ferramentas apropriadas, como o Databricks, o processamento do ETL pode ser feito em paralelo, aumento em muito a performance.

5. **Indexar suas tabelas no banco de dados**

Esse aqui é a dica mais clichê, mas é válida também! Principalmente em tabelas grandes, com muitos valores distintos e que são bastante utilizadas 

6. **Evitar usar funções no WHERE de suas consultas e usar chaves concatenadas no Join**

Essas aqui são ambas relacionadas a query: Sabe aquelas funções como CONVERT, CAST, EXTRACT, entre outras? Evite ao máximo utilizá-las dentro do seu filtro de WHERE, pois demandam um processamento maior do banco de dados e atrasam sua consulta. 

Já no outro caso, um exemplo é: Imagine que você quer fazer o join de duas tabelas utilizando as colunas mês e ano como referência. Ao invés de fazer um:

JOIN tab1 ON CONCAT(tab1.mes, tab1.ano) = CONCAT(tab2.mes, tab2.ano)

A performance é melhor se você fizer:

JOIN tab1 ON tab1.mes = tab2.mes AND tab1.ano = tab2.ano

7. **Evite repetições na sua query**

Essa dica é mais para melhorar a manutenção e legibilidade. Você está fazendo CTEs e precisa reutilizar uma tabela com um filtro de data comum em todas elas?

Ao invés de fazer

cte1 AS (
SELECT col1
FROM tabela
WHERE data >= DATE '2025-01-01'
AND data <  DATE '2026-01-01'
),
cte2 AS (
SELECT col2
FROM tabela
WHERE data >= DATE '2025-01-01'
AND data <  DATE '2026-01-01'
)
SELECT ...

Crie uma CTE base com os filtros adequados e depois utilize-a como base

WITH base AS (
SELECT col1, col2, col3
FROM tabela
WHERE data >= DATE '2025-01-01'
AND data <  DATE '2026-01-01'
),
cte1 AS (
SELECT col1
FROM base
-- outros joins/filtros aqui
),
cte2 AS (
SELECT col2
FROM base
-- outros joins/filtros aqui
)
SELECT ...

Essas são algumas dicas de situações que acabam aparecendo no dia-a-dia e que com certeza serão úteis em algum momento. Você usa alguma delas?`
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
