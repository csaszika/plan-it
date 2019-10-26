export type TrainingPlanId = string;

export interface TrainingPlanStep {
  name: string;
  description: string;
}

export interface TrainingPlan {
  id: TrainingPlanId;
  ageClass: string;
  description: string;
  goal: string;
  level: string;
  name: string;
  steps: Array<TrainingPlanStep>;
}
