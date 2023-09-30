import { Entree } from './entree';
import { Food } from './food';
import { Restaurant } from './restaurant';
import { SortedListOfImmutables } from './sorted-list-of-immutables';

//Pruebas: Añadir un envío de comida al inventario en la funcion addShipmentToInventory
describe('Testing restaurant to add shipment to inventory', () => {
  let restaurant: any; 
  let foodList: SortedListOfImmutables
  //Se ejecuta antes de cada prueba
  //Se crea un nuevo restaurante y una nueva lista de comida
  beforeEach(() => {
    restaurant = new Restaurant("Jhonys", 1000);
    foodList = new SortedListOfImmutables(null)
  });
  
  //Prueba #1: Añadir un envío de comida al inventario
  //Verificar que el tamaño del inventario sea el esperado después de añadir un envío de comida
  //Lista de comida: Cereal, Donut, Melon, Pie, Croissant
  //Resultado = Tamaño del inventario: 5
  it('Comprobar si los artículos se añaden al inventario chequeando el tamaño', () => {
    foodList.add(new Food("Cereal", 129, 275, "Cereal.jpg"))
    foodList.add(new Food("Donut", 89, 129, "Donut.jpg"))
    foodList.add(new Food("Melon", 98, 159, "Melon.jpg"))
    foodList.add(new Food("Pie", 195, 275, "Pie.jpg"))
    foodList.add(new Food("Croissant", 106, 125, "Croissant.jpg"))
    restaurant.addShipmentToInventory(foodList)
    expect(restaurant.inventory.getSize()).toBe(5)
  });

  //Se ejecuta despues de cada prueba
  //Se elimina el restaurante y la lista de comida
  afterEach(() => {
    restaurant = null;
    foodList.removeList(foodList);
  });

  //Prueba #2: Añadir un envío de comida al inventario
  //Verificar que el envio de comida no se añada al inventario si el precio de los productos supera el dinero del restaurante
  //Lista de comida: Bacon, Hashbrowns, Waffle, Egg
  //Resultado = La funcion retorna false, es decir, el envio de comida no se añade al inventario
  it('Comprobar cuando el precio de los productos supera el dinero del restaurante', () => {
    let foodList: SortedListOfImmutables = new SortedListOfImmutables(null)
    foodList.add(new Food("Bacon", 89, 185, "Bacon.jpg"))
    foodList.add(new Food("Hashbrowns", 900, 195, "Hashbrowns.jpg"),)
    foodList.add(new Food("Waffle", 178, 350, "Waffle.jpg"))
    foodList.add(new Food("Egg", 47, 89, "Egg.jpg"))
    expect(restaurant.addShipmentToInventory(foodList)).toEqual(false);
  });
});



//Prueba: crear una orden con un pedido en especifico
describe('Testing restaurant to place a new order', () => {
    let restaurant: any;
    let foodList: SortedListOfImmutables;
    let entree: Entree;
  
//Este es ejucutado antes de cada prueba
//Se crea un nuevo restaurante y una nueva lista de comida
    beforeEach(() => {
      restaurant = new Restaurant("Andriks", 10000);
      foodList = new SortedListOfImmutables(null);
      foodList.add(new Food("Egg", 47, 89, "Egg.jpg"),)
      entree = new Entree("Egg", foodList);
    });

//Prueba #3 verifica si el restaurante puede 
//realizar un pedido correctamente cuando el Entree 
//necesario para la orden está disponible en el inventario.
//Si el restaurante puede realizar el pedido con éxito, se espera que placeOrder devuelva true.
    it('debería realizar el pedido si el inventario está disponible', () => {
      restaurant.addShipmentToInventory(foodList)
      expect(restaurant.placeOrder(entree)).toBeTrue();
    });

//Se ejecuta despues de cada prueba
//Se elimina el restaurante y la lista de comida
    afterEach(() => {
      restaurant = null;
      foodList.removeList(foodList);
    });

//Prueba #4 verifica si cantidad de efectivo del restaurante aumenta correctamente 
//después de realizar un pedido. Después de realizar un pedido, se espera que 
//la cantidad de efectivo en el restaurante sea mayor que antes de realizar el pedido.
    it('debería aumentar la cantidad de efectivo después de realizar un pedido', () => {
      restaurant.addShipmentToInventory(foodList)
      let initialCash = restaurant.getCash();
      restaurant.placeOrder(entree);
      expect(restaurant.getCash()).toBeGreaterThan(initialCash);
    });
});
