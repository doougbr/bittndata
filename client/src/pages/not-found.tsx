import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] w-full items-center justify-center bg-background">
      <Card className="mx-4 w-full max-w-md border-white/10 bg-white/5 backdrop-blur-sm">
        <CardContent className="flex flex-col items-center pt-6 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 text-destructive">
            <AlertCircle className="h-8 w-8" />
          </div>
          <h1 className="mb-2 text-2xl font-bold font-heading">404 Página Não Encontrada</h1>
          <p className="mb-6 text-muted-foreground">
            O fluxo de dados que você está procurando foi desconectado ou não existe.
          </p>
          <Link href="/">
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Voltar ao Início
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
