const FADEIN_SCHOOL = document.querySelector(".school_before");
const FADEIN_ANIMATION = document.querySelector(".like_animation_before");
const FADEIN_SINGER = document.querySelector(".like_singer_before");
const FADEIN_QUALIFICATION = document.querySelector(".qualification_before");
const FADEIN_RESPONSIVE_QUALIFICATION = document.querySelector(".qualification_responsive_before");
const FADEIN_WORKS = document.querySelector(".works_before");
window.addEventListener('scroll', () => {
    const FADEIN_SCHOOL_TOP = FADEIN_SCHOOL.getBoundingClientRect().top;
    const FADEIN_ANIMATION_TOP = FADEIN_ANIMATION.getBoundingClientRect().top;
    const FADEIN_SINGER_TOP = FADEIN_SINGER.getBoundingClientRect().top;
    const FADEIN_QUALIFICATION_TOP = FADEIN_QUALIFICATION.getBoundingClientRect().top;
    const FADEIN_RESPONSIVE_QUALIFICATION_TOP = FADEIN_RESPONSIVE_QUALIFICATION.getBoundingClientRect().top;
    const FADEIN_WORKS_TOP = FADEIN_WORKS.getBoundingClientRect().top;
    const WINDOW_HEIGHT = window.innerHeight;

    if (WINDOW_HEIGHT > (FADEIN_SCHOOL_TOP + 200)) {
        FADEIN_SCHOOL.classList.add('school_after');
    } else {
        FADEIN_SCHOOL.classList.remove('school_after');
    }
    if (WINDOW_HEIGHT > (FADEIN_ANIMATION_TOP + 200)) {
        FADEIN_ANIMATION.classList.add('like_animation_after');
    } else {
        FADEIN_ANIMATION.classList.remove('like_animation_after');
    }
    if (WINDOW_HEIGHT > (FADEIN_SINGER_TOP + 200)) {
        FADEIN_SINGER.classList.add('like_singer_after');
    } else {
        FADEIN_SINGER.classList.remove('like_singer_after');
    }
    if (WINDOW_HEIGHT > (FADEIN_QUALIFICATION_TOP + 200)) {
        FADEIN_QUALIFICATION.classList.add('qualification_after');
    } else {
        FADEIN_QUALIFICATION.classList.remove('qualification_after');
    }
    if (WINDOW_HEIGHT > (FADEIN_RESPONSIVE_QUALIFICATION_TOP + 200)) {
        FADEIN_RESPONSIVE_QUALIFICATION.classList.add('qualification_responsive_after');
    } else {
        FADEIN_RESPONSIVE_QUALIFICATION.classList.remove('qualification_responsive_after');
    }
    if (WINDOW_HEIGHT > (FADEIN_WORKS_TOP + 200)) {
        FADEIN_WORKS.classList.add('works_after');
    } else {
        FADEIN_WORKS.classList.remove('works_after');
    }
});