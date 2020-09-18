const smart_bar = document.getElementsByClassName('smart-bar');

$().ready(function () {
    for (var i = 0; i < smart_bar.length; i++) {
        const smart_bar_btns = smart_bar[i].children[0];

        for (var l = 0; l < smart_bar_btns.children.length; l++) {
            const smart_bar_btn = smart_bar_btns.children[l];

            smart_bar_btn.addEventListener('click', function (e) {
                if (e.target.tagName == 'I') {
                    enableOneButton(e.target.parentElement);
                } else {
                    enableOneButton(e.target);
                }

            });
        }
    }
});

function smartbarBtnClickEvent(my_tag) {
    const event = new CustomEvent(`smartclick`, {
        target: my_tag
    });

    my_tag.dispatchEvent(event);
}

function smartbarBtnClickCancelEvent(my_tag) {
    const event = new CustomEvent(`smartclickcancel`, {
        target: my_tag
    });

    my_tag.dispatchEvent(event);
}

const enableOneButton = (my_tag) => {
    const my_tag_parent_element = my_tag.parentElement;
    const children_btns = my_tag_parent_element.children;

    const active_flag = my_tag.getAttribute('active');
    if(active_flag == 'off') {
        my_tag.setAttribute('active', 'on');
        smartbarBtnClickEvent(my_tag);
    
        for (var i = 0; i < children_btns.length; i++) {
            current_btn = children_btns[i];
            current_btn.disabled = true;
        }
        my_tag.disabled = false;
    } else {
        my_tag.setAttribute('active', 'off');
        smartbarBtnClickCancelEvent(my_tag);

        for (var i = 0; i < children_btns.length; i++) {
            current_btn = children_btns[i];
            current_btn.disabled = false;
        }
    }

    
}