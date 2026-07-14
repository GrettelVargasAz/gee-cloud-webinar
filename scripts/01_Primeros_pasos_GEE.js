// ============================================================================
// 🌎 WEBINAR: INTRODUCCIÓN A GOOGLE EARTH ENGINE
// Script 01 de 04 — Primeros pasos en Google Earth Engine
// ============================================================================
//
// 👩‍💻 Desarrollado por:
// Grettel Vargas Azofeifa
// Especialista SIG y Geomática
// Proyecto Flagship · Corredor Seco Centroamericano · FAO
//
// 🎯 Objetivo:
// Familiarizarse con el entorno de Google Earth Engine y aprender las
// instrucciones básicas que se utilizarán durante el webinar.
//
// ⏱️ Tiempo estimado: 25 minutos
//
// 📘 Conceptos:
// - Ejecutar un script.
// - Utilizar la pestaña Console.
// - Mostrar información con print().
// - Crear variables.
// - Crear listas.
// - Crear diccionarios.
// - Escribir y reconocer comentarios.
// - Navegar por el mapa.
// - Cambiar el mapa base.
// - Crear una geometría de punto.
// - Cargar una imagen.
// - Visualizar una capa.
// - Definir parámetros de visualización.
// - Consultar bandas, propiedades, proyección y resolución.
// - Utilizar la pestaña Inspector.
//
// ============================================================================


// ============================================================================
// 🚀 ANTES DE COMENZAR
// ============================================================================
//
// 1. Abra el Code Editor:
//    https://code.earthengine.google.com/
//
// 2. Cree un script nuevo.
//
// 3. Guárdelo con el nombre:
//    01_Primeros_pasos_GEE
//
// 4. Copie y ejecute cada paso en orden.
//
// 💡 Observación:
// Las líneas que comienzan con // son comentarios.
// Google Earth Engine no ejecuta esas líneas.
//
// ============================================================================


// ============================================================================
// ▶️ PASO 1. MOSTRAR INFORMACIÓN EN LA CONSOLA
// ============================================================================
//
// La función print() permite mostrar mensajes, valores y resultados
// en la pestaña Console.
//
// Presione Run y observe el resultado.
//

print('Hola Google Earth Engine');


// ✅ Resultado esperado:
// En la pestaña Console debe aparecer:
// Hola Google Earth Engine


// ============================================================================
// ▶️ PASO 2. CREAR UNA VARIABLE DE TEXTO
// ============================================================================
//
// Una variable es un espacio donde almacenamos información.
//
// La palabra var indica que estamos creando una variable.
// El signo = asigna un valor a la variable.
//

var pais = 'Costa Rica';

print('País:', pais);


// ============================================================================
// ▶️ PASO 3. CREAR VARIABLES NUMÉRICAS
// ============================================================================
//
// Las variables también pueden almacenar números.
//

var anio = 2026;
var resolucion = 30;

print('Año:', anio);
print('Resolución espacial:', resolucion, 'metros');


// ============================================================================
// ▶️ PASO 4. MODIFICAR EL VALOR DE UNA VARIABLE
// ============================================================================
//
// Cambie el contenido de la variable institucion y ejecute nuevamente.
//

var institucion = 'Institución nacional';

print('Institución:', institucion);

// Ejemplo alternativo:
// var institucion = 'Ministerio de Agricultura';


// ============================================================================
// ▶️ PASO 5. CREAR UNA LISTA
// ============================================================================
//
// Una lista permite almacenar varios elementos en una sola variable.
//
// Los elementos se escriben entre corchetes [ ]
// y se separan mediante comas.
//

var cultivos = [
  'Café',
  'Caña de azúcar',
  'Arroz',
  'Banano'
];

print('Lista de cultivos:', cultivos);


// ============================================================================
// ▶️ PASO 6. CONSULTAR ELEMENTOS DE UNA LISTA
// ============================================================================
//
// JavaScript comienza a contar desde cero.
//
// cultivos[0] corresponde al primer elemento.
// cultivos[1] corresponde al segundo elemento.
//

print('Primer cultivo:', cultivos[0]);
print('Segundo cultivo:', cultivos[1]);


// ============================================================================
// ▶️ PASO 7. CREAR UN DICCIONARIO
// ============================================================================
//
// Un diccionario organiza información mediante pares:
//
// clave: valor
//
// Los diccionarios se escriben entre llaves { }.
//

var informacionCultivo = {
  nombre: 'Café',
  provincia: 'Alajuela',
  areaHectareas: 120,
  activo: true
};

print('Información del cultivo:', informacionCultivo);


// ============================================================================
// ▶️ PASO 8. CONSULTAR VALORES DEL DICCIONARIO
// ============================================================================

