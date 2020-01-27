<template>
    <v-flex xs12 class="cv-section">
        <div class="cv-section-headline-wrapper mb-3">
            <h3 class="headline font-weight-bold">
                <v-icon class="squared-icon">fas fa-chart-pie</v-icon> 
                Experience
            </h3>
        </div>

        <v-timeline dense align-top>
            <v-timeline-item small fill-dot v-for="item in experience" :key="experienceKey(item.company)">
                <h4 class="title mb-2">
                    <span class="font-weight-bold">{{ item.role }}</span> | 
                    <span class="grey--text">{{ item.from }} - {{ item.to }}</span>
                </h4>
                <p class="subheading"><span class="font-weight-bold">{{ item.company }}: </span>{{ item.text }}</p>
            </v-timeline-item>
        </v-timeline>
    </v-flex>
</template>

<script>
export default {
    data () {
        return {
            experience: [
                { 
                    company: 'PROCON', 
                    role: 'Web Developer', 
                    from: '10.2018', 
                    to: 'Today', 
                    area: 'Peristeri', 
                    text: 'Create and manage web applications and components',
                    responsibilities: [
                        'Create and manage web applications and components'
                    ]
                },
                { 
                    company: 'Doctors at Home 1151', 
                    role: 'Web Developer', 
                    from: '01.2017', 
                    to: '10.2018', 
                    area: 'Kypseli', 
                    text: 'Create and manage websites and applications for the company. Manage company\'s Google Adwords',
                    responsibilities: [
                        'Create and manage websites and applications for the company',
                        'Manage company\'s Google Adwords'
                    ]
                },
                { 
                    company: 'Stratos Labrinos - Computing Systems', 
                    role: 'Web Developer', 
                    from: '02.2016', 
                    to: '08.2016', 
                    area: 'Koropi', 
                    text: 'Database Management. Tracking and management of database entries using forms. Class Libraries for defined tasks. Entity Framework. Web Services',
                    responsibilities: [
                        'Database Management',
                        'Tracking and management of database entries using forms',
                        'Class Libraries for defined tasks',
                        'Entity Framework',
                        'Web Services',
                    ]
                },
            ]
        }
    },
    methods: {
        experienceKey: function(key) {
            return 'experience-' + key;
        },
        responsibilityKey: function(key) {
            return 'responsibility-' + key;
        }
    }
}
</script>