import { execSync } from 'child_process';

const components = ['button', 'input', 'card', 'progress', 'textarea', 'sheet', 'slider'];

components.forEach(component => {
  console.log(`Installing ${component}...`);
  execSync(`npx shadcn@latest add ${component}`, { stdio: 'inherit' });
});
