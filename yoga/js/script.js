window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tab        = document.querySelectorAll('.info-header-tab'),
        info       = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

     info.addEventListener('click', function(event) {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break; 
                }
                
            }
        }
     });

     // Timer
     let deadline = '2019-06-19';

    function clockRemaining(endtime) {
         let t       = Date.parse(endtime) - Date.parse(new Date()),
             seconds = Math.floor((t/1000) % 60),
             minutes = Math.floor((t/1000/60) % 60),
             hours   = Math.floor((t/(1000*60*60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
        
        
     }

    function setClock(id, endtime) {
         let t     = document.getElementById(id),
             hours = document.querySelector('.hours'),
             minutes = document.querySelector('.minutes'),
             seconds = document.querySelector('.seconds'),
             timeInterval = setInterval(updateClock, 1000);
        
        function updateClock() {
            let t = clockRemaining(endtime);

            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if(t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

            }
            if(t.hours <=9) {
                hours.textContent = '0' + t.hours;
            }else if (t.minutes <= 9) {
                minutes.textContent = '0' + t.minutes;
            }else if(t.seconds <= 9) {
                seconds.textContent = '0' + t.seconds;
            }
        }
     }

     setClock('timer', deadline);
        


    
});