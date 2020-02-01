<template>
    <div class="about-page__section about-page__contact">
        <h3 class="title font-weight-bold">CONTACT</h3>
        <v-list two-line>
            <v-list-tile v-for="item in contactList" :key="item.title" class="p-0" :class="{'d-print-none': !item.print}">
                <v-list-tile-avatar>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </div>
</template>

<script>
export default {
    data () {
        return {
            contactList: [
                { icon: 'fas fa-mobile-alt', title: 'Phone', subtitle: '698 70 95 189', print: true },
                { icon: 'fas fa-at', title: 'E-mail', subtitle: 'kesidiskostas@gmail.com', print: true },
                { icon: 'fas fa-globe', title: 'Website', subtitle: 'kostas.kesidis.net', print: true },
                { icon: 'fas fa-map-marker-alt', title: 'Address', subtitle: 'Kolokotroni 60, Aigaleo', print: false },
            ]
        }
    }
}
</script>