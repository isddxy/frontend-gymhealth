export default function({ app, store, redirect }) {
    if (store.getters["auth/authenticated"]) {
       return redirect('/my');
    }
}
