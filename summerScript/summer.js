document.getElementById('Kitchenware-1').addEventListener('click', function (event) {
    // card 1 ar calculation
    var firstImage = setElementInnerText('image-1');
    var cartKitchenware1 = setElementInnerText('name-set-1');
    var cart1 = firstImage;
    setTextCartById('name-set-1', cart1)

    var price1 = getTotalPriceById('price-1');
    var totalPrice1 = getTotalPriceById('total-price-1');
    // button enable
    var totalValue1 = event.target.innerText;
    var makePurchaseButton = document.getElementById('btn-make-purchase');
    if (totalValue1 !== 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    }

    // apply btn
    const applyButton = document.getElementById('btn-apply');
    if (totalPrice1 >= 200) {
        applyButton.removeAttribute('disabled');
    }
    else {
        applyButton.setAttribute('disabled', true);
    }

    var inTotalPrice1 = price1 + totalPrice1;
    var totalPriceTwoDecimal1 = inTotalPrice1.toFixed(2);
    setTextCartById('total-price-1', totalPriceTwoDecimal1);
})


// card 2 ar calculation
document.getElementById('Kitchenware-2').addEventListener('click', function (event) {
    secondImage = setElementInnerText('image-2');
    cartKitchenware2 = setElementInnerText('name-set-2');
    cart2 = secondImage;
    setTextCartById('name-set-2', cart2)

    price2 = getTotalPriceById('price-2');
    totalPrice2 = getTotalPriceById('total-price-1');
    // button enable
    totalValue2 = event.target.innerText;
    makePurchaseButton = document.getElementById('btn-make-purchase');
    if (totalValue2 !== 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    }

    // apply btn
    const applyButton = document.getElementById('btn-apply');
    if (totalPrice2 >= 200) {
        applyButton.removeAttribute('disabled');
    }
    else {
        applyButton.setAttribute('disabled', true);
    }

    inTotalPrice2 = price2 + totalPrice2;
    totalPriceTwoDecimal2 = inTotalPrice2.toFixed(2);
    setTextCartById('total-price-1', totalPriceTwoDecimal2);
})


// card 3 ar calculation
document.getElementById('Kitchenware-3').addEventListener('click', function (event) {
    const thirdImage = setElementInnerText('image-3');
    const cartKitchenware3 = setElementInnerText('name-set-3');
    const cart3 = thirdImage;
    setTextCartById('name-set-3', cart3)

    const price3 = getTotalPriceById('price-3');
    const totalPrice3 = getTotalPriceById('total-price-1');
    // button enable
    const totalValue3 = event.target.innerText;
    const makePurchaseButton = document.getElementById('btn-make-purchase');
    if (totalValue3 !== 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    }

    // apply btn
    const applyButton = document.getElementById('btn-apply');
    if (totalPrice3 >= 200) {
        applyButton.removeAttribute('disabled');
    }
    else {
        applyButton.setAttribute('disabled', true);
    }

    const inTotalPrice3 = price3 + totalPrice3;
    totalPriceTwoDecimal3 = inTotalPrice3.toFixed(2);
    setTextCartById('total-price-1', totalPriceTwoDecimal3);
})


// card 4 ar calculation
document.getElementById('Sportswear-4').addEventListener('click', function (event) {
    const forthImage = setElementInnerText('image-4');
    const cartSportswear4 = setElementInnerText('name-set-1');
    const cart4 = forthImage;
    setTextCartById('name-set-1', cart4)

    const price4 = getTotalPriceById('price-4');
    const totalPrice4 = getTotalPriceById('total-price-1');
    // button enable
    const totalValue4 = event.target.innerText;
    const makePurchaseButton = document.getElementById('btn-make-purchase');
    if (totalValue4 !== 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    }

    // apply btn
    const applyButton = document.getElementById('btn-apply');
    if (totalPrice4 >= 200) {
        applyButton.removeAttribute('disabled');
    }
    else {
        applyButton.setAttribute('disabled', true);
    }

    const inTotalPrice4 = price4 + totalPrice4;
    totalPriceTwoDecimal4 = inTotalPrice4.toFixed(2);
    setTextCartById('total-price-1', totalPriceTwoDecimal4);
})


// card 5 ar calculation
document.getElementById('Sportswear-5').addEventListener('click', function (event) {
    const fiveImage = setElementInnerText('image-5');
    const cartSportswear5 = setElementInnerText('name-set-2');
    const cart5 = fiveImage;
    setTextCartById('name-set-2', cart5)

    const price5 = getTotalPriceById('price-5');
    const totalPrice5 = getTotalPriceById('total-price-1');
    // button enable
    const totalValue5 = event.target.innerText;
    const makePurchaseButton = document.getElementById('btn-make-purchase');
    if (totalValue5 !== 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    }

    // apply btn
    const applyButton = document.getElementById('btn-apply');
    if (totalPrice5 >= 200) {
        applyButton.removeAttribute('disabled');
    }
    else {
        applyButton.setAttribute('disabled', true);
    }

    const inTotalPrice5 = price5 + totalPrice5;
    totalPriceTwoDecimal5 = inTotalPrice5.toFixed(2);
    setTextCartById('total-price-1', totalPriceTwoDecimal5);
})


