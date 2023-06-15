import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import themeConfig from '@themeConfig';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        customVariables: ['@/styles/variables.scss'],
        treeShake: true,
        dark: themeConfig.darkTheme,
        themes : {
            ... themeConfig.themes
        }
    },
});
