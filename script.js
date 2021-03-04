import { inputCheck } from './inputCheck.js';

const form = document.getElementById('form');
export const user = document.getElementById('user');
export const email = document.getElementById('email');
export const password = document.getElementById('password');
export const checkPassword = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    inputCheck();
})