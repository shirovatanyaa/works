let text = document.querySelector(`html-text`);


    let textCount = text.length;
    console.log(`1. Количество символов в тексте: ${text.length}`);



    let result = text.replace(/; /n, '');
    console.log(`2. Текст с переносами строк: \n ${result}`);



    let substring = result.trim();
    console.log(`3. Текст с удалёнными пробелами: ${substring}`);



    let newText = result.substring(28,50);
    console.log(`4. Извлечение подстроки: ${newText}`);



    let replacedText = newText.replace(`клён`, `дубе`);
    console.log(`5. Замена "клён" на "дубе": ${replacedText}`);



    let replacedText2 = result.toUpperCase()
    console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);



    let replacedText3 = result.replaceAll(`клён`, `дуб`)
    console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);



    let index = text.indexOf(`моря`)
    console.log(`8. Индекс первого вхождения "моря": ${index}`);



    let modifiedText = replacedText.charAt(0).toUpperCase() + replacedText.slice(1);
    console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);

