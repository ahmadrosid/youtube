import clsx from "clsx";
import { Bot, User } from "lucide-react";
import dynamic from "next/dynamic";
let Markdown = dynamic(() => import("./markdown"), { ssr: false});

export default function MessageItem({ source, text }) {
  const isBot = source === "bot";

  return (
    <div className={clsx( isBot ? 'bg-gpt-600' : 'bg-gpt-700', "border-t border-gpt-800 p-4 text-gpt-100")}>
      <div className="mx-w-3xl flex gap-4">
        <div>
          <div className={clsx(isBot ? "bg-emerald-500" : "bg-blue-500", "rounded p-1.5")}>
            {isBot ? <Bot width={18} height={18} /> : <User width={18} height={18} />}
          </div>
        </div>
        <div className="pt-1 prose text-white">
          <Markdown markdown={text} />
        </div>
      </div>
    </div>
  )
}