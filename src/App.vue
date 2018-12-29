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
                    <p class="white--text headline">Κωνσταντίνος Κεσίδης</p>
                    <p class="white--text title">Web Developer</p>
                    <img src="/images/konstantinos-kesidis.jpg" title="Kesidis Kostas" id="my-image"/>
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
                <v-list-tile-action>
                    <v-icon :color="item.color">{{ item.icon }}</v-icon>
                </v-list-tile-action>
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
export default {
    data: () => ({
        drawer: null,
        items: [
            { icon: 'fa-home', text: 'Αρχική Σελίδα', link: '/' },
            { icon: 'fa-id-card', text: 'Βιογραφικό', link: 'biografiko' },
            { icon: 'fa-project-diagram', text: 'Projects', link: 'projects' },
        ],
        social: [
            { icon: 'fab fa-facebook', color: '#3b5998', title: 'Facebook', link: 'https://www.facebook.com/kesidiskostas' },
            { icon: 'fab fa-linkedin', color: '#0077b5', title: 'Linkedin', link: 'https://www.linkedin.com/in/konstantinos-kesidis-591296129/' },
            { icon: 'fab fa-github', color: '#333', title: 'Github', link: 'https://github.com/kesidaki' },
        ],
    })
}
</script>