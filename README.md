# boajs-core

The core library for b-o-a.

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
$ npm install boajs-core
```

## Badges

[![Circle CI][circleci-badge-url]][circleci-url]

## License

### Source Code

[MIT](LICENSE) ([@bouzuya][user])

### Logo

MIT ([@haskrock](https://github.com/hashrock))

## Author

[bouzuya][user] &lt;[m@bouzuya.net][email]&gt; ([http://bouzuya.net][url])

[user]: https://github.com/bouzuya
[email]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
[circleci-badge-url]: https://circleci.com/gh/bouzuya/boajs-core.svg?style=svg
[circleci-url]: https://circleci.com/gh/bouzuya/boajs-core
