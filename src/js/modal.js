const get_arr = (element) => document.querySelectorAll(element);
const get_one = (element) => document.querySelector(element);

const modal = get_one('#modal');
const login = get_one('#login');
const register = get_one('#register');
const image_gallary = get_one('#image-gallery');

// close the modal
get_one('#close_modal').addEventListener('click', () => {
    login.classList.add('hidden');
    register.classList.add('hidden');
    image_gallary.classList.add('hidden');
    modal.classList.add('hidden');
})

//for show the sign up
get_one('#create_account')
    .addEventListener('click', () => {
        login.classList.add('hidden');
        register.classList.remove('hidden');
    });



// for show the login 
get_one('#login_in_existing_account')
    .addEventListener('click', () => {
        login.classList.remove('hidden');
        register.classList.add('hidden');
    })

// for all the btn that need to one the login modal 
get_arr('.login-btn').forEach(element => {
    element.addEventListener('click', (e) => {
        modal.classList.remove('hidden');
        login.classList.remove('hidden');
        console.log(get_one('#modal').classList);
    })
});

let current_image = null;
const images = get_arr('.book_gallary img');

const create_image = (e) => {
    let src = e.getAttribute('src')
    let img = document.createElement('img');
    img.setAttribute('src', src);
    image_gallary.append(img)
}
// for gallary image 
images.forEach((element, index) => {
    current_image = index;
    element.addEventListener('click', (e) => {
        image_gallary.classList.remove('hidden')
        modal.classList.remove('hidden')
        create_image(e.target)

    })
});

//for show the the previs image
get_one('#left')
    .addEventListener('click', () => {
        if (current_image !== 0) {
            // image_gallary
            console.log(images[current_image]);
            create_image(images[current_image])
        }
    });