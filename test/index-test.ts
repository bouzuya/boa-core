import assert from 'power-assert';
import { A, App, O, run } from '../src/';

describe('index', function() {
  it('works', function() {
    O.of(123);
    let re: (action: A<any>) => void = null;
    const app: App = (
      action$: O<A<any>>,
      options: { re: (action: A<any>) => void; }
    ) => {
      re = options.re;
      return action$
        .do(action => {
          assert(action.type === 'dummy');
          assert(action.data === 123);
        });
    };
    run(app);
    re({ type: 'dummy', data: 123 });
  });
});
