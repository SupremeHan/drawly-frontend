import { Link } from 'react-router-dom';
import { ProjectType } from '../ProjectsPage';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import Lightbulb from '@/lib/illustrations/Lightbulb';

interface ProjectCardProps {
  project: ProjectType;
  userId?: string;
}

export function ProjectCard({ project, userId }: ProjectCardProps) {
  return (
    <Link to={`/projects/${userId}`} className=" rounded-lg overflow-hidden">
      <Card className=" block w-[280px] bg-white border-2 border-[#4A4A4A] hover:bg-gray-100">
        <div className="relative h-40">
          <Lightbulb className="absolute right-[-50px] top-[30px] rotate-[-45deg]" />

          <CardHeader className="absolute inset-0 flex flex-col justify-between p-4">
            <CardTitle>
              <span className="font-bold text-lg">{project.name}</span>
            </CardTitle>
          </CardHeader>
        </div>
      </Card>
    </Link>
  );
}
