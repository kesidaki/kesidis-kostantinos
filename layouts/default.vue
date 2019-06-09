<template>
    <v-app
    id="inspire"
    light
    >
        <v-navigation-drawer
        v-model="drawer"
        fixed
        app
        >
            <v-list dense class="pt-0">
                <v-list-tile id="nav-bg">
                    <v-list-tile-content id="nav-bar-header">
                    <img src="~assets/images/konstantinos-kesidis.jpg" title="Kesidis Kostas" id="my-image"/>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

            <v-list class="mt-4">
            <v-list-tile v-for="item in items" :key="item.text" class="mb-3 mt-3">
                <v-list-tile-action>
                    <v-icon color="black">{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>
                        <router-link :to="item.link">{{ item.text }}</router-link>
                    </v-list-tile-title>
                </v-list-tile-content>
                </v-list-tile>

                <v-divider></v-divider>
                    
                <v-list-tile class="mt-3" v-for="item in social" :key="item.title">
                    <v-list-tile-avatar>
                        <img :src="item.icon"/>
                    </v-list-tile-avatar>
                    <v-list-tile-title class="grey--text text--darken-1">
                        <a :href="item.link" target="_blank">{{ item.title }}</a>
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar
        color="#01579b"
        dense
        fixed
        app
        class="hidden-lg-and-up"
        >
            <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-lg-and-up white--text"></v-toolbar-side-icon>
        </v-toolbar>

        <v-content>
            <router-view></router-view>
        </v-content>

        <v-footer class="pa-3" color="#01579b">
            <v-spacer></v-spacer>
            <div class="white--text">&copy; {{ new Date().getFullYear() }} | Konstantinos Kesidis</div>
        </v-footer>
    </v-app>
</template>

<script>
import facebookIcon from '~/assets/icons/facebook.svg';
import linkedinIcon from '~/assets/icons/linkedin.svg';
import githubIcon from '~/assets/icons/github.svg';

export default {
    data: () => ({
        drawer: null,
        items: [
        { icon: 'home', text: 'Home Page', link: '/' },
        { icon: 'account_box', text: 'About Me', link: 'about' },
        { icon: 'web', text: 'Projects', link: 'projects' },
        ],
        social: [
        { icon: facebookIcon, color: '#3b5998', title: 'Facebook', link: 'https://www.facebook.com/kesidiskostas' },
        { icon: linkedinIcon, color: '#0077b5', title: 'Linkedin', link: 'https://www.linkedin.com/in/konstantinos-kesidis-591296129/' },
        { icon: githubIcon, color: '#333', title: 'Github', link: 'https://github.com/kkesidis' },
        ],
    })
}
</script>