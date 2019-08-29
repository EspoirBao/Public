$(document).on('mouseover', '#tools_box1', function () {
    $('#tools_message').show()
    $(document).on('mouseleave', '#tools_box1', function () {
        $('#tools_message').hide()
    })
})

$(document).on('mouseover', '#tools_message', function () {
    $('#tools_message').show()
    $(document).on('mouseleave', '#tools_message', function () {
        $('#tools_message').hide()
    })
})

$(document).on('mouseover', '#nav_line_box', function () {
    $('#nav_content').show();
    $(document).on('mouseleave', '#nav_line_box', function () {
        $('#nav_content').hide();
    })
})

$(document).on('mouseover', '#nav_content', function () {
    $('#nav_content').show()
    $(document).on('mouseleave', '#nav_content', function () {
        $('#nav_content').hide()
    })
})
$(document).on('mouseover', '#nav_content_ul', function () {
    $('#nav_subcats').show();
    $(document).on('mouseleave', '#nav_content_ul', function () {
        $('#nav_subcats').hide()
    })
})
// -------------------页面基本功能



// 详情功能----------------------

$(document).on('click', '.contennt_right_li', function () {
    var id =$(this).attr("id")
    console.log(id)
    location.href = `../html/product_details.html?id=${id}`
})


// $.ajax({
//     type: 'GET',
//     url: 'http://localhost/Amazon/Commodity_list.php',
//     data: {

//     },
//     success: data => {
//         var html = '';
//         data = JSON.parse(data);

//         data.forEach(({ commodity_id, commodity_img, commodity_name, commodity_price, }) => {
//             html += `
//                 <li class="contennt_right_li" id="${commodity_id}">
//                 <div class="right_li_img"><img src="../img/Commodity_list/${commodity_img}.jpg" alt=""></div>
//                 <span class="right_li_line1">${commodity_name}</span>
//                 <span class="right_li_line2">￥${commodity_price} </span>
//                 <div class="right_li_line3">
//                         <div class="li_line3_prime"></div>
//                         <div class="right_li_line3">海外购满200元免运费 </div>
//                 </div>
//                 <img  class="right_li_line4" src="../img/ags_badge.png" alt="">
//             </li>`

//         });
//         // tbody.innerHTML = html;
//         $('#contennt_right_ul').html(html)
//     }
// })


















// layui.use('laypage', function () {
//     var laypage = layui.laypage;

//     //执行一个laypage实例
//     laypage.render({
//         elem: 'Multiple_columns' //注意，这里的 test1 是 ID，不用加 # 号
//         , count: 50 //数据总数，从服务端得到
//     });
// });










layui.use('laypage', function () {
    var laypage = layui.laypage;

    // 全局分类
    var label = 'T恤、Polo衫、背心';
    var order = 'commodity_id';
    var sort = 'ASC';

    renderList(1, true);

    $('#T-shirt').click(function () {
        label = 'T恤、Polo衫、背心';
        renderList(1, true);
    })

    $('#shirt').click(function () {
        label = '衬衫';
        renderList(1, true);
    })
    $('#jacket').click(function () {
        label = '夹克';
        renderList(1, true);
    })
    $('#trousers').click(function () {
        label = '长裤';
        renderList(1, true);
    })
    $('#shorts').click(function () {
        label = '短裤';
        renderList(1, true);
    })

    $('#price').click(function () {
        order = 'commodity_price';
        renderList(1, true);
    })

    $('#asc').click(function(){
        order = 'commodity_price';
        sort='ASC'
        renderList(1, true);
    })

    $('#desc').click(function(){
        order = 'commodity_price';
        sort='DESC'
        renderList(1, true);
    })

    function renderList(page = 1, tag) {
        $.ajax({
            url: `//${location.hostname}/Amazon/Commodity_list.php`,
            data: {
                page,
                size: 5,
                label,
                order,
                sort,

            },
            dataType: 'json',
            success: data => {
                var { data, total } = data;
                var html = '';
                data.forEach(({ commodity_id, commodity_img, commodity_name, commodity_price, }) => {
                                html += `
                                    <li class="contennt_right_li" id="${commodity_id}">
                                    <div class="right_li_img"><img src="../img/Commodity_list/${commodity_img}.jpg" alt=""></div>
                                    <span class="right_li_line1">${commodity_name}</span>
                                    <span class="right_li_line2">￥${commodity_price} </span>
                                    <div class="right_li_line3">
                                            <div class="li_line3_prime"></div>
                                            <div class="right_li_line3">海外购满200元免运费 </div>
                                    </div>
                                    <img  class="right_li_line4" src="../img/ags_badge.png" alt="">
                                </li>`
                    
                            });

                $('#contennt_right_ul').html(html);

                if (tag) {
                    laypage.render({
                        elem: 'Multiple_columns', //注意，这里的 test1 是 ID，不用加 # 号
                        limit: 5,
                        count: total * 1, //数据总数，从服务端得到
                        jump: function (obj, first) {
                            //obj包含了当前分页的所有参数，比如：
                            // console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
                            // console.log(obj.limit); //得到每页显示的条数

                            //首次不执行
                            if (!first) {
                                //do something
                                renderList(obj.curr, false);

                            }
                        }
                    });
                }

            }
        })
    }

});


$(document).on('click','#head_button',function(){
      var key=   $('#head_input').val()

      $.ajax({
        url: `//${location.hostname}/Amazon/Fuzzyquery.php`,
        data: {
           key
        },
        dataType: 'json',
        success: data => {
            
            var html = '';
            data.data.forEach(({ commodity_id, commodity_img, commodity_name, commodity_price, }) => {
                            html += `
                                <li class="contennt_right_li" id="${commodity_id}">
                                <div class="right_li_img"><img src="../img/Commodity_list/${commodity_img}.jpg" alt=""></div>
                                <span class="right_li_line1">${commodity_name}</span>
                                <span class="right_li_line2">￥${commodity_price} </span>
                                <div class="right_li_line3">
                                        <div class="li_line3_prime"></div>
                                        <div class="right_li_line3">海外购满200元免运费 </div>
                                </div>
                                <img  class="right_li_line4" src="../img/ags_badge.png" alt="">
                            </li>`
                
                        });

            $('#contennt_right_ul').html(html);

            
            

        }
    })


})




























