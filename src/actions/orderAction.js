export function addOrder(dish){
  return{
    type: "ADD_ORDER",
    payload: dish
 }}

 export function fetchOrder(){
    return{
      type: "FETCH_ORDER",
      payload: JSON.parse(localStorage.getItem("order"))
    }
 }
