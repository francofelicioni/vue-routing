import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  // State must return an object
  state: () => ({
    count: 0,
  }),
  // Methods
  actions: {
    increment() {
      this.count++;
    },
  },
  // Computed properties
  getters: {
    double: (state) => state.count * 2,
  },
});
