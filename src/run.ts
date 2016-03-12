import { Subject } from 'rxjs';
import { A } from './a';
import { Handler } from './handler';

export default function run(app: Handler): void {
  const subject = new Subject<A<any>>();
  const action$ = subject
    .asObservable()
    .filter(action => action && action.type !== 'noop')
    .share();
  const re = (action: A<any>) => setTimeout(() => subject.next(action));
  app(action$, { re }).subscribe(re);
};
