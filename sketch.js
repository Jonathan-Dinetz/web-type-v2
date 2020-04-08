var rule = CSSRulePlugin.getRule('span:after');



gsap.set(".ball", {xPercent: -50, yPercent: -50});

var ball = document.querySelector(".ball");
var pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
var mouse = { x: pos.x, y: pos.y };
var speed = 0.1;

var xSet = gsap.quickSetter(ball, "x", "px");
var ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", e => {
  mouse.x = e.x;
  mouse.y = e.y;
});

gsap.ticker.add(() => {
  pos.x += (mouse.x - pos.x) * speed;
  pos.y += (mouse.y - pos.y) * speed;
  xSet(pos.x);
  ySet(pos.y);
});


var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.staggerFrom(".title", 2.75, {
  opacity: 0,
  cycle: {
    y: [-50, 50]
  },
   ease: Expo.easeOut,
  stagger: {
    from: "center",
    amount: 0.25
  }
});

var scene = new ScrollMagic.Scene({
  triggerElement: "#stage",
  triggerHook: 0
})
  .addIndicators({
    colorTrigger: "black",
    colorStart: "black",
    colorEnd: "black",
    indent: 5
  })
  .setTween(tl)
  .addTo(controller);

  var controller = new ScrollMagic.Controller();
  var tl = new TimelineMax();
  tl.staggerFrom(".title2", 2.75, {
    opacity: 0,
    cycle: {
      y: [-50, 50]
    },
     ease: Expo.easeOut,
    stagger: {
      from: "center",
      amount: 0.25
    }
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: "#stage2",
    triggerHook: 0
  })
    .addIndicators({
      colorTrigger: "black",
      colorStart: "black",
      colorEnd: "black",
      indent: 5
    })
    .setTween(tl)
    .addTo(controller);

    var controller = new ScrollMagic.Controller();
    var tl = new TimelineMax();
    tl.staggerFrom(".title3", 2.75, {
      opacity: 0,
      cycle: {
        y: [-50, 50]
      },
       ease: Expo.easeOut,
      stagger: {
        from: "center",
        amount: 0.25
      }
    });

    var scene = new ScrollMagic.Scene({
      triggerElement: "#stage3",
      triggerHook: 0
    })
      .addIndicators({
        colorTrigger: "black",
        colorStart: "black",
        colorEnd: "black",
        indent: 5
      })
      .setTween(tl)
      .addTo(controller);

      var controller = new ScrollMagic.Controller();
      var tl = new TimelineMax();
      tl.staggerFrom(".title4", 2.75, {
        opacity: 0,
        cycle: {
          y: [-50, 50]
        },
         ease: Expo.easeOut,
        stagger: {
          from: "center",
          amount: 0.25
        }
      });

      var scene = new ScrollMagic.Scene({
        triggerElement: "#stage4",
        triggerHook: 0
      })
        .addIndicators({
          colorTrigger: "black",
          colorStart: "black",
          colorEnd: "black",
          indent: 5
        })
        .setTween(tl)
        .addTo(controller);

        var controller = new ScrollMagic.Controller();
        var tl = new TimelineMax();
        tl.staggerFrom(".title5", 2.75, {
          opacity: 0,
          cycle: {
            y: [-50, 50]
          },
           ease: Expo.easeOut,
          stagger: {
            from: "center",
            amount: 0.25
          }
        });

        var scene = new ScrollMagic.Scene({
          triggerElement: "#stage5",
          triggerHook: 0
        })
          .addIndicators({
            colorTrigger: "black",
            colorStart: "black",
            colorEnd: "black",
            indent: 5
          })
          .setTween(tl)
          .addTo(controller);


                  var controller = new ScrollMagic.Controller();
                  var tl = new TimelineMax();
                  tl.staggerFrom(".title6", 2.75, {
                    opacity: 0,
                    cycle: {
                      y: [-50, 50]
                    },
                     ease: Expo.easeOut,
                    stagger: {
                      from: "center",
                      amount: 0.25
                    }
                  });

                  var scene = new ScrollMagic.Scene({
                    triggerElement: "#stage6",
                    triggerHook: 0
                  })
                    .addIndicators({
                      colorTrigger: "black",
                      colorStart: "black",
                      colorEnd: "black",
                      indent: 5
                    })
                    .setTween(tl)
                    .addTo(controller);


                            var controller = new ScrollMagic.Controller();
                            var tl = new TimelineMax();
                            tl.staggerFrom(".title7", 2.75, {
                              opacity: 0,
                              cycle: {
                                y: [-50, 50]
                              },
                               ease: Expo.easeOut,
                              stagger: {
                                from: "center",
                                amount: 0.25
                              }
                            });

                            var scene = new ScrollMagic.Scene({
                              triggerElement: "#stage7",
                              triggerHook: 0
                            })
                              .addIndicators({
                                colorTrigger: "black",
                                colorStart: "black",
                                colorEnd: "black",
                                indent: 5
                              })
                              .setTween(tl)
                              .addTo(controller);

                              var controller = new ScrollMagic.Controller();
                              var tl = new TimelineMax();
                              tl.staggerFrom(".title8", 2.75, {
                                opacity: 0,
                                cycle: {
                                  y: [-50, 50]
                                },
                                 ease: Expo.easeOut,
                                stagger: {
                                  from: "center",
                                  amount: 0.25
                                }
                              });

                              var scene = new ScrollMagic.Scene({
                                triggerElement: "#stage8",
                                triggerHook: 0
                              })
                                .addIndicators({
                                  colorTrigger: "black",
                                  colorStart: "black",
                                  colorEnd: "black",
                                  indent: 5
                                })
                                .setTween(tl)
                                .addTo(controller);0

                                var controller = new ScrollMagic.Controller();
                                var tl = new TimelineMax();
                                tl.staggerFrom(".title9", 2.75, {
                                  opacity: 0,
                                  cycle: {
                                    y: [-50, 50]
                                  },
                                   ease: Expo.easeOut,
                                  stagger: {
                                    from: "center",
                                    amount: 0.25
                                  }
                                });

                                var scene = new ScrollMagic.Scene({
                                  triggerElement: "#stage9",
                                  triggerHook: 0
                                })
                                  .addIndicators({
                                    colorTrigger: "black",
                                    colorStart: "black",
                                    colorEnd: "black",
                                    indent: 5
                                  })
                                  .setTween(tl)
                                  .addTo(controller);0

                                  var controller = new ScrollMagic.Controller();
                                  var tl = new TimelineMax();
                                  tl.staggerTo(".title10", 1.25, {
                                    rotation: 40,
                                    cycle: {
                                      y: [-50, 50]
                                    },
                                     ease: Expo.easeOut,
                                    stagger: {
                                      from: "center",
                                      amount: 0.25
                                    }
                                  });

                                  var scene = new ScrollMagic.Scene({
                                    triggerElement: "#stage10",
                                    triggerHook: 0
                                  })
                                    .addIndicators({
                                      colorTrigger: "black",
                                      colorStart: "black",
                                      colorEnd: "black",
                                      indent: 5
                                    })
                                    .setTween(tl)
                                    .addTo(controller);0
