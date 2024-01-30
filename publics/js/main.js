// HEADER START
const activeMenu = (element) => {
    $('body').toggleClass('active');
    $(".btn_menu_mobile").toggleClass("active");
    $(".menu_move").toggleClass("active");
}

// COPPY
function copy(val) {
    navigator.clipboard.writeText(val);
    toastr.success('Copy success');
}

