import { SquarePen } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const EditTask = () => {
  return (
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
  );
};

export default EditTask;
