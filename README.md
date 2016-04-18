# boa-core

The core library for [b-o-a][bouzuya/b-o-a].

[bouzuya/b-o-a]: https://github.com/bouzuya/b-o-a

## Concepts

- uni-directional
- single dispatcher
- action cycle

## Types

- `type O<T> = Observable<T>;`
- `type A<T> = { type: string; data?: T; };`
- `type HandlerOptions = { re: (action: A<any>) => void; };`
- `type Handler = (action$: O<A<any>>, options?: HandlerOptions) => O<A<any>>;`
- `type run = (app: Handler) => void`;

## Installation

```
$ npm install boa-core rxjs@5.0.0-beta.6 # you can use rxjs@5.x
```

## Usage

```
import { A, Handler, HandlerOptions, O, run } from 'boa-core';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';

const app: Handler = (
  action$: O<A<any>>,
  { re }: HandlerOptions
): O<A<any>> => {
  return O.merge(
    O
    .of({ count: 1 })
    .merge(
      action$
        .filter(action => action.type === 'increment')
        .map(() => state => state.count + 1)),
      action$
        .filter(action => action.type === 'decrement')
        .map(() => state => state.count - 1))
    )
    .scan((state, updater) => updater(state))
    .map(data => ({ type: 'render', data })),
    // ...
  );
};

run(app);
```

## Badges

[![Circle CI][circleci-badge-url]][circleci-url]

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][email]&gt; ([http://bouzuya.net][url])

[user]: https://github.com/bouzuya
[email]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
[circleci-badge-url]: https://circleci.com/gh/bouzuya/boa-core.svg?style=svg
[circleci-url]: https://circleci.com/gh/bouzuya/boa-core
