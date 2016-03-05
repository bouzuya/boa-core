import { A } from './a';
import { AppOptions } from './app-options';
import { O } from './o';

type App = (
  action$: O<A<any>>,
  options: AppOptions
) => O<A<any>>;

export { App };