// card 6 ar calculation
document.getElementById('Sportswear-6').addEventListener('click', function (event) {
    const sixImage = setElementInnerText('image-6');
    const cartSportswear6 = setElementInnerText('name-set-3');
    const cart6 = sixImage;
    setTextCartById('name-set-3', cart6)

    const price6 = getTotalPriceById('price-6');
    const totalPrice6 = getTotalPriceById('total-price-1');
    // button enable
    const totalValue6 = event.target.innerText;
    const makePurchaseButton = document.getElementById('btn-make-purchase');
    if (totalValue6 !== 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    }

    // apply btn
    const applyButton = document.getElementById('btn-apply');
    if (totalPrice6 >= 200) {
        applyButton.removeAttribute('disabled');
    }
    else {
        applyButton.setAttribute('disabled', true);
    }

    const inTotalPrice6 = price6 + totalPrice6;
    totalPriceTwoDecimal6 = inTotalPrice6.toFixed(2);
    setTextCartById('total-price-1', totalPriceTwoDecimal6);
})


// card 7 ar calculation
document.getElementById('Furniture-7').addEventListener('click', function (event) {
    const sevenImage = setElementInnerText('image-7');
    const cartSportswear7 = setElementInnerText('name-set-1');
    const cart7 = sevenImage;
    setTextCartById('name-set-1', cart7)

    const price7 = getTotalPriceById('price-7');
    const totalPrice7 = getTotalPriceById('total-price-1');
    // button enable
    const totalValue7 = event.target.innerText;
    const makePurchaseButton = document.getElementById('btn-make-purchase');
    if (totalValue7 !== 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    }

    // apply btn
    const applyButton = document.getElementById('btn-apply');
    if (totalPrice7 >= 200) {
        applyButton.removeAttribute('disabled');
    }
    else {
        applyButton.setAttribute('disabled', true);
    }

    const inTotalPrice7 = price7 + totalPrice7;
    totalPriceTwoDecimal7 = inTotalPrice7.toFixed(2);
    setTextCartById('total-price-1', totalPriceTwoDecimal7);
})


// card 8 ar calculation
document.getElementById('Furniture-8').addEventListener('click', function (event) {
    const eightImage = setElementInnerText('image-8');
    const cartSportswear8 = setElementInnerText('name-set-2');
    const cart8 = eightImage;
    setTextCartById('name-set-2', cart8)

    const price8 = getTotalPriceById('price-8');
    const totalPrice8 = getTotalPriceById('total-price-1');
    // button enable
    const totalValue8 = event.target.innerText;
    const makePurchaseButton = document.getElementById('btn-make-purchase');
    if (totalValue8 !== 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    }

    // apply btn
    const applyButton = document.getElementById('btn-apply');
    if (totalPrice8 >= 200) {
        applyButton.removeAttribute('disabled');
    }
    else {
        applyButton.setAttribute('disabled', true);
    }

    const inTotalPrice8 = price8 + totalPrice8;
    totalPriceTwoDecimal8 = inTotalPrice8.toFixed(2);
    setTextCartById('total-price-1', totalPriceTwoDecimal8);
})


// card 9 ar calculation
document.getElementById('Furniture-9').addEventListener('click', function (event) {
    const nineImage = setElementInnerText('image-9');
    const cartSportswear9 = setElementInnerText('name-set-3');
    const cart9 = nineImage;
    setTextCartById('name-set-3', cart9)

    const price9 = getTotalPriceById('price-9');
    const totalPrice9 = getTotalPriceById('total-price-1');
    // button enable
    const totalValue9 = event.target.innerText;
    const makePurchaseButton = document.getElementById('btn-make-purchase');
    if (totalValue9 !== 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    else {
        makePurchaseButton.setAttribute('disabled', true);
    }

    // apply btn
    const applyButton = document.getElementById('btn-apply');
    if (totalPrice9 >= 200) {
        applyButton.removeAttribute('disabled');
    }
    else {
        applyButton.setAttribute('disabled', true);
    }

    const inTotalPrice9 = price9 + totalPrice9;
    totalPriceTwoDecimal9 = inTotalPrice9.toFixed(2);
    setTextCartById('total-price-1', totalPriceTwoDecimal9);
})



// total price ar discount
document.getElementById('btn-apply').addEventListener('click', function () {
    const coupon = document.getElementById('coupon-code');
    const couponValue = coupon.value;
    if (couponValue === 'SELL200') {
        const totalPrice = setElementInnerText('total-price-1');
        const DiscountAmount = 0.20 * totalPrice;

        inTotal = totalPrice - DiscountAmount;
        inTotalTwoDecimal = inTotal.toFixed(2);
        setTextCartById('in-total', inTotalTwoDecimal);

        DiscountPrice = totalPrice - inTotal;
        DiscountPriceTwoDecimal = DiscountPrice.toFixed(2);
        setTextCartById('discount', DiscountPriceTwoDecimal);
    }
})








// function 1
function setElementInnerText(elementId) {
    const Element = document.getElementById(elementId);
    const elementValue = Element.innerText;

    return elementValue;
}

// 2
function setTextCartById(elementId, newValue) {
    const TextElement = document.getElementById(elementId);
    TextElement.innerText = newValue;
}

// 3
function getTotalPriceById(elementId) {
    const Element = document.getElementById(elementId);
    const elementValueString = Element.innerText;
    const elementValue = parseFloat(elementValueString);

    return elementValue;
}