import { useReducer } from "react";

// https://reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate
// A small React hook that updates some pointless state to
// force a re-render of a component.
export const useForceUpdate = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  return forceUpdate;
};
