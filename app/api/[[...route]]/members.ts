import { sendEmail } from '@/lib/email';

async function handleMember(member: any) {
  // After adding/updating member
  await sendEmail(
    member.email,
    'Welcome to the Workspace!',
    `<p>Hello ${member.name}, you've been added to the workspace.</p>`
  );
}
