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
