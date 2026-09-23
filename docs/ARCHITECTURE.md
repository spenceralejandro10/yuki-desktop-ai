# Arquitectura inicial

## Capas
1. Desktop shell
2. Animation engine
3. Character state manager
4. Interaction layer
5. AI layer
6. Voice layer
7. Local configuration

## Flujo
Usuario / sistema -> State Manager -> Animation Engine -> Renderer

IA / voz podrán cambiar el estado visual de Yuki, por ejemplo:
- escuchando -> listen
- pensando -> think
- respondiendo -> talk
- inactiva -> idle
