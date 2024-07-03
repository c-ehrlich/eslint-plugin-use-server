# @c-ehrlich/eslint-plugin-use-server

Disallows top level `"use server"`

## Instructions

Add the following to your `eslintrc`:

```js
{
    plugins: [
        // other plugins...
        "@c-ehrlich/eslint-plugin-use-server",
    ],
    rules: {
        // other rules...
        "@c-ehrlich/use-server/no-top-level-use-server": "error",
    }
}
