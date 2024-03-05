var delay_popup = 1000;
setTimeout("document.getElementById('overlay').style.display='flex'", delay_popup);
document.getElementById('subscribeinp').addEventListener('click', function() {
document.getElementById('email').style.display = 'block';
document.getElementById('email').style.margin = 'auto';  // Добавляем центрирование строки ввода
document.getElementById('subscribeinp').style.display = 'none';
document.getElementById('subscribe').style.display = 'block';
document.getElementById('subscribe').style.margin = 'auto';  // Добавляем центрирование второй кнопки
});

var timeoutID;

document.getElementById('subscribe').addEventListener('click', function() {
var emailInput = document.getElementById('email');

if(isValidEmail(emailInput.value)) {
    var email = emailInput.value;
    document.querySelector('.vvodmail').innerHTML = "<h2>Спасибо за подписку!</h2><p>На Ваш адрес " + email + " будет направлено письмо</p>";
    document.getElementById('resultMessage').innerText = "Подписка выполнена на " + email;
    document.getElementById('resultMessage').style.display = 'block';
    timeoutID = setTimeout(closeModal, 10000); // закрыть окно автоматически через 10 секунд
} else {
    alert('Пожалуйста, введите корректный email');
}
});

function isValidEmail(email) {
return /\S+@\S+\.\S+/.test(email);
}

function closeModal() {
document.getElementById('overlay').style.display = 'none';
}

document.addEventListener('keydown', function(event) {
if (event.key === "Escape") {
    closeModal();
}
});
