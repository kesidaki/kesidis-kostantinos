<template>
    <v-container grid-list-md id="home-page">
        <v-layout row wrap>
            <v-flex xs12 class="mt-4 mb-4">
                <h2>Full Stack Web Developer</h2>
                <p>Με αγάπη και πάθος για το web development, χρησιμοποιώ μερικές από τις πιο σύγχρονες τεχνολογίες για να παρέχω και να κατασκευάζω Ιστοσελίδες και Web Εφαρμογές οι οποίες να μπορούν να ανταποκριθούν στις απαιτήσεις σας.</p>
            </v-flex>

            <v-flex xs12 md4 class="up-line up-line-red" text-xs-center>
                <v-icon>fa-globe</v-icon>
                <p>Κατασκευή Ιστοσελίδων και Web Εφαρμογών</p>
                <p class="blue-grey--text text-darken-2">Φτιαγμένες σύμφωνα με τα δικά σας πρότυπα και με σκοπό να καλυπτουν τις ανάγκες σας.</p>
            </v-flex>

            <v-flex xs12 md4 class="up-line up-line-green" text-xs-center>
                <v-icon>fa-spinner</v-icon>
                <p>Βελτιστοποίηση ταχύτητας και SEO</p>
                <p class="blue-grey--text text-darken-2">Βελτιώνουμε την εμπειρία χρήσης και τη κατάταξη της σελίδα στη Google.</p>
            </v-flex>

            <v-flex xs12 md4 class="up-line up-line-blue" text-xs-center>
                <v-icon>fa-desktop</v-icon>
                <p>Φτιαγμένες τόσο για Η/Υ, όσο και για tablet και smartphone</p>
                <p class="blue-grey--text text-darken-2">Περιοεχόμενο και λειτουργίες φτιαγμένα ώστε να φαίνοντα σωστά σε όλες τις συσκευές και μεγέθη οθόνης.</p>
            </v-flex>

            <v-flex xs12 class="mt-4 mb-4">
                <h2>Με ειδίκευση στις εξής τεχνολογίες</h2>
            </v-flex>

            <v-flex xs-12>
                <v-list two-line>
                    <template v-for='(item, index) in items'>
                        <v-list-tile :key="item.title">
                            <v-list-tile-avatar>
                                <img :src="item.img" :title="item.title"/>
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                <v-list-tile-sub-title>{{ item.sub }}</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>

                        <v-divider
                        :key="index"
                        ></v-divider>
                    </template>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        items: [
            { img: './images/php.png', title: 'PHP', sub: 'Laravel, Symfony, CodeIgniter' },
            { img: './images/js.jpg', title: 'Javascript', sub: 'ES6, Angular, Vue'},
            { img: './images/jquery.png', title: 'JQuery', sub: '' },
            { img: './images/sass.png', title: 'CSS', sub: 'CSS, SASS, SCSS' },
            { img: './images/mysql.png', title: 'MySQL', sub: '' },
        ]
    })
}
</script>