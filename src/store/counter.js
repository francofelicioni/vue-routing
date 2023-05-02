import { defineStore } from "pinia";
import { ref, computed } from "vue";


//STORE WITH OPTION API

// export const useCounterStore = defineStore("counter", {
//   // State must return an object
//   state: () => ({
//     count: 0,
//   }),
//   // Methods
//   actions: {
//     increment() {
//       this.count++;
//     },
//   },
//   // Computed properties
//   getters: {
//     double: (state) => state.count * 2,
//   },
// });


// STORE WITH COMPOSITION API

export const useCounterStore = defineStore("counter", () => {
  
    const count = ref(0);

    const increment = () => count.value ++;

    const double =  computed (()=> count.value *2);

    return {
        count,
        increment,
        double,
    }

});
