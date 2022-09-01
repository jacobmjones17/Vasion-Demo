BUG REPORTS:

loginDelay Test:
1. Sign in using
    username: performance_glitch_user
    password: secret_sauce
- Expected Result: Login immediately with no wait.
- Actual Result: User has to wait 5 seconds before login takes place.
- Severity = Priority (User's who have to wait long periods of time typically leave the website and find another brand.)


inventoryPageDelay Test:
1. Sign in using
    username: performance_glitch_user
    password: secret_sauce
2. Click on an item
3. Return back to inventory page
4. Use filter at top right
- Expected Result: Page should load immediately each time, with no delay.
- Actual Result: User has to wait 5 seconds each time before the inventory page loads.
Severity = Priority (User will most likely leave the page and move on to another website since they have to wait so long each time they go to the inventory page)


pageNotFound Test:
1. Sign in using
    username: problem_user
    password: secret_sauce
2. Click on burger button at top left to unveil the "ALL Items", "ABOUT", "LOGOUT" & "RESET APP STATE" tabs.
3. Click on the "ABOUT" tab. (I tried creating a test for this but I could not find a way using Javascript, to unhide the buttons from selenium so it could click on the "ABOUT" tab.)
- Expected Result: Page should take you to the "https://saucelabs.com/" page.
- Actual Result: Page cannot be found!
Severity = Minor (Will not prevent user from having a good experience, but it does hurt the company a little by not allowing the user to view their main website.)


filterDoesNotWork Test: 
1. Sign in using
    username: problem_user
    password: secret_sauce
2. Click on the filter at the top right and select any option.
- Expected Result: Filter to work properly and filter out the items.
- Actual Result: Filter does not work at all.
Severity - Minor (The user would consider this a nuisance because it would be easier if the items were categorized to their liking.)


itemNotFound Test:
1. Sign in using
    username: problem_user
    password: secret_sauce
2. Click on "Sauce Labs Fleece Jacket" item
- Expected Result: Correct item should load for the user.
- Actual Result: No item was found and therefore the user could not get the item they wanted
Severity: Priority (the user purchasing an item is the whole purpose of the website, we need to make sure they can purchase what they want.)


formNotWorkingProperly Test:
1. Sign in using
    username: problem_user
    password: secret_sauce
2. Add any item to your cart.
3. Click on shopping cart at the top right of page.
4. Click CHECKOUT
5. Type in first Name
6. Type in Last Name
7. Type in Zip/Postal Code
- Expected Result: User should be able to fill out all their information and submit it.
- Actual Result: User cannot fill out their last name. When user clicks on Last name form, it replaces their first name with the last letter they typed. This causes for them not to purchase an item because their information was not filled out correctly.
Severity: Priority (If user cannot fill out their informtaion, then they cannot purchase their items. That means the owner of the website will lose money.)


checkOutWithNoItems Test:
1. Sign in using one of these two usernames
    username: standard_user | performance_glitch_user (any one of these)
    password: secret_sauce
2. Click on shopping cart
3. Click checkout button
4. Fill out each form information
5. Click Finish Button
- Expected Result: Expected to not let the user checkout with 0 items in their shopping cart
- Actual Result: Allows you to checkout with nothing in your cart
Severity: Minor (While they aren't supposed to be able to check out with 0 items, it does not cause the customer to pay for 0 items so it will not lose customers for malpayment.)


informationForm Test: 
1. Sign in using one of these two usernames
    username: standard_user | performance_glitch_user (any one of these)
    password: secret_sauce
2. Click on shopping cart
3. Click checkout button
4. Type your first name and last name, in their respective form
5. Type letters inside of the zip/postal code form.
6. Click Continue
- Epxected Result: Expect zip/postal form to accept numbers and not letters
- Actual Result: Allows you to use a nonexistent zip/code by using letters to checkout.
Severity: Priority (If the user does not get their product, then the company loses business. They cannot receive their items if they do not have a valid zipcode.)

quantity Test:
1. Sign in using
    username: stadard_user
    password: secret_sauce
2. Click "Add to Cart" for any item
3. Click on Shopping Cart
4. Change QTY to 2
- Expected Result: Expected to be able buy multiple of an item
- Actual Result: User cannnot add two of the same item into the cart.
Severity: Priority (If the user needs to buy all of their kids backpacks, they can only order one at a time. This may even cause them to buy a backpack elsewhere. This costs the company business and money.)