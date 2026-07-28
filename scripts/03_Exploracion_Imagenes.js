// ================================================================
// GOOGLE EARTH ENGINE PARA APLICACIONES AGROAMBIENTALES
// SCRIPT 03 — EXPLORACIÓN DE IMÁGENES SATELITALES
// Autora: Grettel Vargas Azofeifa
// ================================================================
//
// OBJETIVOS:
//
// • Seleccionar un área de análisis.
// • Filtrar imágenes por fecha, ubicación y nubosidad.
// • Crear composiciones de imágenes.
// • Visualizar Sentinel-2 y Landsat 8.
// • Comparar imágenes con diferente resolución espacial.
// • Seleccionar varios países de manera opcional.


// ================================================================
// PASO 1. CARGAR LOS LÍMITES DE LOS PAÍSES
// ================================================================
//
// FAO GAUL contiene límites administrativos.
//
// level0 corresponde a los límites nacionales.

var paises = ee.FeatureCollection(
  'FAO/GAUL/2015/level0'
);

// Mostrar únicamente algunos registros.
//
// Se utiliza limit() para evitar imprimir toda la colección.

print(
  'Vista previa de los países:',
  paises.limit(5)
);


// ================================================================
// PASO 2. SELECCIONAR COSTA RICA
// ================================================================
//
// ADM0_NAME es la propiedad que contiene el nombre del país.
//
// ee.Filter.eq() selecciona los elementos que tienen
// exactamente el valor indicado.

var costaRica = paises.filter(
  ee.Filter.eq(
    'ADM0_NAME',
    'Costa Rica'
  )
);

// El ejercicio principal utiliza Costa Rica.

var areaAnalisis = costaRica;


// ---------------------------------------------------------------
// PRÁCTICA OPCIONAL: SELECCIONAR VARIOS PAÍSES
// ---------------------------------------------------------------
//
// ee.Filter.inList() permite seleccionar varios valores.
//
// Para analizar Costa Rica y Guatemala:
//
// 1. Comente:
//
// var areaAnalisis = costaRica;
//
// 2. Active el siguiente bloque:


// var paisesSeleccionados = paises.filter(
//   ee.Filter.inList(
//     'ADM0_NAME',
//     [
//       'Costa Rica',
//       'Guatemala'
//     ]
//   )
// );

// var areaAnalisis = paisesSeleccionados;


// Obtener la geometría del área seleccionada.
//
// La geometría se utilizará para buscar y recortar las imágenes.

var geometriaArea = areaAnalisis.geometry();

// Mostrar los países seleccionados.

print(
  'Área de análisis:',
  areaAnalisis.aggregate_array(
    'ADM0_NAME'
  )
);


// ================================================================
// PASO 3. PREPARAR EL MAPA
// ================================================================

// Utilizar una imagen satelital como mapa base.

Map.setOptions(
  'SATELLITE'
);

// Centrar el mapa en el área seleccionada.

Map.centerObject(
  areaAnalisis
);

// Crear un estilo para mostrar únicamente el límite.

var estiloArea = areaAnalisis.style({
  color: 'FF8C00',
  fillColor: '00000000',
  width: 3
});

// Agregar el límite al mapa.

Map.addLayer(
  estiloArea,
  {},
  'Área de análisis',
  true
);


// ================================================================
// PASO 4. DEFINIR LOS PARÁMETROS
// ================================================================
//
// Las fechas se escriben en formato:
//
// año-mes-día
//
// filterDate() incluye la fecha inicial,
// pero no incluye la fecha final.
//
// Por eso, para incluir todo mayo,
// utilizamos el 1 de junio como fecha final.

var fechaInicio = '2025-12-01';
var fechaFin = '2026-06-01';

// Porcentaje máximo de nubosidad permitido.

var nubosidadMaxima = 35;

print(
  'Fecha inicial:',
  fechaInicio
);

print(
  'Fecha final:',
  fechaFin
);

print(
  'Nubosidad máxima:',
  nubosidadMaxima + ' %'
);


