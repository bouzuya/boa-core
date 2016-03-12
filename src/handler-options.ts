import { A } from './a';

type HandlerOptions = {
  re: (action: A<any>) => void;
};

export { HandlerOptions };
