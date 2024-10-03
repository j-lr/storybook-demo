import {
  Exercise,
  ExerciseModules,
  ExerciseProgramsData,
} from "../types/exerciseTypes";
import { capitalizeFirstLetter } from "./textUtils";

/**
 * Parses JSON data to an array of ExerciseModules objects.
 * @param jsonData - The JSON data to parse.
 * @returns An array of ExerciseModules objects.
 */
export const parseExerciseModules = (
  jsonData: ExerciseProgramsData
): ExerciseModules[] => {
  const parsedModules: ExerciseModules[] = [];

  (
    Object.keys(jsonData.exercises) as Array<
      keyof ExerciseProgramsData["exercises"]
    >
  ).forEach((category) => {
    const modules = Object.keys(jsonData.exercises[category]).map(
      (subCategory) => {
        const exercises: Exercise[] =
          jsonData.exercises[category][
            subCategory as keyof (typeof jsonData.exercises)[typeof category]
          ];
        return {
          label: capitalizeFirstLetter(subCategory.replace(/_/g, " ")),
          exercises: exercises,
        };
      }
    );

    parsedModules.push({
      propgramLabel: category
        .split("_")
        .map((word) => capitalizeFirstLetter(word))
        .join(" "),
      modules: modules,
    });
  });

  return parsedModules;
};
