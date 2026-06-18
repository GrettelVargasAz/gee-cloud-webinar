# 🌎 Google Earth Engine para Aplicaciones Agroambientales

![FAO](https://img.shields.io/badge/FAO-Corredor_Seco-blue)
![MAG](https://img.shields.io/badge/MAG-Costa_Rica-green)
![Google Earth Engine](https://img.shields.io/badge/Google-Earth_Engine-brightgreen)
![QGIS](https://img.shields.io/badge/QGIS-3.44-success)
![Python](https://img.shields.io/badge/Python-Geemap-yellow)
![Webinar](https://img.shields.io/badge/Webinar-2026-blueviolet)

[![Abrir GEE](https://img.shields.io/badge/Open-Google_Earth_Engine-success)](https://code.earthengine.google.com/)
[![Abrir Colab](https://img.shields.io/badge/Open-Colab-orange)](https://colab.research.google.com/)
[![Descargar QGIS](https://img.shields.io/badge/QGIS-Download-green)](https://qgis.org/)
[![Plugin GEE QGIS](https://img.shields.io/badge/QGIS-Earth_Engine_Plugin-blue)](https://gee-community.github.io/qgis-earthengine-plugin/)

---

<p align="center">
  <img src="docs/banner_webinar.png" width="100%">
</p>

# 📖 Descripción

Repositorio oficial del webinar:

## Google Earth Engine para Aplicaciones Agroambientales

Capacitación introductoria orientada al uso de Google Earth Engine (GEE) para el análisis de información geoespacial en la nube, con aplicaciones en agricultura, monitoreo ambiental y gestión territorial.

Durante el webinar se trabajará con:

- Google Earth Engine
- Sentinel-2
- NDVI
- Python
- Geemap
- Google Colab
- QGIS
- Plugin Google Earth Engine para QGIS

---

# 🎯 Objetivos

- Conocer los fundamentos de Google Earth Engine.
- Explorar imágenes satelitales disponibles en la nube.
- Generar índices de vegetación utilizando Sentinel-2.
- Integrar Earth Engine con Python y Geemap.
- Visualizar y analizar resultados en QGIS.
- Compartir recursos para continuar aprendiendo.

---

# 👥 Público Meta

- Técnicos del MAG
- Extensionistas agropecuarios
- Especialistas SIG
- Analistas ambientales
- Investigadores
- Estudiantes

---

# 📋 Requisitos Previos

Antes del webinar se recomienda contar con:

✅ Cuenta de Google

✅ Acceso aprobado a Google Earth Engine

https://earthengine.google.com/

✅ QGIS 3.44 o superior

https://qgis.org/

✅ Google Chrome o Microsoft Edge

✅ Conexión estable a Internet

---

# 🖥️ Herramientas Utilizadas

| Herramienta | Uso |
|------------|-----|
| Google Earth Engine | Procesamiento geoespacial en la nube |
| Sentinel-2 | Imágenes satelitales |
| Python | Automatización y análisis |
| Geemap | Visualización interactiva |
| Google Colab | Ejecución de notebooks |
| QGIS | Visualización y análisis SIG |
| Plugin GEE para QGIS | Integración Earth Engine - QGIS |

---

# ⏱️ Agenda del Webinar (3 Horas)

## 1. Introducción a Google Earth Engine

- ¿Qué es Google Earth Engine?
- Ventajas del procesamiento en la nube
- Casos de uso agroambientales
- Catálogo de datos disponibles

**Duración aproximada:** 15 minutos

---

## 2. Primeros Pasos en Google Earth Engine

- Interfaz del Code Editor
- Estructura básica de un script
- Visualización de capas
- Importación de datos

**Duración aproximada:** 20 minutos

---

## 3. Ejercicio Práctico con Sentinel-2

- Búsqueda de imágenes
- Filtros espaciales y temporales
- Composición de imágenes
- Visualización RGB

**Duración aproximada:** 25 minutos

---

## 4. Cálculo de NDVI

- Concepto de NDVI
- Cálculo utilizando Sentinel-2
- Interpretación de resultados
- Exportación de imágenes

**Duración aproximada:** 35 minutos

---

## 5. Python y Geemap

- Introducción a Google Colab
- Conexión con Earth Engine
- Visualización interactiva
- Exportación de resultados

**Duración aproximada:** 30 minutos

---

## 6. Integración con QGIS

- Instalación del Plugin Google Earth Engine
- Autenticación
- Visualización de datos
- Exportación GeoTIFF
- Exportación Shapefile

**Duración aproximada:** 30 minutos

---

## 7. Recursos, Repositorio y Cierre

- Revisión del repositorio GitHub
- Material de apoyo
- Recursos para continuar aprendiendo
- Preguntas y respuestas

**Duración aproximada:** 25 minutos

---

# 🔌 Complementos de QGIS

Durante el webinar se presentarán los siguientes complementos:

## Google Earth Engine Plugin

Permite conectarse directamente a Google Earth Engine desde QGIS.

## QuickMapServices

Acceso rápido a mapas base.

---

# 📂 Estructura del Repositorio

```text
gee-cloud-webinar
│
├── README.md
│
├── docs
│   ├── banner_webinar.png
│   ├── logo_fao.png
│   ├── logo_mag.png
│   └── logo_gee.png
│
├── gee
│   ├── sentinel2.js
│   ├── ndvi.js
│   └── ejercicios.js
│
├── colab
│   ├── geemap_intro.ipynb
│   └── gee_python.ipynb
│
├── qgis
│   └── plugin_gee.pdf
│
└── presentacion
    └── Webinar_GEE_MAG.pdf
```

---

# 🛰️ Recursos

## Google Earth Engine

https://earthengine.google.com/

## Code Editor

https://code.earthengine.google.com/

## Google Colab

https://colab.research.google.com/

## Geemap

https://geemap.org/

## QGIS

https://qgis.org/

## Plugin Google Earth Engine para QGIS

https://gee-community.github.io/qgis-earthengine-plugin/

---

# 📌 Ejemplo de Código

## NDVI con Sentinel-2

```javascript
var s2 = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterDate('2025-01-01', '2025-12-31')
  .median();

var ndvi = s2.normalizedDifference(['B8', 'B4']);

Map.addLayer(
  ndvi,
  {
    min: 0,
    max: 1,
    palette: ['red', 'yellow', 'green']
  },
  'NDVI'
);
```

---

# 📊 Temas Cubiertos

- Google Earth Engine
- Sentinel-2
- NDVI
- Python
- Geemap
- Google Colab
- QGIS
- Plugin Earth Engine para QGIS
- Exportación de datos
- Agricultura Digital
- Monitoreo Ambiental
- Análisis Espacial

---

# 👩‍💻 Facilitadora

## Grettel Vargas Azofeifa

Especialista en Geomática y Teledetección

FAO – Corredor Seco Centroamericano

---

# 📧 Contacto

grettel.vargasazofeifa@fao.org

---

# 🤝 Organizan

## FAO

Organización de las Naciones Unidas para la Alimentación y la Agricultura

## MAG Costa Rica

Ministerio de Agricultura y Ganadería

---

# 🙏 Agradecimientos

A todas las personas participantes por promover el uso de tecnologías geoespaciales para la agricultura sostenible, la restauración de ecosistemas y la gestión ambiental basada en evidencia.
