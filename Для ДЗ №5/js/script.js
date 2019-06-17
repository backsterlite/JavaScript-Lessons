let column   = document.querySelectorAll('.column'),
    menuItem = document.querySelectorAll('.menu-item'),
    menu     = document.querySelector('.menu'),
    title    = document.querySelector('.title'),
    adv      = document.getElementsByClassName('adv'),
    promp   = document.getElementById('prompt');





document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';

menu.insertBefore(menuItem[2], menuItem[1]);
title.textContent = 'Мы продаем только оригинальную технику Apple';

column[1].removeChild(adv[0]);

let question = prompt("Ваше отношение к технике Apple?", '');

promp.textContent = question;