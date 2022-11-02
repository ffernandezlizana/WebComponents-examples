class MyTag extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    disconnectedCallback() {
        this.remove();
    }

    connectedCallback() {
        this.mapComponentAttributes();
        this.render();
        this.initComponent();
    }

    render() {
        this.shadowDOM.innerHTML = `
            ${this.templateCss()}
            ${this.template()}
        `;
    }

    initComponent() {
        this.$tag = this.shadowDOM.querySelector('.tag');
    }

    template() {
        return `
            <div class="tag">
                <p>${this.attributes.text.value}</p>
            </div>
        `;
    }

    templateCss() {
        return `
            <style>
                .tag{
                    height: 20px;
                    width: -webkit-fit-content;
                    width: fit-content;
                    width: -moz-fit-content;
                    display: flex;
                    align-items: center;
                    border: 1px #747980 solid;
                    border-radius: 18px;
                }
                .tag p{
                    color: #747980;;
                    padding: 0 10px;
                    font-size: 20px;
                    font-weight: 500;
                }
            </style>
        `;
    }

    mapComponentAttributes() {
        const attributesMapping = [
            'text',
        ];
        attributesMapping.forEach(key => {
            if (!this.attributes[key]) {
                this.attributes[key] = {value: ''};
            }
        });
    }
}

export default MyTag;
