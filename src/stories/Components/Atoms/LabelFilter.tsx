import { Button, Typography, useTheme } from "@mui/material";

/**
 * `LabelFilter` is a functional component that renders a button with a label.
 * The button's appearance and behavior can be customized through the props.
 *
 * @param props - The properties object.
 * @param props.label - The text label to be displayed inside the button.
 * @param props.isSelected - Optional. If true, the button will have a "contained" variant. Defaults to false.
 * @param props.isPrimary - Optional. If true, the button will use the primary color scheme. Defaults to false.
 * @param props.clickListener - Optional. A callback function that is invoked when the button is clicked, with the label as an argument.
 *
 * @returns A `Button` component from MUI with customized styles and behavior.
 */
const LabelFilter = (props: {
  label: string;
  isSelected?: boolean;
  isPrimary?: boolean;
  clickListener?: (label: string) => void;
}) => {
  const theme = useTheme();
  const { label, isSelected = false, isPrimary = false, clickListener } = props;

  return (
    <Button
      variant={isSelected ? "contained" : "outlined"}
      color={isPrimary ? "primary" : "secondary"}
      onClick={() => clickListener && clickListener(label)}
      sx={{
        width: "fit-content",
        height: "48px",
        borderRadius: 99999,
        border: 0.8,
        borderColor: isPrimary
          ? theme.palette.primary.light
          : theme.palette.secondary.light,
        px: isSelected ? 6 : 4,
        transition: `border-color ${theme.transitions.duration.standard}ms`,
        "&:hover": {
          borderColor: isPrimary
            ? theme.palette.primary.dark
            : theme.palette.secondary.dark,
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
        {label}
      </Typography>
    </Button>
  );
};

export default LabelFilter;
