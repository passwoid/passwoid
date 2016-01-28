# powm [![Build Status][1]][3] [![Coverage Status][2]][4]

> A reasonably secure password generator

powm generates reasonably secure passwords. That's it; that's all it does.

Starting with version 3.0.0, the powm CLI has been separated into a new package
called [powm-cli][5]. The CLI is no longer included in this package.

The passwords generated by powm are strings of random characters. Passwords are
chosen from the set of all upper-case letters except I and O, all lower-case
letters except l, and the digits 2 through 9. 0 and O are not used to avoid
confusion with each other when passwords are displayed in sans-serif fonts. I,
l, and 1 are not used for the same reason. Passwords are guaranteed to contain
at least one upper-case letter, one lower-case letter, and one number.

The default length is 16. The minimum length is 3, because a shorter password
would not satisfy the requirement to use all three classes of characters.

Prior to version 2.0.0, powm guaranteed that passwords would not repeat any
characters, and enforced a maximum length of 57, because a longer password would
not satisfy this requirement. Starting with version 2.0.0, powm will create
a password of any length of 3 or greater, and guarantees that passwords will not
repeat any characters if the requested length is 57 or less.

powm is based on [pwm][6], my Ruby implementation of a similar concept. powm
differs from pwm in that powm enforces the no-repeated-characters requirement,
but pwm does not. (The name change is because "pwm" was already taken as a
package name on npm.)

## Installation

```bash
npm install --save powm
```

## Usage

```js
var powm = require('powm');

powm();  // returns a password of the default length (16)
powm(8); // returns a password of length 8
powm(1); // throws Error: Cannot generate password of length 1
```

## Contributing

Bug reports and pull requests are welcome on GitHub at
[https://github.com/markcornick/powm][7]. This project is intended to be a safe,
welcoming space for collaboration, and contributors are expected to adhere to
the [Contributor Covenant][8] code of conduct.

## License

powm is available as open source under the terms of the [GNU Lesser General
Public License][9], version 3.0 or later.

[1]: https://travis-ci.org/markcornick/powm.svg

[2]: https://coveralls.io/repos/markcornick/powm/badge.svg?branch=master&service=github

[3]: https://travis-ci.org/markcornick/powm

[4]: https://coveralls.io/github/markcornick/powm?branch=master

[5]: https://github.com/markcornick/powm-cli

[6]: https://github.com/markcornick/pwm

[7]: https://github.com/markcornick/powm

[8]: http://contributor-covenant.org

[9]: http://www.gnu.org/licenses/lgpl-3.0-standalone.html