print('Nombre del cultivo:', informacionCultivo.nombre);
print('Provincia:', informacionCultivo.provincia);
print('Área:', informacionCultivo.areaHectareas, 'hectáreas');
print('Registro activo:', informacionCultivo.activo);


// ============================================================================
// ▶️ PASO 9. CENTRAR EL MAPA
// ============================================================================
//
// Map.setCenter() centra el mapa utilizando tres valores:
//
// longitud, latitud y nivel de acercamiento.
//
// En este ejemplo se centra el mapa en Costa Rica.
//

Map.setCenter(-84.2, 9.9, 7);


// ============================================================================
// ▶️ PASO 10. CAMBIAR EL MAPA BASE
// ============================================================================
//
// Map.setOptions() permite cambiar el mapa base.
//
// Solo una opción debe estar activa a la vez.
//
// Para probar otra opción:
//
// 1. Agregue // al inicio de la línea activa.
// 2. Elimine // de la opción que desea probar.
// 3. Presione Run nuevamente.
//

Map.setOptions('SATELLITE');

// Otras opciones disponibles:
// Map.setOptions('ROADMAP');
// Map.setOptions('TERRAIN');
// Map.setOptions('HYBRID');


// 💡 Observación:
//
// SATELLITE muestra imágenes satelitales.
// ROADMAP muestra calles, nombres y límites.
// TERRAIN resalta el relieve.
// HYBRID combina imágenes satelitales con nombres y vías.


// ============================================================================
// ▶️ PASO 11. CREAR UNA GEOMETRÍA DE PUNTO
// ============================================================================
//
// Una geometría representa una ubicación o un área.
//
// En este primer script crearemos únicamente un punto.
// El polígono del área de interés se trabajará en el Script 02.
//
// El orden de las coordenadas es:
//
// longitud, latitud
//

var punto = ee.Geometry.Point([-84.2, 9.9]);

print('Punto de referencia:', punto);


// ============================================================================
// ▶️ PASO 12. MOSTRAR EL PUNTO EN EL MAPA
// ============================================================================
//
// Map.addLayer() agrega un objeto al mapa.
//
// Sus parámetros principales son:
//
// 1. Objeto.
// 2. Parámetros de visualización.
// 3. Nombre de la capa.
//

Map.addLayer(
  punto,
  {color: 'red'},
  'Punto de referencia'
);


// ============================================================================
// ▶️ PASO 13. CENTRAR EL MAPA EN UN OBJETO
// ============================================================================
//
// Map.centerObject() centra el mapa utilizando un objeto
// de Google Earth Engine.
//
// En este caso centraremos el mapa en el punto.
//

Map.centerObject(punto, 8);


// 💡 Observación:
//
// Map.setCenter() utiliza coordenadas escritas manualmente.
//
// Map.centerObject() utiliza la ubicación de un objeto,
// por ejemplo un punto, polígono, imagen o colección.


// ============================================================================
// ▶️ PASO 14. CARGAR LA PRIMERA IMAGEN
// ============================================================================
//
// Utilizaremos el modelo digital de elevación SRTM.
//
// ee.Image() permite crear un objeto de tipo imagen utilizando
// el identificador de un dataset del catálogo.
//

var elevacion = ee.Image('USGS/SRTMGL1_003');

print('Imagen SRTM:', elevacion);


// ============================================================================
// ▶️ PASO 15. MOSTRAR LA IMAGEN SIN PARÁMETROS DE VISUALIZACIÓN
// ============================================================================
//
// Cuando no se definen parámetros, Earth Engine aplica
// una representación predeterminada.
//
// El valor false indica que la capa se agregará apagada.
// Puede activarla desde el panel Layers.
//

Map.addLayer(
  elevacion,
  {},
  'Elevación sin simbología',
  false
);


// ============================================================================
// ▶️ PASO 16. DEFINIR PARÁMETROS DE VISUALIZACIÓN
// ============================================================================
//
// Los parámetros se organizan en un diccionario.
//
// bands indica la banda que se mostrará.
// min y max controlan el rango de valores.
// palette define la secuencia de colores.
//
// Los colores pueden escribirse con nombres o códigos hexadecimales.
//

var visualizacionElevacion = {
  bands: ['elevation'],
  min: 0,
  max: 3000,
  palette: [
    '0b3d91',
    '2a9d8f',
    'a7c957',
    'f4d35e',
    'bc6c25',
    'ffffff'
  ]
};


// ============================================================================
// ▶️ PASO 17. MOSTRAR LA IMAGEN CON SIMBOLOGÍA
// ============================================================================

Map.addLayer(
  elevacion,
  visualizacionElevacion,
  'Elevación'
);


// ============================================================================
// 🎨 PALETAS ALTERNATIVAS
// ============================================================================
//
// Para probar una paleta diferente:
//
// 1. Comente el diccionario visualizacionElevacion anterior.
// 2. Descomente uno de los ejemplos siguientes.
// 3. Presione Run.
//
// No active dos variables con el mismo nombre al mismo tiempo.
//

