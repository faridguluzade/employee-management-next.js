import Stack from "@mui/material/Stack";
import Box from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";

import Heading from "@/ui/Heading";
import Status from "@/ui/Status";

import {
  LeftIcon,
  MailIcon,
  PhoneIcon,
  GlobalIcon,
} from "../../../public/assets/icons";

function EmployeeDetail() {
  return (
    <Grid container direction="column" gap={6}>
      <Grid>
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Button sx={{ padding: "5px" }}>
            <LeftIcon />
          </Button>
          <Heading title="Detail Employee" />
        </Stack>
      </Grid>

      <Grid container direction="row" gap={5}>
        <Grid
          xs={3}
          sx={{
            background: "#fff",
            borderRadius: "16px",
            padding: "24px",
            alignSelf: "start",
          }}
        >
          <Stack
            direction="column"
            rowGap={3}
            divider={<Divider orientation="horizontal" flexItem />}
          >
            <Stack direction="column" gap={2} alignItems="center">
              <Avatar
                src="https://s3-alpha-sig.figma.com/img/a5a6/6802/5cce8ec52d73b608b8229241a6e1001b?Expires=1704067200&Signature=Xp0ttts~PVpAi8tffdYCL6e9ioc9KzAYFZ5A3FgRyHrCUYPNyJylxAErlRiFs4GCNx1IPMP-PhEcBMQ3wRodcua~5Ykc7AExGb--IzJvBB56mGvwji4T3aBvKCBAiiv-fC-VW8-lsA5sHIGfib5Gcc8~XqCwOQ1simfY6K~sXgjxEaxH4d7dKYQnGtxSpETpG7eZkkVwC3p2pmtKOzduDFRudSrdND6OrPwjBYx2wIU8seq719nd-YreDk8AR~wjNv6jJIplGp0bl-j3rJtWNZzgIhxk~~OBdKedFfGB22aG1Wf8SVW~nkye6MZJF~lgMWWAfvllUX-02OmSfm1S0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                sx={{ width: 100, height: 100 }}
              />
              <Typography variant="h5" component="h2">
                Pristia Candra
              </Typography>

              <Typography variant="subtitle1" color="textSecondary">
                3D Designer
              </Typography>
              <Status status="active" />
            </Stack>
            <Stack direction="column" gap={2}>
              <Stack direction="row" spacing={1}>
                <MailIcon />
                <Typography variant="subtitle2">lincoln@gmail.com</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <PhoneIcon />
                <Typography variant="subtitle2">089318298493</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <GlobalIcon />
                <Typography variant="subtitle2">GMT +07:00</Typography>
              </Stack>
            </Stack>
            <Stack direction="column" gap={2}>
              <Stack direction="column" gap={1}>
                <Typography variant="body2" color="textSecondary">
                  Departement
                </Typography>
                <Typography variant="subtitle2">Designer</Typography>
              </Stack>
              <Stack direction="column" gap={1}>
                <Typography variant="body2" color="textSecondary">
                  Office
                </Typography>
                <Typography variant="subtitle2">Unpixel Studio</Typography>
              </Stack>
              <Stack direction="column" gap={1}>
                <Typography variant="body2" color="textSecondary">
                  Line Manager
                </Typography>
                <Stack direction="row" gap={1} alignItems="center">
                  <Avatar src="https://s3-alpha-sig.figma.com/img/db42/b32e/64deecee5214a6361521a0753a26a015?Expires=1704067200&Signature=McVCHsYn-QosMicYdAYhM4VHyvqpvoevAZ0UtlOnMfsBOmr-FXN-SwS4g1~VRyR-2WtvAzLagRwL707yRrr6NLCM8oc~LjmutgRx4Ji6fWr5BJDNR1FmxFH-BNgbJQPJokM2XtJ7oHNK1nl25-gdLgGWm6mH4gkUvgl05OIMc6MXVMiT3inzyl3v23L9U6zZ1Z8~pS4TJjqsSPQqy0-aGWw3MSXGY43DFYBuKMDRetXk1ojMeaUFZrh5sgPCnFLkRoemIRTSL6ak4Ho02DCunWi8Yjt7uUYvfvEgf0XTmA0PLJ253lsthqQx8wH7zsprs-l2SwESDgffPlvfZxuWZg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                  <Typography variant="subtitle2">Skylar Calzoni</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          xs={8}
          sx={{ background: "pink", borderRadius: "16px", flexGrow: 1 }}
        >
          Grid 2
        </Grid>
      </Grid>
    </Grid>
  );
}

export default EmployeeDetail;
