import { Editor } from "react-draft-wysiwyg";
import React from "react";
const StyledEditor = ({ editorState, onEditorStateChange }) => {
  return (
    <Editor
      name="content"
      editorState={editorState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="home-editor"
      onEditorStateChange={onEditorStateChange}
    />
  );
};

export default StyledEditor;
