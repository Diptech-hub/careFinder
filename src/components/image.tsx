import React, { useState } from "react";

interface FileUploadProps {
  onChange: (files: File[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onChange }) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList) {
      const updatedFiles: File[] = Array.from(fileList);
      setFiles([...files, ...updatedFiles]);
      onChange([...files, ...updatedFiles]); // Notify parent component about the change
    }
  };

  const handleDeleteFile = (index: number) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
    onChange(updatedFiles); // Notify parent component about the change
  };

  return (
    <div className="flex flex-col space-y-4 w-3/4 my-4">
      <label className="text-sm ">Add relevant Images</label>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="text-sm border border-teal-500 focus:border-teal-700 mb-4 py-2 px-3 focus:outline-none rounded"
        required
      />
      <div className="grid grid-cols-3 gap-4">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-between border border-gray-300 rounded px-3 py-2"
          >
            <span>{file.name}</span>
            <button
              onClick={() => handleDeleteFile(index)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
