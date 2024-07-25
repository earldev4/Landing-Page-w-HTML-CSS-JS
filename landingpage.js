$(document).ready(function(){
    
    let lightbutton = $('#light')
    let box1 = $('.box1')
    let box2 = $('.box2')
    let hobi = $('.hobi')
    let hrule = $('.hrule')
    let contact = $('.contact')
    let mytext = $('.mytext')
    let changelight = function(){
        box1.toggleClass('changebg')
        box2.toggleClass('changebg')
        hobi.toggleClass('changebg')
        hrule.toggleClass('changebg')
        contact.toggleClass('changebg')
        mytext.toggleClass('changefont')
    }
    lightbutton.click(changelight)
})