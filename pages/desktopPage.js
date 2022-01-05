const Page = require('./page');

class desktopPage extends Page {
  
    get priceOfFirstElement() {
        return $('div[class="product-grid"] > div:nth-child(1) span[class="price actual-price"]');
    }

    get firstElement() {
        return $('div[class="product-grid"] > div:nth-child(1)');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    get price(){
        return $('span[itemprop="price"]')
    }

    get search(){
        return $('input[id="small-searchterms"]')
    }

    get searchButton(){
        return $('input[class="button-1 search-box-button"]')
    }

    get searchResultTitle(){
        return $('h2[class="product-title"] a')
    }
}

module.exports = new desktopPage();