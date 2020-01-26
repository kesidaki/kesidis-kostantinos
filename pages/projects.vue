<template>
    <v-container grid-list-md id="projects-page">
        <v-layout row wrap>

            <v-flex xs12>
                <h1>Projects</h1>
            </v-flex>

            <v-flex xs12>
                <v-divider></v-divider>
                <h2 class="headline pa-3 font-weight-bold">Websites</h2>
                <v-divider></v-divider>
            </v-flex>

            <v-flex v-for="(item, index) in websites" :key="websitesKey(index)" xs12 md6 lg4 class="mb-4">
                <v-card height="100%">
                    <v-img :src="item.image" @click="showImage(item.image)"/>
                    <v-card-text>
                        <h3 class="display-1 pa-3">{{ item.title }}</h3>
                        <h4 class="title pa-3" v-if="item.subtitle.length > 0">{{ item.subtitle }}</h4>
                    </v-card-text>
                    <v-btn fab color="primary" absolute bottom right large :href="item.url" target="_blank">
                        <v-icon large>public</v-icon>
                    </v-btn>
                </v-card>
            </v-flex>

            <v-flex xs12 class="mb-4">
                <v-divider></v-divider>
                <h2 class="headline pa-3 font-weight-bold">Applications</h2>
                <v-divider></v-divider>
            </v-flex>

            <v-flex xs12>
                <v-card v-for="(item, index) in applications" :key="applicationKey(index)" class="mb-4">
                    <v-card-title><h3 class="title pa-3">{{ item.name }}</h3></v-card-title>
                    <v-layout row wrap>
                        <v-flex xs12 md3 v-for="(image, imgIndex) in item.images" :key="appImageKey(index, imgIndex)">
                            <v-img :src="image" :alt="item.name" height="300" @click="showImage(image)"></v-img>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>

        </v-layout>

        <v-dialog max-width="1200px" v-model="dialogShow">
            <v-card>
                <v-img :src="dialogImg"/>
                <v-card-actions>
                    <v-btn color="primary" @click="closeDialog">
                        <v-icon>close</v-icon> Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import docAtHomeImg from '~/assets/images/websites/1151.jpg';
import cityDoctorsImg from '~/assets/images/websites/citydoctors.jpg';
import akestorImg from '~/assets/images/websites/akestor.jpg';
import aktinografiesImg from '~/assets/images/websites/maratos.jpg';
import orthoClinicImg from '~/assets/images/websites/orthoclinic-athens.jpg';
import nikitidisImg from '~/assets/images/websites/dr-nikitidis.jpg';
import pregnancyHomeImg from '~/assets/images/websites/pregnancy-home.jpg';
import app1151_1 from '~/assets/images/applications/mobile-1151-1.png';
import app1151_2 from '~/assets/images/applications/mobile-1151-2.png';
import app1151_3 from '~/assets/images/applications/mobile-1151-3.png';
import app1151_4 from '~/assets/images/applications/mobile-1151-4.png';
import docSpot_1 from '~/assets/images/applications/mobile-docspot.jpg';

export default {
    head () {
        return {
            title: 'Ιστοσελίδες / Εφαρμογές | Κωνσταντίνος Κεσίδης'
        }
    },

    data: () => ({
        websites: [
            {
                image: docAtHomeImg,
                url: 'https://www.1151.gr/',
                title: 'Doctors at Home 1151',
                subtitle: '',
                comment: '',
            },
            {
                image: cityDoctorsImg,
                url: 'https://www.citydoctors.gr/',
                title: 'CityDoctors',
                subtitle: 'Professional Health Directory',
                comment: '',
            },
            {
                image: akestorImg,
                url: 'http://www.akestor.gr/',
                title: 'Ακέστωρ',
                subtitle: 'Medical Diagnostic Center',
                comment: '',
            },
            {
                image: aktinografiesImg,
                url: 'http://www.aktinografieskatoikon.gr/',
                title: 'Stylianos Maratos',
                subtitle: 'Radiologist',
                comment: '',
            },
            {
                image: orthoClinicImg,
                url: 'https://www.orthoclinicathens.gr/',
                title: 'Christodoulakis Georgios',
                subtitle: 'Orthopaedic surgeon',
                comment: '',
            },
            {
                image: nikitidisImg,
                url: 'https://www.drnikitidis.gr/',
                title: 'Nikitidis Konstantinos',
                subtitle: 'General Doctor',
                comment: '',
            },
            {
                image: pregnancyHomeImg,
                url: 'https://pregnancyhome.gr/',
                title: 'Pregnancy Home',
                subtitle: 'Center for obstetric care and well-being',
                comment: '',
            },
        ],
        applications: [
            {
                name: 'Doctors at Home 1151',
                images: [
                    app1151_1,
                    app1151_2,
                    app1151_3,
                    app1151_4,
                ]
            },
            {
                name: '1151 Doc Spot',
                images: [
                    docSpot_1,
                ]
            },
        ],
        dialogImg: '',
        dialogShow: false,
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
        },
        showImage(image) {
            this.dialogImg  = image;
            this.dialogShow = true;
        },
        closeDialog() {
            this.dialogImg  = '';
            this.dialogShow = false;
        }
    }
}
</script>
