<template>
  <Navigation />
  <main>
    <article contenteditable>
      <!-- <Editor /> -->
      <h1>File</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit quasi
        soluta tempora, eligendi molestias, blanditiis quas incidunt voluptatem
        ipsum fugit hic impedit beatae accusamus nemo id perferendis quia
        deleniti.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit quasi
        soluta tempora, eligendi molestias, blanditiis quas incidunt voluptatem
        ipsum fugit hic impedit beatae accusamus nemo id perferendis quia
        deleniti.
      </p>
      <h2>Zwischenüberschrift</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit quasi
        soluta tempora, eligendi molestias, blanditiis quas incidunt voluptatem
        ipsum fugit hic impedit beatae accusamus nemo id perferendis quia
        deleniti.
      </p>
      <h2>Ereignis</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit quasi
        soluta tempora, eligendi molestias, blanditiis quas incidunt voluptatem
        ipsum fugit hic impedit beatae accusamus nemo id perferendis quia
        deleniti.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit quasi
        soluta tempora, eligendi molestias, blanditiis quas incidunt voluptatem
        ipsum fugit hic impedit beatae accusamus nemo id perferendis quia
        deleniti.
      </p>
    </article>
    <aside>
      <section>
        <h2>Inhaltsverzeichnis</h2>
        <ul>
          <li>File</li>
          <li>
            <ul>
              <li>Zwischenüberschrift</li>
              <li>Ereignis</li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <h2>Ereignisse</h2>
      </section>
    </aside>
  </main>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
/* import Editor from "@/components/Editor.vue"; */
/* import Button from "@/components/Button.vue"; */

export default {
  name: "Kontakte",
  data() {},
  methods: {},
  props: {},
  components: {
    Navigation,
    /* Editor, */
    /* Button, */
  },
};
</script>

<style scoped>
main {
  display: flex;
}
article {
  flex: 50% 2;
  padding-right: 2em;
}
aside {
  flex: 25% 1;
}
aside ul {
  list-style-type: none;
}
aside ul ul {
  padding-left: 1em;
}
</style>