var glide = new Glide('.glide', {
            type: 'carousel',
            perView: 1.7,
            focusAt: 'center',
            breakpoints: {
                1000: {
                    perView: 1.4
                },
                800: {
                    perView: 1.2
                },
                600:{
                    perView: 1,
                }
            }
        })

        glide.mount()