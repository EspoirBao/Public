
var  user_name=getCookie('User_name');
$.ajax({
    type: 'GET',
    dataType: 'json',
    url: `//${location.hostname}/Amazon/addresslist.php`,
    data: {
        user_name,
    },
    success: data => {
        data.data.forEach(({address,telephone,name,id}) => {
            html='';
            html+=`
            <div class="detail_right_box" id="${id}">
                            <span>已存地址</span>
                            <div>详细地址</div>
                            <p>${address}</p>
                            <div>联系人姓名</div>
                            <p>${name}</p>
                            <div>联系电话</div>
                            <p>${telephone}</p>
                            <p class="derail_p">
                                
                                <button class="delete">删除</button>
                                
                            </p>
                            <button class="payment">付款</button>
                        </div>
            `
            $('#detail_right').html(html);
        });
    }
})


$(document).on('click','#button',function(){
    
   
   var  address=$('#address').val();
   var  name=$('#name').val();
   var  telephone=$('#telephone').val();

    $.ajax({
    type: 'GET',
    dataType: 'json',
    url: `//${location.hostname}/Amazon/addressAdd.php`,
    data: {
        user_name,
        name,
        address,
        telephone
    },
    success: data => {
        layer.msg(data.msg)

        location.reload();
    }
})
})


$(document).on('click','.delete',function(){
    var id=$(this).parents('.detail_right_box').attr('id');

    $.ajax({
        url: `//${location.hostname}/Amazon/addressDEL.php`,
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

           $(this).parents('.detail_right_box').remove()

        }
    })
})
$(document).on('click','.payment',function(){
    location.href="./pay.html"
})









