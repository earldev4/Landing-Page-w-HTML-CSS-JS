$(document).ready(function(){
    
    let lightbutton = $('.light')
    let changebanner = $('.intro')
    let allcontainer = $('.allcontainer')
    let alltexts = $('.alltexts')
    let changelight = function(){
        lightbutton.toggleClass('dark')
        changebanner.toggleClass('givefilter')
        allcontainer.toggleClass('changebg')
        alltexts.toggleClass('changefont')
    }
    lightbutton.click(changelight)
})