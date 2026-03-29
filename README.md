# Sistema Web de Gestión e Inventario para Ferretería Nava

## Descripción del proyecto
Este proyecto consiste en el desarrollo de un prototipo web para la gestión básica de una ferretería, enfocado en el control de inventario, registro de ventas, visualización de indicadores y generación de reportes. El sistema fue desarrollado como parte de una práctica académica basada en la metodología Scrum, documentando avances por sprint.

En su estado actual, el prototipo permite trabajar con módulos de inventario, ventas, dashboard, bitácora y reportes, integrados en una sola interfaz. Se trata de un MVP funcional orientado a demostrar el flujo general del sistema y sus principales operaciones.

## Estado actual del proyecto
**Sprint actual documentado: Sprint 5**

Durante el quinto sprint se consolidó principalmente el módulo de reportes, en especial:
- reporte de productos con stock bajo,
- exportación de reporte a formato CSV,
- validación de compatibilidad del archivo exportado,
- ajustes de cierre y refinamiento del prototipo.

También se revisó la integración entre los módulos ya desarrollados para asegurar una navegación más clara y un funcionamiento congruente del sistema.

## Módulos implementados
- **Dashboard**
  - visualización de productos activos,
  - alerta de stock bajo,
  - ventas del día.

- **Inventario**
  - alta de productos,
  - edición de productos,
  - eliminación de productos,
  - búsqueda por código o nombre,
  - filtro por categoría,
  - control de existencia mínima.

- **Ventas**
  - selección de productos,
  - carrito de compra,
  - confirmación de venta,
  - descuento automático de stock.

- **Reportes**
  - consulta de productos con stock bajo,
  - exportación del reporte a CSV,
  - ajustes de compatibilidad para apertura en Excel.

- **Bitácora**
  - registro de acciones relevantes del sistema,
  - seguimiento de movimientos como inicio de sesión, creación, edición, eliminación y ventas.

## Tecnologías utilizadas
- HTML5
- CSS3
- JavaScript
- LocalStorage para persistencia local
- Render para despliegue del prototipo

## Enlaces del proyecto
- **Repositorio en GitHub:**  
  https://github.com/Jecxa/Sistema-Ferreteria-Nava

- **Prototipo desplegado en Render:**  
  https://sistema-ferreteria-nava.onrender.com

## Objetivo del sistema
Desarrollar una solución web que permita a una ferretería llevar un mejor control de sus productos, visualizar información relevante del negocio, registrar ventas y consultar reportes básicos para apoyar la toma de decisiones.

## Alcance del prototipo
Este sistema corresponde a una versión prototipo tipo MVP. Su función principal es demostrar la integración de módulos esenciales del negocio y evidenciar el avance del proyecto durante los sprints. Algunas funciones se manejan con persistencia local y login simulado, ya que el enfoque de esta etapa está en la validación funcional y visual del sistema.

## Avances por sprint

### Sprint 1
- definición inicial del proyecto,
- estructura base del prototipo,
- primeras vistas del sistema.

### Sprint 2
- avance del módulo de inventario,
- captura y gestión inicial de productos.

### Sprint 3
- integración de operaciones principales,
- mejoras en navegación y organización del prototipo.

### Sprint 4
- desarrollo del dashboard,
- incorporación de bitácora de movimientos,
- fortalecimiento de la parte de visibilidad y control.

### Sprint 5
- consolidación del módulo de reportes,
- implementación del reporte de stock bajo,
- exportación a CSV,
- corrección de detalles de compatibilidad del archivo exportado,
- validación y cierre funcional del prototipo.

## Observaciones
El proyecto continúa siendo un prototipo académico funcional. No representa todavía una versión final de producción, pero sí muestra de forma clara el flujo general de operación de un sistema web para una ferretería.

## Autoría
Proyecto desarrollado con fines académicos para documentar el avance por sprints en la implementación de un sistema web de gestión e inventario.
