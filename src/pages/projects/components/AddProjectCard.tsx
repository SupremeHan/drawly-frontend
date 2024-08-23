import { Plus } from 'lucide-react';

export function AddProjectCard() {
  return (
    <button
      onClick={() => console.log('alo')}
      className="flex flex-col justify-center items-center w-[250px] p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <Plus size={24} color="black" />
      <p>Add new Project</p>
    </button>
  );
}
