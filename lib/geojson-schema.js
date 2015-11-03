// Define SimpleSchema sub-schema to store GeoJSON objects.
var geoJsonSchemaObject = {
  type: {
    type: String
  },
  coordinates: {
    type: [Number],
    decimal: true
  }
};

geoJsonSchema = new SimpleSchema(geoJsonSchemaObject);
