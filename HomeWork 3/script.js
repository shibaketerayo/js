  
const logins = ["Mango", "Poly", "Aj4x1sBozz", "Kytem"];

const input = prompt('Введите логин')

const isLoginValid = function(login) {
    if (input.length >= 4 && input.length <= 16) {
        return true;
    } else {
        return false;
    }
};


const isLoginUnique = function(allLogins, login) {
    if (logins.indexOf( input ) === -1) {
        return true;
    } else {
        return false;
    }
};


const addLogin = function(allLogins, login) {
    if (isLoginValid(input)) {
        if(isLoginUnique(logins, input)) {
             logins.push(input);
             let succes = 'Логин успешно добавлен!';
             return succes;
        } else {
            let error = 'Такой логин уже используется другим пользователем!';
            return error;
        }
    } else if(isLoginValid(input) === false) {
        let error = 'Error! Логин должен быть от 4 до 16 символов!'
        return error;
    }
};

alert(addLogin(logins, input))