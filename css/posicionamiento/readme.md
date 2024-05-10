---
autor: yerri
lang: css
---
# Posicion en CSS

### Posicionamiento de Elementos CSS
---

```css
position: valor;
```

1. **Static:** -> Posición por defecto
2. **Relative:** -> Posicion normal + sobrepon respecto a la direccion que le des (left, right, top, bottom).
3. **Fixed:** -> Se queda de manera fija.
4. **Absolute:** -> Su pocisicon depende del contendor padre en el que estes. El padre tiene que estar en posición relative.
5. **sticky:** -> Funciona de manera relativa de inicio, cuando sale del viewport de manera fija(fixed).
    ```css
    position: -webkit-sticky;
    /*para que fuicione en safari - no en exploret*/
    ```

### Propiedad z-index
Ejes de posisicon de delementos.(x,y z)
En el z -> se superponen segundo el orden. Depende:
- Elementos no posicionaodos y posicionados.
- Se puede realizar con respecto a posicionamiento absoluto de un elemento. Obviamente para poder sobreponer.

### Propiedad overflow
Sirver para el desvordamiento de un bloque. Todo el contenido que no cape en el se puede solucionar con esta propiedad. La cual tiene diferentes estados:
1. **visible:** -> Propeidad por defecto.
2. **hidden:** -> Solo muestra el contenido que cape en el, dado por sus dimenciones.
3. **scroll:** -> Añade un scroll al bloque(contenedor). Para así mostrar todo el contenido.
4. **auto:** -> Pone el scroll en caso necesario.

>[!info]
>Overflow solo funciona si establecemos un alto(*height*) a nuestro contendeor


### Propiedad float
Ubica a la derecha(*right*) o izquierda(*left*) de su contenedor.
Todo estas hubicaciones que le podemos dar se realiza en el contenedor, pero para limpiar y ubicar un nuevo bloque debajo utilizamos:
```css
    clear: both;
```

