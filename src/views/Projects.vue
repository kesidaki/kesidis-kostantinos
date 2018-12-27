<template>
    <v-container grid-list-md id="projects-page">
        <v-layout row wrap>

            <v-flex xs12>
                <h1>Projects</h1>
            </v-flex>

            <v-flex xs12>
                <v-divider></v-divider>
                <h2 class="headline pa-3 font-weight-bold">Ιστοσελίδες</h2>
                <v-divider></v-divider>
            </v-flex>

            <v-flex xs12>
                <v-card v-for="(item, index) in websites" :key="websitesKey(index)" class="mb-4">
                    <v-layout row wrap>
                        <v-flex xs12 md4>
                            <a :href="item.url" target="_blank">
                                <v-img
                                :src="item.image"
                                ></v-img>
                            </a>
                        </v-flex>
                        <v-flex xs12 md8>
                            <h3 class="display-1 pa-3">{{ item.title }}</h3>
                            <h4 class="title pa-3">{{ item.subtitle }}</h4>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>

            <v-flex xs12 class="mb-4">
                <v-divider></v-divider>
                <h2 class="headline pa-3 font-weight-bold">Εφαρμογές</h2>
                <v-divider></v-divider>
            </v-flex>

            <v-flex xs12>
                <v-card v-for="(item, index) in applications" :key="applicationKey(index)" class="mb-4">
                    <v-layout row wrap>
                        <v-flex xs12><h3 class="title pa-3">{{ item.name }}</h3></v-flex>
                        <v-flex xs12 md3 v-for="(image, imgIndex) in item.images" :key="appImageKey(index, imgIndex)">
                            <v-img :src="image" :alt="item.name"></v-img>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        websites: [
            {
                image: './images/websites/1151.jpg',
                url: 'https://www.1151.gr/',
                title: 'Γιατροί κατ Οίκον 1151',
                subtitle: '',
                comment: '',
            },
            {
                image: './images/websites/citydoctors.jpg',
                url: 'https://www.citydoctors.gr/',
                title: 'CityDoctors',
                subtitle: 'Επαγγελματικός Κατάλογος Υγείας',
                comment: '',
            },
            {
                image: './images/websites/akestor.jpg',
                url: 'http://www.akestor.gr/',
                title: 'Ακέστωρ',
                subtitle: 'Ιατροδιαγνωστικό Κέντρο',
                comment: '',
            },
            {
                image: './images/websites/maratos.jpg',
                url: 'http://www.aktinografieskatoikon.gr/',
                title: 'Μαράτος Στυλιανός',
                subtitle: 'Ιατρός Ακτινοδιαγνώστης',
                comment: '',
            },
            {
                image: './images/websites/orthoclinic-athens.jpg',
                url: 'https://www.orthoclinicathens.gr/',
                title: 'Χριστοδουλάκης Γεώργιος',
                subtitle: 'Ορθοπεδικός Χειρουργός',
                comment: '',
            },
            {
                image: './images/websites/dr-nikitidis.jpg',
                url: 'https://www.drnikitidis.gr/',
                title: 'Νικητίδης Κων/νος',
                subtitle: 'Γενικός Ιατρός',
                comment: '',
            },
            {
                image: './images/websites/pregnancy-home.jpg',
                url: 'https://pregnancyhome.gr/',
                title: 'Pregnancy Home',
                subtitle: 'Κέντρο μαιευτικής φροντίδας και ευεξίας',
                comment: '',
            },
        ],
        applications: [
            {
                name: 'Γιατροί κατ Οίκον 1151',
                images: [
                    './images/applications/mobile-1151-1.png',
                    './images/applications/mobile-1151-2.png',
                    './images/applications/mobile-1151-3.png',
                    './images/applications/mobile-1151-4.png',
                ]
            },
            {
                name: '1151 Doc Spot',
                images: [
                    './images/applications/mobile-docspot.jpg',
                ]
            },
        ]
    }),
    methods: {
        websitesKey: function(key) {
            return `websites-${key}`;
        },
        applicationKey: function(key) {
            return `applications-${key}`;
        },
        appImageKey: function(index, imgIndex) {
            return `image-${index}-${imgIndex}`;
        }
    }
}
</script>
