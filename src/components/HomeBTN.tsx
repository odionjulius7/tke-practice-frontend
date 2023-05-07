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

type Props = {
  startIconOption: JSX.IntrinsicElements | any;
  variant: "outlined" | "contained" | "text";

  sx: {} | null;
};

export default function IconLabelButtons({
  startIconOption,
  variant,
  sx,
}: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    // navigate("/bespoke");
  };
  const handleClose02 = () => {
    setAnchorEl(null);
    navigate("/bespoke");
  };
  const handleClose01 = () => {
    setAnchorEl(null);
    navigate("/destination");
  };
  return (
    <Stack
      direction="row"
      spacing={{
        xs: 1,
        sm: 2,
        md: 2,
      }}
    >
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
          Initiate A New Trip
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ marginTop: "1rem", marginLeft: "0rem" }}
        >
          <MenuItem onClick={handleClose02}>Bespoke Travel</MenuItem>
          <MenuItem onClick={handleClose01}>Destination Travel</MenuItem>
        </Menu>
      </Button>
    </Stack>
  );
}
