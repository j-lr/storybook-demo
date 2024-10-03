import AccordionCards from "../Atoms/AccordionCards";
import useExercisePrograms from "../../../hooks/useExercisePrograms";
import { CircularProgress, Typography, Box } from "@mui/material";

const ExerciseProgramsTemplate = () => {
  const { programs, loading, error } = useExercisePrograms();

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ pb: 8, pt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Exercise Programs
      </Typography>
      {programs.map((program, index) => (
        <Box key={program.propgramLabel} mt={4} mb={2}>
          <AccordionCards data={program} expandedByDefault={index === 0} />
        </Box>
      ))}
    </Box>
  );
};

export default ExerciseProgramsTemplate;
