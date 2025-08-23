import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Plus,
  List,
  Check,
  X,
  Trash2,
  SquarePen,
  ListCheck,
  Sigma,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg shadow-lg rounded-2xl">
        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar Tarefa" />
          <Button className="cursor-pointer" variant="default">
            <Plus />
            Button
          </Button>
        </CardHeader>

        <CardContent>
          <Separator className="mb-3" />
          <div className="flex gap-2">
            <Badge className="cursor-pointer p-2" variant="default">
              <List />
              Toda
            </Badge>
            <Badge className="cursor-pointer p-2" variant="outline">
              <X />
              Não Finalizadas
            </Badge>
            <Badge className="cursor-pointer p-2" variant="outline">
              <Check />
              Concluidas
            </Badge>
          </div>
          {/* Tarefas */}
          <div className="mt-4 border-b-1">
            <div className="h-14 flex justify-between items-center">
              <div className="w-1 h-full bg-amber-300"></div>
              <p className="flex-1 px-2 text-sm">Estudar React</p>
              <div className="flex items-center gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <SquarePen size={19} className="cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader className="flex items-start">
                      <DialogTitle>Editar Tarefa</DialogTitle>
                    </DialogHeader>
                    <div className="flex justify-between gap-2">
                      <Input placeholder="Editar tarefa"></Input>
                      <Button className="cursor-pointer">Editar</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Trash2 size={19} className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-2 items-center">
              <ListCheck size={19} />
              <p className="text-sm">Tarefas concluidas (3/3)</p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant={'outline'}
                  className="text-xs h-8 cursor-pointer"
                >
                  <Trash2 />
                  Limpar tarefas concluidas
                </Button>
              </AlertDialogTrigger>
               
              

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Tem certeza que deseja excluir x itens ?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Não</AlertDialogCancel>
                  <AlertDialogAction>Continuar</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div className="h-2 w-full bg-gray-300 mt-4 rounded-md">
            <div
              className="h-full bg-amber-400 rounded-md"
              style={{ width: '50%' }}
            ></div>
          </div>
          <div className="flex justify-end center mt-2 gap-2">
            <Sigma size={19} />
            <p className="text-xs">3 tarefas no total</p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default Home;
