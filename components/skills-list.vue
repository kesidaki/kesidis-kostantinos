<template>
    <v-flex xs12 class="cv-section">
        <div class="cv-section-headline-wrapper mb-3">
            <h3 class="headline font-weight-bold">
                <v-icon class="squared-icon">fas fa-briefcase</v-icon> 
                <span>Skills</span>
            </h3>
        </div>
        <v-chip
        v-for="(item, index) in skills" 
        :key="skillKey(index)"
        class="title"
        color="#CFD8DC"
        >{{ item }}</v-chip>
    </v-flex>
</template>

<script>
export default {
    data () {
        return {
            skills: [
                'HTML', 'CSS/SASS/SCSS', 'Javascript', 'jQuery',
                'PHP', 'Laravel', 'Symfony', 'CodeIgniter',
                'VueJS', 'NuxtJS', 'Bootstrap 4', 'Materialize CSS', 'Vuetify'
            ]
        }
    },
    methods: {
        skillKey: function(key) {
            return 'skill-' + key;
        }
    }
}
</script>