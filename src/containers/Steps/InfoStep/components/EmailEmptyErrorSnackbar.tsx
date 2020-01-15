import React, { FC } from "react";
import { Snackbar, IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

interface EmailEmptyErrorSnackbarProps {
    open: boolean;
    onClose: () => void;
  }
  
  const EmailEmptyErrorSnackbar: FC<EmailEmptyErrorSnackbarProps> = ({ open, onClose }) => {
    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      onClose();
    };
  
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="이메일을 입력해주세요!"
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    );
  }

  export default EmailEmptyErrorSnackbar;