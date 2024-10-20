//Obtenemos información almacenada en el localStorage
var items = localStorage.getItem("productos");
//Convertimos los datos items(viene en cadena) en tipo array 
items = items ? JSON.parse(items):[];

showItems();

function addItem(){
    let item = {
        "nombre": document.getElementById('nombreItem').value,
        "precio": document.getElementById('precioItem').value
    };

    if(item.nombre && item.precio)
    {
        items.push(item);
        showItems();
    }
}

function showItems(){
    document.getElementById('nombreItem').value = '';
    document.getElementById('precioItem').value = '';

    let html = "";
    if(items.length > 0){
        let suma = 0;
        items.forEach((element, index) => {
            suma = suma + Number(element.precio);
            html += `<div class="col-5 m-1">${element.nombre}</div>`;
            html += `<div class="col-5 m-1">${element.precio}</div>`;
            html += `<div class="col-1 m-1"><button class="btn btn-danger" onClick="deleteItem(${index})">X</button></div>`;
        }); 
        html += `<div class="col-5 m-1 text-right text-uppercase font-weight-bold"> Total</div> <div class="col-5 m-1 text-right font-weight-bold"> ${suma}</div>`;
        //Guardar datos de la clave productos en el localStorage
        localStorage.setItem('productos', JSON.stringify(items));
        document.getElementById('listItems').innerHTML = html;
    }
}

function deleteItem(item){
    console.log(item);
    items.splice(item,1);
    showItems();
}