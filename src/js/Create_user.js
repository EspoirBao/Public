$(document).on('click', '#createAccount', function () {

    var username = $('#user_name').val()
    var telephone = $('#user_phone').val()
    var mail = $('#user_mail').val()
    var password = $('#user_pwd').val()
    var password_check = $('#user_pwd_check').val()


    var reg_phone = /^1\d{10}$/;
    var tag_phone = reg_phone.test(telephone)
    var reg_pwd = /^[a-zA-Z0-9]{6,}$/
    var tag_pwd = reg_pwd.test(password)
    var tag_check = $("#legalTextRow_check").is(':checked')

    if (tag_pwd == true && password == password_check) {
        if (tag_phone) {
            if (tag_check) {
                $.ajax({
                    type: 'GET',
                    url: `//${location.hostname}/Amazon/Create_user.php`,
                    data: {
                        username,
                        password,
                        mail,
                        telephone,
                    },
                    success: data => {
                        data = JSON.parse(data)
                        if (data.code == 0) {
                            layer.msg(data.msg);
                        }
                        if (data.code == 1) {
                            layer.msg(data.msg);
                        }
                    }
                })
            } else {
                layer.msg('请阅读使用条款及隐私声明');
            }
        } else {
            layer.msg('请输入正确的手机号码');
        }
    } else {
        layer.msg('请输入正确的密码,且2次密码一致');
    }


















})

