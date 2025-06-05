import { IconCloud } from "./magicui/icon-cloud";

// Corrected slugs for Simple Icons
const slugs = [
  // Core languages
  "typescript",
  "javascript",
  "nodedotjs", // Node.js

  // Web frameworks
  "react",
  "nextdotjs", // Next.js
  "nestjs",
  "express",

  // Styling
  "tailwindcss",
  "bootstrap",
  "html5",
  "css",

  // State management & testing
  "redux",
  "axios",

  // DevOps & Tools
  "docker",
  "kubernetes",
  "terraform",
  "git",
  "github",
  "gitlab",
  "linux",

  // Cloud platforms
  "amazonwebservices", // AWS
  "microsoftazure", // Azure

  // Databases
  "mongodb",
  "mysql",
  "postgresql",

  // Other tools
  "nginx",
  "grafana",
  "jira",
  "trello",
];

export function IconCloudDemo() {
  // Use the correct Simple Icons CDN URL format
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
