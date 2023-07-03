const changeHeight = () => {
    let listCate = document.querySelector('.list__categories');
    let iconCateHide = document.querySelector('.adjust');
    document.querySelector('.hero__categories__all').addEventListener('click', () => {
        listCate.classList.toggle('list__categories__Hide');
        iconCateHide.querySelector('i').classList.toggle('rotate');
    });
}
changeHeight()

const slideProduct = () => {
    try {
        let interval;
        let currentSlide = 0;
        const indicators = document.querySelectorAll(".indicator");
        const slide = document.querySelector('.slide');
        const btnNext = document.querySelector('.btn-next');
        const btnPre = document.querySelector('.btn-pre');

        function startInterval() {
            interval = setInterval(() => {
                moveSlide('next')
            }, 2500);
        }
        startInterval();

        function moveSlide(move) {
            let imgItem = document.querySelectorAll('.item')
            clearInterval(interval)
            move === 'next' ?
                (
                    slide.appendChild(imgItem[0]),
                    updateIndicator('next')
                )
                :
                (
                    slide.prepend(imgItem[imgItem.length - 1]),
                    updateIndicator('pre')
                )
            startInterval()
        }

        function updateIndicator(direction) {
            indicators[currentSlide].classList.remove("active");
            if (direction === 'next') {
                currentSlide = (currentSlide + 1) % indicators.length;
            } else {
                currentSlide = (currentSlide - 1 + indicators.length) % indicators.length;
            }
            indicators[currentSlide].classList.add("active");
        }

        btnNext.addEventListener('click', () => {
            moveSlide('next')
        });

        btnPre.addEventListener('click', () => {
            moveSlide('pre')
        });

    } catch (error) {
        console.log(error.message);
    }
}

slideProduct()