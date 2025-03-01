import tabs from './modules/tabs'
import loader from "./modules/loader";
import timer from "./modules/timer";
import modal from "./modules/modal";
import openModal from './modules/modal'
import closeModal from './modules/modal';
import classCard from './modules/class'
import form from "./modules/form";
import slider from "./modules/slider";
window.addEventListener('DOMContentLoaded', () => {
    // Tabs
    tabs()


    // Loader

    loader('.loader-wrapper')

    // Timer

    timer()
    // Modal

    modal()
    // Class
    classCard()

    // FORM

    form()

    // SLIDER
    slider()
})

