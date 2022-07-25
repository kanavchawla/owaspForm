import React from "react";
import Particles from "react-tsparticles";
// import { loadSlim } from 'tsparticles-slim';
import { loadFull } from "tsparticles";
// import { useCallback, useMemo } from "react";
// import { colours } from '../assets/colors'

function Background() {
  const particlesInit = async (main) => {
    // console.log(main)

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main)
  }
  const particlesLoaded = (container) => {
    console.log(container)
  }
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 12,
            density: {
              enable: false,
              value_area: 800,
            },
          },
          color: {
            value: '#fff',
          },
          shape: {
            type: 'circle',
            options: {
              sides: 5,
            },
          },
          opacity: {
            value: 0.8,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 4,
            random: false,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          rotate: {
            value: 0,
            random: true,
            direction: 'clockwise',
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 600,
            color: '#ffffff',
            opacity: 0.4,
            width: 2,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: ['grab'],
            },
            onclick: {
              enable: false,
              mode: 'bubble',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        background: {
          color: '#111',
          // color: colours.themeColor,
          image: '',
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'cover',
        },
      }}
    />
  )
}

export default Background

// const Background = () => {
//     const options = useMemo( () => {
//         return {
//             background:{
//                 color: "#000",
//                 // opacity:0.8,

//             },
//             fullScreen:{
//                 enable:true,
//                 zIndex: -1,
//             },
//             interactivity:{
//                 events:{
//                     onclick:{
//                         enable: false,
//                         mode: "push",
//                     },
//                     onHover:{
//                         enable: true,
//                         mode: "repulse",
//                     }
//                 },
//                 modes:{
//                     push:{
//                         quantity: 5,
//                     },
//                     repulse:{
//                         distance: 40,
//                     }
//                 }
                
//             },
//             particles: {
//                 links:{
//                     enable: true,
//                     blink: false,
//                     distance: 150,
//                     color: "#ffff",
//                     opacity:0.7,
                    
//                     consent: false
//                 },
//                 number: {
//                     value: 130,
                    
//                     density: {
//                         enable: true,
//                         value_area: 800                    }
//                 },    
//                 shape: {
//                     type: 'circle',
//                     options: {
//                       sides: 5,
//                     },
//                   },
                
                    
               
//                 color:{
//                     value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
//                 },
//                 collisions:{
//                     enable:true,
//                 },
//                 move:{
//                      enable: true,
//                     speed:{min:0,max:1.5},
//                 },
//                 opacity:{
//                     value:{min:0.2,max:0.4},
//                 },
//                 size:{
//                     value: {min:0.5,max:2},
//                 }
//             }
//         };      
//     }, []);

//     const particlesInit = useCallback( (engine)=>{
//         loadSlim(engine);
        

        
//     },[]);
    
    
//     return <Particles init={particlesInit} options ={options} />
// };


// export default Background;