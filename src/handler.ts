import { A } from './a';
import { HandlerOptions } from './handler-options';
import { O } from './o';

type Handler = (
  action$: O<A<any>>,
  options: HandlerOptions
) => O<A<any>>;

export { Handler };
