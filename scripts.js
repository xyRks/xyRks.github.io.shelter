$(document).ready(function() {
    let position = 0;
    const slidesToShow = 3;
    const slidesToScroll = 1;

    const container = $('.frends-content');
    const track = $('.frends-content-slider');
    const item  = $('.frends-content-card');
    const buttonPrev = $('.prev');
    const buttonNext = $('.next');
    const itemsCount = item.lenght;
    
    

    const itemWidth = (container.width() / slidesToShow) - 35;
    const movePosition = slidesToScroll * itemWidth;
    
        item.each(function (index, item) {
            $(track).css ({
                minWidth: track,
            });
        });
        

    buttonPrev.click(function() {

        position += movePosition;

        setPosition()
        checkBtns()
    });

    buttonNext.click(function() {
        const itemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= movePosition;
        
        setPosition()
        checkBtns()
    });

    const setPosition = () => {
        item.css({
            transform: `translateX(${position}px)`
        });
    };

    const checkBtns = () => {
        buttonPrev.prop('disabled', position === 0);
        buttonNext.prop('disabled', position === -4380);
    };

    checkBtns()
});