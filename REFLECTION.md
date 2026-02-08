**TypeScript E-Commerce System Implementation**

Functions clearly define parameter and return types (calculateDiscount(product: Product): number), making the codebase self-documenting and preventing type-related bugs.
Method usage: displayDetails() and getPriceWithDiscount() show proper object-oriented design—data and behavior are co-located within the class.

**Challenges & Solution**

*Type mismatches in main.ts*

Initially, handleRequest() returned Promise<void>, causing "Expected 9 arguments, but got 1." I refactored it to return data.products[0], ensuring the async function returns the actual product data needed by the constructor.

*Async/await coordination*

Used await at the call site in main.ts and wrapped the async logic in a proper try-catch block in apiServices.ts. This ensures data is resolved before the Product constructor runs.

*Error handling across layers*

Separated concerns: apiServices.ts handles network errors, errorHandler.ts catches business logic errors (ValidationError, PaymentError). Each layer has explicit error handling.

**Asynchronous Operations & Error Management**

*Async Handling:*

handleRequest() is correctly marked async and uses await for both fetch() and response.json(), ensuring sequential, non-blocking operations.
main.ts awaits the result: const productData = await handleRequest(), blocking until data arrives before instantiating the Product object.
The flow respects the async nature: fetch API data → parse JSON → instantiate model → calculate utilities → validate & handle order.

*Error Management Strategy:*

API layer (apiServices.ts): Catches network/parsing errors with try-catch, logs them, and gracefully handles failures.
Business logic (errorHandler.ts): Custom error classes (ValidationError, PaymentError) provide semantic error types.
Validation: processOrder() checks product validity (non-empty category, positive price) before order processing.
Error recovery: The handleOrder() function catches and logs specific error types, allowing the application to continue without crashing.