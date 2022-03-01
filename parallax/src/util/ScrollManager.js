
export const ScrollManager = (htmlElements) => {
    window.addEventListener("scroll", function(e) {
        const distance = window.scrollY;
        
        console.log(e);

        // document.querySelector("header").style.transform = `translateY(${distance * 1}px)`;
        // document.querySelector(".container").style.transform = `translateY(${distance * 0.3}px)`;
        // document.querySelector(".container-2").style.transform = `translateY(${distance * 0.4}px)`;

        htmlElements.forEach(elem => {
            document.querySelector(elem[0]).style.transform = `translateY(${distance * elem[1]}px)`;
        });
  
        setTimeout(() => {
          document.querySelector("section h3").classList.add("animate-me");
          document.querySelector("section h4").classList.add("animate-me-2");
        }, 400);
    });
};