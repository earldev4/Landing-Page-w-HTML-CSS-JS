$(document).ready(function(){
    
    let lightbutton = $('.light')
    let box1 = $('.box1')
    let box2 = $('.box2')
    let hobi = $('.hobi')
    let hrule = $('.hrule')
    let contact = $('.contact')
    let mytext = $('.mytext')
    let mobiletext = $('.mobiletext')
    let myhobi = $('.myhobi')
    let kontaksaya = $('.kontaksaya')
    let infotext = $('.infotext')
    let num = $('.num')
    let changelight = function(){
        lightbutton.toggleClass('dark')
        box1.toggleClass('changebg')
        box2.toggleClass('changebg')
        hobi.toggleClass('changebg')
        hrule.toggleClass('changebg')
        contact.toggleClass('changebg')
        mytext.toggleClass('changefont')
        mobiletext.toggleClass('changefont')
        myhobi.toggleClass('changefont')
        kontaksaya.toggleClass('changefont')
        infotext.toggleClass('changefont')
        num.toggleClass('changefont')
    }
    lightbutton.click(changelight)
})