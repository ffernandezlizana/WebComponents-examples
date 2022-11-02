import Schema from './schema/schema.js';

class MyButtonExtendSchema extends Schema {
    initComponent() {
        this.$buttonElement = this.shadowDOM.querySelector('button');
        this.$buttonElement.addEventListener('click', this.onClickBtn.bind(this));
    }

    onClickBtn() {
        this.dispatchEvent(new CustomEvent('my-event-click', {detail: 'Se ha ejecutado el evento'}));
    }

    template() {
        return `
            <button>${this.attributes.text.value}</button>
        `;
    }

    templateCss(){
        return ``;
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

export default MyButtonExtendSchema;