// ================================================================
// PASO 5. CARGAR SENTINEL-2
// ================================================================
//
// Utilizamos la colección:
//
// Sentinel-2 Surface Reflectance Harmonized.
//
// Las imágenes contienen valores de reflectancia superficial.
//
// Bandas utilizadas:
//
// B2 = azul.
// B3 = verde.
// B4 = rojo.
// B8 = infrarrojo cercano.
//
// Estas bandas tienen una resolución espacial de 10 metros.

var imagenesSentinel = ee.ImageCollection(
  'COPERNICUS/S2_SR_HARMONIZED'
)

  // Filtrar por fecha.

  .filterDate(
    fechaInicio,
    fechaFin
  )

  // Seleccionar imágenes que intersectan el área.

  .filterBounds(
    geometriaArea
  )

  // Seleccionar escenas con nubosidad igual o menor
  // al valor definido.

  .filter(
    ee.Filter.lte(
      'CLOUDY_PIXEL_PERCENTAGE',
      nubosidadMaxima
    )
  )

  // Conservar únicamente las bandas necesarias.

  .select([
    'B2',
    'B3',
    'B4',
    'B8'
  ]);


// ================================================================
// PASO 6. EXPLORAR LA COLECCIÓN SENTINEL-2
// ================================================================
//
// size() indica la cantidad de imágenes disponibles.

print(
  'Cantidad de imágenes Sentinel-2:',
  imagenesSentinel.size()
);

// limit() muestra solamente las primeras imágenes.

print(
  'Vista previa de Sentinel-2:',
  imagenesSentinel.limit(5)
);

// first() obtiene la primera imagen de la colección.

var primeraImagenSentinel = ee.Image(
  imagenesSentinel.first()
);

print(
  'Primera imagen Sentinel-2:',
  primeraImagenSentinel
);

print(
  'Bandas de Sentinel-2:',
  primeraImagenSentinel.bandNames()
);


// ================================================================
// PASO 7. CREAR UNA COMPOSICIÓN SENTINEL-2
// ================================================================
//
// Una colección contiene varias imágenes.
//
// median() combina todas las imágenes disponibles
// y calcula la mediana para cada píxel.
//
// Esto ayuda a reducir:
//
// • nubes ocasionales;
// • sombras;
// • valores extremos.
//
// El resultado es una sola imagen representativa
// del período seleccionado.

var composicionSentinel = imagenesSentinel
  .median()
  .clip(
    geometriaArea
  );

print(
  'Composición Sentinel-2:',
  composicionSentinel
);


// ================================================================
// PASO 8. VISUALIZAR SENTINEL-2 EN COLOR NATURAL
// ================================================================
//
// El color natural utiliza:
//
// B4 = rojo.
// B3 = verde.
// B2 = azul.
//
// Esta combinación se aproxima a los colores observados
// por el ojo humano.

var colorNaturalSentinel = {
  bands: [
    'B4',
    'B3',
    'B2'
  ],
  min: 0,
  max: 3000,
  gamma: 1.1
};

Map.addLayer(
  composicionSentinel,
  colorNaturalSentinel,
  'Sentinel-2 — color natural',
  true
);


// ================================================================
// PASO 9. VISUALIZAR SENTINEL-2 EN FALSO COLOR
// ================================================================
//
// El falso color utiliza:
//
// B8 = infrarrojo cercano.
// B4 = rojo.
// B3 = verde.
//
// La vegetación refleja con fuerza el infrarrojo cercano.
//
// Por eso, en esta combinación,
// la vegetación aparece generalmente en tonos rojos.

var falsoColorSentinel = {
  bands: [
    'B8',
    'B4',
    'B3'
  ],
  min: 0,
  max: 3500,
  gamma: 1.1
};

Map.addLayer(
  composicionSentinel,
  falsoColorSentinel,
  'Sentinel-2 — falso color',
  false
);


