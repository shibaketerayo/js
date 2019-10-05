// Переменные
let userLogin = 'admin';
let userPassword = 'm4ngo1zh4ackz0r';
let loginName = prompt('write Login');
let Login = 'Пользователь вошёл!';

// Система образования
if (loginName === userLogin) {
    let loginPassword = prompt('write password');
    if (loginPassword === userPassword) {
        alert('Здарова, проходите!');
    } else if (loginPassword === null) {
        alert('Человек отменил это!');
    } else {
        alert('Закрыто по причине: incorect password');
    }
} else if (loginName === null) {
    alert('Человек отменил это!');
} else  {
    alert('Закрыто по причине: incorect login');
}
// Консоль говорит что всё ок
console.log(Login);