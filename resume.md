---
title: Resume
---

<style>
    .resume-name {
        margin-bottom: .3em !important;
    }

    .resume-title {
        margin-bottom: .7em;
    }

    .resume-links p {
        margin-bottom: 0em;
    }

    .description {
        max-width: 700px !important;
        padding-top: 2em;
    }

    .description-section {
    }

    .description-section h4 {
        margin-bottom: 1em;
    }

    .description-section h5 {
        color: #444;
        font-size: 1em;
        font-weight: bold;
    }

    .description-section-body {
        padding-left: 1em;
    }

    .description-section-body li,
    .description-section-body p,
    .description-section-body a {
        font-size: .9em;
    }

    @media print {
        h1,h2,h3,h4,h5,h6 {
            page-break-after: avoid;
        }

        h1::first-letter,
        h2::first-letter,
        h3::first-letter,
        h4::first-letter,
        h5::first-letter,
        h6::first-letter {
            margin: 0 !important;
            padding: 0 !important;
        }
    
        .section {
            padding: 0 !important;
        }

        header.header,
        footer.footer {
            display: none !important;
        }

        section.app-content {
            padding-top: 0!important;
        }

        @page {
            margin: 2cm;
        }
    }
</style>

<div class="section p-b-0">
   <h3 class="title resume-name">Selahattin Ünlü</h3>
   <h4 class="resume-title">Full Stack Developer</h4>
   <div class="resume-links">
       <p class="no-margin">Mail: selahattin.unlu@yandex.com</p>
       <p>Github: <a href="//github.com/selahattinunlu" target="_blank">github.com/selahattinunlu</a></p>
       <p>Phone Number: 90 535 582 7574</p>
   </div>
   <div class="description">
        <div class="description-section">
            <h4 class="description-title">Work Experience</h4>

            <div class="description-section-body">
                <div class="m-b-2">
                    <h5>Full Stack Developer, Burnaz Turizm <small> - June 2012 - June 2014, Istanbul</small></h5>

                    <ul>
                        <li>I was doing integration with 3rd party services for hotel searching, reservation etc. For example hotel.com</li>
                        <li>I was working on Front End also. We weren't have any front end framework like AngularJS. I was building pages just using HTML5&CSS3 and JavaScript with jQuery</li>
                        <li>We had a large database realy. There were hundreds of tables. I was managing it and was working to improve performance.</li>
                        <li>We were using memcached there for caching.</li>
                    </ul>
                </div>

                <!--  -->

                <div class="m-b-2">
                    <h5>Full Stack Developer, Goldmansoft <small> - June 2014 - April 2016, Istanbul</small></h5>

                    <ul>
                        <li>I was working as a Full-Stack Developer.</li>
                        <li>I made a lot of corparete websites for businesses.</li>
                        <li>Finally, my boss had an idea named Mekanzade. So, we had cut building websites for businesses and we had started to build my boss's project. We had published the project as Beta. And then, due to financial problems, the project was left unfinished. <a href="http://www.mekanzade.com" target="_blank">You can check it from here</a></li>
                    </ul>
                </div>

                <!--  -->

                <div class="m-b-2">
                    <h5>Full Stack Developer, MyNextMatch Ltd. <small> - April 2016 - January 2017, Istanbul</small></h5>

                    <ul>
                        <li>I'm working at MyNextMatch as Full-Stack Developer</li>
                        <li>
                            I worked more like a JavaScript developer. We were using AngularJS 1x version there.
                        </li>
                        <li>
                            I had created a notification center to inform athletes, tournament officials, teams etc. according to detailed segments. A tournament admin can send a sms, mail, notification to related people in the that notification center.
                        </li>
                        <li>
                            We had use React then in the some projects. For example, We had built a dashboard to provide to tournament's doctors to check athletes that if athlete is appropriate or not. 
                        </li>
                    </ul>
                </div>

                <!--  -->

                <div class="m-b-2">
                    <h5>Full Stack Developer,  Vidobu<small> - January 2017 - present, Istanbul</small></h5>

                    <ul>
                        <li>I'm working at Vidobu as Full-Stack Developer</li>
                        <li>I'm working with CodeIgniter 2x framework here.</li>
                        <li>
                            I'm making integration with other education companies, integration payment system (credit card, mobile payment etc). Also, I'm working on Front end (HTML5,CSS3,JavaScript. There is no any front end framework here.)
                        </li>
                        <li>
                            We redesigned the website and I implemented the new design. (HTML5, CSS3, JavaScript, Sass, Gulp, jQuery)
                        </li>
                        <li>
                            I'm making refactoring some times. Because the software is violating the DRY principle in a lot of places.
                        </li>
                        <li>
                            I integrated a Container package to provide an abstraction and reduce dependencies. Also, I applied the Facade design pattern like Laravel. Thus, now, the software is more flexible than old times.
                        </li>
                        <li>
                            They had not any test of the software when I came here. I'm creating tests also. I'm using Codeception, Selenium to create acceptance tests.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- END WORK EXPERIENCE -->

        <div class="description-section">
            <h4 class="description-title">Side Projects</h4>

            <div class="description-section-body">
                <div class="m-b-2">
                    <h5>Laravel API Query Builder Package</h5>

                    <p>This package creates eloquent query from uri parameters. So, you won't need to check query parameters and apply to sql according to the parameter. It will handle automatically for you. If you want to customize in some case, yes you can. It provides customization chance also!</p>

                    <a href="https://github.com/selahattinunlu/laravel-api-query-builder" target="_blank">Check it on Github</a>
                </div>

                <div class="m-b-2">
                    <h5>React-Redux Starter</h5>
                    <p>
                        I had built a starter for React-Redux while working on React project at MyNextMatch company.
                        It contains some packages like apisauce, immutable, redux-saga, reduxsauce, reselect etc.
                        It makes easier to start a React-Redux project.
                    </p>
                    <a href="https://github.com/selahattinunlu/react-redux-starter" target="_blank">Check it on Github</a>
                </div>

                <div class="m-b-2">
                    <h5>Minesweeper Game With JavaScript</h5>
                    <p>
                        It is implementation of Minesweeper game using pure JavaScript.
                    </p>
                    <a href="https://github.com/selahattinunlu/minesweeper-game" target="_blank">Check it on Github</a>
                    <div class="clearfix"></div>
                    <a href="http://selahattinunlu.com/minesweeper-game/" target="_blank">Let's Play</a>
                </div>

                <div class="m-b-2">
                    <h5>Flane (Mobile Game)</h5>
                    <p>
                        It is my first mobile game. I built it using Unity (C#)
                    </p>
                    <a href="https://play.google.com/store/apps/details?id=com.devnotylabs.plane" target="_blank">Check it on Play Store</a>
                </div>

                <div class="m-b-2">
                    <h5>Ham (Mobile Game)</h5>
                    <p>
                        Here is my second game!
                        Touch the screen at the right time and be patient.
                        Ham is arcade game for mobile devices. I warn you, Ham can be little frustrating :)
                    </p>
                    <p>
                        I built it using Unity (C#)
                    </p>
                    <a href="https://play.google.com/store/apps/details?id=com.devnoty.ham" target="_blank">Check it on Play Store</a>
                </div>
                <div class="m-b-2">
                    <h5>TapJum (Mobile Game)</h5>
                    <p>
                        This game will make you excite about each second you play. The best of time killing games :)
                    </p>
                    <p>
                        We built it using Unity (C#) with Can Tecim. We are a team (MobiArt Games). We love to build games. And this is one of our games.
                    </p>
                    <a href="https://play.google.com/store/apps/details?id=com.mobiartgames.tapjum" target="_blank">Check it on Play Store</a>
                </div>
            </div>
        </div>
        <!-- END SIDE PROJECTS -->

        <div class="description-section">
            <h4 class="description-title">Technical Skills</h4>

            <div class="description-section-body">
                <div class="m-b-2">
                    <p>
                        PHP, MySQL, NodeJS, Laravel, CodeIgniter, RESTful Web Services, Git, Object Oriented Programming, Linux, OS X, Design Patterns, TDD, Redis
                    </p>
                    <p>
                        HTML5 & CSS3, JavaScript, jQuery, ReactJS, AngularJS, Ionic Framework, Bootstrap, ES6
                    </p>
                    <p>
                        Unity, C#
                    </p>
                </div>
            </div>
        </div>
        <!-- END TECHNICAL SKILLS -->

        <div class="description-section">
            <h4 class="description-title">Education</h4>

            <div class="description-section-body">
                <div class="m-b-2">
                    <h5>Istanbul University <small>Economic and Managerial Sciences Faculty, Business Administration</small></h5>

                    <p>I'm still student here. I will graduate in two years.</p>
                </div>
            </div>
        </div>
        <!-- END EDUCATION -->
   </div>
</div>