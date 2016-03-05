# b-o-a

A simple framework.

## Concepts

- uni-directional
- single dispatcher
- action cycle

## Types

- `type O<T> = Observable<T>;`
- `type A<T> = { type: string; data?: T; };`
- `type AppOptions = { re: (action: A<any>) => void; };`
- `type App = (action$: O<A<any>>, options?: AppOptions) => O<A<any>>;`
- `type run = (app: App) => void`;

## Installation

```
$ npm install b-o-a
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
[circleci-badge-url]: https://circleci.com/gh/bouzuya/b-o-a.svg?style=svg
[circleci-url]: https://circleci.com/gh/bouzuya/b-o-a
