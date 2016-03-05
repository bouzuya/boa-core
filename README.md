# b-o-a

A simple framework.

## Concepts

- uni-directional
- single dispatcher
- the action cycle

## Types

- `type O<T> = Observable<T>;`
- `type A<T> = { type: string; data?: T; };`
- `type App = (action$: O<A<any>>, options: any) => O<A<any>>;`
- `type run = (app: App) => void`;

## Installation

```
$ npm install b-o-a
```

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][email]&gt; ([http://bouzuya.net][url])

[user]: https://github.com/bouzuya
[email]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
