const API_URL = 'http://localhost:3000/api';


function ContactForm() {

    async function handleSubmit(e) {
e.preventDefault();
const form = e.target;
// Собираем все поля формы в объект { name: ..., email: ..., ... }
const data = Object.fromEntries(new FormData(form));
try {
const res = await fetch(`${API_URL}/orders`, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(data),
});
const result = await res.json();
if (!res.ok) { // статус не 2xx (например, 400)
alert('Ошибка: ' + result.error);
return;
}
alert(`Заявка №${result.id} принята!`);
form.reset();
} catch (err) { // сервер выключен или недоступен
alert('Сервер недоступен. Запущен ли agromarket-server?');
}
}

 function handleSubmit(e) {
 e.preventDefault(); // не перезагружать страницу
 alert('Заявка отправлена! Мы свяжемся с вами.');
 e.target.reset(); // очистить поля
 }
 return (
 <section id="contact" className="contact">
 <h2>Оптовая заявка</h2>
 <form className="contact-form" onSubmit={handleSubmit}>
 <label htmlFor="name">Имя / организация</label>
 <input id="name" name="name" type="text" required />
 <label htmlFor="email">Email</label>
 <input id="email" name="email" type="email" required
 placeholder="farmer@mail.kz" />
 {/* ЗАДАНИЕ: поле телефона — type="tel", placeholder "+7 7XX XXX XX XX" */}
 {/* ЗАДАНИЕ: объём заказа в кг — type="number", min="10", required */}
 {/* ЗАДАНИЕ: желаемая дата доставки — type="date" */}
 <label htmlFor="comment">Комментарий</label>
 <textarea id="comment" name="comment" rows="4" />
 <button type="submit">Отправить заявку</button>
 </form>
 </section>
 );
}
export default ContactForm;
