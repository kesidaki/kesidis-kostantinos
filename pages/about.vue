<template>
    <v-container grid-list-md id="about-page">
        <v-layout row wrap>

            <v-flex d-flex xs12>
                <v-layout row wrap>
                    <v-flex xs12 md4 lg3>
                        <v-img :src="image"/>
                    </v-flex>
                    <v-flex xs12 md8 lg9>
                        <h1>Konstantinos Kesidis</h1>
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
                <p>Hello. My name is Konstantinos Kesidis and i work as a web developer</p>
                <p>I started developing as a hobby and it almost immediatelly became my career of choice. What i love most about my job is the ability to design and create beautiful websites depending on the content they provide. Gaining the skills and knowledge required to create functional applications that will satisfy both my and my clients need.</p>
                <p class="mb-0">I always try to learn something new and work on improving my already existing knowledge, so that i can deliver better and better results. Technology and the digital world does not stand still and i believe that neither should i. This is also part of what i love about my job, there is always something to learn and many new ways to improve.</p>
            </v-flex>

            <v-flex xs12 class="cv-section">
                <v-divider class="my-4 notched"/>
                <v-layout row wrap>                    
                    <v-flex xs12 md4 lg2><h3 class="headline">Skills</h3></v-flex>
                    <v-flex xs12 md8 lg10>
                        <v-chip
                        v-for="(item, index) in skills" 
                        :key="skillKey(index)"
                        class="title"
                        color="#CFD8DC"
                        >{{ item }}</v-chip>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex xs12 class="cv-section">
                <v-divider class="my-4 notched"/>
                <v-layout row wrap>
                    <v-flex xs12 md4 lg2><h3 class="headline">Experience</h3></v-flex>
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

                                <v-list-tile v-for="(subItem, subIndex) in item.responsibilities" :key="responsibilityKey(subIndex)" class="custom-v-list-tile-content">
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

            <v-flex xs12 class="cv-section">
                <v-divider class="my-4 notched"/>
                <v-layout row wrap>
                    <v-flex xs12 md4 lg2><h3 class="headline">Education</h3></v-flex>
                    <v-flex xs12 md8 lg10>
                        <v-list two-line>
                            <v-list-tile>
                                <v-list-tile-content>
                                    <v-list-tile-title><b>Public IEK Aigaleo</b> | IT Application Technician</v-list-tile-title>
                                    <v-list-tile-sub-title>October 2014 - February 2016</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex xs12 class="cv-section">
                <v-divider class="my-4 notched"/>
                <v-layout row wrap>
                    <v-flex xs12 md4 lg2><h3 class="headline">Websites - Applications</h3></v-flex>
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
import myImg from '~/assets/images/konstantinos-kesidis-2.jpg';

export default {
    head () {
        return {
            title: 'Βιογραφικό | Κωνσταντίνος Κεσίδης'
        }
    },

    data: () => ({
        image: myImg,
        contactList: [
            { icon: 'location_on', title: 'Kolokotroni 60', subtitle: 'Aigaleo' },
            { icon: 'phone', title: '694 38 98 195', subtitle: '' },
            { icon: 'alternate_email', title: 'kesidiskostas@gmail.com', subtitle: '' },
        ],
        skills: [
            'HTML', 'CSS/SASS/SCSS', 'Javascript', 'jQuery',
            'PHP', 'Laravel', 'Symfony', 'CodeIgniter',
            'VueJS', 'NuxtJS', 'Angular 2+', 'Ionic',
            'MySQL',
            'ASP.NET',
            'Bootstrap 4', 'Materialize CSS', 'Vuetify'
        ],
        experience: [
            { 
                company: 'PROCON', 
                role: 'Web Developer', 
                from: 'October 2018', 
                to: 'Today', 
                area: 'Peristeri', 
                responsibilities: [
                    'Create and manage web applications and components'
                ]
            },
            { 
                company: 'Doctors at Home 1151', 
                role: 'Web Developer', 
                from: 'January 2017', 
                to: 'October 2018', 
                area: 'Kypseli', 
                responsibilities: [
                    'Create and manage websites and applications for the company',
                    'Manage company\'s Google Adwords'
                ]
            },
            { 
                company: 'Stratos Labrinos - Computing Systems', 
                role: 'Web Developer', 
                from: 'February 2016', 
                to: 'August 2016', 
                area: 'Koropi', 
                responsibilities: [
                    'Database Management',
                    'Tracking and management of database entries using forms',
                    'Class Libraries for defined tasks',
                    'Entity Framework',
                    'Web Services',
                ]
            },
        ],
        applications: [
            {
                application: 'www.citydoctors.gr',
                for: 'CityDoctors',
                comment: 'E-Health Professional Directory. The user can search for a doctor or other health professionals of his choice in the area he wants and see his profile or make an appointment online. Registered health specialists can log in to the system and update their page with information about their Services and Photos.',
            },
            {
                application: 'www.1151.gr',
                for: 'Doctors at Home 1151',
                comment: 'Website for Home Doctors 1151 to inform the public of their services. Incident and Payments Management Portal for Physicians Associates.',
            },
            {
                application: 'Doctors at Home 1151',
                for: 'Android Application',
                comment: 'Android Application for Doctors at Home 1151 partners. Allows partners to track their incidents and allows online tracking to facilitate collaboration.',
            },
            {
                application: 'www.akestor.gr',
                for: '',
                comment: 'Medical Diagnostic Center at Kypseli.',
            },
            {
                application: 'yperixoikatoikon.gr',
                for: '',
                comment: 'Radiologist Stylianos Maratos.',
            },
            {
                application: 'www.orthoclinicathens.gr',
                for: '',
                comment: 'Orthopedic Christodoulakis Georgios.',
            },
            {
                application: 'www.drnikitidis.gr',
                for: '',
                comment: 'General Practitioner Nikitidis Konstantinos.',
            },
            {
                application: 'pregnancyhome.gr',
                for: '',
                comment: 'Center for obstetric care and wellness',
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
