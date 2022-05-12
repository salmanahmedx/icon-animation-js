const home = document.querySelector(".home");
const notifications = document.querySelector('.notification');

// Home Icon Animation

const tl = gsap.timeline({ duration: 0.35, ease: "Power2.easeOut" });

gsap.set(".feather", { scale: 0, transformOrigin: "center" })

// transform origin : now the feather is scaling from the center
// Stagger allows two animation run on a different speed by specifying time for it. Similar to delay

home.addEventListener("click", () => {
    gsap.fromTo(".home-svg", { scale: 1 }, { scale: 0.9, yoyo: true, repeat: 1 })
    gsap.fromTo(".feather", { y: -5, scale: 0 }, { y: 20, scale: 1.5, duration: 1, stagger: 0.5 });
    gsap.fromTo(".right-feather", { x: 0 }, { x: 5 })
})

// Notification Icon Animation

gsap.set(".bell", { transformOrigin: "center" });
gsap.set(".ringer", { transformOrigin: "center" });
gsap.set(".wave", { opacity: 0, transformOrigin: "bottom" })

notifications.addEventListener("click", () => {
    gsap.fromTo(".bell", { rotation: -5 }, { rotation: 0, duration: 1, ease: "elastic.out(5, 0.2)" });
    gsap.fromTo(".ringer", { rotation: -5 }, { rotation: 0, duration: 1, ease: "elastic.out(3, 0.2)" });
    gsap.fromTo(".wave", { scale: 0, opacity: 1 }, { scale: 1.3, opacity: 0, duration: 1 })
})

