document.getElementById('calculate').onclick = function() {
    const birthdayInput = document.getElementById('birthday').value;
    const errorMessage = document.getElementById('error-message');
    const result = document.getElementById('result');

    // скрыла сообщение об ошибке
    errorMessage.style.display = 'none';
    result.textContent = '';

    // показывает сообщение, если дата не введена
    if (!birthdayInput) {
        errorMessage.style.display = 'block';
        return;
    }

    const today = new Date();
    const birthday = new Date(today.getFullYear(), new Date(birthdayInput).getMonth(), new Date(birthdayInput).getDate());

    //  рассчитываем на следующий год, если в этом уже прошло др
    if (birthday < today) {
        birthday.setFullYear(today.getFullYear() + 1);
    }

    const timeDiff = birthday - today;
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    // опеределение склонения слова, в соответствии с результатом
    let dayWord;
    if (daysDiff % 10 === 1 && daysDiff % 100 !== 11) {
        dayWord = 'день';
    } else if ([2, 3, 4].includes(daysDiff % 10) && ![12, 13, 14].includes(daysDiff % 100)) {
        dayWord = 'дня';
    } else {
        dayWord = 'дней';
    }

    result.textContent = `До вашего дня рождения осталось ${daysDiff} ${dayWord}.`;
};

