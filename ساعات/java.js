function addToCart(watchName) {
    alert("تمت إضافة " + watchName + " إلى سلة المشتريات بنجاح!");
}

// يمكنك إضافة كود هنا لجعل القائمة العلوية تتغير عند التمرير (Sticky Header)
window.onscroll = function() {
    const header = document.querySelector('header');
    if (window.pageYOffset > 50) {
        header.style.padding = "10px 10%";
        header.style.backgroundColor = "#000";
    } else {
        header.style.padding = "20px 10%";
        header.style.backgroundColor = "#1a1a1a";
    }
};
