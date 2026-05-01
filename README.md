# Sistema Web de Gestión e Inventario para Ferretería Nava

## Descripción del proyecto

Este proyecto consiste en el desarrollo de un prototipo web para la gestión básica de una ferretería, enfocado en el control de inventario, registro de ventas, visualización de indicadores, generación de reportes, bitácora de movimientos y preparación del incremento final para revisión.

El sistema fue desarrollado como parte de una práctica académica basada en la metodología Scrum. Por ello, el avance del proyecto se documenta por sprints, desde la planeación inicial hasta el cierre técnico del desarrollo.

En su estado actual, el prototipo permite trabajar con módulos de inventario, ventas, dashboard, reportes y bitácora, integrados en una sola interfaz. Se trata de un MVP funcional orientado a demostrar el flujo general del sistema y sus principales operaciones.

---

## Estado actual del proyecto

**Sprint actual documentado:** Sprint 7  
**Siguiente actividad académica:** Actividad 3.6. Sprint Review  
**Estado general:** Prototipo funcional preparado para revisión final

Durante el séptimo sprint se realizó el cierre técnico del desarrollo del prototipo. Esta etapa estuvo enfocada en revisar, estabilizar y preparar el sistema para la Sprint Review.

No se plantea un Sprint 8, ya que la siguiente actividad corresponde a la revisión/presentación del incremento terminado.

---

## Enlaces del proyecto

- **Repositorio en GitHub:**  
  https://github.com/Jecxa/Sistema-Ferreteria-Nava

- **Prototipo desplegado en Render:**  
  https://sistema-ferreteria-nava-u63n.onrender.com/

---

## Objetivo del sistema

Desarrollar una solución web que permita a una ferretería llevar un mejor control de sus productos, visualizar información relevante del negocio, registrar ventas, consultar reportes básicos y dar seguimiento a movimientos importantes mediante una bitácora.

---

## Alcance del prototipo

Este sistema corresponde a una versión prototipo tipo MVP. Su función principal es demostrar la integración de módulos esenciales para una ferretería y evidenciar el avance del proyecto durante los sprints.

El prototipo permite validar el siguiente flujo general:

1. Registrar productos.
2. Consultar inventario.
3. Editar o eliminar productos.
4. Identificar productos con stock bajo.
5. Registrar ventas.
6. Actualizar existencias automáticamente.
7. Generar reportes.
8. Exportar información.
9. Revisar movimientos mediante bitácora.
10. Presentar el incremento final durante la Sprint Review.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- GitHub para control y publicación del repositorio
- Render para despliegue del prototipo
- Persistencia y almacenamiento utilizados de acuerdo con el alcance académico del MVP

---

## Módulos implementados

### Dashboard

- Visualización de productos activos.
- Indicadores generales del sistema.
- Alerta de productos con stock bajo.
- Resumen de ventas del día.
- Acceso rápido a los módulos principales.

### Inventario

- Alta de productos.
- Edición de productos.
- Eliminación de productos.
- Búsqueda por código o nombre.
- Filtro por categoría.
- Control de existencia mínima.
- Visualización del estado del producto según su nivel de stock.
- Integración de imagen o referencia visual del producto cuando está disponible.

### Ventas

- Selección de productos.
- Carrito de compra.
- Confirmación de venta.
- Descuento automático de stock.
- Actualización del inventario después de cada venta.
- Registro del movimiento dentro del sistema.

### Reportes

- Consulta de productos con stock bajo.
- Generación de reportes básicos.
- Exportación del reporte a formato CSV.
- Ajustes para mejorar la compatibilidad del archivo CSV con Excel.
- Revisión de acentos y separación de columnas.

### Bitácora

- Registro de acciones relevantes del sistema.
- Seguimiento de movimientos como creación, edición, eliminación y ventas.
- Apoyo para revisar cambios realizados durante las pruebas.
- Evidencia del comportamiento general del prototipo.

---

# Historial de avances por sprint

## Sprint 1: Planeación inicial y estructura base

### Objetivo del sprint

Definir el proyecto, establecer el problema a resolver y crear la primera estructura visual del prototipo.

### Actividades realizadas

