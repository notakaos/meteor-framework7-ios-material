Package.describe({
  name: 'nobutakaoshiro:framework7-meteor',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Framework7 with Meteor',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.add_files([
    'framework7/dist/css/framework7.ios.colors.css',
    'framework7/dist/css/framework7.ios.colors.min.css',
    'framework7/dist/css/framework7.ios.css',
    'framework7/dist/css/framework7.ios.min.css',
    'framework7/dist/css/framework7.ios.rtl.css',
    'framework7/dist/css/framework7.ios.rtl.min.css',
    'framework7/dist/css/framework7.material.colors.css',
    'framework7/dist/css/framework7.material.colors.min.css',
    'framework7/dist/css/framework7.material.css',
    'framework7/dist/css/framework7.material.min.css',
    'framework7/dist/css/framework7.material.rtl.css',
    'framework7/dist/css/framework7.material.rtl.min.css'
  ], 'server', {isAsset: true});

  api.add_files('framework7/dist/js/framework7.min.js', 'client');

  api.add_files([
    'framework7/dist/img/i-f7-ios.png',
    'framework7/dist/img/i-f7-material.png',
    'framework7/dist/img/i-form-calendar-ios.svg',
    'framework7/dist/img/i-form-calendar-material.svg',
    'framework7/dist/img/i-form-comment-ios.svg',
    'framework7/dist/img/i-form-comment-material.svg',
    'framework7/dist/img/i-form-email-ios.svg',
    'framework7/dist/img/i-form-email-material.svg',
    'framework7/dist/img/i-form-gender-ios.svg',
    'framework7/dist/img/i-form-gender-material.svg',
    'framework7/dist/img/i-form-name-ios.svg',
    'framework7/dist/img/i-form-name-material.svg',
    'framework7/dist/img/i-form-password-ios.svg',
    'framework7/dist/img/i-form-password-material.svg',
    'framework7/dist/img/i-form-settings-ios.svg',
    'framework7/dist/img/i-form-settings-material.svg',
    'framework7/dist/img/i-form-tel-ios.svg',
    'framework7/dist/img/i-form-tel-material.svg',
    'framework7/dist/img/i-form-toggle-ios.svg',
    'framework7/dist/img/i-form-toggle-material.svg',
    'framework7/dist/img/i-form-url-ios.svg',
    'framework7/dist/img/i-form-url-material.svg'
    ], 'client');
});

