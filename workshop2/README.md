\# My University Website



Sitio web personal desarrollado para el Workshop de Aplicaciones Web



\##Descripción del Proyecto



Este proyecto consiste en un \*\*sitio web personal\*\* desarrollado completamente con \*\*HTML5\*\* y \*\*CSS\*\*. Fue creado como parte del Workshop de Aplicaciones Web, demostrando el uso de etiquetas semánticas, tablas, formularios, y estilos modernos con animaciones CSS.



La página representa mi perfil universitario, incluyendo información sobre mis cursos, horario de clases, pasatiempos, clubes y un formulario de contacto.



\## Estructura del Proyecto

myfirstpage/

│

├── index.html # Página principal (Home)

├── styles.css # Hoja de estilos principal

├── README.md # Este archivo

│

├── pages/

│ ├── courses.html # Página de cursos

│ ├── schedule.html # Página de horario (con tabla)

│ ├── contact.html # Página de contacto (con formulario)

│ ├── hobbies.html # Página de pasatiempos

│ └── clubs.html # Página de clubes

│

└── images/

├── university.jpg # Imagen de la universidad

├── profile.jpg # Foto de perfil

├── wba.png # Imagen Web Applications

├── proces.avif # Imagen Image Processing

├── adv.jpeg # Imagen Advanced Programming

├── sto.jpeg # Imagen Stochastic Process

├── techn.gif # Imagen Technology Transfer

└── redes.jpeg # Imagen Networks



\## Tecnologías Utilizadas



| Tecnología | Descripción |

|------------|-------------|

| \*\*HTML5\*\* | Estructura semántica del sitio web |

| \*\*CSS3\*\* | Estilos, animaciones y diseño responsivo |

| \*\*Apache\*\* | Servidor web local para desarrollo |



\## Características del Sitio



\###  Página Principal (index.html)

\- Encabezado con título y navegación

\- Información personal (nombre, carrera, semestre)

\- Imagen de perfil

\- Lista de intereses académicos



\###  Página de Cursos (courses.html)

\- Tarjetas con animación `fade-in-up` y `card`

\- Imágenes representativas por curso

\- Instructores y temas de aprendizaje



\###  Página de Horario (schedule.html)

\- Tabla de horario semanal con `rowspan` y `colspan`

\- \*\*Colores por asignatura\*\*:

&#x20; - 🔵 Web Applications

&#x20; - 🟢 Technology Transfer

&#x20; - 🟠 Advanced Programming

&#x20; - 🟣 Image Processing

&#x20; - 🔴 Networks

&#x20; - 🩷 Stochastic Process

\- Leyenda de colores

\- Animaciones de entrada en celdas



\### Página de Contacto (contact.html)

\- Formulario completo con:

&#x20; - Nombre

&#x20; - Correo electrónico

&#x20; - Fecha de nacimiento

&#x20; - Programa de estudio

&#x20; - Semestre

&#x20; - Motivo de contacto

&#x20; - Mensaje

&#x20; - Checkbox de aceptación

&#x20; - Botones de enviar y limpiar



\###  Página de Pasatiempos (hobbies.html)

\- Artículos con efecto `float` al hacer hover

\- Programación, lectura y deportes

\- Enlaces externos que abren en nueva pestaña



\### Página de Clubes (clubs.html)

\- Tarjetas con efecto `card` (3D)

\- Clubes: Programación, Relajación, Debate

\- Descripción, rol y actividades



\##  Animaciones CSS Implementadas



| Animación | Efecto | Elemento |

|-----------|--------|----------|

| `fadeIn` | Aparece desvaneciéndose | Header, Nav, Main |

| `float` | Flota al hacer hover | Artículos |

| `typing` | Máquina de escribir | Títulos de encabezado |

| `pulse` | Pulsación | Botón de enviar |

| `glow` | Brillo | Tabla al hacer hover |

| `popIn` | Aparece con efecto pop | Celdas de tabla |

| `card` | Efecto 3D al hacer hover | Tarjetas de cursos/clubes |

| `fade-in-up` | Aparece desde abajo | Secciones |

| `marquee` | Texto en movimiento | Banner informativo |





