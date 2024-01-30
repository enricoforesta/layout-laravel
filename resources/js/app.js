import './bootstrap';
// import scss
import '~resources/scss/app.scss'
// Import Bootstrap's JS
import * as bootstrap from 'bootstrap'
// import per non avere problemi con le img in produzione
import.meta.glob([
    '../img/**'
])

