$(document).on('click', '#createAccount', function () {
    location.href = "./Create_user.html";
})

$(document).on('click', '#login_button', function () {

    var username =$('#user_name').val()
    var password =$('#user_pwd').val()
    console.log(username,password)

    $.ajax({
        type: 'GET',
        url: `//${location.hostname}/Amazon/login.php`,
        data: {
            username,
            password,
        },
        success: data => {
            data = JSON.parse(data)
            if (data.code == 0) {
                layer.msg(data.msg);
            }
            if (data.code == 1) {
                setCookie('User_name',username,3)
                location.href = "../home.html";
            }
        }
    })

})