// ================================================================
// PRÁCTICA 1. MODIFICAR LA VISUALIZACIÓN
// ================================================================
//
// Abra la configuración de la capa:
//
// Sentinel-2 — color natural
//
// Pruebe los siguientes valores:
//
// Maximum:
//
// 2000
// 3000
// 4000
//
// Gamma:
//
// 0.8
// 1.1
// 1.4
//
// Opacity:
//
// 1.0
// 0.5
// 0.0
//
// Estos cambios modifican únicamente la apariencia.
//
// No cambian los valores originales de los píxeles.


// ================================================================
// PASO 10. CARGAR LANDSAT 8
// ================================================================
//
// Utilizamos:
//
// Landsat 8 Collection 2, Level 2.
//
// Bandas utilizadas:
//
// SR_B2 = azul.
// SR_B3 = verde.
// SR_B4 = rojo.
// SR_B5 = infrarrojo cercano.
//
// Estas bandas tienen una resolución espacial de 30 metros.

var imagenesLandsat = ee.ImageCollection(
  'LANDSAT/LC08/C02/T1_L2'
)

  // Filtrar por fecha.

  .filterDate(
    fechaInicio,
    fechaFin
  )

  // Filtrar por el área de análisis.

  .filterBounds(
    geometriaArea
  )

  // Seleccionar imágenes con nubosidad igual o menor
  // al porcentaje definido.

  .filter(
    ee.Filter.lte(
      'CLOUD_COVER',
      nubosidadMaxima
    )
  );

print(
  'Cantidad de imágenes Landsat 8:',
  imagenesLandsat.size()
);

print(
  'Vista previa de Landsat 8:',
  imagenesLandsat.limit(5)
);


// ================================================================
// PASO 11. AJUSTAR LOS VALORES DE LANDSAT
// ================================================================
//
// Las imágenes Landsat almacenan los valores de las bandas
// como números enteros.
//
// Esto permite reducir el tamaño de almacenamiento
// y facilitar la distribución de los datos.
//
// Para convertir esos números a valores de reflectancia,
// se aplica una fórmula de escala:
//
// reflectancia = valor almacenado × 0.0000275 - 0.2
//
// Por eso utilizamos:
//
// multiply(0.0000275)
//
// y luego:
//
// add(-0.2)
//
// Estos factores son definidos para los productos
// Landsat Collection 2 Level 2.
//
// Después de esta conversión, los valores representan
// reflectancia superficial y pueden visualizarse
// e interpretarse correctamente.

function aplicarEscalaLandsat(imagen) {

  // Seleccionar las bandas ópticas.

  var bandasOpticas = imagen
    .select([
      'SR_B2',
      'SR_B3',
      'SR_B4',
      'SR_B5'
    ])

    // Aplicar el factor multiplicativo.

    .multiply(
      0.0000275
    )

    // Aplicar el valor de ajuste.

    .add(
      -0.2
    );

  // Conservar propiedades importantes de la imagen original.

  return bandasOpticas.copyProperties(
    imagen,
    [
      'system:time_start',
      'CLOUD_COVER'
    ]
  );

}


// ================================================================
// PASO 12. APLICAR LA FUNCIÓN A TODA LA COLECCIÓN
// ================================================================
//
// map() aplica una función a cada imagen
// de una ImageCollection.
//
// En este caso, aplica la conversión de escala
// a todas las imágenes Landsat.

var imagenesLandsatEscaladas = imagenesLandsat.map(
  aplicarEscalaLandsat
);

print(
  'Landsat con escala aplicada:',
  imagenesLandsatEscaladas.limit(5)
);


// ================================================================
// PASO 13. CREAR LA COMPOSICIÓN LANDSAT
// ================================================================
//
// Igual que con Sentinel-2,
// utilizamos median() para crear una sola imagen
// representativa del período.

var composicionLandsat = imagenesLandsatEscaladas
  .median()
  .clip(
    geometriaArea
  );

print(
  'Composición Landsat 8:',
  composicionLandsat
);


// ================================================================
// PASO 14. VISUALIZAR LANDSAT EN COLOR NATURAL
// ================================================================
//
// SR_B4 = rojo.
// SR_B3 = verde.
// SR_B2 = azul.
//
// En Landsat ya aplicamos los factores de escala.
//
// Por eso los valores de visualización son diferentes
// a los utilizados con Sentinel-2.

