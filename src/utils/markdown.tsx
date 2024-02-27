import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <div>
        <h2>Markdown Editor</h2>
        <div>
          <button onClick={() => setMarkdown(markdown + "# ")}>
            # Header 1
          </button>
          <button onClick={() => setMarkdown(markdown + "## ")}>
            ## Header 2
          </button>
          <button onClick={() => setMarkdown(markdown + "### ")}>
            ### Header 3
          </button>
          <button onClick={() => setMarkdown(markdown + "\n**Bold Text**")}>
            Bold
          </button>
          <button onClick={() => setMarkdown(markdown + "\n*Italic Text*")}>
            Italic
          </button>
          <button
            onClick={() =>
              setMarkdown(markdown + "\n[Link Text](http://example.com)")
            }
          >
            Link
          </button>
        </div>
        <textarea
          value={markdown}
          onChange={handleInputChange}
          placeholder="Write your markdown here..."
          rows={10}
          cols={50}
        />
      </div>
      <div>
        <h2>Preview</h2>
        <div>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
