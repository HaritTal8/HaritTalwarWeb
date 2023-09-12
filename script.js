window.addEventListener('scroll', () => {
    let page = this;
    let pageTop = this.scrollY;
    let pageHeight = this.outerHeight / 2;
    let frames = document.querySelectorAll('.scrollAnim');
    frames.forEach(frame => {
        let frameTop = frame.offsetTop;
        let frameHeight = frame.offsetHeight;

        if (pageTop >= frameTop - pageHeight &&
            pageTop < frameTop + frameHeight / 2) {
            frame.classList.add('anim');
        } else {
            frame.classList.remove('anim');
        }
    });
    const navItems = document.querySelectorAll('nav .item');

    document.querySelector('#center').addEventListener('click',function(){
	    for(let i=0;i<navItems.length;i++){
		    navItems[i].classList.toggle('opened')
	    }
	    document.querySelector('#center').classList.toggle('close')
    });
});
