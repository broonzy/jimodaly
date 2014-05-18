$(document).ready(  
    function() {
      //initialize scroller
        $(".container").wtScroller({
            num_display:4,
            slide_width:110,
            slide_height:150,
            slide_margin:1,
            button_width:35,
            ctrl_height:25,
            margin:10,    
            auto_scroll:true,
            delay:4800,
            scroll_speed:1500,
            easing:"",
            auto_scale:false,
            move_one:false,
            ctrl_type:"scrollbar",
            display_buttons:true,
            mouseover_buttons:true,
            display_caption:true,
            mouseover_caption:true,
            caption_effect:"slide",            
            caption_align:"bottom",
            caption_position:"inside",                    
            cont_nav:true,
            shuffle:false,
            mousewheel_scroll:true
        });
    
        //initialize lightbox for scroller  
        $("a[rel='scroller']").wtLightBox({
            rotate:true,
            delay:4000,
            duration:600,
            display_number:true,
            display_dbuttons:true,
            display_timer:true,
            display_caption:true,
            caption_position:"outside",
            cont_nav:true,
            auto_fit:true,
            easing:"",
            type:"GET"
        });
    }
);