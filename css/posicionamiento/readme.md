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



