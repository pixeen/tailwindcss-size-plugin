# Tailwind CSS size plugin

A Tailwind CSS plugin that lets you set the width and height at the same time.

## Getting Started

Install the plugin:

```bash
npm install -D tailwindcss-size-plugin
# or
yarn add -D tailwindcss-size-plugin
```

Modify the `tailwind.config.js` file:

```js
module.exports = {
  // --snip--
  plugins: [require("tailwindcss-size-plugin")()],
};
```

## Usage

The size plugin provides a `size` component that lets you set the width and height of an element at the same time.

```html
<div class="s-64">64 square</div>
<div class="s-[100px]">100px square</div>
```
