// ================================================================
// 🌎 GOOGLE EARTH ENGINE PARA APLICACIONES AGROAMBIENTALES
// SCRIPT 02 — DATOS GEOGRÁFICOS Y GEOMETRÍAS
// Duración estimada: 30 minutos
// Autora: Grettel Vargas Azofeifa
// ================================================================
//
// 👋 BIENVENIDA
// Utilizaremos límites administrativos para comprender cómo se
// representan, filtran y transforman los datos vectoriales.
//
// 🎯 OBJETIVOS
// 1. Cargar una FeatureCollection desde el catálogo.
// 2. Revisar atributos y filtrar por país.
// 3. Visualizar capas vectoriales.
// 4. Crear unión, centroide, buffer y bounds.
// 5. Preparar un área de interés para imágenes satelitales.
//
// 🆕 CONCEPTOS
// Feature | FeatureCollection | atributo | Filter | geometry()
// style() | union() | centroid() | buffer() | bounds()
//
// 📚 RECURSOS OFICIALES
//
// FeatureCollection:
// https://developers.google.com/earth-engine/guides/feature_collections
//
// Geometrías:
// https://developers.google.com/earth-engine/guides/geometries
//
// Filtros:
// https://developers.google.com/earth-engine/guides/ic_filtering
//
// Dataset GAUL nivel 1:
// https://developers.google.com/earth-engine/datasets/catalog/FAO_GAUL_2015_level1


// ================================================================
// ▶️ PASO 1. PREPARAR EL MAPA
// ================================================================

// Costa Rica.
// El orden es: longitud, latitud y nivel de acercamiento.

Map.setCenter(
  -84.10,
  9.93,
  7
);

// Seleccionar el mapa base.

Map.setOptions('SATELLITE');


// ================================================================
// ▶️ PASO 2. CARGAR UNA FEATURECOLLECTION
// ================================================================
//
// 📌 FICHA TÉCNICA
// Nombre: FAO GAUL 2015, nivel administrativo 1
// Tipo: FeatureCollection
// ID: FAO/GAUL/2015/level1

var unidadesAdministrativas = ee.FeatureCollection(
  'FAO/GAUL/2015/level1'
);

// ⚠️ No imprimimos la colección mundial completa porque contiene
// demasiados elementos y puede generar el error:
//
// Response size exceeds limit
//
// En su lugar, mostramos solamente cinco elementos.

print(
  'Vista previa de la colección mundial:',
  unidadesAdministrativas.limit(5)
);

// Mostrar el número total de unidades administrativas.

print(
  'Cantidad total de unidades administrativas:',
  unidadesAdministrativas.size()
);

// Mostrar el primer elemento para revisar sus atributos.

print(
  'Primer elemento:',
  unidadesAdministrativas.first()
);

// Mostrar algunos nombres de países disponibles.

var listaPaises = unidadesAdministrativas
  .aggregate_array('ADM0_NAME')
  .distinct()
  .sort();

print(
  'Ejemplos de países disponibles:',
  listaPaises.slice(0, 20)
);


// ================================================================
// ▶️ PASO 3. SELECCIONAR EL PAÍS
// ================================================================
//
// Para trabajar con otro país, cambie únicamente este valor.
// El nombre debe coincidir exactamente con el atributo ADM0_NAME.

var nombrePais = 'Costa Rica';

// Ejemplo para Guatemala:
//
// var nombrePais = 'Guatemala';


// ================================================================
// ▶️ PASO 4. FILTRAR LAS DIVISIONES ADMINISTRATIVAS
// ================================================================
//
// ee.Filter.eq() conserva los elementos cuyo atributo coincide
// exactamente con el valor indicado.
//
// API:
// https://developers.google.com/earth-engine/apidocs/ee-filter-eq

var divisionesAdministrativas = unidadesAdministrativas.filter(
  ee.Filter.eq(
    'ADM0_NAME',
    nombrePais
  )
);

// Mostrar únicamente una vista previa.

print(
  'Divisiones administrativas seleccionadas:',
  divisionesAdministrativas.limit(10)
);

// Mostrar la cantidad de divisiones encontradas.

print(
  'Cantidad de divisiones administrativas:',
  divisionesAdministrativas.size()
);

// Mostrar los nombres correspondientes al nivel administrativo 1.

print(
  'Nombres de las divisiones administrativas:',
  divisionesAdministrativas.aggregate_array('ADM1_NAME')
);


// ================================================================
// ▶️ PASO 5. CENTRAR EL MAPA EN EL PAÍS
// ================================================================
//
// centerObject() ajusta automáticamente la ubicación del mapa.

Map.centerObject(
  divisionesAdministrativas,
  7
);


