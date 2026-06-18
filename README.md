# 🌎 Google Earth Engine para Aplicaciones Agroambientales

![FAO](https://img.shields.io/badge/FAO-Corredor_Seco-blue)
![MAG](https://img.shields.io/badge/MAG-Costa_Rica-green)
![Google Earth Engine](https://img.shields.io/badge/Google-Earth_Engine-brightgreen)
![QGIS](https://img.shields.io/badge/QGIS-3.44-success)
![Python](https://img.shields.io/badge/Python-Geemap-yellow)
![License](https://img.shields.io/badge/License-MIT-orange)
![Status](https://img.shields.io/badge/status-active-success)
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

Capacitación orientada al uso de tecnologías geoespaciales modernas para el monitoreo ambiental, la agricultura sostenible y la gestión territorial mediante el uso de:

- Google Earth Engine (GEE)
- Python
- Geemap
- Google Colab
- QGIS
- Plugin de Google Earth Engine para QGIS

El webinar incluye ejercicios prácticos con imágenes satelitales Sentinel-2, índices de vegetación, coberturas de la tierra y visualización de información geoespacial.

---

# 🎯 Objetivos

- Comprender los fundamentos de Google Earth Engine.
- Explorar el catálogo global de datos geoespaciales.
- Procesar imágenes satelitales en la nube.
- Generar indicadores agroambientales.
- Calcular índices de vegetación.
- Integrar GEE con Python y Geemap.
- Visualizar y analizar resultados en QGIS.
- Consumir servicios geoespaciales institucionales.

---

# 👥 Público Meta

- Técnicos del MAG
- Extensionistas agropecuarios
- Especialistas SIG
- Analistas ambientales
- Investigadores
- Estudiantes
- Tomadores de decisión

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

# 🖥️ Software Utilizado

| Herramienta | Uso |
|------------|-----|
| Google Earth Engine | Procesamiento geoespacial en la nube |
| Python | Automatización y análisis |
| Geemap | Visualización interactiva |
| Google Colab | Ejecución de notebooks |
| QGIS | Sistema de Información Geográfica |
| Earth Engine Plugin | Integración GEE-QGIS |

---

# 📚 Agenda

## Módulo 1. Introducción a Google Earth Engine

- ¿Qué es Google Earth Engine?
- Ventajas de la computación en la nube
- Casos de uso
- Catálogo de datos

---

## Módulo 2. Primeros Pasos en GEE

- Interfaz del Code Editor
- Estructura de scripts
- Importación de datos
- Visualización de capas

---

## Módulo 3. Imágenes Satelitales

### Sentinel-2

- Bandas espectrales
- Resoluciones espaciales

### Landsat

- Series históricas

### WorldCover

- Cobertura y uso de la tierra

---

## Módulo 4. Caso Práctico Agroambiental

### NDVI

- Cálculo
- Simbología
- Interpretación

### NBR

- Monitoreo de degradación y recuperación

### Estadísticas Zonales

- Cálculo por polígonos
- Exportación de resultados

---

## Módulo 5. Python y Geemap

### Google Colab

- Configuración
- Autenticación

### Geemap

- Visualización interactiva
- Mapas dinámicos

### Exportación

- CSV
- GeoJSON
- Shapefile

---

## Módulo 6. Integración con QGIS

### Plugin Google Earth Engine

- Instalación
- Configuración
- Autenticación

### Visualización de datos GEE

- Capas raster
- Capas vectoriales

### Exportación de resultados

- GeoTIFF
- Shapefile
- GeoPackage

---

## Módulo 7. Servicios Geoespaciales

### WMS

- Visualización de mapas

### WFS

- Consulta de entidades

### Infraestructuras de Datos Espaciales

- SNIT Costa Rica
- Servicios institucionales

---

# 🔌 Complementos de QGIS

Durante el webinar se utilizarán los siguientes complementos:

## Google Earth Engine Plugin

Permite conectar QGIS directamente con Earth Engine.

## QuickMapServices

Acceso a mapas base.

## MetaSearch

Búsqueda de servicios OGC.

## DataPlotly

Generación de gráficos.

## Semi-Automatic Classification Plugin

Procesamiento de imágenes satelitales.

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
│   ├── ndvi.js
│   ├── nbr.js
│   ├── sentinel2.js
│   ├── worldcover.js
│   └── ejercicios.js
│
├── colab
│   ├── geemap_intro.ipynb
│   ├── gee_python.ipynb
│   └── exportacion.ipynb
│
├── qgis
│   ├── plugin_gee.pdf
│   ├── servicios_wms.pdf
│   └── servicios_wfs.pdf
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

## SNIT Costa Rica

https://www.snitcr.go.cr/

---

# 📌 Ejemplo de Código

## NDVI con Sentinel-2

```javascript
var s2 = ee.ImageCollection('COPERNICUS/S2_SR')
  .filterDate('2025-01-01','2025-12-31')
  .median();

var ndvi = s2.normalizedDifference(['B8','B4']);

Map.addLayer(
  ndvi,
  {
    min:0,
    max:1,
    palette:['red','yellow','green']
  },
  'NDVI'
);
```

---

# 📊 Temas Cubiertos

- Google Earth Engine
- Sentinel-2
- Landsat
- WorldCover
- NDVI
- NBR
- Python
- Geemap
- Google Colab
- QGIS
- Plugin Earth Engine para QGIS
- WMS
- WFS
- Agricultura Digital
- Monitoreo Ambiental
- Restauración de Ecosistemas
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

# ⭐ Licencia

MIT License

---

# 🙏 Agradecimientos

A todas las instituciones participantes por promover el uso de tecnologías geoespaciales para la agricultura sostenible, la restauración de ecosistemas y la gestión ambiental basada en evidencia.
