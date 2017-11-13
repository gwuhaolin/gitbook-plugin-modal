# gitbook-plugin-modal
Plugin for GitBook to show a modal in page.

## Use
```json
{
  "plugins": [
    "modal"
  ],
  "pluginsConfig": {
    "modal": {
      "html": "<h1>123</h1>",
      "closable":false,
      "excludeUrls": [
        "\\/$"
      ]
    }
  }
}
```

## Options
- `html`: modal content html string.
- `closable`: modal can't be close?
- `excludeUrls`: page url list should not show modal in RegExp.