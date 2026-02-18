# @c-ehrlich/eslint-plugin-use-server

Disallows top level `"use server"`

This is useful because in some versions of Next.js, every exported function in a "use server" file is automatically a public API. This rule could prevent you from mistakenly expose a function to the client.

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
