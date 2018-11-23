{   

    $('.status').on('click',function(e){
        e.stopPropagation();
        $('.select_status').removeClass('show_status_list')
        $(this).children('.select_status').toggleClass('show_status_list')
    })

    $('.select_status span').on('click',function(e){
        e.stopPropagation()
        var nowStatus = $(this).index()
        $(this).parent().removeClass('show_status_list')
        $(this).parent().siblings('div').children('span').text($(this).text())
        $(this).parent().siblings().removeClass().addClass(`s_${nowStatus}`)

    })
}