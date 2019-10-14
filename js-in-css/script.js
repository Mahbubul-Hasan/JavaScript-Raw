function btn_action(btnName) {

    var button= document.getElementsByClassName("my-div")[0];

    switch (btnName) {
        case 'basic':
            button.className = 'one-class';
            break;

        case 'primary':
            button.className = 'two-class';
            break;

        case 'secondary':
            button.className = 'three-class';
            break;

        case 'success':
            button.className = 'four-class';
            break;

    }

}