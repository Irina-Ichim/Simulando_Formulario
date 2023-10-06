# Simulador de Formulario Real

## Para Nombre y Apellido [A-Za-z]:
Acepta cualquier letra mayúscula o minúscula.
    +: Garantiza que al menos un carácter esté presente.
## Para el email 
En esta expresión regular [a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$:
- [a-z0-9._%+-]+: Permite letras minúsculas, números, y algunos caracteres especiales antes de la @.
- @[a-z0-9.-]+: Exige que después de la @ haya letras, números, y puntos.
- \.[a-z]{2,}$: Requiere un punto y al menos dos letras después del último punto, representando el dominio.

## Para el teléfono [0-9]{9,}:
- [0-9]: Acepta solo caracteres numéricos.
- {9,}: Exige un mínimo de 9 caracteres numéricos.

## Para el asunto:
Limita la cantidad de palabras a un máximo de 30.
