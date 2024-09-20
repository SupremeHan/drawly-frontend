import { Input } from '@/components/ui/input';
import { useState } from 'react';

export function EditProjectForm() {
  const [projectName, setProjectName] = useState('');

  console.log(projectName);
  return (
    <form>
      <Input
        type="text"
        placeholder="Project name"
        className="border-[#4A4A4A] focus:border-orange-400"
        onChange={(e) => {
          setProjectName(e.target.value);
        }}
      />
    </form>
  );
}
