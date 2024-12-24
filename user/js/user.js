// const useForm = () => {
//     const forms = document.querySelectorAll(".form");
//     console.log(forms);

//     function setActiveForm(id) {
//         const activeForm = document.querySelector(`[data-id="${id}"]`);
//         forms.forEach((item) => {
//             item.classList.remove("active");
//             if (item === activeForm) {
//                 item.classList.add("active");
//             }
//         });
//     }

//     function create() {
//         const form = document.querySelector(".form.active");
//         const data = new FormData(form);
//         const userList = JSON.parse(localStorage.getItem("users")) || [];

//         const newUser = {};
//         data.forEach((value, key) => {
//             newUser[key] = value;
//         });

//         newUser.id = userList.length + 1;
//         userList.push(newUser);

//         localStorage.setItem("users", JSON.stringify(userList));

//         console.log("Form data saved:", userList);
//     }

//     function auth() {
//         // Реализуйте функцию авторизации здесь
//     }

//     document.addEventListener("click", (e) => {
//         const curr = e.target;
//         const id = curr.id;
//         if (id === "login" || id === "register") {
//             e.preventDefault();
//             setActiveForm(id);
//         }
//     });

//     // Если вам нужно обрабатывать отправку формы, раскомментируйте этот код
//     forms.forEach((form) => {
//         form.addEventListener('submit', (e) => {
//             e.preventDefault();
//             if (form.dataset.id === 'register') {
//                 create();
//             } else if (form.dataset.id === 'login') {
//                 auth();
//             }
//         });
//     });
// };

// useForm();
// const form = document.querySelector('.form')
// const inp = form.querySelector('#fio')
// const out = document.querySelector('.out')
// const script = document.querySelector('.script')

// console.log(select.value);



// form.addEventListener('submit', e => {
//     e.preventDefault()
//     const inpValue = inp.value
//     let name = null
//     let lastName = null
//     let patronics = null
//     if(inpValue !== ''){
//        [lastName, name, patronics] = inpValue.split(' ')
//        lastName = lastName || null
//        name = name || null
//        patronics = patronics || null
//        out.textContent = `${lastName} ${name} ${patronics}`
//        script.textContent = `Здравствуйте, меня зовут Олег, я представляю Т Банк, ${name} ${patronics}?`
//     }
// })
// console.log(form);
// console.log(inp);
