import { Container, CssBaseline, Typography, useTheme } from "@mui/material";
import LabelRevealAnim from "./Anim/LabelRevealAnim";
import ExerciseProgramsTemplate from "./ExerciseProgramsTemplate";

const HomeTemplate = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const onLabelRevealAnimComplete = () => {
    console.log("Label animation completed");
  };

  return (
    <>
      <CssBaseline />

      <LabelRevealAnim
        label="Web-Gym"
        maxFontSize={Math.min(250, window.innerWidth / 10)}
        animDuration={2.4}
        finalOpacity={isDarkMode ? 0.8 : 1}
        onCompletionListener={onLabelRevealAnimComplete}
      />
      <Container maxWidth="lg">
        <Typography variant="h5" color="textSecondary">
          What can be
          <strong style={{ color: theme.palette.secondary.main }}>
            {" "}
            Measured,{" "}
          </strong>
          can be
          <strong style={{ color: theme.palette.secondary.main }}>
            {" "}
            Improved.
          </strong>
        </Typography>

        <ExerciseProgramsTemplate />
      </Container>
    </>
  );
};

export default HomeTemplate;
