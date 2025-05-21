import StarryBackground from "./components/StarryBackground";
import Profile from "./components/Profile";
import SkillBar from "./components/SkillBar";
import SocialLinks from "./components/SocialLinks";

const skills = [
  { name: "C#", percentage: 70, color: "#6e4cff" },
  { name: "C++", percentage: 60, color: "#00599C" },
  { name: "Lua / Luau", percentage: 90, color: "#2C2D72" },
  { name: "Node.js", percentage: 96, color: "#3C873A" },
  { name: "discord.js", percentage: 96, color: "#7289da" },
];

function App() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden bg-black">
      <StarryBackground />
      <main className="relative z-10 flex flex-col items-center justify-center w-full max-w-xl px-6 py-12 rounded-3xl bg-black/70 shadow-2xl mt-12 mb-8 border border-white/10 backdrop-blur-lg">
        <Profile />
        <div className="w-full mt-8">
          {skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
        <SocialLinks />
      </main>
      <footer className="text-gray-400 text-xs text-center mb-4 z-10">
        &copy; {new Date().getFullYear()} vmtrace
      </footer>
    </div>
  );
}

export default App