# Personalization

Tastes change all the time. Fortunately, VS Code makes it easy to customize just about every aspect of your editor.
If you want to change something, open the **Command Palette** and select **Preferences: Open Settings (JSON)**. Here, you can override VS Code's defaults or Horizon's colors.
Check out some of the personalization options below to customize Horizon to suit your taste.

*For more info on theming, visit the [Theme Authoring Guide](https://code.visualstudio.com/api/extension-capabilities/theming) and [Theme Color Reference](https://code.visualstudio.com/api/references/theme-color).*

## Contrast

To add a border between sections of the editor, add the following to your settings...

```
"workbench.colorCustomizations": {
  "contrastBorder": "#16161C"
}
```

Or for Bright variants...

```
"workbench.colorCustomizations": {
  "contrastBorder": "#1A1C231A"
}
```

## Italics

The normal theme only uses italics in a few places. If you would prefer no italics at all, you can configure this in your settings...

```
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "name": "No italics",
      "scope": ["comment", "markup.quote", "variable.language", "variable.parameter"],
      "settings": {
        "fontStyle": "normal"
      }
    }
  ]
}
```

## Tag Brackets `<>`

For gray rather than red brackets around HTML tags...

```
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "name": "Tag brackets",
      "scope": ["punctuation.definition.tag"],
      "settings": {
        "foreground": "#BBBBBB"
      }
    }
  ]
}
```
