import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../Features/storeHook";

import { useAppDispatch } from "../Features/storeHook";
// import { resetTokenUser } from "../Features/auth/authSlice";
import { resetTokenUser } from "../Features/auth/authSlice";

type Props = {
  startIconOption: JSX.IntrinsicElements | any;
  variant: "outlined" | "contained" | "text";

  sx: {} | null;
};

function ProfileBtn({ startIconOption, variant, sx }: Props) {
  const { singleUser } = useAppSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    // navigate("/change-password");
  };
  const handleClose01 = () => {
    setAnchorEl(null);
    navigate("/change-password");
  };

  // logout
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(resetTokenUser());
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        endIcon={
          <KeyboardArrowDownIcon
            sx={{
              color: "white",
            }}
          />
        }
        variant={variant}
        startIcon={startIconOption}
        sx={sx}
      >
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {singleUser?.firstName}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ marginTop: "1rem", marginLeft: "-2rem" }}
        >
          <MenuItem onClick={handleClose01}>Change Password</MenuItem>
          <MenuItem onClick={handleClose}>Your Profile</MenuItem>
          <MenuItem onClick={handleLogOut}>Logout</MenuItem>
        </Menu>
      </Button>
    </Stack>
  );
}

export default ProfileBtn;
