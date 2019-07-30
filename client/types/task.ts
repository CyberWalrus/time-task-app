export interface TaskStatus {
  id: string;
  name: string;
  isActive: boolean;
}

export interface Task {
  id: string;
  name: string;
  taskStatusId: TaskStatus['id'];
  isActive: boolean;
}
