# LC Tournament Game

Proyecto practico que simula un juego y en el mismo hay torneos.

## Instrucciones

• Utilice jest con TypeScript para escribir desarrollo basado en pruebas (TDD).

• Para cada característica que se describe a continuación, comience escribiendo las pruebas para todas las características.

• Cada característica debe tener una prueba fallida antes de implementar el código.

• Cuando escriba las pruebas, utilice interfaces TypeScript para que las pruebas se compilen sin errores en tiempo de compilación.

• Al principio no es necesario utilizar ningún marco de backend como nest.js, podemos hacer que las pruebas pasen utilizando objetos en memoria, por ahora.

## Tareas

• Diagrama/modelo de clases UML

• ¿Cuáles son todas las clases/objetos que necesitaremos?

• ¿Qué métodos y propiedades se requieren en cada clase?

• Cree interfaces TypeScript para representar cada clase.

• Escriba pruebas para todas las funciones en la FASE 1

## Fase I - Juego

• Un juego se juega con 4 jugadores.

• Se juega un juego en una mesa de juego.

• Hay 4 asientos en una mesa de juego.

• Un jugador puede unirse o dejar un asiento en la mesa.

• Un jugador no puede unirse a un asiento al que ya se ha unido otro jugador.

• Un jugador no puede unirse a más de un asiento al mismo tiempo. Para incorporarse a otro asiento, deberán abandonar el primer asiento y luego incorporarse al otro.

• Un Lounge es una “sala” donde hay múltiples mesas de juego.

• Los jugadores pueden unirse a diferentes mesas y se pueden jugar varios juegos al mismo tiempo con diferentes jugadores.

• Cuando los 4 jugadores se unen a la misma mesa, el juego comienza.

• Una vez iniciado el juego, el juego pasa a la primera ronda.

• Un juego tiene varias rondas hasta que se determina un ganador.

• Al final de cada ronda, se determina que 1 jugador será el ganador de la ronda. Cuando un jugador gana una ronda, se suma 1 punto a su puntuación.

• Por ahora, el ganador se determinará simplemente indicando qué jugador ganó.

• En el futuro, habrá reglas más específicas sobre cómo ganar, pero podemos ignorar las reglas específicas por ahora.

• Por ahora, el sistema debe permitir que un jugador sea declarado ganador.

• El ganador no debe ser aleatorio, debe ser “arbitrario”, es decir, podemos especificar explícitamente qué jugador ha ganado.

• Sólo hay 1 ganador por cada ronda.

• El juego termina cuando el primer jugador en alcanzar una puntuación total de 6 puntos, lo que significa que ganó 6 rondas en total.

• Cuando cualquier jugador alcanza una puntuación de 6, el juego termina y el ganador es el jugador que alcanzó 6 puntos.

## Fase II - Torneo

• En un torneo, muchos jugadores compiten entre sí para determinar un ganador al final.

• Al inicio del Torneo, hay un total de 16 mesas. Con 4 jugadores en cada mesa, habrá 64 jugadores en la Primera ronda del torneo.

• Para un Torneo, una ronda consiste en el inicio y finalización de todos los juegos en todas las mesas de esa ronda.

    •	En la ronda 1, habrá 16 mesas.

    •	En la ronda 2, habrá 8 mesas.

    •	En la ronda 3, habrá 4 mesas.

    •	En la ronda 4, habrá 2 mesas.

    •	En la ronda 5, habrá 1 mesa.

• Al comienzo de una ronda de torneo, a los jugadores se les deben asignar asientos en las mesas al azar.

• Cuando se asigna un asiento a un jugador, sólo este jugador puede sentarse allí y nadie más.

• Al final de cada ronda, la mitad de los jugadores de la ronda anterior quedarán eliminados.

• La eliminación estará determinada por las puntuaciones finales de los jugadores del partido que disputaron.

• De cada mesa, el ganador del juego y el segundo máximo anotador avanzarán a la siguiente ronda.

• Puntuaciones de ejemplo: Jugador 1: 6, Jugador 2: 5, Jugador 3: 4, Jugador 4: 3

• El jugador 1 y el jugador 2 avanzarán a la siguiente ronda del torneo.

• Si hay un empate por el segundo lugar, avanzará el jugador que haya alcanzado primero la segunda puntuación más alta.

• Puntuaciones de ejemplo: Jugador 1: 1, Jugador 2: 3, Jugador 3: 3, Jugador 4: 6

• El jugador 4 es el ganador por lo que avanzará primero.

• El jugador 2 y el jugador 3 están empatados en el segundo lugar,

• Entonces, pero el jugador 2 alcanzó 3 puntos en la ronda 3 del juego.

• y el jugador 3 alcanzó 3 puntos en la ronda 7 del juego,

• entonces el ganador del empate es el jugador 3

• Entonces el jugador 1 y el jugador 3 avanzarán para este juego.

• La ronda final del torneo es aquella en la que solo hay 1 mesa.

• En esta ronda final, el ganador de este juego es el ganador de todo el torneo.
