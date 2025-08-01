# 🧱 ¿Arquitectura por Capas es lo mismo que Hexagonal?

## ❓ Resumen corto

**No, no son lo mismo**, aunque ambas buscan separar responsabilidades y mejorar la mantenibilidad del código.

---

## 🧱 Arquitectura por Capas (Layered Architecture)

Es el enfoque más común y tradicional. Organiza el código en **capas horizontales**, por ejemplo:

### 🧩 Capas típicas:

- **Presentation (UI):** pantalla, vistas, controladores
- **Domain:** lógica de negocio, entidades, casos de uso
- **Data (Infrastructure):** acceso a APIs, base de datos, repositorios

Cada capa solo se comunica con la que está justo debajo o encima de ella. La **dependencia va de arriba hacia abajo**.


✅ **Ventajas:**
- Fácil de entender y aplicar
- Buena separación de responsabilidades

❌ **Desventajas:**
- El dominio puede quedar acoplado a infraestructura si no se aplica bien.
- Difícil testear lógica sin mocks o stubs complejos si hay mucho acoplamiento hacia abajo.

---

## 🧩 Arquitectura Hexagonal (Ports & Adapters)

Fue propuesta por **Alistair Cockburn**. Organiza la app en torno a su **núcleo de dominio**, y lo protege de dependencias externas.

### 🔁 Componentes clave:

- **Core o Domain:** entidades + casos de uso (independiente de cualquier framework)
- **Ports:** interfaces que define el dominio para interactuar con el exterior (ej. un repositorio, un servicio de notificación)
- **Adapters:** implementaciones concretas que cumplen esos ports (API, BD, Firebase, etc)


✅ **Ventajas:**
- Independencia de frameworks/librerías
- Fácil de testear el dominio sin dependencias externas
- Flexible: puedes cambiar infraestructuras sin tocar el núcleo

❌ **Desventajas:**
- Mayor complejidad inicial
- Más código (interfaces + implementaciones)

---

## ⚔️ Comparación

| Característica                  | Arquitectura por Capas     | Arquitectura Hexagonal          |
|--------------------------------|-----------------------------|----------------------------------|
| Estructura                     | Vertical (3+ capas)         | En forma de cebolla/hexágono    |
| Dependencias                   | Hacia infraestructura       | Hacia el dominio (inversión)    |
| Independencia del dominio      | Parcial (si está acoplado)  | Total (infra depende del core)  |
| Testeabilidad del dominio      | Media                       | Alta                            |
| Curva de aprendizaje           | Baja                        | Media/Alta                      |

---

## 🧠 Conclusión

- Si ya usas arquitectura por capas **bien aplicada** (sin acoplar dominio con infraestructura), estás en buen camino.
- Hexagonal es ideal para proyectos grandes o donde el dominio debe perdurar pese a cambios de frameworks o tecnologías.
- En entrevistas senior, **mencionar que conoces hexagonal (o Clean Architecture)** muestra madurez arquitectónica.

