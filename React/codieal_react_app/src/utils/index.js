import { string } from 'prop-types';

export * from './constants'

export const setItemLocalStorage = (key,value)=>{
    if(!key || !value){
        console.error('Cannot store in LS');
    }

    const valueToStore = typeof value !== string ? JSON.stringify(value):value;

    localStorage.setItem(key,valueToStore);
}

export const getItemLocalStorage = (key)=>{
    if(!key){
        console.error('Cannot get item from LS');
    }

    return localStorage.getItem(key);
}

export const removeItemLocalStorage = (key)=>{
    if(!key){
        console.error('Cannot remove item from LS');
    }

    localStorage.removeItem(key);
}

export const getFormBody = (params)=>{
    let formBody = [];

    for(let property in params){
        let encodedKey = encodeURIComponent(property); //'user name' => user%20name
        let encodedValue = encodeURIComponent(params[property]); //'hari hara' =>'hari%20hara'

        formBody.push(encodedKey+'='+encodedValue);
    }

    return formBody.join('&');
}