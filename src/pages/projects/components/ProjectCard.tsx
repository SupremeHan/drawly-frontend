import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import Lightbulb from '@/lib/illustrations/Lightbulb';
import { EditProjectDialog } from './EditProjectDialog';
import { Button } from '@/components/ui/button';
import { useAuthState } from '@/pages/auth/state/state';
import { ProjectType } from '../types';

interface ProjectCardProps {
  project: ProjectType;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { user } = useAuthState((state) => state);

  return (
    <Card className="relative h-40 overflow-hidden flex flex-col justify-between w-[280px] bg-white border-2 border-[#4A4A4A]">
      <Lightbulb className="absolute right-[-50px] top-[30px] rotate-[-45deg] opacity-75" />

      <CardHeader className="flex flex-col justify-between p-4">
        <CardTitle>
          <span className="font-bold text-lg">{project.name}</span>
        </CardTitle>
      </CardHeader>
      <div className="flex items-center justify-between p-4">
        <EditProjectDialog project={project} />
        <Button size="xs" variant="outline" className="z-20">
          <Link to={`/projects/${user?.id}`}>View Project</Link>
        </Button>
      </div>
    </Card>
  );
}
