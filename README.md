<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Special Functions

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fast math special functions.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-fast
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var fmath = require( '@stdlib/math-base-special-fast' );
```

#### fmath

Namespace containing "fast" math special functions. 

```javascript
var fcns = fmath;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`abs( x )`][@stdlib/math/base/special/fast/abs]</span><span class="delimiter">: </span><span class="description">compute an absolute value.</span>
-   <span class="signature">[`acosh( x )`][@stdlib/math/base/special/fast/acosh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arccosine of a number.</span>
-   <span class="signature">[`ampbm( x, y )`][@stdlib/math/base/special/fast/alpha-max-plus-beta-min]</span><span class="delimiter">: </span><span class="description">compute the hypotenuse using the alpha max plus beta min algorithm.</span>
-   <span class="signature">[`asinh( x )`][@stdlib/math/base/special/fast/asinh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arcsine of a number.</span>
-   <span class="signature">[`atanh( x )`][@stdlib/math/base/special/fast/atanh]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arctangent of a number.</span>
-   <span class="signature">[`hypot( x, y )`][@stdlib/math/base/special/fast/hypot]</span><span class="delimiter">: </span><span class="description">compute the hypotenuse.</span>
-   <span class="signature">[`max( x, y )`][@stdlib/math/base/special/fast/max]</span><span class="delimiter">: </span><span class="description">return the maximum value.</span>
-   <span class="signature">[`min( x, y )`][@stdlib/math/base/special/fast/min]</span><span class="delimiter">: </span><span class="description">return the minimum value.</span>
-   <span class="signature">[`powint( base, exponent )`][@stdlib/math/base/special/fast/pow-int]</span><span class="delimiter">: </span><span class="description">exponential function.</span>
-   <span class="signature">[`log2Uint32( x )`][@stdlib/math/base/special/fast/uint32-log2]</span><span class="delimiter">: </span><span class="description">compute an integer binary logarithm.</span>
-   <span class="signature">[`sqrtUint32( x )`][@stdlib/math/base/special/fast/uint32-sqrt]</span><span class="delimiter">: </span><span class="description">compute an integer square root.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<!-- Package notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Implementations **may** violate strict IEEE semantics.
-   Implementations **may** assume arguments and results are **not** `NaN`.
-   Implementations **may** assume arguments are **neither** positive or negative `infinity`.
-   Implementations **may** ignore the sign of zero. 

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var fmath = require( '@stdlib/math-base-special-fast' );

console.log( objectKeys( fmath ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-fast.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-fast

[test-image]: https://github.com/stdlib-js/math-base-special-fast/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-fast/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-fast/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-fast?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-fast.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-fast/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-fast/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-fast/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-fast/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-fast/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-fast/main/LICENSE

<!-- <toc-links> -->

[@stdlib/math/base/special/fast/abs]: https://github.com/stdlib-js/math-base-special-fast-abs

[@stdlib/math/base/special/fast/acosh]: https://github.com/stdlib-js/math-base-special-fast-acosh

[@stdlib/math/base/special/fast/alpha-max-plus-beta-min]: https://github.com/stdlib-js/math-base-special-fast-alpha-max-plus-beta-min

[@stdlib/math/base/special/fast/asinh]: https://github.com/stdlib-js/math-base-special-fast-asinh

[@stdlib/math/base/special/fast/atanh]: https://github.com/stdlib-js/math-base-special-fast-atanh

[@stdlib/math/base/special/fast/hypot]: https://github.com/stdlib-js/math-base-special-fast-hypot

[@stdlib/math/base/special/fast/max]: https://github.com/stdlib-js/math-base-special-fast-max

[@stdlib/math/base/special/fast/min]: https://github.com/stdlib-js/math-base-special-fast-min

[@stdlib/math/base/special/fast/pow-int]: https://github.com/stdlib-js/math-base-special-fast-pow-int

[@stdlib/math/base/special/fast/uint32-log2]: https://github.com/stdlib-js/math-base-special-fast-uint32-log2

[@stdlib/math/base/special/fast/uint32-sqrt]: https://github.com/stdlib-js/math-base-special-fast-uint32-sqrt

<!-- </toc-links> -->

</section>

<!-- /.links -->
