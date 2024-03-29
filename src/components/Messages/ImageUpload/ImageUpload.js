import React, { useState } from "react";
import { Icon, Input, Modal, Button } from "semantic-ui-react";
import mime from "mime-types";

const ImageUpload = (props) => {
  const [fileState, setFileState] = useState(null);
  const acceptedTypes = [
    "image/png",
    "image/jpg",
    "audio/mpeg",
    "audio/wav",
    "application/pdf",
    "application/xlsx",
    "application/docx",
    "image/jpeg"
  ];
  const onFileAdded = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileState(file);
    }
  };
  const onSubmit = () => {
    console.log(mime.lookup(fileState.name), "file type");
    if (fileState && acceptedTypes.includes(mime.lookup(fileState.name))) {
      props.uploadImage(fileState, mime.lookup(fileState.name));
      props.onClose();
      setFileState(null);
    }
  };
  return (
    <div>
      <Modal open={props.open} onClose={props.onClose}>
        <Modal.Header>Select a Image</Modal.Header>
        <Modal.Content>
          <Input
            type="file"
            name="file"
            label="file Type(jpg,jpeg,mp3,pdf,png)"
            onChange={onFileAdded}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={onSubmit} style={{ width: "100px" }}>
            <Icon name="checkmark">Add</Icon>
          </Button>
          <Button
            color="red"
            onClick={props.onClose}
            style={{ width: "100px" }}
          >
            <Icon name="remove">Cancel</Icon>
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};
export default ImageUpload;
