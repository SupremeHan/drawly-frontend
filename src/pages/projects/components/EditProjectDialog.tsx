import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { EllipsisVertical } from 'lucide-react';
import { useState } from 'react';
import { EditProjectForm } from './EditProjectForm';
import { ProjectType } from '../types';

interface EditProjectDialogProps {
  project: ProjectType;
}

export function EditProjectDialog({ project }: EditProjectDialogProps) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  return (
    <Dialog
      open={isDeleteDialogOpen || isEditDialogOpen}
      onOpenChange={
        isEditDialogOpen ? setIsEditDialogOpen : setIsDeleteDialogOpen
      }
    >
      <DropdownMenu>
        <DropdownMenuTrigger className="border-2 border-[#4A4A4A] rounded-lg max-w-max">
          <EllipsisVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" side="top">
          <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation();
              setIsEditDialogOpen(true);
            }}
            className="hover:bg-gray-100"
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-100">
            Remove
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        className="[&>button]:hidden"
      >
        <DialogHeader>
          <DialogTitle>Edit your project</DialogTitle>
        </DialogHeader>

        <EditProjectForm project={project} />

        <DialogDescription>Change the name of your project</DialogDescription>
        <DialogFooter>
          <Button type="submit">Save</Button>
          <DialogTrigger asChild>
            <Button
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Close
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
