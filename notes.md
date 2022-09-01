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
Expected Result: Page should load immediately each time, with no delay.
Actual Result: User has to wait 5 seconds each time before the inventory page loads.
Severity = Priority (User will most likely leave the page and move on to another website since they have to wait so long each time they go to the inventory page)



