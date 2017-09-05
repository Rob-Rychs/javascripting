const cons = (h, t) => b => b ? h : t

const nth = (l, n) =>
      n === 0
        ? l(true)
        : nth(l(false), n - 1)

const prnList = (l, s='(') =>
      l ? prnList(
            l(false),
            s + l(true) +
              (l(false) ? ' ' : ''))
        : console.log(s + ')')

const reverse = (l, r=null) =>
      l ? reverse(l(false), cons(l(true), r)) : r

const list = cons(1, cons(2, cons(3, null)))

prnList(list)
console.log(nth(list, 1))
prnList(reverse(list))

// from this hilarious article https://aphyr.com/posts/340-reversing-the-technical-interview