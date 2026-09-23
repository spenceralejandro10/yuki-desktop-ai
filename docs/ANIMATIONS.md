# Animaciones de Yuki

## Convención
Cada animación vive en su propia carpeta y usa PNG transparente.

Formato:
`<estado>_<numero>.png`

Ejemplo:
`idle_01.png`
`idle_02.png`

## Estados iniciales
| Estado | Frames objetivo | Loop |
|---|---:|---|
| idle | 8 | sí |
| walk-left | 8 | sí |
| walk-right | 8 | sí |
| run-left | 8 | sí |
| run-right | 8 | sí |
| talk | 8 | sí |
| listen | 6 | sí |
| think | 6 | sí |
| wave | 8 | no |
| jump | 8 | no |
| sit | 6 | no |
| sleep | 8 | sí |

## Requisitos
- Mismo tamaño de lienzo por secuencia.
- Personaje centrado de forma consistente.
- Transparencia real.
- Sin fondos, textos ni elementos decorativos.
- Mantener identidad visual entre frames.
