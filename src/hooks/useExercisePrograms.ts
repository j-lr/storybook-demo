import { useState, useEffect } from "react";
import exercisesData from "../data/exercises_en.json";
import { ExerciseModules } from "../types/exerciseTypes";
import { parseExerciseModules } from "../utils/exerciseJsonParser";

const useExercisePrograms = () => {
  const [programs, setPrograms] = useState<ExerciseModules[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPrograms = async () => {
      try {
        const parsedPrograms = parseExerciseModules(exercisesData);
        setPrograms(parsedPrograms);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadPrograms();
  }, []);

  return { programs, loading, error };
};

export default useExercisePrograms;
