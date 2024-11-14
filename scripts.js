function toggleItems(element) {
    const itemsList = element.nextElementSibling;
    const allLists = document.querySelectorAll('.items');

    // إغلاق كل القوائم المفتوحة باستثناء القائمة الحالية
    allLists.forEach(list => {
        if (list !== itemsList) {
            list.classList.remove('visible');
        }
    });

    // إظهار أو إخفاء القائمة الحالية
    itemsList.classList.toggle('visible');
}

function selectItem(element) {
    const itemText = element.textContent;
    const selectedItemsContainer = document.getElementById('selected-items-container');

    // إنشاء عنصر جديد للعناصر المختارة
    const itemContainer = document.createElement('div');
    const itemNote = document.createElement('textarea');
    const removeBtn = document.createElement('button');

    itemContainer.className = 'item-container';
    itemNote.placeholder = 'أضف ملاحظة هنا...';
    removeBtn.textContent = '×';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = function() {
        itemContainer.remove();
    };

    itemContainer.appendChild(document.createTextNode(itemText));
    itemContainer.appendChild(itemNote);
    itemContainer.appendChild(removeBtn);
    selectedItemsContainer.appendChild(itemContainer);
}
