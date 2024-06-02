precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

function addItem(){
    cantidadSpan = document.querySelector(".cantidad");
    valorSpan = document.querySelector(".valor-total");

    actCantidadSpan = cantidadSpan.innerHTML;
    nuevaCantidadSpan = parseInt(actCantidadSpan) + 1;
    cantidadSpan.innerHTML = nuevaCantidadSpan

    totalSpan = nuevaCantidadSpan * precio
    valorSpan.innerHTML = totalSpan
}

function removeItem(){
    cantidadSpan = document.querySelector(".cantidad");
    valorSpan = document.querySelector(".valor-total");

    actCantidadSpan = cantidadSpan.innerHTML;
    nuevaCantidadSpan = parseInt(actCantidadSpan) - 1;
    cantidadSpan.innerHTML = nuevaCantidadSpan

    totalSpan = nuevaCantidadSpan * precio
    valorSpan.innerHTML = totalSpan
}


document.addEventListener('DOMContentLoaded', function() {

    btnAddItem = document.querySelector(".btn-add");
    btnRemoveItem = document.querySelector('.btn-remove');

    btnAddItem.addEventListener('click', addItem);
    btnRemoveItem.addEventListener('click', removeItem);
    
});