// ================================================================
// ▶️ PASO 6. VISUALIZAR LAS DIVISIONES ADMINISTRATIVAS
// ================================================================
//
// style() permite controlar el color, relleno y grosor.
//
// API Map.addLayer():
// https://developers.google.com/earth-engine/apidocs/map-addlayer

var divisionesEstilo = divisionesAdministrativas.style({
  color: 'FFFFFF',
  fillColor: '00000000',
  width: 2
});

Map.addLayer(
  divisionesEstilo,
  {},
  'Divisiones administrativas',
  true
);


// ================================================================
// 🧪 PRÁCTICA 1
// ================================================================
//
// 1. Active y desactive la capa.
// 2. Utilice Inspector.
// 3. Haga clic sobre una división administrativa.
// 4. Localice los atributos ADM0_NAME y ADM1_NAME.


// ================================================================
// ▶️ PASO 7. UNIR LAS DIVISIONES ADMINISTRATIVAS
// ================================================================
//
// union() combina las divisiones administrativas y crea una sola
// entidad que representa el territorio completo.
//
// El parámetro 1 corresponde al margen de error en metros.
//
// API:
// https://developers.google.com/earth-engine/apidocs/ee-featurecollection-union

var paisUnido = divisionesAdministrativas.union(
  1
);

print(
  'Territorio unido:',
  paisUnido
);

// Crear un estilo sin relleno para observar el contorno.

var paisUnidoEstilo = paisUnido.style({
  color: '00FFFF',
  fillColor: '00000000',
  width: 3
});

Map.addLayer(
  paisUnidoEstilo,
  {},
  'Territorio unido',
  true
);


// ================================================================
// ▶️ PASO 8. OBTENER EL ÁREA DE INTERÉS
// ================================================================
//
// geometry() obtiene solamente la geometría de la colección.
//
// Esta geometría podrá reutilizarse en los siguientes scripts para:
//
// • filtrar imágenes;
// • recortar imágenes;
// • calcular estadísticas;
// • exportar resultados.
//
// API:
// https://developers.google.com/earth-engine/apidocs/ee-featurecollection-geometry

var areaInteres = paisUnido.geometry();

print(
  'Tipo de geometría del área de interés:',
  areaInteres.type()
);

print(
  'Área de interés:',
  areaInteres
);


// ================================================================
// ▶️ PASO 9. CREAR EL CENTROIDE
// ================================================================
//
// centroid() calcula un punto central de la geometría.
//
// API:
// https://developers.google.com/earth-engine/apidocs/ee-geometry-centroid

var centroide = areaInteres.centroid(
  1
);

// Convertir el centroide en una FeatureCollection para asignarle
// un estilo más visible.

var centroideEstilo = ee.FeatureCollection([
  ee.Feature(centroide)
]).style({
  color: 'FFFF00',
  pointSize: 8,
  pointShape: 'circle',
  width: 2
});

Map.addLayer(
  centroideEstilo,
  {},
  'Centroide',
  true
);

print(
  'Centroide:',
  centroide
);

print(
  'Coordenadas del centroide:',
  centroide.coordinates()
);


// ================================================================
// ▶️ PASO 10. CREAR UN BUFFER
// ================================================================
//
// buffer() crea una zona alrededor de una geometría.
//
// La distancia se expresa en metros.
//
// 50 000 metros = 50 kilómetros.
//
// API:
// https://developers.google.com/earth-engine/apidocs/ee-geometry-buffer

var distanciaBuffer = 50000;

var bufferCentroide = centroide.buffer(
  distanciaBuffer
);

// Convertir la geometría en una FeatureCollection para controlar
// el borde y eliminar el relleno.

var bufferEstilo = ee.FeatureCollection([
  ee.Feature(bufferCentroide)
]).style({
  color: 'FF00FF',
  fillColor: '00000000',
  width: 3
});

Map.addLayer(
  bufferEstilo,
  {},
  'Buffer de 50 km',
  true
);

print(
  'Buffer alrededor del centroide:',
  bufferCentroide
);


// ================================================================
// 🧪 PRÁCTICA 2
// ================================================================
//
// Cambie la distancia del buffer:
//
// 50000 = 50 kilómetros
// 20000 = 20 kilómetros
// 10000 = 10 kilómetros
//
// Ejemplo:
//
// var distanciaBuffer = 20000;


// ================================================================
// ▶️ PASO 11. CREAR EL RECTÁNGULO ENVOLVENTE
// ================================================================
//
// bounds() crea el rectángulo mínimo que contiene la geometría.
//
// API:
// https://developers.google.com/earth-engine/apidocs/ee-geometry-bounds

