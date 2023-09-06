import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent = ({ content }: MarkdownContentProps) => {
  return (
    <article className="font-body">
      <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
    </article>
  );
};

export default MarkdownContent;
