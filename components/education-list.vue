<template>
    <v-flex xs12 class="cv-section">
        <div class="cv-section-headline-wrapper mb-3">
            <h3 class="headline font-weight-bold">
                <v-icon class="squared-icon">fas fa-graduation-cap</v-icon> 
                <span>Education</span>
            </h3>
        </div>

        <v-timeline dense align-top>
            <v-timeline-item small fill-dot v-for="(item,index) in list" :key="educationKey(index)">
                <h4 class="title mb-2">
                    <span class="font-weight-bold">{{ item.title }}</span> | 
                    <span class="grey--text">{{ item.from }} - {{ item.to }}</span>
                </h4>
                <p class="subheading">{{ item.subtitle }}</p>
            </v-timeline-item>
        </v-timeline>
    </v-flex>
</template>

<script>
export default {
    data () {
        return {
            list: [
                {
                    title: 'Public IEK Aigaleo',
                    subtitle: 'IT Application Technician',
                    from: '08.2014',
                    to: '02.2016'
                }
            ]
        }
    },
    methods: {
        educationKey: function(key) {
            return 'education-' + key;
        }
    }
}
</script>