import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Exercise,
  ExerciseModule,
  ExerciseModules,
} from "../../../types/exerciseTypes";

import { useState } from "react";

const AccordionCards = (props: {
  expandedByDefault?: boolean;
  data: ExerciseModules;
}) => {
  const { expandedByDefault, data } = props;
  const [isExpanded, setIsExpanded] = useState<boolean>(
    expandedByDefault || false
  );

  const [selectedModuleLabel, setSelectedModuleLabel] = useState(
    data.modules && data.modules.length > 0 ? data.modules[0].label : ""
  );

  if (!data) return null;

  const handleSelectedModuleChange = (label: string) => {
    setSelectedModuleLabel(label);
  };

  const handleAccordionChange = (
    _event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setIsExpanded(isExpanded);
  };

  return (
    <Accordion
      expanded={isExpanded}
      onChange={handleAccordionChange}
      defaultExpanded={expandedByDefault}
      sx={{ borderRadius: 4, px: 1, py: 2 }}
      elevation={0}
    >
      <AccordionSummary
        id="panel-header"
        aria-controls="panel-content"
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography variant={isExpanded ? "h4" : "h5"}>
          {/* todo: animate text size change */}
          {data.propgramLabel}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ModuleFilters
          data={data.modules}
          selectedModuleLabel={selectedModuleLabel}
          selectedModuleChangeListener={handleSelectedModuleChange}
        />
      </AccordionDetails>
      <div>
        {data.modules
          .filter((module) => module.label === selectedModuleLabel)
          .map((module, index) => (
            <Module key={index} module={module.exercises} />
          ))}
      </div>
    </Accordion>
  );
};

const ModuleFilters = (props: {
  data: ExerciseModule[];
  selectedModuleLabel: string;
  selectedModuleChangeListener: (label: string) => void;
}) => {
  const theme = useTheme();
  const { data, selectedModuleLabel, selectedModuleChangeListener } = props;

  return (
    <Grid container spacing={0} rowSpacing={2} columnSpacing={1.5} marginY={2}>
      {data.map((module, index) => (
        <Grid key={index} size="auto">
          <Button
            variant={
              selectedModuleLabel === module.label ? "contained" : "outlined"
            }
            color={"secondary"}
            onClick={() => selectedModuleChangeListener(module.label)}
            sx={{
              width: "fit-content",
              height: "48px",
              borderRadius: 99999,
              border: 0.8,
              borderColor: theme.palette.secondary.light,
              px: selectedModuleLabel === module.label ? 6 : 4,
              opacity: selectedModuleLabel === module.label ? 1 : 1,
              transition: `border-color ${theme.transitions.duration.standard}ms`,
              "&:hover": {
                borderColor: theme.palette.secondary.dark,
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "13px",
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              {module.label}
            </Typography>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

const Module: React.FC<{ module: Exercise[] }> = (props) => {
  const theme = useTheme();
  const { module } = props;
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      pb={4}
    >
      {module.map((exercise, index) => (
        <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
          <Card
            elevation={theme.palette.mode === "light" ? 4 : 0}
            sx={{
              borderRadius: 8,
              px: 2,
            }}
          >
            <CardContent>
              <Typography variant="h6" mt={2} mb={3}>
                {exercise.name}
              </Typography>
              <Typography variant="body2" mb={4}>
                {exercise.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AccordionCards;
