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