import { Github, User, MessageCircle } from "lucide-react";

const links = [
  {
    href: "https://github.com/SecureSecSubPlace",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.roblox.com/users/1440588434/profile",
    label: "Roblox",
    icon: User,
  },
  {
    href: "#",
    label: "Discord: jmpentry",
    icon: MessageCircle,
    copy: "jmpentry",
  },
];

const SocialLinks = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-4">
      {links.map((link) => (
        link.copy ? (
          <button
            key={link.label}
            onClick={() => handleCopy(link.copy!)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-800/80 hover:bg-blue-700 text-white font-medium shadow transition"
            title="Copy Discord username"
          >
            <link.icon size={20} />
            {link.label}
          </button>
        ) : (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-800/80 hover:bg-blue-700 text-white font-medium shadow transition"
          >
            <link.icon size={20} />
            {link.label}
          </a>
        )
      ))}
    </div>
  );
};

export default SocialLinks;
