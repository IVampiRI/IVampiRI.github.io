function check_form() {
    var pattern = new RegExp("^([0-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-(19|20)\\d\\d (0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$");
    var messageElement = document.getElementById('message');

    if (document.getElementById('datetimefield').value.match(pattern)) {
        var datetimeString = document.getElementById('datetimefield').value;
        var datetimeParts = datetimeString.split(/[- :]/);
        var day = parseInt(datetimeParts[0], 10);
        var month = parseInt(datetimeParts[1], 10) - 1;
        var year = parseInt(datetimeParts[2], 10);
        var hours = parseInt(datetimeParts[3], 10);
        var minutes = parseInt(datetimeParts[4], 10);
        var seconds = parseInt(datetimeParts[5], 10);

        if (isValidDateTime(year, month, day, hours, minutes, seconds)) {
            messageElement.textContent = 'Формат корректен, данные корректны';
        } else {
            messageElement.textContent = 'Формат корректен, но данные некорректны';
        }
    } else {
        messageElement.textContent = 'Формат некорректен, данные не проверяются';
    }
}

function isValidDateTime(year, month, day, hours, minutes, seconds) {
    if (year < 1000 || year > 9999 || month < 0 || month > 11 || day < 1 || day > 31 || hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
        return false;
    }

    return true;
}