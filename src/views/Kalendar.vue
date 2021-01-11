<template>
  <Navigation />
  <main>
    <header>
      <Button type="primary" icon="true">Termin hinzufügen</Button>
      <Button type="secondary">Ansicht</Button>
      <input type="search" value="Suche" />
    </header>
    <!-- Kalendar via https://calendartricks.com/a-calendar-in-three-lines-of-css/ -->
    <div class="calendar-wrapper">
      <h1>Dezemeber</h1>
      <ul class="calendar month">
        <li class="weekday">Montag</li>
        <li class="weekday">Dienstag</li>
        <li class="weekday">Mittwoch</li>
        <li class="weekday">Donnerstag</li>
        <li class="weekday">Freitag</li>
        <li class="weekday">Samstag</li>
        <li class="weekday">Sonntag</li>

        <li class="first-day">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
      </ul>
      <h1>Woche</h1>
      <ul class="calendar week">
        <li class="weekday">Stunde</li>
        <li class="weekday">Montag</li>
        <li class="weekday">Dienstag</li>
        <li class="weekday">Mittwoch</li>
        <li class="weekday">Donnerstag</li>
        <li class="weekday">Freitag</li>
        <li class="weekday">Samstag</li>
        <li class="weekday">Sonntag</li>
        <li>Vormittags</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Mittags</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Abends</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
      </ul>
      <h1>Tag</h1>
      <ul class="calendar day">
        <li class="weekday">Stunde</li>
        <li>Termin</li>
        <li>1</li>
        <li>1</li>
        <li>2</li>
        <li>2</li>
        <li>3</li>
        <li>3</li>
        <li>4</li>
        <li>4</li>
        <li>5</li>
        <li>5</li>
        <li>6</li>
        <li>6</li>
        <li>7</li>
        <li>7</li>
        <li>8</li>
        <li>8</li>
        <li>9</li>
        <li>9</li>
        <li>10</li>
        <li>10</li>
        <li>11</li>
        <li>11</li>
        <li>12</li>
        <li>12</li>
        <li>13</li>
        <li>13</li>
        <li>14</li>
        <li>14</li>
        <li>15</li>
        <li>15</li>
        <li>16</li>
        <li>16</li>
        <li>17</li>
        <li>17</li>
        <li>18</li>
        <li>18</li>
        <li>19</li>
        <li>19</li>
        <li>20</li>
        <li>20</li>
        <li>21</li>
        <li>21</li>
        <li>22</li>
        <li>22</li>
        <li>23</li>
        <li>23</li>
        <li>24</li>
        <li>24</li>
      </ul>
      <h1>Jahr</h1>
      <ul class="calendar year">
        <li>Januar</li>
        <li>Februar</li>
        <li>März</li>
        <li>April</li>
        <li>Mai</li>
        <li>Juni</li>
        <li>Juli</li>
        <li>August</li>
        <li>September</li>
        <li>Oktober</li>
        <li>November</li>
        <li>Dezember</li>
      </ul>
      <h1>Dekade</h1>
    </div>
  </main>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Button from "@/components/Button.vue";

export default {
  name: "Kalendar",
  data() {},
  methods: {},
  props: {},
  components: {
    Navigation,
    Button,
  },
};
</script>

<style scoped>
header {
  display: flex;
}
header input {
  background: none;
  border: none;
  padding: 0.5em;
  font-size: 1em;
  font-family: "forma-djr-display", "Helvetica Neue", "Avenir", "Helvetica",
    "Arial", sans-serif;
}
.calendar {
  display: grid;
  list-style: none;
}
.year {
  grid-template-columns: repeat(4, 1fr);
}
.month {
  grid-template-columns: repeat(7, 1fr);
}
.week {
  grid-template-columns: repeat(8, 1fr);
}
.day {
  grid-template-columns: repeat(2, 1fr);
}
.first-day {
  grid-column-start: 3;
}
</style>
