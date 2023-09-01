document.addEventListener('DOMContentLoaded', function() {
        let avatar = document.getElementById('avatar');
        let fullname = document.getElementById('name');
        let username = document.getElementById('username');
        let gender = document.getElementById('gender');
        let email = document.getElementById('email');
        let dob = document.getElementById('dob');
        let address = document.getElementById('address');
        let btn = document.getElementById('btn');

    const url = "https://randomuser.me/api/";

    function updateProfile(profile) {
        avatar.src = profile.picture.medium;
        fullname.innerText = profile.name.title + " " + profile.name.first + " " + profile.name.last;
        username.innerText = profile.login.username;
        gender.innerText = profile.gender;
        email.innerText = profile.email;
        dob.innerText = profile.dob.date;
        address.innerText = profile.location.street.name + ", " + profile.location.city + ", " + profile.location.state + ", " + profile.location.postcode + " - " + profile.location.country;

        console.log(profile)
        
    }

    function UpdateUser() {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const user = data.results[0];
            updateProfile(user);
        })
        .catch((error) => console.log(error));
    }

    btn.addEventListener('click', UpdateUser);
});