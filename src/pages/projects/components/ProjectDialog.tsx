import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useDialog } from '../state/state';
import { PropsWithChildren } from 'react';

interface ProjectDialogProps {
  title: string;
}

export function ProjectDialog({
  title,
  children,
}: PropsWithChildren<ProjectDialogProps>) {
  const { isOpen, onClose } = useDialog();

  return (
    <Dialog open={isOpen} modal defaultOpen={isOpen} onOpenChange={onClose}>
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
