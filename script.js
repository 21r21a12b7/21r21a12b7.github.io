let crsr = document.querySelector("#cursor")
let blurs = document.querySelector("#blur")
document.addEventListener("mousemove",(e) => {
    crsr.style.left = e.x+20+"px"
    crsr.style.top = e.y+"px"
    blurs.style.left = e.x - 150 +"px"
    blurs.style.top = e.y - 150 +"px"
})

let Allas = document.querySelectorAll("#nav a")
Allas.forEach((ele) => {
    ele.addEventListener("mouseenter",() => {
        crsr.style.scale = 6;
        crsr.style.border = ".1px solid #fff";
        crsr.style.backgroundColor = "transparent";
      });
      ele.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid rgb(248, 232, 179)";
        crsr.style.backgroundColor = "rgb(248, 232, 179)";
      });
})

gsap.to("#loader",{
    top:"-120%",
    delay:1,
    duration:1.5
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:.5,
    height:"12vh",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -28%",
        scrub:2
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    duration:.6,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -50%",
        scrub:3
    }
})

gsap.from("#about-us",{
    y:50,
    opacity:0,
    duration:.6,
    // delay:.4,
    stagger:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 63%",
        scrub:2
    }
})
// gsap.from(".card", {
//     scale: 1,
//     // opacity:0,
//     duration: 1,
//     stagger: 0.1,
//     scrollTrigger: {
//       trigger: ".card",
//       scroller: "body",
//       // markers:false,
//       start: "top 80%",
//       end: "top 73%",
//       scrub: 1,
//     },
//   });

  gsap.from(".card",{
    scale:.2,
    duratin:.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#container",
        scroller:"body",
        start:"top 80%",
        end:"top 63%",
        // markers:true,
        scrub:3
    }
  })

  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  let tm = gsap.timeline()

  tm.from("#mains video",{
    scale:0,
    opacity:0,
    duration:.5,
    stagger:.4
  })

  tm.from("#p1right h2, #p1right h4",{
    opacity:0,
    stagger:.2
  })

  tm.from(".p2first img , .p2firstconti , .p2second , .p2secondconti",{
    // opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:".p2first",
        scroler:"body",
        start:"top 50%",
        end:"top 40%",
        // markers:true,
        scrub:2
    }
  })

  tm.from(".p3first img , .p3firstconti , .p3second , .p3secondconti",{
    // opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:".p3first",
        scroler:"body",
        start:"top 70%",
        end:"top 60%",
        // markers:true,
        scrub:2
    }
  })

  tm.from(".p4first img , .p4firstconti , .p4second , .p4secondconti",{
    // opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:".p4first",
        scroler:"body",
        start:"top 70%",
        end:"top 60%",
        // markers:true,
        scrub:2
    }
  })

  tm.from(".p5first img , .p5firstconti ",{
    // opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:".p5first",
        scroler:"body",
        start:"top 70%",
        end:"top 60%",
        // markers:true,
        scrub:2
    }
  })
  