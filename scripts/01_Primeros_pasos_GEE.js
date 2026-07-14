// ============================================================================
// 🌎 WEBINAR: INTRODUCCIÓN A GOOGLE EARTH ENGINE
// Script 01 de 04 — Primeros pasos en el Code Editor
// ============================================================================
//
// Grettel Vargas Azofeifa
// Especialista SIG y Geomática
// Proyecto Flagship · Corredor Seco Centroamericano · FAO
//
// ⏱️ Tiempo estimado: 25 minutos
// ============================================================================

// ============================================================================
// 👋 BIENVENIDOS
// ============================================================================
//
// En la presentación inicial se revisaron los conceptos generales de
// Google Earth Engine. En este ejercicio se inicia el trabajo práctico
// dentro del Code Editor.
//
// No se requieren conocimientos previos de programación.
// ============================================================================

// ============================================================================
// 🎯 OBJETIVOS
// ============================================================================
//
// ✓ Reconocer los paneles principales del Code Editor.
// ✓ Ejecutar instrucciones y revisar resultados en Console.
// ✓ Crear variables, listas y diccionarios sencillos.
// ✓ Navegar por el mapa y cambiar el mapa base.
// ✓ Crear y visualizar una geometría de punto.
// ✓ Cargar y visualizar una imagen SRTM.
// ✓ Explorar información básica y metadatos.
// ✓ Consultar valores mediante Inspector.
// ============================================================================

// ============================================================================
// 📖 ¿CÓMO UTILIZAR ESTE SCRIPT?
// ============================================================================
//
// ▶️ Paso: introduce una acción nueva.
// 📌 Ficha técnica: resume un concepto importante.
// 🌐 Para profundizar: enlaza la documentación oficial.
// 💡 Resultado esperado: indica qué revisar después de ejecutar.
// 🧪 Ejercicio: propone un cambio sencillo.
// ✅ Resumen: recapitula lo aprendido.
// ============================================================================

// ============================================================================
// 🆕 CONCEPTOS INTRODUCIDOS EN ESTE SCRIPT
// ============================================================================
//
// • Code Editor: Scripts, Docs, Assets, Console, Inspector, Tasks y Layers.
// • print(), var, listas y diccionarios.
// • Map.setCenter(), Map.setOptions(), Map.addLayer(), Map.centerObject().
// • ee.Geometry.Point().
// • ee.Image().
// • propertyNames().
// ============================================================================

// ============================================================================
// 📚 RECURSOS OFICIALES
// ============================================================================
//
// Guía de inicio:
// https://developers.google.com/earth-engine/guides/getstarted?hl=es-419
//
// Code Editor:
// https://developers.google.com/earth-engine/guides/playground?hl=es-419
//
// Introducción a JavaScript:
// https://developers.google.com/earth-engine/tutorials/tutorial_js_01?hl=es-419
//
// Catálogo de datos:
// https://developers.google.com/earth-engine/datasets?hl=es-419
// ============================================================================

// ============================================================================
// ▶️ PASO 1. RECORRER EL CODE EDITOR
// ============================================================================
//
// Scripts: crea, guarda y organiza scripts.
// Docs: consulta clases, métodos y ejemplos de la API.
// Assets: administra datos propios cargados a Earth Engine.
// Console: muestra resultados, mensajes y errores.
// Inspector: consulta valores haciendo clic sobre el mapa.
// Tasks: administra tareas de exportación.
// Layers: activa, desactiva y ajusta las capas.
//
// 🌐 Para profundizar:
// https://developers.google.com/earth-engine/guides/playground?hl=es-419
// ============================================================================

// ============================================================================
// ▶️ PASO 2. EJECUTAR LA PRIMERA INSTRUCCIÓN
// ============================================================================
//
// 📌 Ficha técnica
// Función: print()
// Uso: mostrar mensajes, objetos y resultados en Console.
// ============================================================================

print('Hola Google Earth Engine');

// 💡 Resultado esperado:
// El mensaje aparece en Console.

// ============================================================================
// ▶️ PASO 3. CREAR VARIABLES
// ============================================================================

var pais = 'Costa Rica';
var anio = 2026;

print('País:', pais);
print('Año:', anio);

// 🧪 Ejercicio:
// Cambie el país o el año y ejecute nuevamente.

// ============================================================================
// ▶️ PASO 4. CREAR UNA LISTA
// ============================================================================
//
// Una lista almacena varios elementos entre corchetes.
// Este concepto se utilizará después para seleccionar bandas.
// ============================================================================

var cultivos = ['Café', 'Arroz', 'Banano', 'Caña de azúcar'];

print('Cultivos:', cultivos);
print('Primer cultivo:', cultivos[0]);

// ============================================================================
// ▶️ PASO 5. CREAR UN DICCIONARIO
// ============================================================================
//
// Un diccionario organiza información mediante pares clave: valor.
// Más adelante se utilizará para parámetros de visualización.
// ============================================================================

var cultivo = {
  nombre: 'Café',
  provincia: 'Alajuela',
  areaHectareas: 120
};

print('Información del cultivo:', cultivo);
print('Provincia:', cultivo.provincia);

