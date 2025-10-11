// --- 1️⃣ BASIC FUNCTION DECLARATION ---
        function greet(name) {
            return "Hello, " + name + "!";
        }

        // Call the function
        console.log(greet("Mahak")); // Output: Hello, Mahak!

        // --- 2️⃣ FUNCTION EXPRESSION ---
        const add = function(a, b) {
            return a + b;
        };
        console.log("Sum:", add(5, 10)); // Output: 15

        // --- 3️⃣ ARROW FUNCTION ---
        const multiply = (x, y) => x * y;
        console.log("Product:", multiply(3, 4)); // Output: 12

        // --- 4️⃣ FUNCTION METHODS: call(), apply(), bind() ---
        const person = {
            fullName: function(city, country) {
                return this.firstName + " " + this.lastName + " from " + city + ", " + country;
            }
        };

        const user1 = { firstName: "Raja", lastName: "Kumar" };

        // Using call()
        console.log(person.fullName.call(user1, "Chennai", "India"));

        // Using apply()
        console.log(person.fullName.apply(user1, ["Delhi", "India"]));

        // Using bind()
        const boundFunction = person.fullName.bind(user1, "Mumbai", "India");
        console.log(boundFunction());

        // --- 5️⃣ ACCESSING HTML ELEMENTS ---
        // Change text inside <h2>
       // document.getElementById("heading").innerText = "Welcome to Function Demo!";

        // Access and update another element
        // let resultElement = document.getElementById("result");
        // resultElement.innerHTML = "<b>Check console for output!</b>";

        // --- 6️⃣ ACCESSING OBJECT ELEMENTS ---
        const mobile = {
            brand: "Samsung",
            model: "Galaxy S21",
            price: 50000
        };

        console.log("Brand:", mobile.brand);  // Dot notation
        console.log("Model:", mobile["model"]); // Bracket notation
