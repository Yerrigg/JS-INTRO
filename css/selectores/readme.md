---
autor: Yerridev
lang: css
---

# Selectores en CSS
---

### Selectores convinado **desendiente**
Se aplica para elementos hijos y para otros elementos dentro del padre. Sin importar el nivel. Siempre aplica el estilo.

### Selector tipo child
Solo se les aplica a los que son desendientes directoros.
Se aplica utilizando el simbolo *>*
´´´css
.clase > elemento {
    /*estilo*/
}
´´´

### Selector adyacente
No se le aplica al elemento hijo. Si no al que esta a continuación(adyacente). solo al que esta junto.
Se aplica utilziando el simbolo *+*
Ojo que tienen que tener el mismo padre.

### Selector hermano (sibling)
Se les aplica a todos los elementos que esten al mismo nivel del elemento selecionado. Menos al hijo.
Se aplica utilizando el simbolo *~*


## Pseudo Elementos
Para configurar el estdo de un elemento. Se usa para acciones especificas en particular.
Se aplica utiliznado el simbolo *::*

1. **::selection** -> Cambiar el estilo cuando seleccionamos texto.
2. **::first-line** -> Cambiar el estilo de la primera linea de un parrafo.
3. **::first-letter** -> Cambiar el estilo de la primera letra.
4. **::before** -> agregar estilo antes.
5. **::after** -> agregar estilo despues.
