Vue.component('close-svg', {
    template: `<svg id="update_exit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" >
                    <circle cx="12" cy="12" r="11" fill="grey" />
                    <path stroke="white" stroke-width="4" fill="none" d="M6.25,6.25,17.75,17.75" />
                    <path stroke="white" stroke-width="4" fill="none" d="M6.25,17.75,17.75,6.25" />
                </svg>`
});

Vue.component('add-svg', {
    template: `<svg id="add_icon_button" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48" style=" fill:#000000;">
                    <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
                    <path fill="#fff" d="M22,15h4v18h-4V15z"></path>
                    <path fill="#fff" d="M15,22h18v4H15V22z"></path>
                </svg>`
});

Vue.component('nav-bar', {
    template: `<div id="navigation">
                    <a id="dictionaryMenu" :class="{ active: seenDictionary }" @click="$emit('click-nav', 'dictionary')">Dictionary</a>
                    <a id="quizMenu" :class="{ active: seenQuiz }" @click="$emit('click-nav', 'quiz')">Quiz</a>
                    <a id="scoreMenu" :class="{ active: seenScore }" @click="$emit('click-nav', 'score')">Score</a>
               </div>`,
    props: ["seen-dictionary", "seen-quiz", "seen-score", ]
});

Vue.component('update-form', {
    template: `<div id="update_form" v-if="seenTable" ref="update_form">
                    <input class="input" type="text" id="update_character" v-model="characterInput" ref="character">
                    <input class="input" type="text" id="update_english" v-model="englishInput" ref="english">
                    <input class="input" type="text" id="update_group" v-model="groupInput" ref="group">

                    <button id="update_button" @click="$emit('click-u')">Edit</button>
                    <close-svg @click.native="$emit('click-ue')"></close-svg>
              </div>`,
    props: ["character", "english", "group", "seen-table"],
    computed: {
        characterInput: {
            get: function () {
                return this.character;
            },
            set: function (newValue) {
                this.$emit('update:character', newValue)
            }
        },
        englishInput: {
            get: function () {
                return this.english;
            },
            set: function (newValue) {
                this.$emit('update:english', newValue)
            }
        },
        groupInput: {
            get: function () {
                return this.group;
            },
            set: function (newValue) {
                this.$emit('update:group', newValue)
            }
        }
    }
});

Vue.component('add-form', {
    template: `<div id="add_form" v-if="seenAdd" :style="seenAdd ? 'display:block' : 'display:none'">
                    <input type="text" class="input" id="add_character" placeholder="character" v-model="characterInput" ref="character">
                    <input type="text" class="input" id="add_english" placeholder="english" v-model="englishInput" ref="english">
                    <input type="text" class="input" id="add_group" placeholder="group" v-model="groupInput" ref="group">

                    <button id="add_button" @click="$emit('click-a')">Add</button>
                    <close-svg @click.native="$emit('click-ae')"></close-svg>
                </div>`,
    props: ["character", "english", "group", "seen-add"],
    computed: {
        characterInput: {
            get: function () {
                return this.character;
            },
            set: function (newValue) {
                this.$emit('update:character', newValue)
            }
        },
        englishInput: {
            get: function () {
                return this.english;
            },
            set: function (newValue) {
                this.$emit('update:english', newValue)
            }
        },
        groupInput: {
            get: function () {
                return this.group;
            },
            set: function (newValue) {
                this.$emit('update:group', newValue)
            }
        }
    }
});
