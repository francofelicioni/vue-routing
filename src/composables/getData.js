import { ref } from "vue";
import axios from "axios";

export const useGetData = () => {
  const data = ref(null); // Referencia reactiva null porque no sabemos que tipo de dato va a ser (array, string, objeto, etc)
  const loading = ref(true);
  const error = ref(null)

  const getData = async (url) => {
    loading.value = true;
    try {
      const res = await axios.get(url);
      data.value = res.data; //  Axios devuelve toda la informacion de la API a través del objeto data
    } catch (e) {
      error.value = 'Server error'
      // console.log(e);
    } finally {
      loading.value = false;
    }
  };

  return {
    getData,
    data,
    loading,
    error
  };
};
