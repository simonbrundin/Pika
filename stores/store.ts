import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      goals: [],
      categories: [],
      goalInFocus: 1,
      baseName: "Mitt liv",
    };
  },
  actions: {},

  getters: {
    children(state) {
      if (state.goalInFocus === 0) {
        let array = state.goals.filter(function (goal) {
          return goal.parents.length === 0;
        });
        return array;
      }
      let children = state.goals.filter(function (goal) {
        return (
          goal.parents.length > 0 &&
          goal.parents[0].parent_id === state.goalInFocus
        );
      });
      return children;
    },
    currentGoal(state) {
      if (state.goalInFocus === 0) {
        return { id: 0, title: state.baseName };
      }
      let array = state.goals.filter(function (goal) {
        return goal.id === state.goalInFocus;
      });
      return array[0];
    },
    parents(state) {
      if (state.goalInFocus === 0) {
        return [];
      }
      let parents = this.currentGoal.parents;
      const myArrayFiltered = state.goals.filter((goal) => {
        return parents.some((parent) => {
          return parent.parent_id === goal.id;
        });
      });

      return myArrayFiltered;
    },
  },
});
