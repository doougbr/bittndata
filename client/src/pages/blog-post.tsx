import { useRoute } from "wouter";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Calendar, User } from "lucide-react";

// Mock data matching the blog page
const postsData: Record<string, any> = {
  "aprendendo-a-aprender": {
    title: "Aprendendo a aprender",
    date: "2026-03-04",
    author: "Douglas Bittencourt Ribeiro",
    coverImage: "/images/loading-post-cover.png",
    content: `Dicas que podem ajudar no seu processo de aprendizado.

Você já tentou aprender Excel, Power BI, SQL ou qualquer ferramenta de dados e o conteúdo simplesmente não entra na sua cabeça? Me dá 5 minutinhos que vou te explicar o motivo e algumas possíveis soluções para isso.

Eu trabalho com essas ferramentas há pelo menos 5 anos, e também dou aulas ocasionalmente. Além disso, gosto muito de estudar e já fiz diverso cursos e aulas de assuntos variados, sejam particulares, em curso pago online, via Youtube, livro ou qualquer outro método. E com o tempo, descobri que existem 3 atalhos que ajudam bastante a aprender algo novo. Vou destrincha-los a seguir, e apresentar uma solução para cada um:

**1 - Fazer anotações inteligentes**
Uma atitude recorrente que eu percebi ao dar aulas, é que as pessoas gostam de fazer anotações pontuais sobre determinados assuntos. Então você ensina algo novo, e uma nota é tomada sobre aquele assunto. Qual o maior problema disso? Quase sempre falta contexto para essas notas.

A solução: Criar seu próprio tutorial.

Esse foi um costume que eu criei depois de apanhar muito ao começar atividades novas e perceber que passado uma semana eu já havia esquecido quase tudo que me ensinavam. Como dito acima, ainda que eu tomasse notas de tudo, na hora de executar parecia que nada fazia sentido. Eu comecei então a usar o Notion e criar meus próprios tutoriais. Tiro print, gravo vídeos, escreve textos, divido em tópicos. Faço tudo da maneira mais didática possível para o meu entendimento, com passo a passo de tudo que for novo. Um bônus é que você acaba também documentando processos que muitas vezes sequer estavam mapeados ou registrados.

Abaixo é um exemplo de um tutorial que eu criei para a empresa que trabalho, onde foi necessário aprender dois ERPs diferentes. Organizo em sub-tópicos para facilitar a navegação. Anoto usuários, links e textos explicativos sobre diferentes usos. Só evite colocar senhas ou informações que tenham perigo de serem expostas, principalmente se for compartilhar o documento futuramente. Para cada tópico novo que eu aprendo, adiciono um novo registro.


**2 - Ter um contexto e praticar**
Se você precisa aprender algo para o seu trabalho, busque sempre trazer o aprendizado para esse contexto. Existem muitos cursos bons na web, mas o problema é que por precisarem atender um público grande, muitas vezes acabam sendo bastante genéricos. Dessa forma, fica a sensação de que aprendeu até você precisar aplicar em um contexto real. Algo que eu vejo acontecer bastante é o famoso “Excel intermediário”. A pessoa que até sabe fazer algumas fórmulas mais comuns como o PROCV ou SOMASE, criar uma tabela dinâmica, mas se perde quando realmente precisa utilizar esses recursos porque simplesmente não entende não como, mas quando utilizá-los. Aí uma simples análise de vendas acaba sendo muito mais complexa do que parece.

“Quem vendeu mais?”

“ Quanto? “

“Qual o percentual de crescimento?”

“Essa tabela só tem o código do cliente, preciso também do nome e do endereço dele”

“Coloque esses dados em uma tabela de fácil visualização para que eu possa ver o resultado por período”

Pronto, tudo que foi estudado simplesmente some da cabeça!

**3 - Ter um objetivo**
Esse é simples, mas é fato! Aprender algo novo sem ter um objetivo completo não é impossível, mas torna a tarefa e o foco muito mais difícil. Quando você precisa resolver um determinado problema, a motivação aumenta muito. Dando um exemplo prático, o próprio estudo de SQL. Já tive essa experiência, e quando eu estudava apenas por conhecimento, acabava sendo muito mais difícil pois eu me perdia entre as infinitas possibilidades de tutoriais, e a falta de urgência fazia as coisas acontecerem muito mais devagar e o estudo ser mais espaçado. Por muito tempo meu conhecimento ficou limitado ao SELECT e outras funções básicas. Agora, a primeira vez que eu precisei realmente resolver um problema de negócio que foi criar um pipeline de dados do zero, da criação de um Data Warehouse até a entrega final de diversos dashboards, o resultado fluiu muito melhor. Eu sabia o que eu queria, sabia o que procurar e quais ferramentas usar para atingir um determinado público. Hoje meu conhecimento é muito mais amplo, com CTes, procedures, window functions, análise de planos de execução de query para melhorar performance entre outros.

É isso, são dicas simples mas se aplicadas tenho certeza que vão ajudar muito no seu desenvolvimento pessoal e profissional!
Gostou, é de Campinas e região e gostaria de fazer aulas de Excel, Power BI ou SQL com conteúdo prático e exercícios aplicados ao seu trabalho e dia-a-dia? Me manda uma mensagem e vamos conversar!`

  },
  "transformacao-power-bi": {
    title: "Como o Power BI pode transformar sua tomada de decisão",
    date: "2024-03-20",
    author: "Douglas Bittencourt Ribeiro",
    content: `O Power BI não é apenas uma ferramenta de visualização; é um motor de insights que pode mudar a forma como você enxerga sua empresa.

### Por que usar Power BI?

1. **Deixar sua ferramenta o mais próximo possível da fonte dos dados**

A premissa é simples: Se seu aplicativo (Power BI, Looker Studio, Metabase, Excel, etc.) estiver instalado em uma máquina, e o banco de dados que você está consumindo estiver um servidor próximo (na mesma região ou até mesmo na mesma rede local), a transferência dos dados é mais rápida do que se você estiver lendo dados de um servidor na nuvem que está em outro país, por exemplo, pois a latência tende a ser menor. Se você usa Direct Query esse impacto é mais significativo ainda, pois nesse caso cada visual vira uma chamada ao banco.

2. **Se for usar views, use views materializadas sempre que possível**

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
  "reduzindo-custos-bi": {
    title: "Quer reduzir os custos de BI da sua empresa? Te apresento o Metabase",
    date: "2026-02-15",
    author: "Douglas Bittencourt Ribeiro",
    content: `Redução de custos é uma constante em toda a empresa. Vou te mostrar uma alternativa viável.

Eu sou usuário do Power BI há anos, e considero uma excelente ferramenta de BI. Já utilizei vários dos concorrentes e sem dúvida é a mais completa, não a toa é a líder de mercado. Porém, algo que na minha opinião vem sendo o calcanhar de Aquiles da ferramenta é o custo, principalmente para uso de pequenas e médias empresas.

A assinatura Pro atualmente está custando R$93,50 por usuário/mês. Ou seja, para uma empresa com cerca de 50 funcionários (somando internos e força de vendas) que queira dar acesso a todos, já possui um custo anual de mais de R$50k. Pior ainda se quiser a licença premium, onde esse custo aumenta em cerca de 70%. São valores altos e que podem desanimar gestores que queiram investir em uma área de dados. Mas ok, e qual a alternativa?

O Metabase é uma ferramenta open source (de código aberto) com o intuito de ser fácil de usar, com diversas funcionalidades e o melhor, pode ser grátis se hospedada em sua própria infraestrutura. Suas maiores vantagens em relação ao Power BI além da redução de custo, é a autonomia para qualquer usuário criar seus próprios relatórios com uma base de dados compartilhada entre toda a empresa, reduzindo drasticamente os perigos do famoso “áreas diferentes apresentarem números diferentes ao falarem do mesmo assunto”

Uma de suas funcionalidades mais legais são as “Perguntas”. É possível criar modelos de dados prontos (imagine uma view do SQL por exemplo), onde o usuário consegue fazer uma consulta sem precisar digitar nenhum código, utilizando uma interface bem simples. Aqui um exemplo prático, onde utilizando o modelo de dados “Pedidos” que está dentro do banco de dados DW, o usuário quer trazer o total de vendas (Soma de VLRTOT) por vendedor (CODVEND) do cliente Apple.

Dentro dessa tela é possível fazer Joins, ordenar dados, limites de linha e criar colunas personalizadas, tudo de forma simples e intuitiva.


Mas para quem possui conhecimento de SQL, é perfeitamente possível também escrever queries, inclusive criar filtros/variáveis personalizados como no modelo abaixo, onde está sendo criado o subtotal_min e subtotal_max, que pode ser reaproveitado em queries futuras


Além dos recursos de consulta, outras funcionalidades muito úteis do Metabase são a atualização agendada, histórico (ele mantém as 15 versões anteriores do seu Dashboard, permitindo voltar para ela rapidamente caso precise), eventos (é possível adicionar um marcador para saber o que aconteceu em determinado período, por ex lançamento de um produto, para que em uma análise futura todos saibam o que pode ter influenciado no aumento ou queda de vendas naquele período), assinaturas (envio frequente dos dashboards por email ou Slack), criar um link público ou até mesmo Incorporar em outras págians (que no Power BI também precisa pagar uma nota para usar o Embed).


**E qual a desvantagem do Metabase?**
Uma das maiores desvantagens para alguns usuários é que o Metabase não possui funcionalidades para ETL, uma das maiores vantagens do Power BI com o Power Query, onde é possível fazer todo o tratamento dos dados dentro da própria ferramenta. Porém, todo bom profissional de dados sabe que existem diversas outras ferramentas de ETL que podem ser utilizadas por fora e que são até mais poderosas que o próprio Power Query, então isso não deve ser um grande problema.



**Legal, gostei do Metabase e quero implementar. Por onde começar?**

Você vai precisar de um servidor disponível para hospedar, o Docker para fazer o Deploy utilizando a imagem oficial do Metabase e um profissional responsável por fazer a configuração da plataforma, o ETL, a conexão com o banco e a criação dos modelos e dashboards no Metabase!

Os custos de implementação são bem mais baixos que os custos de licença do Power BI e o benefício de uma equipe com muito mais autonomia e interada com os dados não tem preço!

#BI #Metabase #PowerBI #Analytics #BusinessIntelligence #BusinessAnalytics #Looker

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
