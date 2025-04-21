type Task = {
    title: string;
    status: string;
    dueDate: string;
    assignedTo: {
      email: string;
    };
  };
  
  export const getOverdueTasks = async (): Promise<Task[]> => {
    const now = new Date();
  
    // 🔁 Replace this with actual DB call
    const tasks: Task[] = [
      {
        title: 'Mock Task 1',
        status: 'in progress',
        dueDate: '2024-04-01',
        assignedTo: { email: 'zeelgolakiya05@gmail.com' },
      },
      {
        title: 'Mock Task 2',
        status: 'completed',
        dueDate: '2024-03-01',
        assignedTo: { email: 'zeelgolakiya05@gmail.com' },
      },
    ];
  
    return tasks.filter(
      (task) =>
        task.status !== 'completed' && new Date(task.dueDate) < now
    );
  };
  