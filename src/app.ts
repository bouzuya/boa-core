import { O, A } from './o-a';

type App = (
  action$: O<A<any>>,
  options: { re: (action: A<any>) => void; }
) => O<A<any>>;

export { App };
