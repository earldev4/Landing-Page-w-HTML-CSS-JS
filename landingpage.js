$(document).ready(function(){
    
    let lightbutton = $('.light')
    let changebanner = $('.header')
    let sections = $('.sections')
    let texts = $('.texts')
    let changelight = function(){
        lightbutton.toggleClass('dark')
        changebanner.toggleClass('givefilter')
        sections.toggleClass('changebg')
        texts.toggleClass('changefont')
    }
    lightbutton.click(changelight)
})