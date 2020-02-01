<template>
    <v-container grid-list-md id="about-page">
        <v-layout row wrap>
            <v-flex xs12 class="page-title">
                <h1 class="display-2 font-weight-bold">Konstantinos Kesidis</h1>
                <h2 class="display-1">Web Developer</h2>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs12 md7 order-xs2 order-md1 class="d-print-left d-print-order-1 px-3">
                <skills-list/>
                <v-divider class="my-4"/>
                <experience-list/>
                <v-divider class="my-4"/>
                <education-list/>
                <v-divider class="my-4 d-print-none"/>
                <application-list class="d-print-none"/>
            </v-flex>
            <v-flex xs12 md5 order-xs1 order-md2 class="d-print-right d-print-order-2 px-3 about-page__information-column">
                <about-me/>
                <v-divider class="my-4"/>
                <contact-list/>
                <v-divider class="my-4"/>
                <portfolio-list/>
                <v-divider class="my-4 d-print-none"/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import aboutMe from '@/components/about-me';
import contactList from '@/components/contact-list';
import portfolioList from '@/components/portfolio-list';
import skillsList from '@/components/skills-list';
import experienceList from '@/components/experience-list';
import applicationList from '@/components/application-list';
import educationList from '@/components/education-list';

export default {
    head () {
        return {
            title: 'Βιογραφικό | Κωνσταντίνος Κεσίδης'
        }
    },
    components: {
        aboutMe,
        contactList,
        portfolioList,
        skillsList,
        experienceList,
        applicationList,
        educationList
    }
}
</script>
