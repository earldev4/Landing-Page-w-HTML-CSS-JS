$(document).ready(function(){
    
    let lightbutton = $('.light')
    let allcontainer = $('.allcontainer')
    let alltexts = $('.alltexts')
    let changelight = function(){
        lightbutton.toggleClass('dark')
        allcontainer.toggleClass('changebg')
        alltexts.toggleClass('changefont')
    }
    lightbutton.click(changelight)
})