<template>
    <v-flex xs12 class="cv-section">
        <div class="cv-section-headline-wrapper mb-3">
            <h3 class="headline font-weight-bold">
                <v-icon class="squared-icon">fas fa-globe</v-icon> 
                Websites - Applications
            </h3>
        </div>

        <v-timeline dense align-top>
            <v-timeline-item small fill-dot v-for="(item, index) in applications" :key="applicationKey(index)">
                <h4 class="title mb-2">
                    <span class="font-weight-bold">
                        <a :href="getLink(item)" target="_blank">{{ item.application }}</a>
                    </span>
                    <span v-if="item.for !== ''"> | {{ item.for }}</span>
                </h4>
                <p class="subheading">{{ item.comment }}</p>
            </v-timeline-item>
        </v-timeline>
    </v-flex>
</template>

<script>
export default {
    data () {
        return {
            applications: [
                {
                    application: 'citydoctors.gr',
                    for: 'CityDoctors',
                    comment: 'E-Health Professional Directory. The user can search for a doctor or other health professionals of his choice in the area he wants and see his profile or make an appointment online. Registered health specialists can log in to the system and update their page with information about their Services and Photos.',
                    isLink: true,
                },
                {
                    application: '1151.gr',
                    for: 'Doctors at Home 1151',
                    comment: 'Website for Home Doctors 1151 to inform the public of their services. Incident and Payments Management Portal for Physicians Associates.',
                    isLink: true,
                },
                {
                    application: 'Doctors at Home 1151',
                    for: 'Android Application',
                    comment: 'Android Application for Doctors at Home 1151 partners. Allows partners to track their incidents and allows online tracking to facilitate collaboration.',
                    isLink: false,
                },
                {
                    application: 'akestor.gr',
                    for: '',
                    comment: 'Medical Diagnostic Center at Kypseli.',
                    isLink: true,
                },
                {
                    application: 'yperixoikatoikon.gr',
                    for: '',
                    comment: 'Radiologist Stylianos Maratos.',
                    isLink: true,
                },
                {
                    application: 'orthoclinicathens.gr',
                    for: '',
                    comment: 'Orthopedic Christodoulakis Georgios.',
                    isLink: true,
                },
                {
                    application: 'drnikitidis.gr',
                    for: '',
                    comment: 'General Practitioner Nikitidis Konstantinos.',
                    isLink: true,
                },
                {
                    application: 'pregnancyhome.gr',
                    for: '',
                    comment: 'Center for obstetric care and wellness',
                    isLink: true,
                }
            ]
        }
    },
    methods: {
        applicationKey (key) {
            return 'application-' + key;
        },
        getLink (item) {
            if (!item.isLink) {
                return null;
            }

            return 'https://' + item.application;
        }
    }
}
</script>