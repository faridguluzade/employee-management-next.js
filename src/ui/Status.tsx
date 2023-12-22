import Typography from "@mui/material/Typography";
import { amber, green, purple, red } from "@mui/material/colors";

function Status({ status }: { status: string }) {
  const statusToTagName: any = {
    active: green,
    probation: purple,
    "on-boarding": amber,
    "on-leave": red,
  };

  return (
    <Typography
      variant="body2"
      sx={{
        background: statusToTagName[status][50],
        width: "114px",
        padding: "4px 16px",
        color: statusToTagName[status][600],
        fontWeight: 700,
        borderRadius: "8px",
        textAlign: "center",
        textTransform: "uppercase",
        fontSize: "12px",
      }}
    >
      {status.replace("-", " ")}
    </Typography>
  );
}

export default Status;
