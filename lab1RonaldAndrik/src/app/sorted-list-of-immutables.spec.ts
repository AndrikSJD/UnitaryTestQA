import { Food } from './food';
import { SortedListOfImmutables } from './sorted-list-of-immutables';

//Prueba eliminando items de la lista
describe('Probando eliminar items', () => {

    //lista de comida
    let foodList: SortedListOfImmutables

    //Se ejecuta antes de cada prueba
    //Se añaden items a la lista
    beforeEach(() => {
        foodList = new SortedListOfImmutables(null)
        foodList.add(new Food("Cereal", 129, 275, "Cereal.jpg"))
        foodList.add(new Food("Donut", 89, 129, "Donut.jpg"))
        foodList.add(new Food("Melon", 98, 159, "Melon.jpg"))
        foodList.add(new Food("Pie", 195, 275, "Pie.jpg"))
        foodList.add(new Food("Croissant", 106, 125, "Croissant.jpg"))
    });
    

    //Prueba #5: Eliminar un item de la lista
    //Verificar que el item se elimine de la lista
    //Lista de items a eliminar: Donut, Melon
    //Resultado = Se deben eliminar cada uno de los items de la lista brindada
    it('Comprobar que el item se elimine de la lista', () => {
        [
            new Food("Donut", 89, 129, "Donut.jpg"),
            new Food("Melon", 98, 159, "Melon.jpg")
        ].forEach(food => {
            foodList.remove(food)
            expect(foodList.checkAvailability(food)).toBe(false)
        }
        );
    });

    //Se ejecuta despues de cada prueba
    //Se elimina la lista de comida
    afterEach(() => {
        foodList.removeList(foodList);
    }
    );


});
