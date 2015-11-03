Package.describe({
  name: 'kabalin:simple-schema-geojson',
  version: '0.0.1',
  summary: 'SimpleSchema sub-schema for GeoJSON objects.',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');

  var packages = [
    'aldeed:simple-schema'
  ];
  api.use(packages);
  api.imply(packages);

  api.addFiles(['lib/geojson-schema.js'], ['client', 'server']);

  api.export(['geoJsonSchema'], ['client', 'server']);
});