// ============================================================================
// ▶️ PASO 6. CENTRAR Y CAMBIAR EL MAPA BASE
// ============================================================================
//
// 📌 Ficha técnica
// Objeto: Map
// Uso: controlar la vista y las capas del mapa.
//
// API:
// https://developers.google.com/earth-engine/apidocs/map-setcenter
// ============================================================================

Map.setCenter(-84.2, 9.9, 7);
Map.setOptions('SATELLITE');

// Otras opciones. Mantenga solo una línea activa:
// Map.setOptions('ROADMAP');
// Map.setOptions('TERRAIN');
// Map.setOptions('HYBRID');

// ============================================================================
// ▶️ PASO 7. CREAR UNA GEOMETRÍA DE PUNTO
// ============================================================================
//
// 📌 Ficha técnica
// Clase: ee.Geometry.Point
// Representa una ubicación puntual.
//
// Guía:
// https://developers.google.com/earth-engine/guides/geometries?hl=es-419
//
// API:
// https://developers.google.com/earth-engine/apidocs/ee-geometry-point
// ============================================================================

var punto = ee.Geometry.Point([-84.2, 9.9]);

print('Punto:', punto);

// ============================================================================
// ▶️ PASO 8. VISUALIZAR Y CENTRAR EL PUNTO
// ============================================================================
//
// Map.addLayer():
// https://developers.google.com/earth-engine/apidocs/map-addlayer
//
// Map.centerObject():
// https://developers.google.com/earth-engine/apidocs/map-centerobject
// ============================================================================

Map.addLayer(punto, {color: 'red'}, 'Punto de referencia');
Map.centerObject(punto, 9);

// ============================================================================
// ▶️ PASO 9. CARGAR UNA IMAGEN SRTM
// ============================================================================
//
// 📌 Ficha técnica
// Clase: ee.Image
// Representa una imagen raster individual.
//
// Guía:
// https://developers.google.com/earth-engine/guides/images?hl=es-419
//
// API:
// https://developers.google.com/earth-engine/apidocs/ee-image
//
// 🗂️ Catálogo general:
// https://developers.google.com/earth-engine/datasets?hl=es-419
//
// 📂 Dataset: NASA SRTM Digital Elevation 30 m
// https://developers.google.com/earth-engine/datasets/catalog/USGS_SRTMGL1_003
// ============================================================================

var elevacion = ee.Image('USGS/SRTMGL1_003');

print('Imagen SRTM:', elevacion);

// ============================================================================
// ▶️ PASO 10. VISUALIZAR LA ELEVACIÓN
// ============================================================================

var visualizacionElevacion = {
  min: 0,
  max: 3000,
  palette: ['0b3d91', '2a9d8f', 'a7c957', 'f4d35e', 'bc6c25', 'ffffff']
};

Map.addLayer(elevacion, visualizacionElevacion, 'Elevación');

// 🧪 Ejercicio:
// Cambie max a 2000 o modifique la paleta y compare.

// ============================================================================
// ▶️ PASO 11. EXPLORAR LA INFORMACIÓN DE LA IMAGEN
// ============================================================================
//
// propertyNames() devuelve los nombres de las propiedades.
//
// API:
// https://developers.google.com/earth-engine/apidocs/ee-element-propertynames
// ============================================================================

print('Estructura de la imagen:', elevacion);
print('Propiedades disponibles:', elevacion.propertyNames());

// ============================================================================
// ▶️ PASO 12. UTILIZAR INSPECTOR Y LAYERS
// ============================================================================
//
// 1. Abra Inspector.
// 2. Haga clic en diferentes lugares del mapa.
// 3. Revise el valor de elevation.
// 4. Active y desactive la capa Elevación.
// 5. Cambie su opacidad desde Layers.
// ============================================================================

// ============================================================================
// 🧪 EJERCICIO FINAL
// ============================================================================
//
// 1. Cambie el país y el año.
// 2. Agregue un cultivo a la lista.
// 3. Cambie la provincia del diccionario.
// 4. Pruebe otro mapa base.
// 5. Cambie las coordenadas del punto.
// 6. Modifique el rango o la paleta.
// 7. Consulte varios valores con Inspector.
// ============================================================================

// ============================================================================
// ✅ RESUMEN
// ============================================================================
//
// ✓ Reconocer los paneles principales del Code Editor.
// ✓ Ejecutar un script y utilizar Console.
// ✓ Crear variables, listas y diccionarios.
// ✓ Centrar el mapa y cambiar el mapa base.
// ✓ Crear una geometría de punto.
// ✓ Visualizar y centrar objetos.
// ✓ Cargar una imagen del catálogo.
// ✓ Definir parámetros de visualización.
// ✓ Explorar propiedades básicas.
// ✓ Consultar valores con Inspector.
// ============================================================================

// ============================================================================
// 📚 RECURSOS ADICIONALES
// ============================================================================
//
// Documentación:
// https://developers.google.com/earth-engine?hl=es-419
//
// Referencia API:
// https://developers.google.com/earth-engine/apidocs
//
// Catálogo:
// https://developers.google.com/earth-engine/datasets?hl=es-419
// ============================================================================
