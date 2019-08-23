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
}else{
    
}

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

