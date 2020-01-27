<template>
    <v-container grid-list-md id="home-page">
        <v-layout row wrap>
            <v-flex xs12 class="mb-4">
                <h1 class="display-2 font-weight-bold">Konstantinos Kesidis</h1>
                <h2 class="display-1">Web Developer</h2>

                <v-divider class="mt-4 notched"/>
            </v-flex>

            <v-flex xs12 class="subheading">
                <p>Hello! I am web developer from Athens and specialize in delivering websites and digital solutions for your every need. I use some of the most well known and up to date programming languages to create fast, flexible and reliable applications.</p>
                <p>When not working on new projects, i am studying and looking up new technologies. Making sure that my knowledge and skills are up to date is an essential part of my profession. There is always something new to learn and improve. That is why i love doing this job!</p>
            </v-flex>

            <v-flex xs12 class="my-5">
                <v-layout row wrap>
                    <v-flex xs12 md4 class="up-line up-line-red" text-xs-center>
                        <v-icon size="60">fas fa-globe</v-icon>
                        <p>Create Websites and Web Applications</p>
                        <p class="blue-grey--text text-darken-2">Designed according to your needs and styling of your choice, made as simple and reliable as possible.</p>
                    </v-flex>

                    <v-flex xs12 md4 class="up-line up-line-green" text-xs-center>
                        <v-icon size="60">fas fa-sync-alt</v-icon>
                        <p>Speed Optimization and SEO</p>
                        <p class="blue-grey--text text-darken-2">Improving the user experience and ranking of the page on Google to.</p>
                    </v-flex>

                    <v-flex xs12 md4 class="up-line up-line-blue" text-xs-center>
                        <v-icon size="60">fas fa-mobile-alt</v-icon>
                        <p>Mobile First Design</p>
                        <p class="blue-grey--text text-darken-2">Interfaces and features and content designed to look properly on all display devices and sizes.</p>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex xs-12 class="blue-grey lighten-5 pa-3">
                <h2 class="mb-3 text-xs-center">I specialize in using:</h2>

                <v-layout row wrap align-center>
                    <v-flex sm12 md6 lg4 v-for="item in items" :key="item.title">
                        <v-card elevation="0">
                            <v-card-text>
                                <v-list two-line>
                                    <v-list-tile avatar>
                                        <v-list-tile-avatar>
                                            <img :src="item.img" :title="item.title"/>
                                        </v-list-tile-avatar>

                                        <v-list-tile-content>
                                            <v-list-tile-title v-html="item.title"/>
                                            <v-list-tile-sub-title v-html="item.skills"/>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                </v-list>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import phpImg from '~/assets/images/php.png';
import jsImg from '~/assets/images/js.jpg';
import jqueryImg from '~/assets/images/jquery.png';
import sassImg from '~/assets/images/sass.png';
import mySqlImg from '~/assets/images/mysql.png';

export default {
    head () {
        return {
            title: 'Κωνσταντίνος Κεσίδης | Web Developer'
        }
    },

    data: () => ({
        items: [
            { 
                img: phpImg, 
                title: 'PHP', 
                skills: 'Laravel, Symfony, CodeIgniter',
                text: 'Robust and reliable programming language, PHP is primary used to retrieve and store data on the server. By using the newest frameworks like Laravel and Symfony i can create applications that guarantee fast loading speeds and safety for the data provided by users in the application.' 
            },
            { 
                img: jsImg, 
                title: 'Javascript', 
                skills: 'ES6, Angular, Vue',
                text: 'Used to provide real-time functionality and reactivity, Javascript is widely used for a number of purposes in every web application. With it\'s uses expanding all the time, it is a now a full scale programming language that can be used to both provide communication with a server and build fast and interactive content.'
            },
            { 
                img: jqueryImg, 
                title: 'JQuery', 
                skills: '',
                text: 'Built on top of javascript, jQuery is used to provide all of the functionality contained in it and make writing code that much easier. Used by a lot of applications, there are many frontend frameworks and widgets relying on it and is very easy to implement and maintain.'
            },
            { 
                img: sassImg, 
                title: 'CSS', 
                skills: 'CSS, SASS, SCSS',
                text: 'CSS is a inseparable part of any application. It is used to control the layout, provide styling and animate the content of every website / application. SASS is a preprocessor scripting language that add many features and capabilities. At the end of development process, it is compiled to CSS code so that it can be recognised by the browsers.'
            },
            { 
                img: mySqlImg, 
                title: 'MySQL', 
                skills: '',
                text: 'A relational database management system used to retrieve, store and manipulate data on the Internet. It cooperates very well with PHP to allow the user to safely input data for future use, statistics and reports generation as well as content management by a variety of frameworks and platforms.', 
            },
        ],
    })
}
</script>