var limiteRectangular = areaInteres.bounds(
  1
);

// Convertimos la geometría en una FeatureCollection para mostrar
// únicamente el borde del rectángulo.

var limiteRectangularEstilo = ee.FeatureCollection([
  ee.Feature(limiteRectangular)
]).style({
  color: 'FF0000',
  fillColor: '00000000',
  width: 4
});

Map.addLayer(
  limiteRectangularEstilo,
  {},
  'Rectángulo envolvente',
  true
);

print(
  'Rectángulo envolvente:',
  limiteRectangular
);


// ================================================================
// 🧪 PRÁCTICA 3
// ================================================================
//
// 1. Desactive temporalmente la capa "Territorio unido".
// 2. Compare la forma del país con el rectángulo envolvente.
// 3. Observe que el rectángulo contiene toda el área de interés.


// ================================================================
// ▶️ PASO 12. CALCULAR EL ÁREA
// ================================================================
//
// area() devuelve el área en metros cuadrados.
//
// Al dividir entre 1 000 000 obtenemos kilómetros cuadrados.
//
// API:
// https://developers.google.com/earth-engine/apidocs/ee-geometry-area

var areaMetrosCuadrados = areaInteres.area(
  1
);

var areaKm2 = areaMetrosCuadrados.divide(
  1000000
);

print(
  'Área aproximada en metros cuadrados:',
  areaMetrosCuadrados
);

print(
  'Área aproximada en kilómetros cuadrados:',
  areaKm2
);


// ================================================================
// ▶️ PASO 13. CALCULAR EL ÁREA DEL BUFFER
// ================================================================

var areaBufferKm2 = bufferCentroide
  .area(1)
  .divide(1000000);

print(
  'Área aproximada del buffer en km²:',
  areaBufferKm2
);


// ================================================================
// 🧪 PRÁCTICA FINAL
// ================================================================
//
// 1. Cambie 'Costa Rica' por 'Guatemala'.
// 2. Ejecute nuevamente todo el script.
// 3. Observe las divisiones administrativas.
// 4. Revise sus nombres en la consola.
// 5. Compare el territorio con su rectángulo envolvente.
// 6. Cambie la distancia del buffer.
// 7. Compare el área calculada.
//
// Para Guatemala:
//
// var nombrePais = 'Guatemala';
//
// Centro aproximado para Map.setCenter(), si desea usarlo:
//
// Map.setCenter(
//   -90.5069,
//   14.6349,
//   7
// );


// ================================================================
// 🚀 DESAFÍO OPCIONAL
// ================================================================
//
// Filtre una división administrativa mediante ADM1_NAME.
//
// Ejemplo con San José, Costa Rica:
//
// var divisionSeleccionada = divisionesAdministrativas.filter(
//   ee.Filter.eq(
//     'ADM1_NAME',
//     'San José'
//   )
// );
//
// print(
//   'División seleccionada:',
//   divisionSeleccionada
// );
//
// var areaDivisionKm2 = divisionSeleccionada
//   .geometry()
//   .area(1)
//   .divide(1000000);
//
// print(
//   'Área de la división seleccionada en km²:',
//   areaDivisionKm2
// );
//
// Map.addLayer(
//   divisionSeleccionada.style({
//     color: '00FF00',
//     fillColor: '00FF0044',
//     width: 3
//   }),
//   {},
//   'División seleccionada'
// );


// ================================================================
// ⚠️ CONSIDERACIONES IMPORTANTES
// ================================================================
//
// 1. No imprima colecciones mundiales completas.
//
// En lugar de:
//
// print(unidadesAdministrativas);
//
// utilice:
//
// print(unidadesAdministrativas.limit(5));
// print(unidadesAdministrativas.size());
// print(unidadesAdministrativas.first());
//
// 2. El nombre del país debe coincidir exactamente con ADM0_NAME.
//
// 3. El nombre de la división debe coincidir con ADM1_NAME.
//
// 4. El último parámetro de Map.addLayer() controla la visibilidad:
//
// true  = capa visible.
// false = capa agregada, pero apagada.


// ================================================================
// ✅ RESUMEN
// ================================================================
//
// ✔ Cargamos una FeatureCollection.
// ✔ Revisamos sus atributos sin saturar la consola.
// ✔ Filtramos las divisiones administrativas de un país.
// ✔ Centramos automáticamente el mapa.
// ✔ Visualizamos datos vectoriales.
// ✔ Unimos las divisiones administrativas.
// ✔ Creamos un área de interés.
// ✔ Calculamos un centroide.
// ✔ Creamos un buffer.
// ✔ Generamos un rectángulo envolvente.
// ✔ Calculamos áreas en kilómetros cuadrados.