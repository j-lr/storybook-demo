export interface Exercise {
  name: string;
  description: string;
  difficulty: string;
}

export interface ExerciseModule {
  label: string;
  exercises: Exercise[];
}

export interface ExerciseModules {
  propgramLabel: string;
  modules: ExerciseModule[];
}

export interface ExerciseProgramsData {
  exercises: {
    calisthenics: {
      beginner: Exercise[];
      intermediate: Exercise[];
      advanced: Exercise[];
    };
    strength_training: {
      chest: Exercise[];
      back: Exercise[];
      shoulders: Exercise[];
      legs: Exercise[];
      arms: Exercise[];
    };
    cardio: {
      low_impact: Exercise[];
      high_impact: Exercise[];
    };
    olympic_weightlifting: {
      clean_and_jerk: Exercise[];
      snatch: Exercise[];
      accessories: Exercise[];
    };
  };
}
