# 🌎 Webinar GEE

![FAO](https://img.shields.io/badge/FAO-Corredor_Seco-blue)
![MAG](https://img.shields.io/badge/MAG-Costa_Rica-green)
![Google Earth Engine](https://img.shields.io/badge/Google-Earth_Engine-brightgreen)
![QGIS](https://img.shields.io/badge/QGIS-3.44-green)
![Python](https://img.shields.io/badge/Python-Geemap-yellow)
![License](https://img.shields.io/badge/License-MIT-orange)
![Status](https://img.shields.io/badge/status-active-success)
![Webinar](https://img.shields.io/badge/Webinar-2026-blueviolet)

[![Abrir en GEE](https://img.shields.io/badge/Open-Google_Earth_Engine-success)](https://code.earthengine.google.com/)
[![Abrir Colab](https://img.shields.io/badge/Open-Colab-orange)](https://colab.research.google.com/)
[![Descargar QGIS](https://img.shields.io/badge/QGIS-Download-green)](https://qgis.org/)

---

<p align="center">
  <img src="docs/banner_webinar.png" width="100%">
</p>

## 📖 Descripción

Este repositorio contiene los materiales utilizados en el webinar:

# Google Earth Engine para Aplicaciones Agroambientales

Capacitación orientada al uso de Google Earth Engine (GEE) para el procesamiento y análisis de imágenes satelitales, monitoreo ambiental, agricultura sostenible y gestión territorial.

El webinar incluye ejemplos prácticos utilizando Sentinel-2, WorldCover, NDVI, Python, Geemap y QGIS.

---

## 🎯 Objetivos

- Comprender los fundamentos de Google Earth Engine.
- Explorar el catálogo global de datos geoespaciales.
- Procesar imágenes satelitales en la nube.
- Generar indicadores agroambientales.
- Calcular índices de vegetación (NDVI).
- Conectar resultados con QGIS.

---

## 👥 Público Meta

- Técnicos del MAG
- Extensionistas agropecuarios
- Especialistas SIG
- Analistas ambientales
- Investigadores
- Estudiantes

---

## 📅 Agenda

### Módulo 1. Introducción a Google Earth Engine

- ¿Qué es Google Earth Engine?
- Ventajas del procesamiento en la nube
- Catálogo de datos geoespaciales
- Casos de uso

---

### Módulo 2. Primeros Pasos

- Interfaz del Code Editor
- Estructura de scripts
- Visualización de capas
- Importación de datos

---

### Módulo 3. Imágenes Satelitales

- Sentinel-2
- Landsat
- MODIS
- WorldCover

---

### Módulo 4. Caso Práctico

#### NDVI para monitoreo agroambiental

- Cálculo de NDVI
- Simbología
- Estadísticas zonales
- Exportación de resultados

---

### Módulo 5. Python y Geemap

- Google Colab
- Autenticación con Earth Engine
- Visualización interactiva
- Exportación de mapas

---

### Módulo 6. Integración con QGIS

- Exportar resultados desde GEE
- Cargar capas en QGIS
- Servicios geoespaciales
- Casos de uso institucionales

---

## 📂 Estructura del Repositorio

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
│   ├── worldcover.js
│   ├── sentinel2.js
│   └── ejercicios.js
│
├── colab
│   ├── geemap_intro.ipynb
│   ├── gee_python.ipynb
│   └── exportacion.ipynb
│
└── presentacion
    └── Webinar_GEE_MAG.pdf
```

---

## 🛰️ Recursos

### Google Earth Engine

https://earthengine.google.com/

### Code Editor

https://code.earthengine.google.com/

### Google Colab

https://colab.research.google.com/

### Geemap

https://geemap.org/

### QGIS

https://qgis.org/

### SNIT Costa Rica

https://www.snitcr.go.cr/

---

## 📌 Ejemplo de Código

### NDVI con Sentinel-2

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

## 📊 Temas Cubiertos

- Google Earth Engine
- Sentinel-2
- Landsat
- WorldCover
- NDVI
- NBR
- Geemap
- Google Colab
- Python
- QGIS
- Agricultura Digital
- Monitoreo Ambiental
- Restauración de Ecosistemas

---

## 📚 Material de Apoyo

- Scripts de Earth Engine
- Presentaciones PDF
- Notebooks de Colab
- Recursos complementarios
- Enlaces de interés

---

## 👩‍💻 Facilitadora

### Grettel Vargas Azofeifa

Especialista SIG y Teledetección

FAO – Corredor Seco Centroamericano

---

## 📧 Contacto

grettel.vargasazofeifa@fao.org

---

## 🤝 Organizan

### FAO

Organización de las Naciones Unidas para la Alimentación y la Agricultura

### MAG Costa Rica

Ministerio de Agricultura y Ganadería

---

## ⭐ Licencia

Este material se distribuye bajo licencia MIT para fines educativos y de capacitación.

---

## 🙏 Agradecimientos

A todas las instituciones participantes por promover el uso de tecnologías geoespaciales para la agricultura sostenible, la restauración de ecosistemas y la gestión ambiental basada en evidencia.
