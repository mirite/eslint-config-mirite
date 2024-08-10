# @mirite/eslint-config-mirite

**Note: This package is ESM only.**

This is a collection of my go-to ESLint configurations for my projects.

## Usage
The rules have been split into three different configs that can be mixed and matched as needed.

```js
// eslint.config.js
import { general, react, tailwind } from '@mirite/eslint-config-mirite';

export default [...general, ...react, ...tailwind];
```
