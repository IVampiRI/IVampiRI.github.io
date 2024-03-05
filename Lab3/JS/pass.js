function checkpass(password) {
    // Критерии для проверки сложности пароля
    let score = 0;
    let response = '';

    if (password.length < 5) {
        response += 'Длина пароля менее 5 символов. Отменяет остальные критерии.\n';
        return { score: score, response: response };
    } else if (password.length >= 5 && password.length <= 9) {
        score += 1;
    } else if (password.length >= 10 && password.length <= 12) {
        score += 2;
    } else {
        score += 3;
    }

    // Проверка наличия символов
    const specialChars = new Set('~!#$%^&*()_-+=?/,.[]{}<>|');
    let hasLetters = false;
    let hasNumbers = false;
    let hasSpecialChars = false;
    
    for (let char of password) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            hasLetters = true;
        } else if (char >= '0' && char <= '9') {
            hasNumbers = true;
        } else if (specialChars.has(char)) {
            hasSpecialChars = true;
        }
    }
    
    let additionalCharsCount = -1;
    if (hasLetters) {
        additionalCharsCount++;
    }
    if (hasNumbers) {
        additionalCharsCount++;
    }
    if (hasSpecialChars) {
        additionalCharsCount++;
    }
    score += Math.min(additionalCharsCount, 2);

    // Проверка регистра букв
    let lowercase = false;
    let uppercase = false;
    for (let char of password) {
        if (char >= 'a' && char <= 'z') {
            lowercase = true;
        } else if (char >= 'A' && char <= 'Z') {
            uppercase = true;
        }
    }
    if (lowercase && uppercase) {
        score += 1;
    }

    // Проверка наличия не буквенных и не цифровых символов
    const nonAlphanumericCharsCount = password.split('').filter(char => !(/[a-zA-Z0-9]/).test(char)).length;
    if ((nonAlphanumericCharsCount / password.length) > 0.3) {
        score += 2;
    }

    // Проверка на повторяющиеся буквенные или цифровые сочетания
    let consecutiveCharsLessThan3 = true;

    for (let i = 0; i < password.length - 2; i++) {
        if ((password[i].match(/[a-z]/i) && password[i+1].match(/[a-z]/i) && password[i+2].match(/[a-z]/i)) ||
            (password[i].match(/\d/) && password[i+1].match(/\d/) && password[i+2].match(/\d/))) {
            consecutiveCharsLessThan3 = false;
            break;
        }
    }

    if (consecutiveCharsLessThan3) {
        score += 2; // Добавляем +2 к счету, если все буквенно-циферные сочетания имеют длину меньше 3 символов
    }
    return { score: score, response: response };
}
function showPassword() {
    const password = document.getElementById('password').value;
    document.getElementById('visiblePassword').innerText = `Пароль: ${password}`;
}

function checkPassword() {
    const password = document.getElementById('password').value;
    const result = checkpass(password);
    
    document.getElementById('result').innerText = `Итого баллов ${result.score} \nИспользованные критерии \n${result.response}`;
}