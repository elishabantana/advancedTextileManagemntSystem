# advancedTextileManagemntSystem
The program performs CRUD operations of textile products to a set.

index.html
contains the interface to add textile to the set, display textile products in the set, delete the textile products from the set and update the price of a given textile product.

index.css
gives the interface its appearance.

textile.mjs
contains the class, Textile, that declares the name and price of a textile product. It also contains the setters and getters for the properties.

specialTextile.mjs
contains the class SpecialTextile that extends Textile with additional logic of determining the discount of product given discount percentage.

textileManager.mjs
contains the class TextileManager which has a set where the different textile products are stored. It contains the methods which add new textile products to the set, display the products to the console, update the price od a given product, delete a product from the set.