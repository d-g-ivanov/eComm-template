# eComm-template

One-page e-commerce site template. Includes a simple client-side cart, several forms, banners and a simple filtering system.

Template is entirely client-side (for now). Content on it is generated during page load based on data in JSON format within the data.js file. Structure is simple and should be self-explanatory. Generated areas include banners, product cards and fitlers.

NOTE: template was rather created for learning purposes, not actual use. If you find it useful though, feel free to modify and go nuts.


## Install

Download and use.


## Usage

Any way you'd like. Several areas would need to be updated as follows:

``` html
index.html
```
- check out the comments in the file, some denote areas to update. Each of these can be updated via the relevant js file as well.


``` html
form.js
```
- provide the form actions and the template will be automatically updated on page load (I used Google Sheets script to handle form submits)

``` html
data.js
```
- data is currently loaded dynamically during page load. This file contains the constructs for that in JSON format. Should be easy to read and should be easily convertible to an AJAX requstable resource.
- contains information about banners, product grid, and filters


``` html
cart.js and product-grid.js
```
- update currency

NOTES:
The idea to add the currency into the data.js construct just occurred to me. Might have been more convenient, but would require incovenient currency conversions, if (for some reason) you were to use different currencies in different items.


#### Some ideas on the above
Anyhow, product grid currency can be easily made accessible via the data.js file. Just add the new key to each item (as per your own discretion), and then update in ```html product-grid.js``` update the ```html prgridcurrency``` variable occurrences to that new key.

For the Cart file, you can update the ```html addItem``` function to include the currency in within the Cart items. In ```html createCartModal function replace myCart.currency``` with the items currency information. For the subtotal you will still need a single currency though, so you are on your own on that.


## Compatibility

(September 2018) Tested only on the latest verisons of Chrome and Firefox. IE tests cover IE11 and (emulation) of IE10.


## License

eComm-template is licensed under the [MIT license](https://raw.github.com/joshfire/jsonform/master/LICENSE).

Images, fonts and other visuals are only used for testing purposes. I do not claim any copyrights or ownership on them. As far as I am aware, these are not copyrighted and should be free to use. that would be at your own risk though.
