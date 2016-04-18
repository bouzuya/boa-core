import { Subject } from 'rxjs/Subject';
import { filter } from 'rxjs/operator/filter';
import { share } from 'rxjs/operator/share';
import { A } from './a';
import { Handler } from './handler';

export default function run(app: Handler): void {
  const subject = new Subject<A<any>>();
  const $ = subject.asObservable();
  const filtered$ = filter.call($, action => !!action);
  const action$ = share.call(filtered$);
  const re = (action: A<any>) => setTimeout(() => subject.next(action));
  app(action$, { re }).subscribe(re);
};
