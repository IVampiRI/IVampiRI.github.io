function clockTimer(timeZone, clockId, dayOfWeekId) {
    var date = new Date();
    date.setHours(date.getHours() + timeZone);
  
    var time = [date.getHours(), date.getMinutes(), date.getSeconds()];
    var dayOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    var days = date.getDay();
  
    if (time[0] < 10) { time[0] = "0" + time[0]; }
    if (time[1] < 10) { time[1] = "0" + time[1]; }
    if (time[2] < 10) { time[2] = "0" + time[2]; }
  
    var current_time = [time[0], time[1], time[2]].join(':');
    var clock = document.getElementById(clockId);
    var day = document.getElementById(dayOfWeekId);
  
    clock.innerHTML = current_time;
    day.innerHTML = dayOfWeek[days];
  
    setTimeout(function() {
      clockTimer(timeZone, clockId, dayOfWeekId);
    }, 1000);
  }

clockTimer(3, 'clock1', 'dayOfWeek1');
clockTimer(9, 'clock2', 'dayOfWeek2');
clockTimer(1, 'clock3', 'dayOfWeek3');
clockTimer(-5, 'clock4', 'dayOfWeek4');
clockTimer(-8, 'clock5', 'dayOfWeek5');