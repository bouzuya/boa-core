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
$ npm install boa-core
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
