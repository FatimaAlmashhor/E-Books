const get_arr = (element) => document.querySelectorAll(element);
const get_one = (element) => document.querySelector(element);

const modal = get_one('#modal');
const login = get_one('#login');
const register = get_one('#register');

get_one('#create_account')
    .addEventListener('click', () => {
        login.classList.add('hidden');
        register.classList.remove('hidden');
    });
get_one('#login_in_existing_account')
    .addEventListener('click', () => {
        login.classList.remove('hidden');
        register.classList.add('hidden');
    })

get_arr('.login-btn').forEach(element => {
    element.addEventListener('click', (e) => {
        modal.classList.remove('hidden');
        login.classList.remove('hidden');
        console.log(get_one('#modal').classList);
    })
});

function closeModal() {
    modal.classList.add('hidden');
    login.classList.add('hidden');
    register.classList.add('hidden');
    console.log('close');
}