export default {
  NAVBAR: {
    menuItem: {
      dashboard: 'Dashboard',
      createPlan: 'Create plan',
      myPlans: 'My plans',
    },
  },
  CREATE_SPORT_PLAN: {
    heading: 'Sport plan creation',
    form: {
      planName: {
        label: 'Plan name',
      },
      sportType: {
        label: 'Sport type',
      },
      details: {
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
      plan: {
        label: 'Plan details',
      },
      steps: {
        label: 'Plan steps',
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