var colorNaturalLandsat = {
  bands: [
    'SR_B4',
    'SR_B3',
    'SR_B2'
  ],
  min: 0,
  max: 0.3,
  gamma: 1.1
};

Map.addLayer(
  composicionLandsat,
  colorNaturalLandsat,
  'Landsat 8 — color natural',
  false
);


// ================================================================
// PASO 15. VISUALIZAR LANDSAT EN FALSO COLOR
// ================================================================
//
// SR_B5 = infrarrojo cercano.
// SR_B4 = rojo.
// SR_B3 = verde.
//
// La vegetación también aparece en tonos rojos.

var falsoColorLandsat = {
  bands: [
    'SR_B5',
    'SR_B4',
    'SR_B3'
  ],
  min: 0,
  max: 0.4,
  gamma: 1.1
};

Map.addLayer(
  composicionLandsat,
  falsoColorLandsat,
  'Landsat 8 — falso color',
  false
);


// ================================================================
// PRÁCTICA 2. COMPARAR SENTINEL-2 Y LANDSAT 8
// ================================================================
//
// Active alternativamente:
//
// • Sentinel-2 — color natural.
// • Landsat 8 — color natural.
//
// Observe:
//
// • el nivel de detalle;
// • el tamaño aparente de los píxeles;
// • los colores;
// • los límites de las parcelas;
// • las áreas urbanas;
// • los cuerpos de agua.
//
// Sentinel-2:
//
// • resolución espacial de 10 metros.
//
// Landsat 8:
//
// • resolución espacial de 30 metros.
//
// Una resolución de 10 metros permite observar
// elementos más pequeños que una resolución de 30 metros.


// ================================================================
// PRÁCTICA 3. CAMBIAR LA NUBOSIDAD
// ================================================================
//
// Cambie:
//
// var nubosidadMaxima = 35;
//
// por:
//
// var nubosidadMaxima = 20;
//
// Ejecute nuevamente el código.
//
// Compare:
//
// • la cantidad de imágenes;
// • la presencia de nubes;
// • la cobertura del territorio.
//
// Un valor más bajo puede reducir las nubes,
// pero también puede eliminar muchas imágenes.


// ================================================================
// PRÁCTICA OPCIONAL. ANALIZAR VARIOS PAÍSES
// ================================================================
//
// Regrese al PASO 2.
//
// Comente:
//
// var areaAnalisis = costaRica;
//
// Active:
//
// var paisesSeleccionados = paises.filter(
//   ee.Filter.inList(
//     'ADM0_NAME',
//     [
//       'Costa Rica',
//       'Guatemala'
//     ]
//   )
// );
//
// var areaAnalisis = paisesSeleccionados;
//
// Después, ejecute nuevamente el script.
//
// El código:
//
// • centrará el mapa en los países seleccionados;
// • buscará imágenes sobre esos países;
// • creará las composiciones;
// • recortará las imágenes con sus límites.


// ================================================================
// NOTA SOBRE LOS ESPACIOS SIN INFORMACIÓN
// ================================================================
//
// En algunas zonas pueden aparecer espacios transparentes.
//
// Esto puede suceder cuando no existen suficientes imágenes
// disponibles después de aplicar los filtros.
//
// Puede reducirse:
//
// • ampliando el período de análisis;
// • aumentando moderadamente la nubosidad máxima;
// • utilizando máscaras de nubes en cursos más avanzados.


// ================================================================
// RESUMEN
// ================================================================
//
// En este ejercicio:
//
// ✔ Seleccionamos un área de análisis.
//
// ✔ Filtramos imágenes por fecha, ubicación y nubosidad.
//
// ✔ Exploramos colecciones de imágenes.
//
// ✔ Creamos composiciones medianas.
//
// ✔ Visualizamos color natural y falso color.
//
// ✔ Aplicamos los factores de escala de Landsat.
//
// ✔ Comparamos Sentinel-2 y Landsat 8.
//
// ✔ Analizamos opcionalmente varios países.