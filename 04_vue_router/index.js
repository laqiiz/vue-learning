// Route components
const Foo = {template: '<div>foo</div>'};
const Bar = {template: '<div>bar</div>'};
const User = {
    props: ['id'],
    template: `
    <div class="user">
      <h2>User {{ id }}</h2>
      <router-view></router-view>
    </div>
  `,
    beforeRouteUpdate(to, from, next) { // route change watcher
        // next() を呼び出すのを忘れないでください
        next()
    }
};
const NotFound = {template: '<div>NotFound</div>'};
const UserHome = {template: '<div>Home</div>'}
const UserProfile = {template: '<div>Profile</div>'}
const UserPosts = {template: '<div>Posts</div>'}

// Router
const router = new VueRouter({
    routes: [
        {path: '/foo', component: Foo},
        {path: '/bar', component: Bar},
        // dynamic segment
        {
            path: '/user/:id', component: User, props: true,
            children: [
                {path: '', name: "home", component: UserHome},
                {path: 'profile', component: UserProfile},
                {path: 'posts', component: UserPosts}
            ]
        },
        {path: "/redirect", redirect: {name: "home"}},
        {path: '*', component: NotFound}, // For 404page
    ]
})

// Router
const app = new Vue({router}).$mount('#app');
