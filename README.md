# sumanp14.github.io
We will simulate the searching of a user record by email address, and the result of that search will be displayed in the second page.

DETAILS: The challenge consists of building a webpage, that provides a user interface to enter in a search for an email address. We will then make a request to an api endpoint to retrieve the record for the searched email address. For example, if the user enters in the search field “doesmith@example.com” then we will make a request in the following manner to the API: https://ltv-data-api.herokuapp.com/api/v1/records.json?email=doesmith@example.com

Please note the query string parameter in the URL that passes in the email address to lookup. Depending on the email address searched(refer to the data set in the API for all possible valid email addresses that can be searched on), the response will either be an empty array, if it finds no matching email address, or a json response in the following manner:

[ { email: "doesmith@example.com", first_name: "Dow", last_name: "Smith", description: "Lorem Ipsum Dolor", address: "123 Chocolate Ave", phone_numbers: [ "2125551234", "2125551235", "2125551236" ], relatives: [ "Jane Smith", "Jon Smith" ] } ]

I will present a loading spinner while the result is being fetched and then present the second page per the spec with the data provided. If no data is returned, we indicate this to the user with the specified 0 results screen and prompt them to search again. We will also be required to do the appropriate validations on the user input as shown in the design spec.
