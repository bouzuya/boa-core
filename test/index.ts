import test from 'ava';
import { A, Handler, HandlerOptions, O, run } from '../src/';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toArray';

test.beforeEach((t: any) => {
  const app: Handler = (
    action$: O<A<any>>,
    { re }: HandlerOptions
  ): O<A<any>> => {
    t.context = { action$, re };
    return action$.filter(() => false);
  };
  run(app);
});

test.cb('`re` once', (t: any) => {
  const action$: O<A<any>> = t.context.action$;
  const re: (action: A<any>) => void = t.context.re;
  action$.subscribe(action => {
    t.truthy(action.type === 'dummy');
    t.truthy(action.data === 123);
    t.end();
  });
  re({ type: 'dummy', data: 123 });
});

test.cb('`re` twice', (t: any) => {
  const action$: O<A<any>> = t.context.action$;
  const re: (action: A<any>) => void = t.context.re;
  action$.take(2).toArray().subscribe(([a1, a2]) => {
    t.truthy(a1.type === 'dummy1');
    t.truthy(a1.data === 123);
    t.truthy(a2.type === 'dummy2');
    t.truthy(a2.data === 456);
    t.end();
  });
  re({ type: 'dummy1', data: 123 });
  re({ type: 'dummy2', data: 456 });
});

test.cb('`re` filter null', (t: any) => {
  let options: HandlerOptions = null;
  run((action$, opts) => {
    options = opts;
    action$.take(2).toArray().subscribe(([a1, a2]) => {
      t.truthy(a1.type === 'dummy5');
      t.truthy(a1.data === 123);
      t.truthy(a2.type === 'dummy6');
      t.truthy(a2.data === 456);
      t.end();
    });
    return action$.map(() => null);
  });
  options.re({ type: 'dummy5', data: 123 });
  options.re(null);
  options.re({ type: 'dummy6', data: 456 });
});

test.cb('auto re-action', (t: any) => {
  run((action$, opts) => {
    const dummy3$ = O
      .of({ type: 'dummy3', data: 123 });
    const dummy4$ = action$
      .filter(({ type }) => type === 'dummy3')
      .map(() => ({ type: 'dummy4', data: 456 }));
    action$
      .take(2)
      .toArray()
      .subscribe(([a1, a2]) => {
        t.truthy(a1.type === 'dummy3');
        t.truthy(a1.data === 123);
        t.truthy(a2.type === 'dummy4');
        t.truthy(a2.data === 456);
        t.end();
      });
    return O.merge(dummy3$, dummy4$);
  });
});
