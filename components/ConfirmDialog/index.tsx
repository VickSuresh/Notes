import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography, Button } from "@mui/material";
import React, { Component } from "react";

interface IProps {
  open: boolean,
  handleClose: () => void,
  handleConfirm: () => void
}

export default class ConfirmDialog extends React.Component<IProps> {
  render() {
    return (
      <Dialog open={this.props.open} onClose={this.props.handleClose}>
        <DialogTitle color="primary">Delete this note?</DialogTitle>
        <DialogContent>
          <DialogContentText>This action is irreversible</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose}>
            Cancel
          </Button>
          <Button onClick={this.props.handleConfirm}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}