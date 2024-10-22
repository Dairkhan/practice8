// 1. Подсветить все слова длиннее 8 символов
const paragraph = document.getElementById('text');
let text = paragraph.innerText;

// 2. Добавить ссылку в конец текста
const link = document.getElementById('sourceLink');
link.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html";

// 3. Разделить предложения на новые строки
text = text.replace(/\.\s+/g, '.<br>');

// 4. Заменить все знаки вопроса на 🤔 и восклицательные знаки на 😲
text = text.replace(/\?/g, '🤔').replace(/\!/g, '😲');

// 5. Подсветить все слова длиннее 8 символов
const words = text.split(' ');
const highlightedText = words.map(word => {
    if (word.length > 8) {
        return `<span class="highlight">${word}</span>`;
    }
    return word;
}).join(' ');

// Обновить содержимое абзаца
paragraph.innerHTML = highlightedText;

// 6. Посчитать количество слов
const wordCount = words.length;
document.getElementById('wordCount').innerText = `Word Count: ${wordCount}`;