// Ejemplo 1: verde a café
// var visualizacionElevacion = {
//   bands: ['elevation'],
//   min: 0,
//   max: 3000,
//   palette: ['006400', '7fff00', 'ffff00', 'd2691e', 'ffffff']
// };

// Ejemplo 2: azul a rojo
// var visualizacionElevacion = {
//   bands: ['elevation'],
//   min: 0,
//   max: 3000,
//   palette: ['0000ff', '00ffff', 'ffff00', 'ff0000']
// };


// ============================================================================
// ▶️ PASO 18. CONSULTAR LAS BANDAS DE LA IMAGEN
// ============================================================================
//
// bandNames() devuelve los nombres de las bandas.
//

print(
  'Bandas de la imagen:',
  elevacion.bandNames()
);


// ============================================================================
// ▶️ PASO 19. CONSULTAR LAS PROPIEDADES DE LA IMAGEN
// ============================================================================
//
// propertyNames() devuelve los nombres de las propiedades
// o metadatos disponibles.
//

print(
  'Propiedades de la imagen:',
  elevacion.propertyNames()
);


// ============================================================================
// ▶️ PASO 20. CONSULTAR LA PROYECCIÓN
// ============================================================================
//
// projection() devuelve información sobre el sistema
// de referencia y la transformación espacial de la banda.
//

var proyeccion = elevacion.projection();

print('Proyección:', proyeccion);


// ============================================================================
// ▶️ PASO 21. CONSULTAR LA RESOLUCIÓN NOMINAL
// ============================================================================
//
// nominalScale() devuelve la escala nominal de la proyección
// expresada en metros.
//

var escalaNominal = proyeccion.nominalScale();

print('Resolución nominal:', escalaNominal, 'metros');


// ============================================================================
// 🧭 PASO 22. UTILIZAR LA PESTAÑA INSPECTOR
// ============================================================================
//
// 1. Abra la pestaña Inspector.
// 2. Haga clic sobre diferentes lugares del mapa.
// 3. Observe el valor de elevación de cada píxel.
// 4. Cambie el nivel de acercamiento.
// 5. Observe la escala indicada en el Inspector.
//
// No es necesario agregar código en este paso.


// ============================================================================
// 🗺️ PASO 23. ACTIVAR Y DESACTIVAR CAPAS
// ============================================================================
//
// En el panel Layers:
//
// 1. Active y desactive la capa Elevación.
// 2. Active la capa Elevación sin simbología.
// 3. Compare ambas representaciones.
// 4. Ajuste manualmente la opacidad.
// 5. Observe cómo cambia la visualización sobre el mapa base.
//
// No es necesario agregar código en este paso.


// ============================================================================
// 🧪 EJERCICIO PROPUESTO
// ============================================================================
//
// Realice los siguientes cambios uno por uno:
//
// 1. Cambie el valor de la variable pais.
// 2. Cambie el nombre de la institución.
// 3. Agregue otro cultivo a la lista.
// 4. Consulte el tercer elemento de la lista.
// 5. Cambie el mapa base a ROADMAP.
// 6. Cambie el mapa base a TERRAIN.
// 7. Cambie las coordenadas del punto.
// 8. Pruebe otro color para el punto.
// 9. Cambie el valor máximo de elevación.
// 10. Pruebe una paleta diferente.
// 11. Utilice Inspector para consultar la elevación.
//
// Ejecute el script después de cada cambio y observe el resultado.


// ============================================================================
// ✅ RESUMEN
// ============================================================================
//
// En este ejercicio aprendimos a:
//
// ✓ Ejecutar un script en Google Earth Engine.
// ✓ Utilizar la pestaña Console.
// ✓ Mostrar información con print().
// ✓ Crear variables de texto, números y valores lógicos.
// ✓ Crear y consultar listas.
// ✓ Crear y consultar diccionarios.
// ✓ Escribir y reconocer comentarios.
// ✓ Centrar el mapa mediante coordenadas.
// ✓ Centrar el mapa utilizando un objeto.
// ✓ Cambiar entre mapas base.
// ✓ Crear una geometría de punto.
// ✓ Cargar una imagen del catálogo.
// ✓ Visualizar una capa.
// ✓ Activar y desactivar capas.
// ✓ Definir parámetros de visualización.
// ✓ Aplicar paletas de colores.
// ✓ Consultar bandas y propiedades.
// ✓ Consultar la proyección y resolución nominal.
// ✓ Utilizar la pestaña Inspector.
//
// En el Script 02 trabajaremos con:
//
// - Un polígono como área de interés.
// - Colecciones de imágenes.
// - Sentinel-2.
// - Landsat.
// - Filtros espaciales y temporales.
// - Color natural y falso color.
//
// ============================================================================
