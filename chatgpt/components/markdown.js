import { Clipboard } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "../theme/dark";

export default function Markdown({ markdown }) {
  return (
    <ReactMarkdown
      children={markdown}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          if (inline) {
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }

          let [copy, setCopy] = useState("Copy code");

          function copyCode(code) {
            window.navigator.clipboard
              .writeText(code)
              .then(() => setCopy("Copied!"))
              .catch(() => setCopy("Can not copy the result!"))
              .finally(() => setTimeout(() => setCopy("Copy code"), 2500));
          }

          let lang = match ? match[1] : "bash";

          return (
            <div className="text-sm rounded-md bg-black/50 mb-4 w-[calc(100vw-7em)] md:w-[calc(100vw-25em)] lg:w-[calc(100vw-35em)] xl:w-[calc(100vw-55em)]">
              <div className="bg-gpt-500 w-full py-[10px] px-4 flex justify-end rounded-t-md">
                <div
                  onClick={() => copyCode(children)}
                  className="flex items-center text-xs font-light gap-2 cursor-pointer"
                >
                  <Clipboard width={18} height={18} />
                  <span>{copy}</span>
                </div>
              </div>
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={dark}
                language={lang}
                PreTag="pre"
                {...props}
              />
            </div>
          );
        },
      }}
    />
  );
}