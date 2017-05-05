$.ajax({
    url: "https://quarkbackend.com/getfile/karbassi/user-profiles",
    type: "GET",
    success: function (response) {
        console.log(response);
        for (var i = 0; i < response.length; i++) {
            var user = response[i];
            updateUserInformation(i, user);
        }
    }
});

function updateUserInformation(index, user) {
    var $user = $('.user-profile').eq(index);

    $user.find('img').attr('src', user.picture);

    $user.find('h3').text(user.name.first + " " + user.name.last);

    $user.find('strong').text(user.company.name);

    $user.find('.street').text(user.company.address.street);

    $user.find('.city').text(user.company.address.city);

    $user.find('.state').text(user.company.address.state);

    $user.find('.zip').text(user.company.address.zip);

    $user.find('a').text(user.company.email)
        .find('a').attr('herf', "mailto:" + user.company.email);

    $user.css('background-color', user.favoriteColor);

}