- Se definió la idea principal del sistema web para Ferretería Nava.
- Se identificó la necesidad de controlar inventario, ventas y reportes.
- Se planteó el alcance inicial del prototipo.
- Se creó la primera estructura de carpetas y archivos.
- Se diseñaron las primeras vistas generales del sistema.
- Se organizó el flujo inicial de navegación.

### Resultado del sprint

Al finalizar el Sprint 1 se obtuvo una base inicial del sistema, con una idea clara del producto a desarrollar y una estructura mínima para continuar con los módulos funcionales.

---

## Sprint 2: Desarrollo inicial del inventario

### Objetivo del sprint

Construir la primera versión funcional del módulo de inventario.

### Actividades realizadas

- Se desarrolló la captura inicial de productos.
- Se agregaron campos básicos como código, nombre, categoría, precio, existencia y mínimo.
- Se incorporó la visualización de productos registrados.
- Se realizaron pruebas de alta, edición y eliminación.
- Se revisó que la información ingresada pudiera consultarse desde la interfaz.

### Resultado del sprint

El sistema comenzó a permitir la administración básica de productos, consolidando el inventario como módulo central del prototipo.

---

## Sprint 3: Integración de operaciones principales

### Objetivo del sprint

Mejorar la integración entre módulos y fortalecer el flujo de operación del sistema.

### Actividades realizadas

- Se mejoró la navegación entre secciones.
- Se ajustó la organización visual del sistema.
- Se fortaleció el flujo de captura y consulta de información.
- Se revisó la coherencia de los datos mostrados.
- Se integraron funciones básicas para avanzar hacia un prototipo más completo.

### Resultado del sprint

El prototipo dejó de ser una estructura aislada y comenzó a mostrar un flujo más integrado entre sus módulos principales.

---

## Sprint 4: Dashboard y bitácora

### Objetivo del sprint

Incorporar un panel visual de control y un registro de movimientos relevantes.

### Actividades realizadas

- Se desarrolló el dashboard del sistema.
- Se agregaron indicadores generales del inventario.
- Se incorporó la alerta de productos con stock bajo.
- Se integró la bitácora de movimientos.
- Se registraron acciones como creación, edición, eliminación y ventas.
- Se mejoró la visibilidad del estado general del sistema.

### Resultado del sprint

El sistema obtuvo mayor capacidad de seguimiento, ya que el dashboard permitió visualizar información importante y la bitácora permitió revisar los movimientos realizados.

---

## Sprint 5: Reportes y exportación CSV

### Objetivo del sprint

Consolidar el módulo de reportes y permitir la exportación de información.

### Actividades realizadas

- Se desarrolló el reporte de productos con stock bajo.
- Se incorporó la exportación del reporte a formato CSV.
- Se revisó la apertura del archivo exportado en Excel.
- Se detectaron detalles relacionados con compatibilidad, codificación y separación de columnas.
- Se realizaron ajustes para mejorar la presentación del archivo exportado.
- Se revisó la integración del módulo de reportes con el inventario.

### Resultado del sprint

El sistema permitió consultar reportes básicos y exportarlos, aportando una herramienta útil para la toma de decisiones dentro de la ferretería.

---

## Sprint 6: Imágenes de productos y refinamiento visual

### Objetivo del sprint

Mejorar la presentación del inventario mediante imágenes de productos y corregir detalles detectados en el Sprint 5.

### Actividades realizadas

- Se rediseñó el formulario de productos para incluir un selector de imagen.
- Se implementó la validación de formatos permitidos.
- Se trabajó con imágenes en formato JPG y PNG.
- Se agregó una referencia visual del producto dentro del inventario.
- Se corrigieron problemas de codificación en la exportación CSV.
- Se mejoró la compatibilidad del archivo CSV con Excel.
- Se revisó la experiencia visual del usuario.
- Se fortaleció la presentación de productos con stock bajo.

### Resultado del sprint

El prototipo mejoró su calidad visual y funcional. La integración de imágenes hizo que el inventario se acercara más a una solución real para un negocio, mientras que la corrección del CSV fortaleció la utilidad del módulo de reportes.

---

## Sprint 7: Cierre técnico y preparación para Sprint Review

### Objetivo del sprint

Realizar el cierre técnico del desarrollo, validar el funcionamiento general del prototipo y preparar el incremento para la Sprint Review.

### Actividades realizadas

