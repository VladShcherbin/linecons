Package.describe({
  name: 'shcherbin:linecons',
  version: '1.0.0',
  summary: 'Linecons wrapper for meteor js. 48 awesome icons ready to use!',
  git: 'https://github.com/VladShcherbin/linecons',
  documentation: 'readme.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.1');
  api.addFiles([
    'vendor/fonts/linecons.eot',
    'vendor/fonts/linecons.svg',
    'vendor/fonts/linecons.ttf',
    'vendor/fonts/linecons.woff',
    'vendor/style.css'
  ], 'client');
});