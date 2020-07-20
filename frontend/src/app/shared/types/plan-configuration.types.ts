export enum PlanConfigurationType {
    FOOTBALL = 'football',
}

export interface FootballPlanConfiguration {
    ageClasses: Array<string>;
    levels: Array<number>;
}
