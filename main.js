import './css/reset.css'
import './css/vars.css'
import spacing from './css/spacing.css'
import color from './css/color.css'
import display from './css/display.css'
import size from './css/size.css'
import misc from './css/misc.css'

import { add, remove } from './js/yogi.js'

document.addEventListener("DOMContentLoaded", function() {
    const testDiv = document.getElementById('test');
    add(testDiv, ['main-color', 'border', 'padding']);
    remove(testDiv, 'main-color');
});