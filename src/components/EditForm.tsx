import React from "react";
import { Button } from "./ui/button";


const EditForm: React.FC<{
  heading: string;
  summary: string;
  content: string;
  onChangeHeading: (val: string) => void;
  onChangeSummary: (val: string) => void;
  onChangeContent: (val: string) => void;
  onSave: () => void;
  onCancel: () => void;
  
}> = ({
  heading,
  summary,
  content,
  onChangeHeading,
  onChangeSummary,
  onChangeContent,
  onSave,
  onCancel , 

}) => (
  <div className="space-y-4">
    <input
      type="text"
      className="w-full p-2 border border-neutral-2 rounded-md text-base"
      value={heading}
      onChange={(e) => onChangeHeading(e.target.value)}
    />
    <textarea
      className="w-full p-2 border border-neutral-2 rounded-md text-sm"
      rows={2}
      value={summary}
      onChange={(e) => onChangeSummary(e.target.value)}
    />
    <textarea
      className="w-full p-2 border border-neutral-2 rounded-md text-sm"
      rows={4}
      value={content}
      onChange={(e) => onChangeContent(e.target.value)}
    />
    <div className="flex gap-3">
      <Button onClick={onSave}>Save</Button>
      <Button variant="outline" onClick={onCancel}>
        Cancel
      </Button>
    </div>
  </div>
);

export default EditForm;