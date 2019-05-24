# [Deprecated] meteor-framework7-ios-material

<a href="http://www.idangero.us/framework7/">Framework7</a> wrapper for Meteor.
You can choose iOS or Material(Android) theme.

# How to use it?

## Add package

```
meteor add nobutakaoshiro:framework7-ios-material
```

## Load Framework7 styles

Add meta and link tags to head.

```html
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">

  <!-- Your app title -->
  <title>Application Title</title>

  <!-- Framework7 iOS theme styles -->
  <link rel="stylesheet" href="/packages/nobutakaoshiro_framework7-ios-material/framework7/dist/css/framework7.ios.min.css">
  <link rel="stylesheet" href="/packages/nobutakaoshiro_framework7-ios-material/framework7/dist/css/framework7.ios.colors.min.css">

  <!-- Material(Android) theme styles -->
  <link rel="stylesheet" href="/packages/nobutakaoshiro_framework7-ios-material/framework7/dist/css/framework7.material.min.css">
  <link rel="stylesheet" href="/packages/nobutakaoshiro_framework7-ios-material/framework7/dist/css/framework7.material.colors.min.css">
</head>
```

## Use Framework7 with JavaScript

Framework7 script file (framework7.min.js) automatically loaded.
You can use `Framework7` and `Dom7` global variables with JavaScript.

```js
if (Meteor.isClient) {
  // Initialize app
  var myApp = new Framework7();

  // If we need to use custom DOM library, let's save it to $$ variable:
  var $$ = Dom7;

  // ...
}
```

# Framework7 CSS paths

```
# iOS theme
/packages/nobutakaoshiro_framework7-ios-material/dist/css/framework7.ios.css
/packages/nobutakaoshiro_framework7-ios-material/dist/css/framework7.ios.min.css
/packages/nobutakaoshiro_framework7-ios-material/dist/css/framework7.ios.colors.css
/packages/nobutakaoshiro_framework7-ios-material/dist/css/framework7.ios.colors.min.css
/packages/nobutakaoshiro_framework7-ios-material/dist/css/framework7.ios.rtl.css
/packages/nobutakaoshiro_framework7-ios-material/dist/css/framework7.ios.rtl.min.css

# Material theme
/packages/nobutakaoshiro_framework7-ios-material/dist/css/framework7.material.css
/packages/nobutakaoshiro_framework7-ios-material/dist/css/framework7.material.min.css
/packages/nobutakaoshiro_framework7-ios-material/dist/css/framework7.material.colors.css
/packages/nobutakaoshiro_framework7-ios-material/dist/css/framework7.material.colors.min.css
/packages/nobutakaoshiro_framework7-ios-material/dist/css/framework7.material.rtl.css
/packages/nobutakaoshiro_framework7-ios-material/dist/css/framework7.material.rtl.min.css
```

# Documentation

Framework7 original documentation:
<a href="http://www.idangero.us/framework7/docs/" target="http://www.idangero.us/framework7/docs/">http://www.idangero.us/framework7/docs/</a>
