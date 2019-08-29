
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



// ---------------------------------------------头部










function Rendering(){
    $.ajax({
        url: `//${location.hostname}/Amazon/Productlist.php`,
        data: {
            id,
        },
        dataType:'json',
        success: data => {
            var html='';
           data.data.forEach(({user_id,commodity_id,commodity_price,commodity_num,commodity_name,id}) => {
                html+=`
                <div class="box" id="${id}">
                <div class="img"><img src="../img/product_details/${commodity_id}/01.jpg" height="100px"width="100px"></div>
                <div class="box_content">
                    <span>${commodity_name}</span>
                    <ul>
                        <li>现在有货</li>
                        <li><img src="../img/flag_usa.png" alt=""></li>
                        <li>销售和发货商:<a>亚马逊美国</a></li>
                    </ul>
                    <div class="Option">
                        <a class="first_a">删除</a>
                        <a href="">移入收藏夹</a>
                    </div>
                </div>
                <div class="price">
                ￥ <span class="price_span">${commodity_price}</span>
                </div>
                <div class="Quantity" num="${commodity_num}">
                    <select name="" class="select">
                         <option value="${commodity_num}">${commodity_num}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
             </div>
                
                
                `
                $('#bigbox').html(html);

                
            });
        }

        })



    
}









var id = getCookie('User_name')
Rendering()

if(getCookie('User_name')){
    
}else{
    location.href="./login.html"
}

   $(document).on('click','.first_a',function(){
       var id = $(this).parents('.box').attr('id')
       $.ajax({
        url: `//${location.hostname}/Amazon/DeleteProduct.php`,
        data: {
            id
        },
        dataType:'json',
        success: data => {
           if(data.code==1){
            layer.msg(data.msg)
           }else{
            layer.msg(data.msg)
           }
           $(this).parents('.box').remove()
        }
        })
        

   })
  
     
   $(document).on('change','.select',function(){
    var commodity_num=$(this).val();
    var id = $(this).parents('.box').attr('id');
    $.ajax({
        url: `//${location.hostname}/Amazon/ProductUp.php`,
        data: {
            id,
            commodity_num,
            
            
        },
        dataType:'json',
        success: data => {
           if(data.code==1){
            layer.msg(data.msg)
           }else{
            layer.msg(data.msg)
           }
        }

        })



   })

       
$(document).on('click','#Settlement_button',function(){

    location.href='./address_select.html'
})





