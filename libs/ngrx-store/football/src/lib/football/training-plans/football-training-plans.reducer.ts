import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { TrainingPlan, TrainingPlanId } from '@plan-it/types/training-plan';
import {
    getFootballTrainingPlans,
    loadFootballTrainingPlans,
    loadFootballTrainingPlansFailure,
} from '@plan-it/ngrx-actions/football-training-plans';

export interface FootballTrainingPlansState extends EntityState<TrainingPlan> {
    selectedPlanId: TrainingPlanId;
    loading: boolean;
    error: boolean;
}

export const adapter: EntityAdapter<TrainingPlan> = createEntityAdapter<TrainingPlan>({
    selectId: (plan: TrainingPlan) => plan.id,
});

export const initialState = adapter.getInitialState({
    selectedPlanId: null,
    loading: false,
    error: false,
});

export const footballTrainingPlansReducer = createReducer(
    initialState,
    on(
        getFootballTrainingPlans,
        (state: FootballTrainingPlansState): FootballTrainingPlansState => ({ ...state, loading: true, error: false })
    ),
    on(
        loadFootballTrainingPlans,
        (state: FootballTrainingPlansState, { plans }: { plans: TrainingPlan[] }): FootballTrainingPlansState => {
            return adapter.addMany(plans, { ...state, loading: false, error: false });
        }
    ),
    on(
        loadFootballTrainingPlansFailure,
        (state: FootballTrainingPlansState): FootballTrainingPlansState => ({
            ...state,
            error: true,
            loading: false,
        })
    )
);

export function reducer(state: FootballTrainingPlansState = initialState, action: Action): FootballTrainingPlansState {
    return footballTrainingPlansReducer(state, action);
}

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectFootballPlanIds = selectIds;

export const selectFootballPlanEntities = selectEntities;

export const selectAllFootballPlans = selectAll;

export const selectFootballPlanTotal = selectTotal;
