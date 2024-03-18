import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

interface MarkdownEditorProps {
  onChange?: (markdown: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ onChange }) => {
  const [markdown, setMarkdown] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedMarkdown = event.target.value;
    setMarkdown(updatedMarkdown);
    if (onChange) {
      onChange(updatedMarkdown);
    }
  };

  return (
    <div className="flex flex-col space-y-4 my-2">
      <h2 className="text-lg md:text-xl text-teal-500 my-2">Health Care Information</h2>
      <textarea
        value={markdown}
        onChange={handleInputChange}
        placeholder="More Information about your health care services..."
        className="w-full h-32 md:h-40 border border-teal-500 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-teal-700"
      />
      <h2 className="text-lg md:text-xl text-teal-500 my-2">Preview Health Care Information</h2>
      <div className="border border-teal-500 rounded-md p-4">
        <ReactMarkdown remarkPlugins={[gfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
