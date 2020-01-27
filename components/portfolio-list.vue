<template>
    <div class="about-page__section about-page__portfolio">
        <h3 class="title font-weight-bold">PORTFOLIO</h3>
        <v-list two-line>
            <v-list-tile v-for="item in portfolioList" :key="item.title" class="p-0">
                <v-list-tile-avatar>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    <v-list-tile-sub-title>
                        <a :href="item.link" target="_blank">{{item.link }}</a>
                    </v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </div>
</template>

<script>
export default {
    data () {
        return {
            portfolioList: [
                { icon: 'fab fa-facebook-f', color: '#3b5998', title: 'Facebook', link: 'https://www.facebook.com/kesidiskostas' },
                { icon: 'fab fa-linkedin-in', color: '#0077b5', title: 'Linkedin', link: 'https://www.linkedin.com/in/konstantinos-kesidis-591296129/' },
                { icon: 'fab fa-github', color: '#333', title: 'Github', link: 'https://github.com/kkesidis' },
            ]
        }
    }
}
</script>