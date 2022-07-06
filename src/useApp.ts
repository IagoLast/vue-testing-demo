import { reactive } from "vue";
import cocktails from "./repository/cocktails";

interface IState {
  status: "LOADING" | "SUCCESS" | "FAILED";
  data: IDrink[];
  err: string;
}

export default function useApp() {
  const state = reactive<IState>({
    status: "SUCCESS",
    err: "",
    data: [],
  });

  function fetchData(query: string) {
    state.status = "LOADING";
    state.data = [];
    state.err = "";

    cocktails
      .getDetails({ query })
      .then((res) => {
        state.status = "SUCCESS";
        state.data = res.drinks;
      })
      .catch((err) => {
        if (err.message) {
          state.err = err.message;
        }
        state.status = "FAILED";
      });
  }

  function handleSubmit(e: Event) {
    e.preventDefault();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const query = e.target.elements["query"].value;
    return fetchData(query);
  }

  return {
    state,
    handleSubmit,
  };
}
