import { sendEmail } from '@/lib/email';
import { getOverdueTasks } from '@/lib/taskService';

(async () => {
  const overdueTasks = await getOverdueTasks();
  for (const task of overdueTasks) {
    await sendEmail(
      task.assignedTo.email,
      'Task Overdue',
      `<p>Your task "${task.title}" is overdue. Please check it as soon as possible.</p>`
    );
  }
})();
