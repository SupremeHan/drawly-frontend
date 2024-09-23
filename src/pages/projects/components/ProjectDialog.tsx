import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { PropsWithChildren } from 'react';

interface ProjectDialogProps {
  title: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ProjectDialog({
  title,
  open,
  setOpen,
  children,
}: PropsWithChildren<ProjectDialogProps>) {
  return (
    <Dialog open={open} modal defaultOpen={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription></DialogDescription>
        {children}
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
