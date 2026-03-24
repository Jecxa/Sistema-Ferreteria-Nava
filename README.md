# Sistema Web de Gestión para Ferretería Nava

Prototipo funcional desarrollado como parte del proyecto académico de implementación incremental bajo metodología **Scrum**.

## Descripción general

Este proyecto consiste en el desarrollo de un sistema web para apoyar la gestión básica de una ferretería. El prototipo actual permite simular procesos importantes del negocio, como el acceso al sistema, el control de inventario, el registro de ventas, la visualización de indicadores generales, la consulta de reportes y el seguimiento de movimientos mediante una bitácora.

En esta versión, el proyecto ya no se limita solo al inventario base, sino que integra varios módulos en una misma interfaz. Por ello, el repositorio corresponde actualmente a un **avance de Sprint 4**, enfocado en **visibilidad y control**, especialmente mediante el **dashboard** y la **bitácora de acciones**.

## Estado actual del proyecto

**Versión académica actual:** Sprint 4  
**Estatus:** Prototipo funcional / MVP  
**Tipo de almacenamiento:** localStorage del navegador  
**Autenticación:** simulada para fines demostrativos

## Objetivo del sistema

Apoyar el control operativo de una ferretería mediante un sistema web que permita:

- consultar productos disponibles,
- registrar y actualizar inventario,
- realizar ventas con descuento automático de existencias,
- visualizar indicadores generales del negocio,
- detectar productos con stock bajo,
- y llevar una bitácora de acciones relevantes dentro del sistema.

## Módulos incluidos

### 1. Acceso al sistema
- Pantalla de inicio de sesión simulada.
- Permite establecer una sesión local para mostrar el flujo de uso del prototipo.

### 2. Dashboard
- Visualización rápida de indicadores clave.
- Muestra productos activos.
- Muestra productos con stock bajo.
- Muestra ventas realizadas en el día.

### 3. Inventario
- Alta de productos.
- Edición de productos existentes.
- Eliminación de productos.
- Búsqueda por código o nombre.
- Filtro por categoría.
- Validación básica del nivel mínimo de existencia.

### 4. Ventas
- Consulta de productos disponibles para vender.
- Carrito de compra.
- Confirmación de venta.
- Descuento automático del stock al completar la venta.

### 5. Reportes
- Visualización de productos con stock bajo.
- Exportación de la información a archivo CSV.

### 6. Bitácora
- Registro de acciones relevantes dentro del sistema.
- Guarda eventos como acceso, cierre de sesión, altas, ediciones, eliminaciones y ventas.

## Tecnologías utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **localStorage** para persistencia local de datos

## Estructura del repositorio

- `ferreteria_prototipo.html` → archivo principal del prototipo.
- `README.md` → documentación general del proyecto.
- `Actividad_2_3_Segundo_Sprint.pdf` → evidencia académica previa del avance del proyecto.

## Cómo ejecutar el prototipo

1. Descargar o clonar este repositorio.
2. Abrir el archivo `ferreteria_prototipo.html` en el navegador.
3. Iniciar sesión con cualquier usuario y contraseña.
4. Navegar entre los módulos del sistema desde el menú superior.

## Alcance del prototipo

Este sistema corresponde a un **MVP funcional**. Su propósito es demostrar el flujo general del proyecto y los avances logrados durante los sprints académicos. Algunas funciones se encuentran simuladas o trabajan de forma local, por lo que no representa todavía una versión final conectada a una base de datos real o a un backend productivo.

## Avance por sprints

### Sprint 1
- Inicio del proyecto.
- Definición de la base visual del sistema.
- Acceso simulado.
- Inventario inicial.

### Sprint 2
- Mejoras en estructura del inventario.
- Ajustes en interfaz y navegación.
- Avance funcional del CRUD de productos.

### Sprint 3
- Integración general de módulos.
- Avance en ventas y reportes.
- Consolidación del prototipo como sistema navegable.

### Sprint 4
- Implementación del dashboard con KPIs.
- Integración de la bitácora de movimientos.
- Mejor relación entre inventario, ventas, reportes y control visual.

## Propuesta para el siguiente sprint

Para el siguiente sprint se contempla:

- mejorar la presentación de reportes,
- refinar la interfaz,
- fortalecer validaciones,
- mejorar la claridad de la bitácora,
- y dejar una versión más estable y mejor documentada para la entrega final.

## Autoría

Proyecto académico desarrollado para la materia correspondiente al curso, tomando como caso de estudio la empresa **Ferretería Nava**.

## Notas finales

Este repositorio documenta el avance progresivo del sistema bajo metodología Scrum. El objetivo principal ha sido evidenciar el desarrollo por sprints, manteniendo una versión funcional y demostrable del proyecto.
