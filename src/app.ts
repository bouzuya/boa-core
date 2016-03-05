import { A } from './a';
import { O } from './o';

type App = (
  action$: O<A<any>>,
  options: { re: (action: A<any>) => void; }
) => O<A<any>>;

export { App };
