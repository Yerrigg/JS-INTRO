---
autor: YerriMouse
lang: css
---

# FLEXBOX
---
**Caja Flexible**. Permite organizar y aliniar elementos de manera flexible dentro de un contenedor.
- Ayuda a la creación de diseños responsivos y adaptables en páginas web.

### Propiedades flexbox
---
##### Flex-direction:
Para orientar la dirección de nuestro layout. Ya sea en columnas o filas.
1. **column** -> Dirección columna
2. **column-reverse** -> Se invierte el orden en columna.
3. **row** -> Valor por defecto. Se muestra en horizontal o en fila.
4. **row-reverse** -> Se invierte la fila. Aquí se pone a la derecha los elementos.

##### flex-wrap:
Para ajustar el contido cuando no quepan y puedan fluir en varias lineas, pero dentro del contenero. Ayuda a que no desvorte el contenedor flex.
1. **nowrap** -> Valor inicial
2. **wrap** -> Elementos flex son colocados en varias líneas.

##### flex-flow:
Concatena o une las propiedades *flex-direction* y *flex-wrap* en ese orden.

#### justify-content:
Para colocar nuestro contenido ya sea en la izquierda, derecha o centro. Como el navegador distribuye el espacio entre elementos
1. **flex-start** -> Inicio del layout, osea a la izquierda.
2. **center** -> Para centrar los elementos.
3. **flex-end** -> Hacia el final del layout, o la derecha.
4. **space-between** -> El primer elemento al incio, el último al final. El resto se ponen al centro.
5. **space-around** -> (alrededor) Los elementos tienen el mismo espacio a su alrededor.
6. **space-evenly** -> (igualmente) El espacio entre elemento es igual.

#### align-items
Para 
1. **flex-start** -> Inicia pero a la parte desde la parte superior
2. **center** -> Centra los elementos.
3. **stretch** -> Valor por defecto.
4. **baseline** -> Centra pero desde en la parte superior. Tine en cuenta el top de cada elemento. Depende del tamaño del elemento y el de la fuente.
5. **flex-end** -> Alinea en la parte inferior

