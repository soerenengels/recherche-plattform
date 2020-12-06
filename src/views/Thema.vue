<template>
  <Navigation />
  <main>
    <header>
      <p>
        Hier entsteht eine Themensammlung.<br />
        In einer Tabelle werden Links und Dateien zu einem Thema gesammelt.<br />
        Sie können verschlagwortet werden und so produktiv gemacht werden.
      </p>
    </header>
    <div>
      <table>
        <thead>
          <tr>
            <td class="fixedColumn">URL</td>
            <td>Titel</td>
            <td>Autor:innen</td>
            <td>Beschreibung</td>
            <td>Akteur:innen</td>
            <td>Veröffentlicht</td>
            <td>Tags</td>
            <td>Dateien</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.url }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.author }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.actor }}</td>
            <td>{{ item.published }}</td>
            <td>
              <ul class="tags">
                <li v-for="tag in item.tags" :key="tag">
                  <span :style="'background-color: ' + tag.color">{{
                    tag.value
                  }}</span>
                </li>
              </ul>
            </td>
            <td>{{ item.files }}</td>
          </tr>
          <tr class="newline">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <Tabelle :structure="structure" :dataSrc="data" />
  </main>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Tabelle from "@/components/Tabelle.vue";

export default {
  name: "Thema",
  data() {
    return {
      structure: [
        { value: "URL" },
        { value: "Titel" },
        { value: "Autor:innen" },
        { value: "Beschreibung" },
        { value: "Akteur:innen" },
        { value: "Veröffentlicht" },
        { value: "Tags" },
        { value: "Dateien" },
      ],
      data: [
        {
          url: "https://www.url.de/",
          title: "Titel",
          author: "Autor:in",
          description: "Beschreibung des Inhaltes die da Lorem ipsum wäre.",
          actor: "Sören",
          published: 20201204,
          tags: [
            {
              value: "Studierende",
              color: "lightblue",
            },
          ],
          files: "test.pdf",
        },
      ],
      items: [
        {
          url: "https://www.url.de/",
          title: "Titel",
          author: "Autor:in",
          description: "Beschreibung des Inhaltes die da Lorem ipsum wäre.",
          actor: "Sören",
          published: 20201204,
          tags: [
            {
              value: "Studierende",
              color: "blue",
            },
          ],
          files: "test.pdf",
        },
      ],
    };
  },
  props: {},
  components: {
    Navigation,
    Tabelle,
  },
};
</script>