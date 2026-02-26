import { useState } from "react";

export default function SubagentCard({ agent }) {
  const [copied, setCopied] = useState(false);

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(agent.systemPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const openInClaude = () => {
    const encoded = encodeURIComponent(agent.systemPrompt);
    window.open(`https://claude.ai/new?prompt=${encoded}`, "_blank");
  };

  const openInChatGPT = async () => {
    // Copy prompt to clipboard
    await navigator.clipboard.writeText(agent.systemPrompt);
    // Open ChatGPT
    window.open("https://chat.openai.com/chat", "_blank");
    alert("Prompt copied! Just paste it in ChatGPT.");
  };

  return (
    <div className="group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
      <h2 className="text-lg font-semibold mb-1">{agent.name}</h2>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">{agent.role}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {agent.tags.map(tag => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-md bg-neutral-200 dark:bg-neutral-800"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-700 p-3 rounded-xl font-mono text-xs mb-4 whitespace-pre-wrap">
        {agent.systemPrompt}
      </div>

      <div className="flex gap-2 flex-wrap">
        <button
          onClick={copyPrompt}
          className="px-3 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black active:scale-95 transition"
        >
          {copied ? "Copied" : "Copy"}
        </button>


        
      </div>
    </div>
  );
}