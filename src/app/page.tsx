'use client';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Plus, List, Check, X, Trash2, ListCheck, Sigma } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
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
import EditTask from '@/components/edit-task';
import { getTasks } from '@/actions/get-task-from-db';
import { useEffect, useState } from 'react';
import { Task } from '@/generated/prisma';
import { NewTask } from '@/actions/add-task';
import { deleteTask } from '@/actions/delete-task';

const Home = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [task, setTask] = useState<string>('');

  const handleGetTasks = async () => {
    try {
      const tasks = await getTasks();
      if (!tasks) return;
      setTaskList(tasks || []);
    } catch (error) {
      throw error;
    }
  };

  const handleAddTask = async () => {
    try {
      if (task.length === 0 || !task) return;

      const addNewTask = await NewTask(task);
      if (!addNewTask) return;
      setTask('');
      toast.success('Tarefa adicionada com sucesso');
      await handleGetTasks();
    } catch (error) {
      throw error;
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      if (!id) return;
      const deletedTask = await deleteTask(id);
      if (!deletedTask) return;
      toast.warning('Tarefa deletada com sucesso');
      await handleGetTasks();
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    handleGetTasks();
  }, []);

  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg shadow-lg rounded-2xl">
        <CardHeader className="flex gap-2">
          <Input
            placeholder="Adicionar Tarefa"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <Button
            className="cursor-pointer"
            variant="default"
            onClick={handleAddTask}
          >
            <Plus />
            Cadastrar
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
            {taskList.map((task) => (
              <div
                className="h-14 flex justify-between items-center"
                key={task.id}
              >
                <div className="w-1 h-full bg-amber-300"></div>
                <p className="flex-1 px-2 text-sm cursor-pointer hover:text-gray-500">
                  {task.task}
                </p>
                <div className="flex items-center gap-2">
                  <div className="cursor-pointer hover:text-blue-500">
                    <EditTask />
                  </div>

                  <Trash2
                    size={19}
                    className="cursor-pointer hover:text-red-500"
                    onClick={() => handleDeleteTask(task.id)}
                  />
                </div>
              </div>
            ))}
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
