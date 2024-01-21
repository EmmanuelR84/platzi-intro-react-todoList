import React from "react";

//funcion para localStorage
const useLocalStorage = (itemName, initialValue) => {

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  //si localStorage esta vacio
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify([initialValue]))
    parsedItem = [initialValue];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  };

  const [item,setItem] = React.useState(parsedItem);

  // Funcion que actualiza el estado y al localSotorage al mismo tiempo
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  //retornamos el estado item y la funcion saveItem(pq esta funcion devuelve el setItem de react y ell de localStorage), q es lo que vamos a necesitar
  return [item, saveItem];
};


export { useLocalStorage };