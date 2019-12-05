export default {
  NAVBAR: {
    menuItem: {
      dashboard: 'Dashboard',
      createPlan: 'Create plan',
      plans: 'Plans',
    },
  },
  CREATE_SPORT_PLAN: {
    heading: 'Sport plan creation',
    form: {
      planName: {
        label: 'Plan name',
      },
      description: {
        label: 'Description',
      },
      goal: {
        label: 'Goal',
      },
      level: {
        label: 'Level',
      },
      ageClass: {
        label: 'Age class',
      },
      steps: {
        name: {
          label: 'Step name',
        },
        description: {
          label: 'Description',
        },
        addNew: 'Add new step',
      },
    },
    stepper: {
      planDetails: {
        label: 'Main details',
      },
      planSpecialDetails: {
        label: 'Specific details',
      },
      steps: {
        label: 'Plan steps',
      },
    },
  },
  PLANS: {
    column: {
      name: 'Plan name',
      ageClass: 'Age class',
      level: 'Level',
      creator: 'Creator',
      actions: {
        delete: 'Delete plan',
      },
    },
  },
  FORM: {
    optional: {
      label: 'Optional',
    },
    error: {
      required: 'The field is required',
      maxlength: 'The max length is {{number}} characters',
      minlength: 'The min length is {{number}} characters',
    },
  },
};
