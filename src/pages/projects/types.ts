export interface ProjectType {
  id: string;
  name: string;
  userId: string;
  createdAt: Date | string;
  updatedAt: Date | string; // TODO: decied how to store dates
}