- Se revisó el funcionamiento general del sistema.
- Se validó el módulo de inventario.
- Se revisó el flujo de ventas.
- Se comprobaron los reportes y la exportación de información.
- Se revisó el dashboard.
- Se validó la bitácora de movimientos.
- Se comprobó el despliegue en Render.
- Se revisó que el repositorio de GitHub estuviera disponible.
- Se organizaron evidencias para la entrega.
- Se corrigieron detalles menores de presentación y consistencia.
- Se preparó el prototipo para ser mostrado en la Actividad 3.6. Sprint Review.

### Resultado del sprint

El Sprint 7 permitió consolidar el proyecto como un incremento funcional listo para revisión. Se confirmó que los módulos principales están integrados y que el sistema puede presentarse como un MVP académico funcional.

Este sprint no abre una nueva fase de desarrollo. Su función principal fue cerrar técnicamente el prototipo y dejarlo listo para la Sprint Review.

---

# Resumen general de los sprints

| Sprint | Enfoque principal | Resultado |
|---|---|---|
| Sprint 1 | Planeación y estructura base | Se definió el proyecto y se creó la base inicial. |
| Sprint 2 | Inventario inicial | Se implementó la gestión básica de productos. |
| Sprint 3 | Integración funcional | Se mejoró la navegación y la coherencia entre módulos. |
| Sprint 4 | Dashboard y bitácora | Se agregaron indicadores y registro de movimientos. |
| Sprint 5 | Reportes y CSV | Se incorporó el reporte de stock bajo y exportación CSV. |
| Sprint 6 | Imágenes y refinamiento | Se agregaron imágenes de productos y mejoras visuales. |
| Sprint 7 | Cierre técnico | Se validó el sistema y se preparó para Sprint Review. |

---

## Resultado final del Sprint 7

El séptimo sprint permitió concluir la etapa de desarrollo del prototipo. El sistema cuenta con módulos funcionales de inventario, ventas, dashboard, reportes y bitácora, además de ajustes visuales y revisión del despliegue.

El incremento queda preparado para la **Actividad 3.6. Sprint Review**, donde se presentará el resultado final del proyecto, se explicarán los módulos implementados y se mostrarán evidencias de funcionamiento.

---

## Consideraciones para la Sprint Review

La siguiente actividad no corresponde a un Sprint 8. Corresponde a una revisión del incremento construido.

Para la Sprint Review se recomienda presentar:

- Objetivo general del sistema.
- Enlace del repositorio en GitHub.
- Enlace del despliegue en Render.
- Recorrido por el dashboard.
- Registro y consulta de productos.
- Ejemplo de venta.
- Actualización de inventario.
- Reporte de stock bajo.
- Exportación de información.
- Bitácora de movimientos.
- Evidencias de los avances por sprint.
- Conclusiones del equipo.

---

## Posibles mejoras futuras

Aunque el prototipo cumple con el alcance académico planteado, una versión posterior podría incluir:

- Autenticación real de usuarios.
- Base de datos en producción.
- Roles y permisos.
- Historial detallado por usuario.
- Reportes más avanzados.
- Carga optimizada de imágenes.
- Respaldo automático de información.
- Panel administrativo más completo.
- Diseño responsivo más refinado.
- Pruebas automatizadas.
- Validaciones de seguridad más completas.

---

## Observaciones

El proyecto continúa siendo un prototipo académico funcional. No representa todavía una versión final de producción, pero sí muestra de forma clara el flujo general de operación de un sistema web para una ferretería.

Durante el Sprint 7 se dio prioridad a la estabilidad, revisión y preparación del prototipo para la Sprint Review. Por ello, las modificaciones propuestas ya no se orientan a abrir un nuevo sprint de desarrollo, sino a presentar correctamente el incremento final y documentar sus resultados.

---

## Autoría

Proyecto desarrollado con fines académicos para documentar el avance por sprints en la implementación de un sistema web de gestión e inventario para Ferretería Nava.

### Equipo de trabajo

- Diego Harold Martínez De Dios
- Jecxania Madai Escobedo Hernández
- Emmanuel Solís Ruíz
- José Alberto Rodríguez Lara

---

## Estado final

**Estado:** Prototipo funcional preparado para Sprint Review.  
**Última etapa documentada:** Sprint 7.  
**Siguiente actividad:** Actividad 3.6. Sprint Review.
