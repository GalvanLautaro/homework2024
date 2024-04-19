function cantidadHijos() {
    let caja1 = document.getElementById('caja1')
    alert('La cantidad de hijos del div 1 es de ' + caja1.childNodes.length)

    let caja2 = document.getElementById('caja2') 
    alert('La cantidad de hijos del div 2 es de ' + caja2.childNodes.length)
}

function cantidadNodosElemento() {
    let caja1 = document.getElementById('caja1')
    alert('La cantidad de hijos de tipo elemento del div 1 es de ' + caja1.children.length)

    let caja2 = document.getElementById('caja2')
    alert('La cantidad de hijos de tipo elemento del div 2 es de ' + caja2.children.length)
}