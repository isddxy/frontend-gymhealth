export default function({ app, store, redirect }) {
    if (store.getters["auth/authenticated"]) {
        // if (app.i18n.locale == 'en') app.i18n.locale ='/'
        // return redirect('/' + app.i18n.locale + '/my');

        return redirect('/ru/my/');
    }
}
