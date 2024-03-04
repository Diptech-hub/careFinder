import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownEditorProps {
  onChange: (markdown: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ onChange }) => {
  const [markdown, setMarkdown] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedMarkdown = event.target.value;
    setMarkdown(updatedMarkdown);
    onChange(updatedMarkdown); // Notify parent component about the change
  };

  return (
    <div className="flex flex-col space-y-4 my-2">
      <div>
        <h2 className="text-sm my-2">Hospital Information </h2>
        <textarea
          value={markdown}
          onChange={handleInputChange}
          placeholder="Give more informations ..."
          className="border border-teal-500 rounded px-3 py-2"
          rows={10}
          cols={50}
        />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setMarkdown(markdown + "# ")}
            className="btn btn-primary"
          >
            Header 1
          </button>
          <button
            onClick={() => setMarkdown(markdown + "## ")}
            className="btn btn-primary"
          >
            Header 2
          </button>
          <button
            onClick={() => setMarkdown(markdown + "### ")}
            className="btn btn-primary"
          >
            Header 3
          </button>
          <button
            onClick={() => setMarkdown(markdown + "\n**Bold Text**")}
            className="btn btn-primary"
          >
            Bold
          </button>
          <button
            onClick={() => setMarkdown(markdown + "\n*Italic Text*")}
            className="btn btn-primary"
          >
            Italic
          </button>
          <button
            onClick={() =>
              setMarkdown(markdown + "\n[Link Text](http://example.com)")
            }
            className="btn btn-primary"
          >
            Link
          </button>
        </div>
        <div>
          <h2 className="text-sm mb-2">Preview</h2>
          <div className="border border-teal-500 rounded px-3 py-2 w-3/4">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
