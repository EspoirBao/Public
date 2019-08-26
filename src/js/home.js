// 鼠标移入功能——————————————————————————————————————————————————————————————
$(document).on('mouseover','#tools_box1',function(){
    $('#tools_message').show()
    $(document).on('mouseleave','#tools_box1',function(){
        $('#tools_message').hide()
    })
})

$(document).on('mouseover','#tools_message',function(){
    $('#tools_message').show()
    $(document).on('mouseleave','#tools_message',function(){
        $('#tools_message').hide()
    })
})

$(document).on('mouseover','#nav_line_box',function(){
    $('#nav_content').show();
    $(document).on('mouseleave','#nav_line_box',function(){
        $('#nav_content').hide();
    })
})

$(document).on('mouseover','#nav_content',function(){
    $('#nav_content').show()
    $(document).on('mouseleave','#nav_content',function(){
        $('#nav_content').hide()
    })
})
$(document).on('mouseover','#nav_content_ul',function(){
    $('#nav_subcats').show();
    $(document).on('mouseleave','#nav_content_ul',function(){
        $('#nav_subcats').hide()
    })
})
$(document).on('mouseover','#nav_subcats',function(){
    $('#nav_subcats').show();
    $(document).on('mouseleave','#nav_subcats',function(){
        $('#nav_subcats').hide();
    })
})
$(document).on('mouseover','.top_img',function(){
    
    $(this).children('.top_img_shadow').show()
    $(document).on('mouseleave','.top_img',function(){
        $(this).children('.top_img_shadow').hide()
    })
})
// 鼠标移入功能——————————————————————————————————————————————————————————————




// 用户登陆判断——————————————————————————————————————————————————————
$(document).on('click','#tools_message_button',function(){
    location.href="./html/login.html";
})

if(getCookie('User_name')){
    var User_name=getCookie('User_name')
    $('#tools_line1').html(function(){
        return '您好,'+User_name
     })
     $('#nav_a a').first().html(function(){
         return User_name+'的亚马逊'
     })
     $('#no_login').hide()
     $('#tools_text').show()
}else{
    $('#no_login').show()
     $('#tools_text').hide()
}
$(document).on('click','.Exit_account',function(){
    removeCookie('User_name')
})


// 用户登陆判断——————————————————————————————————————————————————————

// layui轮播图————————————————————————————————






