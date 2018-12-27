<template>
    <v-container grid-list-md id="about-page">
        <v-layout row wrap>

            <v-flex d-flex xs12>
                <v-layout row wrap>
                    <v-flex xs12 md4 lg3>
                        <v-img
                        src="./images/konstantinos-kesidis-2.jpg"
                        lazy-src="./images/konstantinos-kesidis-2.jpg">
                        </v-img>
                    </v-flex>
                    <v-flex xs12 md8 lg9>
                        <h1>Κωνσταντίνος Κεσίδης</h1>
                        <h2>Web Developer</h2>

                        <v-list two-line>
                            <v-list-tile v-for="item in contactList" :key="item.title" class="p-0">
                                <v-list-tile-avatar>
                                    <v-icon>{{ item.icon }}</v-icon>
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                    <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex xs12 class="blue-grey lighten-5 mt-4 pa-4 subheading">
                <p>Γεια σας. Λέγομαι Κωνσταντίνος Κεσίδης και εργάζομαι ως Web Developer.</p>
                <p>Ξεκίνησα με αυτό το αντικείμενο γιατί μου κίνησε τη περιέργεια και έμεινα καθώς λάτρεψα τις δυνατότητες που προσφέρει. Μέσα από τη δουλειά μου μπορώ να δημιουργήσω κάτι ενδιαφέρον από το μηδέν το οποίο να ικανοποιεί εμένα, όσο τις ανάγκες και τις απαιτήσεις σας.</p>
                <p class="mb-0">Για να το πετύχω αυτό χρησιμοποιώ μερικές από τις πιο γνωστές και χρήσιμες τεχνολογίες που υπάρχουν αυτή τη στιγμή, ενώ αναζητώ πάντα νέους τρόπους να μαθαίνω και να βελτιώνομαι. Για αυτό και αγαπάω τη τεχνολογία άλλωστε, υπάρχει πάντα κάτι νέο να μάθω και δω.</p>
            </v-flex>

            <v-flex xs12 class="mt-4 cv-section">
                <v-layout row wrap>
                    <v-flex xs12 md4 lg2><h3 class="headline">Δεξιότητες</h3></v-flex>
                    <v-flex xs12 md8 lg10>
                        <v-list>
                            <v-list-tile v-for="(item, index) in skills" :key="skillKey(index)">
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ item }}</v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex xs12 class="mt-4 cv-section">
                <v-layout row wrap>
                    <v-flex xs12 md4 lg2><h3 class="headline">Εμπειρία</h3></v-flex>
                    <v-flex xs12 md8 lg10>
                        <v-list two-line>
                            <v-list-group
                            v-for="item in experience"
                            :key="experienceKey(item.company)"
                            no-action>
                                <v-list-tile slot="activator">
                                    <v-list-tile-content>
                                        <v-list-tile-title><b>{{ item.company }}</b> | {{ item.role }}</v-list-tile-title>
                                        <v-list-tile-sub-title>{{ item.from }} - {{ item.to }}</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                </v-list-tile>

                                <v-list-tile v-for="(subItem, subIndex) in item.responsibilities" :key="responsibilityKey(subIndex)">
                                    <v-list-tile-avatar>
                                        <v-icon>fas fa-angle-right</v-icon>
                                    </v-list-tile-avatar>
                                    <v-list-tile-content>
                                        <v-list-tile-title>{{ subItem }}</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list-group>
                        </v-list>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex xs12 class="mt-4 cv-section">
                <v-layout row wrap>
                    <v-flex xs12 md4 lg2><h3 class="headline">Εκπαίδευση</h3></v-flex>
                    <v-flex xs12 md8 lg10>
                        <v-list two-line>
                            <v-list-tile>
                                <v-list-tile-content>
                                    <v-list-tile-title><b>Δημόσιο ΙΕΚ Αιγάλεω</b> | Τεχνικός Εφαρμογών Πληροφορικής</v-list-tile-title>
                                    <v-list-tile-sub-title>Οκτώβριος 2014 - Φεβρουάριος 2016</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex xs12 class="mt-4 cv-section">
                <v-layout row wrap>
                    <v-flex xs12 md4 lg2><h3 class="headline">Ιστοσελίδες - Εφαρμογές</h3></v-flex>
                    <v-flex xs12 md8 lg10>
                        <v-list two-line>
                            <v-list-tile v-for="(item, index) in applications" :key="applicationKey(index)">
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        <b>{{ item.application }}</b>
                                        <span v-if="item.for !== ''"> | {{ item.for }}</span>
                                    </v-list-tile-title>
                                    <v-list-tile-sub-title>
                                        {{ item.comment }}
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-flex>
                </v-layout>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        contactList: [
            { icon: 'fas fa-map-marker-alt', title: 'Κολοκοτρώνη 60', subtitle: 'Αιγάλεω' },
            { icon: 'fas fa-mobile-alt', title: '694 38 98 195', subtitle: '' },
            { icon: 'fas fa-at', title: 'kesidiskostas@gmail.com', subtitle: '' },
        ],
        skills: [
            'HTML, CSS, SASS/SCSS, Javascript, jQuery',
            'PHP, Laravel, Symfony, CodeIgniter',
            'VueJS, Angular 2+, Ionic',
            'MySQL',
            'ASP.NET',
            'Bootstrap 4, Materialize CSS',
        ],
        experience: [
            { 
                company: 'PROCON', 
                role: 'Web Developer', 
                from: 'Οκτώβριος 2018', 
                to: 'Σήμερα', 
                area: 'Περιστέρι', 
                responsibilities: [
                    'Κατασκευή και συντήρηση web components'
                ]
            },
            { 
                company: 'Γιατροί κατ Οίκον 1151', 
                role: 'Web Developer', 
                from: 'Ιανουάριος 2017', 
                to: 'Οκτώβριος 2018', 
                area: 'Κυψέλη', 
                responsibilities: [
                    'Δημιουργία και συντήρηση Web Εφαρμογών για την εταιρεία',
                    'Διαχείριση καμπάνιας Google Adwords'
                ]
            },
            { 
                company: 'Στράτος Λαμπρινός - Συστήματα Πληροφορικής', 
                role: 'Web Developer', 
                from: 'Φεβρουάριος 2016', 
                to: 'Αύγουστος 2016', 
                area: 'Κορωπί', 
                responsibilities: [
                    'Διαχείριση Βάσεων Δεδομένων',
                    'Δημιουργία Web Forms για παρακολούθηση και διαχείριση των πληροφοριών',
                    'Class Libraries που να εκτελούν συγκεκριμένα task',
                    'Entity Framework',
                    'Web Services',
                ]
            },
        ],
        applications: [
            {
                application: 'www.citydoctors.gr',
                for: 'CityDoctors',
                comment: 'Ηλεκτρονικός επαγγελματικός κατάλογος για την Υγεία. Ο χρήστης μπορεί να ψάξει γιατρό της επιλογής του στη περιοχή που θέλει και να δει το προφίλ του ή να κλείσει ραντεβού online. Ο Ιατρός μπορεί να συνδεθεί στο σύστημα και να ενημερώσει τη σελίδα του με πληροφορίες για τις Υπηρεσίες του και Φωτογραφίες.',
            },
            {
                application: 'www.1151.gr',
                for: 'Γιατροί κατ’ Οίκον 1151',
                comment: 'Σελίδα ενημέρωσης του κοινού για τις Υπηρεσίες των Ιατρών κατ Οίκον 1151. Portal διαχείρισης περιστατικών και πληρωμών για τους Ιατρούς Συνεργάτες.',
            },
            {
                application: 'Γιατροί κατ Οίκον 1151',
                for: 'Android Application',
                comment: 'Android εφαρμογή για τους συνεργάτες των Ιατρών κατ Οίκον 1151, επιτρέπει στους συνεργάτες να παρακολουθούν τα περιστατικά τους και δίνει δυνατότητα Online Tracking για να διευκολύνει τη συνεργασία.',
            },
            {
                application: 'www.akestor.gr',
                for: '',
                comment: 'Ιατρικό Διαγνωστικό Κέντρο Κυψέλης.',
            },
            {
                application: 'yperixoikatoikon.gr',
                for: '',
                comment: 'Ακτινοδιαγνώστης Στυλιανός Μαράτος.',
            },
            {
                application: 'www.orthoclinicathens.gr',
                for: '',
                comment: 'Ορθοπεδικός Χριστοδουλάκης Γεώργιος.',
            },
            {
                application: 'www.drnikitidis.gr',
                for: '',
                comment: 'Γενικός Ιατρός Νικητίδης Κωνσταντίνος.',
            },
            {
                application: 'pregnancyhome.gr',
                for: '',
                comment: 'Κέντρο μαιευτικής Φροντίδας και Ευεξίας',
            }
        ]
    }),
    methods: {
        skillKey: function(key) {
            return 'skill-' + key;
        },
        experienceKey: function(key) {
            return 'experience-' + key;
        },
        responsibilityKey: function(key) {
            return 'responsibility-' + key;
        },
        applicationKey: function(key) {
            return 'application-' + key;
        }
    }
}
</script>
