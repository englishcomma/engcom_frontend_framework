class Button {
    constructor(size, color, title, id, inside_HTML) {
        this.size = size;
        this.color = color;
        this.title = title;
        this.id = id;
        this.inside_HTML = inside_HTML;
    }

    get createButton() {
        return `
        <button type="button" class="btn btn-${this.size} btn-${this.color}" title="${this.title}" id="${this.id}">
            ${this.inside_HTML}
        </button>
        `;
    }
}

class WordCard {
    constructor(id, spelling, meaning, pronounce, pos, word_used_count) {
        this.id = id;
        this.spelling = spelling;
        this.meaning = meaning;
        this.pronounce = pronounce;
        this.pos = pos;
        this.word_used_count = word_used_count;
    }
    get getId() {
        return this.id;
    }
    get getSpelling() {
        return this.spelling;
    }
    get createHTML() {
        return `
            <div class="col-md-3 col-md-3">
                <div class="card">
                    <div class="card-body text-center">
                        <h5 class="card-title">${this.spelling}</h5>
                        <p class="card-text">${this.pronounce}</p>
                        <p class="card-text"><small class="text-muted">${this.pos}</small>${this.meaning}</p>
                        <p class="card-text"><small class="text-muted">지금까지 ${this.word_used_count}명이 사용하였습니다.</small></p>
                    </div>
                </div>
            </div>
        `;
    }
}

class